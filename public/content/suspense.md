React.Suspense allows us to suspend the rendering of our component or components until a condition is met ( for example data from an endpoint or a resource is loaded ) and until then show a fallback (for-example 'Loading...')

This is great for using with a custom hook for fetch.

- https://github.com/CharlesStover/fetch-suspense
- https://medium.com/@Charles_Stover/react-suspense-with-the-fetch-api-a1b7369b0469

```javascript
export const RemoteMarkdown = ({ url, ...rest }) => {
  // custom hook
  const data = useFetch(url);
  // parse markdown string
  const parsed = matter(data);
  return (
    <>
      <Markdown source={parsed.content} {...rest} />
    </>
  );
};

const Page = () => (
  <Container>
    <Sidebar />
    <Content>
      // 'Loading...' will be displayed while the remote file is fetched
      <Suspense fallback="Loading...">
        // This component doesn't render until the data is fetched
        <RemoteMarkdown url="https://some.com/remote-markdown-file.md" />
      </Suspense>
    </Content>
  </Container>
);
```

## Tutorial code example

https://github.com/thewatsonator/tutorial-x/blob/b213f5642ed1f0873ef896e267fca9c2b3d6b387/src/Components/RemoteMarkdown.js#L10
