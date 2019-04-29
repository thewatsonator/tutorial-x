## Use Array.prototype.map()

`map` in JSX placed inside braces is automatically converted to a string with `.join('')`.

```javascript
const BlogPosts = ({ posts }) => (
  <div className="blog__posts container row">
    {posts.map((post, index) => (
      <BlogPost {...post} key={`blog-post-${index}`} />
    ))}
  </div>
);
```
