import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import CookiesMain from '../components/CookiesMain';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Cookis = () => {
    return(
        <>
         <Navbar />
            <PageHeader title="cookis" path="cookies" name="cookies" />
            <CookiesMain />
            <Footer />
            <BackToTop />
        </>
    )
}

export default Cookis;