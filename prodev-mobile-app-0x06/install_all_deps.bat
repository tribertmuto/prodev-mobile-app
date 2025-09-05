@echo off
echo Installing all required dependencies...
call npm install
echo.
echo Installing TypeScript types...
call npm install --save-dev @types/react @types/react-native @types/node @types/react-navigation @types/react-navigation-stack
echo.
echo Installation complete!
