import React, { Component } from 'react';
import { Form, Select } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;
const { Option } = Select;

class DropDownList extends Component {
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
            return {
              text: customer.name,
              value: customer.id
            };
          });
          this.setState({ options });
        });
    } else {
      const { items } = dataSource;

      const options = items.map(item => {
        if (typeof (item) === 'object') {
          return {
            text: item.text,
            value: item.value
          };
        }
        return {
          text: item,
          value: item
        };
      });
      this.setState({ options });
    }
  }

  renderOptions() {
    return this.state.options.map((option) => {
      return (
        <Option
          key={option.value + option.text}
          value={option.value.toString()}
        >
          {option.text}
        </Option>
      );
    });
  }
  render() {
    const { name, title, value = '', form, rules } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className='json-form-group'>
        <div className='json-form-label'>
          <label htmlFor={name}>{title}</label>
        </div>
        <div className='json-form-control'>
          <FormItem>
            {getFieldDecorator(name, {
                 initialValue: value,
                 rules
               })(
                 <Select>
                   {this.renderOptions()}
                 </Select>
             )}
          </FormItem>
        </div>
      </div>

    );
  }
}

export { DropDownList };
