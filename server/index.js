
import express from 'express';
import * as dotenv from 'dotenv';   //* means everything
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';  //in node need to include the file extension

dotenv.config();   //to set up env variables

const app = express();  //set up expresss application
app.use(cors());
app.use(express.json({limit: "200mb" }))

app.use('/api/v1/dalle', dalleRoutes);


app.get('/', (req,res) => {
    res.status(200).json({ message: "Hello from DALL.E"})
})



app.listen(8080, ()=> console.log('Server has started on port 8080'));