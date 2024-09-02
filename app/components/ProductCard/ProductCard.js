import React, { useState } from "react";
// import Shoe from "../assets/adidas.jpeg";
import "./productCard.css";
import ServiceImage from "../assets/9.jpeg";
import ShopifyBanner from "../assets/shopify-banner.png";
import Image from "next/image";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = (item) => {
	const [data, setData] = useState({});

	// const router = useRouter();
	// const changeLink = (link) => {
	// 	router.push(link);
	// };
	function doThing(e) {
		e.preventDefault();
	}
	return (
		<div className="card-container relative">
			{/* <div className=" p-1 bg-green-200 z-20 rounded-full">
				<AiOutlineLink
					height={50}
					width={70}
					color="black"
					className="h-5 w-5 text-2xl text-black"
					style={{ color: "black", background: "black", borderRadius: "50%" }}
				/>
			</div>
			<div className=" p-1 bg-green-200 z-20 rounded-full">
				<AiOutlineLink
					height={50}
					width={70}
					color="black"
					className="h-5 w-5 text-2xl text-black"
					style={{ color: "black", background: "black", borderRadius: "50%" }}
				/>
			</div> */}
			<div className="card">
				<div className="imgBox">
					<Image
						src={item.item.mainImage}
						height={150}
						width={200}
						color="black"
						alt="project_image"
					/>
				</div>
				<div className="content">
					<h2>{item.item.mainText}</h2>
					<div className="size">
						<ul>
							{item?.item?.features.map((i) => (
								<li key={i}>{i}</li>
							))}
						</ul>
					</div>
					{/* 
					<button className="button">
						{/* <div className="w-full mx-auto flex">
							<AiOutlineLink />
							<AiFillGithub />
						</div> *
						Buy
					</button> */}
					<div
						className="button flex relative justify-center items-center gap-2"
						onClick={(e) => doThing(e)}
					>
						<div className=" relative p-1 bg-green-200 z-20 rounded-full cursor-pointer">
							<Link href={item.item.links[0]} passHref>
								<AiOutlineLink
									height={50}
									width={70}
									color="black"
									className="curr h-5 w-5 text-2xl text-black cursor-pointer"
									style={{
										color: "black",
										background: "black",
										borderRadius: "50%",
									}}
								/>
							</Link>
						</div>
						<div className="relative p-1 bg-green-200 z-20 rounded-full cursor-pointer">
							<Link href={item.item.links[1]} passHref>
								<AiFillGithub
									height={50}
									width={70}
									color="black"
									className="curr h-5 w-5 text-2xl text-black cursor-pointer"
									style={{
										color: "black",
										background: "black",
										borderRadius: "50%",
									}}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
