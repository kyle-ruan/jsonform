import React from 'react';
import FieldEditor from '../FieldEditor';

const ObjectEditor = (({ name, title, form, properties, value, rules }) => {
  return (
    <div className='json-form-object'>
      <label htmlFor={name}>
        {title}
      </label>
      {Object.keys(properties).map((key) => {
        const field = properties[key];
        const childValue = value[key];
        return (
          <FieldEditor
            key={key}
            form={form}
            value={childValue}
            name={`${name}.${key}`}
            field={field}
            rules={rules}
          />
        );
      })}
    </div>
  );
});

export { ObjectEditor };
