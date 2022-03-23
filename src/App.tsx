import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/index";
import { fetchUser } from "./store/userSlice";

function App() {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const currentUser = user.data && user.data.results[0];

  return (
    <div data-testid="api">
      {user.loading}
      {user.error && user.error}
      {currentUser && (
        <div>
          <p>
            Name: {currentUser.name.title}
            {currentUser.name.first}
            {currentUser.name.last}
          </p>
          <p data-testid="email">email: {currentUser.email}</p>
          <p>
            Avatar:{" "}
            <img src={currentUser.picture.large} alt={currentUser.name.first} />
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
