Ext.define('demo.view.FileView', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.fileview',

  initComponent: function() {
    Ext.apply(this, { 
      store: Ext.create('store.filestore'),
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
