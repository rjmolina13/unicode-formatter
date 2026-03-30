const fonts = {
  normal: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
  sans: "\"\\ !#$%&'()*+,-./𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫:;<=>?@𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹[]^_`𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓{|}~",
  sansBold: "\"\\ !#$%&'()*+,-./𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵:;<=>?@𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭[]^_`𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇{|}~",
  sansItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡[]^_`𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻{|}~",
  sansBoldItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕[]^_`𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢ന𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯{|}~",
  monospace: "\"\\ !#$%&'()*+,-./𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿:;<=>?@𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉[]^_`𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣{|}~",
  fullwidth: "\"＼　！＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；<＝>？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～",
  fraktur: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ[]^_`𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷{|}~",
  boldFraktur: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅[]^_`𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟{|}~",
  serifBold: "\"\\ !#$%&'()*+,-./𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗:;<=>?@𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙[]^_`𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳{|}~",
  serifItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍[]^_`𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧{|}~",
  serifBoldItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁[]^_`𝒂𝒃𝒄𝒅𝒆𝑓𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛{|}~",
  doubleStruck: "\"\\ !#$%&'()*+,-./𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡:;<=>?@𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ[]^_`𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫{|}~",
  script: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵[]^_`𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏{|}~",
  boldScript: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩[]^_`𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃{|}~",
  circled: "\"⦸ !#$%&'()⊛⊕,⊖⨀⊘⓪①②③④⑤⑥⑦⑧⑨:;⧀⊜⧁?@ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ[]^_`ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ{⦶}~",
  circledNegative: "\"\\ !#$%&'()*+,-./⓿❶❷❸❹❺❻❼❽❾:;<=>?@🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩[]^_`🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩{|}~",
  squared: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉[]^_`🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉{|}~",
  squaredNegative: "\"⧅ !#$%&'()⧆⊞,⊟⊡⧄0123456789:;<=>?@🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉[]^_`🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉{|}~",
  parenthesized: "\"\\ !#$%&'()*+,-./0⑴⑵⑶⑷⑸⑹⑺⑻⑼:;<=>?@⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵[]^_`⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵{|}~",
  smallCaps: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩꞯʀꜱᴛᴜᴠᴡxʏᴢ{|}~",
  subscript: "\"\\ !#$%&'₍₎*₊,₋./₀₁₂₃₄₅₆₇₈₉:;<₌>?@ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘ🇶ʀꜱᴛᴜᴠᴡxʏᴢ[]^_`ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏{|}~",
  superscript: "\"\\ !#$%&'⁽⁾*⁺,⁻./⁰¹²³⁴⁵⁶⁷⁸⁹:;<⁼>?@ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ[]^_`ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ{|}~",
  inverted: "„\\ ¡#$%⅋,)(*+‘-˙/0ƖՇƐᔭϛ9𝘓86:;<=>¿@∀ꓭↃꓷƎℲ⅁HIſꓘ⅂WNOԀῸꓤS⊥∩ꓥMX⅄Z][^‾`ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz}|{~",
  mirrored: "\"/ !#$%&')(*+,-.\\0߁ςƐ߂टმ٢8୧:;<=>⸮@AꓭↃꓷƎꟻӘHIႱꓘ⅃MИOꟼϘЯꙄTUVWXYZ][^_`ɒdↄbɘʇϱʜiįʞlmᴎoqpᴙꙅɈυvwxγz}|{~",
  rotatedLeft: "=/ !#$%&-⏝⏜*+`ǀ∙\\ⴰ↽വ𝈐ፓහமΓꝏᓂ⠒;˅𝄥∧ᣇ@ᗉߘ𝈱⌓ш𝈯ᘎ⌶𝄩⥟𝈎⨼∑Zⴰᓇⵚᓚᔕ⊢⊃𝈷ᕒ×⤚𝇙⎵⎴‹|`ơᓄ𝈱ᓀш𝈯თ𝈦𝄩ᓜ𝈎⨼ᗴ⊂ⴰᓇᓂᓚᔕ𝀏⊃𝈷З×⤚𝇙⏟_⏞ಽ",
  rotatedRight: "=/ !#$%&-⏜⏝*+`ǀ∙\\ⴰ⇀ᘚω𝈦හの⨼ꝏᓄ⠒;∧𝄥˅?@ᗆϖᴒᗜጠ╖ᘏ⌶𝄩ᓚ⌤⌐ᕒZⴰᓀᓄᓓᔕ⊣⊂<ᓬ×⤙𝇙⎴⎵›|`⌕ᓂᴒ௨ጠ╖மፓ𝄩ᓚ⌤⌐ᴟᴝⴰᓀᓄᓓᔕ𝀏⊂<ᓬ×⤙𝇙⏞_⏟ಽ"
};

const allCharacters = new Set(Object.values(fonts).join(""));

class UnicodeFormatter {
  constructor() {
    this.textarea = document.getElementById("myTextarea");
    this.charCount = document.getElementById("char-count");
    this.setupEventListeners();
    this.loadText();
    this.updateCharCount();
  }

  setupEventListeners() {
    // Buttons
    document.querySelectorAll(".font-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const font = btn.dataset.font;
        const options = {
          append: btn.dataset.append,
          clear: btn.dataset.clear === "true",
          reverse: btn.dataset.reverse === "true"
        };
        this.formatSelection(font, options);
      });
    });

    // Save on input
    this.textarea.addEventListener("input", () => {
      this.saveText();
      this.updateCharCount();
    });

    // Copy Button
    const copyBtn = document.getElementById("copyBtn");
    const copyTooltip = document.getElementById("copyTooltip");
    copyBtn.addEventListener("click", () => {
      this.copyText();
      copyTooltip.textContent = "Copied!";
      setTimeout(() => copyTooltip.textContent = "Copy to clipboard", 2000);
    });

    // Clear Button
    const clearBtn = document.getElementById("clearBtn");
    const clearTooltip = document.getElementById("clearTooltip");
    clearBtn.addEventListener("click", () => {
      this.clearText();
      clearTooltip.textContent = "Cleared!";
      setTimeout(() => clearTooltip.textContent = "Clear text", 2000);
    });

    // Keyboard Shortcuts
    document.addEventListener("keydown", (e) => this.handleShortcuts(e));
    
    // Update tooltips based on OS
    this.updateTooltipsForOS();
  }

  updateTooltipsForOS() {
    const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
    const cmdKey = isMac ? "Cmd" : "Ctrl";
    const optKey = isMac ? "Option" : "Alt";

    document.querySelectorAll(".font-btn span").forEach(span => {
      let text = span.innerHTML;
      if (text.includes("Cmd/Ctrl")) {
        text = text.replace(/Cmd\/Ctrl/g, cmdKey);
      }
      if (text.includes("Alt+K")) {
        text = text.replace("Alt+K", isMac ? "Cmd+K" : "Alt+K");
      }
      if (text.includes("Alt")) {
        text = text.replace(/Alt/g, optKey);
      }
      span.innerHTML = text;
    });
  }

  handleShortcuts(e) {
    if (document.activeElement !== this.textarea) return;

    // Use metaKey on macOS, ctrlKey on other platforms
    const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
    const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
    // We only want cmdOrCtrl to be true, and the OTHER one to be false
    const exactCmdOrCtrl = cmdOrCtrl && (isMac ? !e.ctrlKey : !e.metaKey);

    // Cmd/Ctrl-E (Eraser)
    if (exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "e") { 
      e.preventDefault(); 
      this.formatSelection("normal", { clear: true }); 
    }
    // Cmd/Ctrl-B (Bold)
    if (exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "b") { 
      e.preventDefault(); 
      this.formatSelection("sansBold"); 
    }
    // Cmd/Ctrl-Alt-B (Removed, replaced by Cmd/Ctrl-Shift-N below to avoid conflicts)
    // Cmd/Ctrl-I (Italic)
    if (exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "i") { 
      e.preventDefault(); 
      this.formatSelection("sansItalic"); 
    }
    // Cmd/Ctrl-M (Monospace)
    if (exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "m") { 
      e.preventDefault(); 
      this.formatSelection("monospace"); 
    }
    // Cmd/Ctrl-U (Underline)
    if (exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "u") { 
      e.preventDefault(); 
      this.formatSelection("", { append: "͟" }); 
    }
    // Alt-K (Windows/Linux) or Cmd-K (Mac) or Shift-Alt-5 (Strikethrough)
    const isStrikethroughMac = isMac && exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "k";
    const isStrikethroughWin = !isMac && e.altKey && !exactCmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === "k";
    const isStrikethroughAlt5 = e.altKey && e.shiftKey && !exactCmdOrCtrl && e.key === "%";
    
    if (isStrikethroughMac || isStrikethroughWin || isStrikethroughAlt5) { 
      e.preventDefault(); 
      this.formatSelection("", { append: "̶" }); 
    }
    // Shift-Cmd/Ctrl-= or Cmd/Ctrl-. (Superscript)
    if ((exactCmdOrCtrl && e.shiftKey && !e.altKey && (e.key === "+" || e.key === "=")) || 
        (exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key === ".")) { 
      e.preventDefault(); 
      this.formatSelection("superscript"); 
    }
    // Cmd/Ctrl-= or Cmd/Ctrl-, (Subscript)
    if ((exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key === "=") || 
        (exactCmdOrCtrl && !e.shiftKey && !e.altKey && e.key === ",")) { 
      e.preventDefault(); 
      this.formatSelection("subscript"); 
    }
    // Cmd/Ctrl-Shift-B (Sans Bold Italic)
    if (exactCmdOrCtrl && e.shiftKey && !e.altKey && e.key.toLowerCase() === "b") { 
      e.preventDefault(); 
      this.formatSelection("sansBoldItalic"); 
    }
    // Cmd/Ctrl-Shift-I (Serif Italic)
    if (exactCmdOrCtrl && e.shiftKey && !e.altKey && e.key.toLowerCase() === "i") { 
      e.preventDefault(); 
      this.formatSelection("serifItalic"); 
    }
    // Cmd/Ctrl-Shift-J (Serif Bold Italic - using J as it's next to I)
    if (exactCmdOrCtrl && e.shiftKey && !e.altKey && e.key.toLowerCase() === "j") { 
      e.preventDefault(); 
      this.formatSelection("serifBoldItalic"); 
    }
    // Cmd/Ctrl-Shift-N (Serif Bold - using N as it's near B)
    if (exactCmdOrCtrl && e.shiftKey && !e.altKey && e.key.toLowerCase() === "n") { 
      e.preventDefault(); 
      this.formatSelection("serifBold"); 
    }
  }

  saveText() {
    localStorage.setItem("formattedText", this.textarea.value);
  }

  loadText() {
    const text = localStorage.getItem("formattedText");
    if (text !== null) {
      this.textarea.value = text;
    }
  }

  updateCharCount() {
    this.charCount.textContent = this.textarea.value.length;
  }

  copyText() {
    this.textarea.select();
    document.execCommand("copy");
    // Deselect
    window.getSelection().removeAllRanges();
  }

  clearText() {
    this.textarea.value = "";
    this.saveText();
    this.updateCharCount();
  }

  alreadyFormatted(text, font) {
    if (!fonts[font]) return false;
    const fontCharacters = new Set(fonts[font]);
    return Array.from(text).every(char => fontCharacters.has(char) || !allCharacters.has(char));
  }

  alreadyAppended(text, append) {
    return Array.from(text).filter(char => char === append).length >= text.length / 2;
  }

  formatText(text, font, options = {}) {
    // If applying Monospace, strip out underline marks
    if (font === "monospace") {
      text = text.replace(/\u035f/gu, "");
    }
    
    // If applying Underline, switch Monospace chars back to Normal
    if (options.append === "͟") {
      if (this.alreadyFormatted(text, "monospace")) {
        text = this.formatText(text, "normal");
      } else {
        // More robust: convert any monospace chars back to normal individually
        // just in case it's a mixed string
        let tempText = Array.from(text);
        const monoFont = Array.from(fonts["monospace"]);
        const normFont = Array.from(fonts["normal"]);
        
        tempText = tempText.map(char => {
          const idx = monoFont.indexOf(char);
          return idx > -1 ? normFont[idx] : char;
        });
        text = tempText.join("");
      }
    }

    if (fonts[font] && this.alreadyFormatted(text, font)) {
      font = "normal";
    }

    if (options.append) {
      options.remove = options.append;
      options.append = !this.alreadyAppended(text, options.append) ? options.append : "";
    }

    let newText = Array.from(text);

    if (fonts[font]) {
      const targetFont = Array.from(fonts[font]);
      const charLists = Object.values(fonts).map(f => Array.from(f));
      
      newText = newText.map(char => {
        let index = -1;
        const found = charLists.some(charList => {
          index = charList.indexOf(char);
          return index > -1;
        });
        return found && targetFont[index] ? targetFont[index] : char;
      });
    }

    if (options.reverse) {
      newText = newText.reverse();
    }

    if (options.remove) {
      newText = newText.map(char => char.replace(new RegExp(options.remove + "$", "u"), ""));
    }

    if (options.append) {
      newText = newText.map(char => char + options.append);
    }

    if (options.clear) {
      // \u035f = Underline, \u0333 = Double Underline, \u0335 = Short Strikethrough, \u0336 = Strikethrough
      newText = newText.map(char => char.replace(/\u035f|\u0333|\u0335|\u0336/gu, ""));
    }

    return newText.join("");
  }

  formatSelection(font, options = {}) {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    
    if (start === end) return; // No selection

    const selectedText = this.textarea.value.substring(start, end);
    const formattedText = this.formatText(selectedText, font, options);

    this.textarea.setRangeText(formattedText, start, end, "select");
    
    this.saveText();
    this.updateCharCount();
    
    // Maintain focus
    this.textarea.focus();
  }
}

class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector("summary");
    this.content = el.querySelector("#more-controls");
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = "hidden";
    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;
    if (this.animation) {
      this.animation.cancel();
    }
    
    // Set opacity to 0 smoothly before shrinking
    this.content.style.opacity = "0";
    this.content.style.transition = "opacity 200ms ease-out";

    this.animation = this.el.animate(
      { height: [startHeight, endHeight] },
      { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
    );
    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => (this.isClosing = false);
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;
    
    // Make sure content is visible but transparent to calculate height correctly
    this.content.style.opacity = "0";
    this.content.style.transition = "none";
    
    const startHeight = `${this.el.offsetHeight}px`;
    // We need to calculate the actual height needed including margins
    const summaryStyle = window.getComputedStyle(this.summary);
    const contentStyle = window.getComputedStyle(this.content);
    const contentMarginTop = parseFloat(contentStyle.marginTop);
    const contentMarginBottom = parseFloat(contentStyle.marginBottom);
    
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight + contentMarginTop + contentMarginBottom}px`;
    
    if (this.animation) {
      this.animation.cancel();
    }
    
    this.animation = this.el.animate(
      { height: [startHeight, endHeight] },
      { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
    );
    
    // Fade in content while expanding
    setTimeout(() => {
      this.content.style.transition = "opacity 300ms ease-in";
      this.content.style.opacity = "1";
    }, 10);

    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => (this.isExpanding = false);
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = "";
    
    if (!open) {
      // Reset opacity when closed so it's ready for next open
      this.content.style.opacity = "1";
      this.content.style.transition = "none";
    }
  }
}

// Dark Mode setup
function setupTheme() {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
  function updateTheme(e) {
    if (e.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Initial setup
  updateTheme(darkModeMediaQuery);
  
  // Listen for changes
  darkModeMediaQuery.addEventListener("change", updateTheme);
}

// Init
window.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  new UnicodeFormatter();
  
  // Setup accordion animation
  document.querySelectorAll("details").forEach((el) => {
    new Accordion(el);
  });
});
