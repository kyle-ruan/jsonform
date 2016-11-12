import React from 'react';
import moment from 'moment';
import { Form, TimePicker as AntTimePicker } from 'antd';

const FormItem = Form.Item;
const format = 'HH:mm';
const TimePicker = ({ name, title, value, form }) => {
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
         <AntTimePicker
           format={format}
         />
       )}
    </FormItem>
  );
};

export { TimePicker };
