const express =require('express')
const app =express()
port =3000
const users =[
    {username:"alice",age:25,email:"alice@gmail.com"},
    {username:"jhon",age:25,email:"jhon@gmail.com"},
    {username:"nikhil",age:25,email:"jhon@gmail.com"}
]
app.use(express.json())
app.get('/users',(req,res)=>{
    if(!req.query.user){
          return res.json({"message":"Usercannot be empty"})
    }
    const user =users.find(u=>u.username===req.query.user)
    if(user){
        return  res.json({"message":"User found","data":user})
    }
    else{
        return  res.json({"message":"User not found"})
     }
    
})

   

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})
