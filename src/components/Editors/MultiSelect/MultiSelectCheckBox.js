import React from 'react';
import { Form, Checkbox } from 'antd';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

const MultiSelectCheckBox = ({ name, title, value = [], form, items }) => {
  const { getFieldDecorator } = form;
  const options = items.map(item => {
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
      label: optionText,
      value: optionValue
    };
  });

  return (
    <FormItem label={title}>
      { getFieldDecorator(name, {
           initialValue: value
         })(
         <div>
         <Checkbox
          indeterminate={false}
          checked={false}
         >
          Check all
        </Checkbox>

        <CheckboxGroup
          options={options}
          value={value}
        />
        </div>
     )}
    </FormItem>
  );
};

export { MultiSelectCheckBox };
