var fs = require('fs');

fs.writeFile(
  'README.md', '# sublime-react\n\n' +
  'Snippets and syntax highlighting for React.js / JSX.\n\n' +
  'JSX syntax highlighting provided by [yungsters/sublime](https://github.com/yungsters/sublime)\n\n' +
  '![JSX syntax highlighting](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-jsx-out.gif)\n\n' +
  '## Installation\n\n' +
  'Install the React package via Sublime\'s Package Manager (tbd)\n\n' +
  '## Usage\n\n' +
  '![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-rcc-out.gif)\n\n' +
  'It\'s easy! Simply activate snippets by typing a mnemonic followed by TAB.\n\n' +
  '![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-snippets-out.gif)\n\n' +
  '### Available snippets:\n\n' +
  '```javascript\n', function (err) {
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
    var shortCut = '     '.substring(0, 5 - match[1].length) + match[1];
    docBlock = '  ' + shortCut + '→  ' + match[3] + '\n\n';
  }
  fs.appendFile('README.md', docBlock, function (err) {
    if (err) {
      console.error('error appending README:', err);
    }
  });
}
