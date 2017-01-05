import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss';
import {Motion, spring} from 'react-motion';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';


class Demo extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li><a href="">首页</a></li>
        <li>
          <a href="">博客</a>
          <ul className="drop-menu">
            <li><a href="">CSS3</a></li>
            <li><a href="">SASS</a></li>
            <li><a href="">JavaScript</a></li>
            <li><a href="">jQuery</a></li>
          </ul>
        </li>
        <li><a href="">案例</a></li>
        <li><a href="">资源</a></li>
        <li><a href="">前端收藏夹</a></li>
      </ul>
    )
  }
}

ReactDOM.render(<Demo/>, document.getElementById('root'))
