Ext.define('demo.view.FileView', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.fileview',

  initComponent: function() {
    var store = Ext.create('demo.data.FileStore', { 
      proxy: {
        type: 'memory',
        reader: {
          type: 'json',
          root: 'root'
        }
      }
    });

    Ext.apply(this, { 
      store: store,
      columns: [
        { text: 'name', dataIndex: 'name' },
        { text: 'path', dataIndex: 'path' },
        { text: 'size', dataIndex: 'size' }
      ]
    });

    this.callParent();
  },

  loadFiles: function(files) {
    this.store.loadData(files);
  }
});
