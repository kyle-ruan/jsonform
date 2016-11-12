import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'antd';
import FieldEditor from './FieldEditor';

class JsonForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue());
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
