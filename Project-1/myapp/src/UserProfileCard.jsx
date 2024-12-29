// import React, { useState } from "react";

// const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
//   const [isFollowing, setIsFollowing] = useState(false);

//   const toggleFollow = () => {
//     setIsFollowing((prevFollow) => !prevFollow);
//   };

//   return (
//     <div className="user-profile-card">
//       <img className="profile-picture" src={profilePicture} alt={name} />
//       <div className="card-content">
//         <h2>{name}</h2>
//         <p>Age: {age}</p>
//         <p className="bio">{bio}</p>
//         <p className="location">Location: {location}</p>
//         <button onClick={toggleFollow} className="follow-btn">
//           {isFollowing ? "Unfollow" : "Follow"}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default UserProfileCard;
import React from "react";

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  return (
    <div className="user-profile-card">
      <img className="profile-picture" src={profilePicture} alt="" />
      <div className="card-content">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p className="bio">{bio}</p>
        <p className="location">Location: {location}</p>
        
      </div>
    </div>
  );
};

export default UserProfileCard;
