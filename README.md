<img src="https://codebuild.ap-southeast-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiYVFkc2JxTFdMblEvTzA2dmo5L3RTTHhFVFpBYnF2dk1tZXBHbHZiTmFQakFJQ3JFQmd3WmJGem92K3VnbHRjSzk3b3dwanlHRnN1bmF4dE5TZ09wUlhjPSIsIml2UGFyYW1ldGVyU3BlYyI6IkZEZTdBYkkrMUNFRGE1RmgiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=develop" />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### requirement enviroments
##### node
```
- recommended you to use nvm [https://github.com/nvm-sh/nvm]
- node version => greater than > 8, recommended => 8.12.0, 10.12.0, 12.12.0, 14.12.0
- using => yarn
env file
- touch .env.development and .env.production
```

### `yarn start`
    - yarn install 
    - yarn start
Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

```
 in some case of node version as our node-sass version, need to upgrade in the furture
 - need to install node-sass -g to local machine
 - and then "npm rebuild node-sass"
```

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

- yarn run buildDev
    Builds the app for development to the `build` folder.<br>        
- yarn run buildProd
    Builds the app for production to the `build` folder.<br>

    Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `Code Splitting`

- resources
    https://webpack.js.org/guides/code-splitting/
- we used webpack as a bundler, webpack do for <mark> code splitting </mark>& <mark>image minimizing</mark><mark> javascript optimization</mark> <mark>compression</mark>
    - you can see at <mark> webapck.*.js</mark> files

### `Analyzing the Bundle Size`

    - yarn run watch
    - add webpack plugins at webapck config js file
    - and then if you command yarn start
        our app is running at <mark><a>localhost:3000</a></mark>
        and also webpack analyze is running at <mark><a>localhost:8000</a></mark>


### `Making a Progressive Web App`

    - it will be furture plan

### `Deployment`
    - we created code pipeline between github and aws
    1. deploy on https://staging.owaytrip.com
        - when we merge our feature branch to develope
            - it will be auto deploy at https://staging.owaytrip.com
            - but we need to clear cache at cloudfront at https://console.aws.amazon.com/cloudfront/home?region=ap-southeast-1#distribution-settings:E2IKA5D16QWFRM
    2. deploy on sandbox
        - when we merge our feature branch to sandbox branch
            - it will be auto deploy at http://sandbox.travel.spa.s3-website-ap-southeast-1.amazonaws.com
    3. deploy Development-PHP7 integreted with SPA
        * deploy https://development.owaytrip.com
            - command => <mark> yarn run buildDev</mark>
                * this command will generate a <mark>build</mark> folder
                * copy all files of this folder 
                * paste to php source-code
                * change index.html to index.php
                * and then continue using Php deployment flow
        * deploy https://oway.com.mm
            - command => <mark> yarn run buildProd</mark>
                * this command will generate a <mark>build</mark> folder
                * copy all files of this folder 
                * paste to php source-code
                * change index.html to index.php
                * and then continue using Php deployment flow

### `project direcotry`
    - public
    - server
    - src
        - actions
        - assests
        - components
        - constants 
        - containers 
        - epics
        - reducers
        - services
        - styles
        - UI
        - utils
        index.js
        localStorage.js
        serviceWorker.js
        - tools
    webpack.base.js
    webpack.config.js
    webpack.dev.js
    webpack.prod.js
    package.json
- public
    - html file
- server
    - test server side rendering 
    - not use for spa
- src
    it's a main folder
    - action
        - redux actions files
    - assests
        - images files
        - we need to move images to s3 in the furture
    - components
        - resuable components and view components files
    - containers
        - big components and route components
    - constants
        - credential files 
        - constants data files
    - reducers
        - redux states
    - styles
        - css and scss
    - UI
        - theme css
    - utils
        - helper function 
        - route history
    - tools
        - to change credentials files
- webpack config files

### `How to split components`
React Components are big due to our business requirements, it's not a problem
split <b>container components</b> and <b>Reusable components</b> and <b>view components</b>

### `Develop, Refactoring and Upgrading reactjs thinking`

- do the develope feature and refactioning the components
- in this area, I want you that you should refactor using react Functional components and hooks.
```
    PassengerInfo
    Payments
    (remark: you will make sure refactor this container components)
```

### `Resuable Components`
    - ApplicationBar
    - SearchComponents
    - ApplicationFooter
    - SearchInputAutocomplete
    - CountryCodeSelect


### `Flux Atchitecture of Oway Single Page App`
    you need to know these javascript library
    
        * reactjs
        * reduxjs
        * rxjs
        
    - create every components using reactjs
    - state management using reduxjs
    - to call api using redux-observable and rxjs

### `What we follow code snippets?`

<a>https://airbnb.io/javascript/react/</a>

### Contributers 

If you're a contributer of oway Tech, you have responsible to update Docs.


    
