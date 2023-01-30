import { useNavigation } from '@react-navigation/native';

import { AllScreensProps } from '../helpers/navigation';

export function useNavigate() {
  const navigation = useNavigation<AllScreensProps['navigation']>();

  const onNavigateToTabs = () => {
    navigation.navigate('Tabs');
  };

  const onNavigateToContacts = () => {
    navigation.navigate('All');
  };

  const onNavigateToFavorites = () => {
    navigation.navigate('Favorites');
  };

  return {
    onNavigateToTabs,
    onNavigateToContacts,
    onNavigateToFavorites,
  };
}
