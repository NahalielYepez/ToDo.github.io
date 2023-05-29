import React from 'react';
import ReactDOM from 'react-dom/client';

import { TodoList } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<TodoList />)