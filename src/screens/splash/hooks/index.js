import ScreenNames from '../../../constants/screenNames';
import {reset} from '../../../navigation/rootNavigation';

export function useHooks() {
  const handleSplash = () => {
    reset(ScreenNames.Home);
  };
  return {handleSplash};
}
