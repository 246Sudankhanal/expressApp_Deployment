import express from 'express'
const app=express()
const PORT=3000
app.use(express.json({urlencoded:true}))
app.get('/app',(req,res)=>{
    res.json({message:"deployed first message"})
})
app.listen(PORT,()=>{
    console.log("app is listening at port:",PORT)
})