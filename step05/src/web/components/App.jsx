
/*
    ./src/web/components/App.jsx
*/
import React from 'react';
import Header from './header';

export default class App extends React.Component {
  render() {
    return (
     <Header headerText={'Albums!'} />
    );
  }
}
