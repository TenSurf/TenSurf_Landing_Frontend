import Cookies from "js-cookie";

export const token_name = "tensurftoken";

export const setCookie = (token: string): void => {
  if (typeof window !== "undefined") {
    const domain = window.origin.includes("localhost") ? "localhost" : "tensurf.ai";
    Cookies.set(token_name, token, {
      domain,
    });
  }
};

export const removeCookie = (): void => {
  if (typeof window !== "undefined") {
    Cookies.remove(token_name);
    Cookies.remove(token_name, { domain: "tensurf.ai" });
  }
};

export const getCookie = (): string | undefined => {
  if (typeof window === "undefined") return "";
  return Cookies.get(token_name);
};

export const isLoggedIn = (): boolean => {
  return !!getCookie();
};
