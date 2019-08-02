import React from 'react';
import image1 from '../image1.png'


const Header = () => {

    return (
        <div >
            {/* <h1 className="font-italic ">New York Times</h1> */}
            <img src={image1} alt="Logo" />;
            <hr className="style1"></hr>
        </div>


    );

}

export default Header;