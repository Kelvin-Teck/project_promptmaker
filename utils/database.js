import mongoose from 'mongoose';

let isConnected = false; //track connection
let MONGODB_URI_DEV;

process.env.MONGODB_URI ? MONGODB_URI_DEV =  MONGODB_URI_DEV = process.env.MONGODB_URI : MONGODB_URI_DEV = process.env.MONGODB_LOCAL_URI   


// console.log(MONGODB_URI_DEV)
export const connectToDB = async () => {
	mongoose.set('strictQuery', true);

	if(isConnected){
		console.log("MongoDB is already conneted");
		return;
	}

	try{
		await mongoose.connect(MONGODB_URI_DEV, {
			dbName: "share_prompt",
			useNewUrlParser: true,
			useUnifiedTopology:true,
		});

		isConnected = true;
		console.log("MongoDB connected");
	}catch(error){
		console.error(error);
	}
}
