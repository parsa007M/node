/* 1st - Node JS Core Module Example: */

// http is one of the our core module!
// That's why, you do not need to download it to your project
// If you are using Node JS, it is already included! 

var http = require('http');

http.createServer(function(req,res){ // Call back function with 2 Arguments
    // req: Client Request
    // res: Server Response 
        res.end('Hello Core Modules'); // Server response
}).listen(1025); // Listen your port from "1025"number

console.log('Server is running...:');