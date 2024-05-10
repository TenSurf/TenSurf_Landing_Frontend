export const inputCurrencyFormatter = (value: string | undefined) => {
  if (value?.toString()?.includes('.')) {
    let decimal = value?.toString()?.split('.')[1];
    decimal = decimal?.substring(0, 2);
    const int = Number(value?.toString()?.split('.')[0])?.toLocaleString();
    if (decimal) {
      return int + '.' + decimal;
    } else if (decimal === '0') {
      return int + '.' + '0';
    } else {
      return int + '.';
    }
  } else if (value) {
    return Number(value)?.toLocaleString();
  } else {
    return '';
  }
};
