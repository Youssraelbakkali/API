const express = require('express');
const app = express();

//List Users


const users = [];
for(let i =0; i < 1; i++){
    users.push({
       
        firstname:'youssra',
        lasrname:'el bakkali',
        email: 'youssra.elbakkali@gmail.com'
    });
    users.push({
       
        firstname:'wafae',
        lasrname:'el gouzi',
        email: 'wafae.elgouzi@gmail.com'
    });
    users.push({
       
        firstname:'lamiae',
        lasrname:'merizak',
        email: 'lamiae.merizak@gmail.com'
    });


}
//console.log(users);

//Créer la version notre api
const versionApi = '/api/v1';
  

//GET/api/v1/users
app.get('/' , (req,res) => {
    res.json(
        {
            data: users
    })
});
app.listen(3000,()=>console.log('Listening on port 3000') ); 

//GET/api/v1/users/:id
app.get('${versionApi}/users/:id',(req,res)=> {


})

//POST/api/v1/users
app.post('${versionApi}/users',(req,res)=>{
    const data = req.body;
    users.push(data);
    res.json({
        index: users.length,
        data: users[users.length-1]
    })
    
});
//PUT/api/v1/users/:id
app.put('${versionApi}/users/:id',(req,res)=>{
    const id = req.params.id - 1;
    const data = req.body;
    users[id]=Object.assign(users[id],data);
    res.json({
        data: users[id]
    })

});
//DELETE/api/v1/users/:id
