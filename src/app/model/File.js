Ext.define('demo.model.File', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'name', type: 'string'},
    {name: 'path', type: 'string'},
    {name: 'size', type: 'int'}
  ]
});
