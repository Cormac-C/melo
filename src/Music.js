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

  static getAlbum(album) {
    Object.entries(music).forEach(([artist, { albums }]) => {
      if (Object.keys(albums).includes(album)) {
        return { ...albums[album], artist };
      }
    });
  }

  static getSong(songID) {
    Object.entries(music).forEach(([artist, { albums }]) => (
      Object.entries(albums).forEach(([album, { songs }]) => {
        const song = songs.find(({id}) => id === songID);
        if (song) return { ...song, artist, album };
      })
    ));
  }

  static getArtists() {
    return music;
  }

  // Get all albums, optionally 'by' an artist
  static getAlbums({by} = {}) {
    if (by) return music[by];

    let allAlbums = {};
    Object.values(music).forEach((artist) => {
      allAlbums = {...allAlbums, ...artist.albums}; // TODO: Inefficient
    });
    return allAlbums;
  }

  // Get all songs, optionally 'by' an artist or 'from' an album
  static getSongs({by, from} = {}) {
    let albums = Music.getAlbums({ by });
    albums = from ? {from: albums[from]} : albums;

    return Object.fromEntries(
      Object.entries(albums)
        .map(([album, { songs }]) => // Parse out 'songs' from the album
          songs.map(song => ({...song, album})) // Add album as an attribute to each song
        )
        .flat() // Flatten all albums into a 1D array of songs
        .map(song => [song.id, {...song }]) // Select 'id' as the key
    );
  }
}