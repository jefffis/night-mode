/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function(b){var d=false;if(typeof define==="function"&&define.amd){define(b);d=true}if(typeof exports==="object"){module.exports=b();d=true}if(!d){var a=window.Cookies;var c=window.Cookies=b();c.noConflict=function(){window.Cookies=a;return c}}}(function(){function b(){var f=0;var c={};for(;f<arguments.length;f++){var d=arguments[f];for(var e in d){c[e]=d[e]}}return c}function a(d){function c(o,n,k){var r;if(typeof document==="undefined"){return}if(arguments.length>1){k=b({path:"/"},c.defaults,k);if(typeof k.expires==="number"){var h=new Date();h.setMilliseconds(h.getMilliseconds()+k.expires*86400000);k.expires=h}try{r=JSON.stringify(n);if(/^[\{\[]/.test(r)){n=r}}catch(m){}if(!d.write){n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{n=d.write(n,o)}o=encodeURIComponent(String(o));o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);o=o.replace(/[\(\)]/g,escape);return(document.cookie=[o,"=",n,k.expires?"; expires="+k.expires.toUTCString():"",k.path?"; path="+k.path:"",k.domain?"; domain="+k.domain:"",k.secure?"; secure":""].join(""))}if(!o){r={}}var q=document.cookie?document.cookie.split("; "):[];var p=/(%[0-9A-Z]{2})+/g;var l=0;for(;l<q.length;l++){var j=q[l].split("=");var g=j.slice(1).join("=");if(g.charAt(0)==='"'){g=g.slice(1,-1)}try{var f=j[0].replace(p,decodeURIComponent);g=d.read?d.read(g,f):d(g,f)||g.replace(p,decodeURIComponent);if(this.json){try{g=JSON.parse(g)}catch(m){}}if(o===f){r=g;break}if(!o){r[f]=g}}catch(m){}}return r}c.set=c;c.get=function(e){return c.call(c,e)};c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))};c.defaults={};c.remove=function(f,e){c(f,"",b(e,{expires:-1}))};c.withConverter=a;return c}return a(function(){})}));var date=new Date(),currentHour=date.getHours(),body=document.getElementsByTagName("body")[0],nightModeButton=document.createElement("button"),nightModeEl=document.createElement("div"),nightModeStyle=document.createElement("style"),head=document.getElementsByTagName("head")[0],nightModeApplicable=(currentHour>20||currentHour<7)?true:false;if(nightModeApplicable){nightModeButton.innerHTML="Night Mode";nightModeButton.setAttribute("id","night-mode-toggle");nightModeButton.setAttribute("class","off");nightModeButton.setAttribute("onclick","toggleNightMode()");nightModeEl.setAttribute("id","night-mode-overlay");nightModeStyle.type="text/css";nightModeStyle.innerHTML="#night-mode-overlay { position:fixed;top:0;left:0;z-index:10000;height:100%;width:100%;background:rgba(0,0,0,0.65);pointer-events:none; }";head.appendChild(nightModeStyle);body.appendChild(nightModeButton)}function toggleNightMode(){var a=document.getElementById("night-mode-overlay"),b=a!==null?true:false;if(b){if(!nightModeApplicable){return}a.parentNode.removeChild(a);nightModeButton.classList="off";Cookies.remove("night-mode-on")}else{body.appendChild(nightModeEl);nightModeButton.classList="on";Cookies.set("night-mode-on",1)}}if(Cookies.get("night-mode-on")){toggleNightMode()};