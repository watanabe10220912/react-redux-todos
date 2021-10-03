import React from 'react';
import AddToDo from '../containers/AddToDo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import '../App.css';

const App = () => (
  <div>
    <AddToDo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
