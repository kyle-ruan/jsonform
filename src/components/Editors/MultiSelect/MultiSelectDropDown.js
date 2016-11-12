import React, { Component } from 'react';
import classNames from 'classnames';
import { Form, Input, Button, Checkbox, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

class MultiSelectDropDown extends Component {
  componentDidMount() {
    const { items } = this.props;
    console.log(this.props);
    this.options = items.map(item => {
      let optionText = '';
      let optionValue = '';
      if (typeof (item) === 'object') {
        optionText = item.text;
        optionValue = item.value;
      } else {
        optionText = item;
        optionValue = item;
      }
      return {
        text: optionText,
        value: optionValue
      };
    });

    console.log(this.options);
  }

  onCheckboxToggle(e) {
    const { form, items } = this.props;
    const { setFieldsValue } = form;
    const { checked } = e.target;

    if (checked) {
      // add all items
      const values = items.map()
    } else {
      // remove all items
    }
  }

  renderOptions() {
    if (!this.options) return;
    return this.options.map((option, index) => {
      return (
        <Option
          key={option.value + index}
          value={option.value.toString()}
        >
          {option.value}
        </Option>
      );
    });
  }

  render() {
    const { name, title, value = [], form, items } = this.props;
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
      <FormItem label={title}>
        <div className="ant-search-input-wrapper" style={{ width: 200 }}>
          <Input.Group className={searchCls}>
        { getFieldDecorator(name, { initialValue: value })(
               <Select
                 multiple
                 style={{ width: 200 }}
                 filterOption={(inputValue, option) => {
                   return option.props.children.indexOf(inputValue) > -1;
                 }}
               >
                 { this.renderOptions() }
               </Select>

         )}
         <div className="ant-input-group-wrap">
           <Button className={btnCls}>
             <Checkbox onChange={this.onCheckboxToggle.bind(this)} />
           </Button>
         </div>
       </Input.Group>
     </div>
      </FormItem>
    );
  }
}

export { MultiSelectDropDown };
