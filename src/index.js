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

const MItem = ({ to, children, ...props }) => (
  <Menu.Item key={`${to}-item`} {...props}>
    <Link to={to}>{children}</Link>
  </Menu.Item>
);

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

const ScrollToTop = withRouter(ScrollToTopInner);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Sider width={250} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              // defaultSelectedKeys={["1"]}
              defaultOpenKeys={openMenu}
              style={{ height: "100%", borderRight: 0 }}
            >
              {routes.map(menu => {
                const IconX = menu.Icon || Icon;
                return (
                  <SubMenu
                    key={menu.key}
                    title={
                      <span>
                        <IconX type={menu.icon} />
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
          </Sider>

          {flatMenu.map(route => (
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
