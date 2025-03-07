import React, { useEffect, useState } from "react";
import storiesData from "../assets/stories.json";

interface Story {
  id: number;
  image: string;
}

interface User {
  id: number;
  username: string;
  profilePic: string;
  stories: Story[];
}

interface Props {
  onSelectUser: (userStories: User) => void;
}

const StoryList: React.FC<Props> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(storiesData);
  }, []);

  return (
    <div className="story-list">
      {users.map((user) => (
        <div
          key={user.id}
          className="story-profile"
          onClick={() => onSelectUser(user)}
        >
          <img
            src={user.profilePic}
            alt={user.username}
            className="profile-pic"
          />
        </div>
      ))}
    </div>
  );
};

export default StoryList;
