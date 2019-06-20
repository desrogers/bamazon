# bamazon
bamazon is a storefront command-line Node.js app inspired by Amazon.

## DISCLAIMER
If bamazon blows up your computer, loses your job or just deletes all your purchase history, I am NOT liable for anything.

That said, bamazon hasn't disappointed me yet.

## Screenshots and Screencasts
Screenshot of the 0.1.1 release  

[![bamazon Screenshot](https://i.gyazo.com/cc897f1d47f0f63d682ea8da2f57adb9.png)](https://gyazo.com/cc897f1d47f0f63d682ea8da2f57adb9)

Screencast of bamazon's 'Customer' mode:  
* [Release (2019-04-05)](https://drive.google.com/file/d/1aooTCGbsGDN2hem4IcKyRL0sVU2YdqBn/view)

## Installation
1. Being that bamazon is a node app you have the install node.js and MySQL. For instructions see:  
[How to Install and Use node.js and npm on Mac and Windows](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)

[Download MySQL Installer](https://dev.mysql.com/downloads/installer/)

- Clone or download the repo from Github.

2. Navigate into the bamazon-app repository folder
3. Install package dependencies
```
npm install
```  

3. Login to MySQL client, entering the password for 'root' chosen during the MySQL installation when prompted.
```
$ mysql -u root -p
```

4. Run the script it the repository root folder to create and populate the database.
```
mysql> source schema.sql;

mysql> exit
```

5. Update mysql connection password in `bamazonCustomer.js`.

## Usage
```
node bamazonCustomer.js
```

## Planned Features
* Add the option to quit at prompts in Customer mode
* Manager mode
* Supervisor mode

## Bugs and Feedback
* Report bugs in the [issue tracker](https://github.com/dezrogers/bamazon-app/issues) on github.
* Clone, fix, and then send me a pull request, if you're feeling generous.
* If you have any questions, or would like to discuss bamazon, contact me [here](https://dezrogers.com).

## Credits
Thanks to James Neese for his contributions to the database schema and providing other resources during the beginning phase of bamazon's creation.