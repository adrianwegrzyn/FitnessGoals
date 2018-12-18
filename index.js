import {Navigation} from "react-native-navigation";
import { Dimensions } from 'react-native'

//import windows
import App from './App';
import Drawer from './src/Drawer'
import Chat from './src/chat/components/Chat'
import ReviewsOptions from './src/reviews/ReviewsOptions'
import DietReviews from './src/reviews/dietReviews/DietReviews'
import Informations from './src/informations/Informations'
import TodayTraining from './src/trainingPlan/TodayTraining'
import WeekTraining from './src/trainingPlan/WeekTraining'
import DietOptions from './src/diet/DietOptions'
import DietWeek from './src/diet/dietWeek/DietWeek'
import SelectedDay from './src/diet/dietWeek/SelectedDay'
import ShoppingList from './src/diet/shoppingList/ShoppingList'


Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Drawer', () => Drawer);
Navigation.registerComponent('Chat', () => Chat);
Navigation.registerComponent('ReviewsOptions', () => ReviewsOptions);
Navigation.registerComponent('DietReviews', () => DietReviews);
Navigation.registerComponent('Informations', () => Informations);
Navigation.registerComponent('TodayTraining', () => TodayTraining);
Navigation.registerComponent('WeekTraining', () => WeekTraining);
Navigation.registerComponent('DietOptions', () => DietOptions);
Navigation.registerComponent('DietWeek', () => DietWeek);
Navigation.registerComponent('SelectedDay', () => SelectedDay);
Navigation.registerComponent('ShoppingList', () => ShoppingList);




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
        color: '#3B5998'
      },
      title: {
        text: 'FitnessGoals',
        alignment: 'center',
        color: 'white'


      },
      // rightButtons: {
      //   id: 'saveBtn',
      //   text: 'Save'
      // },
    },
    statusBar: {
      backgroundColor: '#192F6A'
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

      // navigationButtonPressed({buttonId}) {
      //   if (buttonId === 'cancelBtn') {
      //     Navigation.dismissModal(this.props.componentId);
      //   } else if (buttonId === 'saveBtn') {
      //     alert('saveBtn');
      //   }
      // }


    }

  });

});

