import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import recipe from "../../assets/recipe.svg";
import profile from "../../assets/profile.svg";
import shop from "../../assets/shop.svg";
import settings from "../../assets/settings.svg";

import "./Navbar.scss";
import RightAddon from "../right-addon/RightAddon";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const router = useLocation();
  const links: { text: string; route: string; icon: string }[] = [
    {
      text: "Recipe",
      route: "/recipe",
      icon: recipe,
    },
    {
      text: "Shop",
      route: "/shop",
      icon: shop,
    },
    {
      text: "Profile",
      route: "/profile",
      icon: profile,
    },
    {
      text: "Settings",
      route: "/settings",
      icon: settings,
    },
  ];

  return (
    <div className="navbar">
      <div className="left-side">
        <img src={logo} className="logo" alt="" />
        <RightAddon placeholder="Search jupiter" />
      </div>

      <div className="right-side">
        <button className="main-btn">Get $20 off</button>
        {links.map((linkData) => (
          <Link to={linkData.route}>
            <div className="right-item-link">
              <img src={linkData.icon} alt="" />
              <p
                className={`${
                  linkData.route.toLowerCase() ===
                    router.pathname.toLowerCase() && "active"
                }`}
              >
                {linkData.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
