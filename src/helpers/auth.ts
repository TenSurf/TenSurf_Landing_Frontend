import Cookies from "js-cookie";

export const token_name = "ts_token";
const legacy_token = "tensurftoken";

export const setCookie = (token: string): void => {
  if (typeof window !== "undefined") {
    Cookies.set(token_name, token, {
      domain: ".tensurf.ai",
      expires: 30,
      secure: true,
      sameSite: "lax",
    });
  }
};

export const removeCookie = (): void => {
  if (typeof window !== "undefined") {
    Cookies.remove(token_name, { domain: ".tensurf.ai" });
    Cookies.remove(token_name);
    Cookies.remove(legacy_token);
    Cookies.remove(legacy_token, { domain: "tensurf.ai" });
    Cookies.remove(legacy_token, { domain: ".tensurf.ai" });
  }
};

export const getCookie = (): string | undefined => {
  if (typeof window === "undefined") return "";
  return Cookies.get(token_name) || Cookies.get(legacy_token);
};

export const isLoggedIn = (): boolean => {
  return !!getCookie();
};
