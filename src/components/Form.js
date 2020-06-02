import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}></input>
          <input type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName}></input>
        </form>
      </div >
    )
  }
}

export default Form;