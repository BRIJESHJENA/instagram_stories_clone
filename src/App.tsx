import React, { useState } from "react";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";

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

const App: React.FC = () => {
  const [selectedStories, setSelectedStories] = useState<User | null>(null);

  return (
    <div className="app-container">
      {/* Story List stays inside app-container */}
      <StoryList onSelectUser={setSelectedStories} />

      {/* Overlay Story Viewer */}
      {selectedStories && (
        <div className="overlay">
          <StoryViewer
            stories={selectedStories}
            onClose={() => setSelectedStories(null)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
