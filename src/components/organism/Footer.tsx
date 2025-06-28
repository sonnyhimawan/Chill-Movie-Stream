import { Link } from "react-router";
import { useState } from "react";
import DownIcon from "/public/assets/icon/down.svg?react";



const Footer = () => {

    const [isOpen, SetIsopen] = useState(false);
    const [isOpenBantuan, SetIsopenBantuan] = useState(false);
    const handleDropdownGenre = () => {
        SetIsopen(!isOpen);
    }


    const handleDropdownBantuan = () => {
        SetIsopenBantuan(!isOpenBantuan);

    }




    return (

        <footer>
            <div className="bg-background grid span-3 gap-y-10 px-8 py-10 border border-t-1 border-t-border border-t-gray-800/80 sm:px-10 lg:px-16 w-full lg:grid-cols-[0.8fr_2fr] md:grid-cols-[1fr_2.5fr]">
                <div className="flex flex-col lg:justify-center space-y-6 lg:space-y-6">
                    <img
                        src="assets/Logo-Horizon.png"
                        height="24"
                        width="140"
                        alt="Chill Website Logo"
                    />
                    <p className="font-myfont text-gray-500 text-base font-normal">
                        @2023 Chill All Rights Reserved
                    </p>
                </div>


                <div
                    className="hidden lg:grid lg:grid-cols-[2fr_1fr] md:grid md:grid-cols-[1fr_0.5fr]"
                >
                    <div className="lg:space-y-5 md:space-y-5">
                        <h1
                            className="font-myfont text-lg md:text-white md:text-lg md:font-medium lg:text-white lg:text-lg lg:font-medium"
                        >
                            Genre
                        </h1>
                        <div
                            className="md:grid md:gap-y-4 md:grid-cols-2 lg:grid lg:grid-cols-4"
                        >
                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Aksi</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Anak-Anak</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Anime</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Britania</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Drama</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Fantasi</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Kejahatan</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">KDrama</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Komedi</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Petualangan</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Perang</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Romantis</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Sains & Alam</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Thriller</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:ml-auto lg:space-y-5 md:space-y-5">
                        <h1
                            className="font-myfont text-lg md:text-white md:text-lg md:font-medium lg:text-white lg:text-lg lg:font-medium"
                        >
                            Bantuan
                        </h1>
                        <ul className="space-y-3">
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">FAQ</Link>
                            </li>
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">Kontak Kami</Link>
                            </li>
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">Privasi</Link>
                            </li>
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">Syarat & Ketentuan</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-ful flex flex-col gap-y-4 md:hidden lg:hidden">
                    <div>
                        <div onClick={handleDropdownGenre} className="flex items-center mb-4">
                            <span className="text-white text-lg font-medium cursor-pointer mr-auto">Genre</span>
                            <DownIcon className={`transition-transform duration-300 ${isOpen ? "-rotate-180" : "rotate-0"}`} />
                        </div>
                        {isOpen && (
                            <div>
                                <ul className="grid grid-rows-8 grid-flow-col gap-y-3 gap-x-3">
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Aksi</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Anak-Anak</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Anime</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Britania</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Drama</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Fantasi</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Kejahatan</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> KDrama</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Komedi</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Petualangan</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Perang</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Romantis</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Sains & Alam</Link>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <Link to="#"> Thriller</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <div onClick={handleDropdownBantuan} className="flex items-center mb-4">
                            <span className="text-white text-lg font-medium cursor-pointer mr-auto">Bantuan</span>
                            <DownIcon className={`transition-transform duration-300 ${isOpenBantuan ? "-rotate-180" : "rotate-0"}`} />
                        </div>

                        {isOpenBantuan && (
                            <div>
                                <ul className="grid grid-cols gap-y-3">
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <a href="#"> FAQ</a>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <a href="#"> Kontak Kami</a>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <a href="#"> Privasi</a>
                                    </li>
                                    <li className="font-myfont text-gray-500 text-base font-medium">
                                        <a href="#"> Syarat & Ketentuan</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>



    );




}

export default Footer;