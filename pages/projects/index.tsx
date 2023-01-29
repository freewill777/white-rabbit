//* === Components === *//
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/common/PageBanner/PageBanner";
import Project from "@/components/pages/projects/Project/Project";

//* === Styles & Utils === *//
import styles from "@/styles/pages/projects.module.scss";

interface Props {}
export default function ProjectsPage() {
  return (
    <Layout home={false}>
      <PageBanner
        title={"Projects"}
        description={
          "A curated collection of my latest works in the web development field."
        }
      />
      <div className={styles.list}>
        <Project
          title="Logos"
          description="Logo proposals for businesses & start-ups"
          tech="Art Direction, Branding, Illustration"
        />
        {/* <Project
          title="Swirl"
          description="A music application that allows for creating and sharing playlists with other users."
          tech="Django / PostgreSQL / Docker / Heroku"
        />
        <Project
          title="Orbit"
          description="A video game social media platform utilizing the RAWG.io API, to seach, collect, and display collections of video games."
          tech="Node.js / MongoDB / Express / Heroku"
        />
        <Project
          title="Tic-Tac-Toe"
          description="A rendition of the classic Tic-Tac-Toe game."
          tech="Next.js / TypeScript / Sass / Vercel"
        /> */}
      </div>
    </Layout>
  );
}
