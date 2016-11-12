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
    const { name, field, form, value } = this.props;
    const { type, title } = field;
    switch (type) {
      case 'text': {
        if (field.autocomplete) {
          return (
            <AutoComplete
              form={form}
              value={value}
              name={name}
              title={title}
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
          />
        );
      }

      case 'boolean': {
        return (
          <CheckBox
            form={form}
            name={name}
            title={title}
          />
        );
      }

      case 'date': {
        return (
          <DatePicker
            form={form}
            name={name}
            value={value}
            title={title}
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
          />
        );
      }

      case 'array': {
        if (field.format === 'table') {
          const { properties } = field;
          return (
            <Grid
              name={name}
              title={title}
              value={value}
              form={form}
              properties={properties}
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
          />
        );
      }

      case 'object': {
        const { properties } = field;
        return (
          <ObjectEditor
            form={form}
            name={name}
            value={value}
            title={title}
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
