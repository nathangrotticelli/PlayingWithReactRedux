import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className={classes.root}>
    <div className={classes.container}>
        <h1 className={classes.bannerTitle}>Playing With React/Redux</h1>
        <p className={classes.bannerDesc}>Demo Code by Nathan Grotticelli</p>
    </div>
    <br/>
    <IndexLink to='/' className={classes.activeRoute}>
       Home Page
    </IndexLink>
{' · '}
    <Link to='/counter' className={classes.activeRoute}>
        Counter
    </Link>
   </div>
)


export default Header
