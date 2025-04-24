
function toggleLang() {
  const body = document.body;
  if (body.dir === "rtl") {
    body.dir = "ltr";
    body.lang = "en";
  } else {
    body.dir = "rtl";
    body.lang = "ar";
  }
}
