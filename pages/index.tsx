import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import Typewriter from "typewriter-effect";
import Script from "next/script";

export default function Home() {
	return (
		<>
<Script
	strategy="afterInteractive"
	src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
/>

<Script
	id="google-analytics"
	strategy="afterInteractive">
	{`
		window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
	    page_path: window.location.pathname,
	  });
	`}
/>
			<div className="flex flex-col m-20 font-jet uppercase gap-2 content-start justify-start shrink">
				<h1 className="md:text-8xl text-6xl font-extrabold">rasmus bremholm</h1>
				<h2 className="text-4xl opacity-60">
					<Typewriter
						options={{
							strings: ["frontend developer", "3d artist", "teacher"],
							autoStart: true,
							loop: true,
							deleteSpeed: 1,
						}}
					/>
				</h2>
				<p className="text-xl">
					This site is currently under construction, but you can still reach out
					to me here:
				</p>
			</div>

			<div className="flex m-20 uppercase">
				<nav className="flex flex-col flex-initial gap-2 m-10 text-2xl">
					<Link
						className="list group"
						href="https://www.youtube.com/c/Visceral3D"
					>
						<Image
							src="youtube.svg"
							height={24}
							width={24}
							alt="youtube logo"
						/>
						<p className="list-text">youtube</p>
					</Link>
					<Link
						className="list group"
						href="https://www.artstation.com/visceral3d"
					>
						<Image
							src="artstation.svg"
							height={24}
							width={24}
							alt="artstation logo"
						/>
						<p className="list-text">artstation</p>
					</Link>
					<Link className="list group" href="https://github.com/Visceral89">
						<Image src="github.svg" height={24} width={24} alt="github logo" />
						<p className="list-text">github</p>
					</Link>
					<Link
						className="list group"
						href="https://www.linkedin.com/in/rasmus-bremholm-7857b740/"
					>
						<Image
							src="linkedin.svg"
							height={24}
							width={24}
							alt="linkedin logo"
						/>
						<p className="list-text">contact</p>
					</Link>
				</nav>
			</div>
			<Link className="hazard_link" href="/secret/secret/">
				<Image
					className="absolute -z-10 bottom-[40px] right-[55px] invisible md:visible"
					src="hazard-cube.svg"
					width={256}
					height={256}
					alt=""
				/>
			</Link>
		</>
	);
}
