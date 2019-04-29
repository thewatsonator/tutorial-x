```javascript
export const addSlug = props => ({
  ...props,
  slug: slugify(props.title)
});
```
