// import express from "express"
// import path from "path"
// import mongoose from "mongoose"
// import cookieParser from "cookie-parser"
// import jwt from "jsonwebtoken"
// import { register } from "module"
// import bcrypt from "bcrypt"
// const app = express()
// //app.set("view engine","ejs")

// mongoose.connect("mongodb://localhost:27017",{
//     dbName :"auth",
// }).then(()=> console.log("db connected"))
// .catch((e)=>console.log(e))
// //make schema
// const schema = new mongoose.Schema({
//     name : String,
//     email : String,
//     password : String,
// })
// //make moddel
// const info = mongoose.model("info",schema)
// // app.get ('/add',async(req,res)=>{
// //          await info.create({name : "Fatima" , email:"xyz@gmail.com", password:"hello"})
// //          res.send("nice")
// //          })

// app.use(express.urlencoded({extended : true}))
// app.use(express.static(path.join(path.resolve(),"public")))
// app.use(cookieParser())
// const isAuth =async (req,res,next)=>{
//     const token = req.cookies.token
//     if(token){
//         const decoded = jwt.verify(token, "jjj")
//          req.user = await info.findById(decoded._id)
//         next()
//     }else{
//    res.render("login.ejs")}}
// app.get('/',isAuth, (req,res)=>{
//     congo
nsole.log(req.user)
//         res.render("auth.ejs", {name : req.user.name})
//     })

// app.get('/register', (req,res)=>{
//         res.render("register.ejs")
//     })
//     app.post("/register", async(req,res)=>{
//         const { name , email, password } = req.body;
    
//     let femail= await info.findOne({email});
//     if(femail){
//        return res.redirect('/logout')
//     }   
    
//     app.post("/login", async(req,res)=>{
//         const { name , email, password } = req.body;
    
//     let femail= await info.findOne({email});
//     if(!femail){
//        return res.redirect('/register')
//     }   
//     else{
//       res.redirect("/logout")
//  }
//     })

//     const data = await info.create({name,email,password,})
    
//     const token = jwt.sign({_id :data._id},"jjj")
//      //console.log(token)
//      //res.cookie("token",imin,{
//         res.cookie("token",token,{ 
//             httpOnly:true, 
//             expires: new Date( Date.now() +60*1000 )})
//         res.redirect("/")
//     }) 
           
  





// app.get("/logout", (req,res)=>{
//     res.cookie("token","null",{ 
//         httpOnly:true, 
//         expires: new Date( Date.now())})
//     res.redirect("/")
// })
// //middlewares

// // app.get('/',isAuth, (req,res)=>{
// //     console.log (req.cookies.token)
// //     const token = req.cookies.token
// //     if(token){
// //         res.render("auth.ejs")
// //     }
// //     else{
// //    res.render("login.ejs")}
// // })
// app.listen(8000,()=>{
//     console.log ("server connected")
// })