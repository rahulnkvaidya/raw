@echo off
::expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
::npm i axios font-awesome lodash native-base react-native-web react-native-webview @react-navigation/native @react-navigation/stack redux react-redux redux-thunk rpsnpm
md "store"
md "store\actions"
md "store\reducers"
md "App\components"
md "App\constants"
md "App\models"  
md "App\screens"
md "App\navigation"
echo. 2>App\navigation\appNavigator.js
