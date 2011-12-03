Ext.define('demo.data.FolderStore', {
  extend: 'Ext.data.TreeStore',
  alias: 'store.folderstore',

  constructor: function(config) {
    config = Ext.Object.merge({}, config);
    config.root = {
      expanded: true,
      children: [
        { text: "empty1", leaf: false },
        { text: "parent", 
          expanded: true, 
          children: [
            { text: "foo", leaf: false },
            { text: "bar", leaf: false}
          ] 
        },
        { text: "empty2", leaf: false }
      ]
    };

    this.callParent([config]);
  }
});

