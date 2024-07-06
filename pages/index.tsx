import { Inter } from "next/font/google";
import Hero from "@/views/Hero/Hero";
import ProjectsListing from "@/views/Projects/ProjectsListing";
import Divider from "@/components/Divider/Divider";
import Contacts from "@/views/Contacts/Contacts";
import Footer from "@/views/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-2">
      <Hero />
      <Divider animated={true} />
      <ProjectsListing />
      <Divider />
      <Contacts />
      <Footer />
    </main>
  );
}
