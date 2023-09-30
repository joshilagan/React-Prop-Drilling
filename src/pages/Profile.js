import React from 'react'
import ChangeProfile from '../component/ChangeProfile'

const Profile = (props) => {
  return (
    <div>
      Profile Page, Content is: {props.username}
      <ChangeProfile setUsername={props.setUsername}/>
      </div>
  )
}

export default Profile