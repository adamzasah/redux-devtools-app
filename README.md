# Redux DevTools App
Remote Redux DevTools Electron monitor app

Monitor [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) via standalone desktop app. 

Intended for other browsers without Redux DevTools extension (Safari, Edge, IE) and/or React Native 

Goal is to provide Redux DevTools as standalone app like [React DevTools](https://github.com/facebook/react-devtools) does.

![Demo](https://adamfolwarczny.com/img/github/redux-devtools-app-demo.png)

Apps renders [remotedev-app](https://github.com/zalmoxisus/remotedev-app).

Use with: [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools).

## Installation and usage
#### Globally
- install ```$ npm install -g redux-devtools-app``` 
- run ```$ redux-devtools-app```
#### As project dependency
- ```$ npm install --save-dev redux-devtools-app``` 
- add `"redux-devtools": "react-devtools-app"` to the `scripts` section in your `package.json`
- run `npm run redux-devtools` from your project folder