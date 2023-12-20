import routes from '~routes';
import {reset} from '~navigation/rootNavigation';

export function useHooks() {
  const handleSplash = () => {
    reset(routes.bottomTab);
  };
  return {handleSplash};
}
