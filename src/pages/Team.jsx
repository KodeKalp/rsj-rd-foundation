import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import TeamMain from '../components/Teammain';




const Team = () => {
    return(
        <>
            <PageHeader title="Teams" path="team" name="team" />
            <TeamMain/>
           
        </>
    )
}

export default Team