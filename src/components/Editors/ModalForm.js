import React, { Component } from 'react';
import { Modal, Form, Row, Col } from 'antd';
import FieldEditor from '../FieldEditor';

class ModalForm extends Component {
  onOkClick() {
    const modalFormValues = this.props.form.getFieldsValue();
    if (!this.props.editMode) {
      this.props.onItemAdded(modalFormValues);
    } else {
      this.props.onItemEdited(modalFormValues);
    }
  }

  renderModalItem() {
    const modalVisible = this.props.visible;
    if (!modalVisible) return;
    const { properties, item, form, rules, rows } = this.props;

    return rows.map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map(({ propName, span, visible = true, disabled }) => {
              const field = properties[propName];
              const childValue = item[propName];

              return (
                <Col {...span} key={propName} style={visible ? {} : { display: 'none' }}>
                  <FieldEditor
                    form={form}
                    value={childValue}
                    name={propName}
                    field={field}
                    rules={rules}
                    disabled={disabled}
                  />
                </Col>
              );
            })}
          </Row>
        );
      });
  }

  render() {
    const { visible, onModalClose, editMode } = this.props;

    const title = editMode ? 'Edit Item' : 'Add Item';
    return (
      <Modal
        visible={visible}
        title={title}
        okText='OK'
        onCancel={onModalClose}
        onOk={this.onOkClick.bind(this)}
      >
        <Form vertical>
          {this.renderModalItem()}
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(ModalForm);
