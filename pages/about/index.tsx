import PageBanner from "@/components/common/PageBanner/PageBanner";
import Layout from "@/components/layout/Layout";
import Tech from "@/components/pages/about/Tech/Tech";

export default function AboutPage() {
  return (
    <Layout home={false}>
      <PageBanner
        title="About"
        description="Some of the tech I use to craft your website, web app or mobile app."
      />
      <Tech />
    </Layout>
  );
}
