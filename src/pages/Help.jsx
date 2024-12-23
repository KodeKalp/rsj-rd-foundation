import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import HelpMain from '../components/HelpMain';

const Help = () => {
    return(
        <>
            <Navbar />
            <PageHeader title="helps" path="helps" name="helps" />
            <HelpMain />
            <Footer />
            <BackToTop />
        </>
    )
}

export default Help;