import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import FaqsMain from '../components/Faqsmain';

const Faqs = () => {
    return(
        <>
            <Navbar />
            <PageHeader title="faqs" path="faqs" name="faqs" />
            <FaqsMain />
            <Footer />
            <BackToTop />
        </>
    )
}

export default Faqs;