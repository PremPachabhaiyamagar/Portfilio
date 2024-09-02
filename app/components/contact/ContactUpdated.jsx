// import { set } from "mongoose";
import React, { useState } from "react";
// import { connectToDB } from "../../api/utils/connectToDb";
import { toast } from "react-toastify";

const ContactUpdated = () => {
  const [post, setPost] = useState({
    message: "",
    email: "",
  });
  const sendMessage = async (e) => {
    if (post.message === "" || !post.email === "") {
      toast.error("Please fill both the fields.");
      return;
    } else {
      const data = await fetch("api/messages/new/", {
        method: "POST",
        body: JSON.stringify({
          email: post.email,
          message: post.message,
        }),
      });
      if (data.status == 201) toast.success("Message Sent Successfully");
      console.log(data);
    }
  };
  return (
    <div>
      <h1 className="contact-heading cnt">Contact me</h1>
      <div className="container mx-auto p-4 w-full mt-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 overflow-hidden">
          Your feedback matters
        </h1>
        <p className="text-white text-2xl g my-8 text-start md:w-auto md:text-3xl ">
          Let's build your online business together. Drop a message and let's
          create a standout website that truly represents your brand.
        </p>

        <form className="w-full lg:w-3/4 text-2xl">
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              onChange={(e) =>
                setPost({
                  ...post,
                  email: e.target.value,
                })
              }
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 text-white">
            <label
              htmlFor="message"
              className="block text-white font-bold mb-2"
            >
              Message
            </label>
            <textarea
              onChange={(e) =>
                setPost({
                  ...post,
                  message: e.target.value,
                })
              }
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            onClick={(e) => sendMessage(e)}
            type="button"
            className="bg-red-700 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUpdated;
