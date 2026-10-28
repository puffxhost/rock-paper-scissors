# 🪨 Rock Paper Scissors — Puffx Host Arcade

A polished, responsive Rock Paper Scissors game built with plain HTML, CSS, and JavaScript. Play a best-of-five match against the computer or keep going in Endless mode.

## 🎮 Live demo

[**Play the Puffx Host Rock Paper Scissors game →**](https://htmlpreview.github.io/?https://github.com/puffxhost/rock-paper-scissors/blob/cde2b94086aa60ff7b321949bd231dd2a58692aa/index.html)

The demo is a static page. No account, installation, build step, or backend is required.

## ✨ Features

- 🏆 **First to five** match mode, with a visible score tracker and winner screen
- ♾️ **Endless mode** for open-ended play
- 🪨 **Rock, Paper, Scissors** moves with instant computer responses
- ⌨️ **Keyboard controls:** press **R**, **P**, or **S** to choose a move
- ↶ **Undo** the most recent round, including score and streak updates
- 📊 **Session stats:** win rate, current streak, and rounds played
- 🧾 **Recent round history** with an option to clear it
- 🔊 Layered arcade-style sound effects, on by default, with a sound toggle
- 🎉 Animated move reveals, a short CPU thinking pause, and a match-win celebration
- 📱 Responsive layout, accessible status updates, and reduced-motion support
- 🔒 Self-contained static app with no third-party scripts or tracking

## 🕹️ How to play

1. Open the [live demo](https://htmlpreview.github.io/?https://github.com/puffxhost/rock-paper-scissors/blob/cde2b94086aa60ff7b321949bd231dd2a58692aa/index.html), or open `index.html` locally.
2. Choose **First to 5** or **Endless**.
3. Pick Rock, Paper, or Scissors. You can also use **R**, **P**, or **S** on your keyboard.
4. In First to 5, the first player to win five rounds wins the match.
5. Use **Undo last round** to take back the most recent move, or **New match** to reset the scoreboard.

### Rules

- 🪨 Rock beats ✂️ Scissors
- 📄 Paper beats 🪨 Rock
- ✂️ Scissors beats 📄 Paper
- Matching moves are a draw

## 🚀 Run locally

There are no dependencies or build tools.

1. Clone this repository:

   ```sh
   git clone https://github.com/puffxhost/rock-paper-scissors.git
   cd rock-paper-scissors
   ```

2. Open `index.html` in a modern browser.

   Or start a local static server:

   ```sh
   python3 -m http.server 8000
   ```

   Then visit <http://localhost:8000>.

## 📂 Project structure

```text
rock-paper-scissors/
├── index.html   # Complete game: markup, styling, and game logic
├── README.md    # Project guide and demo link
└── LICENSE      # MIT license
```

## 🛠️ Built with

- HTML5
- CSS3, including responsive layouts, animations, and reduced-motion support
- Vanilla JavaScript

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🛟 Support

- 🌐 [Puffx Host](https://puffxhost.com)
- 📧 [support@puffxhost.in](mailto:support@puffxhost.in)
- 🐛 [Report an issue](https://github.com/puffxhost/rock-paper-scissors/issues)
