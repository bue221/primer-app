import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = () => {
  return (
    <>
      <VideoPlayer
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
      />
    </>
  );
};

export default Video;
