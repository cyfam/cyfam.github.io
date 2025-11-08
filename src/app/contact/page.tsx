import resumeData from "../resume.json";
import type { Resume } from "@/types/resume";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";

const resume = resumeData as Resume;

export default function Home() {
    const {name, tagline, contact, headshot} = resume;

    return (
        <main>
            <Nav name={name} context="Contact" />
            <Header name={name} tagline={tagline} image={headshot}/>
            <Section title="Contact Info">
                <ContactPage contact={contact} />
            </Section>

            <Footer  />
        </main>
    );
}