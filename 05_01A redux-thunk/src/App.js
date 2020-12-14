
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

import HomeHeader from './sections/HomeHeader';
import BooksHomeList from './books/books-home-list';
import Login from './pages/Login';

import Books from './user/Books';
import AuthProvider from './state/context/AuthProvider';
import { AuthRoute } from './state/context/AuthEnable';

import UserData from './profile/UserData';
import BorrowCart from './borrow/BorrowCart';

function App() {

  const [listToBorrow, setListToBorrow ] = useState([]);

  const addToList = item => {
    // putem sa trimitem si direct setListToBorrow in josul tree-ului
    setListToBorrow([ ...listToBorrow, item ]);
  }

  return (
    <AuthProvider>

      <Nav listToBorrow={ listToBorrow } />

      <Route exact path="/" component={HomeHeader} />
      
      <main className="content">

        <Switch>
          <Route exact path="/" render={ props => <BooksHomeList {...props} addToList={ addToList } /> }  />
          {/* <Route exact path="/" component={BooksHomeList} addToList={ addToList } /> */}

          <Route path="/login/:redirectTo" component={Login} />
          <Route path="/login" component={Login} />

          {/* <Route exact path="/books" component={Books} /> */}
          {/* ruta /books devine private */}
          <AuthRoute path="/books" component={Books} />
         
          <AuthRoute path="/my-account" component={UserData} />
          <AuthRoute path="/borrow-cart" component={BorrowCart} />

        </Switch>
        {/* <Login /> */}
        
      </main>  

      <Footer />

    </AuthProvider>
  );
}

export default App;
