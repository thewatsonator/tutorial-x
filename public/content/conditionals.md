## Basic if else

For simple display components you can use if else and return a different result depending on the conditional result.

```javascript
function List({ list }) {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return (
      <div>
        {list.map(item => (
          <ListItem item={item} />
        ))}
      </div>
    );
  }
}
```

Conditionally displayed components/elements in JSX can be achieved by using curly parentheses ( braces ) with ternary operator or logical operator.

Generally if there is a only one if else condition you will typically see ternary operator in use.

Nested ternaries are more controversial. AirBNB style guide is against nested ternary though prominent javascript commentator Eric Elliot argues for them:

https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340

## if with logical operator &&

```javascript
const BlogPost = ({ title, description = "", children }) => (
  <div>
    <h1>{title}</h1>
    // optionally display description if there is a value or display nothing
    {!!description && <p className="description">{description}</p>}
    {children}
  </div>
);
```

## if else with ternary operator

```javascript
const BlogPosts = ({ posts }) => (
  <div>
    {hasItems(post) ? (
      posts.map((post, index) => (
        <BlogPost {...post} key={`blog-post-${index}`} />
      ))
    ) : (
      <p>No posts</p>
    )}
  </div>
);
```

## ENUM as inline object

For multiple options Enum as inline object is a much cleaner approach than using switch statement or long nested ternary/if else. If the `option` value is undefined then nothing will display. In the following example we provide a default value for option.

```javascript
// default option is 'info'
const Notification = ({ text, option = "info" }) => {
  return (
    <div>
      {
        {
          info: <Info text={text} />,
          warning: <Warning text={text} />,
          error: <Error text={text} />
        }[option]
      }
    </div>
  );
};
```

## Additional reading

https://www.robinwieruch.de/conditional-rendering-react/
