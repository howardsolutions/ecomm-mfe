# Micro Frontend Architecture Notes and Projects

## Read My Public Note on MicroFE in order here.

### 1. [Micro Frontend 101](https://howardphung.hashnode.dev/micro-frontends-101)

### 2. [Understanding Module Federation](https://howardphung.hashnode.dev/understanding-the-basics-of-module-federation)

### 3. [Share Dependencies between MicroFE Apps](https://howardphung.hashnode.dev/share-dependencies-between-micro-fe-apps)

## Application Requirements (for MFP)

<details>

<summary> Open to Read 📂 </summary>

### Inflexible Requirement #1: ZERO Coupling between Child Projects

👉 NO import of functions / objects / classes / etc

👉 NO Shared State

👉 Shared libraries through MF is OK

### Inflexible Requirement #2: NEAR ZERO coupling between CONTAINER and CHILD APPS

👉 CONTAINER shouldn't assume that a CHILD is Using a PARTICULAR framework

👉 Any neccessary Communication done with callbacks or Simple Events

### Inflexible Requirement #3: CSS from one project shouldn't affect another.

### Inflexible Requirement #4: VERSION CONTROL (monorepo vs Separate REPOS) shoudn't have any impact on the overall project

### Inflexible Requirement #5: Container should be ABLE to decide to ALWAYS use the LATEST version of a micro Frontend or speficy a Specific version

1. Container will ALWAYS use the LATEST version of a CHILD app (does not require a Re-deploy of Container)

2. Container can SPECIFY EXACTLY WHAT VERSION of a child it wants to use (requires a re-deploy to change)

</details>

## REQUIREMENTs Arroud Deployment

👉 We want DEPLOY each microFE app independently (including the CONTAINER - HOST)

👉 Location of child app remoteEntry.js files must be known at BUILD TIME

👉 MANY FE deployment solutions assume you're deploying a single project - we need something that can handle MULTIPLE different ones.

👉 Probably need a CI CD pipeline of some sort

👉 At present, the remoteEntry.js file name is fixed! Need to think about Caching issues.

## PATH to Production

Git Monorepo, includes: Container, marketing, dashboard, auth.

Each time make a change to one of these projects

=> TRIGGER Build a production version of corresponding apps

=> UPLOAD the files to Amazon S3

## Workflow for deploying CONTAINER

- Whenever code is pushed to the master branch, and this commit contains a change to the `Container` folder

-- COMMANDS executed in a virtual machine HOSTED by GITHUB

=> Change into the container folder

=> Install dependencies

=> Create a production build using WEBPACK

=> Upload the result to AWS S3

## A production-style Workflow

👉 Each team develops features on git branches named something like `container-dev`

👉 Feature complete and ready for deployment? PUSH branch to github

👉 Create pull request to merge into master/main

👉 Other engineers REVIEW

👉 When ready to deploy, MERGE the PR

👉 Workflow detects a change => the `master / main` branch, deployment runs!

## Issues with CSS in Microfrontends

👉 In micro frontend we have multiple different apps, from different teams, each team can have slightly different way of styling, which leads to conflicting CSS when they assembled inside the container.

### SOLUTION

1. CSS SCOPING

- Custom CSS you are writing for your project
  - use CSS in JS lib
  - Use React built in component style scoping
  - Use Angular's built-in component style scoping....
  - "Namespace" all your CSS

2. CSS coming from a component library or CSS library (bootstrap)

   - Use a component library that does css-in-js
   - Manually build the css lib and apply namespacing techniques to it

## Inflexible Requirements Arround Navigation

### 1) BOTH Containner + Individual Sub-APPS need routing features

👉 Users can navigate around to different subapps using routing logic built into the Container

👉 Users can navigate around in a sub-app using routing logic built into the `subapp ITSELF`

👉 NOT ALL subapps will require routing.

### 2) Sub-apps might need to add in new pages/routes all the time

👉 New routes added to the sub-app shouldn't require a re-deploy of the Container

### 3) We might need to show 2 or more microFEs at the same time

👉 This will occur all the time if we have some kind of Sidebar nav that is built as a seperate microfrontend

### 4) We want to use "off the shelf" Routing Solution

👉 Building a routing library can be hard - we don't want to author a new one!

👉 Some amout of custom coding is OK

### 5) We need navigation features for sub-apps in both hosted mode and in isolation.

👉 Developing for each environment should be easy - a developer should immediately be able to see what path they are visiting

### 6) In different apps need to communicate information about routing, it should be done in as generic a fashion as possible

👉 Each app might be using a completely different navigation framework

👉 We might swap out or upgrade navigation libraries all the time -- shouldn't require a rewrite of the rest of the app.