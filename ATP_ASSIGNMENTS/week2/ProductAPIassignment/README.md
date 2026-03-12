1.to create package.json in a folder-->npm init -y
2.change "type":module for import and exports
3.install and export express modules- mpm install express
   -downloads node_modules if it doesnt exist from express module
   -package-lock.json for future updates
4.create server.js
5. in server.js import express module
6. to assign a port number
7.create APIs
8. create request.http to test the response by sending request with rest client extension
9.install nodemon for auto server restart, from now we use ==>nodemon filename.js
                                           but it is better to stop server while writing program
10.while defining POST no gaps only one gap between content type and data
                              only post and put have body to create or update
   GET and DELETE requests do not support body of the request,so that these two requests can send data through endpoint.
11.since delete has no body we put id in url itself i.i.e: http://localhost:5000/users/1