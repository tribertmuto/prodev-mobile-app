@echo off
echo Installing project dependencies...
call npm install --save @expo/vector-icons @react-navigation/native @react-navigation/native-stack react-native-gesture-handler react-native-safe-area-context react-native-screens

echo.
echo Installing dev dependencies...
call npm install --save-dev @types/react @types/react-native @types/react-navigation

echo.
echo Installation complete! Run the app with: npm start
pause
