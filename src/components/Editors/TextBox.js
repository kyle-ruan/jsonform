import React from 'react';
import { Form, Input } from 'antd';
import styles from '../../styles';

const FormItem = Form.Item;

const TextBox = ({ value = '', title, name, form, format = 'text' }) => {
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
         <Input
           type={format}
           style={styles.controlWidth}
         />
       )}
    </FormItem>
  );
};

export { TextBox };
