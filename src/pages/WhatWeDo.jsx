import react from 'react'
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

import WhatWeDoMain from '../components/WhatWeDoMain';




const WhatWeDo = () => {
    return(
        <>
            <PageHeader title="What We Do" path="what-we-do" name="whatwedo" />
            <WhatWeDoMain/>
           
        </>
    )
}

export default WhatWeDo;