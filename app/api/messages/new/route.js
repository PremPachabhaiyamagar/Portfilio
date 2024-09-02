import Message from "../../Modals/Messages";
import { connectToDB } from "../../utils/connectToDb";

export const POST = async (request) => {
	const { email, message } = await request.json();

	try {
		await connectToDB();
		const newPrompt = await new Message({ email, message });

		await newPrompt.save();
		return new Response(JSON.stringify(newPrompt, { message: "Success" }), {
			status: 201,
		});
	} catch (error) {
		return new Response("Failed to create a new prompt", { status: 500 });
	}
};
