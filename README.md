# login-app
<!--
<!-- set up node --/>
npm init --yes

<!-- set up node dependencies--/>
npm i express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator@5.3.1

<!-- set up node dev-dependencies--/>
npm i nodemon -D

<!-- start server using dev script in package.json --/>
npm run dev

<!-- install MySQL https://www.mysql.com/ or XAMPP from https://www.apachefriends.org/--/>

net start MySQL80

net stop MySQL80

ER_NOT_SUPPORTED_AUTH_MODE

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourPassword';
FLUSH PRIVILEGES;

mysql -u root -p
-->
<!-- Architecture -->
<h2 align="center"><b>Choladito's App</b></h3>

Welcome to my Nodejs & Mysql, App project!

This is a simple project for JavaScript development with Nodejs, express, MysSQL & some more middlewares.

<h3 align="center"><b>Getting Started</b></h3>

To run this project as developer in your machine you need Nodejs & Mysql so make sure you get them.

Clone the repository

`git clone https://github.com/Cholado/login-app.git`

Start your MySQL

If you are on windows and it is not running already use `net start MySQL80`

Open MySQL console on a terminal as root

`mysql -u root -p`

Insert your root password if needed

Now to create the database

Go to the `database` folder and run the `db.sql` file

Or copy paste the contents of it in the MySQL console

Close the MySQL console `quit`

You shall be ready to run the app by typing `npm run dev` in the console

Open your web browser and connect to `http://localhost:4000/` to use the App

Click on the start button, register in sign up, manage your items, log out, sign in, etc.