import React, { useEffect, useState } from 'react';
import './App.css';
import TableInterface from './components/TableInterface';
import { RepositoryType } from './types';

const App = () => {
  const [list, setList] = useState<RepositoryType[] | []>([]);

  useEffect(() => {
    fetch("https://api.github.com/repositories")
      .then(response => response.json())
      .then(data => setList(data))
  }, []);

  return (
    <div className="App">
      <TableInterface list={list} />
    </div>
  );
};

export default App;
