// 八重神子彩蛋。两种暗语进入同一结界，各自拥有不同的开场。
(function() {
  'use strict';
  if (window.__yaeEasterActive || window.__loopCollapse) return;
  window.__yaeEasterActive = true;

  var script = document.currentScript;
  var variant = script && script.dataset.variant === 'curse' ? 'curse' : 'sakura';
  var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var previousFocus = document.activeElement;
  var timers = [];
  var animations = [];
  var stopped = false;

  var style = document.createElement('style');
  style.textContent = `
    #yae-egg {
      --pink: #f0a4cf;
      --violet: #c6a2ff;
      --pale: #fff2fa;
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      max-width: none;
      max-height: none;
      margin: 0;
      padding: 0;
      border: 0;
      overflow: hidden;
      color: var(--pale);
      background: #100b1c;
      font-family: system-ui, sans-serif;
      box-sizing: border-box;
      isolation: isolate;
    }
    #yae-egg::backdrop { background: #100b1c; }
    #yae-egg * { box-sizing: border-box; }
    #yae-egg .yae-sky {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 73% 45%, #74408077, transparent 46%),
        radial-gradient(ellipse at 26% 86%, #91407442, transparent 42%),
        linear-gradient(125deg, #120e22, #1b1028 52%, #090b1a);
    }
    #yae-egg .yae-vignette {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(ellipse at center, transparent 28%, #070611aa 100%);
    }
    #yae-egg .yae-frame {
      position: absolute;
      inset: 24px;
      border: 1px solid #efaad028;
      pointer-events: none;
    }
    #yae-egg .yae-frame::before,
    #yae-egg .yae-frame::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      border-color: #f0a4cf94;
      border-style: solid;
    }
    #yae-egg .yae-frame::before { left: -1px; top: -1px; border-width: 1px 0 0 1px; }
    #yae-egg .yae-frame::after { right: -1px; bottom: -1px; border-width: 0 1px 1px 0; }
    #yae-egg .yae-mark {
      position: absolute;
      top: 52px;
      left: 6%;
      z-index: 5;
      margin: 0;
      color: var(--pink);
      font-size: 11px;
      letter-spacing: .42em;
    }
    #yae-egg .yae-skip {
      position: absolute;
      z-index: 8;
      top: 37px;
      right: 6%;
      min-height: 42px;
      padding: 9px 17px;
      border: 1px solid #e9acdb55;
      border-radius: 22px;
      background: #150d2599;
      color: #f4ddea;
      font: 12px system-ui, sans-serif;
      cursor: pointer;
    }
    #yae-egg .yae-skip:hover { border-color: var(--pink); color: #fff; }
    #yae-egg .yae-skip:focus-visible { outline: 2px solid var(--pink); outline-offset: 4px; }
    #yae-egg .yae-moon {
      position: absolute;
      left: 72%;
      top: 39%;
      width: min(43vw, 62vh);
      aspect-ratio: 1;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(circle, #a36aab44 0%, #a36aab20 47%, transparent 70%);
      border: none;
      pointer-events: none;
    }
    #yae-egg .yae-moon::after {
      content: '';
      position: absolute;
      inset: 9%;
      border: none;
      border-radius: 50%;
    }
    #yae-egg .yae-torii {
      position: absolute;
      left: 56%;
      top: 10%;
      width: 32%;
      height: 73%;
      opacity: .035;
      pointer-events: none;
    }
    #yae-egg .yae-torii::before {
      content: '';
      position: absolute;
      left: 7%;
      top: 10%;
      width: 86%;
      height: 12px;
      border-radius: 40% 40% 0 0;
      background: #f6b0d1;
      box-shadow: 0 34px #f6b0d1;
    }
    #yae-egg .yae-torii::after {
      content: '';
      position: absolute;
      top: 17%;
      left: 22%;
      width: 15px;
      height: 78%;
      background: #f6b0d1;
      box-shadow: 20vw 0 #f6b0d1;
    }
    #yae-egg .yae-person {
      position: absolute;
      z-index: 2;
      right: 3%;
      bottom: -4%;
      width: min(60vw, 83vh);
      height: 93%;
      object-fit: contain;
      object-position: bottom right;
      opacity: 0;
      mask-image: linear-gradient(to top, transparent, #000 13%, #000 95%);
      pointer-events: none;
    }
    #yae-egg .yae-fox {
      position: absolute;
      z-index: 1;
      left: 73%;
      top: 40%;
      width: min(28vw, 40vh);
      aspect-ratio: 1;
      transform: translate(-50%, -50%);
      opacity: 0;
      pointer-events: none;
    }
    #yae-egg .yae-fox img { width: 100%; height: 100%; object-fit: contain; }
    #yae-egg .yae-copy {
      position: absolute;
      z-index: 5;
      left: 11%;
      top: 29%;
      width: 45%;
      text-shadow: 0 2px 18px #0c091b;
      pointer-events: none;
    }
    #yae-egg .yae-chapter {
      margin: 0 0 24px;
      color: var(--pink);
      font-size: 11px;
      letter-spacing: .32em;
    }
    #yae-egg .yae-chapter::before {
      content: '';
      display: inline-block;
      width: 34px;
      height: 1px;
      margin: 0 14px 4px 0;
      background: var(--pink);
    }
    #yae-egg .yae-title {
      margin: 0;
      font-family: 'Noto Serif SC', 'Songti SC', SimSun, serif;
      font-size: clamp(30px, 3.8vw, 60px);
      font-weight: 400;
      line-height: 1.55;
      letter-spacing: .12em;
      white-space: pre-line;
    }
    #yae-egg .yae-line {
      max-width: 420px;
      margin: 20px 0 0;
      color: #e9cfdf;
      font-size: 14px;
      line-height: 2;
      letter-spacing: .1em;
      white-space: pre-line;
    }
    #yae-egg .yae-stamp {
      position: absolute;
      z-index: 4;
      left: 11%;
      bottom: 13%;
      margin: 0;
      color: #f2b4d1a8;
      font-size: 10px;
      letter-spacing: .4em;
    }
    #yae-egg .yae-seals {
      position: absolute;
      z-index: 3;
      left: 72%;
      top: 42%;
      width: min(36vw, 52vh);
      aspect-ratio: 1;
      transform: translate(-50%, -50%);
      opacity: 0;
      pointer-events: none;
    }
    #yae-egg .yae-seals::before,
    #yae-egg .yae-seals::after {
      content: '';
      position: absolute;
      inset: 15%;
      border: 1px solid #e8acd066;
      border-radius: 50%;
    }
    #yae-egg .yae-seals::after { inset: 31%; border-style: dashed; }
    #yae-egg .yae-seal {
      position: absolute;
      left: 49%;
      top: 4%;
      width: 2%;
      height: 14%;
      border: 1px solid #f2b4d1aa;
      border-radius: 80% 80% 25% 25%;
      transform-origin: 50% 330%;
      transform: rotate(var(--angle));
      background: linear-gradient(#f5b2d022, #ca80da66);
    }
    #yae-egg .yae-sakura {
      position: absolute;
      z-index: 1;
      left: var(--x); top: var(--y);
      width: min(17vw, 26vh); aspect-ratio: 2 / 3;
      transform: translate(-50%, -50%);
      opacity: 0; pointer-events: none;
    }
    #yae-egg .yae-sakura img { width: 100%; height: 100%; object-fit: contain; }
    #yae-egg .yae-sakura[data-reverse] img { scale: -1 1; }
    #yae-egg .yae-bolt {
      position: absolute;
      z-index: 1;
      left: var(--x);
      top: 6%;
      width: 35px;
      height: 71%;
      opacity: 0;
      pointer-events: none;
      background: linear-gradient(180deg, transparent, #f7cbff 28%, #e6bbff, #fff 76%, transparent);
      clip-path: polygon(45% 0, 58% 0, 43% 36%, 75% 37%, 15% 100%, 37% 54%, 22% 53%);
    }
    #yae-egg .yae-flash {
      position: absolute;
      z-index: 1;
      inset: 0;
      opacity: 0;
      pointer-events: none;
      background: radial-gradient(ellipse at 70% 50%, #f3ddff99, #b570ca33 45%, transparent 75%);
    }
    #yae-egg .yae-petal {
      position: absolute;
      z-index: 3;
      left: var(--x);
      top: var(--y);
      width: 12px;
      height: 19px;
      border-radius: 90% 0 80% 12%;
      opacity: 0;
      background: linear-gradient(125deg, #ffd9e8, #df8bbb);
      pointer-events: none;
    }
    @media (max-width: 767px) {
      #yae-egg .yae-frame { inset: 14px; }
      #yae-egg .yae-mark { top: 37px; left: 28px; font-size: 9px; letter-spacing: .25em; }
      #yae-egg .yae-skip { top: 23px; right: 25px; }
      #yae-egg .yae-moon { left: 54%; top: 35%; width: min(74vw, 42vh); }
      #yae-egg .yae-torii { left: 25%; top: 8%; width: 50%; height: 58%; }
      #yae-egg .yae-torii::after { box-shadow: 26vw 0 #f6b0d1; }
      #yae-egg .yae-person { right: 0; bottom: 25%; width: 100%; height: 62%; object-position: center bottom; mask-image: linear-gradient(to top, transparent, #000 35%, #000 95%); }
      #yae-egg .yae-fox { left: 50%; top: 31%; width: min(55vw, 35vh); }
      #yae-egg .yae-seals { left: 50%; top: 32%; width: min(63vw, 37vh); }
      #yae-egg .yae-copy { left: 8%; top: 70%; width: 84%; text-align: center; }
      #yae-egg .yae-copy::before { content: ''; position: absolute; z-index: -1; inset: -16px -12px -16px; background: radial-gradient(ellipse, #150d25dc 12%, #150d2588 58%, transparent 78%); }
      #yae-egg .yae-chapter { margin-bottom: 12px; font-size: 9px; }
      #yae-egg .yae-chapter::before { width: 20px; margin-right: 8px; }
      #yae-egg .yae-title { font-size: clamp(25px, 7.5vw, 36px); line-height: 1.45; }
      #yae-egg .yae-line { margin: 12px auto 0; font-size: 12px; line-height: 1.75; }
      #yae-egg .yae-stamp { left: 0; width: 100%; bottom: 5%; text-align: center; font-size: 8px; }
      #yae-egg .yae-sakura { width: min(31vw, 18vh); height: auto; top: 39%; }
      #yae-egg .yae-sakura:nth-of-type(n) { left: var(--mobile-x); }
      #yae-egg .yae-sakura[data-center] { top: 22%; }
      #yae-egg .yae-bolt { height: 48%; }
      #yae-egg .yae-flash { background: radial-gradient(ellipse at 50% 32%, #f3ddff88, transparent 67%); }
    }
    @media (max-width: 767px) and (max-height: 670px) {
      #yae-egg .yae-person { bottom: 24%; height: 58%; }
      #yae-egg .yae-copy { top: 70%; }
      #yae-egg .yae-title { font-size: 23px; }
      #yae-egg .yae-line { font-size: 11px; }
      #yae-egg .yae-stamp { bottom: 4%; }
    }
    @media (prefers-reduced-motion: reduce) {
      #yae-egg *, #yae-egg *::before, #yae-egg *::after { transition: none !important; }
    }
  `;
  document.head.appendChild(style);

  var dialog = document.createElement('dialog');
  dialog.id = 'yae-egg';
  dialog.setAttribute('aria-labelledby', 'yae-title');
  dialog.innerHTML = `
    <div class="yae-sky"></div><div class="yae-torii" aria-hidden="true"></div>
    <div class="yae-moon" aria-hidden="true"></div><div class="yae-vignette"></div>
    <div class="yae-frame"></div><p class="yae-mark">NARUKAMI · 八重神子</p>
    <button class="yae-skip" type="button" aria-label="跳过八重神子彩蛋">跳过 · ESC</button>
    <div class="yae-fox" aria-hidden="true"><img src="yae-easter-egg-img/fox.webp" alt="" decoding="async"></div>
    <div class="yae-seals" aria-hidden="true"></div>
    <img class="yae-person" src="yae-easter-egg-img/miko.webp" alt="" decoding="async">
    <div class="yae-copy" aria-live="polite" aria-atomic="true">
      <p class="yae-chapter">鸣神大社 · 狐之结界</p>
      <h2 class="yae-title" id="yae-title"></h2>
      <p class="yae-line"></p>
    </div>
    <p class="yae-stamp">YAE MIKO · 稻妻</p>
    <div class="yae-sakura"  style="--x:47%;--y:65%;--mobile-x:16%" aria-hidden="true"><img src="yae-easter-egg-img/sakura.webp" alt="" decoding="async"></div>
    <div class="yae-sakura" data-center style="--x:61%;--y:25%;--mobile-x:43%" aria-hidden="true"><img src="yae-easter-egg-img/sakura.webp" alt="" decoding="async"></div>
    <div class="yae-sakura" data-reverse style="--x:91%;--y:50%;--mobile-x:84%" aria-hidden="true"><img src="yae-easter-egg-img/sakura.webp" alt="" decoding="async"></div>
    <div class="yae-bolt" style="--x:30%" aria-hidden="true"></div>
    <div class="yae-bolt" style="--x:53%" aria-hidden="true"></div>
    <div class="yae-bolt" style="--x:76%" aria-hidden="true"></div>
    <div class="yae-flash" aria-hidden="true"></div>
  `;
  document.body.appendChild(dialog);

  var title = dialog.querySelector('.yae-title');
  var chapter = dialog.querySelector('.yae-chapter');
  var line = dialog.querySelector('.yae-line');
  var copy = dialog.querySelector('.yae-copy');
  var person = dialog.querySelector('.yae-person');
  var fox = dialog.querySelector('.yae-fox');
  var seals = dialog.querySelector('.yae-seals');
  var sakura = Array.from(dialog.querySelectorAll('.yae-sakura'));
  var bolts = Array.from(dialog.querySelectorAll('.yae-bolt'));
  var flash = dialog.querySelector('.yae-flash');

  for (var i = 0; i < 6; i++) {
    var seal = document.createElement('i');
    seal.className = 'yae-seal';
    seal.style.setProperty('--angle', i * 60 + 'deg');
    seals.appendChild(seal);
  }

  var petalPositions = [
    [14, 21], [27, 39], [38, 13], [52, 31], [65, 18],
    [78, 36], [85, 14], [22, 58], [72, 58], [91, 67]
  ];
  var petals = petalPositions.map(function(point) {
    var petal = document.createElement('i');
    petal.className = 'yae-petal';
    petal.style.setProperty('--x', point[0] + '%');
    petal.style.setProperty('--y', point[1] + '%');
    dialog.appendChild(petal);
    return petal;
  });

  function later(action, delay) {
    timers.push(setTimeout(function() { if (!stopped) action(); }, delay));
  }

  function animate(element, frames, duration, delay) {
    var animation = element.animate(frames, {
      duration: duration,
      delay: delay || 0,
      easing: 'cubic-bezier(.22,1,.36,1)',
      fill: 'forwards'
    });
    animations.push(animation);
    return animation;
  }

  function write(label, heading, detail) {
    chapter.textContent = label;
    title.textContent = heading;
    line.textContent = detail;
    if (!reducedMotion) animate(copy, [
      { opacity: 0, transform: 'translateY(12px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], 650);
  }

  function cleanup() {
    if (stopped) return;
    stopped = true;
    timers.forEach(clearTimeout);
    animations.forEach(function(animation) { animation.cancel(); });
    document.removeEventListener('visibilitychange', onVisibility);
    dialog.removeEventListener('cancel', onCancel);
    dialog.removeEventListener('close', cleanup);
    if (dialog.open) dialog.close();
    dialog.remove();
    style.remove();
    dialog.querySelectorAll('.yae-sakura img').forEach(function(img) { img.removeAttribute('src'); });
    person.removeAttribute('src');
    dialog.querySelector('.yae-fox img').removeAttribute('src');
    if (script) script.remove();
    if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    setTimeout(function() { window.__yaeEasterActive = false; }, 700);
  }

  function onCancel(event) { event.preventDefault(); cleanup(); }
  function onVisibility() { if (document.hidden) cleanup(); }
  dialog.addEventListener('cancel', onCancel);
  dialog.addEventListener('close', cleanup);
  dialog.addEventListener('click', function(event) { event.stopPropagation(); });
  dialog.addEventListener('keydown', function(event) { event.stopPropagation(); });
  dialog.querySelector('.yae-skip').addEventListener('click', cleanup);
  document.addEventListener('visibilitychange', onVisibility);
  if (previousFocus && previousFocus.blur) previousFocus.blur();
  dialog.showModal();
  dialog.querySelector('.yae-skip').focus({ preventScroll: true });

  function showFinal() {
    write('鸣神大社 · 宫司大人', '今日的见闻，\n留作秘密。', '呵，别紧张。刚才不过是同你开个玩笑。');
    if (reducedMotion) {
      person.style.opacity = '1';
      sakura.forEach(function(item) { item.style.opacity = '.9'; });
      return;
    }
    animate(person, [
      { opacity: 1, transform: 'translateY(4px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], 950);
    animate(fox, [{ opacity: .38 }, { opacity: 0 }], 900);
  }

  function showThunder(index) {
    animate(bolts[index], [
      { opacity: 0, transform: 'translateY(-8px)' },
      { opacity: .55, transform: 'translateY(0)', offset: .32 },
      { opacity: 0, transform: 'translateY(12px)' }
    ], 320);
    animate(flash, [
      { opacity: 0 }, { opacity: .16, offset: .38 }, { opacity: 0 }
    ], 350);
  }

  function start() {
    if (stopped) return;
    if (reducedMotion) {
      showFinal();
      later(cleanup, 6500);
      return;
    }

    write(
      variant === 'curse' ? '第六重命之座 · 大杀生咒禁' : '野干役咒 · 杀生樱',
      variant === 'curse' ? '连这道咒禁，\n你也认得？' : '樱色已在，\n等你入局。',
      variant === 'curse' ? '哎呀，看来这回来了位有趣的客人。' : '狐影掠过，结界悄然合拢。'
    );

    if (variant === 'curse') {
      animate(seals, [
        { opacity: 0, transform: 'translate(-50%,-50%) scale(.7) rotate(-22deg)' },
        { opacity: .8, transform: 'translate(-50%,-50%) scale(1) rotate(0)' }
      ], 1150);
    }
    petals.forEach(function(petal, index) {
      animate(petal, [
        { opacity: 0, transform: 'translate(0,-25px) rotate(-18deg)' },
        { opacity: .82, transform: 'translate(22px,28px) rotate(65deg)', offset: .45 },
        { opacity: 0, transform: 'translate(44px,85px) rotate(145deg)' }
      ], 4800 + index * 110, index * 130);
    });

    later(function() {
      animate(person, [
        { opacity: 0, transform: 'translateX(28px) scale(1.02)' },
        { opacity: 1, transform: 'translateX(0) scale(1)' }
      ], 1100);
    }, 1200);

    sakura.forEach(function(item, index) {
      later(function() {
        animate(item, [
          { opacity: 0, transform: 'translate(-50%,-40%) scale(.72)' },
          { opacity: .95, transform: 'translate(-50%,-50%) scale(1)' }
        ], 1000);
        animate(item.querySelector('img'), [
          { transform: 'translateY(7px) rotate(-2deg)' },
          { transform: 'translateY(-7px) rotate(1deg)', offset: .5 },
          { transform: 'translateY(5px) rotate(-1deg)' }
        ], 8000);
      }, 1750 + index * 650);
    });
    later(function() {
      animate(seals, [{ opacity: .5 }, { opacity: 0 }], 800);
      write('三樱结阵', '看见了吗？', '每一株杀生樱，都在替我留意你的动静。');
    }, 3750);
    later(function() {
      animate(fox, [
        { opacity: 0, transform: 'translate(-50%,-50%) scale(.7)' },
        { opacity: .38, transform: 'translate(-50%,-50%) scale(1)' }
      ], 650);
      write('天狐之凭', '小心，落雷。', '别眨眼。神社里偶尔也有这样的余兴。');
    }, 5400);
    bolts.forEach(function(_bolt, index) {
      later(function() { showThunder(index); }, 6200 + index * 480);
    });
    later(showFinal, 7900);
    later(function() { animate(dialog, [{ opacity: 1 }, { opacity: 0 }], 750); }, 10100);
    later(cleanup, 10900);
  }

  var loadTimeout;
  var loadLimit = new Promise(function(resolve) {
    loadTimeout = setTimeout(resolve, 1400);
    timers.push(loadTimeout);
  });
  Promise.race([Promise.all([person, sakura[0].querySelector('img')].map(function(img) { return img.decode().catch(function() {}); })), loadLimit]).then(function() {
    clearTimeout(loadTimeout);
    start();
  });
})();
