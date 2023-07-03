import React from "react";
import football from "../assets/football.png";
import { Flex } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'black', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img

                src={football} alt="Football" style={{
                    marginTop: "-5px",
                    width: '60px', height: '60px'
                }} />
            <Flex

                direction={"column"}>
                <h1 style={{ color: 'white', fontSize: '28px', marginLeft: '10px' }}>Football Derby Games in Europe</h1>
                <p style={{ color: 'white', fontSize: '18px', marginLeft: '10px' }}> Hello there! Please add your local Football Derby to this page.</p>
            </Flex>
        </nav>
    );
};

export default Navbar;
