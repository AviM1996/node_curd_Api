const express=require("express")
const mongoose=require("mongoose")
mongoose.set('strictQuery', true)

const bodyParser=require("body-parser");
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const homeRouter=require("./router/router")
app.use(homeRouter)

const dblink="mongodb+srv://avi1996:7QzONiaFux6lhcRz@cluster0.vfnrjxd.mongodb.net/crudApi"
const port=process.env.PORT||1996

mongoose.connect(dblink,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((result)=>{
    app.listen(port,()=>{
        console.log(`server is connected http://localhost:${port}`);
        console.log(`Database is connected`);
    })
}).catch((err)=>{
    console.log(`somethisng went to wrong`);
})