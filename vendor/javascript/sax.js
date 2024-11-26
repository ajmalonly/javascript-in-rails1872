// sax@1.4.1 downloaded from https://ga.jspm.io/npm:sax@1.4.1/lib/sax.js

import*as t from"stream";import*as e from"string_decoder";import a from"buffer";var i=t;try{"default"in t&&(i=t.default)}catch(t){}var r=e;try{"default"in e&&(r=e.default)}catch(t){}var s=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var n={};var o=a.Buffer;(function(t){t.parser=function(t,e){return new SAXParser(t,e)};t.SAXParser=SAXParser;t.SAXStream=SAXStream;t.createStream=createStream;t.MAX_BUFFER_LENGTH=65536;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function SAXParser(e,a){if(!((this||s)instanceof SAXParser))return new SAXParser(e,a);var i=this||s;clearBuffers(i);i.q=i.c="";i.bufferCheckPosition=t.MAX_BUFFER_LENGTH;i.opt=a||{};i.opt.lowercase=i.opt.lowercase||i.opt.lowercasetags;i.looseCase=i.opt.lowercase?"toLowerCase":"toUpperCase";i.tags=[];i.closed=i.closedRoot=i.sawRoot=false;i.tag=i.error=null;i.strict=!!e;i.noscript=!!(e||i.opt.noscript);i.state=N.BEGIN;i.strictEntities=i.opt.strictEntities;i.ENTITIES=i.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES);i.attribList=[];i.opt.xmlns&&(i.ns=Object.create(f));i.opt.unquotedAttributeValues===void 0&&(i.opt.unquotedAttributeValues=!e);i.trackPosition=i.opt.position!==false;i.trackPosition&&(i.position=i.line=i.column=0);emit(i,"onready")}Object.create||(Object.create=function(t){function F(){}F.prototype=t;var e=new F;return e});Object.keys||(Object.keys=function(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push(a);return e});function checkBufferLength(a){var i=Math.max(t.MAX_BUFFER_LENGTH,10);var r=0;for(var s=0,n=e.length;s<n;s++){var o=a[e[s]].length;if(o>i)switch(e[s]){case"textNode":closeText(a);break;case"cdata":emitNode(a,"oncdata",a.cdata);a.cdata="";break;case"script":emitNode(a,"onscript",a.script);a.script="";break;default:error(a,"Max buffer length exceeded: "+e[s])}r=Math.max(r,o)}var c=t.MAX_BUFFER_LENGTH-r;a.bufferCheckPosition=c+a.position}function clearBuffers(t){for(var a=0,i=e.length;a<i;a++)t[e[a]]=""}function flushBuffers(t){closeText(t);if(t.cdata!==""){emitNode(t,"oncdata",t.cdata);t.cdata=""}if(t.script!==""){emitNode(t,"onscript",t.script);t.script=""}}SAXParser.prototype={end:function(){end(this||s)},write:write,resume:function(){(this||s).error=null;return this||s},close:function(){return this.write(null)},flush:function(){flushBuffers(this||s)}};var a;try{a=i.Stream}catch(t){a=function(){}}a||(a=function(){});var n=t.EVENTS.filter((function(t){return t!=="error"&&t!=="end"}));function createStream(t,e){return new SAXStream(t,e)}function SAXStream(t,e){if(!((this||s)instanceof SAXStream))return new SAXStream(t,e);a.apply(this||s);(this||s)._parser=new SAXParser(t,e);(this||s).writable=true;(this||s).readable=true;var i=this||s;(this||s)._parser.onend=function(){i.emit("end")};(this||s)._parser.onerror=function(t){i.emit("error",t);i._parser.error=null};(this||s)._decoder=null;n.forEach((function(t){Object.defineProperty(i,"on"+t,{get:function(){return i._parser["on"+t]},set:function(e){if(!e){i.removeAllListeners(t);i._parser["on"+t]=e;return e}i.on(t,e)},enumerable:true,configurable:false})}))}SAXStream.prototype=Object.create(a.prototype,{constructor:{value:SAXStream}});SAXStream.prototype.write=function(t){if(typeof o==="function"&&typeof o.isBuffer==="function"&&o.isBuffer(t)){if(!(this||s)._decoder){var e=r.StringDecoder;(this||s)._decoder=new e("utf8")}t=(this||s)._decoder.write(t)}(this||s)._parser.write(t.toString());this.emit("data",t);return true};SAXStream.prototype.end=function(t){t&&t.length&&this.write(t);(this||s)._parser.end();return true};SAXStream.prototype.on=function(t,e){var i=this||s;i._parser["on"+t]||n.indexOf(t)===-1||(i._parser["on"+t]=function(){var e=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t);i.emit.apply(i,e)});return a.prototype.on.call(i,t,e)};var c="[CDATA[";var u="DOCTYPE";var l="http://www.w3.org/XML/1998/namespace";var T="http://www.w3.org/2000/xmlns/";var f={xml:l,xmlns:T};var p=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;var m=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;var E=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;var d=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function isWhitespace(t){return t===" "||t==="\n"||t==="\r"||t==="\t"}function isQuote(t){return t==='"'||t==="'"}function isAttribEnd(t){return t===">"||isWhitespace(t)}function isMatch(t,e){return t.test(e)}function notMatch(t,e){return!isMatch(t,e)}var N=0;t.STATE={BEGIN:N++,BEGIN_WHITESPACE:N++,TEXT:N++,TEXT_ENTITY:N++,OPEN_WAKA:N++,SGML_DECL:N++,SGML_DECL_QUOTED:N++,DOCTYPE:N++,DOCTYPE_QUOTED:N++,DOCTYPE_DTD:N++,DOCTYPE_DTD_QUOTED:N++,COMMENT_STARTING:N++,COMMENT:N++,COMMENT_ENDING:N++,COMMENT_ENDED:N++,CDATA:N++,CDATA_ENDING:N++,CDATA_ENDING_2:N++,PROC_INST:N++,PROC_INST_BODY:N++,PROC_INST_ENDING:N++,OPEN_TAG:N++,OPEN_TAG_SLASH:N++,ATTRIB:N++,ATTRIB_NAME:N++,ATTRIB_NAME_SAW_WHITE:N++,ATTRIB_VALUE:N++,ATTRIB_VALUE_QUOTED:N++,ATTRIB_VALUE_CLOSED:N++,ATTRIB_VALUE_UNQUOTED:N++,ATTRIB_VALUE_ENTITY_Q:N++,ATTRIB_VALUE_ENTITY_U:N++,CLOSE_TAG:N++,CLOSE_TAG_SAW_WHITE:N++,SCRIPT:N++,SCRIPT_ENDING:N++};t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"};t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830};Object.keys(t.ENTITIES).forEach((function(e){var a=t.ENTITIES[e];var i=typeof a==="number"?String.fromCharCode(a):a;t.ENTITIES[e]=i}));for(var g in t.STATE)t.STATE[t.STATE[g]]=g;N=t.STATE;function emit(t,e,a){t[e]&&t[e](a)}function emitNode(t,e,a){t.textNode&&closeText(t);emit(t,e,a)}function closeText(t){t.textNode=textopts(t.opt,t.textNode);t.textNode&&emit(t,"ontext",t.textNode);t.textNode=""}function textopts(t,e){t.trim&&(e=e.trim());t.normalize&&(e=e.replace(/\s+/g," "));return e}function error(t,e){closeText(t);t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c);e=new Error(e);t.error=e;emit(t,"onerror",e);return t}function end(t){t.sawRoot&&!t.closedRoot&&strictFail(t,"Unclosed root tag");t.state!==N.BEGIN&&t.state!==N.BEGIN_WHITESPACE&&t.state!==N.TEXT&&error(t,"Unexpected end");closeText(t);t.c="";t.closed=true;emit(t,"onend");SAXParser.call(t,t.strict,t.opt);return t}function strictFail(t,e){if(typeof t!=="object"||!(t instanceof SAXParser))throw new Error("bad call to strictFail");t.strict&&error(t,e)}function newTag(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t;var a=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(a.ns=e.ns);t.attribList.length=0;emitNode(t,"onopentagstart",a)}function qname(t,e){var a=t.indexOf(":");var i=a<0?["",t]:t.split(":");var r=i[0];var s=i[1];if(e&&t==="xmlns"){r="xmlns";s=""}return{prefix:r,local:s}}function attrib(t){t.strict||(t.attribName=t.attribName[t.looseCase]());if(t.attribList.indexOf(t.attribName)!==-1||t.tag.attributes.hasOwnProperty(t.attribName))t.attribName=t.attribValue="";else{if(t.opt.xmlns){var e=qname(t.attribName,true);var a=e.prefix;var i=e.local;if(a==="xmlns")if(i==="xml"&&t.attribValue!==l)strictFail(t,"xml: prefix must be bound to "+l+"\nActual: "+t.attribValue);else if(i==="xmlns"&&t.attribValue!==T)strictFail(t,"xmlns: prefix must be bound to "+T+"\nActual: "+t.attribValue);else{var r=t.tag;var s=t.tags[t.tags.length-1]||t;r.ns===s.ns&&(r.ns=Object.create(s.ns));r.ns[i]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else{t.tag.attributes[t.attribName]=t.attribValue;emitNode(t,"onattribute",{name:t.attribName,value:t.attribValue})}t.attribName=t.attribValue=""}}function openTag(t,e){if(t.opt.xmlns){var a=t.tag;var i=qname(t.tagName);a.prefix=i.prefix;a.local=i.local;a.uri=a.ns[i.prefix]||"";if(a.prefix&&!a.uri){strictFail(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName));a.uri=i.prefix}var r=t.tags[t.tags.length-1]||t;a.ns&&r.ns!==a.ns&&Object.keys(a.ns).forEach((function(e){emitNode(t,"onopennamespace",{prefix:e,uri:a.ns[e]})}));for(var s=0,n=t.attribList.length;s<n;s++){var o=t.attribList[s];var c=o[0];var u=o[1];var l=qname(c,true);var T=l.prefix;var f=l.local;var p=T===""?"":a.ns[T]||"";var m={name:c,value:u,prefix:T,local:f,uri:p};if(T&&T!=="xmlns"&&!p){strictFail(t,"Unbound namespace prefix: "+JSON.stringify(T));m.uri=T}t.tag.attributes[c]=m;emitNode(t,"onattribute",m)}t.attribList.length=0}t.tag.isSelfClosing=!!e;t.sawRoot=true;t.tags.push(t.tag);emitNode(t,"onopentag",t.tag);if(!e){t.noscript||t.tagName.toLowerCase()!=="script"?t.state=N.TEXT:t.state=N.SCRIPT;t.tag=null;t.tagName=""}t.attribName=t.attribValue="";t.attribList.length=0}function closeTag(t){if(t.tagName){if(t.script){if(t.tagName!=="script"){t.script+="</"+t.tagName+">";t.tagName="";t.state=N.SCRIPT;return}emitNode(t,"onscript",t.script);t.script=""}var e=t.tags.length;var a=t.tagName;t.strict||(a=a[t.looseCase]());var i=a;while(e--){var r=t.tags[e];if(r.name===i)break;strictFail(t,"Unexpected close tag")}if(e<0){strictFail(t,"Unmatched closing tag: "+t.tagName);t.textNode+="</"+t.tagName+">";t.state=N.TEXT}else{t.tagName=a;var s=t.tags.length;while(s-- >e){var n=t.tag=t.tags.pop();t.tagName=t.tag.name;emitNode(t,"onclosetag",t.tagName);var o={};for(var c in n.ns)o[c]=n.ns[c];var u=t.tags[t.tags.length-1]||t;t.opt.xmlns&&n.ns!==u.ns&&Object.keys(n.ns).forEach((function(e){var a=n.ns[e];emitNode(t,"onclosenamespace",{prefix:e,uri:a})}))}e===0&&(t.closedRoot=true);t.tagName=t.attribValue=t.attribName="";t.attribList.length=0;t.state=N.TEXT}}else{strictFail(t,"Weird empty close tag.");t.textNode+="</>";t.state=N.TEXT}}function parseEntity(t){var e=t.entity;var a=e.toLowerCase();var i;var r="";if(t.ENTITIES[e])return t.ENTITIES[e];if(t.ENTITIES[a])return t.ENTITIES[a];e=a;if(e.charAt(0)==="#")if(e.charAt(1)==="x"){e=e.slice(2);i=parseInt(e,16);r=i.toString(16)}else{e=e.slice(1);i=parseInt(e,10);r=i.toString(10)}e=e.replace(/^0+/,"");if(isNaN(i)||r.toLowerCase()!==e){strictFail(t,"Invalid character entity");return"&"+t.entity+";"}return String.fromCodePoint(i)}function beginWhiteSpace(t,e){if(e==="<"){t.state=N.OPEN_WAKA;t.startTagPosition=t.position}else if(!isWhitespace(e)){strictFail(t,"Non-whitespace before first tag.");t.textNode=e;t.state=N.TEXT}}function charAt(t,e){var a="";e<t.length&&(a=t.charAt(e));return a}function write(e){var a=this||s;if((this||s).error)throw(this||s).error;if(a.closed)return error(a,"Cannot write after close. Assign an onready handler.");if(e===null)return end(a);typeof e==="object"&&(e=e.toString());var i=0;var r="";while(true){r=charAt(e,i++);a.c=r;if(!r)break;if(a.trackPosition){a.position++;if(r==="\n"){a.line++;a.column=0}else a.column++}switch(a.state){case N.BEGIN:a.state=N.BEGIN_WHITESPACE;if(r==="\ufeff")continue;beginWhiteSpace(a,r);continue;case N.BEGIN_WHITESPACE:beginWhiteSpace(a,r);continue;case N.TEXT:if(a.sawRoot&&!a.closedRoot){var n=i-1;while(r&&r!=="<"&&r!=="&"){r=charAt(e,i++);if(r&&a.trackPosition){a.position++;if(r==="\n"){a.line++;a.column=0}else a.column++}}a.textNode+=e.substring(n,i-1)}if(r!=="<"||a.sawRoot&&a.closedRoot&&!a.strict){isWhitespace(r)||a.sawRoot&&!a.closedRoot||strictFail(a,"Text data outside of root node.");r==="&"?a.state=N.TEXT_ENTITY:a.textNode+=r}else{a.state=N.OPEN_WAKA;a.startTagPosition=a.position}continue;case N.SCRIPT:r==="<"?a.state=N.SCRIPT_ENDING:a.script+=r;continue;case N.SCRIPT_ENDING:if(r==="/")a.state=N.CLOSE_TAG;else{a.script+="<"+r;a.state=N.SCRIPT}continue;case N.OPEN_WAKA:if(r==="!"){a.state=N.SGML_DECL;a.sgmlDecl=""}else if(isWhitespace(r));else if(isMatch(p,r)){a.state=N.OPEN_TAG;a.tagName=r}else if(r==="/"){a.state=N.CLOSE_TAG;a.tagName=""}else if(r==="?"){a.state=N.PROC_INST;a.procInstName=a.procInstBody=""}else{strictFail(a,"Unencoded <");if(a.startTagPosition+1<a.position){var o=a.position-a.startTagPosition;r=new Array(o).join(" ")+r}a.textNode+="<"+r;a.state=N.TEXT}continue;case N.SGML_DECL:if(a.sgmlDecl+r==="--"){a.state=N.COMMENT;a.comment="";a.sgmlDecl="";continue}if(a.doctype&&a.doctype!==true&&a.sgmlDecl){a.state=N.DOCTYPE_DTD;a.doctype+="<!"+a.sgmlDecl+r;a.sgmlDecl=""}else if((a.sgmlDecl+r).toUpperCase()===c){emitNode(a,"onopencdata");a.state=N.CDATA;a.sgmlDecl="";a.cdata=""}else if((a.sgmlDecl+r).toUpperCase()===u){a.state=N.DOCTYPE;(a.doctype||a.sawRoot)&&strictFail(a,"Inappropriately located doctype declaration");a.doctype="";a.sgmlDecl=""}else if(r===">"){emitNode(a,"onsgmldeclaration",a.sgmlDecl);a.sgmlDecl="";a.state=N.TEXT}else if(isQuote(r)){a.state=N.SGML_DECL_QUOTED;a.sgmlDecl+=r}else a.sgmlDecl+=r;continue;case N.SGML_DECL_QUOTED:if(r===a.q){a.state=N.SGML_DECL;a.q=""}a.sgmlDecl+=r;continue;case N.DOCTYPE:if(r===">"){a.state=N.TEXT;emitNode(a,"ondoctype",a.doctype);a.doctype=true}else{a.doctype+=r;if(r==="[")a.state=N.DOCTYPE_DTD;else if(isQuote(r)){a.state=N.DOCTYPE_QUOTED;a.q=r}}continue;case N.DOCTYPE_QUOTED:a.doctype+=r;if(r===a.q){a.q="";a.state=N.DOCTYPE}continue;case N.DOCTYPE_DTD:if(r==="]"){a.doctype+=r;a.state=N.DOCTYPE}else if(r==="<"){a.state=N.OPEN_WAKA;a.startTagPosition=a.position}else if(isQuote(r)){a.doctype+=r;a.state=N.DOCTYPE_DTD_QUOTED;a.q=r}else a.doctype+=r;continue;case N.DOCTYPE_DTD_QUOTED:a.doctype+=r;if(r===a.q){a.state=N.DOCTYPE_DTD;a.q=""}continue;case N.COMMENT:r==="-"?a.state=N.COMMENT_ENDING:a.comment+=r;continue;case N.COMMENT_ENDING:if(r==="-"){a.state=N.COMMENT_ENDED;a.comment=textopts(a.opt,a.comment);a.comment&&emitNode(a,"oncomment",a.comment);a.comment=""}else{a.comment+="-"+r;a.state=N.COMMENT}continue;case N.COMMENT_ENDED:if(r!==">"){strictFail(a,"Malformed comment");a.comment+="--"+r;a.state=N.COMMENT}else a.doctype&&a.doctype!==true?a.state=N.DOCTYPE_DTD:a.state=N.TEXT;continue;case N.CDATA:r==="]"?a.state=N.CDATA_ENDING:a.cdata+=r;continue;case N.CDATA_ENDING:if(r==="]")a.state=N.CDATA_ENDING_2;else{a.cdata+="]"+r;a.state=N.CDATA}continue;case N.CDATA_ENDING_2:if(r===">"){a.cdata&&emitNode(a,"oncdata",a.cdata);emitNode(a,"onclosecdata");a.cdata="";a.state=N.TEXT}else if(r==="]")a.cdata+="]";else{a.cdata+="]]"+r;a.state=N.CDATA}continue;case N.PROC_INST:r==="?"?a.state=N.PROC_INST_ENDING:isWhitespace(r)?a.state=N.PROC_INST_BODY:a.procInstName+=r;continue;case N.PROC_INST_BODY:if(!a.procInstBody&&isWhitespace(r))continue;r==="?"?a.state=N.PROC_INST_ENDING:a.procInstBody+=r;continue;case N.PROC_INST_ENDING:if(r===">"){emitNode(a,"onprocessinginstruction",{name:a.procInstName,body:a.procInstBody});a.procInstName=a.procInstBody="";a.state=N.TEXT}else{a.procInstBody+="?"+r;a.state=N.PROC_INST_BODY}continue;case N.OPEN_TAG:if(isMatch(m,r))a.tagName+=r;else{newTag(a);if(r===">")openTag(a);else if(r==="/")a.state=N.OPEN_TAG_SLASH;else{isWhitespace(r)||strictFail(a,"Invalid character in tag name");a.state=N.ATTRIB}}continue;case N.OPEN_TAG_SLASH:if(r===">"){openTag(a,true);closeTag(a)}else{strictFail(a,"Forward-slash in opening tag not followed by >");a.state=N.ATTRIB}continue;case N.ATTRIB:if(isWhitespace(r))continue;if(r===">")openTag(a);else if(r==="/")a.state=N.OPEN_TAG_SLASH;else if(isMatch(p,r)){a.attribName=r;a.attribValue="";a.state=N.ATTRIB_NAME}else strictFail(a,"Invalid attribute name");continue;case N.ATTRIB_NAME:if(r==="=")a.state=N.ATTRIB_VALUE;else if(r===">"){strictFail(a,"Attribute without value");a.attribValue=a.attribName;attrib(a);openTag(a)}else isWhitespace(r)?a.state=N.ATTRIB_NAME_SAW_WHITE:isMatch(m,r)?a.attribName+=r:strictFail(a,"Invalid attribute name");continue;case N.ATTRIB_NAME_SAW_WHITE:if(r==="=")a.state=N.ATTRIB_VALUE;else{if(isWhitespace(r))continue;strictFail(a,"Attribute without value");a.tag.attributes[a.attribName]="";a.attribValue="";emitNode(a,"onattribute",{name:a.attribName,value:""});a.attribName="";if(r===">")openTag(a);else if(isMatch(p,r)){a.attribName=r;a.state=N.ATTRIB_NAME}else{strictFail(a,"Invalid attribute name");a.state=N.ATTRIB}}continue;case N.ATTRIB_VALUE:if(isWhitespace(r))continue;if(isQuote(r)){a.q=r;a.state=N.ATTRIB_VALUE_QUOTED}else{a.opt.unquotedAttributeValues||error(a,"Unquoted attribute value");a.state=N.ATTRIB_VALUE_UNQUOTED;a.attribValue=r}continue;case N.ATTRIB_VALUE_QUOTED:if(r!==a.q){r==="&"?a.state=N.ATTRIB_VALUE_ENTITY_Q:a.attribValue+=r;continue}attrib(a);a.q="";a.state=N.ATTRIB_VALUE_CLOSED;continue;case N.ATTRIB_VALUE_CLOSED:if(isWhitespace(r))a.state=N.ATTRIB;else if(r===">")openTag(a);else if(r==="/")a.state=N.OPEN_TAG_SLASH;else if(isMatch(p,r)){strictFail(a,"No whitespace between attributes");a.attribName=r;a.attribValue="";a.state=N.ATTRIB_NAME}else strictFail(a,"Invalid attribute name");continue;case N.ATTRIB_VALUE_UNQUOTED:if(!isAttribEnd(r)){r==="&"?a.state=N.ATTRIB_VALUE_ENTITY_U:a.attribValue+=r;continue}attrib(a);r===">"?openTag(a):a.state=N.ATTRIB;continue;case N.CLOSE_TAG:if(a.tagName)if(r===">")closeTag(a);else if(isMatch(m,r))a.tagName+=r;else if(a.script){a.script+="</"+a.tagName;a.tagName="";a.state=N.SCRIPT}else{isWhitespace(r)||strictFail(a,"Invalid tagname in closing tag");a.state=N.CLOSE_TAG_SAW_WHITE}else{if(isWhitespace(r))continue;if(notMatch(p,r))if(a.script){a.script+="</"+r;a.state=N.SCRIPT}else strictFail(a,"Invalid tagname in closing tag.");else a.tagName=r}continue;case N.CLOSE_TAG_SAW_WHITE:if(isWhitespace(r))continue;r===">"?closeTag(a):strictFail(a,"Invalid characters in closing tag");continue;case N.TEXT_ENTITY:case N.ATTRIB_VALUE_ENTITY_Q:case N.ATTRIB_VALUE_ENTITY_U:var l;var T;switch(a.state){case N.TEXT_ENTITY:l=N.TEXT;T="textNode";break;case N.ATTRIB_VALUE_ENTITY_Q:l=N.ATTRIB_VALUE_QUOTED;T="attribValue";break;case N.ATTRIB_VALUE_ENTITY_U:l=N.ATTRIB_VALUE_UNQUOTED;T="attribValue";break}if(r===";"){var f=parseEntity(a);if(a.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(f)){a.entity="";a.state=l;a.write(f)}else{a[T]+=f;a.entity="";a.state=l}}else if(isMatch(a.entity.length?d:E,r))a.entity+=r;else{strictFail(a,"Invalid character in entity name");a[T]+="&"+a.entity+r;a.entity="";a.state=l}continue;default:throw new Error(a,"Unknown state: "+a.state)}}a.position>=a.bufferCheckPosition&&checkBufferLength(a);return a}String.fromCodePoint||function(){var t=String.fromCharCode;var e=Math.floor;var fromCodePoint=function(){var a=16384;var i=[];var r;var s;var n=-1;var o=arguments.length;if(!o)return"";var c="";while(++n<o){var u=Number(arguments[n]);if(!isFinite(u)||u<0||u>1114111||e(u)!==u)throw RangeError("Invalid code point: "+u);if(u<=65535)i.push(u);else{u-=65536;r=55296+(u>>10);s=u%1024+56320;i.push(r,s)}if(n+1===o||i.length>a){c+=t.apply(null,i);i.length=0}}return c};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:fromCodePoint,configurable:true,writable:true}):String.fromCodePoint=fromCodePoint}()})(n);export{n as default};

