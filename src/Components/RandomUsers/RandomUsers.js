import React, { useEffect, useState } from "react";

const useRandomUsers = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.randomuser.me/");
        const data = await res.json();
        const userData = {
          name: data.results[0].name.first,
          email: data.results[0].email,
          picture: data.results[0].picture.thumbnail,
        };
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>USUARIO ALEATORIO</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : user ? (
        <div>
          <div>
            <img src={user.picture} alt="profile-image" />
          </div>
          <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>
      ) : (
        <p>No se encontró el usuario.</p>
      )}
    </div>
  );
};

export default useRandomUsers;
