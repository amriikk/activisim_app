import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import topicsService from '../../utils/topicsService';

class TopicCreateForm extends Component {

  state = {
    name: "",
    description: "",
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await topicsService.create(this.state);
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }



  isFormInvalid() {
    return !(this.state.name && this.state.description);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Create Topic</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Description</label>
              <textarea type="description" className="form-control" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange} />
            </div>
          </div>
          
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Create Topic</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TopicCreateForm;
