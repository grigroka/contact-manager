import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    // Try/catch only to fix an error while deleting unpersisted jsonplaceholder object. Unnecessary in app with real DB
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
