# Decoupled styling

## Solution 1 - React + TypeScript + Emotion

### Stack

- [React](https://github.com/facebook/react)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Emotion](https://github.com/emotion-js/emotion)

The solution will most probably work with other [CSS in JS](https://github.com/MicheleBertoli/css-in-js#features) techniques, like [styled-components](https://github.com/styled-components/styled-components) or [glamorous](https://github.com/paypal/glamorous).

### Example

- Install dependencies: `npm install`
- Run dev server: `npm start`

### Goals

Mission statement:

> For UI-components to support the similar level of decoupling which is present in native HTML/CSS (HTML element is decoupled from its styling by exposing an API to inject styling via `class` attribute or `className` property).

Requirements:

1.  UI component is decoupled from its styling. Styling is injected into the component via its API.
2.  UI component has its default, minimal styling, in case no styling is injected.
3.  Default styling may be overwritten by custom styling.
4.  Styling can be set for the UI-component and its children (and grand-children etc.)
5.  It's possible to customise the styling for the whole application in one run (styling theme).
