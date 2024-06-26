import axios, { type AxiosResponse } from "axios";
import { jsonToQueryString } from "./functions";
import { type GetServerSidePropsContext } from "next";
import { getCookie, removeCookie } from "./auth";

export const backendUrl = process.env.NEXT_PUBLIC_API_HUB_URL;

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const sendRequest = <T = Record<string, any>>(
  url: string,
  method: HttpMethod = HttpMethod.GET,
  params?: Record<string, any>,
  hasFile: boolean = false,
  bearerToken?: string | null
): Promise<AxiosResponse<T>> => {
  let token: string | null;

  if (bearerToken) {
    token = bearerToken;
  } else {
    token = getCookie();
  }

  const headers: Record<string, string> = {
    "Content-Type": hasFile ? "multipart/form-data" : "application/json",
  };

  if (token) {
    headers.Authorization = "Token " + token;
  }

  const options: Record<string, any> = {
    headers,
    method,
  };

  if (params) {
    if (method === HttpMethod.GET) {
      url += Object.keys(params).length ? jsonToQueryString(params) : "";
    } else {
      options.body = params;
    }
  }

  return new Promise((resolve, reject) => {
    axios({
      ...options,
      url: url.startsWith("http") ? url : backendUrl + url,
      data: params,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        if (err.response?.data) {
          if (err.response.status === 401) {
            window.location.replace("/signin");
            removeCookie();
          }
        }
        reject(err);
      });
  });
};

export const serverSideFetch = async <T>(
  context: GetServerSidePropsContext,
  url: string,
  params?: Record<string, any>
) => {
  try {
    const res = await sendRequest<T>(url, HttpMethod.GET, params, false);
    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    return {
      props: {
        data: null,
      },
    };
  }
};
