console.log("lights up");

let imageArray = [
"https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg",
"https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
"http://www.naturallivingideas.com/wp-content/uploads/2015/08/baby-goat.jpg",
"http://i.huffpost.com/gen/1843734/thumbs/o-GOATS-facebook.jpg",
"https://gocooking.files.wordpress.com/2014/11/goatssly.jpg",
"http://www.doseoffunny.com/wp-content/uploads/2014/04/tumblr_mpe54zOcNi1qdlh1io1_250.gif",
"http://www.doseoffunny.com/wp-content/uploads/2014/04/i.chzbgr.gif",
"http://p.fod4.com/p/media/849afa2424/onbSdgoQru6Fx66MLrgJ_g13.gif",
"https://s-media-cache-ak0.pinimg.com/originals/f7/4c/a9/f74ca9048aae75c6710363f8079d5990.gif",
"https://img.buzzfeed.com/buzzfeed-static/static/campaign_images/webdr02/2013/3/23/15/7-gifs-of-adorable-fainting-goats-1-15165-1364067266-1_big.jpg"
];


const tiles = document.querySelectorAll('.tile');
const startButton = document.querySelector('button');
let randomImages = [];
document.onLoad()
startButton.addEventListener('click', startGame);

function startGame() {
  document.getElementById('modal').style.visibility = "hidden";
  randomizeImages();
  setBoard();
}

function randomizeImages() {
  for (let i = 0; i < tiles.length; i++) {
   var imgNum = Math.floor(Math.random() * imageArray.length);
   randomImages.push(imageArray[imgNum]);
   imageArray.splice(imgNum, 1);
  }
};

function setBoard() {
    for (let i = 0; i < tiles.length; i++) {
    var imgNum = Math.floor(Math.random() * imageArray.length);
    tiles[i].setAttribute("src", randomImages[imgNum]);
  }
};


