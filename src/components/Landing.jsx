import { useNavigate } from 'react-router-dom';

//import 'animate.css';


export default function Landing() {
    const navigate = useNavigate();
    const handleKnowMore = () => {
        navigate("/about");
    };

    return (
        <>
        
            {/* Hero Section with Background Image */}

            <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 py-20 flex items-center justify-center text-center text-white relative"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=1500')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100"
                }}

            //https://media.istockphoto.com/id/537311780/photo/unity-of-indian-children-asia.jpg?s=2048x2048&w=is&k=20&c=uPWQDmUg_LJ-WdbaNXD2PstnvyC3aVbJQI3SnMlN1BU=
            >
               
            </div>

            

        </>
    );
}
