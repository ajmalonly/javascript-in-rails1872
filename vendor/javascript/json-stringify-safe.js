// json-stringify-safe@5.0.1 downloaded from https://ga.jspm.io/npm:json-stringify-safe@5.0.1/stringify.js

var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var e={};e=e=stringify;e.getSerialize=serializer;function stringify(i,e,r,l){return JSON.stringify(i,serializer(e,l),r)}function serializer(e,r){var l=[],n=[];null==r&&(r=function(i,e){return l[0]===e?"[Circular ~]":"[Circular ~."+n.slice(0,l.indexOf(e)).join(".")+"]"});return function(t,s){if(l.length>0){var f=l.indexOf(this||i);~f?l.splice(f+1):l.push(this||i);~f?n.splice(f,Infinity,t):n.push(t);~l.indexOf(s)&&(s=r.call(this||i,t,s))}else l.push(s);return null==e?s:e.call(this||i,t,s)}}var r=e;const l=e.getSerialize;export default r;export{l as getSerialize};

