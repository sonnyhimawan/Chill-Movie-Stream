import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";
import { FC } from "react";
import { HomeProps } from "../types/Home.type";


const HomeLayout:FC<HomeProps> = ({children}) => {


    return (
        <>

            <Navbar />
            {children}
            <Footer />

        </>


    );



}


export default HomeLayout;