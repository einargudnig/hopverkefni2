class Spilari {
/*
* í smiðnum upphafsstillum við breytur
* búum til takka og bætum við eventListener
*/
  constructor() { // smiður
  // Upphafstilum breytur
    this.Sida = document.querySelector('.mainSpilari');
    this.id = null;
    this.videos = null;
    this.categories = null;

    this.isPlaying = false;
    this.ismute = false;

    /* upphafstillum takka
    this.playButton = document.querySelector('.playButton');
    this.muteButton = document.querySelector('.muteButton');
    this.fullscreenButton = document.querySelector('.fullscreenButton');
    this.forwardButton = document.querySelector('.forwardButton');
    this.backwardsButton = document.querySelector('.backwardsButton');
    this.playOverlay = document.querySelector('.vidPlayer')

  // Bætum við eventListener á alla takkana
    this.playTakki.addEventListener('click', this.play.bind(this));
    this.muteTakki.addEventListener('click', this.mute.bind(this));
    this.fullscreenTakki.addEventListener('click', this.fullscreen.bind(this));
    this.forwardTakki.addEventListener('click', this.forward.bind(this));
    this.backwardsTakki.addEventlistener('click', this.backward.bind(this));*/
  }

  play() {

  }

/*
* ATH það má aleg breyta nöfnum á föllum og breyta uppröðun.
* Á pottþétt eftir að breytast þegar við komum Forsida.js til að virka
*/


/*
* Smíðum HTML sem er útlit spilarans
* Hlöðum inn const(header/img/source) úr þeirra fylkjum.
* Búum svo til header
* Gerum videoImg undir, sem er .poster úr videos.json
* Gerum "playOverlay" þegar playtakki kemur yfir mynband
*/
  makeHTML() {
    const h1 = document.createElement('h1');
    const videoplayer = document.createElement('video');




  }

/*
* Undirbýr spilara fyrir spilun
*/
  preparePlayer() {

  }

/*
* fall þar sem við hlöðum inn myndbandi
* þurfum að nota JSON til að sækja gögn
* græja villur fyrir 200/400
*
*/
  fetchJson() {
    const request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', './videos.json', true);
    request.onload = function onLoad() {
      const data = JSON.parse(request.response);
      const x = window.location.search.substring(4);
      if (request.status >= 200 && request.status < 400) {
         myFunction(data, x);
      } else {
        alert("Villa kom upp!");
      }
    };
    request.send();
  }


/*
* Athugum hvort sé verið að spila myndband
* ef verið er að spila myndband birtum við pause takka/img
* ef það er ekki verið að spila þá birtum við
* spila takka/img
*/
  play() {

  }

  init(content) {
    this.Sida = content;
  }

/*
* Gerum mute takkann
* gerum hann virkann og "breytum" img.
* Ef mute = false -> sýnum mute takka/img
* Ef mute = true -> sýnum unmute takka/img
*/
  mute() {

  }

// Virkni á fullscreen takkann
  fullscreen() {
  this.video.webkitRequestFullScreen();
  }

// Virkni á 'spóla áfram takkann'
  forward() {
  this.video.currentTime = this.video.currentTime + 3;
  }

// Virkni á 'spóla afturábak takkann'
  backward() {
  this.video.currentTime = this.video.currentTime - 3;
   }

}

function onVideo() {
  return document.getElementById() != null;
}

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.mainSpilari');
  const spilari = new Spilari();

  spilari.init(content);
  spilari.fetchJSON();
});
