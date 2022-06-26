# login-app

<!-- set up node -->
npm init --yes

<!-- set up node dependencies-->
npm i express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator

<!-- set up node dev-dependencies-->
npm i nodemon -D

<!-- start server using dev script in package.json -->
npm run dev

<!-- install MySQL https://www.mysql.com/ or XAMPP from https://www.apachefriends.org/-->

net start MySQL80

net stop MySQL80

mysql -u root -p