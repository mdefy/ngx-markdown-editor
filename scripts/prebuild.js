const fs = require('fs');

// File destination.txt will be created or overwritten by default.
fs.copyFile('README.md', 'projects/ngx-markdown-editor/README.md', (err) => {
  if (err) throw err;
  console.log('Copied README.md successfully to projects/ngx-markdown-editor/README.md!');
});
