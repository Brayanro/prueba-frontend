import { useContext, useState } from "react";
import { AppContext, AppContextType } from "../context/AppContext";
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const { user, handleSelectedTab, selectedTab, setShowSidebar, showSidebar } =
    useContext(AppContext) as AppContextType;

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleShowLogoutButton = () => {
    setShowLogoutButton(!showLogoutButton);
  };

  return (
    <nav className="p-5 relative">
      <button
        className={`lg:hidden text-white focus:outline-none ${
          showSidebar ? "hidden" : "block"
        }`}
        onClick={handleToggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <g clipPath="url(#clip0_3_264)">
            <path
              d="M4.5 27H31.5V24H4.5V27ZM4.5 19.5H31.5V16.5H4.5V19.5ZM4.5 9V12H31.5V9H4.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_264">
              <rect width="36" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full p-9 transition-transform transform ${
          showSidebar ? "translate-x-0 z-10" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "rgba(9, 20, 41, 0.80)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <mask
                id="mask0_3_563"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="42"
                height="42"
              >
                <rect width="42" height="42" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3_563)">
                <path
                  d="M10.2375 29.925C11.725 28.7875 13.3875 27.8906 15.225 27.2344C17.0625 26.5781 18.9875 26.25 21 26.25C23.0125 26.25 24.9375 26.5781 26.775 27.2344C28.6125 27.8906 30.275 28.7875 31.7625 29.925C32.7833 28.7292 33.5781 27.3729 34.1469 25.8563C34.7156 24.3396 35 22.7208 35 21C35 17.1208 33.6365 13.8177 30.9094 11.0906C28.1823 8.36354 24.8792 7 21 7C17.1208 7 13.8177 8.36354 11.0906 11.0906C8.36354 13.8177 7 17.1208 7 21C7 22.7208 7.28437 24.3396 7.85313 25.8563C8.42188 27.3729 9.21667 28.7292 10.2375 29.925ZM21 22.75C19.2792 22.75 17.8281 22.1594 16.6469 20.9781C15.4656 19.7969 14.875 18.3458 14.875 16.625C14.875 14.9042 15.4656 13.4531 16.6469 12.2719C17.8281 11.0906 19.2792 10.5 21 10.5C22.7208 10.5 24.1719 11.0906 25.3531 12.2719C26.5344 13.4531 27.125 14.9042 27.125 16.625C27.125 18.3458 26.5344 19.7969 25.3531 20.9781C24.1719 22.1594 22.7208 22.75 21 22.75ZM21 38.5C18.5792 38.5 16.3042 38.0406 14.175 37.1219C12.0458 36.2031 10.1937 34.9563 8.61875 33.3813C7.04375 31.8063 5.79688 29.9542 4.87813 27.825C3.95937 25.6958 3.5 23.4208 3.5 21C3.5 18.5792 3.95937 16.3042 4.87813 14.175C5.79688 12.0458 7.04375 10.1937 8.61875 8.61875C10.1937 7.04375 12.0458 5.79688 14.175 4.87813C16.3042 3.95937 18.5792 3.5 21 3.5C23.4208 3.5 25.6958 3.95937 27.825 4.87813C29.9542 5.79688 31.8063 7.04375 33.3813 8.61875C34.9563 10.1937 36.2031 12.0458 37.1219 14.175C38.0406 16.3042 38.5 18.5792 38.5 21C38.5 23.4208 38.0406 25.6958 37.1219 27.825C36.2031 29.9542 34.9563 31.8063 33.3813 33.3813C31.8063 34.9563 29.9542 36.2031 27.825 37.1219C25.6958 38.0406 23.4208 38.5 21 38.5ZM21 35C22.5458 35 24.0042 34.774 25.375 34.3219C26.7458 33.8698 28 33.2208 29.1375 32.375C28 31.5292 26.7458 30.8802 25.375 30.4281C24.0042 29.976 22.5458 29.75 21 29.75C19.4542 29.75 17.9958 29.976 16.625 30.4281C15.2542 30.8802 14 31.5292 12.8625 32.375C14 33.2208 15.2542 33.8698 16.625 34.3219C17.9958 34.774 19.4542 35 21 35ZM21 19.25C21.7583 19.25 22.3854 19.0021 22.8813 18.5062C23.3771 18.0104 23.625 17.3833 23.625 16.625C23.625 15.8667 23.3771 15.2396 22.8813 14.7438C22.3854 14.2479 21.7583 14 21 14C20.2417 14 19.6146 14.2479 19.1188 14.7438C18.6229 15.2396 18.375 15.8667 18.375 16.625C18.375 17.3833 18.6229 18.0104 19.1188 18.5062C19.6146 19.0021 20.2417 19.25 21 19.25Z"
                  fill="white"
                />
              </g>
            </svg>
            <p className="text-white font-medium text-base">{user.email}</p>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={handleToggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <mask
                id="mask0_3_90"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="30"
              >
                <rect width="30" height="30" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3_90)">
                <path
                  d="M12.5 27.5L0 15L12.5 2.5L14.7188 4.71875L4.4375 15L14.7188 25.2812L12.5 27.5Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="lg:hidden mt-8 text-white">
          <h4 className="text-lg font-bold">Filters section</h4>
          <ul className="flex flex-col gap-4 mt-6">
            <li
              className={`cursor-pointer ${
                selectedTab === "Popular"
                  ? "text-[#5bb0ca]"
                  : "hover:text-[#5bb0ca]"
              }`}
              onClick={() => handleSelectedTab("Popular")}
            >
              Popular movies
            </li>
            <li
              className={`cursor-pointer ${
                selectedTab === "Top"
                  ? "text-[#5bb0ca]"
                  : "hover:text-[#5bb0ca]"
              }`}
              onClick={() => handleSelectedTab("Top")}
            >
              Top rated
            </li>
            <li
              className={`cursor-pointer ${
                selectedTab === "Upcoming"
                  ? "text-[#5bb0ca]"
                  : "hover:text-[#5bb0ca]"
              }`}
              onClick={() => handleSelectedTab("Upcoming")}
            >
              Upcoming
            </li>
            <li
              className={`cursor-pointer ${
                selectedTab === "Favorites"
                  ? "text-[#5bb0ca]"
                  : "hover:text-[#5bb0ca]"
              }`}
              onClick={() => handleSelectedTab("Favorites")}
            >
              Favorites
            </li>
          </ul>
          <h4 className="text-lg font-bold mt-12">Account</h4>
          <LogoutButton />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:mx-10 text-white">
        <h1 className="text-3xl text-[#31A5E0] font-bold text-center mb-8">
          Movies App
        </h1>
        <ul className="flex flex-row gap-8 text-xl font-bold">
          <li
            className={`${
              selectedTab === "Popular"
                ? "bg-gray-300/30"
                : "hover:bg-gray-300/30"
            } rounded-xl py-3 px-5 transition cursor-pointer`}
            onClick={() => handleSelectedTab("Popular")}
          >
            Popular
          </li>
          <li
            className={`${
              selectedTab === "Top" ? "bg-gray-300/30" : "hover:bg-gray-300/30"
            } rounded-xl py-3 px-5 transition cursor-pointer`}
            onClick={() => handleSelectedTab("Top")}
          >
            Top rated
          </li>
          <li
            className={`${
              selectedTab === "Upcoming"
                ? "bg-gray-300/30"
                : "hover:bg-gray-300/30"
            } rounded-xl py-3 px-5 transition cursor-pointer`}
            onClick={() => handleSelectedTab("Upcoming")}
          >
            Upcoming
          </li>
          <li
            className={`${
              selectedTab === "Favorites"
                ? "bg-gray-300/30"
                : "hover:bg-gray-300/30"
            } rounded-xl py-3 px-5 transition cursor-pointer`}
            onClick={() => handleSelectedTab("Favorites")}
          >
            Favorites
          </li>
        </ul>
        <div className="relative">
          <button
            className="flex flex-row gap-2 items-center"
            onClick={handleShowLogoutButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <mask
                id="mask0_3_563"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="42"
                height="42"
              >
                <rect width="42" height="42" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3_563)">
                <path
                  d="M10.2375 29.925C11.725 28.7875 13.3875 27.8906 15.225 27.2344C17.0625 26.5781 18.9875 26.25 21 26.25C23.0125 26.25 24.9375 26.5781 26.775 27.2344C28.6125 27.8906 30.275 28.7875 31.7625 29.925C32.7833 28.7292 33.5781 27.3729 34.1469 25.8563C34.7156 24.3396 35 22.7208 35 21C35 17.1208 33.6365 13.8177 30.9094 11.0906C28.1823 8.36354 24.8792 7 21 7C17.1208 7 13.8177 8.36354 11.0906 11.0906C8.36354 13.8177 7 17.1208 7 21C7 22.7208 7.28437 24.3396 7.85313 25.8563C8.42188 27.3729 9.21667 28.7292 10.2375 29.925ZM21 22.75C19.2792 22.75 17.8281 22.1594 16.6469 20.9781C15.4656 19.7969 14.875 18.3458 14.875 16.625C14.875 14.9042 15.4656 13.4531 16.6469 12.2719C17.8281 11.0906 19.2792 10.5 21 10.5C22.7208 10.5 24.1719 11.0906 25.3531 12.2719C26.5344 13.4531 27.125 14.9042 27.125 16.625C27.125 18.3458 26.5344 19.7969 25.3531 20.9781C24.1719 22.1594 22.7208 22.75 21 22.75ZM21 38.5C18.5792 38.5 16.3042 38.0406 14.175 37.1219C12.0458 36.2031 10.1937 34.9563 8.61875 33.3813C7.04375 31.8063 5.79688 29.9542 4.87813 27.825C3.95937 25.6958 3.5 23.4208 3.5 21C3.5 18.5792 3.95937 16.3042 4.87813 14.175C5.79688 12.0458 7.04375 10.1937 8.61875 8.61875C10.1937 7.04375 12.0458 5.79688 14.175 4.87813C16.3042 3.95937 18.5792 3.5 21 3.5C23.4208 3.5 25.6958 3.95937 27.825 4.87813C29.9542 5.79688 31.8063 7.04375 33.3813 8.61875C34.9563 10.1937 36.2031 12.0458 37.1219 14.175C38.0406 16.3042 38.5 18.5792 38.5 21C38.5 23.4208 38.0406 25.6958 37.1219 27.825C36.2031 29.9542 34.9563 31.8063 33.3813 33.3813C31.8063 34.9563 29.9542 36.2031 27.825 37.1219C25.6958 38.0406 23.4208 38.5 21 38.5ZM21 35C22.5458 35 24.0042 34.774 25.375 34.3219C26.7458 33.8698 28 33.2208 29.1375 32.375C28 31.5292 26.7458 30.8802 25.375 30.4281C24.0042 29.976 22.5458 29.75 21 29.75C19.4542 29.75 17.9958 29.976 16.625 30.4281C15.2542 30.8802 14 31.5292 12.8625 32.375C14 33.2208 15.2542 33.8698 16.625 34.3219C17.9958 34.774 19.4542 35 21 35ZM21 19.25C21.7583 19.25 22.3854 19.0021 22.8813 18.5062C23.3771 18.0104 23.625 17.3833 23.625 16.625C23.625 15.8667 23.3771 15.2396 22.8813 14.7438C22.3854 14.2479 21.7583 14 21 14C20.2417 14 19.6146 14.2479 19.1188 14.7438C18.6229 15.2396 18.375 15.8667 18.375 16.625C18.375 17.3833 18.6229 18.0104 19.1188 18.5062C19.6146 19.0021 20.2417 19.25 21 19.25Z"
                  fill="white"
                />
              </g>
            </svg>
            <p className="text-white font-medium text-base">{user.email}</p>
            <svg
              className={`w-3 h-3 ms-3 ${showLogoutButton && "rotate-180"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              ></path>
            </svg>
          </button>
          {showLogoutButton && <LogoutButton />}
        </div>
      </div>
    </nav>
  );
};
