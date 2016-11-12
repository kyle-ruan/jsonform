import React, { Component } from 'react';
import { Button, Form, Table } from 'antd'
import ModalForm from './ModalForm';

const FormItem = Form.Item;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      modalItem: {},
      dataSource: []
    };
  }

  componentDidMount() {
    const { name, form, value } = this.props;
    form.setFieldsValue({
      [name]: value
    });
    const fieldValue = form.getFieldValue(name);

    this.setState({
      dataSource: fieldValue.map((val, index) => {
        const v = val;
        v.key = index;
        return v;
      })
    });
  }

  onItemChange(value) {
    const { name, form } = this.props;
    const fieldValue = form.getFieldValue(name);
    form.setFieldsValue({
      [name]: [...fieldValue, value]
    });
    this.setState({ visible: false });

    this.setState({
      dataSource: form.getFieldValue(name).map((val, index) => {
        const v = val;
        v.key = index;
        return v;
      })
    });
  }

  onModalClose() {
    this.setState({ visible: false });
  }

  getColumns(properties) {
    return Object.keys(properties).map(key => {
      return {
        key,
        dataIndex: key,
        title: properties[key].title
      };
    });
  }

  addItem() {
    const { properties } = this.props;
    const modalItem = {};

    Object.keys(properties).forEach(key => {
      const property = properties[key];
      modalItem[key] = property.default;
    });

    this.setState({
      visible: true,
      modalItem
    });
  }

  renderModal() {
    const { visible, modalItem } = this.state;
    const { properties } = this.props;
    return (
      <ModalForm
        visible={visible}
        item={modalItem}
        properties={properties}
        onModalClose={this.onModalClose.bind(this)}
        onItemChange={this.onItemChange.bind(this)}
      />
    );
  }

  render() {
    const { name, form, properties } = this.props;
    const { getFieldDecorator } = form;
    const columns = this.getColumns(properties);
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.addItem.bind(this)}>Add</Button>
        </div>

        <FormItem>
          {getFieldDecorator(name)(
            <Table columns={columns} dataSource={this.state.dataSource} />
           )}
        </FormItem>
        {this.renderModal()}
      </div>
    );
  }
}

export { Grid };
