import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import routes, { flatMenu, openMenu } from "./routes";
import "antd/dist/antd.css";
import "./styles.css";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

/**
 * When clicking on a menu item lower down in the page
 * scroll to the top of the page so the content may be read from the top
 */
class ScrollToTopInner extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

/**
 * Wrap component for Router
 */
const ScrollToTop = withRouter(ScrollToTopInner);

/**
 * Ant.Design Menu
 * https://ant.design/components/layout/#components-layout-demo-side
 * https://ant.design/components/layout/#Layout.Sider
 */
const Sidebar = ({ children }) => (
  <Sider width={250} style={{ background: "#fff" }}>
    {children}
  </Sider>
);

/**
 * https://ant.design/components/menu/#Menu.Item
 */
const MItem = ({ to, children, ...props }) => (
  // https://ant.design/components/menu/#Menu.Item
  <Menu.Item key={`${to}-item`} {...props}>
    <Link to={to}>{children}</Link>
  </Menu.Item>
);

/**
 * https://ant.design/components/menu/
 * https://ant.design/components/menu/#Menu.SubMenu
 */
const SidebarMenu = () => (
  <Menu
    mode="inline"
    defaultSelectedKeys={[].concat(
      window.location.pathname !== "/"
        ? window.location.pathname.substr(1)
        : "how-to-use"
    )}
    defaultOpenKeys={openMenu}
    style={{ height: "100%", borderRight: 0 }}
  >
    {routes.map(menu => {
      const IconX = menu.Icon || Icon;
      // https://ant.design/components/menu/#Menu.SubMenu
      return (
        <SubMenu
          key={menu.key}
          title={
            <span>
              <IconX type={menu.icon} {...menu.iconProps} />
              {menu.name}
            </span>
          }
        >
          {menu.subMenu.map(subMenu => (
            <MItem key={subMenu.key} to={"/" + subMenu.key}>
              {subMenu.name}
            </MItem>
          ))}
        </SubMenu>
      );
    })}
  </Menu>
);

function App() {
  // https://reacttraining.com/react-router/web/guides/quick-start
  // https://ant.design/components/layout/
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Sidebar>
            <SidebarMenu />
          </Sidebar>
          {flatMenu.map(route => (
            // https://reacttraining.com/react-router/web/guides/basic-components/route-rendering-props
            <Route
              key={route.key}
              exact
              path={"/" + route.key}
              component={route.component}
            />
          ))}
        </Layout>
      </ScrollToTop>
    </Router>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
