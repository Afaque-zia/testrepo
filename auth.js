const register = function(userName){
    console.log(`User ${userName} has been registeded`)
}

const login = function(username, password){
    console.log(`User ${username} has Logged In and the password is ${password}.`)
}
module.exports = {
    register,
    login
}