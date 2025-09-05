@echo off
echo Updating dependencies...
call npm install
echo.
echo Installing TypeScript types...
call npm install --save-dev @types/react @types/react-native @types/node
echo.
echo Installation complete!
