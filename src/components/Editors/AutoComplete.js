import React, { Component } from 'react';
import { Form, AutoComplete as AntAutoComplete } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;
const { Option } = AntAutoComplete;

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
  }

  componentDidMount() {
    const { dataSource } = this.props;

    if (dataSource.async) {
      // read data
      axios.get(dataSource.read)
        .then(({ data: { customers } }) => {
          const options = customers.map(customer => {
            return customer.name;
          });
          this.setState({ options });
        });
    } else {
      const { items } = dataSource;

      const options = items.map(item => {
        if (typeof (item) === 'object') {
          return item.text;
        }
        return item;
      });
      this.setState({ options });
    }
  }

  renderFormItem() {
    const { name, value = '', form, rules, disabled } = this.props;

    const { getFieldDecorator } = form;
    return (
      <FormItem>
        {getFieldDecorator(name, {
             initialValue: value,
             rules
           })(
             <AntAutoComplete disabled={disabled}>
               {this.renderOptions()}
             </AntAutoComplete>
         )}
      </FormItem>
    );
  }

  renderOptions() {
    return this.state.options.map((option, index) => {
      return (
        <Option
          key={option + index}
          value={option}
        >
          {option}
        </Option>
      );
    });
  }
  render() {
    const { name, title } = this.props;

    return (
      <div className='json-form-group'>
        <div className='json-form-label'>
          <label htmlFor={name}>{title}</label>
        </div>
        <div className='json-form-control'>
          {this.renderFormItem()}
        </div>
      </div>

    );
  }
}

export { AutoComplete };
