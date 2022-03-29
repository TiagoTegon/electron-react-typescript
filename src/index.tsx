import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import { App } from './ui/app'
import { Splash } from './ui/splash'
import { createCollection } from './model/productListModel'

/**
 * Defines which view will be rendered in the root node.
 * This value is obtained by the query parameter "view".
 * @example http://localhost:3000/?view=splash
 */

createCollection()

const whichView = new URLSearchParams(window.location.search).get(`view`)

let view: React.ReactElement = (<></>)

switch (whichView) {

  case `splash`:
    view = <Splash />
    break

  default:
  case `app`:
    view = <App />
    break

}

ReactDOM.render(view, document.getElementById(`root`))