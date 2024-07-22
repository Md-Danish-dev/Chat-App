import mongoose from 'mongoose'

const connectToMongo = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connected to MongoDB');
        
    } catch (error) {
        console.log('error in connecting mongoDB ',error);
        
    }
}

export default connectToMongo;
