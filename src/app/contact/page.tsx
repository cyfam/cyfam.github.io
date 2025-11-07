import resumeData from "../resume.json";
import type { Resume } from "@/types/resume";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";

const resume = resumeData as Resume;

export default function Home() {
    const {contact, headshot} = resume;

    return (
        <main>
            <Nav context="Contact" />
            <Header image={headshot}/>
            <Section title="Contact Info">
                <ContactPage contact={contact} />
            </Section>

            <Footer />
        </main>
    );
}