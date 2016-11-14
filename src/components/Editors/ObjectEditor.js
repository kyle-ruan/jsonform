import React from 'react';
import { Row, Col } from 'antd';
import FieldEditor from '../FieldEditor';

const ObjectEditor = (({ name, title, form, properties, value, rules, rows }) => {
  return (
    <div className='json-form-object'>
      <label htmlFor={name}>
        {title}
      </label>
      {
        rows.map((row, rowIndex) => {
          return (
            <Row key={rowIndex}>
              {row.map(({ propName, span }) => {
                const field = properties[propName];
                const childValue = value[propName];
                return (
                  <Col {...span} key={propName}>
                    <FieldEditor
                      key={propName}
                      form={form}
                      value={childValue}
                      name={`${name}.${propName}`}
                      field={field}
                      rules={rules}
                    />
                  </Col>
                );
              })}
            </Row>
          );
        })
      }
    </div>
  );
});

export { ObjectEditor };
