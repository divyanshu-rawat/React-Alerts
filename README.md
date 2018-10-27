
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/compatibility-ie-6.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


### Installation:

``` $ npm i react-alerts-component ```

This package is used in production by following application:
* [Ignitus-Client](https://github.com/Ignitus/Ignitus-Client-Side-Development)


### UseCase
First you have to wrap your app with the Provider giving it the alert template and optionally some options.

```js

  import React, { Component } from 'react'
  import { render } from 'react-dom'
  import Alert from 'react-alerts-component'

  class App extends Component  {
    render () {
      return (
        <Alert />
      )
    }
  }

  render(<App />, document.getElementById('root'))

```
