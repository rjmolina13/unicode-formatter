<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center" title="Unicode Formatter">𝓾𝓷𝓲𝓬𝓸𝓭𝓮 𝙛𝙤𝙧𝙢𝙖𝙩𝙩𝙚𝙧</h1>

  <h4 align="center"><i>based originally on DenverCoder1's</i> <a href="https://github.com/DenverCoder1/unicode-formatter">unicode-formatter</a></h4>

  <p align="center">
    Format your Unicode text with 𝗯𝗼𝗹𝗱, 𝘪𝘵𝘢𝘭𝘪𝘤𝘴, and 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 and make all kinds of 𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽 with Unicode fonts.
    <br />
    <a href="https://fonts.cictcsc.site"><strong>Explore the live site »</strong></a>
    <br />
    <br />
    <a href="https://github.com/rjmolina13/unicode-formatter/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/rjmolina13/unicode-formatter/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#supported-fonts">Supported Fonts</a></li>
    <li><a href="#keyboard-shortcuts">Keyboard Shortcuts</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This is a modernized version of the classic Unicode Formatter tool. The entire frontend has been rewritten from scratch, migrating away from heavy dependencies (like CodeMirror) to a clean, fast, and responsive vanilla web app stack.

Key improvements in this version:
* Full rewrite using pure Vanilla JavaScript ES6 classes
* Native `<textarea>` with optimized DOM range selection (no external editor dependencies)
* Fully responsive UI powered by **Tailwind CSS v4**
* Native Dark/Light mode support based on system preferences
* Replaced SVG icons with dynamic Lucide icons
* Preserved all original text manipulation capabilities and shortcuts

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![HTML5][HTML5.com]][HTML5-url]
* [![Vanilla JS][Vanilla.js]][Vanilla-url]
* [![Tailwind CSS][Tailwind.com]][Tailwind-url]
* [![Lucide][Lucide.com]][Lucide-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

You only need Node.js and npm installed to compile the Tailwind CSS.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rjmolina13/unicode-formatter.git
   ```
2. Install NPM packages (for Tailwind and Lucide)
   ```sh
   npm install
   ```
3. Build the CSS
   ```sh
   npm run build:css
   ```
4. Start a local server (e.g. `npx serve .`) or just open `index.html` in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

Type your text in the text area and format it by highlighting the text you want to format and clicking one of the buttons.

Click "More fonts" to show more Unicode fonts.

The eraser button will convert your selection back to normal text.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Supported Fonts

| Font               | Example            |
| ------------------ | ------------------ |
| Normal             | Normal             |
| Sans bold          | 𝗦𝗮𝗻𝘀 𝗯𝗼𝗹𝗱          |
| Sans italic        | 𝘚𝘢𝘯𝘴 𝘪𝘵𝘢𝘭𝘪𝘤        |
| Bold italic        | 𝘽𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘        |
| Monospace          | 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎          |
| Fullwidth          | Ｆｕｌｌｗｉｄｔｈ |
| Math Fraktur       | 𝔐𝔞𝔱𝔥 𝔉𝔯𝔞𝔨𝔱𝔲𝔯       |
| Math Fraktur bold  | 𝕸𝖆𝖙𝖍 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝖇𝖔𝖑𝖉  |
| Serif bold         | 𝐒𝐞𝐫𝐢𝐟 𝐛𝐨𝐥𝐝         |
| Serif italic       | 𝑆𝑒𝑟𝑖𝑓 𝑖𝑡𝑎𝑙𝑖𝑐       |
| Serif bold italic  | 𝑺𝒆𝒓𝒊𝒇 𝒃𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄  |
| Math double-struck | 𝕄𝕒𝕥𝕙 𝕕𝕠𝕦𝕓𝕝𝕖-𝕤𝕥𝕣𝕦𝕔𝕜 |
| Script             | 𝒮𝒸𝓇𝒾𝓅𝓉             |
| Bold script        | 𝓑𝓸𝓵𝓭 𝓼𝓬𝓻𝓲𝓹𝓽        |
| Circled            | Ⓒⓘⓡⓒⓛⓔⓓ            |
| Circled negative   | 🅒🅘🅡🅒🅛🅔🅓 🅝🅔🅖🅐🅣🅘🅥🅔   |
| Squared            | 🅂🅀🅄🄰🅁🄴🄳            |
| Squared negative   | 🆂🆀🆄🅰🆁🅴🅳 🅽🅴🅶🅰🆃🅸🆅🅴   |
| Parenthesized      | ⒫⒜⒭⒠⒩⒯⒣⒠⒮⒤⒵⒠⒟      |
| Small Caps         | Sᴍᴀʟʟ Cᴀᴩꜱ         |
| Subscript          | ꜱᵤᵦₛ𝒸ᵣᵢₚₜ          |
| Superscript        | ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ        |
| Inverted\*         | Iuʌǝɹʇǝp           |
| Rotated Left       | ᓚⴰ𝀏ơ𝀏шᓀ ⨼ш𝈯𝀏       |
| Rotated Right\*    | ᓓⴰ𝀏⌕𝀏ጠ௨ ᓓ𝄩மፓ𝀏      |
| Mirrored\*         | Miᴙᴙoᴙɘb           |

\* These fonts can also be transformed in Reverse (see Other Transformations below).

### Appended Styles

| Font                | Example             |
| ------------------- | ------------------- |
| Underline           | U͟n͟d͟e͟r͟l͟i͟n͟e͟           |
| Strikethrough       | 𝖲̶𝗍̶𝗋̶𝗂̶𝗄̶𝖾̶𝗍̶𝗁̶𝗋̶𝗈̶𝗎̶𝗀̶𝗁̶       |
| Short Strikethrough | S̵h̵o̵r̵t̵ ̵S̵t̵r̵i̵k̵e̵t̵h̵r̵o̵u̵g̵h̵ |

### Other Transformations

| Font                  | Example               |
| --------------------- | --------------------- |
| Reverse               | esreveR               |
| Inverted Reverse      | ǝsɹǝʌǝꓤ pǝʇɹǝʌuI      |
| Rotated Right Reverse | ጠᔕᓓጠ<ጠᓓ 𝀏ፓம𝄩ᓓ ௨ጠ𝀏⌕𝀏ⴰᓓ |
| Mirrored Reverse      | ɘꙅᴙɘvɘЯ bɘᴙoᴙᴙiM      |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Keyboard Shortcuts

| Shortcut (Win/Linux) | Shortcut (Mac) | Font |
| ------------------- | -------------- | ---- |
| <kbd>Ctrl</kbd> <kbd>E</kbd> | <kbd>Cmd</kbd> <kbd>E</kbd> | Normal / Erase |
| <kbd>Ctrl</kbd> <kbd>B</kbd> | <kbd>Cmd</kbd> <kbd>B</kbd> | 𝗦𝗮𝗻𝘀 𝗯𝗼𝗹𝗱 |
| <kbd>Ctrl</kbd> <kbd>I</kbd> | <kbd>Cmd</kbd> <kbd>I</kbd> | 𝘚𝘢𝘯𝘴 𝘪𝘵𝘢𝘭𝘪𝘤 |
| <kbd>Ctrl</kbd> <kbd>M</kbd> | <kbd>Cmd</kbd> <kbd>M</kbd> | 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 |
| <kbd>Ctrl</kbd> <kbd>U</kbd> | <kbd>Cmd</kbd> <kbd>U</kbd> | U͟n͟d͟e͟r͟l͟i͟n͟e͟ |
| <kbd>Alt</kbd> <kbd>K</kbd> | <kbd>Cmd</kbd> <kbd>K</kbd> | 𝖲̶𝗍̶𝗋̶𝗂̶𝗄̶𝖾̶𝗍̶𝗁̶𝗋̶𝗈̶𝗎̶𝗀̶𝗁̶ |
| <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>B</kbd> | <kbd>Cmd</kbd> <kbd>Shift</kbd> <kbd>B</kbd> | 𝘽𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘 |
| <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> | <kbd>Cmd</kbd> <kbd>Shift</kbd> <kbd>I</kbd> | 𝑆𝑒𝑟𝑖𝑓 𝑖𝑡𝑎𝑙𝑖𝑐 |
| <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>N</kbd> | <kbd>Cmd</kbd> <kbd>Shift</kbd> <kbd>N</kbd> | 𝐒𝐞𝐫𝐢𝐟 𝐛𝐨𝐥𝐝 |
| <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>J</kbd> | <kbd>Cmd</kbd> <kbd>Shift</kbd> <kbd>J</kbd> | 𝑺𝒆𝒓𝒊𝒇 𝒃𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄 |
| <kbd>Ctrl</kbd> <kbd>.</kbd> or <kbd>Shift</kbd><kbd>+</kbd> | <kbd>Cmd</kbd> <kbd>.</kbd> or <kbd>Shift</kbd><kbd>+</kbd> | ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ |
| <kbd>Ctrl</kbd> <kbd>=</kbd> or <kbd>,</kbd> | <kbd>Cmd</kbd> <kbd>=</kbd> or <kbd>,</kbd> | ꜱᵤᵦₛ𝒸ᵣᵢₚₜ |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Original project created by [DenverCoder1](https://github.com/DenverCoder1/unicode-formatter)
* UI modernized by [RubyJ / @rjmolina13](https://github.com/rjmolina13)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/rjmolina13/unicode-formatter.svg?style=for-the-badge
[contributors-url]: https://github.com/rjmolina13/unicode-formatter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rjmolina13/unicode-formatter.svg?style=for-the-badge
[forks-url]: https://github.com/rjmolina13/unicode-formatter/network/members
[stars-shield]: https://img.shields.io/github/stars/rjmolina13/unicode-formatter.svg?style=for-the-badge
[stars-url]: https://github.com/rjmolina13/unicode-formatter/stargazers
[issues-shield]: https://img.shields.io/github/issues/rjmolina13/unicode-formatter.svg?style=for-the-badge
[issues-url]: https://github.com/rjmolina13/unicode-formatter/issues
[license-shield]: https://img.shields.io/github/license/rjmolina13/unicode-formatter.svg?style=for-the-badge
[license-url]: https://github.com/rjmolina13/unicode-formatter/blob/main/LICENSE
[HTML5.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[Vanilla.js]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Vanilla-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Lucide.com]: https://img.shields.io/badge/Lucide_Icons-F472B6?style=for-the-badge&logo=lucide&logoColor=white
[Lucide-url]: https://lucide.dev/
