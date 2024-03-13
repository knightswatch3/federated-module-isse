
import React, { Suspense} from 'react';
import ReactDOM from 'react-dom/client';  

// import ErrorBoundary from "./components/Error";

const store: any = React.lazy(()=>  import('remote/stores'))
console.log('This is how auth slice is', store); 
const App = () => {  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="app">
      <h1>Hello, React!</h1>
    </div>
    </Suspense>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
  );

