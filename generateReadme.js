var fs = require('fs');
var async = require('async');

var DOCUMENTATION_TOP =
  '# sublime-react\n\n' +
  'Snippets and syntax highlighting for React.js / JSX.\n\n' +
  '![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-rcc-out.gif)\n\n' +
  '## Installation\n\n' +
  'Install the React package via Sublime\'s Package Manager\n\n' +
  'You will need the Sublime [Package Manager](https://sublime.wbond.net/installation).\n\n' +
  '- Open the command palette: `⌘+shift+p` on MacOS/Linux, `ctrl+shift+p` on Windows\n\n' +
  '- type `install`, select `Package Control: Install Package`\n\n' +
  '- type `React`, select `ReactJS`\n\n' +
  '## Usage\n\n' +
  '### Syntax highlighting\n\n' +
  'JSX syntax highlighting provided by [yungsters/sublime](https://github.com/yungsters/sublime)\n\n' +
  '![JSX syntax highlighting](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-jsx-out.gif)\n\n' +
  'To default to JSX highlighting, open a `.js` or `.jsx` file, then select from the main menu:\n\n' +
  '`View` > `Syntax` > `Open all with current extension as...` > `JavaScript (JSX)`\n\n' +
  'JSX is fully compatible with plain JavaScript.\n\n' +
  '### Snippets\n\n' +
  'It\'s easy! Simply activate snippets by typing a mnemonic followed by TAB.\n\n' +
  '![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-snippets-out.gif)\n\n' +
  'Snippets are available for both JSX and CJSX ([React CoffeeScript](https://github.com/jsdf/coffee-react-transform)).\n\n' +
  '#### Documentation of available snippets (JSX):\n\n' +
  '```\n';

var DOCUMENTATION_BOTTOM =
  '```\n\n' +
  '## Contributing\n\n' +
  '### Rebuilding the docs\n\n' +
  'After making changes to snippet files, run `npm install && npm run build-docs` to automatically generate this document from source.\n\n' +
  '### Updating JSX syntax highlighting\n\n' +
  'To pull in updates from yungsters/sublime, run:\n\n' +
  '`git subtree pull --prefix syntax/jsx https://github.com/yungsters/sublime.git master --squash`\n\n' +
  '### Contributor License Agreement\n\n' +
  'Contributions are very welcome, but we ask that you please fill out our ' +
  '[CLA](https://code.facebook.com/cla) in order for us to accept your pull request.\n\n';

fs.readdir('./snippets/js', function(err, files) {
  var snippets = files.filter(function(file) {
    return file.substr(-16) === '.sublime-snippet';
  }).map(function(file) {
    return './snippets/js/' + file;
  });
  async.map(snippets, readAndInspect, function(err, results) {
    if (err) {
      console.error('error mapping snippets', err);
    }
    var snippetDocs =
      DOCUMENTATION_TOP +
      results.map(function(snippet) {
        return inspectFile(snippet);
      }).sort(function(a, b) {
        return a.abbreviation > b.abbreviation
          ? 1
          : a.abbreviation === b.abbreviation
            ? 0
            : -1;
      }).map(function(snippet) {
        return snippet.docBlock;
      }).join('') +
      DOCUMENTATION_BOTTOM;
    fs.writeFile('README.md', snippetDocs, function (err) {
      if (err) {
        console.error('error appending README:', err);
      }
    });
  });
});

function readAndInspect(fileName, cb) {
  fs.readFile(fileName, 'utf-8', function(err, contents) {
    if (!err) {
      cb(null, contents);
    }
  });
}

function inspectFile(contents) {
  var match = contents.match(
    /[\s\S]*<tabTrigger>(.*?)<\/tabTrigger>[\s\S]*?<description>(React: )?(.*?)<\/description>[\s\S]*/i
  );
  var docBlock = '';
  var abbreviation = '';
  var description = '';
  if (match !== null) {
    abbreviation = match[1];
    description = match[3];
    var shortCut = '     '.substring(0, 5 - abbreviation.length) + abbreviation;
    docBlock = '  ' + shortCut + '→  ' + description + '\n\n';
  }
  return {
    docBlock: docBlock,
    abbreviation: abbreviation,
    description: description
  };
}
