import React, { Component } from 'react';
import Navigation from './page/Navigation';
import Main from './page/Main';
import Monitor from './page/Monitor';
import Check from './page/Check';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App"> 
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Monitor" component={Monitor} />
          <Route path="/Check" component={Check} />
        </Switch>
      </BrowserRouter>  
      <ButtonToolbar>
            {/* Standard button */}
            <Button>Default</Button>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <Button bsStyle="primary">Primary</Button>
      </ButtonToolbar>    
    </div>        
  );  
}

  /*
  state = {users: []}

  componentDidMount() {
    // 프록시로 등록한 서버주소가 생략됨
    fetch('/users')
      .then(res => res.json())
      // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
      .then(users => this.setState({ users }));
  }
  };

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}    
      </div>
    );
  }
}
export default App;
*/

