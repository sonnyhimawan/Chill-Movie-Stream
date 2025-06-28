import { Link } from "react-router";
import { useState } from "react";
import DownIcon from "/public/assets/icon/down.svg?react";
import AccountIcon from "/public/assets/icon/account.svg?react";
import PremiumIcon from "/public/assets/icon/star.svg?react";
import LogoutIcon from "/public/assets/icon/Logout.svg?react";
import BtnPrimary from "../atoms/button/BtnPrimaryWithIcon";




const Navbar = () => {

    const [isOpen, SetIsopen] = useState(false);
    const handleUserMenu = () => {
        SetIsopen(!isOpen);
    }


    return (

        <nav className="px-8 py-6 sm:px-10 lg:px-16 fixed z-50 w-full transition-all duration-300 bg-background">
            <div className="mx-auto flex w-full sm:gap-10 items-center">
                <Link to="/"
                ><img
                        src="assets/Logo-Horizon.png"
                        height="24"
                        width="140"
                        alt="dekstop chill logo"
                        className="hidden sm:block"
                    /></Link>
                <Link to="/"
                ><img
                        src="assets/chill-logo1.svg"
                        height="24"
                        width="24"
                        alt="mobile chill Logo"
                        className="sm:hidden block mr-6"
                    /></Link>
                <ul
                    className="flex items-center gap-5 sm:gap-10 text-sm sm:text-lg font-medium mr-auto"
                >
                    <li className="text-white hover:text-gray-400 font-myfont">
                        <Link to="/Series">Series</Link>
                    </li>
                    <li className="text-white hover:text-gray-400 font-myfont">
                        <Link to="/Film">Film</Link>
                    </li>
                    <li className="text-white hover:text-gray-400 font-myfont">
                        <Link to="/DaftarSaya">Daftar Saya</Link>
                    </li>
                </ul>
                <div className="relative">
                    <BtnPrimary
                        type="button"
                        className="flex items-center gap-2 sm:gap-4 cursor-pointer"
                        onClick={handleUserMenu}
                    >
                        <img
                            src="assets/img/user.png"
                            alt="user account"
                            className="w-8 lg:w-10"
                        />
                        <DownIcon className={`transition-transform duration-300 ${isOpen ? "-rotate-180" : "rotate-0"}`} />
                    </BtnPrimary>

                    {isOpen && (
                        <div
              className="absolute right-0 bg-chill border border-gray-600 rounded-md w-40 mt-4 shadow-2xl bg-background"
            >
              <Link
                to="#"
                className="w-full font-myfont text-white text-sm flex items-center font-medium p-3 gap-3 rounded-t hover:rounded-t-md hover:bg-secondary/30"
                ><AccountIcon/><span>Profil Saya</span></Link>
              <Link
                to="#"
                className="w-full font-myfont text-white text-sm flex items-center font-medium p-3 gap-3 hover:bg-secondary/30"
                ><PremiumIcon/><span>Ubah Premium</span></Link>
              <Link to="/Login"
                className="w-full font-myfont text-white text-sm flex items-center font-medium p-3 gap-3 hover:bg-btn-secondary-hover rounded-b hover:rounded-b-md hover:bg-secondary/30">
                <LogoutIcon/><span>Keluar</span></Link>
            </div>
                    )}
                </div>
            </div>
        </nav>
    );





}

export default Navbar;