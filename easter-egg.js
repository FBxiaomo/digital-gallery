// 轮回崩塌 — 白厄彩蛋特效
// 第 33,550,336 次轮回的终结
(function() {
  'use strict';
  if (window.__loopCollapse) return;
  window.__loopCollapse = true;

  var TARGET = 33550336;

  // === 时序（ms）===
  var T = {
    COUNT: 3800,
    HOLD:  5200,
    CRACK: 6900,
    SHOW:  12800
  };

  // === 白厄六相 ===
  var PHASES = [
    { n: 1, text: '火与光，善恶的化身' },
    { n: 2, text: '天与地，世间的泡沫' },
    { n: 3, text: '几重寂静深埋归墟' },
    { n: 4, text: '多少承担面目模糊' },
    { n: 5, text: '亘古长升，烛火残阳' },
    { n: 6, text: '永劫时针，三千万转' }
  ];

  // 桌面端画框位置（百分比）
  var DESKTOP_FRAMES = [
    { x: 0.03, y: 0.02, w: 0.28, h: 0.42 },
    { x: 0.30, y: 0.00, w: 0.26, h: 0.38 },
    { x: 0.62, y: 0.03, w: 0.35, h: 0.46 },
    { x: 0.01, y: 0.48, w: 0.30, h: 0.50 },
    { x: 0.28, y: 0.40, w: 0.38, h: 0.58 },
    { x: 0.62, y: 0.50, w: 0.35, h: 0.48 }
  ];

  // 手机端画框位置（2列×3行网格）
  var MOBILE_FRAMES = [
    { x: 0.02, y: 0.14, w: 0.46, h: 0.25 },
    { x: 0.52, y: 0.14, w: 0.46, h: 0.25 },
    { x: 0.02, y: 0.41, w: 0.46, h: 0.25 },
    { x: 0.52, y: 0.41, w: 0.46, h: 0.25 },
    { x: 0.02, y: 0.68, w: 0.46, h: 0.24 },
    { x: 0.52, y: 0.68, w: 0.46, h: 0.24 }
  ];

  // 响应式检测
  var isMobile = innerWidth < innerHeight && innerWidth < 768;
  var FRAMES = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

  // 飞入参数：每张图的延迟和飞行时长
  var FLY_STAGGER = 100;   // 连续图片间隔 ms
  var FLY_DURATION = 800;  // 单张飞行时长 ms

  // === 预加载 WebP 图片 ===
  var imgs = [];
  var imgsLoaded = 0;
  for (var i = 0; i < 6; i++) {
    (function(idx) {
      var img = new Image();
      img.onload = function() { imgsLoaded++; };
      img.onerror = function() { imgsLoaded++; };
      img.src = 'easter-egg-img/' + (idx + 1) + '.webp';
      imgs[idx] = img;
    })(i);
  }

  // === 预渲染发光层 ===
  var glowCanvases = [];
  var glowsReady = false;

  function generateGlows() {
    if (glowsReady) return;
    var W = cvs.width, H = cvs.height;
    for (var i = 0; i < 6; i++) {
      var img = imgs[i];
      if (!img || !img.complete || !img.naturalWidth) continue;

      var f = FRAMES[i];
      var fw = f.w * W, fh = f.h * H;
      var iw = img.naturalWidth, ih = img.naturalHeight;
      var scale = Math.max(fw / iw, fh / ih);
      var dw = Math.round(iw * scale), dh = Math.round(ih * scale);

      var gc = document.createElement('canvas');
      gc.width = dw + 40; gc.height = dh + 40;
      var gctx = gc.getContext('2d');
      gctx.shadowColor = 'rgba(170,140,255,0.75)';
      gctx.shadowBlur = 18;
      gctx.shadowOffsetX = 0;
      gctx.shadowOffsetY = 0;
      gctx.drawImage(img, 20, 20, dw, dh);
      glowCanvases[i] = gc;
    }
    glowsReady = true;
  }

  // === DOM ===
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;';
  document.body.appendChild(overlay);

  var cvs = document.createElement('canvas');
  cvs.width = innerWidth; cvs.height = innerHeight;
  cvs.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
  overlay.appendChild(cvs);
  var ctx = cvs.getContext('2d');

  // 计数器
  var counterEl = document.createElement('div');
  counterEl.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);'
    + 'z-index:100000;font:bold 72px/1 "Courier New",monospace;'
    + 'color:#fff;'
    + 'text-shadow:0 0 20px rgba(180,140,255,1),0 0 50px rgba(139,92,246,0.7),0 0 100px rgba(139,92,246,0.4);'
    + 'pointer-events:none;letter-spacing:3px;';
  counterEl.textContent = '0';
  document.body.appendChild(counterEl);

  // 终结文案
  var txtEl = document.createElement('div');
  txtEl.style.cssText = 'position:fixed;top:44%;left:50%;transform:translate(-50%,-50%);'
    + 'z-index:100000;font:600 26px/1.8 system-ui,sans-serif;color:#e8dcff;text-align:center;'
    + 'text-shadow:0 0 20px rgba(139,92,246,0.7);opacity:0;pointer-events:none;letter-spacing:6px;';
  txtEl.innerHTML = '第 33,550,336 次轮回<br><span style="font-size:18px;opacity:0.6;letter-spacing:8px;">……结束了</span>';
  document.body.appendChild(txtEl);

  // 标签容器
  var labelBox = document.createElement('div');
  labelBox.style.cssText = 'position:fixed;inset:0;z-index:100001;pointer-events:none;';
  document.body.appendChild(labelBox);

  var labels = [];
  for (var i = 0; i < PHASES.length; i++) {
    var ph = PHASES[i], f = FRAMES[i];
    var lbl = document.createElement('div');
    lbl.style.cssText = 'position:absolute;opacity:0;transition:opacity 0.8s ease;'
      + 'font:600 13px/1.4 system-ui,sans-serif;'
      + 'color:rgba(230,215,255,0.9);text-shadow:0 1px 6px rgba(0,0,0,0.8),0 0 10px rgba(139,92,246,0.5);'
      + 'letter-spacing:1px;white-space:nowrap;';
    lbl.style.left = (f.x * 100 + 2) + '%';
    lbl.style.bottom = ((1 - f.y - f.h) * 100 + 1.5) + '%';
    lbl.innerHTML = '<span style="font-size:16px;font-weight:700;color:#ffd78c;margin-right:6px;'
      + 'text-shadow:0 0 8px rgba(255,180,60,0.5);">' + ph.n + '</span>' + ph.text;
    labelBox.appendChild(lbl);
    labels.push(lbl);
  }

  function updateLabelPositions() {
    for (var i = 0; i < labels.length && i < FRAMES.length; i++) {
      var f = FRAMES[i];
      labels[i].style.left = (f.x * 100 + 2) + '%';
      labels[i].style.bottom = ((1 - f.y - f.h) * 100 + 1.5) + '%';
    }
  }

  // ESC 提示
  var hintEl = document.createElement('div');
  hintEl.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);'
    + 'z-index:100002;font:400 12px/1 system-ui,sans-serif;color:rgba(200,180,255,0.35);'
    + 'opacity:0;pointer-events:none;letter-spacing:2px;';
  hintEl.textContent = 'ESC 跳过';
  document.body.appendChild(hintEl);

  // 响应式样式标记
  var stylesApplied = false;

  // === 事件 ===
  function applyResponsiveStyles() {
    if (isMobile) {
      var cfs = Math.max(innerWidth * 0.1, 32);
      counterEl.style.fontSize = cfs + 'px';
      counterEl.style.letterSpacing = '1px';
      txtEl.style.fontSize = '20px';
      txtEl.style.letterSpacing = '3px';
      txtEl.style.top = '6%';
      hintEl.style.bottom = '2%';
      for (var li = 0; li < labels.length; li++) {
        labels[li].style.fontSize = Math.max(innerWidth * 0.028, 10) + 'px';
      }
    } else {
      counterEl.style.fontSize = '72px';
      counterEl.style.letterSpacing = '3px';
      txtEl.style.fontSize = '26px';
      txtEl.style.letterSpacing = '6px';
      txtEl.style.top = '44%';
      hintEl.style.bottom = '24px';
      for (var li = 0; li < labels.length; li++) {
        labels[li].style.fontSize = '13px';
      }
    }
  }

  function onResize() {
    cvs.width = innerWidth; cvs.height = innerHeight;
    var wasMobile = isMobile;
    isMobile = innerWidth < innerHeight && innerWidth < 768;
    if (wasMobile !== isMobile) {
      FRAMES = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
      updateLabelPositions();
      applyResponsiveStyles();
      glowsReady = false; // 窗口大小变化时重新生成发光
    }
  }
  addEventListener('resize', onResize);
  function onKey(e) { if (e.key === 'Escape') cleanup(); }
  addEventListener('keydown', onKey);

  // === 星空 ===
  var starCount = isMobile ? 100 : 200;
  var stars = [];
  for (var i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random(), y: Math.random(),
      s: 0.3 + Math.random() * 2,
      sp: 0.3 + Math.random() * 2.5,
      br: 0.4 + Math.random() * 0.6
    });
  }

  // === 缓动函数 ===
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  // === 绘制星空 ===
  function drawStars(t, alpha) {
    var W = cvs.width, H = cvs.height;
    for (var i = 0; i < stars.length; i++) {
      var st = stars[i];
      var tw = 0.3 + 0.7 * Math.abs(Math.sin(t / 1000 * st.sp + i));
      ctx.beginPath();
      ctx.arc(st.x * W, st.y * H, st.s, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200,190,255,' + (tw * alpha * st.br).toFixed(3) + ')';
      ctx.fill();
    }
  }

  // === 绘制单张图片（含飞入 + 预渲染边缘发光）===
  function drawImage(idx, flyProgress, t) {
    var img = imgs[idx];
    if (!img || !img.complete || !img.naturalWidth) return;

    var f = FRAMES[idx];
    var W = cvs.width, H = cvs.height;

    // 目标位置（像素）
    var targetX = f.x * W;
    var targetY = f.y * H;
    var targetW = f.w * W;
    var targetH = f.h * H;

    // 起始位置：底部居中
    var startX = W * 0.5 - targetW * 0.5;
    var startY = H + targetH * 0.2;

    // 缓动插值
    var ease = easeOutCubic(Math.min(flyProgress, 1));
    var curX = startX + (targetX - startX) * ease;
    var curY = startY + (targetY - startY) * ease;
    var alpha = Math.min(flyProgress * 2.5, 1);

    // 图片 cover 填充
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var scale = Math.max(targetW / iw, targetH / ih);
    var dw = iw * scale, dh = ih * scale;
    var dx = curX + (targetW - dw) * 0.5;
    var dy = curY + (targetH - dh) * 0.5;

    ctx.save();
    ctx.globalAlpha = alpha;

    // 发光层：使用预渲染的离屏 canvas（无 shadowBlur 开销）
    if (glowsReady && glowCanvases[idx]) {
      var shimmer = 0.4 + 0.4 * Math.sin(t / 1400 + idx * 1.1);
      ctx.globalAlpha = alpha * shimmer;
      ctx.drawImage(glowCanvases[idx], dx - 20, dy - 20);
      ctx.globalAlpha = alpha;
    }

    // 清晰图片层
    ctx.drawImage(img, dx, dy, dw, dh);

    ctx.restore();
  }

  // === 计算单张图片的飞行进度 ===
  function getFlyProgress(t, phaseStart, idx) {
    var elapsed = t - phaseStart;
    var start = idx * FLY_STAGGER;
    if (elapsed < start) return -1;
    return Math.min((elapsed - start) / FLY_DURATION, 1);
  }

  // === 主循环 ===
  var t0 = null, running = true;

  function loop(ts) {
    if (!running) return;
    if (!t0) t0 = ts;
    var t = ts - t0;
    var W = cvs.width, H = cvs.height;

    ctx.clearRect(0, 0, W, H);

    // ── 响应式尺寸（仅首次） ──
    if (!stylesApplied) {
      stylesApplied = true;
      applyResponsiveStyles();
    }

    // ── 计数器 ──
    if (t < T.COUNT) {
      var p = t / T.COUNT;
      var eased = easeOutQuart(p);
      counterEl.textContent = Math.floor(eased * TARGET).toLocaleString();
      counterEl.style.opacity = Math.min(p * 4, 1);
      var pulse = 1 + Math.sin(p * Math.PI * 8) * 0.02;
      counterEl.style.transform = 'translate(-50%,-50%) scale(' + pulse.toFixed(4) + ')';
    }

    // ── 停顿 ──
    if (t >= T.COUNT && t < T.HOLD) {
      counterEl.textContent = TARGET.toLocaleString();
      var hp = (t - T.COUNT) / (T.HOLD - T.COUNT);
      var scale = 1 + hp * 0.12;
      counterEl.style.transform = 'translate(-50%,-50%) scale(' + scale.toFixed(4) + ')';
      var glow = 20 + hp * 50;
      counterEl.style.textShadow = '0 0 ' + glow + 'px rgba(180,140,255,1),'
        + '0 0 ' + (glow * 2.5) + 'px rgba(139,92,246,' + (0.7 + hp * 0.3) + '),'
        + '0 0 ' + (glow * 5) + 'px rgba(139,92,246,' + (0.4 + hp * 0.3) + ')';
      var si = hp * 6;
      overlay.style.transform = 'translate('
        + ((Math.random()-0.5)*si*2).toFixed(1) + 'px,'
        + ((Math.random()-0.5)*si*2).toFixed(1) + 'px)';
    }

    // ── 过渡：计数器消散 + 图片从底部飞入 ──
    if (t >= T.HOLD && t < T.CRACK) {
      var tp = (t - T.HOLD) / (T.CRACK - T.HOLD);
      counterEl.style.opacity = Math.max(0, 1 - tp * 2.5).toFixed(2);
      counterEl.style.transform = 'translate(-50%,-50%) scale(' + (1.12 + tp * 0.4).toFixed(3) + ')';
      overlay.style.transform = 'none';

      // 背景渐入
      ctx.fillStyle = 'rgba(6,3,20,' + Math.min(tp * 1.5, 0.96).toFixed(3) + ')';
      ctx.fillRect(0, 0, W, H);

      // 星空
      if (tp > 0.15) drawStars(t, Math.min((tp - 0.15) / 0.4, 1));

      // 图片从底部飞入（过渡开始后 0.2 启动）
      if (tp > 0.15) {
        generateGlows();
      }
      if (tp > 0.2) {
        var flyPhaseStart = T.HOLD + (T.CRACK - T.HOLD) * 0.2;
        for (var i = 0; i < 6; i++) {
          var fp = getFlyProgress(t, flyPhaseStart, i);
          if (fp >= 0) drawImage(i, fp, t);
        }

        // 标签跟随图片淡入
        for (var i = 0; i < labels.length; i++) {
          var fp2 = getFlyProgress(t, flyPhaseStart, i);
          if (fp2 >= 0.4) {
            labels[i].style.opacity = Math.min((fp2 - 0.4) / 0.5, 1).toFixed(2);
          }
        }
      }
    }

    // ── 展示阶段 ──
    if (t >= T.CRACK && t < T.SHOW) {
      counterEl.style.opacity = '0';

      ctx.fillStyle = 'rgba(6,3,20,0.96)';
      ctx.fillRect(0, 0, W, H);
      drawStars(t, 1);

      // 所有图片在位 + 边缘发光漂浮
      var drift = Math.sin(t / 3000) * 4;
      for (var i = 0; i < 6; i++) {
        ctx.save();
        var dy = drift * (i % 2 === 0 ? 1 : -1) * 0.5;
        ctx.translate(0, dy);
        drawImage(i, 1, t);
        ctx.restore();
      }

      // 确保所有标签可见
      for (var i = 0; i < labels.length; i++) {
        labels[i].style.opacity = '1';
      }

      var showP = (t - T.CRACK) / (T.SHOW - T.CRACK);
      if (showP > 0.05) {
        var ta = Math.min((showP - 0.05) / 0.18, 1);
        txtEl.style.opacity = ta.toFixed(2);
        hintEl.style.opacity = (ta * 0.4).toFixed(2);
      }

      // 最后 2 秒渐出
      if (showP > 0.7) {
        var fo = (showP - 0.7) / 0.3;
        overlay.style.opacity = (1 - fo).toFixed(2);
        labelBox.style.opacity = (1 - fo).toFixed(2);
        txtEl.style.opacity = (1 - fo).toFixed(2);
        hintEl.style.opacity = (1 - fo).toFixed(2);
      }
    }

    if (t >= T.SHOW) { cleanup(); return; }
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  // === 清理 ===
  function cleanup() {
    running = false;
    overlay.style.transform = 'none';
    overlay.style.opacity = '1';
    removeEventListener('resize', onResize);
    removeEventListener('keydown', onKey);
    [overlay, counterEl, txtEl, labelBox, hintEl].forEach(function(el) {
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
    overlay = cvs = counterEl = txtEl = labelBox = hintEl = null;
    labels = []; stars = []; imgs = []; glowCanvases = []; glowsReady = false;
    setTimeout(function() { window.__loopCollapse = false; }, 1500);
  }
})();
