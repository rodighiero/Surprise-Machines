!function(e){function t(t){for(var i,s,l=t[0],a=t[1],c=t[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={0:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=a;o.push([22,1]),n()}({12:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);n(11),n(12);var i=n.p+"nodes.json",r=n.p+"links.json",o=n.p+"images.txt",s=n.p+"arial.xml",l=n(27),a=n(28),c=n(10),d=n(0),u=n(9),p=n.p+"arial.png",f=n(26),h=(e,t,n,i)=>{d.BitmapFont.install(n,d.Texture.from(p));const r=new d.Application({width:window.innerWidth,height:window.innerHeight,antialias:!0,transparent:!0,resolution:2,autoDensity:!0,autoResize:!0,resizeTo:window});document.body.prepend(r.view);const o=new u.a({screenWidth:window.innerWidth,screenHeight:window.innerHeight,interaction:r.renderer.plugins.interaction});r.stage.addChild(o),o.setTransform(window.innerWidth/2,window.innerHeight/2);const s=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");let l=0;const a=t=>{const n=o.scale.x>.1,r=n?200:10;console.log(r);const a="https://ids.lib.harvard.edu/ids/view/"+i[t.index]+"?height="+r+"&width="+r,c=d.Texture.from(a),u=new d.Sprite(c);u.texture.baseTexture.on("loaded",()=>{u.setTransform(16*t.x-u.width/2,16*t.y-u.height/2,n?1:20,n?1:20),o.addChild(u),t.visibility=!0,(()=>{const t=e.filter(e=>1==e.visibility),n=Object(f.a)(t,e=>16*e.x),i=Object(f.a)(t,e=>16*e.y),r=n[1]-n[0],s=i[1]-i[0],l=window.innerWidth/r*.8,a=window.innerHeight/s*.8,c=l<a?l:a;o.animate({scale:c,position:new d.Point(0,0),time:1e3,removeOnInterrupt:!0})})(),l+=1,document.getElementById("number").innerHTML=s(l)+" Artworks<br>out of "+s(e.length)})};let c=0;const h=()=>{setTimeout(()=>{const t=e[c];t.visibility=!0,a(t),c++,h()},10)};h(),window.addEventListener("wheel",e=>{e.preventDefault()},{passive:!1}),window.onresize=()=>{o.resize()}};Promise.all([Object(l.a)(i),Object(l.a)(r),Object(a.a)(s),Object(c.a)(o)]).then(([e,t,n,i])=>{i=i.split(","),console.log("nodes",e.length),console.log("links",t.length),console.log("images",i.length),h(e,0,n,i)})}});