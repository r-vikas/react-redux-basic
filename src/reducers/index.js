import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "a",
      duration: "4:30"
    },
    {
      title: "b",
      duration: "4:00"
    },
    {
      title: "c",
      duration: "3:28"
    },
    {
      title: "d",
      duration: "3:50"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
