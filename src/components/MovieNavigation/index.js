/** @format */

import {memo} from 'react';
import {NavLink} from "react-router-dom";
import {useLocation} from 'react-router-dom'
// import routes from '../../routes'

import  styles from './MovieNavigation.module.css'

export const MovieNavigation = memo(() =>{
 const location = useLocation();
 
 
 
  return (
    <div>
      <p>Additional information: </p>
      
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to={{
            pathname: `${location.url}`,
            state:{...location.state}
          }}
           >
            Cast
          </NavLink>
        </li>
        
        <li>
          <NavLink className={styles.link} to={{
            pathname: `${location.url}`,
            state: {...location.state}
          }}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
    )
  
})