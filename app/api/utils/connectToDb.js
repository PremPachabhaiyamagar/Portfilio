import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDB is already connected");
		return;
	}

	try {
		await mongoose
			.connect(
				"mongodb+srv://alan:alan@cluster0.ijjwk.mongodb.net/?retryWrites=true&w=majority"
			)
			.then(() => console.log("Db connected"));

		isConnected = true;

		console.log("MongoDB connected");
	} catch (error) {
		console.log("mongo db error");
		console.log(error);
	}
};
