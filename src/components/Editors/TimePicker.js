import React from 'react';
import { Form, TimePicker as AntTimePicker } from 'antd';

const FormItem = Form.Item;
const format = 'HH:mm';
const TimePicker = ({ name, title, value, form, rules, disabled }) => {
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
             <AntTimePicker
               format={format}
               disabled={disabled}
             />
           )}
        </FormItem>
      </div>
    </div>
  );
};

export { TimePicker };
