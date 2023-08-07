//npm install the dependencies 

const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const getDate= require(__dirname+"/myDateModule");

let todoList=[];
let workList=[];
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// var today  = new Date();
// var currentDate=today.toLocaleDateString("en-US", options);

var currentDate= getDate();

app.get("/", function(req,res){
    // console.log(todoList)
    res.render("index.ejs",{title:"Todo List",List:todoList, todaysDate:currentDate});
})

app.post("/",function(req,res){
    // console.log(req.body,"zzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    let addedTask=req.body.taskInput;
    // console.log(addedTask)
    if(req.body.button==="Todo List"){
        todoList.push(addedTask);
        res.redirect("/");
    }
    else if(req.body.button==="Work List"){
        workList.push(addedTask);
        res.redirect("/work");
    }

    
})

app.post("/removeItem",function(req,res){
    // console.log(req.body ,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    var indexToRemove=req.body.hiddenVal;
    if(req.body.removeButton==="Todo List"){
        todoList.splice(indexToRemove,1);
        res.redirect("/");
    }
    else if(req.body.removeButton==="Work List"){
        workList.splice(indexToRemove,1);
        res.redirect("/work");
    }
})

app.post("/clearList",function(req,res){
    if(req.body.clearButton==="Todo List"){
        todoList=[];
        res.redirect("/");
    }
    else if(req.body.clearButton==="Work List"){
        workList=[];
        res.redirect("/work");
    }
    
})

app.get("/work",(req,res)=>{
    res.render("index.ejs",{title:"Work List",List:workList, todaysDate:currentDate})
})

app.listen(3000,function () { 
    console.log("server running in port 3000");
 })
