import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // Deprecated
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // Deprecated
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // Deprecated
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps...');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
