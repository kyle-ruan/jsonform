import React from 'react';
import { Form, DatePicker as AntDatePicker } from 'antd';
import moment from 'moment';
import styles from '../../styles';

const FormItem = Form.Item;
const format = 'YYYY-MM-DD';

const DatePicker = ({ name, title, value, form }) => {
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
           style={styles.controlWidth}
         />
       )}
    </FormItem>
  );
};

export { DatePicker };
