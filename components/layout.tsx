import { Breadcrumb, Layout } from "antd";
const { Header, Content, Footer } = Layout;
import "antd/dist/antd.css";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navbar } from ".";
import Constants from "../Config/Constants";
import { getLang } from "../redux/themeSlice";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent: FC<LayoutProps> = ({ children }) => {
  const lang = useSelector(getLang)
  return (
    <div>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Navbar />
      </Header>
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{Constants.MESSAGE[`${lang}`].home}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }} id="footer">
          Ade Prasetyo &copy; 2022 All right reserved
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutComponent;
