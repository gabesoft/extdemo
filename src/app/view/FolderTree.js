Ext.define('demo.view.FolderTree', {
  extend: 'Ext.tree.TreePanel',
  alias: 'widget.foldertree',

  initComponent: function() {
    var store = Ext.create('Ext.data.TreeStore', {
      root: {
        expanded: true,
        children: [
          { text: "empty1", leaf: false },
          { text: "parent", 
            expanded: true, 
            children: [
              { text: "foo", leaf: false },
              { text: "bar", leaf: false}
            ] },
            { text: "empty2", leaf: false }
        ]
      }
    });

    Ext.apply(this, { 
      store: store,
      multiSelect: true
    });
    this.callParent();
  }
});
