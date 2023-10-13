// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';

// Then register the languages you need
hljs.registerLanguage('css', css);
hljs.highlightAll();