import React from 'react';
import User from './components/User';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <main>
        <Article></Article>
        <User></User>
      </main>
    </div>
  );
}

export default App;
