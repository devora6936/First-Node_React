import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Photos from './components/photos/photos';
import Posts from './components/posts/posts';
import Todos from './components/todos/todos';
import Users from './components/users/users';
import HomePage from './components/homePage';
import {configureStore} from '@reduxjs/toolkit'
import postSlice from './slices/postSlice'
import photoSlice from './slices/photoSlice'
import userSlice from './slices/userSlice';
import todoSlice from './slices/todoSlice';
import { Provider } from 'react-redux';
import ResponsiveAppBar from './components/appBar';

const myStore=configureStore({
reducer:{
  postSlice,
  photoSlice,
  userSlice,
  todoSlice
}
})
function App() {
  return (
    <Provider store={myStore}>
    <div className="App">
      <ResponsiveAppBar/>

      <Routes>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
