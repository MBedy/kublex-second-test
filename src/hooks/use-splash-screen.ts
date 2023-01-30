import { useEffect } from 'react';

import { useNavigate } from './use-navigate';

const THREE_SECS_IN_MLS = 3000;

export function useSplashScreen() {
  const { onNavigateToTabs } = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigateToTabs();
    }, THREE_SECS_IN_MLS);

    return () => clearTimeout(timer);
  }, []);
}
