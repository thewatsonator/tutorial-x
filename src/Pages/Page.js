import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Layout, Breadcrumb, Alert } from "antd";
import RemoteMarkdown, {
  ReactHandbookMarkdown,
  ExerciseMarkdown
} from "../Components/RemoteMarkdown";
import Markdown from "../Components/Markdown";

const { Content } = Layout;

const Exercises = ({ exerciseMarkdown }) =>
  exerciseMarkdown.length > 0 && (
    <>
      <h2>Exercises</h2>
      {exerciseMarkdown.map((markdownUrl, index) => (
        <Suspense key={`remote-markdown-${0}`} fallback="Loading...">
          <RemoteMarkdown url={markdownUrl} Render={ExerciseMarkdown} />
        </Suspense>
      ))}
    </>
  );

/**
 *
 * // https://ant.design/components/layout/
 */
const Page = ({
  title,
  parent,
  reactHandbook = "",
  content = "",
  rawContent = "",
  otherMarkdown = [],
  exerciseMarkdown = [],
  warning = null,
  children
}) => (
  <Layout style={{ padding: "0 24px 24px" }}>
    {title !== "Home" && (
      // https://ant.design/components/breadcrumb/
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{parent}</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
    )}
    <Content
      // https://ant.design/components/layout/#Component-Overview
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
            <RemoteMarkdown url={markdownUrl} escapeHtml={false} />
          </Suspense>
        ))}
        <Exercises exerciseMarkdown={exerciseMarkdown} />
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
