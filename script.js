'use strict';

const game = {
  startTime: null,
  stopTime: null,
  seconds: null,
  displayArea: document.getElementById('display-area'),
  evaluation: { good: 'すごい！', bad: '残念。'},
  start: () => {
    game.displayArea.innerText = '計測中...';
    game.startTime = new Date();
  },
  stop: () => {
    game.stopTime = new Date();
    game.seconds = (game.stopTime - game.startTime) / 1000;

    if (9 <= game.seconds && game.seconds <= 11) {
      game.displayArea.innerText = `${game.seconds} 秒でした。${game.evaluation.good}`;
    } else {
      game.displayArea.innerText = `${game.seconds} 秒でした。${game.evaluation.bad}`;
    }
  }
};

if (confirm('OK を押して、ちょうど 10 秒経ったと思ったら何かキーを押して下さい。')) {
  game.start();
  document.body.addEventListener('keydown', game.stop, { once: true });
}
