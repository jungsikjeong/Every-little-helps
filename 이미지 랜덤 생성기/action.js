window.onload = function () {
  var body = document.querySelector('body');
  var _buttonAll = document.querySelectorAll('button');
  var windowWidth, windowHeight;
  var pageNum = 0;
  var bgColorArr = ['#2eccc4', '#ea204f', '#20a9ea'];

  for (var i = 0; i < _buttonAll.length; i++) {
    (function (index) {
      _buttonAll[index].onclick = function () {
        pageNum = index;

        motionSetting();
      };
    })(i);
  }

  TweenMax.from('h1', 2, {
    left: -200,
    autoAlpha: 0,
    ease: Power3.easeOut,
  });

  _buttonAll.forEach(function (item, i) {
    TweenMax.from(item, 1, {
      top: 100,
      autoAlpha: 0,
      ease: Power3.easeOut,
      delay: i * 0.1 + 1,
    });
  });

  TweenMax.set('section', { perspective: 400 });

  var item;
  var section = document.querySelector('section');

  var totalNum = 35;

  for (var i = 0; i < totalNum; i++) {
    a = document.createElement('a');
    item = document.createElement('img');
    a.appendChild(item);
    item.setAttribute('class', 'image');
    item.style.top = window.innerHeight / 2 + 'px';
    item.style.left = window.innerWidth / 2 + 'px';
    item.src = `https://source.unsplash.com/collection/random${i}/1600x900`;
    a.href = `https://source.unsplash.com/collection/random${i}/1600x900`;
    section.appendChild(a);
    imageHover(item);
  }

  var _image = document.querySelectorAll('.image');

  function imageHover(el) {
    el.addEventListener('mouseenter', function () {
      TweenMax.to(el, 0.5, {
        autoAlpha: 1,
        ease: Power4.easenOut,
      });
    });

    el.addEventListener('mouseleave', function () {
      TweenMax.to(el, 0.5, {
        autoAlpha: 'random(.1,1)',
        ease: Power4.easenOut,
      });
    });
  }

  function motionSetting() {
    body.style.background = bgColorArr[pageNum];

    for (var i = 0; i < _buttonAll.length; i++) {
      if (pageNum === i) {
        _buttonAll[pageNum].classList.add('active');
      } else {
        _buttonAll[i].classList.remove('active');
      }
    }

    // 중복된 트윈 킬, 다 죽이고 다시 이벤트처리
    TweenMax.killTweensOf(_image);

    if (pageNum === 0) {
      _image.forEach(function (item, i) {
        TweenMax.to(item, 1, {
          top: Math.random() * (windowHeight - 150) + 60,
          left: Math.random() * (windowWidth - 80) + 20,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          autoAlpha: 'random(.1,1)',
          scale: 0.5,
          ease: Power4.easenOut,
          delay: 'random(0,.5)',
        });
      });
    } else if (pageNum === 1) {
      _image.forEach(function (item, i) {
        TweenMax.to(item, 1, {
          top: windowHeight / 2 + Math.sin(i / 3) * 40,
          left: i * 53, //windowWidth / 2 , i * 20
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          autoAlpha: 1,
          scale: 0.5,
          ease: Power4.easeInOut,
          delay: i * 0.02, //"random(0,.5)"
        });
      });
    } else if (pageNum === 2) {
      _image.forEach(function (item, i) {
        TweenMax.to(item, 1, {
          top: windowHeight / 2 + Math.sin(i / 3) * 40,
          left: i * 53, //windowWidth / 2 , i * 20
          rotationX: 0,
          rotationY: 0,
          rotationZ: 50,
          autoAlpha: 1,
          scale: 0.5,
          ease: Power4.easeInOut,
          delay: i * 0.02, //"random(0,.5)"
        });
      });
    }
  }

  window.addEventListener('resize', function () {
    resize();
  });

  function resize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    motionSetting();
  }

  resize();
};
