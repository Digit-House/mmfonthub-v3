import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../Header/anim";

interface LinkProps {
  data: {
    title: string;
    index: number;
    href: string;
  };
  isActive: boolean;
  setSelectedIndicator: (url: string) => void;
}

export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
}: LinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      />
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
