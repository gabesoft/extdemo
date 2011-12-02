Ext.define('demo.controller.FileSystemPage', {
  extend: 'Ext.app.Controller',

  refs: [
    { ref: 'tree',  selector: 'viewport > foldertree[id=foldertreeid]' },
    { ref: 'grid',  selector: 'viewport > fileview[id=fileviewid]' },
  ],

  init: function() {
    var tree = this.refs[0].selector;

    selectors = {};
    selectors[tree] = {
      select: function(rowModel, record, index, opts) {
        this.getGrid().loadFiles(this.getFolderContents(record.data.text));
      }
    };

    this.control(selectors);
    this.callParent();
  },

  getFolderContents: function(folder) {
    var data = {
      foo: [
        { name: 'file1', path: 'foo/file1', size: 23 },
        { name: 'file2', path: 'foo/file2', size: 43 },
        { name: 'file3', path: 'foo/file3', size: 25 },
        { name: 'file3', path: 'foo/file4', size: 12 } 
      ],
      bar: [
        { name: 'file1', path: 'bar/file1', size: 23 },
        { name: 'file2', path: 'bar/file2', size: 43 },
      ],
      parent: [
        { name: 'file1', path: 'parent/file1', size: 23 },
        { name: 'file2', path: 'parent/file2', size: 43 },
        { name: 'file3', path: 'parent/file3', size: 53 },
      ]
    };

    return data[folder] || [];
  }
});
