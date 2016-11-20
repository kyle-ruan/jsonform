import React from 'react';
import { Form, InputNumber } from 'antd';

const FormItem = Form.Item;

const NumericTextBox = ({ value = 0, title, name, form, rules, disabled }) => {
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
             <InputNumber disabled={disabled} />
           )}
        </FormItem>
      </div>
    </div>
  );
};

export { NumericTextBox };
