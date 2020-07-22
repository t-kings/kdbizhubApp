import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStack from '../routes/homeStack'

const screens={
    Home:{
        screen:HomeStack
    }
}
 
const TabNavigation = createBottomTabNavigator(screens);

export default createAppContainer(TabNavigation);