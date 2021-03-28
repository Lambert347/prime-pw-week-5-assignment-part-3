console.log('***** Music Collection *****')

let collection = [];

//Initializes empty arrays to correspond to the tracks array for each album.
let tracksGreat = [];
let tracksReason = [];
let tracksEater = [];
let tracksNight = [];
let tracksConnector = [];
let tracksBooks = [];

//Function that adds track names and durations to a tracks array. The function takes the associated tracks array for the track as input, then the track name, and finally duration.
//Then the function fills out a track object with the name and duration, then pushes that track to the tracks array indicated in the input. Then it returns the track.
function addToTracks(tracks, name, duration) {
  let track = {
    name: name,
    duration: duration
  }
  tracks.push(track);
  return track;
}


//The following monstrosity is running the addToTracks function and adding the various track names and durations for Sabaton's The Great War album.
//At the end of the code block, the console.log confirms that every track was added.
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

//Similar to above but with the tracks for Rise Against's Appeal to Reason album.
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

//Similar to above but with Daniel Deluxe's Star Eater single.
addToTracks(tracksEater, 'Star Eater', '4:33');
console.log(tracksEater);

//Adding the tracks and durations for Big Gigantic's the Night is Young album.
addToTracks(tracksNight, 'Clvdbvrst', '4:39');
addToTracks(tracksNight, 'Blue Dream', '4:16');
addToTracks(tracksNight, 'The Night is Young (feat. Cherub)', '4:25');
addToTracks(tracksNight, 'Touch the Sky', '5:07');
addToTracks(tracksNight, 'From Dusk Till Dawn', '4:40');
addToTracks(tracksNight, 'Lets Go!', '4:09');
addToTracks(tracksNight, 'Just for the Thrill', '4:29');
addToTracks(tracksNight, 'Shooting Stars', '3:46');
console.log(tracksNight);

//Adding the tracks and durations for I the Mighty's Connector album.
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

//Finally, adding the track and duration for Absofacto's History Books single.
addToTracks(tracksBooks, 'History Books', '3:58');
console.log(tracksBooks);




//Function to add a new album to the collection array. The function takes the title, artist, year published, and associated tracks array as input.
//Then the function fills an album object with the provided data, pushes the album into the collection array, and finally returns the album.
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

//Adds the corresponding title, artist, year published, and the corresponding tracks array to array using the above addToCollection function. Prints the result to the console log. 
console.log(addToCollection('The Great War', 'Sabaton', '2019', tracksGreat));
console.log(addToCollection('Appeal to Reason', 'Rise Against', '2008', tracksReason));
console.log(addToCollection('Star Eater', 'Daniel Deluxe', '2015', tracksEater));
console.log(addToCollection('The Night is Young', 'Big Gigantic', '2014', tracksNight));
console.log(addToCollection('Connector', 'I the Mighty', '2015', tracksConnector));
console.log(addToCollection('History Books', 'Absofacto', '2015', tracksBooks));

console.log(collection);
console.log(collection[2]);


//Function to show the collection by looping through each album of the collection array and printing the album name (title), artist, and the year published to the console log.
function showCollection(array) {
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(collection[i].title + ' by ' + collection[i].artist + ', published in ' + collection[i].yearPublished + ':');
    //Nested for loop that loops through the array of tracks in each album, printing the track name and its duration to the console log.
    for (let j = 0; j < collection[i].tracks.length; j++) {
      console.log((j + 1) + '. ' + collection[i].tracks[j].name + ': ' + collection[i].tracks[j].duration);
    }
  }
}

showCollection(collection);

//Function to take an artist as an input and then return any albums in the collection that correspond to the provided artist.
function findByArtist(artist) {
  let search = [];
  for (let i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist)
    {
      search.push(collection[i]);
    }
  }
  return search;
}

//First console log of the function call will return a single element array of 'Absofacto'. Second will return an empty array since there is none of that garbage in my collection.
console.log(findByArtist('Absofacto'));
console.log(findByArtist('Nickelback'));


//STRETCH GOALS
//Function to search for a track in the collection by taking the artist, year, and the track name as input.
//Takes those inputs and fills a searchObject object to then compare those inputs with the collection array.
function search(artist, year, trackName) {
  let results = [];
  let searchObject = {
    searchArtist: artist,
    searchYear: year,
    trackName: trackName
  }

  //If the provided search parameters are empty or undefined, then the function will return the whole collection.
  if (searchObject.searchArtist === undefined && searchObject.searchYear === undefined && searchObject.trackName === undefined) {
    return collection;
  }

  //Otherwise, the function will loop through the entire collection array and compare the artist and year parameters in the searchObject object with those present in each album of the collection.
  else {
    for (let i = 0; i < collection.length; i++) {
      //Compares the searchYear and searchArtist parameters with the corresponding values in the collection array.
      if (searchObject.searchYear === collection[i].yearPublished && searchObject.searchArtist === collection[i].artist) {
        //If BOTH of those parameters are present in the collection array, it then loops through the tracks array in each matching album, comparing the trackName from the search parameters with the track names in those albums being looped through.
        for (let j = 0; j < collection[i].tracks.length; j++) {
          //If there is the same track name present in both, then the function pushes the corresponding artist and that track name to the results array.
          if (searchObject.trackName === collection[i].tracks[j].name) {
            results.push(collection[i].artist);
            results.push(collection[i].tracks[j].name);
          }
        }
      }
    }
  }
  //Returns the results array. Will return an empty array if the searched for object is not present in the collection.
  return results;
}

//The console log will return the Artist name and track name since it is present in the array called collection.
console.log(search('Rise Against', '2008', 'Long Forgotten Sons'));
console.log(search('Absofacto', '2015', 'History Books'));

//The search function will return an empty array of search results since nothing by Ray Charles is present in the collection.
console.log(search('Ray Charles', '1957'));

//The search will return the entire collection since the search input was left empty.
console.log(search());
