import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FieldEditor from './FieldEditor';
import { onFormSubmit } from '../config/callbacks';
import { getFieldError } from '../utils';

class JsonForm extends Component {
  handleSubmit(e) {
    const errors = [];
    e.preventDefault();

    this.props.form.validateFields((err) => {
      if (err) {
        errors.push(err);
      }
    });

    const formValues = this.props.form.getFieldsValue();

    onFormSubmit(formValues, {
      name: 'Appointment Filters'
    }).then(() => {
      console.log('success');
    }).catch((customErrors = []) => {
      if (customErrors.length > 0) {
        let formErrors = {};
        customErrors.forEach(error => {
          const field = Object.keys(error)[0];
          const fieldError = getFieldError(field, error[field]);

          formErrors = Object.assign(formErrors, fieldError);
        });

        this.props.form.setFields(formErrors);
      }
    });
  }

  renderEditors() {
    const { form, schema, layout: { columns = [] }, values } = this.props;

    return columns.map((column, colIndex) => {
      const { rows } = column;

      return (
        <Col key={colIndex} {...column.span}>
          {rows.map((row, rowIndex) => {
            return (
              <Row key={rowIndex}>
                {row.map((item, rowColIndex) => {
                  const { name, disabled, visible = true } = item;
                  const field = schema[name];
                  const value = values[name];

                  return (
                    <Col
                      key={rowColIndex}
                      style={visible ? {} : { display: 'none' }}
                      {...item.span}
                    >
                      <FieldEditor
                        form={form}
                        name={name}
                        field={field}
                        disabled={disabled}
                        value={value}
                        rows={item.rows}
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
