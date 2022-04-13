import React, { Component } from 'react';
import './AddButton.css';

export default class AddButton extends Component {

   state = {
      label: '',
   }
   onLabelChange = (e) => {
      this.setState({
         label: e.target.value
      })
   }

   onSubmit = (e) => {
      e.preventDefault();
      this.props.onItemAdded(this.state.label);
      this.setState({ label: '' });
   }

   render() {
      return (
         <form className="button d-flex"
            onSubmit={this.onSubmit}>

            <input type="text" className='form-control'
               onChange={this.onLabelChange}
               placeholder='What need to be done'
               value={this.state.label}>
            </input>

            <button className="btn btn-outline-secondary">
               Add new item
            </button>

         </form>
      )
   }

}