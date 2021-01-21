const fs = require('fs');

// File destination.txt will be created or overwritten by default.
fs.copyFile('README.md', 'dist/ngx-markdown-editor/README.md', (err) => {
  if (err) throw err;
  console.log('Copied README.md successfully to dist/ngx-markdown-editor/README.md!');
});
