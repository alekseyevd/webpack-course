import * as $ from 'jquery'
import Post from '@models/Post'
//import json from './assets/json.json'
//import xml from './assets/data.xml'
//import csv from './assets/data.csv'
import logo from '@/assets/webpack-logo.png'
import React from 'react'
import {render} from 'react-dom'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import './babel'

const post = new Post('Webpack Post', logo)
$('pre').addClass('code').html(post.toString())

//console.log('Post to string', post.toString())
// console.log(json)
// console.log(xml)
// console.log(csv);

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <div className="logo"></div>
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))


