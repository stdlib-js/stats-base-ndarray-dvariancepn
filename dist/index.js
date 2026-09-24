"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=u(function(y,t){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/stats-strided-dvariancepn/dist').ndarray;function p(i){var r,e;return e=i[0],r=d(i[1]),m(s(e,0),r,c(e),q(e,0),o(e))}t.exports=p
});var f=require("path").join,l=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=n(),a,v=l(f(__dirname,"./native.js"));g(v)?a=j:a=v;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
