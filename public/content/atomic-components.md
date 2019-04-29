As mentioned previously in components, the [Atomic Design Pattern](http://bradfrost.com/blog/post/atomic-web-design/) deconstructs elements into progressively smaller components. The smaller components are the more reusable they are. Smaller components are used to create bigger components. From smallest to largest we have the different component levels.

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

The following card is a VerticalCard. This would be a molecule component. It could be made up of atomic components, image component, title component, description component and tags component.

<div class="max-w-sm rounded overflow-hidden shadow-lg mt-6 mb-6">
  <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-grey-darker text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
  </div>
</div>

Deconstruct the markup shown below into atomic components. Use the atomic components to create the molecule component `VerticalCard`
