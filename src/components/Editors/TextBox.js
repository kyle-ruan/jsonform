import React from 'react';
import { Form, Input } from 'antd';
import styles from '../../styles';

const FormItem = Form.Item;

const TextBox = ({ value = '', title, name, form, format = 'text' }) => {
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
             <Input
               type={format}
               style={styles.controlWidth}
             />
           )}
        </FormItem>
      </div>
    </div>
  );
};

export { TextBox };
