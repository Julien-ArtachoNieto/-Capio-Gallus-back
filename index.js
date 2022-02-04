const express =require('express');
const connection = require("./db-config");
const app =express();

const port = process.env.PORT ?? 3100;

app.use(express.json());

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
    } else {
        console.log("connected as id " + connection.threadId);
    }
});
app.post ("/poucavius/gaulois",(req,res)=>{
    const {name, age,imgurl,tall,hair_color,sex,pilosity,skin_color,armed,localisation,stature,status}=req.body
    connection.query("INSERT INTO gaulois (name, age,imgurl,tall,hair_color,sex,pilosity,skin_color,armed,localisation,stature,status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
        [name, age,imgurl,tall,hair_color,sex,pilosity,skin_color,armed,localisation,stature,status],(err,result)=>{
        if (err){
            console.log(err);
            res.status(500).send("Error saving Gaulois !")
        }else{
            res.status(200).send("Gaulois sucessfullly poucaved. Nice !")
        }
        })
})
app.get ("/capiatore/gaulois", (req,res)=>{
    connection.query("SELECT * FROM gaulois",(err,result)=>{
        if (err){
            console.error(err);
            res.status(500).send("Error retrieving gaulois from database")
        }else{
            res.json(result)
        }
    })
})


app.listen(port,(err)=>{
    if(err){
        console.error("Something bad happened ")
    }else {
        console.log(`Server is listening on ${port}`)
    }
})

