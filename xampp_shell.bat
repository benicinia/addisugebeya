@echo off
echo.

set NodePackagesPath=E:\Terminal\Addisu-Gebeya\ // This is my path, you can edit them

set Path=%NodePackagesPath%\node_modules\.bin;%PATH%
set Path=%NodePackagesPath%;%PATH%

set NODE_PATH=%NodePackagesPath%\node_modules;%NODE_PATH%
set NODE_ENV=production

echo Starting Terminal server
echo. 
echo. 
echo. 

npm start
