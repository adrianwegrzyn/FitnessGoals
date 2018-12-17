import {Navigation} from "react-native-navigation";
import { Dimensions } from 'react-native'

//import windows
import App from './App';
import Drawer from './src/Drawer'
import Chat from './src/chat/components/Chat'
import ReviewsOptions from './src/reviews/ReviewsOptions'
import DietReviews from './src/reviews/dietReviews/DietReviews'
import Informations from './src/informations/Informations'

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Drawer', () => Drawer);
Navigation.registerComponent('Chat', () => Chat);
Navigation.registerComponent('ReviewsOptions', () => ReviewsOptions);
Navigation.registerComponent('DietReviews', () => DietReviews);
Navigation.registerComponent('Informations', () => Informations);



const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait']
    },
    topBar: {
      elevation: 0,
      //visible: false,
      //drawBehind: true,
      animate: false,
      buttonColor: 'white',
      background: {
        color: 'transparent'
      },
      title: {
        text: 'Fitness Goals',
        alignment: 'center'

      },
      rightButtons: {
        id: 'saveBtn',
        text: 'Save'
      },
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

      navigationButtonPressed({buttonId}) {
        if (buttonId === 'cancelBtn') {
          Navigation.dismissModal(this.props.componentId);
        } else if (buttonId === 'saveBtn') {
          alert('saveBtn');
        }
      }


    }

  });

});

