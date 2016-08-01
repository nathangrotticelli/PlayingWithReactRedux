import React from 'react'
import classes from './HomeView.scss'
import logoPic from '../assets/logoPic.png'

export const HomeView = () => (
<div>
    <h4>Welcome!</h4>
    <a href="http://www.bizly.com">
    <img
      className={classes.bizlyImg}
      src={logoPic} />
      </a>
  </div>
)

export default HomeView
