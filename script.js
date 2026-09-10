/* =========================================================
   YAMA TYPE — アプリのロジック
   質問やタイプの文章は data.js、キャラクターは characters.js にあります。
   読み込み順は data.js → characters.js → script.js です。
   ========================================================= */

/* =========================================================
   ここから下はアプリ本体のロジック
   ========================================================= */

/* ---------- 出題順のシャッフル ----------
   同じ軸の質問が隣り合わないように並べ替える */
function shuffleQuestions(list) {
  if (!SHUFFLE) return list.slice();
  const spreadOut = (arr) => arr.every((q, i) => i === 0 || q.axis !== arr[i - 1].axis);

  for (let attempt = 0; attempt < 200; attempt++) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    if (spreadOut(a)) return a;
  }
  return list.slice(); // 条件を満たす並びが見つからなかった場合
}

let QUIZ = shuffleQuestions(QUESTIONS);
const answers = new Array(QUESTIONS.length).fill(null); // 0〜5（0=A強, 5=B強）
let currentPage = 0;
const totalPages = Math.ceil(QUESTIONS.length / QUESTIONS_PER_PAGE);

const $ = (sel) => document.querySelector(sel);
const screens = {
  start: $("#screen-start"),
  quiz: $("#screen-quiz"),
  result: $("#screen-result"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo({ top: 0 });
}


/* ---------- スタート画面に16体を散らす ----------
   x, y は置き場に対する%、s は幅の%、r は回転角。
   奥（小さい）→ 手前（大きい）の3段にして奥行きを出す */
const CAST_LAYOUT = [
  { code: "PSFA", x:  4, y:  2, s:  9.5, r: -7 },
  { code: "ESFA", x: 23, y:  9, s:  9, r:  5 },
  { code: "PSLA", x: 43, y:  0, s: 10, r: -4 },
  { code: "EGFC", x: 63, y: 10, s:  9, r:  7 },
  { code: "PSFC", x: 83, y:  3, s:  9.5, r: -5 },

  { code: "ESLA", x:  2, y: 32, s: 11.5, r:  6 },
  { code: "PGFA", x: 20, y: 39, s: 11.5, r: -6 },
  { code: "EGLA", x: 41, y: 30, s: 12,   r:  4 },
  { code: "PGLC", x: 62, y: 40, s: 11.5, r: -7 },
  { code: "ESLC", x: 83, y: 33, s: 11.5, r:  5 },

  { code: "ESFC", x:  3, y: 62, s: 14, r: -5 },
  { code: "PGLA", x: 21, y: 69, s: 13, r:  6 },
  { code: "EGLC", x: 38, y: 60, s: 14, r: -3 },
  { code: "PSLC", x: 55, y: 70, s: 13, r:  5 },
  { code: "PGFC", x: 71, y: 61, s: 14, r: -6 },
  { code: "EGFA", x: 85, y: 68, s: 13, r:  4 },
];

function renderCast() {
  const box = document.getElementById("cast");
  if (!box || typeof characterSVG !== "function") return;
  box.innerHTML = CAST_LAYOUT.map((c) =>
    `<span class="cast-item" style="left:${c.x}%;top:${c.y}%;width:${c.s}%;
      transform:rotate(${c.r}deg)">${characterSVG(c.code, "char", true)}</span>`
  ).join("");
}
renderCast();

/* ---------- 質問ページの描画 ---------- */
function renderPage() {
  const page = $("#quiz-page");
  page.innerHTML = "";
  page.classList.remove("page-in");
  void page.offsetWidth;
  page.classList.add("page-in");

  const start = currentPage * QUESTIONS_PER_PAGE;
  const end = Math.min(start + QUESTIONS_PER_PAGE, QUIZ.length);

  for (let i = start; i < end; i++) {
    const q = QUIZ[i];
    const card = document.createElement("div");
    card.className = "q-card";
    card.dataset.index = i;

    const strength = ["とてもAに近い", "Aに近い", "やや A", "やや B", "Bに近い", "とてもBに近い"];
    const dots = [0, 1, 2, 3, 4, 5].map((v) => {
      const sel = answers[i] === v ? " selected" : "";
      return `<button type="button" class="dot${sel}" data-v="${v}"
        aria-label="${strength[v]}"></button>`;
    }).join("");

    card.innerHTML = `
      <span class="q-num">Q${i + 1}</span>
      <p class="q-text">${q.text}</p>
      <div class="opt-label opt-a">A. ${q.a}</div>
      <div class="opt-label opt-b">B. ${q.b}</div>
      <div class="scale">
        <div class="dots">${dots}</div>
        <div class="scale-notes">
          <span>Aに近い</span>
          <span>Bに近い</span>
        </div>
      </div>
    `;
    page.appendChild(card);
  }

  $("#btn-back").style.visibility = "visible";
  $("#btn-next").textContent = currentPage === totalPages - 1 ? "結果を見る" : "つぎへ";
  updateProgress();
}

/* ---------- ドット選択 ---------- */
$("#quiz-page").addEventListener("click", (e) => {
  const dot = e.target.closest(".dot");
  if (!dot) return;
  const card = dot.closest(".q-card");
  const idx = Number(card.dataset.index);
  answers[idx] = Number(dot.dataset.v);

  card.querySelectorAll(".dot").forEach((d) => d.classList.remove("selected"));
  dot.classList.add("selected");
  card.classList.remove("needs-answer");
  updateProgress();
  scrollToNext(idx);
});

/* ---------- 回答したら次の質問へ送る ----------
   まだ答えていないカードを優先し、なければページ末のボタンへ送る */
function scrollToNext(fromIndex) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const pageStart = currentPage * QUESTIONS_PER_PAGE;
  const pageEnd = Math.min(pageStart + QUESTIONS_PER_PAGE, QUIZ.length);

  let target = null;
  for (let i = fromIndex + 1; i < pageEnd; i++) {
    if (answers[i] === null) { target = i; break; }
  }
  if (target === null && fromIndex + 1 < pageEnd) target = fromIndex + 1;

  setTimeout(() => {
    if (target !== null) {
      const next = document.querySelector(`.q-card[data-index="${target}"]`);
      if (next) next.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      // ページ最後の質問に答えたら「つぎへ」ボタンを見せる
      $("#btn-next").scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 260);
}

/* ---------- 登山道プログレス ----------
   左端が登山口、右端が山頂。歩いた分だけ道に色がつき、現在地の丸が進む */
let routeLength = 0;

function updateProgress() {
  const done = answers.filter((a) => a !== null).length;
  const ratio = QUIZ.length ? done / QUIZ.length : 0;
  const route = document.getElementById("climb-path");
  const walked = document.getElementById("climb-progress");
  const marker = document.getElementById("climb-marker");

  if (route && walked) {
    if (!routeLength) {
      try {
        routeLength = route.getTotalLength();
        walked.style.strokeDasharray = routeLength;
      } catch (e) { routeLength = 0; }
    }
    if (routeLength) {
      walked.style.strokeDashoffset = routeLength * (1 - ratio);
      try {
        const p = route.getPointAtLength(routeLength * ratio);
        marker.setAttribute("cx", p.x);
        marker.setAttribute("cy", p.y);
      } catch (e) {}
    }
  }

  document.getElementById("sign-mid").classList.toggle("passed", ratio >= 0.5);
  document.getElementById("sign-peak").classList.toggle("passed", done === QUIZ.length);
  $("#progress-count").textContent = done;
  $("#progress-bar-wrap").setAttribute("aria-valuenow", done);
}

/* ---------- ページ移動 ---------- */
$("#btn-start").addEventListener("click", () => {
  currentPage = 0;
  showScreen("quiz");
  renderPage();
});

$("#btn-back").addEventListener("click", () => {
  if (currentPage === 0) {
    showScreen("start");
  } else {
    currentPage--;
    renderPage();
  }
});

$("#btn-next").addEventListener("click", () => {
  const start = currentPage * QUESTIONS_PER_PAGE;
  const end = Math.min(start + QUESTIONS_PER_PAGE, QUIZ.length);
  for (let i = start; i < end; i++) {
    if (answers[i] === null) {
      const card = document.querySelector(`.q-card[data-index="${i}"]`);
      card.classList.add("needs-answer");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  }
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResult();
  }
});


/* ---------- 相性のいいタイプ ----------
   息が合う相手  : 計画軸だけが逆のタイプ（感覚派と計画派で補完し合う）
   刺激をくれる相手: 目的軸だけが逆のタイプ（同じ登り方で、山の楽しみ方が違う） */
function flipAxis(code, axisIndex) {
  const ax = AXES[axisIndex];
  const chars = code.split("");
  chars[axisIndex] = chars[axisIndex] === ax.a ? ax.b : ax.a;
  return chars.join("");
}

function findMatches(code) {
  return [
    { label: "息が合う相手",     code: flipAxis(code, 2), why: "計画の立て方が逆どうし。抜けを補い合えます" },
    { label: "刺激をくれる相手", code: flipAxis(code, 0), why: "登り方は近いのに、山に求めるものが違います" },
  ];
}

/* ---------- 判定ロジック ----------
   選択肢A側（0,1,2）は重み3,2,1／選択肢B側（3,4,5）は重み1,2,3。
   rev が true の質問は、選択肢Aが2文字目側を指すため向きを反転させる。 */
function calcResult() {
  const score = {};
  AXES.forEach((ax) => (score[ax.id] = { a: 0, b: 0 }));

  QUIZ.forEach((q, i) => {
    const v = answers[i];
    const weight = v <= 2 ? 3 - v : v - 2;
    const pickedOptionA = v <= 2;
    const scoresFirstLetter = q.rev ? !pickedOptionA : pickedOptionA;
    if (scoresFirstLetter) score[q.axis].a += weight;
    else score[q.axis].b += weight;
  });

  let code = "";
  const detail = [];
  AXES.forEach((ax) => {
    const s = score[ax.id];
    const total = s.a + s.b;
    const aPct = Math.round((s.a / total) * 100);
    const aWins = s.a >= s.b; // 同点は1文字目側に倒す
    code += aWins ? ax.a : ax.b;
    detail.push({ ...ax, aPct, bPct: 100 - aPct, aWins });
  });
  return { code, detail };
}

/* ---------- 結果表示 ---------- */
function showResult() {
  const { code, detail } = calcResult();
  const type = TYPES[code] || { name: "未知のタイプ", desc: "" };

  $("#result-code").textContent = code;
  const ch = CHARACTERS[code];
  $("#result-char").innerHTML = characterSVG(code, "char char-lg");
  $("#result-name").textContent = type.name;
  $("#result-animal").textContent = ch ? `（${ch.animal}）` : "";
  $("#result-copy").textContent = "「" + type.copy + "」";
  $("#result-features").textContent = type.features;
  $("#result-caution").textContent = type.caution;

  $("#result-match").innerHTML = findMatches(code)
    .map((m) => {
      const t = TYPES[m.code] || { name: "—" };
      const mc = CHARACTERS[m.code];
      return `
      <div class="match">
        ${characterSVG(m.code, "char char-sm")}
        <div class="match-body">
          <p class="match-label">${m.label}</p>
          <p class="match-name"><span class="match-code">${m.code}</span>${t.name}</p>
          <p class="match-why">${mc ? mc.animal + "。" : ""}${m.why}</p>
        </div>
      </div>`;
    })
    .join("");

  $("#result-axes").innerHTML = detail
    .map((d) => {
      const winPct = d.aWins ? d.aPct : d.bPct;
      const winName = d.aWins ? d.aName : d.bName;
      const winChar = d.aWins ? d.a : d.b;
      return `
      <div class="axis">
        <div class="axis-labels">
          <span class="${d.aWins ? "" : "lose"}">${d.a} ${d.aName}</span>
          <span class="${d.aWins ? "lose" : ""}">${d.bName} ${d.b}</span>
        </div>
        <div class="axis-track">
          <div class="axis-bar ${d.aWins ? "side-a" : "side-b"}" style="width:${winPct}%"></div>
        </div>
        <p class="axis-pct">${winChar}（${winName}）${winPct}%</p>
      </div>`;
    })
    .join("");

  const text = `私の登山タイプは【${code}：${type.name}】でした！ ${SHARE_HASHTAG}`;
  $("#btn-share").href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(text) +
    "&url=" +
    encodeURIComponent(SITE_URL);

  showScreen("result");

  requestAnimationFrame(() => {
    document.querySelectorAll(".axis-bar").forEach((bar) => {
      const w = bar.style.width;
      bar.style.width = "0%";
      requestAnimationFrame(() => (bar.style.width = w));
    });
  });
}

/* ---------- もう一度 ---------- */
$("#btn-retry").addEventListener("click", () => {
  answers.fill(null);
  currentPage = 0;
  QUIZ = shuffleQuestions(QUESTIONS); // 順番を引き直す
  showScreen("start");
});
