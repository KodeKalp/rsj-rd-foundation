import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PrivacyMain from '../components/PrivacyMain';


const PrivacyPolicy = () => {
    return(
        <>
            <PageHeader title="Privacy Policy" path="privacy-policy" name="privacy-policy" />
            <PrivacyMain />
            
        </>
    )
}

export default PrivacyPolicy;