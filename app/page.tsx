import About from "@/components/about";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import DividerAnimated from "@/components/dividerAnimated";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<Intro />
			<DividerAnimated />
			<About />
			<Divider />
			<Projects />
			<Divider />
			<Skills />
			<Divider />
			<Contact />
			<Footer />
		</main>
	);
}
