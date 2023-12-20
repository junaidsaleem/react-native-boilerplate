/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const TabIcon = ({color, iconName, iconType, focused, size}) => {
  return (
    <View
      alignItemsCenter
      style={{
        flex: 1,
        borderTopWidth: 3.5,
        // borderTopColor: !focused ? colors.appColor1 : colors.appBgColor1,
        justifyContent: 'center',
        marginTop: 0,
      }}>
      <Feather
        name={iconName}
        type={iconType}
        size={size}
        color={color}
        focused={focused}
      />
    </View>
  );
};

export default TabIcon;
