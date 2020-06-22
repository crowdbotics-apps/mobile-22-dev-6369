import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView6332Navigator from '../features/CalendarView6332/navigator';
import Messaging6331Navigator from '../features/Messaging6331/navigator';
import EmailAuth6330Navigator from '../features/EmailAuth6330/navigator';
import CalendarView6321Navigator from '../features/CalendarView6321/navigator';
import EmailAuth6319Navigator from '../features/EmailAuth6319/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CalendarView6332: { screen: CalendarView6332Navigator },
Messaging6331: { screen: Messaging6331Navigator },
EmailAuth6330: { screen: EmailAuth6330Navigator },
CalendarView6321: { screen: CalendarView6321Navigator },
EmailAuth6319: { screen: EmailAuth6319Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
