import React from 'react';
import { Form, Switch } from 'antd';

const FormItem = Form.Item;

const CheckBox = ({ name, title, value = false, form }) => {
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
            valuePropName: 'checked'
          })(
            <Switch />
          )}
        </FormItem>
      </div>
    </div>
  );
};

export { CheckBox };
