import React from "react";
import Greeting from "./Greeting";  
import UserProfileCard from "./UserProfileCard";  

const App = () => {
  const users = [
    {
      name: "John Doe",
      age: 30,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "New York",
      profilePicture: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      name: "Jane Smith",
      age: 25,
      bio: "Curabitur gravida arcu ac tortor dignissim convallis aenean.",
      location: "Los Angeles",
      profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      name: "Alex Johnson",
      age: 28,
      bio: "Sed sed risus pretium quam vulputate dignissim.",
      location: "Chicago",
      profilePicture: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    },
    {
      name: "Emily Davis",
      age: 22,
      bio: "Aenean sed adipiscing diam donec adipiscing tristique.",
      location: "Miami",
      profilePicture: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      name: "Michael Brown",
      age: 35,
      bio: "Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum.",
      location: "San Francisco",
      profilePicture: "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
    },
  ];
  return (
    <div>
      <Greeting name="Deepak" />
      <div className="profile-container">
        {users.map((user, index) => (
          <UserProfileCard
            key={index}
            name={user.name}
            age={user.age}
            bio={user.bio}
            location={user.location}
            profilePicture={user.profilePicture}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
