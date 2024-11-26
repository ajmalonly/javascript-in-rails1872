// chess@1.2.2 downloaded from https://ga.jspm.io/npm:chess@1.2.2/src/main.js

import{EventEmitter as e}from"events";import t from"crypto-js/enc-base64.js";import i from"crypto-js/md5.js";var a={Bishop:"bishop",King:"king",Knight:"knight",Pawn:"pawn",Queen:"queen",Rook:"rook"};var r={Black:{name:"black"},White:{name:"white"}};class Piece{constructor(e,t){this.moveCount=0;this.notation=t;this.side=e;this.type=null}static createBishop(e){return new Bishop(e)}static createKing(e){return new King(e)}static createKnight(e){return new Knight(e)}static createPawn(e){return new Pawn(e)}static createQueen(e){return new Queen(e)}static createRook(e){return new Rook(e)}}class Bishop extends Piece{constructor(e){super(e,"B");this.type=a.Bishop}}class King extends Piece{constructor(e){super(e,"K");this.type=a.King}}class Knight extends Piece{constructor(e){super(e,"N");this.type=a.Knight}}class Pawn extends Piece{constructor(e){super(e,"");this.type=a.Pawn}}class Queen extends Piece{constructor(e){super(e,"Q");this.type=a.Queen}}class Rook extends Piece{constructor(e){super(e,"R");this.type=a.Rook}}class Square{constructor(e,t){this.file=e;this.piece=null;this.rank=t}static create(e,t){return new Square(e,t)}}var s={Above:{offset:8},AboveLeft:{offset:7},AboveRight:{offset:9},Below:{offset:-8},BelowLeft:{offset:-9},BelowRight:{offset:-7},KnightAboveLeft:{offset:15},KnightAboveRight:{offset:17},KnightBelowLeft:{offset:-17},KnightBelowRight:{offset:-15},KnightLeftAbove:{offset:6},KnightLeftBelow:{offset:-10},KnightRightAbove:{offset:10},KnightRightBelow:{offset:-6},Left:{offset:-1},Right:{offset:1}};class Board extends e{constructor(e){super();this.squares=e}static create(){let e=new Board([]),t=0,i=0,a=0,s=null;for(i=0;i<64;i++){t=Math.floor(i%8);a=Math.floor(i/8)+1;s=Square.create("abcdefgh"[t],a);e.squares.push(s);a===1||a===8?s.piece=t===0||t===7?Piece.createRook(a===1?r.White:r.Black):t===1||t===6?Piece.createKnight(a===1?r.White:r.Black):t===2||t===5?Piece.createBishop(a===1?r.White:r.Black):t===3?Piece.createQueen(a===1?r.White:r.Black):Piece.createKing(a===1?r.White:r.Black):a!==2&&a!==7||(s.piece=Piece.createPawn(a===2?r.White:r.Black))}return e}static load(e){const t={b:{arg:r.Black,method:"createBishop"},B:{arg:r.White,method:"createBishop"},k:{arg:r.Black,method:"createKing"},K:{arg:r.White,method:"createKing"},n:{arg:r.Black,method:"createKnight"},N:{arg:r.White,method:"createKnight"},p:{arg:r.Black,method:"createPawn"},P:{arg:r.White,method:"createPawn"},q:{arg:r.Black,method:"createQueen"},Q:{arg:r.White,method:"createQueen"},r:{arg:r.Black,method:"createRook"},R:{arg:r.White,method:"createRook"}};const[i]=e.split(" ");const a=i.split("/").map(((e,i)=>{const a=e.split("");let r=0;return a.reduce(((e,a)=>{if(isNaN(Number(a))){const s=Square.create("abcdefgh"[r],8-i);s.piece=Piece[t[a].method](t[a].arg);e.push(s);r=r<7?r+1:0}else for(let t=0;t<Number(a);t+=1){e.push(Square.create("abcdefgh"[r],8-i));r=r<7?r+1:0}return e}),[])}));return new Board(a.reduce(((e,t)=>{e.push(...t);return e}),[]))}getFen(){const e=[];const t=this.squares.reduce(((e,t,i)=>{const a=parseInt(i/8,10);e[a]=e[a]||[];e[a].push(t);return e}),[]).flatMap((e=>e.reverse())).reverse();for(let i=0;i<t.length;i+=1){const a=t[i];a.file==="a"&&a.rank<8&&e.push("/");if(a.piece){const t=`to${a.piece.side.name==="white"?"Upp":"Low"}erCase`;e.push((a.piece.notation||"p")[t]())}else isNaN(Number(e[e.length-1]))?e.push(1):e[e.length-1]+=1}return e.join("")}getNeighborSquare(e,t){if(e&&t){if(e.file==="a"&&(t===s.AboveLeft||t===s.BelowLeft||t===s.Left))return null;if(e.file==="h"&&(t===s.AboveRight||t===s.BelowRight||t===s.Right))return null;if(e.rank===1&&(t===s.Below||t===s.BelowLeft||t===s.BelowRight))return null;if(e.rank===8&&(t===s.Above||t===s.AboveLeft||t===s.AboveRight))return null;let i="abcdefgh".indexOf(e.file),a=0;if(i!==-1&&e.rank>0&&e.rank<9){a=8*(e.rank-1)+i+t.offset;if(this.squares&&this.squares.length>a&&a>-1)return this.squares[a]}}return null}getSquare(e,t){if(typeof e==="string"&&e.length===2&&!t){t=parseInt(e.charAt(1),10);e=e.charAt(0)}let i="abcdefgh".indexOf(e),a=0;if(i!==-1&&t>0&&t<9){a=8*(t-1)+i;if(this.squares&&this.squares.length>a)return this.squares[a]}return null}getSquares(e){const t=[];for(let i=0;i<this.squares.length;i++)this.squares[i].piece&&this.squares[i].piece.side===e&&t.push(this.squares[i]);return t}move(e,t,i){typeof e==="string"&&e.length===2&&(e=this.getSquare(e));typeof t==="string"&&t.length===2&&(t=this.getSquare(t));let r;if(typeof i==="boolean"){r=i;i=null}if(e&&e.file&&e.rank&&t&&t.file&&t.rank){let s={algebraic:i,capturedPiece:t.piece,castle:false,enPassant:false,postSquare:t,prevSquare:e},o=e.piece,n=null,undo=(e,t)=>()=>{if(!r&&t.undone)throw new Error("cannot undo a move multiple times");t.prevSquare.piece=t.postSquare.piece;t.postSquare.piece=t.capturedPiece;t.enPassant||(t.postSquare.piece=t.capturedPiece);if(t.enPassant){e.getSquare(t.postSquare.file,t.prevSquare.rank).piece=t.capturedPiece;t.postSquare.piece=null}if(t.castle){n=e.getSquare(s.postSquare.file==="g"?"f":"d",s.postSquare.rank);e.getSquare(s.postSquare.file==="g"?"h":"a",s.postSquare.rank).piece=n.piece;n.piece=null}if(!r){t.prevSquare.piece.moveCount=t.prevSquare.piece.moveCount-1;t.undone=true;e.emit("undo",t)}};t.piece=o;s.castle=o.type===a.King&&o.moveCount===0&&(s.postSquare.file==="g"||s.postSquare.file==="c");s.enPassant=o.type===a.Pawn&&s.capturedPiece===null&&s.postSquare.file!==s.prevSquare.file;s.prevSquare.piece=null;if(s.enPassant){n=this.getSquare(s.postSquare.file,s.prevSquare.rank);s.capturedPiece=n.piece;n.piece=null}if(s.castle){n=this.getSquare(s.postSquare.file==="g"?"h":"a",s.postSquare.rank);if(n.piece===null)s.castle=false;else{this.getSquare(s.postSquare.file==="g"?"f":"d",s.postSquare.rank).piece=n.piece;n.piece=null}}if(!r){o.moveCount++;this.lastMovedPiece=o;s.capturedPiece&&this.emit("capture",s);s.castle&&this.emit("castle",s);s.enPassant&&this.emit("enPassant",s);this.emit("move",s)}return{move:s,undo:undo(this,s)}}}promote(e,t){t.moveCount=e.piece.moveCount;this.lastMovedPiece=t;e.piece=t;this.emit("promote",e);return e}}function addToHistory(e){return t=>{let i=e.getHashCode(),a=new Move(t.prevSquare,t.postSquare,t.capturedPiece,t.algebraic,t.castle,t.enPassant,i);e.moveHistory.push(a)}}function denotePromotionInHistory(e){return()=>{let t=e.moveHistory[e.moveHistory.length-1];t&&(t.promotion=true)}}function removeFromHistory(e){return()=>{e.moveHistory.pop();let t=e.moveHistory[e.moveHistory.length-1];t&&(e.board.lastMovedPiece=t.piece)}}class Game extends e{constructor(e){super();this.board=e;this.moveHistory=[]}static create(){let e=Board.create(),t=new Game(e);e.on("move",addToHistory(t));e.on("promote",denotePromotionInHistory(t));e.on("undo",removeFromHistory(t));return t}getCurrentSide(){return this.moveHistory.length%2===0?r.White:r.Black}getHashCode(){let e=0,a="";for(e=0;e<this.board.squares.length;e++)this.board.squares[e].piece!==null&&(a+=[this.board.squares[e].file,this.board.squares[e].rank,this.board.squares[e].piece.side===r.White?"w":"b",this.board.squares[e].piece.notation,e<this.board.squares.length-1?"-":""].join(""));let s=i(a);return t.stringify(s)}static load(e){let t=Board.create(),i=new Game(t),a=0;t.on("move",addToHistory(i));t.on("promote",denotePromotionInHistory(i));for(a=0;a<e.length;a++)t.move(t.getSquare(e[a].prevFile,e[a].prevRank),t.getSquare(e[a].postFile,e[a].postRank));return i}}class Move{constructor(e,t,i,a,r,s,o){this.algebraic=a;this.capturedPiece=i;this.castle=r;this.enPassant=s;this.hashCode=o;this.piece=t.piece;this.promotion=false;this.postFile=t.file;this.postRank=t.rank;this.prevFile=e.file;this.prevRank=e.rank}}class PieceValidation{constructor(e){this.allowBackward=false;this.allowDiagonal=false;this.allowForward=false;this.allowHorizontal=false;this.board=e;this.type=null;this.repeat=0}applySpecialValidation(){}static create(e,t){switch(e){case a.Bishop:return new BishopValidation(t);case a.King:return new KingValidation(t);case a.Knight:return new KnightValidation(t);case a.Pawn:return new PawnValidation(t);case a.Queen:return new QueenValidation(t);case a.Rook:return new RookValidation(t);default:return null}}start(e,t){t=t||((e,t)=>new Promise(((i,a)=>e?a(e):i(t))));let i={destSquares:[],origin:e,piece:e?e.piece:null};const findMoveOptions=function(e,t,r){let s=false,o=false,n=e.getNeighborSquare(i.origin,r),l=0;while(n&&l<t){s=n.piece!==null&&(i.piece.type===a.Pawn||n.piece.side===i.piece.side);o=n.piece&&!s;s||i.destSquares.push(n);if(o||s)n=null;else{n=e.getNeighborSquare(n,r);l++}}};if(!i.piece||i.piece.type!==this.type)return t(new Error("piece is invalid"));if(this.board&&i.origin){this.allowForward&&findMoveOptions(this.board,this.repeat,i.piece.side===r.White?s.Above:s.Below);this.allowBackward&&findMoveOptions(this.board,this.repeat,i.piece.side===r.White?s.Below:s.Above);if(this.allowHorizontal){findMoveOptions(this.board,this.repeat,s.Left);findMoveOptions(this.board,this.repeat,s.Right)}if(this.allowDiagonal){findMoveOptions(this.board,this.repeat,s.AboveLeft);findMoveOptions(this.board,this.repeat,s.BelowRight);findMoveOptions(this.board,this.repeat,s.BelowLeft);findMoveOptions(this.board,this.repeat,s.AboveRight)}this.applySpecialValidation(i);return t(null,i.destSquares)}return t(new Error("board is invalid"))}}class BishopValidation extends PieceValidation{constructor(e){super(e);this.allowDiagonal=true;this.type=a.Bishop;this.repeat=8}}class KingValidation extends PieceValidation{constructor(e){super(e);this.allowBackward=true;this.allowDiagonal=true;this.allowForward=true;this.allowHorizontal=true;this.type=a.King;this.repeat=1}applySpecialValidation(){}}class KnightValidation extends PieceValidation{constructor(e){super(e);this.type=a.Knight;this.repeat=1}applySpecialValidation(e){let t=this.board.getNeighborSquare(e.origin,s.AboveLeft),i=this.board.getNeighborSquare(e.origin,s.AboveRight),a=this.board.getNeighborSquare(e.origin,s.BelowLeft),r=this.board.getNeighborSquare(e.origin,s.BelowRight),o=0,n=null,l=[];if(t){l.push(this.board.getNeighborSquare(t,s.Above));l.push(this.board.getNeighborSquare(t,s.Left))}if(i){l.push(this.board.getNeighborSquare(i,s.Above));l.push(this.board.getNeighborSquare(i,s.Right))}if(a){l.push(this.board.getNeighborSquare(a,s.Below));l.push(this.board.getNeighborSquare(a,s.Left))}if(r){l.push(this.board.getNeighborSquare(r,s.Below));l.push(this.board.getNeighborSquare(r,s.Right))}for(o=0;o<l.length;o++)if(l[o]){n=l[o]?l[o].piece:null;n&&n.side===e.piece.side||e.destSquares.push(l[o])}}}class PawnValidation extends PieceValidation{constructor(e){super(e);this.allowForward=true;this.type=a.Pawn;this.repeat=1}applySpecialValidation(e){let t=0,i=null,o=null,n=[this.board.getNeighborSquare(e.origin,e.piece.side===r.White?s.AboveLeft:s.BelowLeft),this.board.getNeighborSquare(e.origin,e.piece.side===r.White?s.AboveRight:s.BelowRight)];for(t=0;t<n.length;t++){i=n[t]?n[t].piece:null;i&&i.side!==e.piece.side&&e.destSquares.push(n[t])}if(e.piece.moveCount===0&&e.destSquares.length&&e.destSquares[0].piece===null){o=this.board.getNeighborSquare(e.destSquares[0],e.piece.side===r.White?s.Above:s.Below);o.piece||e.destSquares.push(o)}else if(e.origin.rank===(e.piece.side===r.White?5:4)){n=[this.board.getNeighborSquare(e.origin,s.Left),this.board.getNeighborSquare(e.origin,s.Right)];t=0;for(t=0;t<n.length;t++){i=n[t]?n[t].piece:null;i&&i.type===a.Pawn&&i.side!==e.piece.side&&i.moveCount===1&&this.board.lastMovedPiece===i&&e.destSquares.push(this.board.getNeighborSquare(n[t],i.side===r.Black?s.Above:s.Below))}}}}class QueenValidation extends PieceValidation{constructor(e){super(e);this.allowBackward=true;this.allowDiagonal=true;this.allowForward=true;this.allowHorizontal=true;this.repeat=8;this.type=a.Queen}}class RookValidation extends PieceValidation{constructor(e){super(e);this.allowBackward=true;this.allowForward=true;this.allowHorizontal=true;this.repeat=8;this.type=a.Rook}}class BoardValidation{constructor(e){this.board=e?e.board:null;this.game=e}static create(e){return new BoardValidation(e)}evaluateCastle(e){let getValidSquares=t=>{let i=0;for(i=0;i<e.length;i++)if(e[i].src===t)return e[i].squares},t=null,i=this.game.getCurrentSide()===r.White?1:8,s={a:this.board.getSquare("a",i),b:this.board.getSquare("b",i),c:this.board.getSquare("c",i),d:this.board.getSquare("d",i),e:this.board.getSquare("e",i),f:this.board.getSquare("f",i),g:this.board.getSquare("g",i),h:this.board.getSquare("h",i)};if(s.e.piece&&s.e.piece.type===a.King&&s.e.piece.moveCount===0&&!this.isSquareAttacked(s.e)){if(s.a.piece&&s.a.piece.type===a.Rook&&s.a.piece.moveCount===0&&!s.b.piece&&!s.c.piece&&!s.d.piece){t=this.board.move(s.e,s.d,true);if(!this.isSquareAttacked(s.d)){t.undo();t=this.board.move(s.e,s.c,true);this.isSquareAttacked(s.c)||getValidSquares(s.e).push(s.c)}t.undo()}if(s.h.piece&&s.h.piece.type===a.Rook&&s.h.piece.moveCount===0&&!s.g.piece&&!s.f.piece){t=this.board.move(s.e,s.f,true);if(!this.isSquareAttacked(s.f)){t.undo();t=this.board.move(s.e,s.g,true);this.isSquareAttacked(s.g)||getValidSquares(s.e).push(s.g)}t.undo()}}}filterKingAttack(e,t){let i=[],r=0,s=false,o=0,n=null,l=[];for(r=0;r<t.length;r++){l=[];for(o=0;o<t[r].squares.length;o++){n=this.board.move(t[r].src,t[r].squares[o],true);s=t[r].squares[o].piece.type!==a.King?this.isSquareAttacked(e):this.isSquareAttacked(t[r].squares[o]);n.undo();s||l.push(t[r].squares[o])}l&&l.length>0&&i.push({squares:l,src:t[r].src})}return i}findAttackers(e){if(!e||!e.piece)return{attacked:false,blocked:false};let isAttacked=(t,i)=>{let a={},r=t.getNeighborSquare(e,i);while(r){a={attacked:r.piece&&r.piece.side!==e.piece.side,blocked:r.piece&&r.piece.side===e.piece.side,piece:r.piece,square:r};if(a.attacked){PieceValidation.create(a.piece.type,t).start(r,setAttacked(a));r=null}else r=a.blocked?null:t.getNeighborSquare(r,i)}return a},isAttackedByKnight=(t,i)=>{let r,s=t.getNeighborSquare(e,i);r={attacked:false,blocked:false,piece:s?s.piece:s,square:s};s&&s.piece&&s.piece.type===a.Knight&&PieceValidation.create(a.Knight,t).start(s,setAttacked(r));return r},t=this,setAttacked=t=>(i,a)=>{if(!i){let i=0;for(i=0;i<a.length;i++)if(a[i]===e){t.attacked=true;return}}t.attacked=false};return[isAttacked(t.board,s.Above),isAttacked(t.board,s.AboveRight),isAttacked(t.board,s.Right),isAttacked(t.board,s.BelowRight),isAttacked(t.board,s.Below),isAttacked(t.board,s.BelowLeft),isAttacked(t.board,s.Left),isAttacked(t.board,s.AboveLeft),isAttackedByKnight(t.board,s.KnightAboveRight),isAttackedByKnight(t.board,s.KnightRightAbove),isAttackedByKnight(t.board,s.KnightBelowRight),isAttackedByKnight(t.board,s.KnightRightBelow),isAttackedByKnight(t.board,s.KnightBelowLeft),isAttackedByKnight(t.board,s.KnightLeftBelow),isAttackedByKnight(t.board,s.KnightAboveLeft),isAttackedByKnight(t.board,s.KnightLeftAbove)].filter((e=>e.attacked))}isSquareAttacked(e){return this.findAttackers(e).length!==0}start(e){e=e||((e,t)=>new Promise(((i,a)=>e?a(e):i(t))));let t=0,i=null,setValidMoves=(t,i)=>(a,r)=>{if(a)return e(a);r&&r.length>0&&t.push({squares:r,src:i})},r=[],s=[];if(!this.board)return e(new Error("board is invalid"));r=this.board.getSquares(this.game.getCurrentSide());for(t=0;t<r.length;t++){r[t].piece.type===a.King&&(i=r[t]);r[t]&&r[t].piece&&PieceValidation.create(r[t].piece.type,this.board).start(r[t],setValidMoves(s,r[t]))}this.evaluateCastle(s);s=this.filterKingAttack(i,s);this.findAttackers(i).forEach((e=>{s.length?this.game.emit("check",{attackingSquare:e.square,kingSquare:i}):this.game.emit("checkmate",{attackingSquare:e.square,kingSquare:i})}));return e(null,s)}}class GameValidation{constructor(e){this.game=e}static create(e){return new GameValidation(e)}findKingSquare(e){let t=0,i=this.game.board.getSquares(e);for(t=0;t<i.length;t++)if(i[t].piece.type===a.King)return i[t]}isRepetition(){let e="",t=[],i=0;for(i=0;i<this.game.moveHistory.length;i++){e=this.game.moveHistory[i].hashCode;t[e]=t[e]?t[e]+1:1;if(t[e]===3)return true}return false}start(e){e=e||((e,t)=>new Promise(((i,a)=>e?a(e):i(t))));let t=null,i={isCheck:false,isCheckmate:false,isFiftyMoveDraw:false,isRepetition:false,isStalemate:false,validMoves:[]},setResult=(t,i,a)=>(r,s)=>{if(r)return e(r);i.isCheck=a&&s.length>0;i.isCheckmate=a&&s.length===0;i.isStalemate=!a&&s.length===0;i.isRepetition=t.isRepetition();i.validMoves=s;return e(null,i)},a=BoardValidation.create(this.game);if(this.game){t=this.findKingSquare(this.game.getCurrentSide());return a.start(setResult(this,i,a.isSquareAttacked(t)))}return e(new Error("game is invalid"))}}function getNotationPrefix(e,t,i){let containsDest=e=>{let i=0;for(;i<e.length;i++)if(e[i]===t)return true;return false},a="",r={},s=0,o=e.piece.notation,n=0,l={};for(;s<i.length;s++)if(containsDest(i[s].squares)){a=i[s].src.file;n=i[s].src.rank;r[a]=typeof r[a]!=="undefined"?r[a]+1:1;l[n]=typeof l[n]!=="undefined"?l[n]+1:1}Object.keys(r).length>1&&(o+=e.file);Object.keys(l).length>Object.keys(r).length&&(o+=e.rank);return o}function getValidMovesByPieceType(e,t){let i=[],a=0;for(;a<t.length;a++)t[a].src.piece.type===e&&i.push(t[a]);return i}function notate(e,t){let i={},r=0,s=false,o=[],n=0,l=null,h="",c=null,u=null,p="";for(;r<e.length;r++){u=e[r].src;l=u.piece;for(n=0;n<e[r].squares.length;n++){h="";c=e[r].squares[n];p=(c.piece?"x":"")+c.file+c.rank;s=(c.rank===8||c.rank===1)&&l.type===a.Pawn;c.piece&&l.type===a.Pawn&&(h=u.file);l.type!==a.Pawn||u.file===c.file||c.piece||(h=[u.file,"x"].join(""));if(l.type===a.Bishop||l.type===a.Knight||l.type===a.Queen||l.type===a.Rook){o=getValidMovesByPieceType(l.type,e);h=o.length>1?getNotationPrefix(u,c,o):u.piece.notation}if(l.type===a.King)if(u.file==="e"&&c.file==="g"){h=t.PGN?"O-O":"0-0";p=""}else if(u.file==="e"&&c.file==="c"){h=t.PGN?"O-O-O":"0-0-0";p=""}else h=u.piece.notation;if(s){i[h+p+"R"]={dest:c,src:u};i[h+p+"N"]={dest:c,src:u};i[h+p+"B"]={dest:c,src:u};i[h+p+"Q"]={dest:c,src:u}}else i[h+p]={dest:c,src:u}}}return i}function parseNotation(e){let t=/^[a-h]x[a-h][1-8]$/,i="";i=e.substring(e.length-2);return e.length>2?t.test(e)?i:e.charAt(0)+i:""}function updateGameClient$1(e){e.validation.start(((t,i)=>{if(t)throw new Error(t);e.isCheck=i.isCheck;e.isCheckmate=i.isCheckmate;e.isRepetition=i.isRepetition;e.isStalemate=i.isStalemate;e.notatedMoves=notate(i.validMoves,e);e.validMoves=i.validMoves}))}class AlgebraicGameClient extends e{constructor(e,t){super();this.game=e;this.isCheck=false;this.isCheckmate=false;this.isRepetition=false;this.isStalemate=false;this.notatedMoves={};this.PGN=!(!t||typeof t.PGN!=="boolean")&&t.PGN;this.validMoves=[];this.validation=GameValidation.create(this.game);["check","checkmate"].forEach((e=>{this.game.on(e,(t=>this.emit(e,t)))}));["capture","castle","enPassant","move","promote","undo"].forEach((e=>{this.game.board.on(e,(t=>this.emit(e,t)))}));let i=this;this.on("undo",(()=>{i.getStatus(true)}))}static create(e){let t=Game.create(),i=new AlgebraicGameClient(t,e);updateGameClient$1(i);return i}getStatus(e){e&&updateGameClient$1(this);return{board:this.game.board,isCheck:this.isCheck,isCheckmate:this.isCheckmate,isRepetition:this.isRepetition,isStalemate:this.isStalemate,notatedMoves:this.notatedMoves}}getFen(){return this.game.board.getFen()}move(e,t){let i=null,a=/^[BKQNR]?[a-h]?[1-8]?[x-]?[a-h][1-8][+#]?$/,r=null,s="",o=this.game.getCurrentSide();if(e&&typeof e==="string"){e=e.replace(/\!/g,"").replace(/\+/g,"").replace(/\#/g,"").replace(/\=/g,"").replace(/\\/g,"");e=this.PGN?e.replace(/0/g,"O"):e.replace(/O/g,"0");e.charAt(e.length-1).match(/[BNQR]/)&&(s=e.charAt(e.length-1));if(this.notatedMoves[e])i=this.game.board.move(this.notatedMoves[e].src,this.notatedMoves[e].dest,e);else{if(e.match(a)&&e.length>1&&!t)return this.move(parseNotation(e),true);if(t)throw new Error(`Invalid move (${e})`)}if(i){if(s){switch(s){case"B":r=Piece.createBishop(o);break;case"N":r=Piece.createKnight(o);break;case"Q":r=Piece.createQueen(o);break;case"R":r=Piece.createRook(o);break;default:r=Piece.createPawn(o)}r&&this.game.board.promote(i.move.postSquare,r)}updateGameClient$1(this);return i}}throw new Error(`Notation is invalid (${e})`)}}function isMoveValid(e,t,i){let a=0,isFound=(e,t)=>typeof e==="string"&&t.file+t.rank===e||e.rank&&e.file&&t.file===e.file&&t.rank===e.rank,r=[];for(a=0;a<i.length;a++)isFound(e,i[a].src)&&(r=i[a].squares);if(r&&r.length>0)for(a=0;a<r.length;a++)if(isFound(t,r[a]))return true;return false}function updateGameClient(e){return e.validation.start(((t,i)=>{if(t)throw new Error(t);e.isCheck=i.isCheck;e.isCheckmate=i.isCheckmate;e.isRepetition=i.isRepetition;e.isStalemate=i.isStalemate;e.validMoves=i.validMoves}))}class SimpleGameClient extends e{constructor(e){super();this.isCheck=false;this.isCheckmate=false;this.isRepetition=false;this.isStalemate=false;this.game=e;this.validMoves=[];this.validation=GameValidation.create(this.game);["check","checkmate"].forEach((e=>{this.game.on(e,(t=>this.emit(e,t)))}));["capture","castle","enPassant","move","promote"].forEach((e=>{this.game.board.on(e,(t=>this.emit(e,t)))}))}static create(){let e=Game.create(),t=new SimpleGameClient(e);updateGameClient(t);return t}getStatus(e){e&&updateGameClient(this);return{board:this.game.board,isCheck:this.isCheck,isCheckmate:this.isCheckmate,isRepetition:this.isRepetition,isStalemate:this.isStalemate,validMoves:this.validMoves}}move(e,t,i){let a=null,r=this.game.getCurrentSide();if(e&&t&&isMoveValid(e,t,this.validMoves)){a=this.game.board.move(e,t);if(a){if(i){let e;switch(i){case"B":e=Piece.createBishop(r);break;case"N":e=Piece.createKnight(r);break;case"Q":e=Piece.createQueen(r);break;case"R":e=Piece.createRook(r);break;default:e=null;break}e&&this.game.board.promote(a.move.postSquare,e)}updateGameClient(this);return a}}throw new Error(`Move is invalid (${e} to ${t})`)}}const create=e=>AlgebraicGameClient.create(e);const createSimple=()=>SimpleGameClient.create();var o={create:create,createSimple:createSimple};export{create,createSimple,o as default};

