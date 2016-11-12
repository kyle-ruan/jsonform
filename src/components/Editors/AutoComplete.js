import React, { Component } from 'react';
import { Form, AutoComplete as AntAutoComplete } from 'antd';
import axios from 'axios';
import styles from '../../styles';

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
             <AntAutoComplete style={styles.controlWidth}>
               {this.renderOptions()}
             </AntAutoComplete>
         )}
      </FormItem>
    );
  }
}

export { AutoComplete };
