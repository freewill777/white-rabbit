//* === Components === *//
import Link from "next/link";
import { RiArrowRightCircleFill } from "react-icons/ri";

//* === Styles & Utils === *//
import { motion, Variants } from "framer-motion";
import styles from "./Description.module.scss";

interface Props {
  timeline: Variants;
  animation: {
    lineAnimation: Variants;
    buttonAnimation: Variants;
  };
}

export default function Description({ timeline, animation }: Props) {
  return (
    <div className={styles.container}>
      <motion.p
        variants={timeline}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <motion.span variants={animation.lineAnimation}>
          Don{"'"}t settle for a mediocre website - let us create a custom,
          cutting-edge design for you! Contact us now.
        </motion.span>
      </motion.p>
      <motion.p
        variants={timeline}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <motion.span variants={animation.lineAnimation}>
          We can help you bring your vision to life, whether you need a simple
          brochure website or a complex e-commerce platform, using the latest
          technologies and tools to ensure that your website is fast, secure,
          and scalable. Ask me about ongoing support and maintenance to keep
          your products running smoothly.
        </motion.span>
      </motion.p>
      <motion.p
        variants={timeline}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <motion.span
          variants={animation.lineAnimation}
          className={styles.accent}
        >
          <Link href="/about" className={styles.accent}>
            <span>More</span>
            <motion.span
              className={styles.arrow}
              variants={animation.buttonAnimation}
            >
              <RiArrowRightCircleFill />
            </motion.span>
          </Link>
        </motion.span>
      </motion.p>
    </div>
  );
}
