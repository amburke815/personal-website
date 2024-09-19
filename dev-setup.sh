# clone the repo
git clone https://github.com/amburke815/personal-website.git

# setup node environment
npm init -y # makes a packagelock.json file to configure node env
npm install express mongoose cors dotenv 
npm install --save-dev nodemon # nodemon handles running the backend server
npm install -g axios # global install axios 

# setup mongoDB
# TODO

# setup vue
vue create client
cd client

# useful custom commands to run stuff
alias run-backend="npm run dev"
alias run-frontend="cd client && npm run serve"
