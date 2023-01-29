import styles from "./Description.module.scss";
import { motion } from "framer-motion";
import { lineAnimation, timeline } from "../variants";
import Link from "next/link";

interface Props {
  description: string;
  deployment?: string;
  github?: string;
  linkedIn?: string;
  phoneNumber?: string;
}

export default function Description({
  description,
  deployment,
  github,
  linkedIn,
  phoneNumber,
}: Props) {
  return (
    <motion.p
      className={styles.container}
      variants={timeline}
      animate="animate"
      initial="initial"
    >
      <motion.span variants={lineAnimation}>{description}</motion.span>

      {phoneNumber && (
        <>
          <motion.span className={styles.links} variants={lineAnimation}>
            <Link
              href={"https://wa.me/40722913542?text=Hello"}
              className={styles.item}
            >
              Call me at <span className={styles['accent-clr']}>{phoneNumber}</span>
            </Link>
            <Link
              href={"https://wa.me/40722913542?text=Hello"}
              className={styles.link}
            >
              Send me a Whatsapp message 
            </Link>
          </motion.span>
        </>
      )}

      {linkedIn && github && (
        <>
          <motion.span className={styles.links} variants={lineAnimation}>
            <Link href={linkedIn ? linkedIn : "/"} className={styles.link}>
              LinkedIn profile
            </Link>
            <Link href={github ? github : "/"} className={styles.link}>
              GitHub page
            </Link>
          </motion.span>
        </>
      )}
    </motion.p>
  );

}
