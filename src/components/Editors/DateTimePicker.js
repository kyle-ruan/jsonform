import React from 'react';
import { Form, DatePicker as AntDatePicker } from 'antd';
import moment from 'moment';
import styles from '../../styles';

const FormItem = Form.Item;
const format = 'YYYY-MM-DD HH:mm:ss';

const DateTimePicker = ({
  name,
  title,
  form,
  value, }
) => {
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
               <AntDatePicker
                 format={format}
                 showTime
                 style={styles.controlWidth}
               />
           )}
        </FormItem>
      </div>
    </div>
  );
};

export { DateTimePicker };