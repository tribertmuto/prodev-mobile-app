@echo off
echo Installing expo-router and required dependencies...
call npm install expo-router@3.4.0
call npm install @react-navigation/native @react-navigation/native-stack
call npm install react-native-screens react-native-safe-area-context
call npm install --save-dev @types/react @types/react-native @types/react-navigation

echo.
echo Installation complete!
