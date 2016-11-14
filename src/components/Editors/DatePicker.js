import React from 'react';
import { Form, DatePicker as AntDatePicker } from 'antd';
import styles from '../../styles';

const FormItem = Form.Item;
const format = 'YYYY-MM-DD';

const DatePicker = ({ name, title, value, form, rules }) => {
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
             <AntDatePicker
               format={format}
               style={styles.controlWidth}
             />
           )}
        </FormItem>
      </div>
    </div>
  );
};

export { DatePicker };
