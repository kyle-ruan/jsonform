import React, { Component } from 'react';
import { Modal, Form } from 'antd';
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
    const { visible } = this.props;
    if (!visible) return;
    const { properties, item, form } = this.props;

    return Object.keys(properties).map((key) => {
      const field = properties[key];
      const childValue = item[key];

      return (
        <div key={key}>
          <FieldEditor
            form={form}
            value={childValue}
            name={key}
            field={field}
          />
        </div>
      );
    });
  }

  render() {
    const { visible, onModalClose } = this.props;

    return (
      <Modal
        visible={visible}
        title='Edit Item'
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
