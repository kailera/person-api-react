import './NavLink.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
   <div>
        <Link to={props.link}>
        {props.text}
        </Link>
   </div>
