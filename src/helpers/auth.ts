import { type NextApiRequestCookies } from 'next/dist/server/api-utils';

export const parseCookie = (str: string): Record<string, string> => {
  return str
      .split(';')
      .map(v => v.split('='))
      .reduce((acc: Record<string, string>, v) => {
        if (v.length > 1) {
          acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
          return acc;
        } else {
          return {};
        }
      }, {});
};

export const setToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    let cookie = `tensurftoken=${token}; path=/;`;
    const date = new Date();
    const time = date.getTime();
    const expireTime = time + Number(process.env.JWT_EXPIRATION_TIME);
    date.setTime(expireTime);
    cookie += ` expires=${date.toUTCString()};`;
    document.cookie = cookie;
  }
};

export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    document.cookie = 'tensurftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
};

export const getToken = (cookies?: NextApiRequestCookies): string | null => {
  if (cookies) {
    if (cookies.tensurftoken) {
      return cookies.tensurftoken;
    }
    return null;
  }
  if (typeof window !== 'undefined') {
    const cookie = parseCookie(document.cookie);
    if (cookie.tensurftoken) return cookie.tensurftoken;
  }
  return null;
};

export const getRedirectUrl = () => {
  if (typeof window !== 'undefined') {
    const cookie = parseCookie(document.cookie);
    if (cookie.redirect) return cookie.redirect;
  }
  return null
}

export const setRedirectUrl = (url?: string): void => {
  if (typeof window !== 'undefined') {
    let cookie = `redirect=${url}; path=/;`;
    const date = new Date();
    const time = date.getTime();
    const expireTime = time + Number(process.env.JWT_EXPIRATION_TIME);
    date.setTime(expireTime);
    cookie += ` expires=${date.toUTCString()};`;
    document.cookie = cookie;
  }
};
