import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; //для роутинга
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //для роутинга

import { createDrawerNavigator } from '@react-navigation/drawer' // Сплывающее боковое меню
import {Ionicons} from '@expo/vector-icons'

// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import {store} from './store/redux/store';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoritesScreen';





const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401'},
           headerTintColor: 'white',
           sceneContainerStyle: {backgroundColor: '#3f2f25'},
           drawerContentStyle: { backgroundColor: '#351401' },
           drawerInactiveTintColor: 'white',
           drawerActiveTintColor: '#351401',
           drawerActiveBackgroundColor: '#e4baa1',
    }}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen} 
        options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => (
        <Ionicons name="list" color={color} size={size} />
        )
      }} />
      <Drawer.Screen name='Favorites' component={FavoriteScreen} 
      options = {{
        drawerIcon: ({color, size}) => (
          <Ionicons name="star" color={color} size={size} />
        )
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerStyle: { backgroundColor: '#351401'},
           headerTintColor: 'white',
           contentStyle: {backgroundColor: '#3f2f25'},
        }}>
          <Stack.Screen 
            name="Drawer" 
            component= {DrawerNavigator} 
            options = {{
             
             headerShown: false
           
          }}/>
          <Stack.Screen name="MealsOverview" component = {MealsOverviewScreen}
            // options={({route, navigation}) => {  //динамеческий title например при роутинге
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
            />
          <Stack.Screen name="MealDetail" component = {MealDetailScreen} options={{
            title: 'About the Meal'
          }} /> 

        </Stack.Navigator>
       
      </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});


//начало глобально 
//  скачать nodejs
// npm install -g expo-cli

// cd в папку куда нужно
// expo init RNDraw (название проекта) 
// и выбираем первый blank



// npm install @react-navigation/native  для роутинга
// npx expo install react-native-screens react-native-safe-area-context


//expo install @react-navigation/native-stack

// расширяем
//npm install @react-navigation/drawer
//expo install react-native-gesture-handler react-native-reanimated


// исправление бага
//npm install react-native-reanimated@2.9.1

// в файле babel.config.js
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: ['react-native-reanimated/plugin'
//     ]
//   };
// };

// npx expo -c


// Redux
// npm install @reduxjs/toolkit react-redux
























//Git

// …or create a new repository on the command line
// echo "# RNMenu" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/lantemir/RNMenu.git
// git push -u origin main


// …or push an existing repository from the command line
// git remote add origin https://github.com/lantemir/RNMenu.git
// git branch -M main
// git push -u origin main
// …or import code from another repository
// You can initialize this repository with code from a Subversion, Mercurial, or TFS project.