// http://ejohn.org/blog/simple-javascript-inheritance/
(function(){var d=!1,g=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend
=function(b){function c(){!d&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;d=!0;var
 f=new this;d=!1;for(var a in b)f[a]="function"==typeof b[a]&&"function"==typeof e[a]&&g.test(b[a])?function
(a,b){return function(){var c=this._super;this._super=e[a];var d=b.apply(this,arguments);this._super
=c;return d}}(a,b[a]):b[a];c.prototype=f;c.prototype.constructor=c;c.extend=arguments.callee;return c
}})();
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
(function(){for(var d=0,a=["webkit","moz"],b=0;b<a.length&&!window.requestAnimationFrame;++b)window.requestAnimationFrame
=window[a[b]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[b]+"CancelAnimationFrame"
]||window[a[b]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame
=function(b){var a=(new Date).getTime(),c=Math.max(0,16-(a-d)),e=window.setTimeout(function(){b(a+c)
},c);d=a+c;return e});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout
(a)})})();
