const { async } = require("regenerator-runtime")

console.log('module.js')

async function start(){
    return  await Promise.resolve() 
}

start()