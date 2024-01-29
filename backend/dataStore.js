//file system module
const fs = require('fs');
// fs.readFile('readm.txt',function(err,data){
// console.log(data)
// })
function adduser (username,age){
    const dataStruc = {
        username : null,
        age:null
    }
    const data = fs.readFileSync('datasource.json','utf-8');
    let newData = JSON.parse(data)
    let prop = Object.create(dataStruc);
    prop.username = username
    prop.age = age
    newData.push(prop)
    // write 
    fs.writeFileSync('datasource.json',JSON.stringify(newData) ); 
}

function getAllUsers (){
    const data = fs.readFileSync('datasource.json','utf-8');
    return data
}
module.exports = {
    adduser,
    getAllUsers
}