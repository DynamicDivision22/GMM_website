# GSMM Website
The Graduate Student Maker's Market website (Capstone 2023)

# Notes
This repository is using a dummy .env file for security reasons. Please get the missing file from the sponsors of this project. You will also need to update your repository GitHub secrets to include your server's hostname, RSA key, etc. if you would like automated deployments to work. For more information about how deployments work, please read: https://docs.github.com/en/actions/deployment/about-deployments/deploying-with-github-actions

# Setting Up MySQL Database
There is no cloud based server or database currently running but the following outlines how to set up a basic database for testing purposes.

1.) Download installer from https://dev.mysql.com/downloads/installer/
2.) Run installer and select either the full setup type or a custom setup with the mysql server and mysql workbench
3.) Config Type: Development -> Next -> Next -> Set Personal Root Password -> Add User (DB Admin) (Fill with env file info or set new and create new env)(localhost recommended when server is for local use)(do not use same password as root password) -> OK -> Next -> Next -> Next -> Execute -> Finish
4.) Open MySQL Workbench -> click local instance -> open sql script (makermarket.sql) -> lightning bolt to execute

# Running Website w/ Node.js
In terminal from folder /GMM_website run:
1.) npm install dotenv (once to install dependancy)
2.) node main.js (to run website)
3.) http://localhost:3001/ (in browser to view website)
