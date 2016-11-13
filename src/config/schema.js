const schema = {
  Client: {
    type: 'object',
    title: 'Client Matching',
    default: {
    },
    properties: {
      FirstName: {
        type: 'text',
        title: 'First Name',
        default: '',
      },
      LastName: {
        type: 'text',
        title: 'Last Name',
        default: ''
      },
      DateOfBirth: {
        type: 'date',
        title: 'Date Of Birth',
        default: ''
      }
    }
  },
  TextInput: {
    type: 'text',
    title: 'Text',
  },
  AutoCompleteInput: {
    type: 'text',
    autocomplete: true,
    title: 'Auto Complete',
    default: '',
    dataSource: {
      async: true,
      read: '/api/customers.json'
    }
  },
  DateInput: {
    type: 'date',
    title: 'Date',
    default: null
  },
  DateTimeInput: {
    type: 'datetime',
    title: 'DateTime',
    default: null
  },
  TimeInput: {
    type: 'time',
    title: 'Time',
    default: null
  },
  SingleSelect: {
    type: 'array',
    title: 'Single Select',
    default: '',
    dataSource: {
      items: [
        'option 1',
        'option 2',
        'option 3'
      ]
    }
  },
  AsyncSingleSelect: {
    type: 'array',
    title: 'Async Select',
    default: null,
    dataSource: {
      async: true,
      read: '/api/customers.json'
    }
  },
  MultipleSelect: {
    type: 'array',
    multiple: true,
    title: 'Multiple Select',
    default: [],
    dataSource: {
      items: [
        'option 1',
        'option 2',
        'option 3'
      ]
    }
  },
  MultipleObjectSelect: {
    type: 'array',
    format: 'select',
    multiple: true,
    title: 'Multiple Object',
    default: [],
    dataSource: {
      items: [
        {
          text: 'Option 1',
          value: 1
        },
        {
          text: 'Option 2',
          value: 2
        },
        {
          text: 'Option 3',
          value: 3
        },
      ]
    }
  },
  AsnycMultipleSelect: {
    type: 'array',
    format: 'select',
    multiple: true,
    title: 'Async Multiple',
    default: [],
    dataSource: {
      async: true,
      read: '/api/customers.json'
    }
  },
  Boolean: {
    type: 'boolean',
    title: 'Boolean',
    default: 'false'
  },
  Number: {
    type: 'number',
    title: 'Number',
    default: 0
  },
  TextAreaInput: {
    type: 'text',
    format: 'textarea',
    title: 'Text Area',
    default: ''
  },
  Clients: {
    type: 'array',
    format: 'table',
    title: 'Clients',
    default: [],
    properties: {
      FirstName: {
        type: 'text',
        title: 'First Name',
        default: '',
      },
      LastName: {
        type: 'text',
        title: 'Last Name',
        default: ''
      },
      DateOfBirth: {
        type: 'date',
        title: 'Date Of Birth',
        default: null,
        template(val) {
          if (!val) return '';
          return val.format('YYYY-MM-DD');
        }
      }
    }
  }
};

export default schema;
