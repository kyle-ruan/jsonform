import React, { Component } from 'react';
import { Form, Select } from 'antd';
import axios from 'axios';
import styles from '../../styles';

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
    const { name, title, value = '', form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <FormItem
        label={title}
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
      >
        {getFieldDecorator(name, {
             initialValue: value
           })(
             <Select style={styles.controlWidth}>
               {this.renderOptions()}
             </Select>
         )}
      </FormItem>
    );
  }
}

export { DropDownList };
