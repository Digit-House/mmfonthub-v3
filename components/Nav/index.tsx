import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../Header/anim";
import Link from "../Link";
import classNames from "classnames";
import useWindowSize from "@/hooks/useWindowSize";

const navItems = [
  {
    title: "FONTS",
    href: "/",
  },
  {
    title: "PREMIUM",
    href: "/premium",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const { width } = useWindowSize();
  const isMobile = width < 768;

  const items = navItems.filter((_, index) => (index > 1 ? true : isMobile));
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {items.map((data, index) => {
            return (
              <Link
                key={data.href}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <div className={styles.footer}>
          <ul
            className={classNames(
              styles.footerNav,
              "flex w-full justify-center items-center gap-12",
            )}
          >
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
