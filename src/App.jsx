import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  * {
	  margin: 0 ;
	  padding: 0;
	  box-sizing: border-box;
  }
`;

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Header />
			<Home />
		</Router>
	);
};

export default App;
