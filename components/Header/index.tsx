"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-[80px] lg:h-[106px] flex justify-between items-center border-b-gray-50 border-b-2 px-4 md:px-8 xl:px-16 lg:px-20 border-t-2 border-b-gray-50">
      <h1 className="flex-1 justify-start items-start">MMFONT</h1>
      <nav className="h-full">
        <ul className="flex flex-row h-full">
          <li className="hidden md:nav-item active ">FONTS</li>
          <li className="hidden md:nav-item">PREMIUM</li>
          <li className="nav-item">
            <div
              onClick={() => setIsActive(!isActive)}
              onKeyDown={() => setIsActive(!isActive)}
              className={styles.button}
            >
              <div
                className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
              />
            </div>
          </li>
        </ul>
      </nav>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;
