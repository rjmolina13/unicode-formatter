document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('.footer');
    var tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = footer.getAttribute('title');
    document.body.appendChild(tooltip); // Append tooltip to the body

    footer.addEventListener('click', function() {
        tooltip.classList.toggle('active');
    });
});

let formatter = {
  // prettier-ignore
  fonts: {
      normal: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~"
      , sans: "\"\\ !#$%&'()*+,-./𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫:;<=>?@𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹[]^_`𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓{|}~"
      , sansBold: "\"\\ !#$%&'()*+,-./𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵:;<=>?@𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭[]^_`𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇{|}~"
      , sansItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡[]^_`𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻{|}~"
      , sansBoldItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕[]^_`𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯{|}~"
      , monospace: "\"\\ !#$%&'()*+,-./𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿:;<=>?@𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉[]^_`𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣{|}~"
      , fullwidth: "\"＼　！＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；<＝>？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～"
      , fraktur: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ[]^_`𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷{|}~"
      , boldFraktur: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅[]^_`𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟{|}~"
      , serifBold: "\"\\ !#$%&'()*+,-./𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗:;<=>?@𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙[]^_`𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳{|}~"
      , serifItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍[]^_`𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧{|}~"
      , serifBoldItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁[]^_`𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛{|}~"
      , doubleStruck: "\"\\ !#$%&'()*+,-./𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡:;<=>?@𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ[]^_`𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫{|}~"
      , script: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵[]^_`𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏{|}~"
      , boldScript: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩[]^_`𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃{|}~"
      , circled: "\"⦸ !#$%&'()⊛⊕,⊖⨀⊘⓪①②③④⑤⑥⑦⑧⑨:;⧀⊜⧁?@ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ[]^_`ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ{⦶}~"
      , circledNegative: "\"\\ !#$%&'()*+,-./⓿❶❷❸❹❺❻❼❽❾:;<=>?@🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩[]^_`🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩{|}~"
      , squared: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉[]^_`🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉{|}~"
      , squaredNegative: "\"⧅ !#$%&'()⧆⊞,⊟⊡⧄0123456789:;<=>?@🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉[]^_`🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉{|}~"
      , parenthesized: "\"\\ !#$%&'()*+,-./0⑴⑵⑶⑷⑸⑹⑺⑻⑼:;<=>?@⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵[]^_`⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵{|}~"
      , smallCaps: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩꞯʀꜱᴛᴜᴠᴡxʏᴢ{|}~"
      , subscript: "\"\\ !#$%&'₍₎*₊,₋./₀₁₂₃₄₅₆₇₈₉:;<₌>?@ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘ🇶ʀꜱᴛᴜᴠᴡxʏᴢ[]^_`ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏{|}~"
      , superscript: "\"\\ !#$%&'⁽⁾*⁺,⁻./⁰¹²³⁴⁵⁶⁷⁸⁹:;<⁼>?@ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ[]^_`ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ{|}~"
      , inverted: "„\\ ¡#$%⅋,)(*+‘-˙/0ƖՇƐᔭϛ9𝘓86:;<=>¿@∀ꓭↃꓷƎℲ⅁HIſꓘ⅂WNOԀῸꓤS⊥∩ꓥMX⅄Z][^‾`ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz}|{~"
      , mirrored: "\"/ !#$%&')(*+,-.\\0߁ςƐ߂टმ٢8୧:;<=>⸮@AꓭↃꓷƎꟻӘHIႱꓘ⅃MИOꟼϘЯꙄTUVWXYZ][^_`ɒdↄbɘʇϱʜiįʞlmᴎoqpᴙꙅɈυvwxγz}|{~"
      , rotatedLeft: "=/ !#$%&-⏝⏜*+`ǀ∙\\ⴰ↽വ𝈐ፓහமΓꝏᓂ⠒;˅𝄥∧ᣇ@ᗉߘ𝈱⌓ш𝈯ᘎ⌶𝄩⥟𝈎⨼∑Zⴰᓇⵚᓚᔕ⊢⊃𝈷ᕒ×⤚𝇙⎵⎴‹|`ơᓄ𝈱ᓀш𝈯თ𝈦𝄩ᓜ𝈎⨼ᗴ⊂ⴰᓇᓂᓚᔕ𝀏⊃𝈷З×⤚𝇙⏟_⏞ಽ"
      , rotatedRight: "=/ !#$%&-⏜⏝*+`ǀ∙\\ⴰ⇀ᘚω𝈦හの⨼ꝏᓄ⠒;∧𝄥˅?@ᗆϖᴒᗜጠ╖ᘏ⌶𝄩ᓚ⌤⌐ᕒZⴰᓀᓄᓓᔕ⊣⊂<ᓬ×⤙𝇙⎴⎵›|`⌕ᓂᴒ௨ጠ╖மፓ𝄩ᓚ⌤⌐ᴟᴝⴰᓀᓄᓓᔕ𝀏⊂<ᓬ×⤙𝇙⏞_⏟ಽ"
  , },
  // initialize formatter with CodeMirror
  init: function(textarea) {
      // no code highlighting and wrap long lines
      this.CodeMirror = CodeMirror.fromTextArea(textarea, {
          mode: null
          , lineWrapping: true
      , });
      // list of font characters for checking if character is formatted
      this.allCharacters = new Set(Object.values(this.fonts).join(""));
      // Add an event listener to save text when the text area content changes
      this.CodeMirror.on("change", () => {
          this.saveText(); // Add this line to save text to localStorage
      });
      // Function to save text to browser's localStorage
      this.saveText = function() {
          const text = this.CodeMirror.getValue();
          localStorage.setItem('formattedText', text);
      };
      // Function to load text from browser's localStorage
      this.loadText = function() {
          const text = localStorage.getItem('formattedText');
          if (text) {
              this.CodeMirror.setValue(text);
          }
      };
      // Load text from localStorage when initializing
      this.loadText(); // Add this line to load text from localStorage
      // mapping functions
      const eraser = () => this.formatSelections("normal");
      const bold = () => this.formatSelections("sansBold");
      const bolditalic = () => this.formatSelections("sansBoldItalic");
      const serfsital = () => this.formatSelections("serifItalic");
      const serfsbold = () => this.formatSelections("serifBold");
      const sbolditalic = () => this.formatSelections("serifBoldItalic");
      const italic = () => this.formatSelections("sansItalic");
      const monospace = () => this.formatSelections("monospace");
      const strikethrough = () =>
          this.formatSelections("", {
              append: "̶"
          , });
      const underline = () =>
          this.formatSelections("", {
              append: "͟"
          , });
      const superscript = () => this.formatSelections("superscript");
      const subscript = () => this.formatSelections("subscript");
      document.addEventListener("keydown", function(e) {
          if (e.ctrlKey && e.shiftKey && "B" === e.key) {
              e.preventDefault(), bolditalic()
          }
      });
      document.addEventListener("keydown", function(e) {
          if (e.ctrlKey && e.shiftKey && "I" === e.key) {
              e.preventDefault(), serfsital()
          }
      });
      document.addEventListener("keydown", function(e) {
          if (e.ctrlKey && e.altKey && "B" === e.key) {
              e.preventDefault(), serfsbold()
          }
      });
      document.addEventListener("keydown", function(e) {
          if (e.ctrlKey && e.shiftKey && e.altKey && "B" === e.key) {
              e.preventDefault(), sbolditalic()
          }
      });
      document.addEventListener("keydown", function(e) {
          if (e.ctrlKey && e.shiftKey && e.altKey && "I" === e.key) {
              e.preventDefault(), sbolditalic()
          }
      });
      // add keymaps
      this.CodeMirror.setOption("extraKeys", {
          "Ctrl-E": eraser
          , "Ctrl-B": bold
          , "Ctrl-Alt-B": serfsbold
          , "Ctrl-I": italic
          , "Ctrl-M": monospace
          , "Ctrl-U": underline
          , "Alt-K": strikethrough
          , "Shift-Alt-5": strikethrough
          , "Shift-Ctrl-=": superscript
          , "Ctrl-.": superscript
          , "Ctrl-=": subscript
          , "Ctrl-,": subscript
      , });

      
  },

  
  // check if text is already formatted with a certain font
  alreadyFormatted: function(text, font) {
      const fontCharacters = new Set(this.fonts[font]);
      // flag as already formatted if all characters are in font or not in any other font
      return Array.from(text).every((char) => fontCharacters.has(char) || !this.allCharacters.has(char));
  },
  // check if text is already formatted with a certain font
  alreadyAppended: function(text, append) {
      // check if at least half the characters are the append character
      return Array.from(text).filter((char) => char == append).length >= text.length / 2;
  },
  // format text into selected font
  formatText: function(text, font, options) {
      // set font to normal if already formatted with selected font
      if (this.fonts[font] && this.alreadyFormatted(text, font)) {
          font = "normal";
      }
      // remove and don't append if character is already appended
      if (options?.append) {
          options.remove = options.append;
          options.append = !this.alreadyAppended(text, options.append) ? options.append : "";
      }
      // Array.from() splits the string by symbol and not by code points
      let newText = Array.from(text);
      // exchange font symbols
      if (this.fonts[font]) {
          const targetFont = Array.from(this.fonts[font]);
          const charLists = Object.values(this.fonts);
          // map characters to new font
          newText = newText.map((char) => {
              let index;
              // find the index of the character in some font
              const found = charLists.some((charList) => {
                  index = Array.from(charList).indexOf(char);
                  return index > -1;
              });
              // if found, replace with the corresponding character in the target font
              // if not found, keep the character the same
              return found ? targetFont[index] : char;
          });
      }
      // reverse text if reverse option is set
      newText = options?.reverse ? newText.reverse() : newText;
      // remove appended symbol of specific type from the end
      newText = options?.remove ?
          newText.map((char) => char.replace(new RegExp(options.remove + "$", "u"), "")) :
          newText;
      // append symbol (underline, strikethrough, etc.) to end of each character if append is set
      newText = options?.append ? newText.map((char) => char + options.append) : newText;
      // remove appended symbols (underline, strikethrough, etc.) if using eraser
      // \u035f = Underline, \u0333 = Double Underline, \u0335 = Short Strikethrough \u0336 = Strikethrough
      newText = options?.clear ? newText.map((char) => char.replace(/\u035f|\u0333|\u0335|\u0336/gu, "")) : newText;
      // set textarea content and select text around the replacement
      return newText.join("");
  },
  // format selected text
  formatSelections: function(font, options) {
      // for each selection (there can be multiple), format the text
      const newTexts = this.CodeMirror.getSelections().map((selection) => this.formatText(selection, font, options));
      // replace all selections with replacements
      this.CodeMirror.replaceSelections(newTexts, "around");
  },
  // clears the text on screen
  cleartext: function() {
      // create dummy textarea with text content
      const textarea = document.createElement("textarea");
      textarea.value = this.CodeMirror.getValue();
      document.body.appendChild(textarea);
      // select all
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      // clear the text
      this.CodeMirror.setValue("");
      // remove textarea
      textarea.parentElement.removeChild(textarea);
      // set tooltip text to "Cleared!"
      const el = document.querySelector('.clear-button');
      el.title = "Cleared!";
      // reset tooltip after 2 seconds
      setTimeout(() => {
          el.title = "Clear";
      }, 200000000);
  },
  // copy the text to the clipboard
  copy: function(el) {
      // create dummy textarea with text content
      const textarea = document.createElement("textarea");
      textarea.value = this.CodeMirror.getValue();
      document.body.appendChild(textarea);
      // select all
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      // copy
      document.execCommand("copy");
      // remove textarea
      textarea.parentElement.removeChild(textarea);
      // set tooltip text
      el.title = "Copied!";
  }
, };
let tooltip = {
  // put the original title back (eg. "Copied!" => "Copy to clipboard")
  resetTooltip: function(el) {
      el.title = el.dataset.originalTitle;
  }
, };
// when the page loads
window.addEventListener(
  "load",
  function() {
      // textarea for initializing CodeMirror
      const textarea = document.querySelector("textarea");
      // initialize formatter
      formatter.init(textarea);
      // add click event listeners to format buttons
      document.querySelectorAll(".control-btns button").forEach(function(btn) {
          btn.addEventListener(
              "click",
              function() {
                  // format highlighted text into selected font
                  formatter.formatSelections(this.className, {
                      ...this.dataset
                  });
              },
              false
          );
      });

      // Function to update character count
      function updateCharacterCount() {
        const charCount = document.getElementById("char-count");
        const text = formatter.CodeMirror.getValue();
        charCount.textContent = text.length;
      }

      // Add event listener for input events on the textarea
      formatter.CodeMirror.on("change", updateCharacterCount);
      formatter.CodeMirror.on("keyup", updateCharacterCount); // Add this line

      // Initial call to update character count on page load
      updateCharacterCount();



      // set dark mode on preference, function to handle the change in system color scheme preference
      function handleColorSchemeChange(event) {
        if (event.matches) {
            document.body.setAttribute("data-theme", "dark");
        } else {
            document.body.removeAttribute("data-theme");
        }
    }
    
      // add event listener for changes in system color scheme preference
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      darkModeMediaQuery.addEventListener("change", handleColorSchemeChange);
      // set initial theme based on system color scheme preference
      if (darkModeMediaQuery.matches) {
          document.body.setAttribute("data-theme", "dark");
      }
  },
  false
  
);