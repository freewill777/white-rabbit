//* === Components === *//
import Description from "./Description/Description";
import SectionHeader from "./SectionHeader/SectionHeader";

//* === Styles & Utils. === *//
import styles from "./PageBanner.module.scss";

interface Props {
  title: string;
  description: string;
  deployment?: string;
  github?: string;
  linkedIn?: string;
  phoneNumber?: string;
}

export default function PageBanner({
  title,
  description,
  deployment,
  github,
  linkedIn,
  phoneNumber
}: Props) {
  return (
    <div className={styles.container}>
      <SectionHeader title={title} />
      <Description
        description={description}
        deployment={deployment}
        github={github}
        linkedIn={linkedIn}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}
