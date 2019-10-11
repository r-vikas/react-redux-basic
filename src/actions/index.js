export const selectSong = name => {
  return {
    type: "SONG_SELECTED",
    payload: name
  };
};
