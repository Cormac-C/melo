const songs = [
  {
    title: "What's the Difference",
    artist: "Dr. Dre",
    album: "2001",
    file: "What's the Difference.mp3",
  },
  {
    title: "Mob Ties",
    artist: "Drake",
    album: "Scorpion",
    file: "Mob Ties.mp3",
  },
  {
    title: "G.O.M.D.",
    artist: "J. Cole",
    album: "2014 Forest Hill Drive",
    file: "GOMD.mp3",
  },
  {
    title: "Ether",
    artist: "Nas",
    album: "Stillmatic",
    file: "Ether.mp3",
  },
  {
    title: "POWER",
    artist: "Kanye",
    album: "My Beautiful Dark Twisted Fantasy",
    file: "POWER.mp3",
  },
  {
    title: "Black Skinhead (Instrumental)",
    artist: "Kanye",
    album: "Yeezus",
    file: "Black Skinhead (Instrumental).mp3",
  },
  {
    title: "Ain't No Sunshine",
    artist: "Bill Withers",
    album: "Just As I Am",
    file: "",
  },
  {
    title: "Back To Black",
    artist: "Amy Winehouse",
    album: "Back to Black",
    file: "",
  },
  {
    title: "Crazy",
    artist: "Gnarls Barkley",
    album: "St. Elsewhere",
    file: "",
  },
  {
    title: "Jolene",
    artist: "Dolly Parton",
    album: "Jolene",
    file: "",
  },
];

const selectors = ['id', 'artist', 'album'];
export default class Songs {
  // List all the items in the attribute given
  static list(selector) {}

  // Organize songs by the attribute
  static by(key) {
    if (!selectors.includes(key)) {
      throw Error("Given key is invalid");
    }
    if (key === 'id') {
      return songs;
    }

    const obj = {};
    songs.forEach(song => {
      const attr = song[key];
      console.log(attr);
      if (!Object.keys(obj).includes(attr)) {
        obj[attr] = [];
      }
      obj[attr] = song;
    });
    return obj;
  }

  getArtist(artist) {
    const albums = []; // TODO: Get albums of the artist
    return Object.fromEntries(
      albums.map(
        album => [
          album,
          this.possibleSongs.reduce((playlist, song, i) => {
            if (song.artist === artist && song.album === album) {
              playlist.push(i);
            }
            return playlist;
          }, []),
        ]
      )
    );
  }
}