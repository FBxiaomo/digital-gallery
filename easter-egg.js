// 白厄 · 日冕。第 33,550,336 次永劫回归的托付。
// 文案为彩蛋创作，图片作为记忆意象，不按编号划分角色生平阶段。
(function() {
  'use strict';
  if (window.__loopCollapse) return;
  window.__loopCollapse = true;

  var script = document.currentScript;
  var previousFocus = document.activeElement;
  var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timers = [];
  var animations = [];
  var portraits = [];
  var stopped = false;
  var currentPortrait = null;
  var portraitAnimation = null;

  var style = document.createElement('style');
  style.textContent = `
  #phainon-egg {
    --gold: #e8c889;
    --ivory: #f4eee1;
    --muted: #b7ae9d;
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
    color: var(--ivory);
    background: #080b12;
    box-sizing: border-box;
    font-family: system-ui,sans-serif;
    isolation: isolate;
  }
  #phainon-egg::backdrop {
    background: #080b12;
  }
  #phainon-egg * {
    box-sizing: border-box;
  }
  #phainon-egg .egg-warmth {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .7;
    background: radial-gradient(ellipse at 68% 46%,#6b4c244a,transparent 58%),radial-gradient(ellipse at 12% 100%,#b37b2524,transparent 55%);
    transition: opacity 1s;
  }
  #phainon-egg.is-memory .egg-warmth {
    opacity: .1;
  }
  #phainon-egg.is-final .egg-warmth {
    opacity: 1;
  }
  #phainon-egg .egg-frame {
    position: absolute;
    inset: 28px;
    border: 1px solid #e8c88920;
    pointer-events: none;
  }
  #phainon-egg .egg-frame::before, #phainon-egg .egg-frame::after {
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    border-color: #e8c88988;
    border-style: solid;
  }
  #phainon-egg .egg-frame::before {
    inset: -1px auto auto -1px;
    border-width: 1px 0 0 1px;
  }
  #phainon-egg .egg-frame::after {
    inset: auto -1px -1px auto;
    border-width: 0 1px 1px 0;
  }
  #phainon-egg .egg-heading {
    position: absolute;
    top: 58px;
    left: 6.5%;
    margin: 0;
    color: var(--gold);
    font-size: 11px;
    letter-spacing: .48em;
    font-weight: 500;
  }
  #phainon-egg .egg-skip {
    position: absolute;
    right: 6.5%;
    top: 46px;
    z-index: 5;
    min-height: 40px;
    padding: 8px 14px;
    border: 1px solid #e8c88938;
    border-radius: 24px;
    background: #080b1266;
    color: var(--muted);
    font: 12px system-ui,sans-serif;
    cursor: pointer;
  }
  #phainon-egg .egg-skip:hover {
    color: var(--ivory);
    border-color: var(--gold);
  }
  #phainon-egg .egg-skip:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 4px;
  }
  #phainon-egg .egg-sun-position {
    position: absolute;
    left: 67%;
    top: 46%;
    width: min(46vw,65vh);
    aspect-ratio: 1;
    transform: translate(-50%,-50%);
    pointer-events: none;
  }
  #phainon-egg .egg-sun {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    opacity: .36;
    background: radial-gradient(circle,#fff9df 0%,#ebcb87 61%,#a36c2b 69%,transparent 70%);
    transform: scale(.8);
    transition: opacity 1s,transform 1.4s cubic-bezier(.22,1,.36,1);
  }
  #phainon-egg .egg-sun::before {
    content: "";
    position: absolute;
    inset: -13%;
    border-radius: 50%;
    background: radial-gradient(circle,transparent 54%,#f6d9a22e 57%,transparent 69%);
  }
  #phainon-egg .egg-umbra {
    position: absolute;
    inset: 2%;
    border-radius: 50%;
    background: #080b12;
    transform: translateX(-112%);
    transition: transform 2s cubic-bezier(.22,1,.36,1);
  }
  #phainon-egg.is-memory .egg-sun {
    opacity: .65;
    transform: scale(.86);
  }
  #phainon-egg.is-memory .egg-umbra {
    transform: translateX(-12%);
  }
  #phainon-egg.is-eclipse .egg-sun {
    opacity: 1;
    transform: scale(1);
  }
  #phainon-egg.is-eclipse .egg-umbra {
    transform: translateX(0);
  }
  #phainon-egg .egg-orbit {
    position: absolute;
    inset: -13%;
    border: 1px solid #e8c88928;
    border-radius: 50%;
  }
  #phainon-egg .egg-orbit::after {
    content: "";
    position: absolute;
    inset: -7%;
    border: 1px dashed #e8c8891c;
    border-radius: 50%;
  }
  #phainon-egg .egg-portraits {
    position: absolute;
    left: 67%;
    top: 47%;
    width: min(62vw,86vh);
    aspect-ratio: 1;
    transform: translate(-50%,-50%);
    pointer-events: none;
  }
  #phainon-egg .egg-portrait {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    mask-image: radial-gradient(ellipse,#000 36%,#000c 57%,transparent 73%);
  }
  #phainon-egg .egg-copy {
    position: absolute;
    left: 12%;
    top: 37%;
    width: 45%;
    z-index: 2;
    text-shadow: 0 2px 18px #080b12;
  }
  #phainon-egg .egg-chapter {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 0 0 24px;
    color: var(--gold);
    font-size: 12px;
    letter-spacing: .3em;
  }
  #phainon-egg .egg-chapter::before {
    content: "";
    width: 32px;
    height: 1px;
    background: var(--gold);
  }
  #phainon-egg .egg-title {
    margin: 0;
    font-family: "Noto Serif SC","Songti SC",SimSun,serif;
    font-size: clamp(30px,3.3vw,58px);
    line-height: 1.65;
    font-weight: 400;
    letter-spacing: .12em;
  }
  #phainon-egg .egg-description {
    margin: 23px 0 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 2.1;
    letter-spacing: .14em;
    white-space: pre-line;
  }
  #phainon-egg .egg-record {
    position: absolute;
    bottom: 78px;
    left: 12%;
    z-index: 2;
    transition: opacity .6s;
    font-variant-numeric: tabular-nums;
  }
  #phainon-egg .egg-record-label {
    margin: 0 0 8px;
    font-size: 10px;
    letter-spacing: .3em;
    color: var(--muted);
  }
  #phainon-egg .egg-number {
    display: block;
    color: var(--gold);
    font: 300 clamp(26px,3.2vw,48px)/1.3 "Courier New",monospace;
    letter-spacing: .08em;
  }
  #phainon-egg .egg-footer {
    position: absolute;
    bottom: 42px;
    right: 6.5%;
    color: #b7ae9d88;
    font-size: 10px;
    letter-spacing: .25em;
    margin: 0;
  }
  #phainon-egg .egg-flare {
    position: absolute;
    left: 67%;
    top: 46%;
    width: min(64vw,88vh);
    aspect-ratio: 1;
    opacity: 0;
    pointer-events: none;
    border-radius: 50%;
    background: radial-gradient(circle,#fff5da 0%,#f5d48e88 6%,#dca54522 22%,transparent 64%);
  }
  #phainon-egg .egg-horizon {
    position: absolute;
    left: 8%;
    right: 8%;
    top: 67%;
    height: 1px;
    background: linear-gradient(90deg,transparent,#fbe4ac,transparent);
    opacity: 0;
    pointer-events: none;
  }
  @media(max-width:767px) {
    #phainon-egg .egg-frame {
      inset: 14px;
    }
    #phainon-egg .egg-heading {
      left: 30px;
      top: 37px;
      font-size: 9px;
      letter-spacing: .32em;
    }
    #phainon-egg .egg-skip {
      right: 28px;
      top: 23px;
    }
    #phainon-egg .egg-sun-position {
      left: 50%;
      top: 34%;
      width: min(66vw,42vh);
    }
    #phainon-egg .egg-portraits {
      left: 50%;
      top: 34%;
      width: min(110vw,66vh);
    }
    #phainon-egg .egg-copy {
      left: 9%;
      top: 57%;
      width: 82%;
      text-align: center;
    }
    #phainon-egg .egg-chapter {
      justify-content: center;
      margin-bottom: 14px;
      font-size: 10px;
    }
    #phainon-egg .egg-chapter::before {
      width: 20px;
    }
    #phainon-egg .egg-title {
      font-size: clamp(25px,7vw,38px);
      line-height: 1.5;
    }
    #phainon-egg .egg-description {
      margin-top: 16px;
      font-size: 12px;
      letter-spacing: .08em;
    }
    #phainon-egg .egg-record {
      left: 0;
      width: 100%;
      bottom: 9%;
      text-align: center;
    }
    #phainon-egg .egg-number {
      font-size: 27px;
    }
    #phainon-egg .egg-record-label {
      font-size: 8px;
    }
    #phainon-egg .egg-footer {
      right: 30px;
      bottom: 30px;
      font-size: 8px;
    }
    #phainon-egg .egg-flare {
      left: 50%;
      top: 34%;
      width: 100vw;
    }
    #phainon-egg .egg-horizon {
      top: 48%;
    }
  }
  @media(max-height:600px) and (min-width:768px) {
    #phainon-egg .egg-copy {
      top: 29%;
    }
    #phainon-egg .egg-title {
      font-size: 26px;
      line-height: 1.4;
    }
    #phainon-egg .egg-chapter {
      font-size: 10px;
      margin-bottom: 12px;
    }
    #phainon-egg .egg-record {
      bottom: 55px;
    }
    #phainon-egg .egg-description {
      margin-top: 10px;
      font-size: 12px;
      line-height: 1.7;
    }
  }
  @media(max-width:767px) and (max-height:650px) {
    #phainon-egg .egg-copy {
      top: 55%;
    }
    #phainon-egg .egg-portraits {
      top: 28.5%;
      width: min(100vw,48vh);
    }
    #phainon-egg .egg-sun-position {
      top: 28.5%;
      width: min(60vw,34vh);
    }
    #phainon-egg .egg-title {
      font-size: 24px;
    }
    #phainon-egg .egg-chapter {
      margin-bottom: 8px;
    }
    #phainon-egg .egg-description {
      margin-top: 9px;
      line-height: 1.7;
    }
    #phainon-egg .egg-record {
      bottom: 9%;
    }
    #phainon-egg .egg-footer {
      bottom: 23px;
    }
  }
  @media(prefers-reduced-motion:reduce) {
    #phainon-egg *,#phainon-egg *::before,#phainon-egg *::after {
      transition: none !important;
    }
  }
  `;
  document.head.appendChild(style);

  var dialog = document.createElement('dialog');
  dialog.id = 'phainon-egg';
  dialog.setAttribute('aria-labelledby', 'egg-title');
  // 固定本地文案，不插入用户输入或数据库 HTML。
  dialog.innerHTML = [
    '<div class="egg-warmth"></div><div class="egg-frame"></div>',
    '<p class="egg-heading">PHAINON · 白厄</p>',
    '<button class="egg-skip" type="button" aria-label="跳过白厄彩蛋">跳过 · ESC</button>',
    '<div class="egg-sun-position" aria-hidden="true"><div class="egg-orbit"></div>',
    '<div class="egg-sun"><div class="egg-umbra"></div></div></div>',
    '<div class="egg-portraits" aria-hidden="true"></div>',
    '<div class="egg-copy" aria-live="polite" aria-atomic="true">',
    '<p class="egg-chapter">哀丽秘榭</p>',
    '<h2 class="egg-title" id="egg-title">曾想守住的<br>只是故乡的清晨</h2>',
    '<p class="egg-description">麦浪、炊烟，还有明天。<br>那时，英雄的愿望如此平凡。</p></div>',
    '<div class="egg-record" aria-hidden="true"><p class="egg-record-label">永劫回归 / ETERNAL RECURRENCE</p>',
    '<span class="egg-number">00000001</span></div>',
    '<div class="egg-flare" aria-hidden="true"></div><div class="egg-horizon" aria-hidden="true"></div>',
    '<p class="egg-footer">AMPHOREUS / 翁法罗斯</p>'
  ].join('');
  document.body.appendChild(dialog);
  var copy = dialog.querySelector('.egg-copy');
  var chapter = dialog.querySelector('.egg-chapter');
  var title = dialog.querySelector('.egg-title');
  var description = dialog.querySelector('.egg-description');
  var number = dialog.querySelector('.egg-number');
  var record = dialog.querySelector('.egg-record');

  function later(fn, delay) {
    timers.push(setTimeout(function() { if (!stopped) fn(); }, delay));
  }

  function animate(element, frames, duration) {
    var animation = element.animate(frames, {
      duration: duration, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards'
    });
    animations.push(animation);
    return animation;
  }

  function showCopy(label, heading, text) {
    chapter.textContent = label;
    title.textContent = heading;
    description.textContent = text;
    if (!reducedMotion) animate(copy, [
      { opacity: 0, transform: 'translateY(10px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], 650);
  }

  function showPortrait(index, duration) {
    if (currentPortrait) {
      var opacity = getComputedStyle(currentPortrait).opacity;
      if (portraitAnimation) portraitAnimation.cancel();
      animate(currentPortrait, [{ opacity: opacity }, { opacity: 0 }], reducedMotion ? 1 : 350);
    }
    currentPortrait = portraits[index];
    portraitAnimation = animate(currentPortrait, [
      { opacity: 0, transform: reducedMotion ? 'none' : 'translateX(16px) scale(1.035)' },
      { opacity: .94, transform: 'translateX(0) scale(1)' }
    ], reducedMotion ? 1 : duration);
  }

  function finish() {
    if (stopped) return;
    stopped = true;
    timers.forEach(clearTimeout);
    animations.forEach(function(animation) { animation.cancel(); });
    document.removeEventListener('visibilitychange', onVisibility);
    dialog.removeEventListener('cancel', onCancel);
    dialog.removeEventListener('close', finish);
    if (dialog.open) dialog.close();
    dialog.remove();
    style.remove();
    portraits.forEach(function(img) { img.removeAttribute('src'); });
    portraits = [];
    if (script) script.remove();
    if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    setTimeout(function() { window.__loopCollapse = false; }, 1500);
  }

  function onCancel(event) { event.preventDefault(); finish(); }
  function onVisibility() { if (document.hidden) finish(); }
  dialog.querySelector('.egg-skip').addEventListener('click', finish);
  // 模态内的交互不冒泡到图鉴的点击失焦、详情 Escape 等处理器。
  dialog.addEventListener('click', function(event) { event.stopPropagation(); });
  dialog.addEventListener('keydown', function(event) { event.stopPropagation(); });
  dialog.addEventListener('cancel', onCancel);
  dialog.addEventListener('close', finish);
  document.addEventListener('visibilitychange', onVisibility);
  if (previousFocus && previousFocus.blur) previousFocus.blur();
  dialog.showModal();
  dialog.querySelector('.egg-skip').focus({ preventScroll: true });

  // 按需加载适配后的 768px 素材。等待解码有上限，慢网下仍按时退出。
  var ready = [];
  for (var i = 1; i <= 6; i++) {
    var img = new Image();
    img.className = 'egg-portrait';
    img.alt = '';
    img.decoding = 'async';
    img.src = 'easter-egg-img/' + i + '.webp';
    portraits.push(img);
    dialog.querySelector('.egg-portraits').appendChild(img);
    ready.push(img.decode().catch(function() {}));
  }

  function finalScene() {
    dialog.classList.add('is-eclipse', 'is-final');
    showPortrait(4, 1100); // 金眼的燃烧意象，与前面的蓝眼形成照应。
    number.textContent = '33,550,336';
    showCopy('将未来托付于你', '把明天，交给你。', '背负的火种仍在燃烧。\n这一程，轮到我们继续。');
    if (reducedMotion) return;
    animate(dialog.querySelector('.egg-horizon'), [
      { opacity: 0, transform: 'scaleX(.05)' },
      { opacity: .75, transform: 'scaleX(.85)', offset: .35 },
      { opacity: 0, transform: 'scaleX(1)' }
    ], 1600);
    later(function() {
      animate(dialog.querySelector('.egg-flare'), [
        { opacity: 0, transform: 'translate(-50%,-50%) scale(.12)' },
        { opacity: .58, transform: 'translate(-50%,-50%) scale(.65)', offset: .45 },
        { opacity: 0, transform: 'translate(-50%,-50%) scale(2.4)' }
      ], 2100);
    }, 1700);
  }

  function start() {
    if (stopped) return;
    if (reducedMotion) {
      finalScene();
      later(finish, 7000);
      return;
    }
    showPortrait(3, 1100);
    later(function() {
      dialog.classList.add('is-memory');
      showCopy('逐火 · 永劫回归', '一次，又一次。', '接过火种，接过记忆。\n也接过所有未能抵达的明天。');
    }, 1800);
    // 使用任务里明确出现的轮回节点，图片仅为记忆意象。
    var memories = [
      { count: '00000134', image: 2 },
      { count: '00108642', image: 1 },
      { count: '02003432', image: 0 },
      { count: '23570000', image: 5 },
      { count: '33550336', image: 4 }
    ];
    memories.forEach(function(memory, index) {
      later(function() {
        number.textContent = memory.count;
        showPortrait(memory.image, 600);
      }, 1900 + index * 650);
    });
    later(function() {
      dialog.classList.add('is-eclipse');
      record.style.opacity = '.45';
      showCopy('日冕', '无缘黎明的人', '在太阳隐没的时刻，\n看见他仍在燃烧的冠冕。');
      if (portraitAnimation) portraitAnimation.cancel();
      animate(currentPortrait, [{ opacity: .9 }, { opacity: .12 }], 850);
    }, 5200);
    later(function() { record.style.opacity = '1'; finalScene(); }, 6800);
    later(function() { animate(dialog, [{ opacity: 1 }, { opacity: 0 }], 800); }, 10800);
    later(finish, 11650);
  }

  var loadTimeout;
  var loadLimit = new Promise(function(resolve) {
    loadTimeout = setTimeout(resolve, 1800);
    timers.push(loadTimeout);
  });
  Promise.race([Promise.all(ready), loadLimit]).then(function() {
    clearTimeout(loadTimeout);
    start();
  });
})();
