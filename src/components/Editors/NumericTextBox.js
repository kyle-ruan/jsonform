import React from 'react';
import { Form, InputNumber } from 'antd';
import styles from '../../styles';

const FormItem = Form.Item;

const NumericTextBox = ({ value = 0, title, name, form }) => {
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
         <InputNumber
           style={styles.controlWidth}
         />
       )}
    </FormItem>
  );
};

export { NumericTextBox };
