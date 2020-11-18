import React from 'react'

const MiniCard = ({ user, toggleFollow }) => {
  return (
    <div className="section minicard">
      <div className="section">
        <img className="user-profile"  src={user.avatar} width={'100%'} />
        <div>
          <h3 className="bold">{user.username}</h3>
          <p>{user.name}</p>
      </div>
    </div>
      {user.button_visible && <div className={user.is_followed? "followed-button" : "follow-button"}
        onClick={() => toggleFollow(user)}
      >
      {user.is_followed? "Following": "Follow"}
      </div>}
    </div>
  )
}
    
export default MiniCard