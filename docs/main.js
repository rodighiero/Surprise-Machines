!function(e){function t(t){for(var i,a,s=t[0],l=t[1],d=t[2],c=0,p=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={0:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;o.push([22,1]),n()}({12:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);n(11),n(12);var i=n.p+"nodes.json",r=n.p+"links.json",o=n.p+"images.txt",a=n.p+"arial.xml",s=n(27),l=n(28),d=n(10),u=n(0),c=n(9),p=n.p+"arial.png",f=n(26),h=(e,t,n,i)=>{u.BitmapFont.install(n,u.Texture.from(p));const r=new u.Application({width:window.innerWidth,height:window.innerHeight,antialias:!0,transparent:!0,resolution:2,autoDensity:!0,autoResize:!0,resizeTo:window});document.body.prepend(r.view);const o=new c.a({screenWidth:window.innerWidth,screenHeight:window.innerHeight,interaction:r.renderer.plugins.interaction});r.stage.addChild(o),o.setTransform(window.innerWidth/2,window.innerHeight/2);let a=0;const s=t=>{const n="https://ids.lib.harvard.edu/ids/view/"+i[t.index]+"?height=200&width=200",r=u.Texture.from(n),s=new u.Sprite(r);s.texture.baseTexture.on("loaded",()=>{s.setTransform(16*t.x-s.width/2,16*t.y-s.height/2),o.addChild(s),t.visibility=!0,(()=>{const t=e.filter(e=>1==e.visibility),n=Object(f.a)(t,e=>16*e.x),i=Object(f.a)(t,e=>16*e.y),r=n[1]-n[0],a=i[1]-i[0],s=window.innerWidth/r*.8,l=window.innerHeight/a*.8,d=s<l?s:l;o.animate({scale:d,position:new u.Point(0,0),time:1e3,removeOnInterrupt:!0})})(),a+=1,document.getElementById("number").innerHTML=a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" Artworks"})};let l=0;const d=()=>{setTimeout(()=>{const t=e[l];t.visibility=!0,s(t),l++,d()},10)};d(),window.addEventListener("wheel",e=>{e.preventDefault()},{passive:!1}),window.onresize=()=>{o.resize()}};Promise.all([Object(s.a)(i),Object(s.a)(r),Object(l.a)(a),Object(d.a)(o)]).then(([e,t,n,i])=>{i=i.split(","),console.log("nodes",e.length),console.log("links",t.length),console.log("images",i.length),h(e,0,n,i)})}});