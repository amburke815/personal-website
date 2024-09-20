# personal-website
My personal website, as well as a framework for building extensible websites for others. Developed with friends
 
# To run as a developer
<ol>
    <li><code>echo "MONGO_PW=<i>???</i>" &gt; .env</code> where <i>???</i> is your MongoDB connection password from the MongoDB Atlas website</li>
    <li><code>npm install</code> to fetch dependencies</li>
    <li><code>node ./backend/server.js</code></li>
    <li><code>cd ./frontend</code></li>
    <li><code>npm run serve</code></li>
</ol>

You may also need to run <code>vue add babel</code> from within the frontend directory if the dependency is not automatically installed.
When making changes to the <b>backend</b>, you must ctrl + c to end the process and restart the server with <code>node ./backend/server.js</code>.
When making changes to the <b>frontend</b>, they will be reflected on the website when running on a local server. 
