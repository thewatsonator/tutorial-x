import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import useFetch from "fetch-suspense";
import matter from "gray-matter";
import Markdown from "./Markdown";
import { Alert } from "antd";

const RemoteMarkdown = ({ url, useDescription = true, ...rest }) => {
  const data = useFetch(url);
  const parsed = matter(data);
  return (
    <>
      {useDescription && parsed.data && !!parsed.data.description && (
        <Alert message={parsed.data.description} type="success" />
      )}
      <Markdown source={parsed.content} {...rest} />
    </>
  );
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
    />
  );
};

export default RemoteMarkdown;
