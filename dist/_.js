!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(global,(function(){return e={892:e=>{e.exports=function(e){return null==e?"":""+e}},415:(e,r,t)=>{var n=t(892);e.exports=function(e){return/^\s*$/.test(n(e))}},728:e=>{e.exports=function(e,r,t,n){if(isNaN(e)||null==e)return"";n="string"==typeof n?n:",";var a=(e=e.toFixed(~~r)).split("."),o=a[0],s=a[1]?(t||".")+a[1]:"";return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+n)+s}},579:(e,r,t)=>{var n=t(804);n.mixin({isBlank:t(415),numberFormat:t(728),isUrl:function(e){return/((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(e)},updateQueryString:function(e,r,t){var n=new URL(e),a=n.searchParams;return a.set(r,t),n.search=a.toString(),n.toString()},toKb:function(e,r,t){if(this.isNumber(r)&&(t=r,r=void 0),isNaN(e)||null==e)return"";var n=["B","K","M","G","T","P","E","Z","Y"],a=1e3,o=t||2;if(e<a)return e;var s=r?this.indexOf(n,r):Math.floor(Math.log(e)/Math.log(a));return this.numberFormat(e/Math.pow(a,s),o)+n[s]},ago:function(e){if(e){var r={prefix:"",suffix:" ago",seconds:"%d seconds",minute:"a minute",minutes:"%d minutes",hour:"an hour",hours:"%d hours",day:"a day",days:"%d days",month:"a month",months:"%d months",year:"a year",years:"%d years"},t=function(e,t){return r[e]&&r[e].replace(/%d/i,Math.abs(Math.round(t)))};e=!isNaN(e)||/^\d+$/.test(e)?parseInt(e):e.trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/T/," ").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),e=new Date(e);var n=.001*((new Date).getTime()-e)>>0,a=n/60,o=a/60,s=o/24,i=s/365;return r.prefix+(n<45&&t("seconds",n)||n<90&&t("minute",1)||a<45&&t("minutes",a)||a<90&&t("hour",1)||o<24&&t("hours",o)||o<42&&t("day",1)||s<30&&t("days",s)||s<45&&t("month",1)||s<365&&t("months",s/30)||i<1.5&&t("year",1)||t("years",i))+r.suffix}},t:function(e){var r=Date.now?Date.now():(new Date).getTime();if(!e)return r;if(this.isNumber(e))return r+e;var t=/^(?:\-?\d+\.?\d*|\d*\.?\d+)(y|d|h|m|s)$/i;if(t.test(e)){var n=1e3*parseInt(e.replace(/^(\-?\d+\.?\d*|\d*\.?\d+)(?:y|d|h|m|s)$/i,"$1"));switch(e.replace(t,"$1").toLowerCase()){case"y":return r+31104e3*n;case"d":return r+86400*n;case"h":return r+3600*n;case"m":return r+60*n;case"s":return r+n;default:new Error("unknown exception of 'set operation'")}}}}),e.exports=n},804:e=>{"use strict";e.exports=require("lodash")}},r={},function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}(579);var e,r}));