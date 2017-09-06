import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
  renderField = (field) => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          />
      </div>
    );
  }



  render() {
    return (
      <form>
        <Field
        label="Title"
        name="title"
        component={this.renderField}
        />
      <Field
        label="Categories"
        name="categories"
        component={this.renderField}
        />
      <Field
        label="Post Content"
        name="content"
        component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a Title";
  }
  if(!values.categories) {
    errors.categories = "Enter a Category";
  }
  if(!values.content) {
    errors.content = "Enter a Content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostNew);
