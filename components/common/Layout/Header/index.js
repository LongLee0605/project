import { useResizeScreenModifile } from "common/hooks";
import { useRouter } from "node_modules/next/router";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [screen, setScreen] = useState(null);
  useResizeScreenModifile(setScreen);
  const useOutside = useRef();
  const [navActive, setNavActive] = useState(false);
  // nav
  const [showSidebar, setShowSidebar] = useState(false);
  // Close nav when click over
  useOutsideClick(useOutside, () => {
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
            boxShadow: navActive ? "rgb(0 0 0 / 0.25) 0px 8px 20px" : "",
            backgroundColor: navActive ? "" : "transparent",
            backdropFilter: navActive ? "blur(10px)" : "blur(10px)",
            height: navActive ? "60px" : "140px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 flex justify-center lg:col-4">
                <a href="">
                  <Image
                    src="/assets/images/logo-header.png"
                    className={`${navActive ? "!h-[60px]" : "!h-[auto]"}`}
                    alt="Logo header"
                    width={navActive ? 80 : 140}
                    height={navActive ? 66 : 116}
                    layout="fixed"
                  />
                </a>
              </div>
              <div className="col-12 flex items-center justify-between lg:col-8">
                <div className="inline-block px-5 text-2xl font-semibold text-[#333] ">
                  <a href="#">
                    <span>Story</span>
                  </a>
                </div>
                <div className="inline-block px-5 text-2xl font-semibold text-[#333] ">
                  <a href="#">
                    <span>Skills</span>
                  </a>
                </div>
                <div className="inline-block px-5 text-2xl font-semibold text-[#333] ">
                  <a href="#">
                    <span>Projects</span>
                  </a>
                </div>
                <div className="inline-block px-5 text-2xl font-semibold text-[#333] ">
                  <a href="#">
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
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
          <div className="h-15 flex items-center justify-between px-8 lg:h-full ">
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
                  className={`fixed top-0 right-0 z-40 h-full w-[250px] bg-slate-900 px-5 pt-10 text-white duration-300 ease-in-out ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                  }`}
                >
                  <h3 className="mt-15 text-4xl font-semibold hover:text-gray-400"></h3>
                </div>
                <div
                  className={`fixed inset-0 z-10 bg-black bg-opacity-60 transition-opacity ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                  }`}
                />
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
