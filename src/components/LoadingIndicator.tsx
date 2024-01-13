import { useLocation } from 'react-router-dom';
import { LoadingSpinner } from './icons/LoadingSpinner';
import { useEffect } from 'react';

export const LoadingIndicator: React.FC = () => {
  const location = useLocation();

  // useEffect(() => {
  //   const handleStartTransition = () => {
  //     // Handle the start of the transition
  //     console.log('Transition started');
  //   };

  //   const handleEndTransition = () => {
  //     // Handle the end of the transition
  //     console.log('Transition ended');
  //   };

  //   // Listen to React Router's history events
  //   const unlistenStart = history.listen(() => handleStartTransition());
  //   const unlistenEnd = history.listen(() => handleEndTransition());

  //   // Cleanup listeners when the component unmounts
  //   return () => {
  //     unlistenStart();
  //     unlistenEnd();
  //   };
  // }, [history]);

  useEffect(() => {
    console.log('route changed!');
  }, [location]);

  return <LoadingSpinner />;
};
