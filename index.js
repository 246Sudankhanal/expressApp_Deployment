import express from 'express'
const app=express()
const PORT=5000
app.use(express.json({urlencoded:true}))
app.get('/app',(req,res)=>{
    res.json({message:"deployed first message then again form ci/cd "})
})
app.get('/app/page',(req,res)=>{
    res.send(`<html>
        <body>
        <form>
        <input type="text placeholder="your name">Name</input>
        </form>
        </html>`)


})
app.listen(PORT,()=>{
    console.log("app is listening at port:",PORT)
})