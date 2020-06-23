import React from "react";
// import { Link } from 'react-router-dom'

class AddBlmComment extends React.Component {
  state = {
    invalidForm: true,
    formData: { blmComments: '' }
  }

  formRef = React.createRef()

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddBlmComment(this.state.formData, this.props.history)
  }

  render() {
    return (
      <div className="add-page">
        <div className="add-container">
          <div className="add-label">
            <label>
              <em>add a comment</em>&nbsp;
          </label>
          </div>
          <form
            ref={this.formRef}
            autoComplete='off'
            onSubmit={this.handleSubmit}
          >
            <input
              className="add-input"
              name="title"
              type="text"
              value={this.state.formData.title}
              onChange={this.handleChange}
            />
            <input
              className="add-input"
              name="text"
              type="text"
              value={this.state.formData.text}
              onChange={this.handleChange}
            />
            <button
              className="button"
              type="submit"
              disabled={this.state.invalidForm}
            >+</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddBlmComment;