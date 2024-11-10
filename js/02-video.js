// Importăm Vimeo Player și Lodash Throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Referință către iframe-ul player-ului
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

// Cheia pentru stocarea în localStorage
const STORAGE_KEY = 'videoplayer-current-time';

// Funcție pentru a salva timpul curent în localStorage
const saveCurrentTime = throttle((data) => {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(`Timpul curent salvat: ${data.seconds} secunde`);
}, 1000); // Salvăm timpul o dată pe secundă

// Ascultăm evenimentul de actualizare a timpului (timeupdate)
player.on('timeupdate', saveCurrentTime);

// La reîncărcarea paginii, setăm timpul de redare la valoarea salvată
const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).catch((error) => {
    console.error('Eroare la setarea timpului:', error);
  });
}

