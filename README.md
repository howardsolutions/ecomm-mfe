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