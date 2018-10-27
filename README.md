
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/compatibility-ie-6.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

### DEMO

* [React-Alerts](http://divyanshurawat.me/react-alerts/)


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
  
  const options = {
    margin: '10',
    width : "500",
    fontColor : 'black',
    backgroundColor : 'grey'
  }


  class App extends Component  {
    render () {
      return (
        <Alert />
      )
    }
  }

  render(<App />, document.getElementById('root'))

```


## Options
You can pass the following options as props to ``` <Alert /> ```:

```js


  const options = {
    type: String,
    message: String,
    margin: String,
    width : String,
    fontColor : String,
    backgroundColor : String
  }
  
```

Values that ``` type ``` can take are as follows:

* default
* danger
* warning
* secondary
* info
* success
* light
* custom


![alt tag](https://github.com/divyanshu-rawat/react-alerts/blob/master/assets/Screen%20Shot%202018-10-28%20at%202.51.39%20AM.png)


