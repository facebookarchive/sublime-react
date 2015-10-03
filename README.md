# sublime-react

Snippets for ReactJS. This package used to provide JSX syntax highlighting and has been DEPRECATED in favor of [babel/babel-sublime](https://github.com/babel/babel-sublime).

![alt tag](https://raw.githubusercontent.com/mboperator/sublime-react/master/docs/img/sr-rcc-out.gif)

## Installation

Install the React package via Sublime's Package Manager

You will need the Sublime [Package Manager](https://sublime.wbond.net/installation).

- Open the command palette: `⌘+shift+p` on MacOS/Linux, `ctrl+shift+p` on Windows

- type `install`, select `Package Control: Install Package`

- type `React`, select `React ES6 Snippets`

## Usage

### Syntax highlighting

*Syntax highlighting is no longer provided by this packages*. We recommend that you use ([babel-sublime](https://github.com/babel/babel-sublime)) instead.

### Snippets

It's easy! Simply activate snippets by typing a mnemonic followed by TAB.

![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-snippets-out.gif)

Snippets are available for both JSX and CJSX ([React CoffeeScript](https://github.com/jsdf/coffee-react-transform)).

#### Documentation of available snippets (JSX):

```
    cdm→  componentDidMount() { ... }

   cdup→  componentDidUpdate(pp, ps) { ... }

     cs→  import cx from 'classnames';

    cwm→  componentWillMount() { ... }

    cwr→  componentWillReceiveProps(np) { ... }

    cwu→  componentWillUpdate(np, ns) { ... }

   cwun→  componentWillUnmount() { ... }

     cx→  cx({ ... })

    fdn→  React.findDOMNode(...)

    fup→  forceUpdate(() => {...})

    gdp→  static defaultProps { ... } 

    gis→  state = { ... } 

    ism→  isMounted()

  props→  this.props.

     pt→  propTypes { ... }

    rcc→  es6 component class skeleton
    
    rrc→  es6 connected component class skeleton

   refs→  this.refs.

    ren→  render() { return ... }

    scu→  shouldComponentUpdate(np, ns) { ... }

    sst→  this.setState({ ... })

  state→  this.state.

```

## Contributing

### Rebuilding the docs

After making changes to snippet files, run `npm install && npm run build-docs` to automatically generate this document from source. **Do not** make changes to README.md directly.

### Contributor License Agreement

Contributions are very welcome, but we ask that you please fill out our [CLA](https://code.facebook.com/cla) in order for us to accept your pull request.

