"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiOutlinePhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { toast } from "react-toastify";
import axios from "axios";

export const Contact = () => {
	const [email, setEmail] = useState(null);
	const [message, setMessage] = useState(null);
	const [loading, setLoading] = useState(false);

	const sendMessage = async () => {
		if (!email || !message) {
			toast.error("Sorry! Invalid content");
		} else {
			setLoading(true);
			const data = await axios.post(
				"https://alanhub-backend.herokuapp.com/api/send-message",
				{
					email,
					message,
				}
			);
			setMessage(null);
			setEmail(null);
			console.log(data);
			if (data.data.ok == true) {
				toast.success("Message sent successfully");
				setLoading(false);
			} else {
				toast.success("Something went wrong");
				setLoading(false);
			}
		}
	};
	const [ref, inView] = useInView({
		threshold: 0.3,
	});
	const [ref2, inView2] = useInView({
		threshold: 0.3,
	});
	const variants = {
		hidden: { opacity: 0, x: 500 },
		visible: {
			opacity: 1,

			x: 0,

			transition: {
				type: "spring",
				staggerChildren: 0.7,

				duration: 1,
				bounce: 0.5,
			},
		},
	};
	const animation = useAnimation();
	const animation2 = useAnimation();
	useEffect(() => {
		if (inView) {
			animation.start("visible");
		} else {
			animation.start("hidden");
		}
	}, [inView, animation]);

	useEffect(() => {
		if (inView2) {
			animation2.start("visible");
		} else {
			animation2.start("hidden");
		}
	}, [inView2, animation2]);
	return (
		<>
			<div className="contact" id="hero">
				<h1 className="contact-heading">Contact me</h1>
				<p className="c-p">I would love to hear from you !!</p>
				<div className="contact-container">
					<motion.div className="contact-card left" ref={ref}>
						<motion.div
							initial="hidden"
							animate={animation}
							variants={variants}
						>
							<p1 className="c-p-1">
								Want me to help build your online business by creating a
								standout website?Feel free to drop a message.
								<br />
							</p1>
							<p2 className="p2">
								You can directly get in touch with me through:
							</p2>
							<div className="emaill">
								<div className="phone">
									<span>
										<AiOutlinePhone />
									</span>

									<p>+91 6304176070</p>
								</div>
								<div className="email">
									<SiGmail />
									<p>alannpn75@gmail.com</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
					{loading ? (
						<div className="loader"></div>
					) : (
						<motion.div className="contact-right" ref={ref2}>
							<motion.div
								className="contact-form"
								initial="hidden"
								animate={animation2}
								variants={variants}
							>
								<input
									placeholder="Enter a message"
									onChange={(e) => setMessage(e.target.value)}
								/>
								<input
									type="email"
									placeholder="email"
									onChange={(e) => setEmail(e.target.value)}
								/>

								<button onClick={sendMessage}>
									<div class="svg-wrapper-1">
										<div class="svg-wrapper">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="24"
												height="24"
											>
												<path fill="none" d="M0 0h24v24H0z"></path>
												<path
													fill="currentColor"
													d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
												></path>
											</svg>
										</div>
									</div>
									<span>Send</span>
								</button>
							</motion.div>
						</motion.div>
					)}
				</div>
			</div>
		</>
	);
};
export default Contact;
