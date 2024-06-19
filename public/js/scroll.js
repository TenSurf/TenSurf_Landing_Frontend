const url = window.location.href;
const hashIndex = url.indexOf("#");
if (hashIndex > -1) {
  const elementId = url.substring(hashIndex + 1);
  console.log(elementId);
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
} else {
  window.scrollTo(0, 0);
}
