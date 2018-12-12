import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  // Deprecated
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // Deprecated
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // Deprecated
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps...');
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate...');
  }

  render() {
    return (
      <div>
        <h1>Test COmponent</h1>
      </div>
    );
  }
}
