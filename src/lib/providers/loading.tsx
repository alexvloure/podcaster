import { LoadingContext } from '@/context/LoadingContext';
import { useState } from 'react';

export const LoadingProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  return (
    <LoadingContext.Provider value={{ loadingIndicator, setLoadingIndicator }}>
      {children}
    </LoadingContext.Provider>
  );
};
