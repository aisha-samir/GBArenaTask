// import React, { useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon2 from 'react-native-vector-icons/FontAwesome';
// import Icon3 from 'react-native-vector-icons/AntDesign';
// import Home from '../Screens/Home'
// import Settings from '../Screens/Settings'
// import Notifications from '../Screens/Notifications'
// import Customers from '../Screens/Customers'
// import { calcHeight, calcWidth } from '../Config/Dimension';
// import AppStyles from '../Config/styles'




// function BottomTabNavigation() {

//     const Tab = createBottomTabNavigator();




//     return (

//         <Tab.Navigator
//             tabBarOptions={{ showLabel: false }}
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size, }) => {
//                     let iconName;
//                     if (route.name === 'Home') {
//                         iconName = "home"
//                         return <Icon3 name={iconName} size={35} color={color} />;
//                     } else if (route.name === 'Customers') {
//                         iconName = 'contacts';
//                         return <Icon3 name={iconName} size={35} color={color} />
//                     }

//                     else if (route.name === 'Notifications') {
//                         iconName = 'notifications-outline';
//                         return <Icon name={iconName} size={35} color={color} />;
//                     }
//                     else if (route.name === 'Settings') {
//                         iconName = 'md-settings-outline';
//                         return <Icon name={iconName} size={35} color={color} />
//                     }


//                 },
//             })}
//             tabBarOptions={{
//                 activeTintColor: AppStyles.Color.DARK_THEM,
//                 inactiveTintColor: AppStyles.Color.TEXT_GRAY,
//                 showLabel: false,
//                 style: {
//                     backgroundColor: '#F5F6FA', height: calcHeight(65), paddingHorizontal: calcWidth(45),
//                     elevation: 5
//                 }
//             }}
//             initialRouteName={"Home"}>
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Customers" component={Customers} />
//             <Tab.Screen name="Notifications" component={Notifications} />
//             <Tab.Screen name="Settings" component={Settings} />
//         </Tab.Navigator>

//     );
// };



// export default BottomTabNavigation;

