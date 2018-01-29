import React, { Component } from 'react';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './App.css';


const resources = {
  usersURL: 'https://jsonplaceholder.typicode.com/users',
  userPosts: user => `https://jsonplaceholder.typicode.com/posts?userId=${user}`,
  postComments: postId => `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
}


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { users: null }
  }

  componentDidMount(){
    fetch(resources.usersURL)
      .then(rsp => rsp.json())
      .then(users => this.setState({ users }))
      .catch(err => console.log(err))
  }
    
  render() {
    const style = {
      height: 100,
      width: '100%',
      border: 'solid black 2px'
    }

    return (
      <Select
        name='username'
        options = {
          this.state.users &&
            this.state.users.map(user => { 
              const h={}
              h[user.id] = user.username
              return h
            })
        } />
    )
  }
}


class App extends Component {

  render() {
    return (
      <div className="App">
      <SearchBar />
      </div>
    );
  }
}

export default App;
