import React, { useEffect, useState } from "react";

const useRandomUsers = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const userData = {
          name: data.results[0].name.first,
          email: data.results[0].email,
          picture: data.results[0].picture.thumbnail,
        };

        setUser(userData);
      });
  }, []);
  return (
    <div>
      {user ? (<div>
      <div>
      <img
      src={user.picture}
      alt="profile-image"
      />
      </div>
      <div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
      </div>) : null}
      
      
    </div>
  );
};

export default useRandomUsers;
