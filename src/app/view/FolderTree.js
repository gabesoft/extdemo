Ext.define('demo.view.FolderTree', {
  extend: 'Ext.tree.TreePanel',
  alias: 'widget.foldertree',

  initComponent: function() {
    Ext.apply(this, { 
      store: Ext.create('store.folderstore'),
      multiSelect: true
    });
    this.callParent();
  }
});
