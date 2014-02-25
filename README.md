# sublime-react

Snippets and syntax highlighting for React.js / JSX.

JSX syntax highlighting provided by [yungsters/sublime](https://github.com/yungsters/sublime)

![JSX syntax highlighting](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-jsx-out.gif)

## Installation

Install the React package via Sublime's Package Manager (tbd)

## Usage

![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-rcc-out.gif)

It's easy! Simply activate snippets by typing a mnemonic followed by TAB.

![alt tag](https://raw.github.com/jgebhardt/sublime-react/master/docs/img/sr-snippets-out.gif)

### Available snippets:

```javascript
    cdm→  componentDidMount: fn() { ... }

   cdup→  componentDidUpdate: fn(pp, ps) { ... }

    cwm→  componentWillMount: fn() { ... }

    cwr→  componentWillReceiveProps: fn(np) { ... }

   cwun→  componentWillUnmount: fn() { ... }

    cwu→  componentWillUpdate: fn(np, ns) { ... }

    fup→  forceUpdate(...)

    gdp→  getDefaultProps: fn() { return {...} } 

    gis→  getInitialState: fn() { return {...} } 

    ism→  isMounted()

    jsx→  /** @jsx */

     pt→  propTypes { ... }

    rcc→  component skeleton

    ren→  render: fn() { return ... }

    sst→  setState({ ... })

    scu→  shouldComponentUpdate: fn(np, ns) { ... }

  props→  this.state.

  state→  this.state.

    trp→  transferPropsTo( ... )

