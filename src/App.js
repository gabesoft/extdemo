Ext.Loader.setConfig({ enabled: false, });

Ext.application({
  name: 'demo',
  models: [ 'File' ],
  controllers: [ 'FileSystemPage' ],
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      xtype: 'panel',
      id: 'viewport',
      layout: 'border',
      items: [ {
        xtype: 'fileview',
        id: 'fileviewid',
        region: 'center',
        margin: '10 10 10 3'
      }, {
        xtype: 'foldertree',
        id: 'foldertreeid',
        region: 'west',
        margin: '10 3 10 10'
      }]
    });
  }
});

