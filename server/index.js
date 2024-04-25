import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://new:Nyle123@clusterjournal.rmawxau.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJournal';
const PORT = process.env.PORT || 3000;

// mongodb+srv://imanahsann:<password>@clusterjournal.rmawxau.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJournal

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
