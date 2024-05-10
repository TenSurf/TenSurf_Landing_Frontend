/* eslint-disable */
import useIsFirstRender from './useIsFirstRender';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type valueType = string[] | string | number | boolean;
const useQueryParams = <T extends valueType>(
  name: string,
  defaultValue: valueType
): [T | null, (value: T | null) => void] => {
  const isValueArray = Array.isArray(defaultValue);
  const [param, setParam] = useState<T | null>(
    (isValueArray
      ? defaultValue
      : typeof defaultValue === 'boolean'
        ? false
        : typeof defaultValue === 'number'
          ? 0
          : '') as T
  );
  const router = useRouter();
  const isFirst = useIsFirstRender();
  const searchParams = useSearchParams();

  const setValue = (value: T | null) => {
    setParam(value);
    router.push({
      query: {
        ...router.query,
        [name]: isValueArray && value ? (value as []).join(',') : value
      }
    });
  };

  useEffect(() => {
    const value = searchParams?.get(name);
    if (!isFirst && param !== value)
      setParam(
        value
          ? typeof defaultValue === 'boolean'
            ? value === 'true'
            : typeof defaultValue === 'number'
              ? (parseInt(value) as any)
              : isValueArray
                ? value.split(',')
                : value
          : null
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.get(name)]);

  return [param, setValue];
};

export default useQueryParams;
