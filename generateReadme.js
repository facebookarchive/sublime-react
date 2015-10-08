var fs = require('fs');
var async = require('async');

var DOCUMENTATION_TOP =
  '# sublime-react-es6\n\n' +
  'This is a fork of Facebook\'s original ReactJS Sublime Package.\n\n'+
  'The main changes I\'ve made include:\n\n' +
  '- Converting function declarations to the new ES6 shorthand.\n\n'+
  '- Static class variables (defaultProps, propTypes) are declared using ES7 property intializers.\n\n'+
  '- ES6 style exports and imports for component creating snippets.\n\n'+
  '- Added `rrc` for Redux connected components.\n\n'+
  '![alt tag](https://raw.githubusercontent.com/mboperator/sublime-react/master/docs/img/sr-rcc-out.gif)\n\n' +
  '## Installation\n\n' +
  'Install the React package via Sublime\'s Package Manager\n\n' +
  'You will need the Sublime [Package Manager](https://sublime.wbond.net/installation).\n\n' +
  '- Open the command palette: `⌘+shift+p` on MacOS/Linux, `ctrl+shift+p` on Windows\n\n' +
  '- type `install`, select `Package Control: Install Package`\n\n' +
  '- type `React`, select `ReactJS`\n\n' +
  '## Usage\n\n' +
  '### Syntax highlighting\n\n' +
  '*Syntax highlighting is no longer provided by this packages*. We recommend that you use ([babel-sublime](https://github.com/babel/babel-sublime)) instead.\n\n' +
  '### Snippets\n\n' +
  'It\'s easy! Simply activate snippets by typing a mnemonic followed by TAB.\n\n' +
  '![alt tag](https://raw.githubusercontent.com/mboperator/sublime-react/master/docs/img/sr-snippets-out.gif)\n\n' +
  '#### Documentation of available snippets (JSX):\n\n' +
  '```\n';

var DOCUMENTATION_BOTTOM =
  '```\n\n' +
  '## Contributing\n\n' +
  '### Rebuilding the docs\n\n' +
  'After making changes to snippet files, run `npm install && npm run build-docs` to automatically generate this document from source. **Do not** make changes to README.md directly.\n\n';

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
