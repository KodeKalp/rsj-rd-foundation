import '../css/landing.css';
import main from '../assets/banner.jpg';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    const handleKnowMore = () => {
        navigate("/about");
      };
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        <hr />
                        <h4>WE ARE RSJ RURAL DEVELOPMENT FOUNDATION</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p>At <span>Rsj Rural Development,</span> we work towards the betterment of our <span>world</span> </p>
                        </div>
                        <div className="caption3">
                            <p>Bring out the change in society by spreading hands to help the unprivileged children and other backward communities.</p>
                        </div>
                        <div className="">
                            <button  
                                type="button" 
                                className="btn btn-outline-info mr-2"
                                onClick={handleKnowMore}
                                >Know More</button>
                            <button type="button"  
                                 
                                className="btn btn-success" >
                                DONATE
                            </button>
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
    );
}