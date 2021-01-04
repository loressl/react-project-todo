const mongoose= require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;

module.exports= mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Mongodb connected...');
}).catch((err)=>{
    console.log(err);
})