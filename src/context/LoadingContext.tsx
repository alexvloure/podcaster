import { createContext } from 'react';

type LoadingContextProps = {
  loadingIndicator: boolean;
  setLoadingIndicator: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextProps>({
  loadingIndicator: false,
  setLoadingIndicator: () => {},
});
