## Atomic Design

The [Atomic Design Pattern](http://bradfrost.com/blog/post/atomic-web-design/) deconstructs elements into progressively smaller components. The smaller components are the more reusable they are.

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

## Best Practice

- Keep components as small and dumb as often possible to promote reusability and testability.
- Opt for stateless functional components in most cases - easier to test and promotes seperation of concerns.
- Avoid requests from within components - this makes testing difficult.
- Use object spread operator in functional components to extract relevant properties
- Pass only objects which are needed to low level child components
- Use mock functions to generate mock data. A stateless component should be able to render a default view with zero external prop input.
