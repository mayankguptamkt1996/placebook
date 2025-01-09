import React from 'react'
import UserLists from '../components/UserLists'

export default function Users() {
    const User = [{
        'id':1,
        'name':'mayank Gupta',
        'place':2,
        'image':'https://media.istockphoto.com/id/499599645/photo/roan-mountain-sunset.jpg?s=612x612&w=0&k=20&c=zs_rDcRxe_UKGbAyeBX8S7NEho0P8dyK8zkE9sdr3Xw='
    }]

  return (
    <div>
      <UserLists users={User}/>
    </div>
  )
}
