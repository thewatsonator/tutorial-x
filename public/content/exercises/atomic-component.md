---
title: Convert to molecule component
codesandbox: o7j6733k8y
answer: /content/exercises/atomic-component-answer.md
---

VerticalCard should be made up of the following atomic components:

- Card ( Wrapper component with other components as children )
- CardImage ( props: image, alt )
- CardTitle ( props: title )
- CardDescription ( props: description )
- Tags ( props: [tag] ) -> Tag ( props: tag )

VerticalCard should have the following props:

- image
- alt
- title
- description
- tags

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg mt-6 mb-6">
  <img
    class="w-full"
    src="https://tailwindcss.com/img/card-top.jpg"
    alt="Sunset in the mountains"
  />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-grey-darker text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span
      class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
      >#photography</span
    >
    <span
      class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
      >#travel</span
    >
    <span
      class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"
      >#winter</span
    >
  </div>
</div>
```
