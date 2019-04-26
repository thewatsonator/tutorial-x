import React from "react";
import ReactDOM from "react-dom";
import { slugify } from "./utils";
import Home from "./Pages/000-Home";
import Variables from "./Pages/001-Variables";
import ArrowFunctions from "./Pages/002-Arrow-Functions";
import { __page } from "./Pages/Page";
import { Icon } from "antd";

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1163797_3ei5ikue2ts.js"
});

export const firstSection = "Modern Javascript";

const base = [
  {
    name: "Introducton",
    icon: "info",
    subMenu: [{ name: "How to use", component: Home, key: "how-to-use" }]
  },
  {
    name: firstSection,
    Icon: MyIcon,
    icon: "icon-JavaScript",
    subMenu: [
      { name: "Variables", component: Variables },
      { name: "Arrow Functions", component: ArrowFunctions },
      {
        name: "Rest and Spread",
        component: __page({
          title: "Rest and Spread",
          reactHandbook: "javascript-rest-spread/index.md"
        })
      },
      {
        name: "Object and array destructuring",
        component: __page({
          title: "Object and array destructuring",
          reactHandbook: "javascript-destructuring/index.md"
        })
      },
      {
        name: "Template Literals",
        component: __page({
          title: "Template Literals",
          reactHandbook: "javascript-template-literals/index.md"
        })
      },
      {
        name: "Classes",
        component: __page({
          title: "Classes",
          reactHandbook: "javascript-classes/index.md"
        })
      },
      {
        name: "Promises",
        component: __page({
          title: "Promises",
          reactHandbook: "javascript-promises/index.md"
        })
      },
      {
        name: "Async Await",
        component: __page({
          title: "Async Await",
          reactHandbook: "javascript-async-await/index.md"
        })
      },
      {
        name: "ES Modules",
        component: __page({
          title: "ES Modules",
          reactHandbook: "es-modules/index.md"
        })
      },
      {
        name: "Compiling modern Javascript",
        component: __page({
          title: "Compiling modern Javascript to ES5",
          otherMarkdown: ["/content/compiling-modern-javascript.md"]
        })
      },
      {
        name: "Polyfills",
        component: __page({
          title: "Polyfills with Polyfill.io",
          otherMarkdown: ["/content/polyfills.md"]
        })
      },
      {
        name: "Fetch API",
        component: __page({
          title: "Fetch API",
          otherMarkdown: ["/content/fetch-api.md"]
        })
      },
      {
        name: "Coding Conventions",
        component: __page({
          title: "Coding Conventions",
          otherMarkdown: ["/content/coding-conventions.md"]
        })
      }
    ]
  },
  {
    name: "React Concepts",
    Icon: MyIcon,
    icon: "icon-react",
    subMenu: [
      {
        name: "Single Page Application",
        component: __page({
          title: "Single Page Application",
          parent: "React Concepts",
          reactHandbook: "single-page-application/index.md"
        })
      },
      {
        name: "Declarative",
        component: __page({
          title: "Declarative",
          parent: "React Concepts",
          reactHandbook: "react-declarative/index.md"
        })
      },
      {
        name: "Immutability",
        component: __page({
          title: "Immutability",
          parent: "React Concepts",
          reactHandbook: "react-immutability/index.md"
        })
      },
      {
        name: "Purity",
        component: __page({
          title: "Purity",
          parent: "React Concepts",
          reactHandbook: "react-purity/index.md",
          otherMarkdown: ["/content/purity.md"]
        })
      },
      {
        name: "Composition",
        component: __page({
          title: "Composition",
          parent: "React Concepts",
          reactHandbook: "react-composition/index.md"
        })
      },
      {
        name: "The Virtual DOM",
        component: __page({
          title: "The Virtual DOM",
          parent: "React Concepts",
          reactHandbook: "react-virtual-dom/index.md"
        })
      },
      {
        name: "Unidirectional Data Flow",
        component: __page({
          title: "Unidirectional Data Flow",
          parent: "React Concepts",
          reactHandbook: "react-unidirectional-data-flow/index.md"
        })
      }
    ]
  },
  {
    name: "In-Depth React",
    Icon: MyIcon,
    icon: "icon-react",
    subMenu: [
      {
        name: "JSX",
        component: __page({
          title: "JSX",
          parent: "In-Depth React",
          reactHandbook: "jsx/index.md"
        })
      },
      {
        name: "Components",
        component: __page({
          title: "Components",
          parent: "In-Depth React",
          reactHandbook: "react-components/index.md",
          otherMarkdown: ["/content/components.md"]
        })
      },
      {
        name: "State",
        component: __page({
          title: "State",
          parent: "In-Depth React",
          reactHandbook: "react-state/index.md"
        })
      },
      {
        name: "Props",
        component: __page({
          title: "Props",
          parent: "In-Depth React",
          reactHandbook: "react-props/index.md"
        })
      },
      {
        name: "Presentation vs Containers",
        component: __page({
          title: "Presentation vs Container Components",
          parent: "In-Depth React",
          reactHandbook: "react-presentational-vs-container-components/index.md"
        })
      },
      {
        name: "State vs Props",
        component: __page({
          title: "State vs Props",
          parent: "In-Depth React",
          reactHandbook: "state-vs-props/index.md"
        })
      },
      {
        name: "Events",
        component: __page({
          title: "Events",
          parent: "In-Depth React",
          reactHandbook: "react-events/index.md"
        })
      },
      {
        name: "Hooks",
        component: __page({
          title: "Hooks",
          parent: "In-Depth React",
          reactHandbook: "react-hooks/index.md",
          otherMarkdown: ["/content/use-hooks.md"],
          warning: {
            message: "useReducer",
            description:
              "It's better to choose `useReducer` for more complete state management than `useState`.   `useReducer` follows the Redux pattern.  Further reading is mentioned below."
          }
        })
      },
      {
        name: "React Fragment",
        component: __page({
          title: "React Fragment",
          parent: "In-Depth React",
          reactHandbook: "react-fragment/index.md"
        })
      },

      {
        name: "Forms",
        component: __page({
          title: "Forms",
          parent: "In-Depth React",
          reactHandbook: "react-forms/index.md"
        })
      },
      {
        name: "Reference a DOM Element",
        component: __page({
          title: "Reference a DOM Element",
          parent: "In-Depth React",
          reactHandbook: "react-ref-element/index.md"
        })
      },
      {
        name: "Render Props",
        component: __page({
          title: "Render Props",
          parent: "In-Depth React",
          reactHandbook: "react-render-props/index.md"
        })
      },
      {
        name: "Higher Order Components",
        component: __page({
          title: "Higher Order Components",
          parent: "In-Depth React",
          reactHandbook: "react-higher-order-components/index.md"
        })
      },
      {
        name: "CSS in React",
        component: __page({
          title: "CSS in React",
          parent: "In-Depth React",
          reactHandbook: "react-css/index.md"
        })
      },
      {
        name: "SASS in React",
        component: __page({
          title: "SASS in React",
          parent: "In-Depth React",
          reactHandbook: "react-sass/index.md"
        })
      }
    ]
  },
  {
    name: "Bonus React",
    icon: "dollar",
    subMenu: [
      {
        name: "Lifecycle Events",
        component: __page({
          title: "Lifecycle Events",
          parent: "Bonus",
          reactHandbook: "react-lifecycle-events/index.md"
        })
      },
      {
        name: "Context API",
        component: __page({
          title: "Context API",
          parent: "Bonus",
          reactHandbook: "react-context-api/index.md"
        })
      },
      {
        name: "PropTypes",
        component: __page({
          title: "PropTypes",
          parent: "Bonus",
          reactHandbook: "react-proptypes/index.md"
        })
      },

      {
        name: "Server Side Rendering",
        component: __page({
          title: "Server Side Rendering",
          parent: "Bonus",
          reactHandbook: "react-server-side-rendering/index.md"
        })
      },
      {
        name: "Code Splitting",
        component: __page({
          title: "Code Splitting",
          parent: "Bonus",
          reactHandbook: "react-code-splitting/index.md"
        })
      },
      {
        name: "Styled Components",
        component: __page({
          title: "Styled Components",
          parent: "Bonus",
          reactHandbook: "styled-components/index.md"
        })
      }
    ]
  },
  {
    name: "Testing",
    icon: "check-circle",
    iconProps: { theme: "twoTone", twoToneColor: "#52c41a" },
    subMenu: [
      {
        name: "Jest",
        component: __page({
          title: "Jest",
          parent: "Testing",
          reactHandbook: "jest/index.md"
        })
      },
      {
        name: "Testing Components",
        component: __page({
          title: "Testing Components",
          parent: "Testing",
          reactHandbook: "react-testing-components/index.md"
        })
      }
    ]
  }
];

const withSlugs = base.map(menu => ({
  iconProps: {},
  ...menu,
  key: slugify(menu.name),
  subMenu: menu.subMenu.map(subMenu => ({
    ...subMenu,
    key: slugify(subMenu.name)
  }))
}));

export const flatMenu = withSlugs.reduce(
  (ac, it) => {
    return ac.concat(it.subMenu);
  },
  [{ name: "How to use", component: Home, key: "" }]
);

export const openMenu = withSlugs.map(it => it.key);

export default withSlugs;