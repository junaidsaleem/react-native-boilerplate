/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '~routes';
import Home from '~screens/home';
import Contacts from '~screens/contacts';
import Profile from '~screens/profile';
import {responsiveFontSize} from '~utils/responsive';
import useColorStore from '~store/useColorStore';
import TabIcon from '~components/TabIcon';
const BottomTabStack = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const tabIconSize = responsiveFontSize(25);
  const {colors} = useColorStore();
  return (
    <BottomTabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.background},
        tabBarActiveTintColor: colors.text,
        allowFontScaling: true,
      }}>
      <BottomTabStack.Screen
        name={routes.home}
        component={Home}
        options={() => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => {
            return (
              <TabIcon
                iconName="home"
                // iconType="feather"
                size={tabIconSize}
                color={color}
                focused={focused}
              />
            );
          },
        })}
      />
      <BottomTabStack.Screen
        name={routes.contacts}
        component={Contacts}
        options={() => ({
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color, focused}) => {
            return (
              <TabIcon
                iconName="users"
                iconType="feather"
                size={tabIconSize}
                color={color}
                focused={focused}
              />
            );
          },
        })}
      />
      <BottomTabStack.Screen
        name={routes.profile}
        component={Profile}
        options={() => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) => {
            return (
              <TabIcon
                iconName="user"
                iconType="feather"
                size={tabIconSize}
                color={color}
                focused={focused}
              />
            );
          },
        })}
      />
    </BottomTabStack.Navigator>
  );
};

export default BottomTabNavigation;
