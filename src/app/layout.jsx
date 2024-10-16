import { Inter } from "next/font/google";
import "./globals.scss";
import "./layout.scss";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer";
import { type } from "os";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Rasmus Bremholm | Portfolio",
	description:
		"Rasmus Bremholm | Frontend Developer from Gothenburg Sweden. I specialise in Frontend Development but im also a skilled 3D Artist and love Backend feel free to reach out to me!",
	openGraph: {
		title: "Rasmus Bremholm | Frontend Portfolio",
		description:
			"I'm a self-taught Frontend/Fullstack developer that is currently studying Frontend Development at IT Högskolan in Göteborg, Sweden. I love exploring areas where tech and artistry meet.",
		url: "https://www.rasmusbremholm.com",
		siteName: "Rasmus Bremholm Portfolio",
		images: [
			{
				url: "https://www.rasmusbremholm.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Rasmus Bremholm Portfolio Banner",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rasmus Bremholm | Frontend Developer",
		description:
			"I'm a self-taught Frontend/Fullstack developer that is currently studying Frontend Development at IT Högskolan in Göteborg, Sweden. I love exploring areas where tech and artistry meet.",
		images: [
			{
				url: "https://www.rasmusbremholm.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Rasmus Bremholm Portfolio Banner",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
