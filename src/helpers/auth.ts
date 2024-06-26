export const parseCookie = (str: string): Record<string, string> => {
  return str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc: Record<string, string>, v) => {
      if (v.length > 1) {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      } else {
        return {};
      }
    }, {});
};

export const setCookie = (
  token: string,
  expirationDays: number = 365
): void => {
  if (typeof window !== "undefined") {
    const date = new Date();
    const time = date.getTime();
    const expireTime = time + expirationDays * 24 * 3600 * 1000;
    date.setTime(expireTime);
    document.cookie = `tensurftoken=${token}; expires=${date.toUTCString()}; path=/;`;
  }
};

export const removeCookie = (): void => {
  if (typeof window !== "undefined") {
    setCookie("", -1);
  }
};

export const getCookie = (): string | null => {
  if (typeof window === "undefined") return "";
  var name = "tensurftoken" + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

export const isLoggedIn = (): boolean => {
  return !!getCookie();
};

export const getRedirectUrl = () => {
  if (typeof window !== "undefined") {
    const cookie = parseCookie(document.cookie);
    if (cookie.redirect) return cookie.redirect;
  }
  return null;
};

export const setRedirectUrl = (url?: string): void => {
  if (typeof window !== "undefined") {
    let cookie = `redirect=${url}; path=/;`;
    document.cookie = cookie;
  }
};
