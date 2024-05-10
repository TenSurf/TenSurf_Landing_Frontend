import { createContext, useContext } from 'react';
// import { type KeyedMutator } from 'swr';

interface IReloadRequestType<T> {
  // mutate: KeyedMutator<T>;
  data?: T;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  haveNextPage: boolean;
  count: number;
}
export const ReloadRequestContext = createContext<IReloadRequestType<any>>({
  // mutate: async () => {},
  data: undefined,
  setSize: () => {},
  haveNextPage: false,
  count: 0
});

const useReloadRequest = <T>() => {
  const ctx: IReloadRequestType<T> = useContext(ReloadRequestContext);
  return ctx;
};

export default useReloadRequest;
