import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import useFetch from "fetch-suspense";
import matter from "gray-matter";
import Markdown from "./Markdown";
import { Alert, Card, Icon, Avatar, Collapse } from "antd";
const { Meta } = Card;
const { Panel } = Collapse;

const Answer = ({ answer }) =>
  !!answer && (
    <Collapse>
      <Panel header="Show Answer" key={`answer-${answer}`}>
        <Suspense fallback="Loading...">
          <RemoteMarkdown url={answer} />
        </Suspense>
      </Panel>
    </Collapse>
  );

export const ExerciseMarkdown = ({ parsed, ...rest }) => (
  <>
    <Card
      headStyle={{ backgroundColor: "#e6f7ff", borderColor: "#91d5ff" }}
      title={<h4>Exercise: {parsed.data.title}</h4>}
    >
      <Markdown source={parsed.content} {...rest} />
      <p>
        <a
          href={`https://codesandbox.io/s/${
            parsed.data.codesandbox
          }?fontsize=14`}
          target="__blank"
        >
          <img
            alt={`Edit ${parsed.data.codesandbox}`}
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
          />
        </a>
      </p>
      <Answer answer={parsed.data.answer} />
    </Card>
  </>
);

const DefaultMarkdown = ({ parsed, useDescription, ...rest }) => (
  <>
    {useDescription && parsed.data && !!parsed.data.description && (
      <Alert message={parsed.data.description} type="success" />
    )}
    <Markdown source={parsed.content} {...rest} />
  </>
);

export const RemoteMarkdown = ({
  url,
  Render = DefaultMarkdown,
  useDescription = true,
  ...rest
}) => {
  const data = useFetch(url);
  const parsed = matter(data);
  return <Render parsed={parsed} useDescription={useDescription} {...rest} />;
};

export const ReactHandbookMarkdown = ({
  reactHandbook,
  useDescription = true
}) => {
  const url = `https://raw.githubusercontent.com/flaviocopes/react-handbook/6c646c75a73070a425256038cc99d4996ad8dc1d/content/${reactHandbook}`;
  const imageUrl = image => url.replace(/index\.md/, image);
  return (
    <RemoteMarkdown
      url={url}
      useDescription={useDescription}
      transformImageUri={imageUrl}
      escapeHtml={false}
    />
  );
};

export default RemoteMarkdown;
