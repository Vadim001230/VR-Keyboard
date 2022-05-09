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
    Backspace: 'backspace',
    Tab: 'tab',
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
    Enter: 'enter',
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
    ArrowUp: '▲',
    ShiftRight: 'Shift ',
    ControlLeft: 'Ctrl',
    MetaLeft: 'win',
    AltLeft: 'Alt',
    Space: 'space',
    AltRight: 'Alt',
    ControlRight: 'Ctrl',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
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
    this.color = 'rgba(22, 136, 240, 0.7)';
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
      key.append(keyboardText);
      if (value === 'Del' || value === 'enter' || value === 'backspace' || value === 'tab') {
        keyboardText.textContent = value.slice(0, 1).toUpperCase() + value.slice(1);
      } else {
        keyboardText.textContent = value;
      }
      if (value === 'backspace' || value === 'CapsLock' || value === 'Shift') {
        key.style.flexBasis = `${13}%`;
        key.style.maxWidth = `${10}rem`;
        key.style.background = this.color;
      } else if (value === 'enter') {
        key.style.flexBasis = `${11}%`;
        key.style.maxWidth = `${7}rem`;
        key.style.background = this.color;
      } else if (value === 'space') {
        key.style.flexGrow = 1;
        key.style.maxWidth = `${37}%`;
        key.textContent = '';
      } else if (value === 'Ctrl') {
        key.style.flexBasis = `${8}%`;
        key.style.maxWidth = `${5}rem`;
        key.style.background = this.color;
      } else if (value === 'arrowup') {
        keyboardText.textContent = '';
        key.classList.add('arrow__up', 'arrow');
      } else if (value === 'arrowdown') {
        keyboardText.textContent = '';
        key.classList.add('arrow__down', 'arrow');
      } else if (value === 'arrowleft') {
        keyboardText.textContent = '';
        key.classList.add('arrow__left', 'arrow');
      } else if (value === 'arrowright') {
        keyboardText.textContent = '';
        key.classList.add('arrow__right', 'arrow');
      } else if (
        value === '`'
        || value === 'tab'
        || value === 'win'
        || value === 'Alt'
        || value === 'Del'
        || value === 'Shift '
      ) {
        key.style.background = this.color;
      }
      this.keys.append(key);
      for (const [key2, value2] of Object.entries(alterKeys.en)) {
        if (key2 === key1) {
          const auxText = document.createElement('span');
          auxText.classList.add('keyboard__key-alter');
          key.classList.add('keyboard__key-special');
          auxText.textContent = value2;
          key.append(auxText);
        }
      }
    }
    return this.keys;
  }
}

const container = new Keyboard();
container.createContainer();
