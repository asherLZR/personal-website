<p align="center">
  <img alt="site-logo" src="./src/images/projects/ashers-website.png" width="60" />
</p>
<h1 align="center">
  Asher's Personal Site
</h1>

This is my personal website built with the following:

- ⚡ Gatsby, React, Javascript
- 😲 Emotion, Styled Components
- 🚀 GraphQL
- 🦘 React Spring

It includes my blog, projects, and resume. 

- Images are lazy loaded with [Gatsby Image and Sharp](https://www.gatsbyjs.com/docs/working-with-images/)
- Animations are made with [React Spring](https://www.react-spring.io/) and [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- Sounds are made possible by [useSound](https://github.com/joshwcomeau/use-sound)
- [Dark theme](https://www.joshwcomeau.com/react/dark-mode/) on static sites
- Accessibility considerations are implemented with React Helmet [plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/), `:focus-visible` [polyfill](https://github.com/WICG/focus-visible), and `(prefers-reduced-motion)`
- Code syntax highlighting with [Prism](https://github.com/PrismJS/prism)

To run on local,

```shell
gatsby develop

# or

gatsby build && gatsby serve
```

