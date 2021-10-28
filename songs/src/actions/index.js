
// Action creator
export const selectSong = (song) => {
    return { // Return an Action
        type: 'SONG_SELECTED',
        payload: song
    };
};

