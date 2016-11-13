import React, { Component } from 'react';
import { Button, Form, Table } from 'antd'
import ModalForm from './ModalForm';

const FormItem = Form.Item;
const ButtonGroup = Button.Group;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      modalItem: {},
      dataSource: [],
      editItemIndex: -1
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

  onItemAdded(dataItem) {
    const { name, form } = this.props;
    const fieldValue = form.getFieldValue(name);

    form.setFieldsValue({
      [name]: [...fieldValue, dataItem]
    });

    this.setState({
      visible: false,
      dataSource: this.getDataSourceAfterAdd(dataItem)
    });
  }

  onItemEdited(dataItem) {
    const { name, form } = this.props;
    const { editItemIndex } = this.state;
    console.log(editItemIndex);
    const fieldValue = [...form.getFieldValue(name)];
    fieldValue.splice(editItemIndex, 1, dataItem);
    form.setFieldsValue({
      [name]: fieldValue
    });
    const newDataSource = this.getDataSourceAfterEdit(dataItem);
    this.setState({
      visible: false,
      editItemIndex: -1,
      dataSource: newDataSource
    });
  }

  onModalClose() {
    this.setState({ visible: false });
  }

  getDataSourceAfterAdd(dataItem) {
    const dataSource = [...this.state.dataSource];
    const { properties } = this.props;
    const newDataItem = { ...dataItem };
    Object.keys(newDataItem).forEach(key => {
      const prop = properties[key];
      if (typeof (prop.template) !== 'undefined') {
        newDataItem[key] = prop.template(newDataItem[key]);
      }
    });
    newDataItem.key = dataSource.length;
    return [...dataSource, newDataItem];
  }

  getDataSourceAfterEdit(dataItem) {
    const dataSource = [...this.state.dataSource];
    const { properties } = this.props;
    const { editItemIndex } = this.state;
    const editDataItem = { ...dataItem };
    const editItemInDataSource = {
      ...dataSource.find(item => item.key === editItemIndex)
    };

    Object.keys(editDataItem).forEach(key => {
      const prop = properties[key];
      if (typeof (prop.template) !== 'undefined') {
        editItemInDataSource[key] = prop.template(editDataItem[key]);
      } else {
        editItemInDataSource[key] = editDataItem[key];
      }
    });

    dataSource.splice(editItemIndex, 1, editItemInDataSource);

    return [...dataSource];
  }

  getColumns(properties) {
    const columns = Object.keys(properties).map(key => {
      return {
        key,
        dataIndex: key,
        title: properties[key].title
      };
    });

    const actions = {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <ButtonGroup>
            <Button
              type='primary'
              onClick={this.editItem.bind(this, record.key)}
            >
              &nbsp;&nbsp;Edit&nbsp;&nbsp;
            </Button>
            <Button
              onClick={this.removeItem.bind(this, record.key)}
            >
              Remove
            </Button>
          </ButtonGroup>
        );
      }
    };

    return [...columns, actions];
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

  editItem(index) {
    const { name, form } = this.props;
    const formValue = form.getFieldValue(name);
    const modalItem = { ...formValue.find((item, itemIndex) => itemIndex === index) };

    this.setState({
      visible: true,
      modalItem,
      editItemIndex: index
    });
  }

  removeItem(index) {
    const { name, form } = this.props;
    const dataSource = [...this.state.dataSource];
    const formValue = form.getFieldValue(name);

    const newDataSource = dataSource.filter(item => item.key !== index);
    this.setState({ dataSource: newDataSource });

    const newFormValue = [...formValue].filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    form.setFieldsValue({
      [name]: newFormValue
    });
  }

  renderModal() {
    const { visible, modalItem, editItemIndex } = this.state;
    const { properties } = this.props;
    const editMode = editItemIndex > -1;

    return (
      <ModalForm
        visible={visible}
        item={modalItem}
        properties={properties}
        onModalClose={this.onModalClose.bind(this)}
        onItemAdded={this.onItemAdded.bind(this)}
        onItemEdited={this.onItemEdited.bind(this)}
        editMode={editMode}
      />
    );
  }

  render() {
    const { name, form, properties } = this.props;
    const { getFieldDecorator } = form;
    const columns = this.getColumns(properties);
    return (
      <div className='json-form-table'>
        <div className='json-form-table-add-btn'>
          <Button type="primary" onClick={this.addItem.bind(this)}>Add</Button>
        </div>

        <FormItem style={{ width: '100%' }}>
          {getFieldDecorator(name)(
            <Table
              columns={columns}
              dataSource={this.state.dataSource}
              pagination={false}
            />
           )}
        </FormItem>
        {this.renderModal()}
      </div>
    );
  }
}

export { Grid };
