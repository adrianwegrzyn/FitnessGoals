import {Navigation} from "react-native-navigation";
import { Dimensions } from 'react-native'

//import windows
import App from './App';
import Drawer from './src/Drawer'
import Chat from './src/chat/components/Chat'
import ReviewsOptions from './src/reviews/ReviewsOptions'
import DietReviews from './src/reviews/dietReviews/DietReviews'


Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Drawer', () => Drawer);
Navigation.registerComponent('Chat', () => Chat);
Navigation.registerComponent('ReviewsOptions', () => ReviewsOptions);
Navigation.registerComponent('DietReviews', () => DietReviews);



const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait']
    },
    topBar: {
      elevation: 0,
      visible: false,
      drawBehind: true,
      animate: false,
      buttonColor: 'white',
      background: {
        color: 'transparent'
      }
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'Drawer',
            fixedWidth: width
          }
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  id: 'appId',
                  name: 'App',

                  options: {
                    topBar: {

                    }
                  }
                }
              },
            ]
          }
        }
      },

    }

  });
});