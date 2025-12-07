import { TarotCard } from './types';

export const TAROT_DECK: TarotCard[] = [
  {
    id: 1,
    name: "愚者",
    nameEn: "The Fool",
    // 經典偉特塔羅牌 - 愚者 (Wikimedia source)
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    desc: "新的開始就在眼前，請保持開放的心態，不要害怕冒險。即使前路未知，你的直覺會引領你走向正確的方向。",
    gradient: "from-yellow-200 to-orange-400"
  },
  {
    id: 2,
    name: "魔術師",
    nameEn: "The Magician",
    // 經典偉特塔羅牌 - 魔術師
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    desc: "你擁有實現夢想所需的所有資源與能力。現在是採取行動的最佳時機，將創意轉化為現實，創造屬於你的奇蹟。",
    gradient: "from-purple-400 to-indigo-600"
  },
  {
    id: 3,
    name: "女祭司",
    nameEn: "The High Priestess",
    // 經典偉特塔羅牌 - 女祭司
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    desc: "靜下心來傾聽內在的聲音。現在不是躁進的時候，而是需要等待與觀察。相信你的第六感，真相將在適當的時機揭曉。",
    gradient: "from-blue-700 to-cyan-400"
  },
  {
    id: 4,
    name: "皇后",
    nameEn: "The Empress",
    // 經典偉特塔羅牌 - 皇后
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    desc: "豐盛與慈愛的能量包圍著你。這是一個適合孕育計畫、享受生活與關愛他人的時刻。擁抱大自然帶給你的療癒力量。",
    gradient: "from-pink-300 to-rose-500"
  },
  {
    id: 5,
    name: "皇帝",
    nameEn: "The Emperor",
    // 經典偉特塔羅牌 - 皇帝
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    desc: "現在需要的是結構、紀律與理性的思考。透過穩定的規劃與堅定的意志，你能夠掌控混亂的局面，建立穩固的基礎。",
    gradient: "from-red-600 to-slate-800"
  }
];