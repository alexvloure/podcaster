import { useLocation } from 'react-router-dom';
import { LoadingSpinner } from './icons/LoadingSpinner';
import { useContext, useEffect } from 'react';
import { LoadingContext } from '@/context/LoadingContext';
import { useIsFetching } from '@tanstack/react-query';

export const LoadingIndicator: React.FC = () => {
  const location = useLocation();
  const { loadingIndicator, setLoadingIndicator } = useContext(LoadingContext);
  const isFetching = useIsFetching();

  useEffect(() => {
    if (isFetching === 0) {
      setLoadingIndicator(false);
    } else {
      setLoadingIndicator(true);
    }
  }, [isFetching, location, setLoadingIndicator]);

  if (!loadingIndicator) return null;

  return <LoadingSpinner />;
};
