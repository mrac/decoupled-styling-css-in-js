# Decoupled styling

## Solution - React + TypeScript + Emotion

### Stack

- [React](https://github.com/facebook/react)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Emotion](https://github.com/emotion-js/emotion)

The solution will most probably work with other [CSS in JS](https://github.com/MicheleBertoli/css-in-js#features) techniques, like [styled-components](https://github.com/styled-components/styled-components) or [glamorous](https://github.com/paypal/glamorous).

### Goals

Mission statement:

> Decoupling from styling for UI-components should be on similar level as in native HTML/CSS (HTML element is decoupled from its styling by exposing an API to inject styling via `class` attribute or `className` property).

Requirements:

1.  UI component is decoupled from its styling. Styling is injected into the component via its API.
2.  UI component has its default, minimal styling, in case no styling is injected.
3.  Default styling may be overwritten by custom styling via styling-API.
4.  Default styling absent from the styling-API, can be also overwritten (although "unsafely", with regards to [SemVer](https://semver.org/)).
5.  Styling can be set for the UI-component and its children (and grand-children etc.)
6.  It's possible to customise the styling for the whole application in one run (styling theme).

Additional requirements (no steps backwards):

1.  UI components styles are isolated (no name-conflicts, no chance to break)
2.  No implicit dependencies to styles

### Setup

- Install dependencies: `npm install`
- Run dev server: `npm start`
- Go to: http://localhost:3000

### Solution

#### Example of `MyButton` component

- [Styling API - TypeScript interface](https://github.com/mrac/decoupled-styling/blob/master/src/my-button/my-button-style.ts#L3)
- [Styling injected into parameter](https://github.com/mrac/decoupled-styling/blob/master/src/my-button/my-button.tsx#L5)
- [Implemented default styling and injected styling](https://github.com/mrac/decoupled-styling/blob/master/src/my-button/my-button.tsx#L17)

#### Higher-level - example of `App` component

- [`MyButton` usage](https://github.com/mrac/decoupled-styling/blob/master/src/app/app.tsx#L34)
- [Styling API - contains also children styling API](https://github.com/mrac/decoupled-styling/blob/master/src/app/app-style.ts#L10)

#### Application-level - themes

- Themes based on `App` component default styling - [Theme A](https://github.com/mrac/decoupled-styling/blob/master/src/themes/theme-a.ts), [Theme B](https://github.com/mrac/decoupled-styling/blob/master/src/themes/theme-b.ts)
- [Reset to component's default setting (disregard the mid-level component customisations)](https://github.com/mrac/decoupled-styling/blob/master/src/themes/theme-b.ts#L24)
- [Any level of customisation is possible, it's just CSS](https://github.com/mrac/decoupled-styling-css-in-js/blob/master/src/themes/theme-b.ts#L17)
- [Theme used](https://github.com/mrac/decoupled-styling/blob/master/src/index.tsx#L23)
