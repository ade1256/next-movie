import { Col, Menu, Row, Switch } from "antd";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import Constants from "../../Config/Constants";
import { getLang } from "../../redux/themeSlice";
import useTheme from "../../utils/useTheme";
import { NavbarWrapper } from "./Navbar.style";

const Navbar: FC = () => {
  const lang = useSelector(getLang);
  const { theme, changeLanguage } = useTheme();
  const router = useRouter();

  const getActiveMenu = () => {
    let menu = "1";
    const locationMenu = router.pathname;
    if (locationMenu === "/") {
      menu = "1";
    }
    if (locationMenu === "/favourites") {
      menu = "2";
    }
    return menu;
  };
  return (
    <NavbarWrapper>
      <Row>
        <Col span={22}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[`${getActiveMenu()}`]}
          >
            <Menu.Item key={1} onClick={() => router.push("/")}>
              {Constants.MESSAGE[`${lang}`].home}
            </Menu.Item>
            <Menu.Item key={2} onClick={() => router.push("/favourites")}>
              {Constants.MESSAGE[`${lang}`].favourites}
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={2}>
          <Switch
            checked={theme.lang === "en"}
            onChange={changeLanguage}
            checkedChildren="en"
            unCheckedChildren="id"
          />
        </Col>
      </Row>
    </NavbarWrapper>
  );
};

export default Navbar;
