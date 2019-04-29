---
title: Convert to a stateless function component
codesandbox: 5xzow1lj14
answer: /content/exercises/fragment-answer.md
---

Convert the following class to a stateless functional component. Destructure the props to parameters `title` and `description`.

```javascript
class BlogPostExcerpt extends Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </>
    );
  }
}
```
