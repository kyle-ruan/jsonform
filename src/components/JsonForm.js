import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FieldEditor from './FieldEditor';
import { onFormSubmit } from '../config/callbacks';

class JsonForm extends Component {
  handleSubmit(e) {
    const errors = [];
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (err) {
        errors.push(err);
        console.log(err);
      }
    });

    if (errors.length > 0) {
      console.log('errors when submitting form.');
      return;
    }
    const formValues = this.props.form.getFieldsValue();

    onFormSubmit(formValues, {
      name: 'Appointment Filters'
    });
  }

  renderEditors() {
    const { form, schema, layout: { columns = [] }, values } = this.props;

    return columns.map((column, colIndex) => {
      const { rows } = column;
      return (
        <Col key={colIndex} span={column.span}>
          {rows.map((row, rowIndex) => {
            return (
              <Row key={rowIndex}>
                {row.map((item, rowColIndex) => {
                  const { name } = item;
                  const field = schema[name];
                  const value = values[name];

                  return (
                    <Col key={rowColIndex} span={item.span}>
                      <FieldEditor
                        form={form}
                        name={name}
                        field={field}
                        value={value}
                      />
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </Col>
      );
    });
  }

  render() {
    return (
        <Form inline onSubmit={this.handleSubmit.bind(this)}>
          {this.renderEditors()}

          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
    );
  }
}

export default Form.create()(JsonForm);
