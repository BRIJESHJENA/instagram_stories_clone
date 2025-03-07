import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

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
  stories: User;
  onClose: () => void;
}

const StoryViewer: React.FC<Props> = ({ stories, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // To restart progress bar on story change

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < stories.stories.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setKey((prev) => prev + 1); // Restart progress bar
      } else {
        onClose();
      }
    }, 5000); // Story duration (5 seconds)

    return () => clearTimeout(timeout);
  }, [currentIndex, stories, onClose]);

  const handleNext = () => {
    if (currentIndex < stories.stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setKey((prev) => prev + 1); // Restart progress bar
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setKey((prev) => prev + 1); // Restart progress bar
    }
  };

  return (
    <div className="story-viewer">
      {/* Single Progress Bar */}
      <ProgressBar key={key} duration={5} />

      <div className="story-profile-view">
        <img
          src={stories.profilePic}
          alt={stories.username}
          className="profile-pic-view"
        />
        <p>{stories.username}</p>
      </div>
      <img
        src={stories.stories[currentIndex].image}
        alt="story"
        className="story-image"
      />

      <div className="nav-area left" onClick={handlePrev} />
      <div className="nav-area right" onClick={handleNext} />

      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default StoryViewer;
