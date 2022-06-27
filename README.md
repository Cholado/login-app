# login-app

<!-- set up node -->
npm init --yes

<!-- set up node dependencies-->
npm i express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator@5.3.1

<!-- set up node dev-dependencies-->
npm i nodemon -D

<!-- start server using dev script in package.json -->
npm run dev

<!-- install MySQL https://www.mysql.com/ or XAMPP from https://www.apachefriends.org/-->

net start MySQL80

net stop MySQL80

ER_NOT_SUPPORTED_AUTH_MODE

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourPassword';
FLUSH PRIVILEGES;

mysql -u root -p