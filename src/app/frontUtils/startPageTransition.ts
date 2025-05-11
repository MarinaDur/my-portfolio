export function startPageTransition(color: string) {
  const body = document.querySelector("body");
  if (body) {
    body.style.setProperty("--page-transition-color", color); // 👈 Set the variable
    body.classList.add("page-transition");
    body.classList.add("page-content-hidden"); // hide and blur the content
    body.classList.remove("page-content-visible");
  }
}
