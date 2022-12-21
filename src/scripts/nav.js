console.clear();
const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });

const playButton = document.querySelector('#play');
const closeButton = document.querySelector('#close');
const Nav = document.querySelector('#nav');
const navbar_1 = document.querySelector('#navbar_1');
const navbar_2 = document.querySelector('#navbar_2');
const navbar_3 = document.querySelector('#navbar_3');
const DevButton = document.querySelector('#dev');

playButton.addEventListener('click', () => {
tl.to(playButton, { scale: 0.5 })
  .to(navbar_1, { rotation: '45%' }, '<')
  .to(navbar_2, { rotation: '-45%' }, '<')
  .to(navbar_3, { rotation: '45%' }, '<')
  .to(playButton, { opacity: 0 }, '<')
  .to(Nav, { x: '-100%' }, );
tl.play()
});

closeButton.addEventListener('click', () => {
  tl.to(playButton, { scale: 1 })
    .to(navbar_1, { rotation: '0%' }, '<')
    .to(navbar_2, { rotation: '0%' }, '<')
    .to(navbar_3, { rotation: '0%' }, '<')
    .to(playButton, { opacity: 1},'<')
    .to(Nav, { x: 0 },'<');
  tl.play();
});

DevButton.addEventListener('click', () => {
  tl.to(playButton, { scale: 1 })
    .to(navbar_1, { rotation: '0%' }, '<')
    .to(navbar_2, { rotation: '0%' }, '<')
    .to(navbar_3, { rotation: '0%' }, '<')
    .to(playButton, { opacity: 1},'<')
    .to(Nav, { x: 0 },'<');
  tl.play();
});