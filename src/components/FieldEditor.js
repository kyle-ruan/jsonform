import React, { Component } from 'react';
import { CheckBox } from './Editors/CheckBox';
import { DropDownList } from './Editors/DropDownList';
import { MultiSelect } from './Editors/MultiSelect';
import { NumericTextBox } from './Editors/NumericTextBox';
import { TextBox } from './Editors/TextBox';
import { Grid } from './Editors/Grid';
import { AutoComplete } from './Editors/AutoComplete';
import { DatePicker } from './Editors/DatePicker';
import { TimePicker } from './Editors/TimePicker';
import { DateTimePicker } from './Editors/DateTimePicker';
import { ObjectEditor } from './Editors/ObjectEditor';

class FieldEditor extends Component {
  renderEditor() {
    const { name, field, form, disabled, value } = this.props;
    const { type, title, rules } = field;
    switch (type) {
      case 'text': {
        if (field.autocomplete) {
          return (
            <AutoComplete
              form={form}
              value={value}
              name={name}
              title={title}
              rules={rules}
              disabled={disabled}
              dataSource={field.dataSource}
            />
          );
        }
        return (
          <TextBox
            form={form}
            value={value}
            format={field.format}
            name={name}
            rules={rules}
            disabled={disabled}
            title={title}
          />
        );
      }

      case 'number': {
        return (
          <NumericTextBox
            form={form}
            name={name}
            value={value}
            title={title}
            disabled={disabled}
            rules={rules}
          />
        );
      }

      case 'boolean': {
        return (
          <CheckBox
            form={form}
            name={name}
            title={title}
            rules={rules}
            disabled={disabled}
          />
        );
      }

      case 'date': {
        return (
          <DatePicker
            form={form}
            name={name}
            value={value}
            rules={rules}
            title={title}
            disabled={disabled}
          />
        );
      }

      case 'time': {
        return (
          <TimePicker
            form={form}
            value={value}
            name={name}
            title={title}
            rules={rules}
            disabled={disabled}
          />
        );
      }

      case 'datetime': {
        return (
          <DateTimePicker
            value={value}
            form={form}
            name={name}
            title={title}
            rules={rules}
            disabled={disabled}
          />
        );
      }

      case 'array': {
        if (field.format === 'table') {
          const { properties } = field;
          const { rows } = this.props;
          return (
            <Grid
              name={name}
              title={title}
              value={value}
              form={form}
              rows={rows}
              properties={properties}
              rules={rules}
            />
          );
        }

        if (field.multiple) {
          return (
            <MultiSelect
              form={form}
              value={value}
              format={field.format}
              name={name}
              title={title}
              dataSource={field.dataSource}
              rules={rules}
              disabled={disabled}
            />
          );
        }
          // Single Dropdown
        return (
          <DropDownList
            form={form}
            value={value}
            name={name}
            title={title}
            dataSource={field.dataSource}
            rules={rules}
            disabled={disabled}
          />
        );
      }

      case 'object': {
        const { properties } = field;
        const { rows } = this.props;

        return (
          <ObjectEditor
            form={form}
            name={name}
            value={value}
            title={title}
            rows={rows}
            properties={properties}
          />
        );
      }

      default:
        return (
          <div>
            <strong>
              No suitable editor.
            </strong>
          </div>
        );
    }
  }

  render() {
    return this.renderEditor();
  }
}

export default FieldEditor;
