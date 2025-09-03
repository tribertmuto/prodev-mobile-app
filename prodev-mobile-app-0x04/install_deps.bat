@echo off
echo Installing dependencies...
call npm install --save react react-native expo-router react-native-safe-area-context react-native-screens
echo.
echo Installing dev dependencies...
call npm install --save-dev @types/react @types/react-native @types/node @babel/core @expo/config-plugins

echo.
echo Installation complete!
