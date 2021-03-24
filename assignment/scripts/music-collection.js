console.log('***** Music Collection *****')

let collection = [];

let tracksGreat = [];
let tracksReason = [];
let tracksEater = [];
let tracksNight = [];
let tracksConnector = [];
let tracksBooks = [];

function addToCollection(title, artist, yearPublished, tracks) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(album);
  return album;
}

console.log(addToCollection('The Great War', 'Sabaton', '2019'));
console.log(addToCollection('Appeal to Reason', 'Rise Against', '2008'));
console.log(addToCollection('Star Eater', 'Daniel Deluxe', '2015'));
console.log(addToCollection('The Night is Young', 'Big Gigantic', '2014'));
console.log(addToCollection('Connector', 'I the Mighty', '2015'));
console.log(addToCollection('History Books', 'Absofacto', '2015'));

console.log(collection);
console.log(collection[2]);


function showCollection(array) {
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);
  }
}

showCollection(collection);


function findByArtist(artist) {
  let search = [];
  for (let i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist)
    {
      search.push(artist);
    }
  }
  return search;
}

//First console log of the function call will return a single element array of 'Absofacto'. Second will return an empty array.
console.log(findByArtist('Absofacto'));
console.log(findByArtist('Nickelback'));

//STRETCH GOALS

function search(artist, year) {
  let results = [];
  let searchObject = {
    searchArtist: artist,
    searchYear: year
  }
  for (let i = 0; i < collection.length; i++) {
    if (searchObject.searchArtist === collection[i].artist && searchObject.searchYear === collection[i].yearPublished) {
      results.push(collection[i]);
    }
  }
  return results;
}

console.log(search('Rise Against', '2008'));
console.log(search('Ray Charles', '1957'));
console.log(search());

function addToTracks(tracks, name, duration) {
  let track = {
    name: name,
    duration: duration
  }
  tracks.push(track);
  return track;
}

addToTracks(tracksGreat, 'The Future of Warfare', '3:26');
addToTracks(tracksGreat, 'Seven Pillars of Wisdom', '3:02');
addToTracks(tracksGreat, '82nd All the Way', '3:31');
addToTracks(tracksGreat, 'The Attack of the Dead Men', '3:56');
addToTracks(tracksGreat, 'Devil Dogs', '3:17');
addToTracks(tracksGreat, 'The Red Baron', '3:22');
addToTracks(tracksGreat, 'Great War', '4:28');
addToTracks(tracksGreat, 'A Ghost in the Trenches', '3:26');
addToTracks(tracksGreat, 'Fields of Verdun', '3:17');
addToTracks(tracksGreat, 'The End of the War to End All Wars', '4:45');
addToTracks(tracksGreat, 'In Flanders Fields', '1:57');
console.log(tracksGreat);

addToTracks(tracksReason, 'Collapse (Post-Amerika)', '3:19');
addToTracks(tracksReason, 'Long Forgotten Sons', '4:02');
addToTracks(tracksReason, 'Re-Education (Through Labor)', '3:42');
addToTracks(tracksReason, 'The Dirt Whispered', '3:09');
addToTracks(tracksReason, 'Kotov Syndrome', '3:05');
addToTracks(tracksReason, 'From Heads Unworthy', '3:42');
addToTracks(tracksReason, 'The Strength To Go On', '3:27');
addToTracks(tracksReason, 'Audience of One', '4:05');
addToTracks(tracksReason, 'Entertainment', '3:35');
addToTracks(tracksReason, 'Hero of War', '4:13');
addToTracks(tracksReason, 'Savior', '4:02');
addToTracks(tracksReason, 'Hairline Fracture', '4:03');
addToTracks(tracksReason, 'Whereabouts Unknown', '4:02');
addToTracks(tracksReason, 'Elective Amnesia', '3:55');
console.log(tracksReason);

addToTracks(tracksEater, 'Star Eater', '4:33');
console.log(tracksEater);

addToTracks(tracksNight, 'Clvdbvrst', '4:39');
addToTracks(tracksNight, 'Blue Dream', '4:16');
addToTracks(tracksNight, 'The Night is Young (feat. Cherub)', '4:25');
addToTracks(tracksNight, 'Touch the Sky', '5:07');
addToTracks(tracksNight, 'From Dusk Till Dawn', '4:40');
addToTracks(tracksNight, 'Lets Go!', '4:09');
addToTracks(tracksNight, 'Just for the Thrill', '4:29');
addToTracks(tracksNight, 'Shooting Stars', '3:46');
console.log(tracksNight);

addToTracks(tracksConnector, 'An Epilogue as a Prologue', '1:42');
addToTracks(tracksConnector, 'Lady of Death', '3:47');
addToTracks(tracksConnector, 'The Lying Eyes of Miss Erray', '4:07');
addToTracks(tracksConnector, 'Psychomachia', '4:05');
addToTracks(tracksConnector, 'Adrift', '2:59');
addToTracks(tracksConnector, 'Slow Dancing Forever', '2:33');
addToTracks(tracksConnector, 'Friends (feat. Max Bemis)', '5:05');
addToTracks(tracksConnector, 'Playing Catch with .22', '3:17');
addToTracks(tracksConnector, "Andrew's Song", '4:00');
addToTracks(tracksConnector, 'The Hound and the Fox', '3:12');
addToTracks(tracksConnector, '(No) Faith in Fate', '4:18');
addToTracks(tracksConnector, 'The Frame I: Betrayal in the Watchtower', '5:25');
console.log(tracksConnector);

addToTracks(tracksBooks, 'History Books', '3:58');
console.log(tracksBooks);
