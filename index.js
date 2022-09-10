let express=require('express');
let path=require('path');
let mongoose=require('./connection');
let app=express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});


const NewModel = mongoose.model('feedback', {name: String, email: String, message: String});


app.post('/insert', (req, res) => {
    const name=req.query.name;
    const email=req.query.email;
    const message=req.query.message;
    const obj={
        name:name,
        email:email,
        message:message
    }
    const newModel = new NewModel(obj);
        newModel.save((err) => {
        if (err) {
            res.send("Error");
        } else {
            res.send("Success");
        }
    });
});

app.listen(8000,()=>{
    console.log('Server is running at port 8000');
});