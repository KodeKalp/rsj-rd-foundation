import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import VolentureMain from '../components/VolentureMain';




const Volenture = () => {
    return(
        <>
            <Navbar />
            <PageHeader title="Volenture" path="volenture" name="volenture" />
            <VolentureMain/>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Volenture;