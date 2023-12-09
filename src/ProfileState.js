import React from "react"
import ProfileContext from "./ProfileContext"
import { useState } from "react";

const ProfileState = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  )
}
export default ProfileState;
