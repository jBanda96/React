import React from 'react'; // Analogous to createElement
import ReactDOM from 'react-dom'; // Analogous to appendChild
import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('app')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// Usando React
// const element = <h1>This page was built with React</h1>
const container = document.getElementById('app')

// ReactDOM.render(element, container)

// const googleLink = React.createElement('a', {href: 'https://google.com'}, 'Google')
// ReactDOM.render(googleLink, container, )

const badge = <Badge/>
ReactDOM.render(badge, container)








// Sin usar React
// const element = document.createElement('h1')
// element.innerText = 'This page was built with Vanilla JS'

// const container = document.getElementById('app')
// container.appendChild(element)

