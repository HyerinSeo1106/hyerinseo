import { useLocation, useNavigate } from "react-router-dom";
import CV from "../../assets/etc/CV_Hyerin Seo_3.pdf";
import HomeIcon from "@mui/icons-material/Home";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useState, useEffect } from "react";
useEffect;
function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  function goLink(href) {
    if (isOpenMobileMenu) setIsOpenMobileMenu(false);
    navigate(href)
  }

  useEffect(() => {
    const checkWindowSize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 640 && isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, [screenWidth, isOpenMobileMenu]);

  return (
    <>
      <nav className="nav">
        <h1
          onClick={() => {
            goLink("/");
          }}
        >
          Hyerin Seo
        </h1>
        <div className="d-flex">
          {screenWidth <= 640 && (
            <button
              className={`btn-toggle ${isOpenMobileMenu ? 'open' : 'close'}`}
              onClick={() => {
                setIsOpenMobileMenu(!isOpenMobileMenu);
              }}
            >
              {isOpenMobileMenu ? <CloseRoundedIcon sx={{ fontSize: 40, color: '#fff' }} /> : <MenuRoundedIcon />}
            </button>
          )}

          <ul
            className={`menu-list ${
              screenWidth <= 640
                ? isOpenMobileMenu
                  ? "mobile show"
                  : "mobile hide"
                : ""
            }`}
          >
            <li
              onClick={() => {
                goLink("/");
              }}
            >
              {screenWidth <= 640 ? 'Home' : <HomeIcon />}
            </li>
            <li>
              <a href={CV} target="_blank">
                CV
              </a>
            </li>
            <li
              className={pathname === "/research" ? "active" : ""}
              onClick={() => {
                goLink("/research");
              }}
            >
              Research
            </li>
            <li
              className={pathname === "/teaching" ? "active" : ""}
              onClick={() => {
                goLink("/teaching");
              }}
            >
              Teaching
            </li>
          </ul>
          {screenWidth < 640 && (
            <div className={`dimm ${isOpenMobileMenu ? "show" : "hide"}`}></div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
