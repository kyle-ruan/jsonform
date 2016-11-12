import React from 'react';
import FieldEditor from '../FieldEditor';

const ObjectEditor = (({ name, title, form, properties, value }) => {
  return (
    <div style={{ border: 'solid', borderWidth: 1, borderRadius: 5, borderColor: '#d6d7da' }}>
      <label htmlFor={name}><strong>{title}</strong></label>
      {Object.keys(properties).map((key) => {
        const field = properties[key];
        const childValue = value[key];
        return (
          <div key={key}>
            <FieldEditor form={form} value={childValue} name={`${name}.${key}`} field={field} />
          </div>
        );
      })}
    </div>
  );
});

export { ObjectEditor };
