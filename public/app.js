"use strict";
// TS has no access to html, so the anchor might be null, thus anchor may
// not have the href, as developer, if you are certain, you can add a "!"
const anchor = document.querySelector('a');
console.log(anchor.href);
