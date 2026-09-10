/* =========================================================
   YAMA TYPE — 16タイプのキャラクター（山の生き物）
   生き物 : 生息域で目的軸（高山 P / 森 E）、社会性で仲間軸（単独 S / 群れ G）
   アイテム: 計画軸（道具・情報 L / 嗜好品・身につけるもの F）とリスク軸を表す
   ========================================================= */

const CHARACTERS = {

/* ---------- P・S 高山×単独 ---------- */
PSLC: { animal: "カモシカ", item: "折りたたんだ地形図", svg: `
  <rect x="60" y="126" width="11" height="22" rx="5" fill="#5C6C64"/>
  <rect x="89" y="126" width="11" height="22" rx="5" fill="#5C6C64"/>
  <ellipse cx="80" cy="117" rx="35" ry="27" fill="#6E7F76"/>
  <ellipse cx="80" cy="126" rx="20" ry="17" fill="#E9E4D8"/>
  <rect x="70" y="86" width="20" height="20" fill="#6E7F76"/>
  <path d="M70 50 Q61 34 69 21" stroke="#2C3A34" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M90 50 Q99 34 91 21" stroke="#2C3A34" stroke-width="8" fill="none" stroke-linecap="round"/>
  <ellipse cx="55" cy="66" rx="9" ry="13" fill="#5C6C64" transform="rotate(-28 55 66)"/>
  <ellipse cx="105" cy="66" rx="9" ry="13" fill="#5C6C64" transform="rotate(28 105 66)"/>
  <ellipse cx="80" cy="72" rx="24" ry="27" fill="#7B8C82"/>
  <ellipse cx="80" cy="88" rx="14" ry="12" fill="#E9E4D8"/>
  <ellipse cx="80" cy="84" rx="4.5" ry="3.4" fill="#2C3A34"/>
  <circle cx="69" cy="69" r="3.6" fill="#23302A"/>
  <circle cx="91" cy="69" r="3.6" fill="#23302A"/>
  <g transform="rotate(-7 80 114)">
    <rect x="65" y="105" width="30" height="20" rx="2" fill="#F7F3E8" stroke="#A8A08A" stroke-width="1.6"/>
    <path d="M75 105 L75 125 M85 105 L85 125" stroke="#DCD3BC" stroke-width="1.4"/>
    <path d="M68 120 Q74 111 80 114 Q87 118 92 110" stroke="#8FA898" stroke-width="1.8" fill="none"/>
  </g>
  <ellipse cx="62" cy="116" rx="8" ry="9" fill="#5C6C64"/>
  <ellipse cx="98" cy="116" rx="8" ry="9" fill="#5C6C64"/>` },

PSLA: { animal: "イヌワシ", item: "ピッケル", svg: `
  <g transform="rotate(13 120 100)">
    <rect x="117" y="50" width="6" height="98" rx="3" fill="#5B5B57"/>
    <path d="M105 55 Q120 44 134 57" stroke="#8E9296" stroke-width="7" fill="none" stroke-linecap="round"/>
    <rect x="114" y="141" width="12" height="8" rx="2" fill="#3A3A36"/>
  </g>
  <path d="M62 126 L96 126 L92 151 L66 151 Z" fill="#4A3A2B"/>
  <ellipse cx="78" cy="104" rx="36" ry="34" fill="#6B5340"/>
  <ellipse cx="50" cy="104" rx="16" ry="26" fill="#4A3A2B" transform="rotate(-8 50 104)"/>
  <ellipse cx="106" cy="104" rx="16" ry="26" fill="#4A3A2B" transform="rotate(8 106 104)"/>
  <circle cx="79" cy="60" r="25" fill="#A98352"/>
  <path d="M55 59 Q79 33 103 59 Q79 47 55 59 Z" fill="#C9A263"/>
  <path d="M73 66 L85 66 Q84 79 79 83 Q75 79 73 66 Z" fill="#E0A33B"/>
  <path d="M76 79 Q79 85 82 79 Z" fill="#8A6A2B"/>
  <circle cx="68" cy="58" r="3.6" fill="#221A12"/>
  <circle cx="90" cy="58" r="3.6" fill="#221A12"/>
  <path d="M61 50 L74 54" stroke="#5A452C" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M97 50 L84 54" stroke="#5A452C" stroke-width="3.4" stroke-linecap="round"/>` },

PSFC: { animal: "オコジョ", item: "使い込んだ水筒", svg: `
  <ellipse cx="118" cy="127" rx="17" ry="8" fill="#B0855A" transform="rotate(-10 118 127)"/>
  <circle cx="133" cy="124" r="7" fill="#2E2620"/>
  <rect x="62" y="130" width="10" height="18" rx="5" fill="#9A7148"/>
  <rect x="88" y="130" width="10" height="18" rx="5" fill="#9A7148"/>
  <ellipse cx="78" cy="112" rx="30" ry="28" fill="#B0855A"/>
  <ellipse cx="78" cy="120" rx="19" ry="18" fill="#F5EFE3"/>
  <circle cx="60" cy="50" r="9.5" fill="#9A7148"/>
  <circle cx="98" cy="50" r="9.5" fill="#9A7148"/>
  <circle cx="79" cy="66" r="25" fill="#BC9064"/>
  <ellipse cx="79" cy="78" rx="11" ry="8.5" fill="#F5EFE3"/>
  <ellipse cx="79" cy="74" rx="3.8" ry="2.9" fill="#2E2620"/>
  <circle cx="68" cy="63" r="3.5" fill="#241D18"/>
  <circle cx="90" cy="63" r="3.5" fill="#241D18"/>
  <rect x="67" y="100" width="24" height="34" rx="6" fill="#4E6B7A"/>
  <rect x="74" y="93" width="10" height="9" rx="2" fill="#B8B2A6"/>
  <rect x="67" y="112" width="24" height="6" fill="#E9E4D8"/>
  <ellipse cx="61" cy="116" rx="8" ry="9" fill="#9A7148"/>
  <ellipse cx="97" cy="116" rx="8" ry="9" fill="#9A7148"/>` },

PSFA: { animal: "テン", item: "頭に巻いたバンダナ", svg: `
  <ellipse cx="120" cy="123" rx="18" ry="10" fill="#D9AE63" transform="rotate(-14 120 123)"/>
  <rect x="62" y="130" width="11" height="18" rx="5" fill="#6B4E30"/>
  <rect x="87" y="130" width="11" height="18" rx="5" fill="#6B4E30"/>
  <ellipse cx="78" cy="112" rx="33" ry="29" fill="#D9AE63"/>
  <ellipse cx="78" cy="120" rx="20" ry="18" fill="#F6EFDE"/>
  <ellipse cx="52" cy="118" rx="9" ry="11" fill="#6B4E30" transform="rotate(-18 52 118)"/>
  <ellipse cx="104" cy="118" rx="9" ry="11" fill="#6B4E30" transform="rotate(18 104 118)"/>
  <circle cx="59" cy="49" r="10" fill="#B98D4B"/>
  <circle cx="99" cy="49" r="10" fill="#B98D4B"/>
  <circle cx="79" cy="64" r="27" fill="#E0BA74"/>
  <ellipse cx="79" cy="78" rx="12" ry="9" fill="#FBF6EA"/>
  <ellipse cx="79" cy="73" rx="4" ry="3" fill="#2E2318"/>
  <circle cx="67" cy="61" r="3.6" fill="#241B10"/>
  <circle cx="91" cy="61" r="3.6" fill="#241B10"/>
  <path d="M53 50 Q79 33 105 50 L103 58 Q79 43 55 58 Z" fill="#C2452C"/>
  <path d="M103 54 L119 62 L109 64 Z" fill="#A83A24"/>` },

/* ---------- P・G 高山×群れ ---------- */
PGLC: { animal: "ライチョウ", item: "首から下げたホイッスル", svg: `
  <ellipse cx="112" cy="113" rx="18" ry="11" fill="#C9C3B4" transform="rotate(20 112 113)"/>
  <ellipse cx="78" cy="102" rx="39" ry="35" fill="#EFEAE0"/>
  <ellipse cx="52" cy="104" rx="14" ry="24" fill="#DCD5C6" transform="rotate(-6 52 104)"/>
  <rect x="66" y="132" width="9" height="15" rx="4" fill="#C9B99C"/>
  <rect x="85" y="132" width="9" height="15" rx="4" fill="#C9B99C"/>
  <circle cx="79" cy="60" r="25" fill="#F5F1E9"/>
  <path d="M63 50 Q68 45 74 49 Q68 49 63 50 Z" fill="#C2452C"/>
  <path d="M84 49 Q90 45 95 50 Q90 49 84 49 Z" fill="#C2452C"/>
  <path d="M74 67 L85 67 L79 77 Z" fill="#3E3A32"/>
  <circle cx="68" cy="57" r="3.4" fill="#23302A"/>
  <circle cx="90" cy="57" r="3.4" fill="#23302A"/>
  <path d="M74 82 Q66 96 70 110" stroke="#B8AE97" stroke-width="2.6" fill="none"/>
  <path d="M84 82 Q92 96 88 110" stroke="#B8AE97" stroke-width="2.6" fill="none"/>
  <rect x="67" y="108" width="24" height="12" rx="6" fill="#C9A227"/>
  <circle cx="86" cy="114" r="2.6" fill="#8A6A15"/>` },

PGLA: { animal: "ホシガラス", item: "肩に掛けたザイル", svg: `
  <ellipse cx="112" cy="119" rx="18" ry="10" fill="#33302B" transform="rotate(18 112 119)"/>
  <ellipse cx="78" cy="104" rx="36" ry="33" fill="#6A5A4E"/>
  <circle cx="64" cy="97" r="2.7" fill="#F2EDE3"/>
  <circle cx="81" cy="93" r="2.7" fill="#F2EDE3"/>
  <circle cx="95" cy="102" r="2.7" fill="#F2EDE3"/>
  <circle cx="71" cy="114" r="2.7" fill="#F2EDE3"/>
  <circle cx="88" cy="121" r="2.7" fill="#F2EDE3"/>
  <ellipse cx="52" cy="106" rx="14" ry="24" fill="#33302B" transform="rotate(-8 52 106)"/>
  <rect x="68" y="132" width="9" height="15" rx="4" fill="#4A443C"/>
  <rect x="86" y="132" width="9" height="15" rx="4" fill="#4A443C"/>
  <circle cx="79" cy="60" r="24" fill="#6A5A4E"/>
  <path d="M73 65 L85 65 L79 87 Z" fill="#2E2A25"/>
  <circle cx="68" cy="56" r="3.8" fill="#211C17"/>
  <circle cx="90" cy="56" r="3.8" fill="#211C17"/>
  <circle cx="69.3" cy="54.6" r="1.3" fill="#EFEAE0"/>
  <circle cx="91.3" cy="54.6" r="1.3" fill="#EFEAE0"/>
  <ellipse cx="43" cy="106" rx="11" ry="17" fill="none" stroke="#C9A227" stroke-width="5"/>
  <ellipse cx="43" cy="106" rx="5" ry="10" fill="none" stroke="#E0A33B" stroke-width="4"/>` },

PGFC: { animal: "イワツバメ", item: "ファーストエイドのポーチ", svg: `
  <path d="M60 124 L96 124 L106 152 L78 137 L50 152 Z" fill="#2C3A50"/>
  <ellipse cx="78" cy="102" rx="35" ry="32" fill="#3A4A63"/>
  <ellipse cx="78" cy="112" rx="22" ry="20" fill="#F4F1EA"/>
  <ellipse cx="48" cy="100" rx="13" ry="24" fill="#2C3A50" transform="rotate(-12 48 100)"/>
  <ellipse cx="108" cy="100" rx="13" ry="24" fill="#2C3A50" transform="rotate(12 108 100)"/>
  <circle cx="79" cy="60" r="24" fill="#3A4A63"/>
  <ellipse cx="79" cy="71" rx="14" ry="10" fill="#F4F1EA"/>
  <path d="M74 66 L85 66 L79 75 Z" fill="#26241F"/>
  <circle cx="68" cy="56" r="4" fill="#F4F1EA"/>
  <circle cx="90" cy="56" r="4" fill="#F4F1EA"/>
  <circle cx="68" cy="56" r="2.2" fill="#141A24"/>
  <circle cx="90" cy="56" r="2.2" fill="#141A24"/>
  <rect x="65" y="104" width="28" height="21" rx="5" fill="#C2452C"/>
  <path d="M79 108 L79 121 M72 114.5 L86 114.5" stroke="#FFFFFF" stroke-width="3.6" stroke-linecap="round"/>` },

PGFA: { animal: "ニホンザル", item: "缶ビール", svg: `
  <ellipse cx="118" cy="129" rx="14" ry="7" fill="#8A7259" transform="rotate(-16 118 129)"/>
  <rect x="62" y="132" width="12" height="16" rx="6" fill="#6F5B44"/>
  <rect x="86" y="132" width="12" height="16" rx="6" fill="#6F5B44"/>
  <ellipse cx="78" cy="112" rx="34" ry="30" fill="#8A7259"/>
  <ellipse cx="78" cy="120" rx="21" ry="19" fill="#B39C80"/>
  <ellipse cx="50" cy="116" rx="9" ry="12" fill="#6F5B44" transform="rotate(-18 50 116)"/>
  <circle cx="52" cy="64" r="11" fill="#8A7259"/>
  <circle cx="106" cy="64" r="11" fill="#8A7259"/>
  <circle cx="79" cy="64" r="27" fill="#8A7259"/>
  <ellipse cx="79" cy="70" rx="20" ry="21" fill="#D89A8A"/>
  <ellipse cx="79" cy="81" rx="10" ry="7" fill="#C4827A"/>
  <circle cx="70" cy="64" r="3.5" fill="#3A2A22"/>
  <circle cx="88" cy="64" r="3.5" fill="#3A2A22"/>
  <path d="M73 89 Q79 93 85 89" stroke="#A96A62" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <rect x="96" y="99" width="20" height="30" rx="4" fill="#D9C27A"/>
  <rect x="96" y="107" width="20" height="9" fill="#C2452C"/>
  <ellipse cx="106" cy="99" rx="10" ry="3" fill="#B8B2A6"/>
  <ellipse cx="112" cy="119" rx="9" ry="11" fill="#6F5B44"/>` },

/* ---------- E・S 森×単独 ---------- */
ESLC: { animal: "ヤマネ", item: "文庫本", svg: `
  <path d="M104 129 Q127 128 125 111" stroke="#C0A276" stroke-width="12" fill="none" stroke-linecap="round"/>
  <ellipse cx="78" cy="114" rx="30" ry="27" fill="#C0A276"/>
  <rect x="74" y="90" width="8" height="22" fill="#6B563C"/>
  <ellipse cx="78" cy="122" rx="19" ry="17" fill="#F2E7D7"/>
  <circle cx="56" cy="54" r="12" fill="#A98A60"/>
  <circle cx="102" cy="54" r="12" fill="#A98A60"/>
  <circle cx="79" cy="66" r="26" fill="#CDB088"/>
  <ellipse cx="79" cy="78" rx="11" ry="8" fill="#F7EFE0"/>
  <ellipse cx="79" cy="74" rx="3.6" ry="2.8" fill="#3A2E20"/>
  <circle cx="67" cy="62" r="5.2" fill="#2A2016"/>
  <circle cx="91" cy="62" r="5.2" fill="#2A2016"/>
  <circle cx="68.8" cy="60.2" r="1.7" fill="#F2E7D7"/>
  <circle cx="92.8" cy="60.2" r="1.7" fill="#F2E7D7"/>
  <rect x="61" y="103" width="36" height="26" rx="2" fill="#4E6B7A"/>
  <rect x="64" y="106" width="30" height="20" rx="1" fill="#F7F3E8"/>
  <path d="M79 106 L79 126" stroke="#DCD3BC" stroke-width="1.8"/>
  <ellipse cx="57" cy="118" rx="8" ry="9" fill="#A98A60"/>
  <ellipse cx="101" cy="118" rx="8" ry="9" fill="#A98A60"/>` },

ESLA: { animal: "ムササビ", item: "ヘッドランプ", svg: `
  <path d="M40 124 Q29 84 58 73 L100 73 Q129 84 118 124 Z" fill="#A79C8E"/>
  <path d="M112 127 Q135 123 131 104" stroke="#8E8478" stroke-width="13" fill="none" stroke-linecap="round"/>
  <ellipse cx="78" cy="112" rx="30" ry="28" fill="#8E8478"/>
  <ellipse cx="78" cy="120" rx="19" ry="17" fill="#F0EAE0"/>
  <circle cx="58" cy="50" r="10" fill="#7A7166"/>
  <circle cx="100" cy="50" r="10" fill="#7A7166"/>
  <circle cx="79" cy="64" r="27" fill="#9A9084"/>
  <ellipse cx="79" cy="77" rx="11" ry="8" fill="#F0EAE0"/>
  <ellipse cx="79" cy="73" rx="3.8" ry="2.9" fill="#2E2A24"/>
  <circle cx="66" cy="61" r="6.2" fill="#231F1A"/>
  <circle cx="92" cy="61" r="6.2" fill="#231F1A"/>
  <circle cx="68.2" cy="58.8" r="2" fill="#F0EAE0"/>
  <circle cx="94.2" cy="58.8" r="2" fill="#F0EAE0"/>
  <path d="M54 49 Q79 37 104 49 L102 56 Q79 44 56 56 Z" fill="#3E4A52"/>
  <rect x="68" y="36" width="22" height="15" rx="4" fill="#4E6B7A"/>
  <circle cx="79" cy="43.5" r="5" fill="#E0A33B"/>` },

ESFC: { animal: "タヌキ", item: "湯気の立つマグカップ", svg: `
  <ellipse cx="122" cy="123" rx="17" ry="10" fill="#8A7259" transform="rotate(-14 122 123)"/>
  <ellipse cx="134" cy="119" rx="7" ry="8" fill="#4A3B2C"/>
  <ellipse cx="78" cy="112" rx="37" ry="32" fill="#8A7259"/>
  <ellipse cx="78" cy="120" rx="22" ry="21" fill="#CDBCA1"/>
  <ellipse cx="50" cy="118" rx="9" ry="12" fill="#6F5B44" transform="rotate(-18 50 118)"/>
  <circle cx="57" cy="46" r="11" fill="#6F5B44"/>
  <circle cx="101" cy="46" r="11" fill="#6F5B44"/>
  <circle cx="79" cy="64" r="29" fill="#97806A"/>
  <ellipse cx="65" cy="62" rx="12" ry="10" fill="#4A3B2C" transform="rotate(-16 65 62)"/>
  <ellipse cx="93" cy="62" rx="12" ry="10" fill="#4A3B2C" transform="rotate(16 93 62)"/>
  <ellipse cx="79" cy="78" rx="12" ry="9" fill="#E4DACB"/>
  <ellipse cx="79" cy="74" rx="4.2" ry="3.2" fill="#2C231B"/>
  <circle cx="66" cy="61" r="3.4" fill="#F2ECE2"/>
  <circle cx="92" cy="61" r="3.4" fill="#F2ECE2"/>
  <path d="M71 100 Q75 94 71 88" stroke="#C9C3B4" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <path d="M85 100 Q89 94 85 88" stroke="#C9C3B4" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <path d="M92 110 Q106 117 92 124" stroke="#DCD5C6" stroke-width="6" fill="none"/>
  <rect x="63" y="103" width="30" height="27" rx="4" fill="#F7F5EF" stroke="#C9C3B4" stroke-width="1.6"/>
  <rect x="63" y="103" width="30" height="8" rx="2" fill="#4E6B7A"/>
  <ellipse cx="107" cy="121" rx="9" ry="11" fill="#6F5B44"/>` },

ESFA: { animal: "キツネ", item: "道で摘んだ一輪の花", svg: `
  <path d="M104 130 Q137 127 132 103" stroke="#C4703A" stroke-width="14" fill="none" stroke-linecap="round"/>
  <circle cx="132" cy="101" r="8.5" fill="#F4EDE2"/>
  <rect x="62" y="132" width="11" height="16" rx="5" fill="#A85832"/>
  <rect x="87" y="132" width="11" height="16" rx="5" fill="#A85832"/>
  <ellipse cx="78" cy="112" rx="32" ry="29" fill="#C4703A"/>
  <ellipse cx="78" cy="120" rx="20" ry="18" fill="#F4EDE2"/>
  <path d="M54 58 L47 23 L74 46 Z" fill="#C4703A"/>
  <path d="M47 23 L52 41 L61 34 Z" fill="#4A3B2C"/>
  <path d="M104 58 L111 23 L84 46 Z" fill="#C4703A"/>
  <path d="M111 23 L106 41 L97 34 Z" fill="#4A3B2C"/>
  <circle cx="79" cy="64" r="26" fill="#D07F45"/>
  <path d="M79 51 Q63 66 79 89 Q95 66 79 51 Z" fill="#F4EDE2"/>
  <ellipse cx="79" cy="82" rx="4.2" ry="3.1" fill="#2E2118"/>
  <circle cx="67" cy="62" r="3.6" fill="#241A12"/>
  <circle cx="91" cy="62" r="3.6" fill="#241A12"/>
  <path d="M79 128 Q81 112 80 100" stroke="#6E8B5E" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M80 108 Q70 104 73 97" stroke="#6E8B5E" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="80" cy="92" r="5" fill="#EBD3E2"/>
  <circle cx="88" cy="97" r="5" fill="#EBD3E2"/>
  <circle cx="85" cy="106" r="5" fill="#EBD3E2"/>
  <circle cx="75" cy="106" r="5" fill="#EBD3E2"/>
  <circle cx="72" cy="97" r="5" fill="#EBD3E2"/>
  <circle cx="80" cy="99" r="3.6" fill="#E0A33B"/>
  <ellipse cx="60" cy="119" rx="8" ry="10" fill="#A85832"/>
  <ellipse cx="98" cy="119" rx="8" ry="10" fill="#A85832"/>` },

/* ---------- E・G 森×群れ ---------- */
EGLC: { animal: "ニホンジカ", item: "先導用の小旗", svg: `
  <rect x="62" y="130" width="11" height="18" rx="5" fill="#8A6238"/>
  <rect x="87" y="130" width="11" height="18" rx="5" fill="#8A6238"/>
  <ellipse cx="78" cy="112" rx="33" ry="30" fill="#A5764A"/>
  <circle cx="60" cy="106" r="2.8" fill="#EFE3D0"/>
  <circle cx="72" cy="100" r="2.8" fill="#EFE3D0"/>
  <circle cx="96" cy="104" r="2.8" fill="#EFE3D0"/>
  <circle cx="102" cy="116" r="2.8" fill="#EFE3D0"/>
  <ellipse cx="78" cy="122" rx="20" ry="17" fill="#EFE3D0"/>
  <path d="M64 44 Q57 26 62 13" stroke="#8A6A45" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M63 31 Q53 27 47 18" stroke="#8A6A45" stroke-width="4.4" fill="none" stroke-linecap="round"/>
  <path d="M94 44 Q101 26 96 13" stroke="#8A6A45" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M95 31 Q105 27 111 18" stroke="#8A6A45" stroke-width="4.4" fill="none" stroke-linecap="round"/>
  <ellipse cx="55" cy="62" rx="9" ry="13" fill="#8A6238" transform="rotate(-30 55 62)"/>
  <ellipse cx="103" cy="62" rx="9" ry="13" fill="#8A6238" transform="rotate(30 103 62)"/>
  <ellipse cx="79" cy="70" rx="24" ry="27" fill="#B4855A"/>
  <ellipse cx="79" cy="86" rx="13" ry="11" fill="#EFE3D0"/>
  <ellipse cx="79" cy="82" rx="4.4" ry="3.3" fill="#3A2A1C"/>
  <circle cx="68" cy="67" r="3.6" fill="#2A1E14"/>
  <circle cx="90" cy="67" r="3.6" fill="#2A1E14"/>
  <rect x="107" y="84" width="4.5" height="58" rx="2" fill="#8A7259"/>
  <path d="M111 87 L139 96 L111 105 Z" fill="#C2452C"/>` },

EGLA: { animal: "ヤマセミ", item: "三脚つきの一眼カメラ", svg: `
  <ellipse cx="110" cy="118" rx="16" ry="9" fill="#4A4A46" transform="rotate(20 110 118)"/>
  <ellipse cx="78" cy="102" rx="35" ry="33" fill="#F1EFEA"/>
  <circle cx="63" cy="96" r="2.6" fill="#3A3A38"/>
  <circle cx="79" cy="92" r="2.6" fill="#3A3A38"/>
  <circle cx="93" cy="99" r="2.6" fill="#3A3A38"/>
  <circle cx="69" cy="112" r="2.6" fill="#3A3A38"/>
  <circle cx="90" cy="115" r="2.6" fill="#3A3A38"/>
  <ellipse cx="50" cy="104" rx="13" ry="23" fill="#DCD9D0" transform="rotate(-8 50 104)"/>
  <circle cx="79" cy="58" r="24" fill="#F1EFEA"/>
  <path d="M64 41 L69 21 L75 39 Z" fill="#3A3A38"/>
  <path d="M75 37 L80 17 L86 37 Z" fill="#3A3A38"/>
  <path d="M87 39 L94 23 L96 43 Z" fill="#3A3A38"/>
  <path d="M73 64 L85 64 L79 88 Z" fill="#33312C"/>
  <circle cx="67" cy="55" r="3.4" fill="#23211E"/>
  <circle cx="91" cy="55" r="3.4" fill="#23211E"/>
  <path d="M64 121 L55 148 M94 121 L103 148 M79 121 L79 148" stroke="#5B5B57" stroke-width="4.4" stroke-linecap="round"/>
  <rect x="84" y="95" width="9" height="6" rx="2" fill="#3E4A52"/>
  <rect x="59" y="100" width="36" height="23" rx="4" fill="#3E4A52"/>
  <circle cx="77" cy="111" r="8.5" fill="#2A3238"/>
  <circle cx="77" cy="111" r="4.2" fill="#8FA6B4"/>` },

EGFC: { animal: "ニホンリス", item: "みんなに配るどんぐり", svg: `
  <path d="M104 132 Q148 126 141 76 Q135 42 106 48 Q130 56 128 82 Q126 116 100 118 Z" fill="#C77A4A"/>
  <ellipse cx="74" cy="108" rx="31" ry="31" fill="#B5643C"/>
  <ellipse cx="74" cy="116" rx="19" ry="19" fill="#F2E7D7"/>
  <ellipse cx="58" cy="137" rx="10" ry="7" fill="#A85832"/>
  <ellipse cx="88" cy="137" rx="10" ry="7" fill="#A85832"/>
  <path d="M56 44 L52 21 L68 38 Z" fill="#A85832"/>
  <path d="M96 44 L100 21 L84 38 Z" fill="#A85832"/>
  <circle cx="75" cy="62" r="26" fill="#BE6D42"/>
  <ellipse cx="75" cy="76" rx="12" ry="9" fill="#F2E7D7"/>
  <ellipse cx="75" cy="71" rx="4" ry="3" fill="#3A241A"/>
  <circle cx="64" cy="59" r="4" fill="#2B1B12"/>
  <circle cx="86" cy="59" r="4" fill="#2B1B12"/>
  <ellipse cx="74" cy="101" rx="9.5" ry="11.5" fill="#C9A26B"/>
  <path d="M64 97 Q74 88 84 97 Z" fill="#7A5A33"/>
  <ellipse cx="57" cy="118" rx="8" ry="9" fill="#A85832"/>
  <ellipse cx="91" cy="118" rx="8" ry="9" fill="#A85832"/>` },

EGFA: { animal: "ノウサギ", item: "自撮り棒つきスマホ", svg: `
  <ellipse cx="112" cy="129" rx="10" ry="8" fill="#F2ECE2"/>
  <rect x="64" y="132" width="12" height="16" rx="6" fill="#96866F"/>
  <rect x="86" y="132" width="12" height="16" rx="6" fill="#96866F"/>
  <ellipse cx="78" cy="112" rx="31" ry="29" fill="#AE9C86"/>
  <ellipse cx="78" cy="120" rx="20" ry="18" fill="#F2ECE2"/>
  <ellipse cx="62" cy="34" rx="9" ry="26" fill="#AE9C86" transform="rotate(-12 62 34)"/>
  <ellipse cx="62" cy="36" rx="4.5" ry="19" fill="#D9BFB2" transform="rotate(-12 62 36)"/>
  <ellipse cx="96" cy="34" rx="9" ry="26" fill="#AE9C86" transform="rotate(12 96 34)"/>
  <ellipse cx="96" cy="36" rx="4.5" ry="19" fill="#D9BFB2" transform="rotate(12 96 36)"/>
  <circle cx="79" cy="72" r="26" fill="#BCAB95"/>
  <ellipse cx="79" cy="84" rx="11" ry="8" fill="#F6F1E8"/>
  <ellipse cx="79" cy="79" rx="3.6" ry="2.6" fill="#3A3027"/>
  <path d="M79 81 L75 85 M79 81 L83 85" stroke="#3A3027" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="67" cy="70" r="3.8" fill="#2A241C"/>
  <circle cx="91" cy="70" r="3.8" fill="#2A241C"/>
  <path d="M44 142 Q66 124 92 108" stroke="#5B5B57" stroke-width="5" stroke-linecap="round" fill="none"/>
  <g transform="rotate(18 104 96)">
    <rect x="90" y="78" width="27" height="38" rx="5" fill="#2A3238"/>
    <rect x="94" y="83" width="19" height="28" rx="2" fill="#9DB6C4"/>
  </g>
  <ellipse cx="58" cy="128" rx="8" ry="9" fill="#96866F"/>` },

};

/* ---------- キャラクターのSVGを組み立てる ----------
   高山の生き物は青緑の背景、森の生き物はベージュの背景 */
/* ---------- 4グループの色 ----------
   目的軸（高山 P / 森 E）× 仲間軸（単独 S / 群れ G）で4分類。
   band  : ページ背景に敷く淡色
   circle: キャラクターの背景円（bandより一段淡い）
   deep  : コードのプレート色（白抜き文字）*/
const GROUPS = {
  PS: { name: "孤峰",     lead: "ひとりで高みへ", axis: "ピークハント × ソロ",
        band: "#E3EBF0", circle: "#E3EDF3", deep: "#3E5C6E" },
  PG: { name: "稜線",     lead: "仲間と高みへ",   axis: "ピークハント × グループ",
        band: "#F3E6E1", circle: "#F5E7E1", deep: "#B5533A" },
  ES: { name: "静林",     lead: "ひとりで森を",   axis: "エンジョイ × ソロ",
        band: "#E2ECE4", circle: "#E1EDE5", deep: "#4E7A57" },
  EG: { name: "陽だまり", lead: "仲間と森を",     axis: "エンジョイ × グループ",
        band: "#F4EBDB", circle: "#F6EDDC", deep: "#A5761F" },
};

/* コードからグループを引く（PSLC → PS） */
function groupOf(code) {
  return GROUPS[code.slice(0, 2)] || GROUPS.PS;
}

function characterSVG(code, cls, noBadge) {
  const c = CHARACTERS[code];
  if (!c) return "";
  const bg = groupOf(code).circle;
  const badge = noBadge ? "" : `<circle cx="80" cy="80" r="76" fill="${bg}"/>`;
  const label = noBadge ? `aria-hidden="true"` : `role="img" aria-label="${c.animal}"`;
  return `<svg viewBox="0 0 160 160" class="${cls || "char"}" ${label}>${badge}${c.svg}</svg>`;
}
