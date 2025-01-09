import React from 'react'
import './UserItem.css'
import Avatar from '../../shared/UIelements/Avatar'
import Card from '../../shared/UIelements/Card'
import { Link } from 'react-router';
export default function UserItem(props) {
  return (
    <li className='user-item'>
      <Card className ="user-item_content">
        <Link to={`/${props.id}/places`}>
    <div className="user-item-image">
      <Avatar image={props.place} alt={props.name}/>
    </div>
    <div className="user-item_info">
        <h2>{props.name}</h2>
        <h3>{props.placeCount} {props.placeCount===1?'Place':'Places'}</h3>
    </div>
    </Link>
      </Card>
    </li>
  );
}
