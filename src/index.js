// Init Keys
const keys = {
  en: {
    Backquote: '`',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'q',
    KeyW: 'w',
    KeyE: 'e',
    KeyR: 'r',
    KeyT: 't',
    KeyY: 'y',
    KeyU: 'u',
    KeyI: 'i',
    KeyO: 'o',
    KeyP: 'p',
    BracketLeft: '[',
    BracketRight: ']',
    Backslash: '\\',
    Delete: 'Del',
    CapsLock: 'CapsLock',
    KeyA: 'a',
    KeyS: 's',
    KeyD: 'd',
    KeyF: 'f',
    KeyG: 'g',
    KeyH: 'h',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    Semicolon: ';',
    Quote: "'",
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'z',
    KeyX: 'x',
    KeyC: 'c',
    KeyV: 'v',
    KeyB: 'b',
    KeyN: 'n',
    KeyM: 'm',
    Comma: ',',
    Dot: '.',
    Slash: '/',
    ArrowUp: 'ArrowUp',
    ShiftRight: 'ShiftRight',
    ControlLeft: 'Ctrl',
    MetaLeft: 'win',
    AltLeft: 'Alt',
    Space: 'space',
    AltRight: 'Alt',
    ControlRight: 'Ctrl',
    ArrowLeft: 'ArrowLeft',
    ArrowDown: 'ArrowDown',
    ArrowRight: 'ArrowRight',
  },

  ru: {
    Backquote: 'ё',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    KeyQ: 'й',
    KeyW: 'ц',
    KeyE: 'у',
    KeyR: 'к',
    KeyT: 'е',
    KeyY: 'н',
    KeyU: 'г',
    KeyI: 'ш',
    KeyO: 'щ',
    KeyP: 'з',
    BracketLeft: 'х',
    BracketRight: 'ъ',
    Backslash: '\\',
    KeyA: 'ф',
    KeyS: 'ы',
    KeyD: 'в',
    KeyF: 'а',
    KeyG: 'п',
    KeyH: 'р',
    KeyJ: 'о',
    KeyK: 'л',
    KeyL: 'д',
    Semicolon: 'ж',
    Quote: 'э',
    KeyZ: 'я',
    KeyX: 'ч',
    KeyC: 'с',
    KeyV: 'м',
    KeyB: 'и',
    KeyN: 'т',
    KeyM: 'ь',
    Comma: 'б',
    Dot: 'ю',
    Slash: '.',
  },
};

const alterKeys = {
  en: {
    Backquote: '~',
    Digit1: '!',
    Digit2: '@',
    Digit3: '#',
    Digit4: '$',
    Digit5: '%',
    Digit6: '^',
    Digit7: '&',
    Digit8: '*',
    Digit9: '(',
    Digit0: ')',
    Minus: '_',
    Equal: '+',
    BracketLeft: '{',
    BracketRight: '}',
    Backslash: '|',
    Semicolon: ':',
    Quote: '"',
    Comma: '<',
    Dot: '>',
    Slash: '?',
  },

  ru: {
    Backquote: 'Ё',
    Digit1: '!',
    Digit2: '"',
    Digit3: '№',
    Digit4: ';',
    Digit5: '%',
    Digit6: ':',
    Digit7: '?',
    Digit8: '*',
    Digit9: '(',
    Digit0: ')',
    Minus: '_',
    Equal: '+',
    BracketLeft: 'Х',
    BracketRight: 'Ъ',
    Backslash: '/',
    Semicolon: 'Ж',
    Quote: 'Э',
    Comma: 'Б',
    Dot: 'Ю',
    Slash: ',',
  },
};

const specialKeys = {
  specialKey: [
    'Tab',
    'CapsLock',
    'ShiftLeft',
    'ShiftRight',
    'MetaLeft',
    'AltLeft',
    'AltRight',
    'Space',
    'ControlLeft',
    'ControlRight',
    'Enter',
    'Delete',
    'Backspace',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
  ],
};

//Class keyboard

class Keyboard {
  constructor() {
    this.keys;
  }

  createContainer() {
  //header
    const header = document.createElement('header');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.classList.add('header__title');
    title.textContent = 'Virtual Keyboard';
    header.append(title);
    document.body.prepend(header);

    //main
    const container = document.createElement('main');
    container.classList.add('container');
    header.after(container);

    const content = document.createElement('div');
    content.classList.add('content');
    container.append(content);

    const keyboard = document.createElement('div');
	keyboard.classList.add('content__keyboard');

    const textarea = document.createElement('textarea');
    textarea.classList.add('content__area');

    const info = document.createElement('div');
    info.classList.add('content__info');
	
    const windows = document.createElement('p');
	windows.textContent = 'Клавиатура создана в операционной системе Windows';
    
    //Lang
    const language = document.createElement('div');
    language.classList.add('lang');
    const languageComb = document.createElement('h2');
    languageComb.textContent = 'Для переключения языка комбинация: Ctrl + Alt:';
    const languageSelect = document.createElement('span');
    languageSelect.classList.add('lang__select');
    languageSelect.textContent = 'en';

    info.append(windows, language);
    language.append(languageComb, languageSelect);
    content.append(textarea, keyboard, info);
    this.keys = document.createElement('div');
    this.keys.classList.add('keyboard__keys');
    keyboard.append(this.createKeys(keys.en));
  }

  createKeys(obj) {
    for (const [key1, value] of Object.entries(obj)) {
      const key = document.createElement('button');
      key.classList.add('keyboard__key');
      key.setAttribute('data-keyCode', `${key1}`);
      const keyboardText = document.createElement('span');
      keyboardText.classList.add('keyboard__key-start');
      keyboardText.textContent = value;
      key.append(keyboardText);
      
      if (value === 'Enter' || value === 'Shift') {
        key.style.flexBasis = '14%';
        key.style.maxWidth = '40%';
        key.classList.add('keyboard__key-blue');
      } else if (value === 'space') {
        key.style.flexGrow = 1;
        key.style.maxWidth = '36%';
        key.textContent = '';
      } else if (value === 'Backspace' || value === 'CapsLock') {
        key.style.flexBasis = '10%';
        key.style.maxWidth = '100px';
        key.classList.add('keyboard__key-blue');
      } else if (value === 'Ctrl') {
        key.style.flexBasis = '12%';
        key.style.maxWidth = '80px';
        key.classList.add('keyboard__key-blue');
      } else if (value === 'ShiftRight') {
        keyboardText.textContent = 'Shift';
        key.classList.add('keyboard__key-blue');
      } else if (value === 'ArrowUp') {
        keyboardText.textContent = '▲';
        key.classList.add('keyboard__key-blue');
      } else if (value === 'ArrowDown') {
        keyboardText.textContent = '▼';
		key.classList.add('keyboard__key-blue');
      } else if (value === 'ArrowLeft') {
        keyboardText.textContent = '◄';
		key.classList.add('keyboard__key-blue');
      } else if (value === 'ArrowRight') {
        keyboardText.textContent = '►';
		key.classList.add('keyboard__key-blue');
      } else if (value === '`' || value === 'Tab' || value === 'Del' || value === 'win' || value === 'Alt') {
        key.classList.add('keyboard__key-blue');
      }
      this.keys.append(key);

      for (const [key2, value2] of Object.entries(alterKeys.en)) {
        if (key2 === key1) {
          const aletrText = document.createElement('span');
          aletrText.classList.add('keyboard__key-alter');
          key.classList.add('keyboard__key-special');
          aletrText.textContent = value2;
          key.append(aletrText);
        }
      }
    }
    return this.keys;
  }
}

const container = new Keyboard();
container.createContainer();

//var
const btns = document.querySelectorAll('.keyboard__key');
const btnSpecial = document.querySelectorAll('.keyboard__key-special > .keyboard__key-start');
const btnAlters = document.querySelectorAll('.keyboard__key-alter');
const textArea = document.querySelector('.content__area');
const langSelect = document.querySelector('.lang__select');
const btnCaps = document.querySelector('.keyboard__key[data-keycode="CapsLock"');
const btnShiftLeft = document.querySelector('.keyboard__key[data-keycode="ShiftLeft"');
const btnShiftRight = document.querySelector('.keyboard__key[data-keycode="ShiftRight"');
const keyboard = document.querySelector('.content__keyboard');
let flag = false;
let flagCaps = false;
let lang = 'en';

//Lang
const changeLanguage = (objStart, objAlter) => {
  const dataAtrib = document.querySelectorAll('[data-keycode]');

  dataAtrib.forEach((el) => {
    const dataValue = el.dataset.keycode;
    const valueDataSpecial = el.classList.contains('keyboard__key-special');
    if (specialKeys.specialKey.includes(dataValue)) {
    //empty
    } else {
      if (valueDataSpecial === true) {
        el.children[1].textContent = objAlter[dataValue].toString();
      }
      el.children[0].textContent = objStart[dataValue].toString();
    }
  });
};


//Textarea
const writeArea = (item, obj, obj2) => {
  let cursorPos = textArea.selectionStart;
  const start = textArea.value.slice(0, cursorPos);
  const end = textArea.value.slice(cursorPos);
  let value;
  const elementVal = item.dataset.keycode;

   if (item.dataset.keycode === 'Tab') {
    textArea.value = `${start}    ${end}`;
    cursorPos += 4;
  } else if (item.dataset.keycode === 'Space') {
    textArea.value = `${start}  ${end}`;
    cursorPos += 2;
  } else if (item.dataset.keycode === 'Backspace') {
    textArea.value = textArea.value.slice(0, cursorPos - 1) + end;
    cursorPos -= 1;
  } else if (item.dataset.keycode === 'Delete') {
    textArea.value = start + textArea.value.slice(cursorPos + 1);
  } else if (item.dataset.keycode === 'Enter') {
    textArea.value = `${start}\n${end}`;
    cursorPos += 1;
  } else if (item.dataset.keycode === 'ArrowLeft') {
    textArea.focus();
    cursorPos -= 1;
  } else if (item.dataset.keycode === 'ArrowRight') {
    textArea.focus();
    cursorPos += 1;
  } else if (item.dataset.keycode === 'ArrowUp') {
    textArea.focus();
    const before = textArea.value.substring(0, cursorPos).split('\n');
    if (before.length === 1 || before[before.length - 1].length >= 75) {
      cursorPos -= 75;
    } else if (
      before[before.length - 1].length
      <= before[before.length - 2].length % 75
    ) {
      cursorPos -= (before[before.length - 2].length % 75) + 1;
    } else {
      cursorPos -= before[before.length - 1].length + 1;
    }
    if (cursorPos < 0) return;
  } 

  if (btnCaps.classList.contains('active')
   && !specialKeys.specialKey.includes(elementVal)) {
    if (btnShiftLeft.classList.contains('active') 
      || btnShiftRight.classList.contains('active')) {
      value = obj[elementVal].toLowerCase();
    } else {
      value = obj[elementVal].toUpperCase();
    }
  } else if (!btnCaps.classList.contains('active')
    && !specialKeys.specialKey.includes(elementVal)) {
    if (btnShiftLeft.classList.contains('active')
      || btnShiftRight.classList.contains('active')
    ) {
      value = obj[elementVal].toUpperCase();
    } else {
      value = obj[elementVal].toLowerCase();
    }
  }

  if (elementVal === item.dataset.keycode
    && !specialKeys.specialKey.includes(elementVal)
  ) {
    if (btnShiftLeft.classList.contains('active')
      || btnShiftRight.classList.contains('active')
    ) {
      if (item.classList.contains('keyboard__key-special')
        && btnCaps.classList.contains('active')) {
        value = obj2[elementVal].toLowerCase();
      } else if (item.classList.contains('keyboard__key-special')
        && !btnCaps.classList.contains('active')) {
        value = obj2[elementVal];
      }
    }
    textArea.value = `${start}${value}${end}`;
    cursorPos += 1;
  }
  textArea.setSelectionRange(cursorPos, cursorPos);
};

//keyboard click

const eventKeyAdd = (event, eventCode) => {
  btns.forEach((el) => {
    if (eventCode === el.dataset.keycode && eventCode === 'CapsLock') {
      if (event.repeat) return;
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      } else {
        el.classList.add('active');
      }
    }
    if (eventCode === el.dataset.keycode && eventCode !== 'CapsLock') {
      event.preventDefault();
      el.classList.add('active');
      if (flag) {
        writeArea(el, keys.ru, alterKeys.ru);
      } else {
        writeArea(el, keys.en, alterKeys.en);
      }
    }
  });
  if (event.altKey && event.ctrlKey && !flag) {
    changeLanguage(keys.ru, alterKeys.ru);
    flag = true;
    lang = 'ru';
    langSelect.textContent = lang;
    setLocalStorage();
  } else if (event.altKey && event.ctrlKey) {
    changeLanguage(keys.en, alterKeys.en);
    flag = false;
    lang = 'en';
    langSelect.textContent = lang;
    setLocalStorage();
  }
  if (eventCode === 'CapsLock' && !flagCaps) {
    btns.forEach((el) => {
      const valueDataSpecial = el.classList.contains('keyboard__key-special');
      if (event.repeat) return;
      if (!specialKeys.specialKey.includes(el.dataset.keycode)) {
        el.children[0].classList.add('up__special');
      }
      if (valueDataSpecial === true) {
        el.children[1].classList.add('up__special');
      }
    });
    flagCaps = true;
  } else if (eventCode === 'CapsLock') {
    btns.forEach((el) => {
      const valueDataSpecial = el.classList.contains('keyboard__key-special');
      if (event.repeat) return;
      if (!specialKeys.specialKey.includes(el.dataset.keycode)) {
        el.children[0].classList.remove('up__special');
      }
      if (valueDataSpecial === true) {
        el.children[1].classList.remove('up__special');
      }
    });
    flagCaps = false;
  }
  if (
    btnShiftLeft.classList.contains('active')
    || btnShiftRight.classList.contains('active')
  ) {
    btnSpecial.forEach((el) => {
      if (!btnCaps.classList.contains('active')) {
        /* empty */
      } else {
        el.classList.add('up__special');
      }
      el.classList.add('active-special');
    });
    btnAlters.forEach((el) => {
      if (!btnCaps.classList.contains('active')) {
        /* empty */
      } else {
        el.classList.add('up__special');
      }
      el.classList.add('active-special');
    });
    btns.forEach((el) => {
      if (!specialKeys.specialKey.includes(el.dataset.keycode)
        && !btnCaps.classList.contains('active')
      ) {
        el.classList.add('active-up');
      }
    });
  }
  if (btnCaps.classList.contains('active')) {
    if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') {
      btns.forEach((el) => {
        if (
          !specialKeys.specialKey.includes(el.dataset.keycode)
          && !el.classList.contains('keyboard__key-special')
        ) {
          el.children[0].classList.remove('up__special');
        }
      });
    }
  }
};

const eventKeyRemove = (eventCode) => {
  btns.forEach((el) => {
    if (eventCode === el.dataset.keycode && eventCode !== 'CapsLock') {
      el.classList.remove('active');
    }
  });
  if (
    btnShiftLeft.classList.contains('active')
    || btnShiftRight.classList.contains('active')
  ) {
    /* empty */
  } else {
    btnSpecial.forEach((el) => el.classList.remove('active-special'));
    btnAlters.forEach((el) => el.classList.remove('active-special'));
    btns.forEach((el) => el.classList.remove('active-up'));
  }
  if (btnCaps.classList.contains('active')) {
    if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') {
      btns.forEach((el) => {
        if (!specialKeys.specialKey.includes(el.dataset.keycode)) {
          el.children[0].classList.add('up__special');
        }
      });
    }
  }
};

document.addEventListener('keydown', (event) => {
  eventKeyAdd(event, event.code);
});
document.addEventListener('keyup', (event) => {
  eventKeyRemove(event.code);
});
keyboard.addEventListener('click', (event) => {
  textArea.focus();
  const item = event.target.closest('.keyboard__key');
  if (!item) return;
  if (!keyboard.contains(item)) return;
  eventKeyAdd(event, item.dataset.keycode);
});
keyboard.addEventListener('click', (event) => {
  textArea.focus();
  const item = event.target.closest('.keyboard__key');
  if (!item) return;
  if (!keyboard.contains(item)) return;
  eventKeyRemove(item.dataset.keycode);
});
langSelect.addEventListener('click', () => {
  if (flag === false) {
    changeLanguage(keys.ru, alterKeys.ru);
    flag = true;
    lang = 'ru';
    langSelect.textContent = lang;
    setLocalStorage();
  } else {
    changeLanguage(keys.en, alterKeys.en);
    flag = false;
    lang = 'en';
    langSelect.textContent = lang;
    setLocalStorage();
  }
});

//Local storage
const setLocalStorage = () => {
  localStorage.setItem('lang', lang);
};
const getLocalStorage = () => {
  if (localStorage.getItem('lang') === null) {
    setLocalStorage();
  }
  if (localStorage.getItem('lang') === 'ru') {
    changeLanguage(keys.ru, alterKeys.ru);
    flag = true;
    langSelect.textContent = 'ru';
  }
};
window.addEventListener('load', getLocalStorage);