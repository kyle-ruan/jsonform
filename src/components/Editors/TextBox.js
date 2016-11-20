import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const TextBox = ({ value = '', title, name, form, format = 'text', rules, disabled }) => {
  const { getFieldDecorator } = form;
  return (
    <div className='json-form-group'>
      <div className='json-form-label'>
        <label htmlFor={name}>{title}</label>
      </div>
      <div className='json-form-control'>
        <FormItem style={{ width: '100%' }}>
          {getFieldDecorator(name, {
               initialValue: value,
               rules
             })(
             <Input type={format} disabled={disabled} />
           )}
        </FormItem>
      </div>
    </div>
  );
};

export { TextBox };
