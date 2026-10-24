import { useSyncExternalStore } from "react";

export const BUG_IDS = [1, 2, 3, 4, 5] as const;
export type BugId = (typeof BUG_IDS)[number];

type BugHuntState = {
  found: BugId[];
  /** The visitor closed the "all caught" toast, so it never shows again. */
  dismissed: boolean;
};

const STORAGE_KEY = "bug-hunt-v1";
const EMPTY: BugHuntState = { found: [], dismissed: false };

let state = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function readStorage(): BugHuntState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<BugHuntState>;
    const found = (parsed.found ?? []).filter((id): id is BugId =>
      (BUG_IDS as readonly number[]).includes(id),
    );
    return { found, dismissed: parsed.dismissed === true };
  } catch {
    return EMPTY;
  }
}

function ensureLoaded() {
  if (!loaded) {
    state = readStorage();
    loaded = true;
  }
}

function update(next: BugHuntState) {
  state = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private mode or storage blocked — progress just won't survive a reload.
  }
  listeners.forEach((listener) => listener());
}

function onStorage(e: StorageEvent) {
  if (e.key !== STORAGE_KEY) return;
  state = readStorage();
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  ensureLoaded();
  listeners.add(listener);
  if (listeners.size === 1) window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  ensureLoaded();
  return state;
}

// The server has no localStorage, so pages are prerendered with no bugs found.
function getServerSnapshot() {
  return EMPTY;
}

export function catchBug(id: BugId) {
  if (state.found.includes(id)) return;
  update({ ...state, found: [...state.found, id] });
}

export function dismissWin() {
  update({ ...state, dismissed: true });
}

export function useBugHunt() {
  const { found, dismissed } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const count = found.length;
  return {
    found,
    count,
    total: BUG_IDS.length,
    showWin: count === BUG_IDS.length && !dismissed,
  };
}
