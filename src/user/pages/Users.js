import React from 'react'
import UserLists from '../components/UserLists'

export default function Users() {
    const User = [{
        'id':1,
        'name':'mayank Gupta',
        'place':2,
        'image':'https://t3.ftcdn.net/jpg/11/43/08/70/360_F_1143087025_H4lXhJUOzxxWkHCJmMplbSRG36rNX9XM.jpg'
    }]

  return (
    <div>
      <UserLists users={User}/>
    </div>
  )
}
