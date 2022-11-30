import { useResizeScreenModifile } from "common/hooks";
import { useRouter } from "node_modules/next/router";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
const dataNav = [
  {
    page_name: "Home",
    url: "/",
  },
  {
    page_name: "About",
    url: "/about",
  },
  {
    page_name: "Services",
    url: "/services",
  },
  {
    page_name: "Investments",
    url: "/investments",
  },
  {
    page_name: "Contact",
    url: "/contact",
  },
];
const Header = () => {
  const [screen, setScreen] = useState(null);
  useResizeScreenModifile(setScreen);
  const ref = useRef();
  const [navActive, setNavActive] = useState(false);
  // nav
  const [showSidebar, setShowSidebar] = useState(false);
  // Close nav when click over
  useOutsideClick(ref, () => {
    if (showSidebar) setShowSidebar(false);
  });

  const router = useRouter();

  const listenScrollEvent = () => {
    let isActive = window.scrollY > 60;
    let navElement = document.getElementById("nav-desktop");
    setNavActive(isActive);
    if (isActive) {
      navElement.classList.add("fixed", "!top-0");
    } else {
      navElement.classList.remove("fixed", "!top-0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    setShowSidebar(false);
  }, [screen]);

  return (
    <>
      {screen === "DESKTOP" ? (
        <div
          id="nav-desktop"
          className="flex w-full items-center"
          style={{
            boxShadow: "rgb(0 0 0 / 0.25) 0px 8px 20px",
            backgroundColor: navActive ? "#fff" : "transparent",
            height: navActive ? "60px" : "80px",
          }}
        >
          <div className="flex w-full justify-around">
            {dataNav?.map((item) => {
              return (
                <div className="inline-block px-5" key={item.page_name}>
                  <a href={item.url || "/"}>
                    <span
                      className={` text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
                        router.pathname === "/"
                          ? "text-gray-700 hover:border-b-4 hover:border-blue-500 hover:text-blue-700"
                          : "hover:border-b-4"
                      } ${
                        router.pathname === item.url
                          ? "text-gray-700 "
                          : "hover:border-b-4 hover:border-blue-500 hover:text-blue-700"
                      } `}
                    >
                      {item.page_name}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          id="nav-desktop"
          className="flex w-full items-center"
          style={{
            boxShadow: "rgb(0 0 0 / 0.25) 0px 8px 20px",
            backgroundColor: navActive ? "#fff" : "transparent",
            height: navActive ? "60px" : "60px",
          }}
        >
          <div className="pt-3">
            <>
              {showSidebar ? (
                <button
                  className=" fixed right-6 top-4 z-50 flex cursor-pointer items-center text-4xl text-white"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <AiOutlineClose size={30} />
                </button>
              ) : (
                <FaBars
                  size={25}
                  className={`fixed right-6 top-4 z-50 flex cursor-pointer items-center text-4xl `}
                  onClick={() => setShowSidebar(!showSidebar)}
                />
              )}
              <div
                className={`fixed top-0 right-0 z-40 h-full w-[250px]  bg-slate-900 px-5 pt-10  text-white duration-300 ease-in-out ${
                  showSidebar ? "translate-x-0 " : "translate-x-full"
                }`}
              >
                <h3 className="mt-15 hover:text-cimg-header-span text-4xl font-semibold">
                  {dataNav.map((item) => {
                    return (
                      <div className={``} key={item.page_name}>
                        <a href={item.url || "/"}>
                          <span
                            className={` pb-5 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                              router.pathname === "/"
                                ? "text-cimg-header-span"
                                : "text-cimg-header-span"
                            } ${
                              router.pathname === item.url
                                ? "text-cimg-header-span "
                                : "text-cimg-header-nav-basic hover:font-bold hover:text-white"
                            } `}
                          >
                            {item.page_name}
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </h3>
              </div>
              <div
                className={`fixed inset-0 z-10 bg-black bg-opacity-60 transition-opacity ${
                  showSidebar ? "translate-x-0 " : "translate-x-full"
                }`}
              />
            </>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
