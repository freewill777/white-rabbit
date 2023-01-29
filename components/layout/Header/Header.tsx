//* === Components === *//
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ActiveLink from "@/components/common/ActiveLink/ActiveLink";

//* === Styles & Utils === *//
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Header.module.scss";

//* === Variants * === //
const timeline = {
  animate: {},
};

interface Props {
  home: boolean;
}

export default function Header({ home }: Props) {
  const lineAnimation = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
        delay: home ? 1.5 : 0,
      },
    },
  };

  const [active, setActive] = useState<boolean>(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <header className={styles.container}>
      <motion.nav
        variants={timeline}
        initial="initial"
        animate="animate"
        transition={{ delay: home ? 2 : 0 }}
      >
        <motion.div className={styles.name} variants={lineAnimation}>
          <ActiveLink text="Cristian Sfetcu" url="/" ammount="1" />
        </motion.div>
        <motion.div className={styles.title} variants={lineAnimation}>
          <span>Software engineer / Web Developer / </span>
          <Link href={"https://github.com/freewill777"}>
            <FaGithub />
          </Link>
          <Link href={"https://www.linkedin.com/in/cristian-sfetcu/"}>
            <FaLinkedin />
          </Link>
        </motion.div>
        <motion.div
          className={styles.links}
          style={{ marginRight: "10px" }}
          variants={lineAnimation}
        >
          <ActiveLink text="Home" url="" ammount="1" />
          <ActiveLink text="Projects" url="projects" ammount="new" />
          <ActiveLink text="About" url="about" ammount="2" />
          <ActiveLink text="Contact" url="contact" ammount="3" />
        </motion.div>
        <motion.div className={styles.menu} variants={lineAnimation}>
          <span onClick={() => handleClick()}>Menu</span>
          <div
            className={styles.navigation}
            style={
              active
                ? { display: "flex" }
                : { display: "none", background: "transparent" }
            }
          >
            <ActiveLink text="Home" url="" />
            <ActiveLink text="Projects" url="projects" ammount="new" />
            <ActiveLink text="About" url="about" />
            <ActiveLink text="Contact" url="contact" />
            <div className={styles.icons}>
              <Link href={"https://github.com/freewill777"}>
                <FaGithub />
              </Link>
              <Link href={"https://www.linkedin.com/in/cristian-sfetcu/"}>
                <FaLinkedin />
              </Link>
            </div>
            <div className={styles.exit} onClick={() => handleClick()}>
              X
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
}
