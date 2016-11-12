import React, { Component } from 'react';
import { connect } from 'react-redux';
import JsonForm from './JsonForm';
import {
  getInitialSchema,
  getInitialLayout,
  getInitialValues
} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getInitialSchema();
    this.props.getInitialValues();
    this.props.getInitialLayout();
  }

  render() {
    return (
        <div className='container'>
          <JsonForm
            schema={this.props.schema}
            layout={this.props.layout}
            values={this.props.values}
          />
        </div>
    );
  }
}

const mapStateToProps = ({ schema, values, layout }) => {
  return { schema, values, layout };
};

export default connect(
  mapStateToProps,
  {
    getInitialSchema,
    getInitialValues,
    getInitialLayout
  })(App);
