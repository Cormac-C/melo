const music = {
  "Dr. Dre": {
    photo: "",
    albums: {
      "2001": {
        photo: "bieberAlbum.png",
        songs: [
          {
            id: "What's the Difference",
            title: "What's the Difference",
            file: "What's the Difference.mp3"
          }
        ]
      }
    }
  },
  "Drake": {
    photo: "",
    albums: {
      "Scorpion": {
        photo: "bieberAlbum.png",
        songs: [
          {
            id: "Mob Ties",
            title: "Mob Ties",
            file: "Mob Ties.mp3"
          }
        ]
      }
    }
  },
  "J. Cole": {
    photo: "",
    albums: {
      "2014 Forest Hill Drive": {
        photo: "bieberAlbum.png",
        songs: [
          {
            id: "G.O.M.D.",
            title: "G.O.M.D.",
            file: "G.O.M.D..mp3"
          }
        ]
      }
    }
  },
  "Nas": {
    photo: "",
    albums: {
      "Stillmatic": {
        photo: "bieberAlbum.png",
        songs: [
          {
            id: "Ether",
            title: "Ether",
            file: "Ether.mp3"
          }
        ]
      }
    }
  },
  "Kanye": {
    photo: "",
    albums: {
      "My Beautiful Dark Twisted Fantasy": {
        photo: "bieberAlbum.png",
        songs: [
          {
            id: "POWER",
            title: "POWER",
            file: "POWER.mp3"
          }
        ]
      },
      "Yeezus": {
        photo: "bieberAlbum.png",
        songs: [
          {
            id: "Black Skinhead (Instrumental)",
            title: "Black Skinhead (Instrumental)",
            file: "Black Skinhead (Instrumental).mp3"
          }
        ]
      }
    }
  }
};

export default class Music {
  static getArtist(artist) {
    return music[artist];
  }

  static getAlbum(album, {by} = {}) {
    if (by) {
      return {...music[by].albums[album], artist: by};
    }
    Object.entries(music).forEach(([artist, { albums }]) => {
      if (Object.keys(albums).includes(album)) {
        return { ...albums[album], artist };
      }
    });
  }

  static getSong(songID, {by, from} = {}) {
    let foundSong;
    if (by && from) {
      return {...music[by].albums[from], artist: by, album: from};
    } else if (by) {
      Object.entries(music[by].albums).forEach(function ([album, { songs }]) {
        const song = songs.find(({id}) => id === songID);
        if (song) foundSong = { ...song, artist: by, album };
      })
    } else {
      Object.entries(music).forEach(function ([artist, { albums }]) {
        Object.entries(albums).forEach(function ([album, { songs }]) {
          const song = songs.find(({id}) => id === songID);
          if (song) foundSong = { ...song, artist, album };
        })
      });
    }
    return foundSong;
  }

  static getArtists() {
    return music;
  }

  // Get all albums, optionally 'by' an artist
  static getAlbums({by} = {}) {
    if (by) return music[by];

    let allAlbums = {};
    Object.entries(music).forEach(([artist, { albums }]) => {
      allAlbums = { // TODO: Inefficient
        ...allAlbums,
        ...Object.fromEntries(
          Object.entries(albums)
            .map(([title, album]) => ([title, {...album, artist}])) // Add artist to the song album data
        )};
    });
    return allAlbums;
  }

  // Get all songs, optionally 'by' an artist or 'from' an album
  static getSongs({by, from} = {}) {
    if (from & !by) {
      var albums = Music.getAlbum(from);
    } else if (by & from) {
      var albums = music[by][from];
    } else {
      var albums = Music.getAlbums({ by });
    }

    return Object.fromEntries(
      Object.entries(albums)
        .map(([album, { artist, songs }]) => // Parse out 'songs' from the album
          songs.map(song => ({...song, album, artist})) // Add album/artist as an attribute to each song
        )
        .flat() // Flatten all albums into a 1D array of songs
        .map(song => [song.id, {...song }]) // Select 'id' as the key
    );
  }
}