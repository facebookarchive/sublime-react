# sublime-react

Snippets and syntax highlighting for React.js / JSX.

![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-rcc-out.gif)

## Installation

Install the React package via Sublime's Package Manager

You will need the Sublime [Package Manager](https://sublime.wbond.net/installation).

- Open the command palette: `⌘+shift+p` on MacOS/Linux, `ctrl+shift+p` on Windows

- type `install`, select `Package Control: Install Package`

- type `React`, select `ReactJS`

## Usage

### Syntax highlighting

JSX syntax highlighting provided by [yungsters/sublime](https://github.com/yungsters/sublime)

![JSX syntax highlighting](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-jsx-out.gif)

To default to JSX highlighting, open a `.js` or `.jsx` file, then select from the main menu:

`View` > `Syntax` > `Open all with current extension as...` > `ReactJS` > `JavaScript (JSX)`

JSX is fully compatible with plain JavaScript.

### Snippets

It's easy! Simply activate snippets by typing a mnemonic followed by TAB.

![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-snippets-out.gif)

Snippets are available for both JSX and CJSX ([React CoffeeScript](https://github.com/jsdf/coffee-react-transform)).

#### Documentation of available snippets (JSX):

```
    cdm→  componentDidMount: fn() { ... }

   cdup→  componentDidUpdate: fn(pp, ps) { ... }

     cs→  var cx = React.addons.classSet;

    cwm→  componentWillMount: fn() { ... }

    cwr→  componentWillReceiveProps: fn(np) { ... }

    cwu→  componentWillUpdate: fn(np, ns) { ... }

   cwun→  componentWillUnmount: fn() { ... }

     cx→  cx({ ... })

    fup→  forceUpdate(...)

    gdp→  getDefaultProps: fn() { return {...} } 

    gis→  getInitialState: fn() { return {...} } 

    ism→  isMounted()

    jsx→  /** @jsx */

  props→  this.props.

     pt→  propTypes { ... }

    rcc→  component skeleton

    ren→  render: fn() { return ... }

    scu→  shouldComponentUpdate: fn(np, ns) { ... }

    sst→  setState({ ... })

  state→  this.state.

    trp→  transferPropsTo( ... )

```

## Contributing

### Rebuilding the docs

After making changes to snippet files, run `npm install && npm run build-docs` to automatically generate this document from source.

### Updating JSX syntax highlighting

To pull in updates from yungsters/sublime, run:

`git subtree pull --prefix syntax/jsx https://github.com/yungsters/sublime.git master --squash`

### Contributor License Agreement

Contributions are very welcome, but we ask that you please fill out our [CLA](https://code.facebook.com/cla) in order for us to accept your pull request.

