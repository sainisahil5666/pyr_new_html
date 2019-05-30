(function(){var t=function(t,i){function e(){this.constructor=t}for(var o in i)n.call(i,o)&&(t[o]=i[o]);return e.prototype=i.prototype,t.prototype=new e,t.__super__=i.prototype,t},n={}.hasOwnProperty,i=function(t,n){return function(){return t.apply(n,arguments)}};this.Animation=function(){function t(t){var n,i,e,o,s,a,c,p;for(this.options=t,this.animatedElements=[],a=$(this.options.selector),o=0,s=a.length;o<s;o++){e=a[o],n=$(e),this.animatedElements.push(n),n.options=$.extend(!0,{},this.options),c=n.data();for(i in c)p=c[i],i in this.options&&(n.options[i]=p)}}return t}(),this.AnimationFadeIn=function(n){function i(t){var n,e,o,s,a;for(this.options=t,i.__super__.constructor.call(this,this.options),a=this.animatedElements,e=function(t){return setTimeout(function(){return t.animate({opacity:1},t.options.speed)},t.options.wait)},o=0,s=a.length;o<s;o++)n=a[o],e(n)}return t(i,n),i}(Animation),this.AnimationInView=function(n){function e(t){this.options=t,this.checkAnimatedElemets=i(this.checkAnimatedElemets,this),this.setupAnimations=i(this.setupAnimations,this),e.__super__.constructor.call(this,this.options),this.setupAnimations()}return t(e,n),e.prototype.setupAnimations=function(){var t,n,i,e,o,s,a,c;for(s=this.animatedElements,n=0,e=s.length;n<e;n++)t=s[n],t.css(t.options.css);for($(window).bind("scroll",this.checkAnimatedElemets),$(window).bind("resize",this.checkAnimatedElemets),a=this.animatedElements,c=[],i=0,o=a.length;i<o;i++)t=a[i],c.push(function(t,n){return this.doAnimatedElement=n,setTimeout(function(){return this.doAnimatedElement(t)},t.options.wait)}(t,this.doAnimatedElement));return c},e.prototype.checkAnimatedElemets=function(){var t,n,i,e,o,s;for(s=$(window).scrollTop()+$(window).height(),e=this.animatedElements,o=[],n=0,i=e.length;n<i;n++)t=e[n],o.push(this.doAnimatedElement(t));return o},e.prototype.doAnimatedElement=function(t){var n;if(n=$(window).scrollTop()+$(window).height(),n+t.options.offsetTop>t.offset().top)return t.animate({opacity:1,top:0},t.options.speed)},e}(Animation),this.AnimationFixedOnTop=function(){function t(t){this.options=t,this.checkAnimatedElemets=i(this.checkAnimatedElemets,this),this.checkUndoAnimatedElements=i(this.checkUndoAnimatedElements,this),this.setupAnimations=i(this.setupAnimations,this),this.animatedElements=$(this.options.selector),this.undoElements=[],this.setupAnimations()}return t.prototype.setupAnimations=function(){return $(window).bind("scroll",this.checkAnimatedElemets),$(window).bind("resize",this.checkAnimatedElemets),this.checkAnimatedElemets()},t.prototype.checkUndoAnimatedElements=function(){var t,n,i,e,o,s,a,c,p,r;for(r=$(window).scrollTop(),i=[],c=this.undoElements,n=e=0,s=c.length;e<s;n=++e)t=c[n],r<t.top&&(t.el.css(t.css),t.el.removeClass("fixed"),i.push(n));for(p=[],o=0,a=i.length;o<a;o++)n=i[o],p.push(this.undoElements.slice(n,1));return p},t.prototype.checkAnimatedElemets=function(){var t;return this.checkUndoAnimatedElements(),t=$(window).scrollTop(),this.animatedElements.each(function(n){return function(i,e){var o,s;if(o=$(e),"fixed"!==o.css("position"))return s=o.offset(),t>s.top?(n.undoElements.push({el:o,top:s.top,css:{position:o.css("position"),left:o.css("left")}}),o.css({position:"fixed",top:0,left:s.left}),o.addClass("fixed")):void 0}}(this))},t}(),window.Fancybox=function(){function t(){this.setupFancybox()}return t.prototype.setupFancybox=function(){return $(".fancybox").fancybox({maxWidth:1e3,fitToView:!0,width:"90%",height:"70%",autoSize:!0,closeClick:!1,openEffect:"none",closeEffect:"none",helpers:{overlay:{locked:!1}}})},t}(),this.Tooltips=function(){function t(t){$(t).each(function(){var t;return t=$(this),t.tooltipster({theme:t.data("tooltip-theme")||"tooltipster-light",contentAsHTML:t.data("tooltip-html")||!0,animation:t.data("tooltip-animation")||"grow",position:t.data("tooltip-position")||"bottom",maxWidth:t.data("tooltip-max-width")||null})})}return t}(),this.Application=function(){function t(){var t;this.options={animations:{fixedOnTop:{selector:".fixed-on-top"},fadeIn:{selector:".fade-in-on-load",wait:1200,speed:1700},inView:{selector:".animate-if-in-view",speed:830,wait:1200,offsetTop:100,css:{opacity:0,position:"relative",top:"100px"}}}},t=this.options.animations,this.animationFixedOnTop=new AnimationFixedOnTop(t.fixedOnTop),this.animationInView=new AnimationInView(t.inView),this.animationFadeIn=new AnimationFadeIn(t.fadeIn),this.fancybox=new Fancybox,this.tooltips=new Tooltips(".tooltip")}return t}(),function(t){return Raven.context(function(){return window.application=new Application})}(jQuery)}).call(this);