import Cookies from "js-cookie";

const token_name = "tensurftoken";

export const setCookie = (
  token: string,
  expirationDays: number = 365
): void => {
  if (typeof window !== "undefined") {
    const date = new Date();
    const time = date.getTime();
    const expireTime = time + expirationDays * 24 * 3600 * 1000;
    date.setTime(expireTime);
    Cookies.set(token_name, token, {
      expires: date,
      domain:
        process.env.NODE_ENV === "production"
          ? "tensurf.ai"
          : window.location.hostname,
    });
  }
};

export const removeCookie = (): void => {
  if (typeof window !== "undefined") {
    Cookies.remove(token_name);
  }
};

export const getCookie = (): string | undefined => {
  if (typeof window === "undefined") return "";
  return Cookies.get(token_name);
};

export const isLoggedIn = (): boolean => {
  return !!getCookie();
};
