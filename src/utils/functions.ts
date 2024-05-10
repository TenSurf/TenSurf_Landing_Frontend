import { toast } from 'sonner';
import moment from 'moment';
import { Time } from 'tensurf-lightweight-charts';

export function convertNumberToEn(replaceString: string, returnType: 'string' | 'number') {
  const find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let regex;
  for (let i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], 'g');
    replaceString = replaceString.replace(regex, replace[i]);
  }
  if (returnType === 'number') return parseInt(replaceString);
  else return replaceString;
}

export const catchRequestError = (error: any, hasAuth: boolean = true) => {
  if (error?.ErrorCode === 401 && window !== undefined && hasAuth) {
    window.location.href = '/signin';
  }

  if (error?.response) {
    toast.error(error?.response?.data?.detail as string);
  } else {
    toast.error('Error');
  }
};

export function convertUnixToHorzScaleItem(timestamp: number) {
  // Convert Unix timestamp to JavaScript Date object
  const date = new Date(timestamp * 1000);

  // Format the date as needed for the horizontal scale item
  const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ${padZero(
    date.getHours()
  )}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;

  return formattedDate;
}

function padZero(value: number) {
  return value < 10 ? `0${value}` : value;
}

export function decimalToFraction(decimal: number): string {
  let result = [1, 1];
  let store = Number.POSITIVE_INFINITY;

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      if (Math.abs(i / j - decimal) < store) {
        result = [i, j];
        store = Math.abs(i / j - decimal);
      }
    }
  }

  return result.join(':');
}

export const convert_to_degree_trend = (value: number) => {
  return value ? 30 * value + 90 : 90;
};

const startHour = 13;
const startMinute = 30;
const endHour = 21;
const endMinute = 0;

export function isCurrentTimeInRTH() {
  const nowUtc = moment.utc();
  const startTimeUtc = moment.utc().set({ hour: startHour, minute: startMinute });
  const endTimeUtc = moment.utc().set({ hour: endHour, minute: endMinute });
  return nowUtc.isBetween(startTimeUtc, endTimeUtc);
}

export function timestampToISOString(timestamp: Time | undefined) {
  if (!timestamp) return '';
  // Create a new Date object using the timestamp (in seconds)
  const date = new Date((timestamp as number) * 1000);

  // Use Date methods to get the components of the date/time
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  // Construct the ISO string format: YYYY-MM-DDTHH:MM:SSZ
  const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  return isoString;
}
