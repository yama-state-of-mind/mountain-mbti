/* =========================================================
   YAMA TYPE — 登山タイプ診断
   質問・タイプ定義はすべてこのファイル上部で編集できます。
   （質問を増やす／64タイプ化する場合もここを拡張するだけ）
   ========================================================= */

/* ---------- 設定 ---------- */
const QUESTIONS_PER_PAGE = 6; // 1ページに表示する質問数
const SITE_URL = "https://example.com"; // 公開後に自分のURLへ変更
const SHARE_HASHTAG = "#登山タイプ診断";

/* ---------- 評価軸の定義 ----------
   a: Aを選ぶと加点される文字 / b: Bを選ぶと加点される文字 */
const AXES = [
  { id: "PE", a: "P", b: "E", aName: "ピークハント", bName: "エンジョイ", title: "目的" },
  { id: "SG", a: "S", b: "G", aName: "ソロ",         bName: "グループ",   title: "仲間" },
  { id: "LF", a: "L", b: "F", aName: "計画・データ", bName: "フィーリング", title: "計画" },
  { id: "CA", a: "C", b: "A", aName: "慎重・安全",   bName: "挑戦・冒険",  title: "リスク" },
];

/* ---------- 質問リスト（全12問） ----------
   axis: 対応する軸ID / a: A選択肢（軸の1文字目側） / b: B選択肢 */
const QUESTIONS = [
  // 軸1：目的（P vs E）
  { axis: "PE", text: "登山で最も達成感を感じる瞬間は？",
    a: "山頂の看板前で写真を撮ったとき、標高や登頂記録を更新したとき",
    b: "途中の絶景ポイントで美味しいご飯を食べたり、景色をゆっくり眺めているとき" },
  { axis: "PE", text: "行く山を決める際に最も重視するのは？",
    a: "日本百名山であることや、標高・難易度の高さ",
    b: "山小屋のグルメ・雰囲気の良さや、下山後の温泉・観光" },
  { axis: "PE", text: "登山中、予定より時間が押している場合に取る行動は？",
    a: "山頂での休憩時間を削ってでも、なんとか山頂まで登り切る",
    b: "無理せず引き返すか山頂を諦め、途中の景観やカフェタイムを楽しむ" },

  // 軸2：仲間（S vs G）
  { axis: "SG", text: "理想の登山スタイル・人数は？",
    a: "1人（または気を使わない最小限の人数）で静かに登る",
    b: "3〜5人以上の賑やかなグループでワイワイ登る" },
  { axis: "SG", text: "登山中にテンションが上がる瞬間は？",
    a: "静かな山道で、自分1人だけの空間と静寂を噛み締めるとき",
    b: "仲間と「すごい景色！」「疲れたね！」と感情を共有しているとき" },
  { axis: "SG", text: "登山計画を立てるとき好き・得意なのは？",
    a: "行きたいルートを自分1人でサクッと決めて行動する",
    b: "みんなの希望を聞いて日程調整したり、企画を立てて巻き込む" },

  // 軸3：計画（L vs F）
  { axis: "LF", text: "登山の事前準備スタイルは？",
    a: "コースタイム、標高差、水分の必要量を事前に数値化して計算する",
    b: "大体の行き先と天気だけ確認し、詳細は当日の気分や状況で決める" },
  { axis: "LF", text: "ギア（道具）を選ぶ基準は？",
    a: "重量（g単位）、機能性、スペック数値を比較して論理的に選ぶ",
    b: "デザインやカラーリング、直感的な好みや好きなブランドで選ぶ" },
  { axis: "LF", text: "登山中のペース管理は？",
    a: "標準コースタイムに対する倍率（例: 0.8倍ペース）を意識して管理する",
    b: "その時の体調や気分の赴くままに自由に歩く" },

  // 軸4：リスク（C vs A）
  { axis: "CA", text: "天気予報が「微妙（てんくらC評価など）」な場合の判断は？",
    a: "無理せず中止にするか、確実に安全な低山・観光に変更する",
    b: "現地に行って状況を見ながら、行けるところまでトライしてみる" },
  { axis: "CA", text: "挑戦してみたいルートは？",
    a: "よく整備されたメジャーコースや、エスケープルートが多い安心なルート",
    b: "岩場・鎖場が多いスリリングなルートやバリエーションルート" },
  { axis: "CA", text: "防寒着・雨具・非常用品の装備量は？",
    a: "使わない可能性が高くても「万が一」に備えて多めに持つ",
    b: "必要最低限に絞り、なるべく軽量化して行動力を上げる" },
];

/* ---------- 16タイプ定義 ----------
   64タイプ化する場合は5文字目を追加したキーを増やせばOK */
const TYPES = {
  PSLC: { name: "ソロの山職人",           desc: "計画通りに淡々と登り切る完璧主義者。緻密なプランと確かな技術で、静かに頂を積み重ねていくタイプです。" },
  PSLA: { name: "孤高のチャレンジャー",   desc: "誰も踏み込まない難関に一人で挑む求道者。データに裏打ちされた実力で、限界の一歩先を目指します。" },
  PSFC: { name: "マイペース登頂家",       desc: "己の感覚と体力だけで頂を踏むタイプ。無理はしないけれど、登ると決めた山は自分の流儀で登り切ります。" },
  PSFA: { name: "野性派冒険家",           desc: "直感と野性味でコースを突き進むワイルド派。地図よりも自分の勘を信じて、山と一対一で向き合います。" },
  PGLC: { name: "絶対的リーダー",         desc: "徹底した安全計画で仲間を導く司令塔。あなたがいるだけでパーティ全体の登頂率と安心感が上がります。" },
  PGLA: { name: "熱血アルピニスト",       desc: "信頼する仲間と共に高みを目指す情熱派。綿密な計画と攻めの姿勢で、チームの限界を押し上げます。" },
  PGFC: { name: "頼れる相棒",             desc: "仲間を気遣いながら登頂を果たす縁の下の力持ち。あなたと登る山は、なぜかいつも安心で楽しい。" },
  PGFA: { name: "攻めの宴会隊長",         desc: "スリルも仲間との盛り上がりも全力のエンターテイナー。山頂での乾杯のために今日も攻めの登山を仕掛けます。" },
  ESLC: { name: "静寂のスローハイカー",   desc: "自分のペースで山の静けさを愛でる思索家。計画はきっちり、歩みはゆっくり。山との対話を大切にします。" },
  ESLA: { name: "風のソロ旅人",           desc: "軽量ギアでどこまでも自由に歩く放浪派。緻密なギア選定と身軽さを武器に、風のように山を渡ります。" },
  ESFC: { name: "癒やしのチルハイカー",   desc: "写真・カフェ・温泉を全力で味わう癒やし系。山は登るものではなく、味わうもの。それがあなたの流儀です。" },
  ESFA: { name: "自由気ままな山歩き人",   desc: "気分に任せて自然に溶け込む自由人。予定も目的地もゆるやかに、その日いちばん心地よい道を歩きます。" },
  EGLC: { name: "至高のおもてなしガイド", desc: "仲間に最高の山体験を提供する気配り屋。安全管理も休憩ポイントも完璧で、みんなの「また行きたい」を生み出します。" },
  EGLA: { name: "絶景のプロデューサー",   desc: "最高の景色と山ご飯をプロデュースする演出家。綿密なリサーチ力と行動力で、忘れられない一日を作ります。" },
  EGFC: { name: "和気あいあいムードメーカー", desc: "仲間がいればどんな低山も最高の思い出に変える太陽のような存在。あなたの笑顔がパーティの原動力です。" },
  EGFA: { name: "アクティブ映えハンター", desc: "スリル満点の絶景をみんなで共有する行動派。ノリと勢い、そして抜群のフットワークで山を遊び尽くします。" },
};

/* =========================================================
   ここから下はアプリ本体のロジック
   ========================================================= */
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

/* ---------- 質問ページの描画 ---------- */
function renderPage() {
  const page = $("#quiz-page");
  page.innerHTML = "";
  page.classList.remove("page-in");
  void page.offsetWidth; // アニメーション再生のためのリフロー
  page.classList.add("page-in");

  const start = currentPage * QUESTIONS_PER_PAGE;
  const end = Math.min(start + QUESTIONS_PER_PAGE, QUESTIONS.length);

  for (let i = start; i < end; i++) {
    const q = QUESTIONS[i];
    const card = document.createElement("div");
    card.className = "q-card";
    card.dataset.index = i;

    const dots = [0, 1, 2, 3, 4, 5].map((v) => {
      const sel = answers[i] === v ? " selected" : "";
      return `<button type="button" class="dot${sel}" data-v="${v}"
        aria-label="${v <= 2 ? "A寄り" : "B寄り"}（強さ${v <= 2 ? 3 - v : v - 2}）"></button>`;
    }).join("");

    card.innerHTML = `
      <span class="q-num">Q${i + 1}</span>
      <p class="q-text">${q.text}</p>
      <div class="opt-label opt-a">A. ${q.a}</div>
      <div class="dots">${dots}</div>
      <div class="opt-label opt-b">B. ${q.b}</div>
    `;
    page.appendChild(card);
  }

  $("#btn-back").style.visibility = "visible";
  $("#btn-next").textContent = currentPage === totalPages - 1 ? "結果を見る" : "つぎへ";
  updateProgress();
}

/* ---------- ドット選択（イベント委任） ---------- */
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
});

function updateProgress() {
  const done = answers.filter((a) => a !== null).length;
  $("#progress-fill").style.width = `${(done / QUESTIONS.length) * 100}%`;
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
  // このページの未回答チェック
  const start = currentPage * QUESTIONS_PER_PAGE;
  const end = Math.min(start + QUESTIONS_PER_PAGE, QUESTIONS.length);
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

/* ---------- 判定ロジック ----------
   0,1,2 → A側（重み3,2,1） / 3,4,5 → B側（重み1,2,3） */
function calcResult() {
  const score = {}; // 例: { PE: { a: 5, b: 2 }, ... }
  AXES.forEach((ax) => (score[ax.id] = { a: 0, b: 0 }));

  QUESTIONS.forEach((q, i) => {
    const v = answers[i];
    if (v <= 2) score[q.axis].a += 3 - v;
    else score[q.axis].b += v - 2;
  });

  let code = "";
  const detail = [];
  AXES.forEach((ax) => {
    const s = score[ax.id];
    const total = s.a + s.b;
    const aPct = Math.round((s.a / total) * 100);
    const aWins = s.a >= s.b; // 同点はA側（1文字目）に倒す
    code += aWins ? ax.a : ax.b;
    detail.push({ ...ax, aPct, bPct: 100 - aPct, aWins });
  });
  return { code, detail };
}

/* ---------- 結果表示 ---------- */
function showResult() {
  const { code, detail } = calcResult();
  const type = TYPES[code] || { name: "未知のタイプ", desc: "" };

  $("#result-code").innerHTML = code
    .split("")
    .map((c) => `<div class="code-tile">${c}</div>`)
    .join("");
  $("#result-name").textContent = type.name;
  $("#result-desc").textContent = type.desc;

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

  // Xシェアリンク
  const text = `私の登山タイプは【${code}：${type.name}】でした！ ${SHARE_HASHTAG}`;
  $("#btn-share").href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(text) +
    "&url=" +
    encodeURIComponent(SITE_URL);

  showScreen("result");

  // バーのアニメーション（幅0→本来値）
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
  showScreen("start");
});
