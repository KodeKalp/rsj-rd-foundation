import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import TermsConditionMain from '../components/TermsConditionMain';



const TermsAndCondition = () => {
    return(
        <>
            <PageHeader title="Terms & Condition" path="terms-conditions" name="terms-conditions" />
            <TermsConditionMain />
           
        </>
    )
}

export default TermsAndCondition;