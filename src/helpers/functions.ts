/* eslint-disable */
export const convertNumberToEn = (replaceString: string, returnType: 'string' | 'number') => {
  const find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let regex;
  find.map((_, i) => {
    regex = new RegExp(find[i], 'g');
    replaceString = replaceString.replace(regex, replace[i]);
  });
  if (returnType == 'number') return parseInt(replaceString);
  else return replaceString;
};

export const convertDMSToDD = (degree: number, minute: number, second: number) =>
  degree + minute / 60 + second / (60 * 60);

export function showPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const jsonToQueryString = (json: Record<string, string>): string => {
  return (
    '?' +
    Object.keys(json)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
};
