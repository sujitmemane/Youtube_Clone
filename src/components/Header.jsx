import React, { useContext, useState } from "react";
import { Context } from "./../context/contextAPI";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import DesktopLogo from "./../assets/yt-logo.png";
import MobileLogo from "./../assets/yt-logo-mobile.png";
import MyPhoto from "./../assets/my.jpg";
import Loader from "../shared/Loader";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  console.log(pageName);
  console.log(location);
  const searchQueryHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu((prev) => !prev);
  };
  console.log(mobileMenu);
  return (
    <div className="sticky top-0 z-10 py-4 space-x-2 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black ">
      {loading && <Loader />}
      <div className="flex h-5 items-center md:space-x-2">
        {pageName !== "video" && (
          <div
            onClick={mobileMenuToggle}
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-white"
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" color={"white"} />
            ) : (
              <SlMenu className="text-white text-xl" color={"white"} />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img src={DesktopLogo} className="h-full hidden md:block " />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl rounded-r-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
            <IoIosSearch className="text-white text-2xl font-bold" size={25} />
          </button>
        </div>
      </div>
      <div className="flex items-center p-5 cursor-pointer">
        <img src={MyPhoto} className="h-7 w-7 md:h-10 md:w-10  rounded-full" />
      </div>
    </div>
  );
};

export default Header;
