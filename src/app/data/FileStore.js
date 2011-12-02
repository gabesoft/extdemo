Ext.define('demo.data.FileStore', {
  extend: 'Ext.data.Store',
  alias: 'store.filestore',

  constructor: function(config) {
    config = Ext.Object.merge({}, config);
    config.model = 'demo.model.File';
    config.proxy = {
      type: 'memory',
      reader: {
        type: 'json',
        root: 'root'
      }
    };

    this.callParent([config]);
  }
});
