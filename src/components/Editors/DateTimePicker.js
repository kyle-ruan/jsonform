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
    <FormItem
      label={title}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
    >
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

  );
};

export { DateTimePicker };
