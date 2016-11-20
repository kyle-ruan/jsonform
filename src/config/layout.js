const layout = {
  columns: [
    {
      rows: [
        [
          { name: 'TextInput', span: { xs: 24, sm: 24, md: 12, lg: 12 } },
          {
            name: 'AutoCompleteInput',
            span: { xs: 24, sm: 24, md: 12, lg: 12 }
          }
        ],
        [
          { name: 'DateInput', span: { xs: 24, sm: 24, md: 12, lg: 12 } },
          { name: 'DateTimeInput', span: { xs: 24, sm: 24, md: 12, lg: 12 } }
        ],
        [
          { name: 'SingleSelect', span: { xs: 24, sm: 24, md: 12, lg: 12 } },
          { name: 'MultipleSelect', span: { xs: 24, sm: 24, md: 12, lg: 12 } }
        ],
        [
          { name: 'Boolean', span: { xs: 24, sm: 24, md: 12, lg: 12 } },
          { name: 'AsnycMultipleSelect', span: { xs: 24, sm: 24, md: 12, lg: 12 } }
        ],
        [
          { name: 'TextAreaInput', span: 24, disabled: true }
        ],
        [
          {
            name: 'Client',
            span: { xs: 24, sm: 24, md: 24, lg: 24 },
            rows: [
              [
                {
                  propName: 'FirstName',
                  span: { xs: 24, sm: 24, md: 12, lg: 12 },
                  disabled: true
                },
                { propName: 'LastName', span: { xs: 24, sm: 24, md: 12, lg: 12 } }
              ],
              [
                { propName: 'DateOfBirth', span: { xs: 24, sm: 24, md: 12, lg: 12 } }
              ]
            ]
          }
        ],
        [
          { name: 'Clients',
            rows: [
              [
                {
                  propName: 'FirstName',
                  span: { xs: 24, sm: 24, md: 12, lg: 12 },
                  disabled: true
                },
                {
                  propName: 'LastName',
                  span: { xs: 24, sm: 24, md: 12, lg: 12 }
                }
              ],
              [
                { propName: 'DateOfBirth', span: { xs: 24, sm: 24, md: 24, lg: 24 } }
              ]
            ]
          }
        ]
      ],
      span: { xs: 24, sm: 24, md: 24, lg: 24 }
    }
  ]
};

export default layout;
