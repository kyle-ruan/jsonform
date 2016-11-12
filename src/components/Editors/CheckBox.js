import React from 'react';
import { Form, Switch } from 'antd';
import styles from '../../styles';

const FormItem = Form.Item;

const CheckBox = ({ name, title, value = false, form }) => {
  const { getFieldDecorator } = form;

  return (
    <FormItem
      label={title}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
    >
      {getFieldDecorator(name, {
        initialValue: value,
        valuePropName: 'checked'
      })(
        <Switch style={styles.controlWidth} />
      )}
    </FormItem>

  );
};

export { CheckBox };
