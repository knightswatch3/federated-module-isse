import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/MyComponent';
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(MyComponent, { name: "Hello!" }));
