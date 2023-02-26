# TV-INFO-DASHBOARD

### Local environment
```
npm version: 8.19.2
vue/cli version: 5.0.8
```

## Project setup
```
npm install
```

### Run the project locally
```
npm run dev
```

### Run the unit tests
```
npm run test:unit
```

### Access the "TVMaze dashaboard" web application
```
- Open the browser in http://localhost:5173/ to access the main menu
- Click on the "shows" menu or go to http://localhost:5173/shows
```

### Use of the "TVMaze dashaboard"
```
First you access to a main menu that explains to you how to access the shows information. If you click on the "Shows" menu you access to the shows dashboard. 

I only show 6 shows slicing the array retrieved from the backend. However, in future iterations, I would like to include pagination. 

The search is very easy to use. If you search by any word (for example "person") the first 6 shows resulting of the search query are retrieved. If you search with the empty box the first 6 shows retrieving from the "get all the shows" query are retrieved. If there are no results for your search, a message is displayed; "No results for this search". You can click on any show and check the summary of it in the right detail panel.
```

### Technologies
```
VueJS version:              Vue 3
CSS framework:              TailwindCSS
Javascript build tool:      Vite
Vue data store:             Pinia
Unit test framework:        Vitest
Access to the database:     Axios
Main programming language:  Typescript        

```

### Technological and architectural decissions
Vue 3 is a must for me as it is the newest standard in VueJS. If you create a project from scratch it is clear that you have to use Vue 3 instead of Vue 2 as the maintenance of the project is going to be easier.

About the CSS framework, in the past I used Bootstrap-Vue because I was using Vue 2 in the projects. However, it seems Bootstrap-Vue is associated, at least for the moment to Vue 2. I think you can use it with Vue 3 but on an experimental way. Because of that, I started using TailwindCSS which is a framework that provides a lot of different classes that guarantee good looking web apps, fast development and the way of using it is very intuitive. For example the classes used to provide responsiveness (sm, md, lg, etc) or the ones to manage the grid system (grid-cols-3). The transition towards TailwindCSS is very easy.

Vite is the alternative to Webpack and it is very trendy right now. The main difference regarding Webapack is that, when we are coding, the modifications are shown on a quicker way on our browser. Vite internally uses "esbuild", a JavaScript bundler that performs 10–100x faster than Webpack.

Regarding Unit Tests, I decided to use Vitest instead of Jest as for me it is much quicker to configure and use. I also use the "coverage-c8" library to create a basic coverage report on the command line. One of my testing strategies is using "snapshots" which is a very good way to check that the tested component has not been unintentionally modified from one commit to the next one.

Also, I'd like to talk about the data store used to insternally save the data retrieved from the backend (the TV Maze API). I've used Pinia which is the latest evolution of Vuex and the current standard. Basically you use a store object that you can fill in or modify according to your needs.

Finally, the technology I've used to retrieve the data from the backend is Axios. The way of using it is really simple and the code is more clear than other options (Fetch).

About the structure of the project, I've created it having in mind the reusability of the components in future projects. On this way, the components folder is divided in two: generic (components that could be used in other projects) and shows (components specific of the TV-INFO-DASHBOARD project).