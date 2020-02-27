# Aktify Code Challenge UI

`Aktify Code Challenge UI` is a web UI built using [React](https://reactjs.org/) and [Create React App](https://github.com/facebook/create-react-app).

By default, the API can be accessed at http://localhost:5052.


## Table of contents

- [Create React App](#create-react-app)
- [Adding packages](#adding-packages)
- [Architecture](#architecture)
    - [Project structure](#project-structure)
    - [Routing](#routing)
    - [Components](#components)
    - [Data access](#data-access)
- [Best practices](#best-practices)


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


## Adding packages

`Aktify Code Challenge UI` uses [Yarn](https://yarnpkg.com/) to manage dependencies. Because the UI runs inside of a Docker container, adding packages with Yarn and achieving code completion in your IDE/text editor requires additional steps.

In order to add a new dependency to the _running_ Docker container, do the following:

1. Open an interactive shell using `docker-compose exec ui sh`
1. Run `yarn add <DEPENDENCY>` (ex: `yarn add react-router react-router-dom`)

These commands should update [package.json](package.json) and [yarn.lock](yarn.lock). Keep in mind that even though these files have been altered and the package was installed in the running container, the package has **NOT** been installed in the image, meaning that when the container is stopped, the next time the container runs, it will not have this dependency installed. You can fix this by running:

1. `docker-compose up -d --build --force-recreate --no-deps --renew-anon-volumes ui`

This command will rebuild the image for the UI service and then recreate the UI container from the new image and start it.

The recommended approach is to add the package on your host machine first, then rebuild the image using the steps above. This will save an extra step and keep the node_modules folder on your host up-to-date with the running container. It's important to have a copy of the package installed on the host machine for code completion and type checking.


## Architecture

The following section describes the architecture of `Aktify Code Challenge UI`.


### Project structure

The following directory structure is used under `src/` to organize the code:

```
|- src/
    |- components/
    |- hooks/
    |- images/
    |- utils/
    |- views/
```

`src/components` - is a collection of reusable components. Notice that this directory makes heavy use of the `index.js` pattern of exposing code. Components typically have many concerns, including style, i18n, shared prop types, hooks, and private sub-components. Any components that should be exposed to the rest of the application should be exported in `index.js`.

 `src/hooks` - is a common landing place for hooks that are used in more than one component.
 
 `src/images` - is the place to put images that are used in the UI. See Create React App documentation for more information on how to import images into React code.
 
 `src/utils` - is where code lives that implements common non-hook, non-view functionality.
 
 `src/views` - is where View/Container components live.
 
 Take care to follow the patterns and practices that are already in place when altering the application.


### Routing

`Aktify Code Challenge UI` makes use of react-router to handle application routing. You can find the route configuration in [App.js](src/App.js).


### Components

This application makes use of the [Material Design](https://material.io/design/) design language and utilizes the [Material UI](https://material-ui.com/) implementation for React. When adding features, make as much use of the Material Design patterns, Material UI components, and best practices.
 
 Configuration for the Material UI theme is found in [index.js](src/index.js).


### Data access

Data access is handled by the [Apollo React Client](https://www.apollographql.com/docs/react/) and [Apollo's ReST link](https://www.apollographql.com/docs/link/links/rest/).

Configuration for the Apollo Client is found in [index.js](src/index.js).


## Best practices

Pay special attention to the following best practices:

- **_Avoid excessive styles._** Most styles should be focused on layout, not on design.
- **_Avoid class-based React components** Most components can be easily implemented using React Hooks inside functional components. Very few components need the fine-grained controls of class-based components.