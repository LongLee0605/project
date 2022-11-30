import Title from "components/atoms/Title";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div style={{ boxShadow: "rgb(0 0 0 / 0.25) 0px 4px 10px" }}>
      <div className="container py-10">
        <div className="row">
          <div className="col-12 text-center lg:col-6">
            <p className="text-white">
              Built and designed by Le Tran Dang Long.
            </p>
            <p className="text-white">Copyright © 2022 All Rights Reserved.</p>
          </div>
          <div className="col-12 flex items-center justify-center lg:col-6">
            <div className="cursor-pointer text-white">
              {isVisible && (
                <div onClick={scrollToTop}>
                  <IoIosArrowUp size={30} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
