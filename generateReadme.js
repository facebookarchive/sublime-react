var fs = require('fs');

fs.writeFile('README', '# sublime-react\n\nSnippets and syntax highlighting for React.js / JSX.\n\nJSX syntax highlighting provided by [yungsters/sublime](https://github.com/yungsters/sublime)\n\n## Installation\n\nVia Sublime\'s Package Manager \n\n## Usage\n\nActivate snippets by typing the mnemonic followed by TAB.\n\n### Available snippets:\n\n```javascript\n', function (err) {
  if (err) {
    throw err;
  }
});

fs.readdir('./snippets', function(err, files) {
  files
    .filter(function(file) {
      return file.substr(-16) === '.sublime-snippet';
    })
    .forEach(function(file) {
      fs.readFile('./snippets/' + file, 'utf-8', function(err, contents) {
        if (!err) {
          inspectFile(contents);
        }
      });
    });
});

function inspectFile(contents) {
  var match = contents.match(
    /[\s\S]*<tabTrigger>(.*?)<\/tabTrigger>[\s\S]*?<description>(React: )?(.*?)<\/description>[\s\S]*/i
  );
  var docBlock = '';
  if (match !== null) {
    var shortCut = '    '.substring(0, 4 - match[1].length) + match[1];
    docBlock = '  ' + shortCut + '→  ' + match[3] + '\n\n';
  }
  fs.appendFile('README', docBlock, function (err) {
    if (err) {
      console.error('error appending README:', err);
    }
  });
}
