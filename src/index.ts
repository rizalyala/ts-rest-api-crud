import express from 'express';
import {PORT} from './config/constants';
import {userRouter} from './routes'

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Selamat Datang')
});
app.use('/user',userRouter);

app.listen(PORT,()=>{
    console.log(`Endpoint ${PORT}`)
})