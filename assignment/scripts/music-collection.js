console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}

console.log(addToCollection('Heroes', 'Sabaton', '2014'));
console.log(addToCollection('Appeal to Reason', 'Rise Against', '2008'));
console.log(addToCollection('Star Eater', 'Daniel Deluxe', '2015'));
console.log(addToCollection('A Place Behind the Moon', 'Big Gigantic', '2010'));
console.log(addToCollection('20/20 Vision', 'Antiflag', '2020'));
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
