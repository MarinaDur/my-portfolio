import sleep from "./sleepFunction";

export async function animateOut() {
  await sleep(50); // wait tiny bit to make sure new page mounted
  const body = document.querySelector("body");
  body?.classList.add("page-transition-start");

  await sleep(700); // wait for the animation to complete
  body?.classList.remove("page-transition"); // Remove overlay
  body?.classList.remove("page-transition-start");

  body?.classList.remove("page-content-hidden"); // 👈 Remove hidden
  body?.classList.add("page-content-visible");
}
