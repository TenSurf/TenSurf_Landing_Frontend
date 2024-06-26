const setCookie = (token, expirationDays = 365) => {
  if (typeof window !== "undefined") {
    const date = new Date();
    const time = date.getTime();
    const expireTime = time + expirationDays * 24 * 3600 * 1000;
    date.setTime(expireTime);
    document.cookie = `tensurftoken=${token}; expires=${date.toUTCString()}; path=/;`;
  }
};

const removeCookie = () => {
  if (typeof window !== "undefined") {
    setCookie("", -1);
  }
};

const getCookie = () => {
  var name = "tensurftoken" + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  console.log(name, decodedCookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
};

console.log(getCookie(), "cccoo");
if (getCookie()) {
  console.log("inja");
  const auths = document.getElementsByClassName("authentication");
  for (let item of auths) {
    item.style.display = "none";
  }

  const noauths = document.getElementsByClassName("not-authentication");
  for (let item of noauths) {
    item.style.display = "block";
  }
} else {
  console.log("onja");
  const auths = document.getElementsByClassName("authentication");
  console.log(auths, "auths");
  for (let item of auths) {
    item.classList.remove("hidden");
    item.style.display = "block";
    console.log(item, "block");
  }

  const noauths = document.getElementsByClassName("not-authentication");
  console.log(noauths, "noauths");
  for (let item of noauths) {
    item.classList.add("hidden");
    item.style.display = "none !important";
    console.log(item, "none");
  }
}
