import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Layout, Breadcrumb, Alert } from "antd";
import RemoteMarkdown, {
  ReactHandbookMarkdown
} from "../Components/RemoteMarkdown";
import Markdown from "../Components/Markdown";

const { Content } = Layout;

const Page = ({
  title,
  parent,
  reactHandbook = "",
  content = "",
  rawContent = "",
  otherMarkdown = [],
  warning = null,
  children
}) => (
  <Layout style={{ padding: "0 24px 24px" }}>
    {title !== "Home" && (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{parent}</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
    )}

    <Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      <Content
        style={{
          maxWidth: "700px"
        }}
      >
        <h1>{title}</h1>
        {!!warning && (
          <Alert
            message={warning.message}
            description={<Markdown source={warning.description} />}
            type="warning"
            showIcon
          />
        )}
        {!!reactHandbook && (
          <Suspense fallback="Loading...">
            <ReactHandbookMarkdown reactHandbook={reactHandbook} />
          </Suspense>
        )}
        {otherMarkdown.map((markdownUrl, index) => (
          <Suspense key={`remote-markdown-${0}`} fallback="Loading...">
            <RemoteMarkdown url={markdownUrl} />
          </Suspense>
        ))}
        {title !== "Home" && title !== "How to use" && (
          <>
            <hr />
            <Suspense fallback="Loading...">
              <RemoteMarkdown url="/content/tutorial-meta.md" />
            </Suspense>
          </>
        )}
        {children}
        {!!content && <Markdown source={content} />}
      </Content>
    </Content>
  </Layout>
);

export default Page;

export const __page = props => () => <Page {...props} />;
