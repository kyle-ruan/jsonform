import React, { Component } from 'react';
import classNames from 'classnames';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import axios from 'axios';
import styles from '../../styles';

const FormItem = Form.Item;
const { Option } = Select;

class MultiSelect extends Component {
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

  onCheckboxToggle(e) {
    const { checked } = e.target;
    const { name, form } = this.props;
    const { setFieldsValue } = form;

    if (checked) {
      setFieldsValue({
        [name]: this.state.options.map(option => option.value.toString())
      });
    } else {
      setFieldsValue({ [name]: [] });
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
    const { name, title, value = [], form } = this.props;
    const { getFieldDecorator } = form;

    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': false,
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': false,
    });

    return (
      <FormItem
        label={title}
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
      >
        <div className="ant-search-input-wrapper" style={styles.controlWidth}>
          <Input.Group className={searchCls}>
        { getFieldDecorator(name, { initialValue: value })(
               <Select
                 multiple
                 filterOption={(inputValue, option) => {
                   return option.props.children.indexOf(inputValue) > -1;
                 }}
               >
                 { this.renderOptions() }
               </Select>

         )}
         <div className="ant-input-group-wrap">
           <Button className={btnCls}>
             <Checkbox
               onChange={this.onCheckboxToggle.bind(this)}
             />
           </Button>
         </div>
       </Input.Group>
     </div>
      </FormItem>
    );
  }
}

export { MultiSelect };
