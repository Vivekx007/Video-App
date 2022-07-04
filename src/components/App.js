import React, { useState, useEffect } from "react";
import youtube from "../Apis/youtube";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
export default function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    onTermSubmit("");
  }, []);
  const onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    console.log("From the App!", video);
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <Searchbar onSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}
