// // NPM Module
// const color = require("cli-color");
// const auth = require('./auth')

// console.log(color.green('Hello This is faquee zia'))
// auth.register("Afaque Zia")
// auth.login("Afaque Zia", 'Ziaxltech@2584')

const path = require('path');

// console.log(__dirname)
// console.log("Folder Name:", path.dirname(__filename))
// File Name
// console.log("File Name:", path.basename(__filename))
// Extention Name
// console.log("Extention Name:", path.extname(__filename))
// parse
// console.log("Parse Mathod: ", path.parse(__filename))
// Join
// console.log("Join Mathod: ", path.join(__dirname, "order", 'app.js'))

const fs = require("fs")

// Make a Directory or Create a Folder

// fs.mkdir(path.join(__dirname, "/test"), (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Folder Created")
// })

//  Create a File

// fs.writeFile(path.join(__dirname, "test", 'test.txt'), "Hello Node\n" , (err)=>{
//     if(err){
//         throw err
//     }
//     fs.appendFile(path.join(__dirname, "test", "test.txt") , "More Data On Hello Node", (err)=>{
//         if(err){
//             throw err;
//         }
//        console.log("Data Added...") 
//     })
//     console.log("File Created Successfully")
// } )

//  Read a File

// fs.readFile(path.join(__dirname, "test", "test.txt"), "UTF-8", (err, data)=>{
//     if(err){
//         throw err;
//     }
//     const content = Buffer.from(data)
//     console.log(data)
// })

// Os Module 

const os = require("os");

// console.log('os.type:', os.type())
// console.log('os.platform :', os.platform())
// console.log(' CPU architecture :', os.arch())
// console.log(' CPU Details :', os.cpus())
// console.log(' CPU Memory Details :', os.freemem())
// console.log(' Uptime Details :', os.uptime())

// Evenet Listener

const myEmmet = require("events")

class Auth extends myEmmet{
    register(username){
        console.log(username)
        console.log("Registration Successfull...")
    }
}
const auth = new Auth();
auth.register("Afaque Zia")