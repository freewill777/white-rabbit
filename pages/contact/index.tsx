import PageBanner from "@/components/common/PageBanner/PageBanner";
import Layout from "@/components/layout/Layout";

export default function index() {
  return (
    <Layout home={false}>
      <PageBanner
        title="Contact"
        description="Always welcome to talk! Reach me through these means: "
        github={"https://github.com/freewill777"}
        linkedIn={"https://www.linkedin.com/in/cristian-sfetcu/"}
      />
    </Layout>
  );
}
