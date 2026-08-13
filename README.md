# 🐂🐄 Bulls and Cows — Digital Logic Game

**Live Demo:** [https://pushkinaalexandra.github.io/BullsCows/](https://pushkinaalexandra.github.io/BullsCows/)

A classic word-guessing logic game reimagined with a modern glass-morphism interface. Available in Russian and English with support for 4- and 5-letter words. The game combines traditional Bulls and Cows mechanics with dynamic dictionary loading and a clean, responsive design.

---

## ✨ Features

### 🎮 Gameplay
- **Two languages** — Russian (built-in dictionary) and English (built-in + live API)
- **Two word lengths** — 4 or 5 letters, all unique
- **Real-time feedback** — Bulls (correct position) and Cows (wrong position)
- **Guess history** — track every attempt with color-coded results
- **Give up option** — reveals the secret word

### 🎨 Interface
- **Glass-morphism design** with animated gradients and blur effects
- **Fully responsive** — desktop, tablet, and mobile friendly
- **Keyboard navigation** — auto-advance, Backspace, Enter to submit
- **Smooth animations** — hover effects, transitions, and loading states

### 📚 Dictionaries
- **Russian:** 1000+ words (4 and 5 letters)
- **English:** 1000+ built-in words + live API integration via [Datamuse](https://api.datamuse.com/)

---

## 🛠️ Technologies Used

| Component | Technology | Purpose |
|-----------|------------|---------|
| Structure | HTML5 | Semantic markup |
| Styling | CSS3 | Glass-morphism, animations, responsiveness |
| Logic | JavaScript (ES6+) | Game engine, word filtering, API integration |
| DOM | jQuery 3.7.1 | Simplified DOM manipulation |
| API | Datamuse API | Dynamic English word fetching |
| Icons | Font Awesome 4.5.0 | Home button icon |

---

## 📂 Project Structure

```
BullsCows3Sem/
├── index.html              # Main menu / settings page
├── Game.html               # Game page
├── css/
│   ├── index.css           # Main menu styles
│   └── game.css            # Game page styles
├── js/
│   ├── index.js            # Main menu logic
│   └── game.js             # Game logic (words, input, scoring)
└── README.md               # Project documentation
```

---

## 🗂️ Data Structure

### Game State (`game.js`)

| Variable | Description |
|----------|-------------|
| `word` | Secret word randomly selected from dictionary |
| `dictWords` | Array of valid words for current language/length |
| `inputWord` | Player's current guess (submitted via form) |
| `bulls` | Number of correct letters in correct positions |
| `cows` | Number of correct letters in wrong positions |

### Dictionary Functions

| Function | Description |
|----------|-------------|
| `importRusWords()` | Returns Russian dictionary object with 4/5-letter words |
| `getExtendedEnglishDictionary(length)` | Returns built-in English dictionary |
| `fetchEnglishWords(length)` | Fetches words from Datamuse API + built-in fallback |
| `generatePatterns(length)` | Generates search patterns for API queries |

---

## 🎯 How to Play

### 1. Main Menu (`index.html`)

Select your preferences:
- **Language** — Русский / English
- **Word length** — 4 or 5 letters

Click **"Играть! / Play!"** to start.

### 2. Game Page (`Game.html`)

1. **Type your guess** — one letter per input field
2. **Submit** — press `Enter` or click **Check**
3. **Read feedback**:
   - 🟢 **Bull** — letter is correct and in the right place
   - 🔵 **Cow** — letter is correct but in the wrong place
4. **Review history** — all guesses appear in the table below
5. **Continue** — until you guess the word or click **Give up**

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Submit the current word |
| `Backspace` | Go to previous field (if current is empty) |
| `Any letter` | Auto-advance to the next field |

---

## 🔌 API Integration

The game uses the [Datamuse API](https://api.datamuse.com/api/) to dynamically fetch English words:

```javascript
// Example API request
fetch(`https://api.datamuse.com/words?sp=${pattern}&max=500`)
```

**Pattern generation** includes:
- All-question-mark pattern (`????` or `?????`)
- Fixed first letter patterns (`a???`, `b???`, etc.)
- Fixed last letter patterns (`???a`, `???b`, etc.)
- For 4-letter words: fixed first two letters (`ab??`, `ac??`, etc.)

**Fallback** — if API fails or returns too few words, the built-in dictionary is used automatically.

---

## 🎨 Design Highlights

- **Deep purple gradient** background (`#0f0c29` → `#302b63` → `#24243e`)
- **Glass-morphism cards** with `backdrop-filter: blur(20px)`
- **Neon accent color** (`#6c63ff`) for buttons and focus states
- **Color-coded feedback**:
  - 🟢 `#4ade80` — Bulls
  - 🔵 `#60a5fa` — Cows
- **Smooth animations** — scale, pulse, hover, and transitions

---

## 📱 Responsive Design

| Breakpoint | Adjustments |
|------------|-------------|
| `≤ 768px` | Stack layout, smaller input fields, compact history |
| `≤ 480px` | Reduced padding, smaller fonts, minimal spacing |

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PushkinaAlexandra/BullsCows.git
   cd BullsCows
   ```

2. **Open in browser:**
   - Simply double-click `index.html`
   - Or use Live Server: `npx live-server`

3. **No build tools or dependencies** — everything is client-side.

---

## 📝 Author

**Aleksandra Pushkina**

- [Personal Website](https://pushkinaalexandra.github.io)
- [LinkedIn](https://www.linkedin.com/in/alexandra-pushkina-93a887335/)
- [GitHub](https://github.com/PushkinaAlexandra)

---

## 🏷️ Tags

`Digital Humanities` `Logic Game` `Word Game` `Bulls and Cows` `JavaScript` `jQuery` `Glass-morphism` `Responsive Design` `Datamuse API` `Interactive` `Educational` `Vanilla JS`

---

## 🙏 Acknowledgments

- Classic **Bulls and Cows** game concept
- [Datamuse](https://datamuse.com/) for the free word API
- Inspired by logic puzzles and code-breaking challenges

---
