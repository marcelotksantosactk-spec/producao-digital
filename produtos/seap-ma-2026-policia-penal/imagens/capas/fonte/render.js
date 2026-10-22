// Renders red "Resumos Ilustrados" covers (794x1123 @2x) from covers.json
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const covers = JSON.parse(fs.readFileSync(path.join(__dirname, 'covers.json'), 'utf8'));
const outDir = path.join(__dirname, 'out');

const handcuffs = `
<svg class="deco" viewBox="0 0 300 200" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="9">
  <circle cx="70" cy="125" r="52"/><circle cx="70" cy="125" r="36"/>
  <circle cx="230" cy="125" r="52"/><circle cx="230" cy="125" r="36"/>
  <path d="M105 82 q 20 -40 45 -22 q 25 18 45 -18" stroke-dasharray="14 8"/>
</svg>`;

const card = (x, y, rot, inner) => `
<div class="card" style="left:${x}px;top:${y}px;transform:rotate(${rot}deg)">${inner}</div>`;
const lines = n => Array.from({length: n}, (_, i) =>
  `<div class="ln" style="width:${[80,60,70,50,75,55][i % 6]}%"></div>`).join('');

function html(c) {
  const siglaSize = c.siglaSize || 230;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:794px;height:1123px;overflow:hidden;font-family:'Inter Display','Inter',sans-serif;
    background:#d42c43;position:relative;color:#3a0d16}
  .bg{position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 26px,rgba(0,0,0,0) 26px 52px)}
  .logo{position:absolute;left:60px;top:56px;display:flex;align-items:center;gap:14px;color:#fff;font-size:27px}
  .logo .nm b{font-weight:800}
  .logo .ic{width:44px;height:44px;border-radius:10px;background:#2b0b12;display:flex;align-items:center;justify-content:center}
  .logo b{font-weight:800}
  .ed{position:absolute;right:58px;top:58px;border:2.5px solid #3a0d16;border-radius:8px;padding:8px 14px;
    font-weight:800;font-size:17px;letter-spacing:3px}
  .conc{position:absolute;left:60px;top:150px;font-weight:800;font-size:17px;letter-spacing:5px;display:flex;align-items:center;gap:14px}
  .conc:before{content:"";width:38px;height:3px;background:#3a0d16;display:block}
  .sigla{position:absolute;left:52px;top:196px;font-weight:900;font-size:${siglaSize}px;line-height:.9;letter-spacing:-6px;color:#3a0d16;white-space:nowrap}
  .sub{position:absolute;left:62px;top:${c.subTop || 398}px;font-weight:800;font-size:22px;letter-spacing:2.5px}
  .panel{position:absolute;left:12px;top:455px;width:712px;height:360px;background:#2a0b12;border-radius:0 26px 26px 0;padding:36px 48px}
  .row{display:flex;align-items:center;gap:16px}
  .vol{background:#e0334d;color:#2a0b12;font-weight:900;font-size:19px;letter-spacing:2px;padding:6px 12px;border-radius:5px}
  .ri{color:#e0334d;font-weight:700;font-size:17px;letter-spacing:5px}
  .t1,.t2{font-weight:900;font-size:${c.titleSize || 72}px;line-height:1.02;letter-spacing:-1px;margin-top:${'14'}px}
  .t1{color:#fff;margin-top:26px}.t2{color:#ff4d68;margin-top:0}
  .hr{height:1px;background:rgba(255,255,255,.18);margin:26px 0 22px}
  .feat{display:flex;gap:30px}
  .f{display:flex;gap:12px;align-items:flex-start;color:#fff}
  .f .sq{width:38px;height:38px;border-radius:8px;background:#4a1520;display:flex;align-items:center;justify-content:center;color:#ff4d68;font-weight:900;font-size:20px}
  .f b{display:block;font-size:19px;font-weight:800}.f span{font-size:14px;color:rgba(255,255,255,.75)}
  .slogan{position:absolute;left:60px;top:978px;font-size:29px;letter-spacing:1.5px;line-height:1.15}
  .slogan b{font-weight:900}
  .handle{position:absolute;left:60px;top:1050px;font-size:16px;font-weight:600;color:rgba(58,13,22,.75)}
  .deco{position:absolute;left:70px;top:800px;width:250px}
  .card{position:absolute;width:200px;height:250px;background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.25);padding:20px}
  .ln{height:9px;border-radius:5px;background:#d8d0d2;margin:12px 0}
  .ln.r{background:#e0334d}
  </style></head><body><div class="bg"></div>
  <div class="logo"><div class="ic"><svg width="26" height="22" viewBox="0 0 26 22" fill="none" stroke="#fff" stroke-width="2.4"><path d="M13 4C9 1 4 1 1.5 2v17c2.5-1 7.5-1 11.5 2 4-3 9-3 11.5-2V2C22 1 17 1 13 4zM13 4v17"/></svg></div><span class="nm">Marcelo<b>mapas</b></span></div>
  <div class="ed">EDIÇÃO 2026</div>
  <div class="conc">CONCURSO</div>
  <div class="sigla">${c.sigla}</div>
  <div class="sub">${c.sub}</div>
  <div class="panel">
    <div class="row"><div class="vol">VOL. ${c.vol}</div><div class="ri">RESUMOS ILUSTRADOS</div></div>
    <div class="t1">${c.t1}</div>${c.t2 ? `<div class="t2">${c.t2}</div>` : ''}
    <div class="hr"></div>
    <div class="feat">
      <div class="f"><div class="sq">+</div><div><b>Mapas mentais</b><span>tudo em esquemas</span></div></div>
      <div class="f"><div class="sq">✓</div><div><b>Foco no edital</b><span>só o que cai</span></div></div>
      <div class="f"><div class="sq">⚡</div><div><b>Revisão rápida</b><span>para a reta final</span></div></div>
    </div>
  </div>
  ${c.handcuffs ? handcuffs : ''}
  ${card(360, 850, -9, '<div class="ln r" style="width:40%"></div>' + lines(6))}
  ${card(560, 860, 8, lines(7))}
  ${card(455, 830, 0, `<div class="ln" style="width:70%;margin:0 auto 18px"></div>
    <svg width="160" height="134" viewBox="0 0 180 150"><g stroke="#3a0d16" stroke-width="4">
    <line x1="90" y1="75" x2="90" y2="20"/><line x1="90" y1="75" x2="90" y2="130"/>
    <line x1="90" y1="75" x2="25" y2="75"/><line x1="90" y1="75" x2="155" y2="75"/></g>
    <rect x="70" y="5" width="40" height="22" rx="4" fill="#3a0d16"/><rect x="70" y="122" width="40" height="22" rx="4" fill="#3a0d16"/>
    <rect x="5" y="64" width="40" height="22" rx="4" fill="#3a0d16"/><rect x="135" y="64" width="40" height="22" rx="4" fill="#3a0d16"/>
    <circle cx="90" cy="75" r="26" fill="#e0334d"/><rect x="76" y="71" width="28" height="8" rx="3" fill="#fff"/></svg>`)}
  <div class="slogan">ESTUDE MENOS.<br><b>LEMBRE MAIS.</b></div>
  <div class="handle">@marcelomapas</div>
  <script>for(const e of document.querySelectorAll('.t1,.t2')){e.style.whiteSpace='nowrap';e.style.display='inline-block';let f=parseFloat(getComputedStyle(e).fontSize);while(e.scrollWidth>616&&f>30){f-=2;e.style.fontSize=f+'px'}e.style.display='block'}</script>
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
  for (const c of covers) {
    await page.setContent(html(c), { waitUntil: 'load' });
    await page.screenshot({ path: path.join(outDir, `${c.file}.png`) });
    console.log('ok', c.file);
  }
  await browser.close();
})();
