import React from 'react';
import moment from 'moment';
import { Form, TimePicker as AntTimePicker } from 'antd';

const FormItem = Form.Item;
const format = 'HH:mm';
const TimePicker = ({ name, title, value, form }) => {
  const { getFieldDecorator } = form;
  return (
    <div className='json-form-group'>
      <div className='json-form-label'>
        <label htmlFor={name}>{title}</label>
      </div>
      <div className='json-form-control'>
        <FormItem>
          {getFieldDecorator(name, {
               initialValue: value
             })(
             <AntTimePicker
               format={format}
             />
           )}
        </FormItem>
      </div>
    </div>
  );
};

export { TimePicker };
