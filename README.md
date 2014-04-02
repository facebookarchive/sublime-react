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

`View` > `Syntax` > `Open all with current extension as...` > `JavaScript (JSX)`

JSX is fully compatible with plain JavaScript.

### Snippets

It's easy! Simply activate snippets by typing a mnemonic followed by TAB.

![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-snippets-out.gif)

#### Available snippets:

```
     cs→  var cx = React.addons.classSet;

    cdm→  componentDidMount: fn() { ... }

   cdup→  componentDidUpdate: fn(pp, ps) { ... }

    cwm→  componentWillMount: fn() { ... }

     cx→  cx({ ... })

    cwr→  componentWillReceiveProps: fn(np) { ... }

   cwun→  componentWillUnmount: fn() { ... }

    cwu→  componentWillUpdate: fn(np, ns) { ... }

    fup→  forceUpdate(...)

    gdp→  getDefaultProps: fn() { return {...} } 

    gis→  getInitialState: fn() { return {...} } 

    ism→  isMounted()

     pt→  propTypes { ... }

    jsx→  /** @jsx */

    rcc→  component skeleton

    sst→  setState({ ... })

    ren→  render: fn() { return ... }

    scu→  shouldComponentUpdate: fn(np, ns) { ... }

  props→  this.props.

  state→  this.state.

    trp→  transferPropsTo( ... )

