import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Funds from '../components/Funds';
import PageHeader from "../components/PageHeader";
import MiddleSection from "../components/MiddleSection";

export default function About() {
    return (
        <>
            <PageHeader title="About Us" path="/about" name="About Us" />
            <Landing />
            <MiddleSection />
            {/* <Funds /> */}
            
        </>
    );
}