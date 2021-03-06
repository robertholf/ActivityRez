/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);// Knockout JavaScript library v2.2.1
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {function j(w){throw w;}var m=!0,p=null,r=!1;function u(w){return function(){return w}};var x=window,y=document,ga=navigator,F=window.jQuery,I=void 0;
function L(w){function ha(a,d,c,e,f){var g=[];a=b.j(function(){var a=d(c,f)||[];0<g.length&&(b.a.Ya(M(g),a),e&&b.r.K(e,p,[c,a,f]));g.splice(0,g.length);b.a.P(g,a)},p,{W:a,Ka:function(){return 0==g.length||!b.a.X(g[0])}});return{M:g,j:a.pa()?a:I}}function M(a){for(;a.length&&!b.a.X(a[0]);)a.splice(0,1);if(1<a.length){for(var d=a[0],c=a[a.length-1],e=[d];d!==c;){d=d.nextSibling;if(!d)return;e.push(d)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}return a}function S(a,b,c,e,f){var g=Math.min,
h=Math.max,k=[],l,n=a.length,q,s=b.length,v=s-n||1,G=n+s+1,J,A,z;for(l=0;l<=n;l++){A=J;k.push(J=[]);z=g(s,l+v);for(q=h(0,l-1);q<=z;q++)J[q]=q?l?a[l-1]===b[q-1]?A[q-1]:g(A[q]||G,J[q-1]||G)+1:q+1:l+1}g=[];h=[];v=[];l=n;for(q=s;l||q;)s=k[l][q]-1,q&&s===k[l][q-1]?h.push(g[g.length]={status:c,value:b[--q],index:q}):l&&s===k[l-1][q]?v.push(g[g.length]={status:e,value:a[--l],index:l}):(g.push({status:"retained",value:b[--q]}),--l);if(h.length&&v.length){a=10*n;var t;for(b=c=0;(f||b<a)&&(t=h[c]);c++){for(e=
0;k=v[e];e++)if(t.value===k.value){t.moved=k.index;k.moved=t.index;v.splice(e,1);b=e=0;break}b+=e}}return g.reverse()}function T(a,d,c,e,f){f=f||{};var g=a&&N(a),g=g&&g.ownerDocument,h=f.templateEngine||O;b.za.vb(c,h,g);c=h.renderTemplate(c,e,f,g);("number"!=typeof c.length||0<c.length&&"number"!=typeof c[0].nodeType)&&j(Error("Template engine must return an array of DOM nodes"));g=r;switch(d){case "replaceChildren":b.e.N(a,c);g=m;break;case "replaceNode":b.a.Ya(a,c);g=m;break;case "ignoreTargetNode":break;
default:j(Error("Unknown renderMode: "+d))}g&&(U(c,e),f.afterRender&&b.r.K(f.afterRender,p,[c,e.$data]));return c}function N(a){return a.nodeType?a:0<a.length?a[0]:p}function U(a,d){if(a.length){var c=a[0],e=a[a.length-1];V(c,e,function(a){b.Da(d,a)});V(c,e,function(a){b.s.ib(a,[d])})}}function V(a,d,c){var e;for(d=b.e.nextSibling(d);a&&(e=a)!==d;)a=b.e.nextSibling(e),(1===e.nodeType||8===e.nodeType)&&c(e)}function W(a,d,c){a=b.g.aa(a);for(var e=b.g.Q,f=0;f<a.length;f++){var g=a[f].key;if(e.hasOwnProperty(g)){var h=
e[g];"function"===typeof h?(g=h(a[f].value))&&j(Error(g)):h||j(Error("This template engine does not support the '"+g+"' binding within its templates"))}}a="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+b.g.ba(a)+" } })()})";return c.createJavaScriptEvaluatorBlock(a)+d}function X(a,d,c,e){function f(a){return function(){return k[a]}}function g(){return k}var h=0,k,l;b.j(function(){var n=c&&c instanceof b.z?c:new b.z(b.a.d(c)),q=n.$data;e&&b.eb(a,n);if(k=("function"==typeof d?
d(n,a):d)||b.J.instance.getBindings(a,n)){if(0===h){h=1;for(var s in k){var v=b.c[s];v&&8===a.nodeType&&!b.e.I[s]&&j(Error("The binding '"+s+"' cannot be used with virtual elements"));if(v&&"function"==typeof v.init&&(v=(0,v.init)(a,f(s),g,q,n))&&v.controlsDescendantBindings)l!==I&&j(Error("Multiple bindings ("+l+" and "+s+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),l=s}h=2}if(2===h)for(s in k)(v=b.c[s])&&"function"==
typeof v.update&&(0,v.update)(a,f(s),g,q,n)}},p,{W:a});return{Nb:l===I}}function Y(a,d,c){var e=m,f=1===d.nodeType;f&&b.e.Ta(d);if(f&&c||b.J.instance.nodeHasBindings(d))e=X(d,p,a,c).Nb;e&&Z(a,d,!f)}function Z(a,d,c){for(var e=b.e.firstChild(d);d=e;)e=b.e.nextSibling(d),Y(a,d,c)}function $(a,b){var c=aa(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:p}function aa(a,b){for(var c=a,e=1,f=[];c=c.nextSibling;){if(H(c)&&(e--,0===e))return f;f.push(c);B(c)&&e++}b||j(Error("Cannot find closing comment tag to match: "+
a.nodeValue));return p}function H(a){return 8==a.nodeType&&(K?a.text:a.nodeValue).match(ia)}function B(a){return 8==a.nodeType&&(K?a.text:a.nodeValue).match(ja)}function P(a,b){for(var c=p;a!=c;)c=a,a=a.replace(ka,function(a,c){return b[c]});return a}function la(){var a=[],d=[];this.save=function(c,e){var f=b.a.i(a,c);0<=f?d[f]=e:(a.push(c),d.push(e))};this.get=function(c){c=b.a.i(a,c);return 0<=c?d[c]:I}}function ba(a,b,c){function e(e){var g=b(a[e]);switch(typeof g){case "boolean":case "number":case "string":case "function":f[e]=
g;break;case "object":case "undefined":var h=c.get(g);f[e]=h!==I?h:ba(g,b,c)}}c=c||new la;a=b(a);if(!("object"==typeof a&&a!==p&&a!==I&&!(a instanceof Date)))return a;var f=a instanceof Array?[]:{};c.save(a,f);var g=a;if(g instanceof Array){for(var h=0;h<g.length;h++)e(h);"function"==typeof g.toJSON&&e("toJSON")}else for(h in g)e(h);return f}function ca(a,d){if(a)if(8==a.nodeType){var c=b.s.Ua(a.nodeValue);c!=p&&d.push({sb:a,Fb:c})}else if(1==a.nodeType)for(var c=0,e=a.childNodes,f=e.length;c<f;c++)ca(e[c],
d)}function Q(a,d,c,e){b.c[a]={init:function(a){b.a.f.set(a,da,{});return{controlsDescendantBindings:m}},update:function(a,g,h,k,l){h=b.a.f.get(a,da);g=b.a.d(g());k=!c!==!g;var n=!h.Za;if(n||d||k!==h.qb)n&&(h.Za=b.a.Ia(b.e.childNodes(a),m)),k?(n||b.e.N(a,b.a.Ia(h.Za)),b.Ea(e?e(l,g):l,a)):b.e.Y(a),h.qb=k}};b.g.Q[a]=r;b.e.I[a]=m}function ea(a,d,c){c&&d!==b.k.q(a)&&b.k.T(a,d);d!==b.k.q(a)&&b.r.K(b.a.Ba,p,[a,"change"])}var b="undefined"!==typeof w?w:{};b.b=function(a,d){for(var c=a.split("."),e=b,f=0;f<
c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};b.p=function(a,b,c){a[b]=c};b.version="2.2.1";b.b("version",b.version);b.a=new function(){function a(a,d){if("input"!==b.a.u(a)||!a.type||"click"!=d.toLowerCase())return r;var c=a.type;return"checkbox"==c||"radio"==c}var d=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,c={},e={};c[/Firefox\/2/i.test(ga.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];c.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
for(var f in c){var g=c[f];if(g.length)for(var h=0,k=g.length;h<k;h++)e[g[h]]=f}var l={propertychange:m},n,c=3;f=y.createElement("div");for(g=f.getElementsByTagName("i");f.innerHTML="\x3c!--[if gt IE "+ ++c+"]><i></i><![endif]--\x3e",g[0];);n=4<c?c:I;return{Na:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],o:function(a,b){for(var d=0,c=a.length;d<c;d++)b(a[d])},i:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var d=0,c=a.length;d<
c;d++)if(a[d]===b)return d;return-1},lb:function(a,b,d){for(var c=0,e=a.length;c<e;c++)if(b.call(d,a[c]))return a[c];return p},ga:function(a,d){var c=b.a.i(a,d);0<=c&&a.splice(c,1)},Ga:function(a){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)0>b.a.i(d,a[c])&&d.push(a[c]);return d},V:function(a,b){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)d.push(b(a[c]));return d},fa:function(a,b){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)b(a[c])&&d.push(a[c]);return d},P:function(a,b){if(b instanceof Array)a.push.apply(a,
b);else for(var d=0,c=b.length;d<c;d++)a.push(b[d]);return a},extend:function(a,b){if(b)for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},ka:function(a){for(;a.firstChild;)b.removeNode(a.firstChild)},Hb:function(a){a=b.a.L(a);for(var d=y.createElement("div"),c=0,e=a.length;c<e;c++)d.appendChild(b.A(a[c]));return d},Ia:function(a,d){for(var c=0,e=a.length,g=[];c<e;c++){var f=a[c].cloneNode(m);g.push(d?b.A(f):f)}return g},N:function(a,d){b.a.ka(a);if(d)for(var c=0,e=d.length;c<e;c++)a.appendChild(d[c])},
Ya:function(a,d){var c=a.nodeType?[a]:a;if(0<c.length){for(var e=c[0],g=e.parentNode,f=0,h=d.length;f<h;f++)g.insertBefore(d[f],e);f=0;for(h=c.length;f<h;f++)b.removeNode(c[f])}},bb:function(a,b){7>n?a.setAttribute("selected",b):a.selected=b},D:function(a){return(a||"").replace(d,"")},Rb:function(a,d){for(var c=[],e=(a||"").split(d),f=0,g=e.length;f<g;f++){var h=b.a.D(e[f]);""!==h&&c.push(h)}return c},Ob:function(a,b){a=a||"";return b.length>a.length?r:a.substring(0,b.length)===b},tb:function(a,b){if(b.compareDocumentPosition)return 16==
(b.compareDocumentPosition(a)&16);for(;a!=p;){if(a==b)return m;a=a.parentNode}return r},X:function(a){return b.a.tb(a,a.ownerDocument)},u:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,d,c){var e=n&&l[d];if(!e&&"undefined"!=typeof F){if(a(b,d)){var f=c;c=function(a,b){var d=this.checked;b&&(this.checked=b.nb!==m);f.call(this,a);this.checked=d}}F(b).bind(d,c)}else!e&&"function"==typeof b.addEventListener?b.addEventListener(d,c,r):"undefined"!=typeof b.attachEvent?b.attachEvent("on"+
d,function(a){c.call(b,a)}):j(Error("Browser doesn't support addEventListener or attachEvent"))},Ba:function(b,d){(!b||!b.nodeType)&&j(Error("element must be a DOM node when calling triggerEvent"));if("undefined"!=typeof F){var c=[];a(b,d)&&c.push({nb:b.checked});F(b).trigger(d,c)}else"function"==typeof y.createEvent?"function"==typeof b.dispatchEvent?(c=y.createEvent(e[d]||"HTMLEvents"),c.initEvent(d,m,m,x,0,0,0,0,0,r,r,r,r,0,b),b.dispatchEvent(c)):j(Error("The supplied element doesn't support dispatchEvent")):
"undefined"!=typeof b.fireEvent?(a(b,d)&&(b.checked=b.checked!==m),b.fireEvent("on"+d)):j(Error("Browser doesn't support triggering events"))},d:function(a){return b.$(a)?a():a},ua:function(a){return b.$(a)?a.t():a},da:function(a,d,c){if(d){var e=/[\w-]+/g,f=a.className.match(e)||[];b.a.o(d.match(e),function(a){var d=b.a.i(f,a);0<=d?c||f.splice(d,1):c&&f.push(a)});a.className=f.join(" ")}},cb:function(a,d){var c=b.a.d(d);if(c===p||c===I)c="";if(3===a.nodeType)a.data=c;else{var e=b.e.firstChild(a);
!e||3!=e.nodeType||b.e.nextSibling(e)?b.e.N(a,[y.createTextNode(c)]):e.data=c;b.a.wb(a)}},ab:function(a,b){a.name=b;if(7>=n)try{a.mergeAttributes(y.createElement("<input name='"+a.name+"'/>"),r)}catch(d){}},wb:function(a){9<=n&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},ub:function(a){if(9<=n){var b=a.style.width;a.style.width=0;a.style.width=b}},Lb:function(a,d){a=b.a.d(a);d=b.a.d(d);for(var c=[],e=a;e<=d;e++)c.push(e);return c},L:function(a){for(var b=[],d=0,c=a.length;d<
c;d++)b.push(a[d]);return b},Pb:6===n,Qb:7===n,Z:n,Oa:function(a,d){for(var c=b.a.L(a.getElementsByTagName("input")).concat(b.a.L(a.getElementsByTagName("textarea"))),e="string"==typeof d?function(a){return a.name===d}:function(a){return d.test(a.name)},f=[],g=c.length-1;0<=g;g--)e(c[g])&&f.push(c[g]);return f},Ib:function(a){return"string"==typeof a&&(a=b.a.D(a))?x.JSON&&x.JSON.parse?x.JSON.parse(a):(new Function("return "+a))():p},xa:function(a,d,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&
j(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(b.a.d(a),d,c)},Jb:function(a,d,c){c=c||{};var e=c.params||{},f=c.includeFields||this.Na,g=a;if("object"==typeof a&&"form"===b.a.u(a))for(var g=a.action,h=f.length-1;0<=h;h--)for(var k=b.a.Oa(a,f[h]),l=k.length-1;0<=l;l--)e[k[l].name]=k[l].value;d=b.a.d(d);var n=y.createElement("form");
n.style.display="none";n.action=g;n.method="post";for(var w in d)a=y.createElement("input"),a.name=w,a.value=b.a.xa(b.a.d(d[w])),n.appendChild(a);for(w in e)a=y.createElement("input"),a.name=w,a.value=e[w],n.appendChild(a);y.body.appendChild(n);c.submitter?c.submitter(n):n.submit();setTimeout(function(){n.parentNode.removeChild(n)},0)}}};b.b("utils",b.a);b.b("utils.arrayForEach",b.a.o);b.b("utils.arrayFirst",b.a.lb);b.b("utils.arrayFilter",b.a.fa);b.b("utils.arrayGetDistinctValues",b.a.Ga);b.b("utils.arrayIndexOf",
b.a.i);b.b("utils.arrayMap",b.a.V);b.b("utils.arrayPushAll",b.a.P);b.b("utils.arrayRemoveItem",b.a.ga);b.b("utils.extend",b.a.extend);b.b("utils.fieldsIncludedWithJsonPost",b.a.Na);b.b("utils.getFormFields",b.a.Oa);b.b("utils.peekObservable",b.a.ua);b.b("utils.postJson",b.a.Jb);b.b("utils.parseJson",b.a.Ib);b.b("utils.registerEventHandler",b.a.n);b.b("utils.stringifyJson",b.a.xa);b.b("utils.range",b.a.Lb);b.b("utils.toggleDomNodeCssClass",b.a.da);b.b("utils.triggerEvent",b.a.Ba);b.b("utils.unwrapObservable",
b.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments);a=c.shift();return function(){return b.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});b.a.f=new function(){var a=0,d="__ko__"+(new Date).getTime(),c={};return{get:function(a,d){var c=b.a.f.la(a,r);return c===I?I:c[d]},set:function(a,d,c){c===I&&b.a.f.la(a,r)===I||(b.a.f.la(a,m)[d]=c)},la:function(b,f){var g=b[d];if(!g||!("null"!==g&&c[g])){if(!f)return I;g=b[d]="ko"+
a++;c[g]={}}return c[g]},clear:function(a){var b=a[d];return b?(delete c[b],a[d]=p,m):r}}};b.b("utils.domData",b.a.f);b.b("utils.domData.clear",b.a.f.clear);b.a.F=new function(){function a(a,d){var e=b.a.f.get(a,c);e===I&&d&&(e=[],b.a.f.set(a,c,e));return e}function d(c){var e=a(c,r);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);b.a.f.clear(c);"function"==typeof F&&"function"==typeof F.cleanData&&F.cleanData([c]);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}
var c="__ko_domNodeDisposal__"+(new Date).getTime(),e={1:m,8:m,9:m},f={1:m,9:m};return{Ca:function(b,d){"function"!=typeof d&&j(Error("Callback must be a function"));a(b,m).push(d)},Xa:function(d,e){var f=a(d,r);f&&(b.a.ga(f,e),0==f.length&&b.a.f.set(d,c,I))},A:function(a){if(e[a.nodeType]&&(d(a),f[a.nodeType])){var c=[];b.a.P(c,a.getElementsByTagName("*"));for(var k=0,l=c.length;k<l;k++)d(c[k])}return a},removeNode:function(a){b.A(a);a.parentNode&&a.parentNode.removeChild(a)}}};b.A=b.a.F.A;b.removeNode=
b.a.F.removeNode;b.b("cleanNode",b.A);b.b("removeNode",b.removeNode);b.b("utils.domNodeDisposal",b.a.F);b.b("utils.domNodeDisposal.addDisposeCallback",b.a.F.Ca);b.b("utils.domNodeDisposal.removeDisposeCallback",b.a.F.Xa);b.a.ta=function(a){var d;if("undefined"!=typeof F)if(F.parseHTML)d=F.parseHTML(a);else{if((d=F.clean([a]))&&d[0]){for(a=d[0];a.parentNode&&11!==a.parentNode.nodeType;)a=a.parentNode;a.parentNode&&a.parentNode.removeChild(a)}}else{var c=b.a.D(a).toLowerCase();d=y.createElement("div");
c=c.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!c.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!c.indexOf("<td")||!c.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];a="ignored<div>"+c[1]+a+c[2]+"</div>";for("function"==typeof x.innerShiv?d.appendChild(x.innerShiv(a)):d.innerHTML=a;c[0]--;)d=d.lastChild;d=b.a.L(d.lastChild.childNodes)}return d};b.a.ca=function(a,d){b.a.ka(a);d=b.a.d(d);if(d!==p&&d!==I)if("string"!=typeof d&&(d=d.toString()),
"undefined"!=typeof F)F(a).html(d);else for(var c=b.a.ta(d),e=0;e<c.length;e++)a.appendChild(c[e])};b.b("utils.parseHtmlFragment",b.a.ta);b.b("utils.setHtml",b.a.ca);var R={};b.s={ra:function(a){"function"!=typeof a&&j(Error("You can only pass a function to ko.memoization.memoize()"));var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);R[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},hb:function(a,b){var c=R[a];c===I&&j(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return c.apply(p,b||[]),m}finally{delete R[a]}},ib:function(a,d){var c=[];ca(a,c);for(var e=0,f=c.length;e<f;e++){var g=c[e].sb,h=[g];d&&b.a.P(h,d);b.s.hb(c[e].Fb,h);g.nodeValue="";g.parentNode&&g.parentNode.removeChild(g)}},Ua:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:p}};b.b("memoization",b.s);b.b("memoization.memoize",b.s.ra);b.b("memoization.unmemoize",b.s.hb);b.b("memoization.parseMemoText",b.s.Ua);b.b("memoization.unmemoizeDomNodeAndDescendants",
b.s.ib);b.Ma={throttle:function(a,d){a.throttleEvaluation=d;var c=p;return b.j({read:a,write:function(b){clearTimeout(c);c=setTimeout(function(){a(b)},d)}})},notify:function(a,d){a.equalityComparer="always"==d?u(r):b.m.fn.equalityComparer;return a}};b.b("extenders",b.Ma);b.fb=function(a,d,c){this.target=a;this.ha=d;this.rb=c;b.p(this,"dispose",this.B)};b.fb.prototype.B=function(){this.Cb=m;this.rb()};b.S=function(){this.w={};b.a.extend(this,b.S.fn);b.p(this,"subscribe",this.ya);b.p(this,"extend",
this.extend);b.p(this,"getSubscriptionsCount",this.yb)};b.S.fn={ya:function(a,d,c){c=c||"change";var e=new b.fb(this,d?a.bind(d):a,function(){b.a.ga(this.w[c],e)}.bind(this));this.w[c]||(this.w[c]=[]);this.w[c].push(e);return e},notifySubscribers:function(a,d){d=d||"change";this.w[d]&&b.r.K(function(){b.a.o(this.w[d].slice(0),function(b){b&&b.Cb!==m&&b.ha(a)})},this)},yb:function(){var a=0,b;for(b in this.w)this.w.hasOwnProperty(b)&&(a+=this.w[b].length);return a},extend:function(a){var d=this;if(a)for(var c in a){var e=
b.Ma[c];"function"==typeof e&&(d=e(d,a[c]))}return d}};b.Qa=function(a){return"function"==typeof a.ya&&"function"==typeof a.notifySubscribers};b.b("subscribable",b.S);b.b("isSubscribable",b.Qa);var C=[];b.r={mb:function(a){C.push({ha:a,La:[]})},end:function(){C.pop()},Wa:function(a){b.Qa(a)||j(Error("Only subscribable things can act as dependencies"));if(0<C.length){var d=C[C.length-1];d&&!(0<=b.a.i(d.La,a))&&(d.La.push(a),d.ha(a))}},K:function(a,b,c){try{return C.push(p),a.apply(b,c||[])}finally{C.pop()}}};
var ma={undefined:m,"boolean":m,number:m,string:m};b.m=function(a){function d(){if(0<arguments.length){if(!d.equalityComparer||!d.equalityComparer(c,arguments[0]))d.H(),c=arguments[0],d.G();return this}b.r.Wa(d);return c}var c=a;b.S.call(d);d.t=function(){return c};d.G=function(){d.notifySubscribers(c)};d.H=function(){d.notifySubscribers(c,"beforeChange")};b.a.extend(d,b.m.fn);b.p(d,"peek",d.t);b.p(d,"valueHasMutated",d.G);b.p(d,"valueWillMutate",d.H);return d};b.m.fn={equalityComparer:function(a,
b){return a===p||typeof a in ma?a===b:r}};var E=b.m.Kb="__ko_proto__";b.m.fn[E]=b.m;b.ma=function(a,d){return a===p||a===I||a[E]===I?r:a[E]===d?m:b.ma(a[E],d)};b.$=function(a){return b.ma(a,b.m)};b.Ra=function(a){return"function"==typeof a&&a[E]===b.m||"function"==typeof a&&a[E]===b.j&&a.zb?m:r};b.b("observable",b.m);b.b("isObservable",b.$);b.b("isWriteableObservable",b.Ra);b.R=function(a){0==arguments.length&&(a=[]);a!==p&&(a!==I&&!("length"in a))&&j(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));
var d=b.m(a);b.a.extend(d,b.R.fn);return d};b.R.fn={remove:function(a){for(var b=this.t(),c=[],e="function"==typeof a?a:function(b){return b===a},f=0;f<b.length;f++){var g=b[f];e(g)&&(0===c.length&&this.H(),c.push(g),b.splice(f,1),f--)}c.length&&this.G();return c},removeAll:function(a){if(a===I){var d=this.t(),c=d.slice(0);this.H();d.splice(0,d.length);this.G();return c}return!a?[]:this.remove(function(d){return 0<=b.a.i(a,d)})},destroy:function(a){var b=this.t(),c="function"==typeof a?a:function(b){return b===
a};this.H();for(var e=b.length-1;0<=e;e--)c(b[e])&&(b[e]._destroy=m);this.G()},destroyAll:function(a){return a===I?this.destroy(u(m)):!a?[]:this.destroy(function(d){return 0<=b.a.i(a,d)})},indexOf:function(a){var d=this();return b.a.i(d,a)},replace:function(a,b){var c=this.indexOf(a);0<=c&&(this.H(),this.t()[c]=b,this.G())}};b.a.o("pop push reverse shift sort splice unshift".split(" "),function(a){b.R.fn[a]=function(){var b=this.t();this.H();b=b[a].apply(b,arguments);this.G();return b}});b.a.o(["slice"],
function(a){b.R.fn[a]=function(){var b=this();return b[a].apply(b,arguments)}});b.b("observableArray",b.R);b.j=function(a,d,c){function e(){b.a.o(z,function(a){a.B()});z=[]}function f(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(t),t=setTimeout(g,a)):g()}function g(){if(!q)if(n&&w())A();else{q=m;try{var a=b.a.V(z,function(a){return a.target});b.r.mb(function(c){var d;0<=(d=b.a.i(a,c))?a[d]=I:z.push(c.ya(f))});for(var c=s.call(d),e=a.length-1;0<=e;e--)a[e]&&z.splice(e,1)[0].B();n=m;h.notifySubscribers(l,
"beforeChange");l=c}finally{b.r.end()}h.notifySubscribers(l);q=r;z.length||A()}}function h(){if(0<arguments.length)return"function"===typeof v?v.apply(d,arguments):j(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")),this;n||g();b.r.Wa(h);return l}function k(){return!n||0<z.length}var l,n=r,q=r,s=a;s&&"object"==typeof s?(c=s,s=c.read):(c=c||{},s||(s=c.read));"function"!=typeof s&&j(Error("Pass a function that returns the value of the ko.computed"));
var v=c.write,G=c.disposeWhenNodeIsRemoved||c.W||p,w=c.disposeWhen||c.Ka||u(r),A=e,z=[],t=p;d||(d=c.owner);h.t=function(){n||g();return l};h.xb=function(){return z.length};h.zb="function"===typeof c.write;h.B=function(){A()};h.pa=k;b.S.call(h);b.a.extend(h,b.j.fn);b.p(h,"peek",h.t);b.p(h,"dispose",h.B);b.p(h,"isActive",h.pa);b.p(h,"getDependenciesCount",h.xb);c.deferEvaluation!==m&&g();if(G&&k()){A=function(){b.a.F.Xa(G,arguments.callee);e()};b.a.F.Ca(G,A);var D=w,w=function(){return!b.a.X(G)||D()}}return h};
b.Bb=function(a){return b.ma(a,b.j)};w=b.m.Kb;b.j[w]=b.m;b.j.fn={};b.j.fn[w]=b.j;b.b("dependentObservable",b.j);b.b("computed",b.j);b.b("isComputed",b.Bb);b.gb=function(a){0==arguments.length&&j(Error("When calling ko.toJS, pass the object you want to convert."));return ba(a,function(a){for(var c=0;b.$(a)&&10>c;c++)a=a();return a})};b.toJSON=function(a,d,c){a=b.gb(a);return b.a.xa(a,d,c)};b.b("toJS",b.gb);b.b("toJSON",b.toJSON);b.k={q:function(a){switch(b.a.u(a)){case "option":return a.__ko__hasDomDataOptionValue__===
m?b.a.f.get(a,b.c.options.sa):7>=b.a.Z?a.getAttributeNode("value").specified?a.value:a.text:a.value;case "select":return 0<=a.selectedIndex?b.k.q(a.options[a.selectedIndex]):I;default:return a.value}},T:function(a,d){switch(b.a.u(a)){case "option":switch(typeof d){case "string":b.a.f.set(a,b.c.options.sa,I);"__ko__hasDomDataOptionValue__"in a&&delete a.__ko__hasDomDataOptionValue__;a.value=d;break;default:b.a.f.set(a,b.c.options.sa,d),a.__ko__hasDomDataOptionValue__=m,a.value="number"===typeof d?
d:""}break;case "select":for(var c=a.options.length-1;0<=c;c--)if(b.k.q(a.options[c])==d){a.selectedIndex=c;break}break;default:if(d===p||d===I)d="";a.value=d}}};b.b("selectExtensions",b.k);b.b("selectExtensions.readValue",b.k.q);b.b("selectExtensions.writeValue",b.k.T);var ka=/\@ko_token_(\d+)\@/g,na=["true","false"],oa=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;b.g={Q:[],aa:function(a){var d=b.a.D(a);if(3>d.length)return[];"{"===d.charAt(0)&&(d=d.substring(1,d.length-1));a=[];for(var c=
p,e,f=0;f<d.length;f++){var g=d.charAt(f);if(c===p)switch(g){case '"':case "'":case "/":c=f,e=g}else if(g==e&&"\\"!==d.charAt(f-1)){g=d.substring(c,f+1);a.push(g);var h="@ko_token_"+(a.length-1)+"@",d=d.substring(0,c)+h+d.substring(f+1),f=f-(g.length-h.length),c=p}}e=c=p;for(var k=0,l=p,f=0;f<d.length;f++){g=d.charAt(f);if(c===p)switch(g){case "{":c=f;l=g;e="}";break;case "(":c=f;l=g;e=")";break;case "[":c=f,l=g,e="]"}g===l?k++:g===e&&(k--,0===k&&(g=d.substring(c,f+1),a.push(g),h="@ko_token_"+(a.length-
1)+"@",d=d.substring(0,c)+h+d.substring(f+1),f-=g.length-h.length,c=p))}e=[];d=d.split(",");c=0;for(f=d.length;c<f;c++)k=d[c],l=k.indexOf(":"),0<l&&l<k.length-1?(g=k.substring(l+1),e.push({key:P(k.substring(0,l),a),value:P(g,a)})):e.push({unknown:P(k,a)});return e},ba:function(a){var d="string"===typeof a?b.g.aa(a):a,c=[];a=[];for(var e,f=0;e=d[f];f++)if(0<c.length&&c.push(","),e.key){var g;a:{g=e.key;var h=b.a.D(g);switch(h.length&&h.charAt(0)){case "'":case '"':break a;default:g="'"+h+"'"}}e=e.value;
c.push(g);c.push(":");c.push(e);e=b.a.D(e);0<=b.a.i(na,b.a.D(e).toLowerCase())?e=r:(h=e.match(oa),e=h===p?r:h[1]?"Object("+h[1]+")"+h[2]:e);e&&(0<a.length&&a.push(", "),a.push(g+" : function(__ko_value) { "+e+" = __ko_value; }"))}else e.unknown&&c.push(e.unknown);d=c.join("");0<a.length&&(d=d+", '_ko_property_writers' : { "+a.join("")+" } ");return d},Eb:function(a,d){for(var c=0;c<a.length;c++)if(b.a.D(a[c].key)==d)return m;return r},ea:function(a,d,c,e,f){if(!a||!b.Ra(a)){if((a=d()._ko_property_writers)&&
a[c])a[c](e)}else(!f||a.t()!==e)&&a(e)}};b.b("expressionRewriting",b.g);b.b("expressionRewriting.bindingRewriteValidators",b.g.Q);b.b("expressionRewriting.parseObjectLiteral",b.g.aa);b.b("expressionRewriting.preProcessBindings",b.g.ba);b.b("jsonExpressionRewriting",b.g);b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",b.g.ba);var K="\x3c!--test--\x3e"===y.createComment("test").text,ja=K?/^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/:/^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/,ia=K?/^\x3c!--\s*\/ko\s*--\x3e$/:
/^\s*\/ko\s*$/,pa={ul:m,ol:m};b.e={I:{},childNodes:function(a){return B(a)?aa(a):a.childNodes},Y:function(a){if(B(a)){a=b.e.childNodes(a);for(var d=0,c=a.length;d<c;d++)b.removeNode(a[d])}else b.a.ka(a)},N:function(a,d){if(B(a)){b.e.Y(a);for(var c=a.nextSibling,e=0,f=d.length;e<f;e++)c.parentNode.insertBefore(d[e],c)}else b.a.N(a,d)},Va:function(a,b){B(a)?a.parentNode.insertBefore(b,a.nextSibling):a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)},Pa:function(a,d,c){c?B(a)?a.parentNode.insertBefore(d,
c.nextSibling):c.nextSibling?a.insertBefore(d,c.nextSibling):a.appendChild(d):b.e.Va(a,d)},firstChild:function(a){return!B(a)?a.firstChild:!a.nextSibling||H(a.nextSibling)?p:a.nextSibling},nextSibling:function(a){B(a)&&(a=$(a));return a.nextSibling&&H(a.nextSibling)?p:a.nextSibling},jb:function(a){return(a=B(a))?a[1]:p},Ta:function(a){if(pa[b.a.u(a)]){var d=a.firstChild;if(d){do if(1===d.nodeType){var c;c=d.firstChild;var e=p;if(c){do if(e)e.push(c);else if(B(c)){var f=$(c,m);f?c=f:e=[c]}else H(c)&&
(e=[c]);while(c=c.nextSibling)}if(c=e){e=d.nextSibling;for(f=0;f<c.length;f++)e?a.insertBefore(c[f],e):a.appendChild(c[f])}}while(d=d.nextSibling)}}}};b.b("virtualElements",b.e);b.b("virtualElements.allowedBindings",b.e.I);b.b("virtualElements.emptyNode",b.e.Y);b.b("virtualElements.insertAfter",b.e.Pa);b.b("virtualElements.prepend",b.e.Va);b.b("virtualElements.setDomNodeChildren",b.e.N);b.J=function(){this.Ha={}};b.a.extend(b.J.prototype,{nodeHasBindings:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind")!=
p;case 8:return b.e.jb(a)!=p;default:return r}},getBindings:function(a,b){var c=this.getBindingsString(a,b);return c?this.parseBindingsString(c,b,a):p},getBindingsString:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind");case 8:return b.e.jb(a);default:return p}},parseBindingsString:function(a,d,c){try{var e;if(!(e=this.Ha[a])){var f=this.Ha,g,h="with($context){with($data||{}){return{"+b.g.ba(a)+"}}}";g=new Function("$context","$element",h);e=f[a]=g}return e(d,c)}catch(k){j(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+a))}}});b.J.instance=new b.J;b.b("bindingProvider",b.J);b.c={};b.z=function(a,d,c){d?(b.a.extend(this,d),this.$parentContext=d,this.$parent=d.$data,this.$parents=(d.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=a,this.ko=b);this.$data=a;c&&(this[c]=a)};b.z.prototype.createChildContext=function(a,d){return new b.z(a,this,d)};b.z.prototype.extend=function(a){var d=b.a.extend(new b.z,this);return b.a.extend(d,a)};b.eb=function(a,d){if(2==
arguments.length)b.a.f.set(a,"__ko_bindingContext__",d);else return b.a.f.get(a,"__ko_bindingContext__")};b.Fa=function(a,d,c){1===a.nodeType&&b.e.Ta(a);return X(a,d,c,m)};b.Ea=function(a,b){(1===b.nodeType||8===b.nodeType)&&Z(a,b,m)};b.Da=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&j(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||x.document.body;Y(a,b,m)};b.ja=function(a){switch(a.nodeType){case 1:case 8:var d=b.eb(a);if(d)return d;
if(a.parentNode)return b.ja(a.parentNode)}return I};b.pb=function(a){return(a=b.ja(a))?a.$data:I};b.b("bindingHandlers",b.c);b.b("applyBindings",b.Da);b.b("applyBindingsToDescendants",b.Ea);b.b("applyBindingsToNode",b.Fa);b.b("contextFor",b.ja);b.b("dataFor",b.pb);var fa={"class":"className","for":"htmlFor"};b.c.attr={update:function(a,d){var c=b.a.d(d())||{},e;for(e in c)if("string"==typeof e){var f=b.a.d(c[e]),g=f===r||f===p||f===I;g&&a.removeAttribute(e);8>=b.a.Z&&e in fa?(e=fa[e],g?a.removeAttribute(e):
a[e]=f):g||a.setAttribute(e,f.toString());"name"===e&&b.a.ab(a,g?"":f.toString())}}};b.c.checked={init:function(a,d,c){b.a.n(a,"click",function(){var e;if("checkbox"==a.type)e=a.checked;else if("radio"==a.type&&a.checked)e=a.value;else return;var f=d(),g=b.a.d(f);"checkbox"==a.type&&g instanceof Array?(e=b.a.i(g,a.value),a.checked&&0>e?f.push(a.value):!a.checked&&0<=e&&f.splice(e,1)):b.g.ea(f,c,"checked",e,m)});"radio"==a.type&&!a.name&&b.c.uniqueName.init(a,u(m))},update:function(a,d){var c=b.a.d(d());
"checkbox"==a.type?a.checked=c instanceof Array?0<=b.a.i(c,a.value):c:"radio"==a.type&&(a.checked=a.value==c)}};b.c.css={update:function(a,d){var c=b.a.d(d());if("object"==typeof c)for(var e in c){var f=b.a.d(c[e]);b.a.da(a,e,f)}else c=String(c||""),b.a.da(a,a.__ko__cssValue,r),a.__ko__cssValue=c,b.a.da(a,c,m)}};b.c.enable={update:function(a,d){var c=b.a.d(d());c&&a.disabled?a.removeAttribute("disabled"):!c&&!a.disabled&&(a.disabled=m)}};b.c.disable={update:function(a,d){b.c.enable.update(a,function(){return!b.a.d(d())})}};
b.c.event={init:function(a,d,c,e){var f=d()||{},g;for(g in f)(function(){var f=g;"string"==typeof f&&b.a.n(a,f,function(a){var g,n=d()[f];if(n){var q=c();try{var s=b.a.L(arguments);s.unshift(e);g=n.apply(e,s)}finally{g!==m&&(a.preventDefault?a.preventDefault():a.returnValue=r)}q[f+"Bubble"]===r&&(a.cancelBubble=m,a.stopPropagation&&a.stopPropagation())}})})()}};b.c.foreach={Sa:function(a){return function(){var d=a(),c=b.a.ua(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:b.C.oa};
b.a.d(d);return{foreach:c.data,as:c.as,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:b.C.oa}}},init:function(a,d){return b.c.template.init(a,b.c.foreach.Sa(d))},update:function(a,d,c,e,f){return b.c.template.update(a,b.c.foreach.Sa(d),c,e,f)}};b.g.Q.foreach=r;b.e.I.foreach=m;b.c.hasfocus={init:function(a,d,c){function e(e){a.__ko_hasfocusUpdating=m;var f=a.ownerDocument;"activeElement"in
f&&(e=f.activeElement===a);f=d();b.g.ea(f,c,"hasfocus",e,m);a.__ko_hasfocusUpdating=r}var f=e.bind(p,m),g=e.bind(p,r);b.a.n(a,"focus",f);b.a.n(a,"focusin",f);b.a.n(a,"blur",g);b.a.n(a,"focusout",g)},update:function(a,d){var c=b.a.d(d());a.__ko_hasfocusUpdating||(c?a.focus():a.blur(),b.r.K(b.a.Ba,p,[a,c?"focusin":"focusout"]))}};b.c.html={init:function(){return{controlsDescendantBindings:m}},update:function(a,d){b.a.ca(a,d())}};var da="__ko_withIfBindingData";Q("if");Q("ifnot",r,m);Q("with",m,r,function(a,
b){return a.createChildContext(b)});b.c.options={update:function(a,d,c){"select"!==b.a.u(a)&&j(Error("options binding applies only to SELECT elements"));for(var e=0==a.length,f=b.a.V(b.a.fa(a.childNodes,function(a){return a.tagName&&"option"===b.a.u(a)&&a.selected}),function(a){return b.k.q(a)||a.innerText||a.textContent}),g=a.scrollTop,h=b.a.d(d());0<a.length;)b.A(a.options[0]),a.remove(0);if(h){c=c();var k=c.optionsIncludeDestroyed;"number"!=typeof h.length&&(h=[h]);if(c.optionsCaption){var l=y.createElement("option");
b.a.ca(l,c.optionsCaption);b.k.T(l,I);a.appendChild(l)}d=0;for(var n=h.length;d<n;d++){var q=h[d];if(!q||!q._destroy||k){var l=y.createElement("option"),s=function(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c},v=s(q,c.optionsValue,q);b.k.T(l,b.a.d(v));q=s(q,c.optionsText,v);b.a.cb(l,q);a.appendChild(l)}}h=a.getElementsByTagName("option");d=k=0;for(n=h.length;d<n;d++)0<=b.a.i(f,b.k.q(h[d]))&&(b.a.bb(h[d],m),k++);a.scrollTop=g;e&&"value"in c&&ea(a,b.a.ua(c.value),m);b.a.ub(a)}}};
b.c.options.sa="__ko.optionValueDomData__";b.c.selectedOptions={init:function(a,d,c){b.a.n(a,"change",function(){var e=d(),f=[];b.a.o(a.getElementsByTagName("option"),function(a){a.selected&&f.push(b.k.q(a))});b.g.ea(e,c,"value",f)})},update:function(a,d){"select"!=b.a.u(a)&&j(Error("values binding applies only to SELECT elements"));var c=b.a.d(d());c&&"number"==typeof c.length&&b.a.o(a.getElementsByTagName("option"),function(a){var d=0<=b.a.i(c,b.k.q(a));b.a.bb(a,d)})}};b.c.style={update:function(a,
d){var c=b.a.d(d()||{}),e;for(e in c)if("string"==typeof e){var f=b.a.d(c[e]);a.style[e]=f||""}}};b.c.submit={init:function(a,d,c,e){"function"!=typeof d()&&j(Error("The value for a submit binding must be a function"));b.a.n(a,"submit",function(b){var c,h=d();try{c=h.call(e,a)}finally{c!==m&&(b.preventDefault?b.preventDefault():b.returnValue=r)}})}};b.c.text={update:function(a,d){b.a.cb(a,d())}};b.e.I.text=m;b.c.uniqueName={init:function(a,d){if(d()){var c="ko_unique_"+ ++b.c.uniqueName.ob;b.a.ab(a,
c)}}};b.c.uniqueName.ob=0;b.c.value={init:function(a,d,c){function e(){h=r;var e=d(),f=b.k.q(a);b.g.ea(e,c,"value",f)}var f=["change"],g=c().valueUpdate,h=r;g&&("string"==typeof g&&(g=[g]),b.a.P(f,g),f=b.a.Ga(f));if(b.a.Z&&("input"==a.tagName.toLowerCase()&&"text"==a.type&&"off"!=a.autocomplete&&(!a.form||"off"!=a.form.autocomplete))&&-1==b.a.i(f,"propertychange"))b.a.n(a,"propertychange",function(){h=m}),b.a.n(a,"blur",function(){h&&e()});b.a.o(f,function(c){var d=e;b.a.Ob(c,"after")&&(d=function(){setTimeout(e,
0)},c=c.substring(5));b.a.n(a,c,d)})},update:function(a,d){var c="select"===b.a.u(a),e=b.a.d(d()),f=b.k.q(a),g=e!=f;0===e&&(0!==f&&"0"!==f)&&(g=m);g&&(f=function(){b.k.T(a,e)},f(),c&&setTimeout(f,0));c&&0<a.length&&ea(a,e,r)}};b.c.visible={update:function(a,d){var c=b.a.d(d()),e="none"!=a.style.display;c&&!e?a.style.display="":!c&&e&&(a.style.display="none")}};b.c.click={init:function(a,d,c,e){return b.c.event.init.call(this,a,function(){var a={};a.click=d();return a},c,e)}};b.v=function(){};b.v.prototype.renderTemplateSource=
function(){j(Error("Override renderTemplateSource"))};b.v.prototype.createJavaScriptEvaluatorBlock=function(){j(Error("Override createJavaScriptEvaluatorBlock"))};b.v.prototype.makeTemplateSource=function(a,d){if("string"==typeof a){d=d||y;var c=d.getElementById(a);c||j(Error("Cannot find template with ID "+a));return new b.l.h(c)}if(1==a.nodeType||8==a.nodeType)return new b.l.O(a);j(Error("Unknown template type: "+a))};b.v.prototype.renderTemplate=function(a,b,c,e){a=this.makeTemplateSource(a,e);
return this.renderTemplateSource(a,b,c)};b.v.prototype.isTemplateRewritten=function(a,b){return this.allowTemplateRewriting===r?m:this.makeTemplateSource(a,b).data("isRewritten")};b.v.prototype.rewriteTemplate=function(a,b,c){a=this.makeTemplateSource(a,c);b=b(a.text());a.text(b);a.data("isRewritten",m)};b.b("templateEngine",b.v);var qa=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,ra=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;b.za={vb:function(a,
d,c){d.isTemplateRewritten(a,c)||d.rewriteTemplate(a,function(a){return b.za.Gb(a,d)},c)},Gb:function(a,b){return a.replace(qa,function(a,e,f,g,h,k,l){return W(l,e,b)}).replace(ra,function(a,e){return W(e,"\x3c!-- ko --\x3e",b)})},kb:function(a){return b.s.ra(function(d,c){d.nextSibling&&b.Fa(d.nextSibling,a,c)})}};b.b("__tr_ambtns",b.za.kb);b.l={};b.l.h=function(a){this.h=a};b.l.h.prototype.text=function(){var a=b.a.u(this.h),a="script"===a?"text":"textarea"===a?"value":"innerHTML";if(0==arguments.length)return this.h[a];
var d=arguments[0];"innerHTML"===a?b.a.ca(this.h,d):this.h[a]=d};b.l.h.prototype.data=function(a){if(1===arguments.length)return b.a.f.get(this.h,"templateSourceData_"+a);b.a.f.set(this.h,"templateSourceData_"+a,arguments[1])};b.l.O=function(a){this.h=a};b.l.O.prototype=new b.l.h;b.l.O.prototype.text=function(){if(0==arguments.length){var a=b.a.f.get(this.h,"__ko_anon_template__")||{};a.Aa===I&&a.ia&&(a.Aa=a.ia.innerHTML);return a.Aa}b.a.f.set(this.h,"__ko_anon_template__",{Aa:arguments[0]})};b.l.h.prototype.nodes=
function(){if(0==arguments.length)return(b.a.f.get(this.h,"__ko_anon_template__")||{}).ia;b.a.f.set(this.h,"__ko_anon_template__",{ia:arguments[0]})};b.b("templateSources",b.l);b.b("templateSources.domElement",b.l.h);b.b("templateSources.anonymousTemplate",b.l.O);var O;b.wa=function(a){a!=I&&!(a instanceof b.v)&&j(Error("templateEngine must inherit from ko.templateEngine"));O=a};b.va=function(a,d,c,e,f){c=c||{};(c.templateEngine||O)==I&&j(Error("Set a template engine before calling renderTemplate"));
f=f||"replaceChildren";if(e){var g=N(e);return b.j(function(){var h=d&&d instanceof b.z?d:new b.z(b.a.d(d)),k="function"==typeof a?a(h.$data,h):a,h=T(e,f,k,h,c);"replaceNode"==f&&(e=h,g=N(e))},p,{Ka:function(){return!g||!b.a.X(g)},W:g&&"replaceNode"==f?g.parentNode:g})}return b.s.ra(function(e){b.va(a,d,c,e,"replaceNode")})};b.Mb=function(a,d,c,e,f){function g(a,b){U(b,k);c.afterRender&&c.afterRender(b,a)}function h(d,e){k=f.createChildContext(b.a.d(d),c.as);k.$index=e;var g="function"==typeof a?
a(d,k):a;return T(p,"ignoreTargetNode",g,k,c)}var k;return b.j(function(){var a=b.a.d(d)||[];"undefined"==typeof a.length&&(a=[a]);a=b.a.fa(a,function(a){return c.includeDestroyed||a===I||a===p||!b.a.d(a._destroy)});b.r.K(b.a.$a,p,[e,a,h,c,g])},p,{W:e})};b.c.template={init:function(a,d){var c=b.a.d(d());if("string"!=typeof c&&!c.name&&(1==a.nodeType||8==a.nodeType))c=1==a.nodeType?a.childNodes:b.e.childNodes(a),c=b.a.Hb(c),(new b.l.O(a)).nodes(c);return{controlsDescendantBindings:m}},update:function(a,
d,c,e,f){d=b.a.d(d());c={};e=m;var g,h=p;"string"!=typeof d&&(c=d,d=c.name,"if"in c&&(e=b.a.d(c["if"])),e&&"ifnot"in c&&(e=!b.a.d(c.ifnot)),g=b.a.d(c.data));"foreach"in c?h=b.Mb(d||a,e&&c.foreach||[],c,a,f):e?(f="data"in c?f.createChildContext(g,c.as):f,h=b.va(d||a,f,c,a)):b.e.Y(a);f=h;(g=b.a.f.get(a,"__ko__templateComputedDomDataKey__"))&&"function"==typeof g.B&&g.B();b.a.f.set(a,"__ko__templateComputedDomDataKey__",f&&f.pa()?f:I)}};b.g.Q.template=function(a){a=b.g.aa(a);return 1==a.length&&a[0].unknown||
b.g.Eb(a,"name")?p:"This template engine does not support anonymous templates nested within its templates"};b.e.I.template=m;b.b("setTemplateEngine",b.wa);b.b("renderTemplate",b.va);b.a.Ja=function(a,b,c){a=a||[];b=b||[];return a.length<=b.length?S(a,b,"added","deleted",c):S(b,a,"deleted","added",c)};b.b("utils.compareArrays",b.a.Ja);b.a.$a=function(a,d,c,e,f){function g(a,b){t=l[b];w!==b&&(z[a]=t);t.na(w++);M(t.M);s.push(t);A.push(t)}function h(a,c){if(a)for(var d=0,e=c.length;d<e;d++)c[d]&&b.a.o(c[d].M,
function(b){a(b,d,c[d].U)})}d=d||[];e=e||{};var k=b.a.f.get(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===I,l=b.a.f.get(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],n=b.a.V(l,function(a){return a.U}),q=b.a.Ja(n,d),s=[],v=0,w=0,B=[],A=[];d=[];for(var z=[],n=[],t,D=0,C,E;C=q[D];D++)switch(E=C.moved,C.status){case "deleted":E===I&&(t=l[v],t.j&&t.j.B(),B.push.apply(B,M(t.M)),e.beforeRemove&&(d[D]=t,A.push(t)));v++;break;case "retained":g(D,v++);break;case "added":E!==I?
g(D,E):(t={U:C.value,na:b.m(w++)},s.push(t),A.push(t),k||(n[D]=t))}h(e.beforeMove,z);b.a.o(B,e.beforeRemove?b.A:b.removeNode);for(var D=0,k=b.e.firstChild(a),H;t=A[D];D++){t.M||b.a.extend(t,ha(a,c,t.U,f,t.na));for(v=0;q=t.M[v];k=q.nextSibling,H=q,v++)q!==k&&b.e.Pa(a,q,H);!t.Ab&&f&&(f(t.U,t.M,t.na),t.Ab=m)}h(e.beforeRemove,d);h(e.afterMove,z);h(e.afterAdd,n);b.a.f.set(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult",s)};b.b("utils.setDomNodeChildrenFromArrayMapping",b.a.$a);b.C=function(){this.allowTemplateRewriting=
r};b.C.prototype=new b.v;b.C.prototype.renderTemplateSource=function(a){var d=!(9>b.a.Z)&&a.nodes?a.nodes():p;if(d)return b.a.L(d.cloneNode(m).childNodes);a=a.text();return b.a.ta(a)};b.C.oa=new b.C;b.wa(b.C.oa);b.b("nativeTemplateEngine",b.C);b.qa=function(){var a=this.Db=function(){if("undefined"==typeof F||!F.tmpl)return 0;try{if(0<=F.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,c,e){e=e||{};2>a&&j(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
var f=b.data("precompiled");f||(f=b.text()||"",f=F.template(p,"{{ko_with $item.koBindingContext}}"+f+"{{/ko_with}}"),b.data("precompiled",f));b=[c.$data];c=F.extend({koBindingContext:c},e.templateOptions);c=F.tmpl(f,b,c);c.appendTo(y.createElement("div"));F.fragments={};return c};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){y.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(F.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},F.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};b.qa.prototype=new b.v;w=new b.qa;0<w.Db&&b.wa(w);b.b("jqueryTmplTemplateEngine",b.qa)}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?L(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],L):L(x.ko={});m;
})();//
// store.js by Frank Kohlhepp
// Copyright (c) 2011 - 2012 Frank Kohlhepp
// https://github.com/frankkohlhepp/store-js
// License: MIT-license
//
(function () {
    var has = function (object, key) {
        return Object.prototype.hasOwnProperty.call(object, key);
    };
    
    var objectGetLength = function (object) {
        var count = 0;
        for (var key in object) {
            if (has(object, key)) { count++; }
        }
        
        return count;
    };
    
    var arrayIndexOf = function (array, item, from) {
        var length = array.length >>> 0;
        for (var i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
            if (array[i] === item) { return i; }
        }
        
        return -1;
    };
    
    var arrayContains = function (array, item, from) {
        return arrayIndexOf(array, item, from) !== -1;
    };
    
    var arrayInclude = function (array, item) {
        if (!arrayContains(array, item)) { array.push(item); }
        return array;
    };
    
    var Store = this.Store = function (name, defaults, watcherSpeed) {
        this.name = name;
        this.defaults = defaults || {};
        this.watcherSpeed = watcherSpeed || 500;
        this.listeners = {};
        this.ls = {};
        
        // Apply defaults
        this.applyDefaults();
    };
    
    Store.clear = function () {
        localStorage.clear();
    };
    
    Store.prototype.applyDefaults = function () {
        for (var key in this.defaults) {
            if (has(this.defaults, key) && this.get(key) === undefined) {
                this.set(key, this.defaults[key]);
            }
        }
        
        return this;
    };
    
    Store.prototype.watcher = function (force) {
        if (this.watcherTimer) {
            clearTimeout(this.watcherTimer);
        }
        
        if (objectGetLength(this.listeners) || force) {
            this.newObject = this.toObject();
            
            if (this.oldObject) {
                for (var key in this.newObject) {
                    if (has(this.newObject, key) && this.newObject[key] !== this.oldObject[key]) {
                        this.fireEvent(key, this.newObject[key]);
                    }
                }
                
                for (var key in this.oldObject) {
                    if (has(this.oldObject, key) && !has(this.newObject, key)) {
                        this.fireEvent(key, this.newObject[key]);
                    }
                }
            }
            
            this.oldObject = this.newObject;
            var that = this;
            this.watcherTimer = setTimeout(function () {
                that.watcher();
            }, this.watcherSpeed);
        }
        
        return this;
    };
    
    Store.prototype.get = function (name) {
	    var _n = "store." + this.name + "." + name;
	    var value = null;
	    try{
        	value = localStorage.getItem(_n);
        }
        catch (e) {
	        if( typeof this.ls[_n] != 'undefined'){
		        value = this.ls[_n];
	        }
        }
        if (value === null) {
	        //lets see if we have a local version
	        if( typeof this.ls[_n] != 'undefined'){
		        value = this.ls[_n];
	        }
	        
	        //check cookie
		    if (value === null) {
		    	value = readCookie(_n);    
	        }
	        
		    if (value === null) {
		    	return undefined;    
	        }
	        
		}
        try { return JSON.parse(value); } catch (e) { return null; }
    };
    
    Store.prototype.set = function (name, value) {
        if (value === undefined) {
            this.remove(name);
        } else {
            if (typeof value === "function") { value = null; }
            try { value = JSON.stringify(value); } catch (e) { value = null; }
            
            var _n = "store." + this.name + "." + name;
            
            try{
            	localStorage.setItem(_n, value);
            }
            catch (e){
				this.ls[_n] = value;
				createCookie(_n,value);
				$ar.Notification('Booking may not work while in private browsing on Safari!','error');
			}
        }
        
        return this;
    };
    
    Store.prototype.remove = function (name) {
	    var _n = "store." + this.name + "." + name;
	    try{
	        localStorage.removeItem(_n);
			delete this.ls[_n];
		}
		catch (e){
			//no nothing
			if( typeof this.ls[_n] != 'undefined' ){
				eraseCookie(_n);
				delete this.ls[_n];	
			}
		}
        
        return this.applyDefaults();
    };
    
    Store.prototype.reset = function () {
        var name = "store." + this.name + ".";
        
        try{
	        for (var i = (localStorage.length - 1); i >= 0; i--) {
	            if (localStorage.key(i).substring(0, name.length) === name) {
	                localStorage.removeItem(localStorage.key(i));
	            }
	        }
			for ( var k in this.ls ){
				delete this.ls[k];
				eraseCookie(k);
			}
        }
        catch (e){
			for ( var k in this.ls ){
				delete this.ls[k];
				eraseCookie(k);
			}
        }
        
        return this.applyDefaults();
    };
    
    Store.prototype.toObject = function () {
        var values = {};
        var name = "store." + this.name + ".";
        
        try{
	        for (var i = (localStorage.length - 1); i >= 0; i--) {
	            if (localStorage.key(i).substring(0, name.length) === name) {
	                var key = localStorage.key(i).substring(name.length);
	                var value = this.get(key);
	                if (value !== undefined) { values[key] = value; }
	            }
	        }
        }
        catch (e){
			for ( var k in this.ls ){
				var key = k.substr(name.length);
				values[k] = this.ls[k];
			}
		}
        
        return values;
    };
    
    Store.prototype.fromObject = function (values, merge) {
        if (!merge) { this.reset(); }
        for (var key in values) {
            if (has(values, key)) {
                this.set(key, values[key]);
            }
        }
        
        return this;
    };
    
    Store.prototype.addEvent = function (selector, callback) {
        this.watcher(true);
        if (!this.listeners[selector]) { this.listeners[selector] = []; }
        arrayInclude(this.listeners[selector], callback);
        return this;
    };
    
    Store.prototype.removeEvent = function (selector, callback) {
        for (var i = (this.listeners[selector].length - 1); i >= 0; i--) {
            if (this.listeners[selector][i] === callback) { this.listeners[selector].splice(i, 1); }
        }
        
        if (!this.listeners[selector].length) { delete this.listeners[selector]; }
        return this;
    };
    
    Store.prototype.fireEvent = function (name, value) {
        var selectors = [name, "*"];
        for (var i = 0; i < selectors.length; i++) {
            var selector = selectors[i];
            if (this.listeners[selector]) {
                for (var j = 0; j < this.listeners[selector].length; j++) {
                    this.listeners[selector][j](value, name, this.name);
                }
            }
        }
        
        return this;
    };
    
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}
	
}());
var Path = {
    'version': "0.8.4",
    'map': function (path) {
        if (Path.routes.defined.hasOwnProperty(path)) {
            return Path.routes.defined[path];
        } else {
            return new Path.core.route(path);
        }
    },
    'root': function (path) {
        Path.routes.root = path;
    },
    'rescue': function (fn) {
        Path.routes.rescue = fn;
    },
    'history': {
        'initial':{}, // Empty container for "Initial Popstate" checking variables.
        'pushState': function(state, title, path){
            if(Path.history.supported){
                if(Path.dispatch(path)){
                    history.pushState(state, title, path);
                }
            } else {
                if(Path.history.fallback){
                    window.location.hash = "#" + path;
                }
            }
        },
        'popState': function(event){
            var initialPop = !Path.history.initial.popped && location.href == Path.history.initial.URL;
            Path.history.initial.popped = true;
            if(initialPop) return;
            Path.dispatch(document.location.pathname);
        },
        'listen': function(fallback){
            Path.history.supported = !!(window.history && window.history.pushState);
            Path.history.fallback  = fallback;

            if(Path.history.supported){
                Path.history.initial.popped = ('state' in window.history), Path.history.initial.URL = location.href;
                window.onpopstate = Path.history.popState;
            } else {
                if(Path.history.fallback){
                    for(route in Path.routes.defined){
                        if(route.charAt(0) != "#"){
                          Path.routes.defined["#"+route] = Path.routes.defined[route];
                          Path.routes.defined["#"+route].path = "#"+route;
                        }
                    }
                    Path.listen();
                }
            }
        }
    },
    'match': function (path, parameterize) {
        var params = {}, route = null, possible_routes, slice, i, j, compare;
        for (route in Path.routes.defined) {
            if (route !== null && route !== undefined) {
                route = Path.routes.defined[route];
                possible_routes = route.partition();
                for (j = 0; j < possible_routes.length; j++) {
                    slice = possible_routes[j];
                    compare = path;
                    if (slice.search(/:/) > 0) {
                        for (i = 0; i < slice.split("/").length; i++) {
                            if ((i < compare.split("/").length) && (slice.split("/")[i].charAt(0) === ":")) {
                                params[slice.split('/')[i].replace(/:/, '')] = compare.split("/")[i];
                                compare = compare.replace(compare.split("/")[i], slice.split("/")[i]);
                            }
                        }
                    }
                    if (slice === compare) {
                        if (parameterize) {
                            route.params = params;
                        }
                        return route;
                    }
                }
            }
        }
        return null;
    },
    'dispatch': function (passed_route) {
        var previous_route, matched_route;
        if (Path.routes.current !== passed_route) {
            Path.routes.previous = Path.routes.current;
            Path.routes.current = passed_route;
            matched_route = Path.match(passed_route, true);

            if (Path.routes.previous) {
                previous_route = Path.match(Path.routes.previous);
                if (previous_route !== null && previous_route.do_exit !== null) {
                    previous_route.do_exit();
                }
            }

            if (matched_route !== null) {
                matched_route.run();
                return true;
            } else {
                if (Path.routes.rescue !== null) {
                    Path.routes.rescue();
                }
            }
        }
    },
    'listen': function () {
        var fn = function(){ Path.dispatch(location.hash); }

        if (location.hash === "") {
            if (Path.routes.root !== null) {
                location.hash = Path.routes.root;
            }
        }

        // The 'document.documentMode' checks below ensure that PathJS fires the right events
        // even in IE "Quirks Mode".
        if ("onhashchange" in window && (!document.documentMode || document.documentMode >= 8)) {
            window.onhashchange = fn;
        } else {
            setInterval(fn, 50);
        }

        if(location.hash !== "") {
            Path.dispatch(location.hash);
        }
    },
    'core': {
        'route': function (path) {
            this.path = path;
            this.action = null;
            this.do_enter = [];
            this.do_exit = null;
            this.params = {};
            Path.routes.defined[path] = this;
        }
    },
    'routes': {
        'current': null,
        'root': null,
        'rescue': null,
        'previous': null,
        'defined': {}
    }
};
Path.core.route.prototype = {
    'to': function (fn) {
        this.action = fn;
        return this;
    },
    'enter': function (fns) {
        if (fns instanceof Array) {
            this.do_enter = this.do_enter.concat(fns);
        } else {
            this.do_enter.push(fns);
        }
        return this;
    },
    'exit': function (fn) {
        this.do_exit = fn;
        return this;
    },
    'partition': function () {
        var parts = [], options = [], re = /\(([^}]+?)\)/g, text, i;
        while (text = re.exec(this.path)) {
            parts.push(text[1]);
        }
        options.push(this.path.split("(")[0]);
        for (i = 0; i < parts.length; i++) {
            options.push(options[options.length - 1] + parts[i]);
        }
        return options;
    },
    'run': function () {
        var halt_execution = false, i, result, previous;

        if (Path.routes.defined[this.path].hasOwnProperty("do_enter")) {
            if (Path.routes.defined[this.path].do_enter.length > 0) {
                for (i = 0; i < Path.routes.defined[this.path].do_enter.length; i++) {
                    result = Path.routes.defined[this.path].do_enter[i].apply(this, null);
                    if (result === false) {
                        halt_execution = true;
                        break;
                    }
                }
            }
        }
        if (!halt_execution) {
            Path.routes.defined[this.path].action();
        }
    }
};/*! $.noUiSlider
 @version 5.0.0
 @author Leon Gersen https://twitter.com/LeonGersen
 @license WTFPL http://www.wtfpl.net/about/
 @documentation http://refreshless.com/nouislider/
*/

// ==ClosureCompiler==
// @externs_url http://refreshless.com/externs/jquery-1.8.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// @warning_level VERBOSE
// ==/ClosureCompiler==

/*jshint laxcomma: true */
/*jshint smarttabs: true */
/*jshint sub: true */

/*jslint browser: true */
/*jslint continue: true */
/*jslint plusplus: true */
/*jslint white: true */
/*jslint sub: true */

(function( $ ){

	'use strict';

	if ( $['zepto'] && !$.fn.removeData ) {
		throw new ReferenceError('Zepto is loaded without the data module.');
	}

	$.fn['noUiSlider'] = function( options, rebuild ){

		var
		// Cache the document and body selectors;
		 doc = $(document)
		,body = $('body')

		// Namespace for binding and unbinding slider events;
		,namespace = '.nui'

		// Copy of the current value function;
		,$VAL = $.fn.val

		// Re-usable list of classes;
		,clsList = [
		/*  0 */  'noUi-base'
		/*  1 */ ,'noUi-origin'
		/*  2 */ ,'noUi-handle'
		/*  3 */ ,'noUi-input'
		/*  4 */ ,'noUi-active'
		/*  5 */ ,'noUi-state-tap'
		/*  6 */ ,'noUi-target'
		/*  7 */ ,'-lower'
		/*  8 */ ,'-upper'
		/*  9 */ ,'noUi-connect'
		/* 10 */ ,'noUi-horizontal'
		/* 11 */ ,'noUi-vertical'
		/* 12 */ ,'noUi-background'
		/* 13 */ ,'noUi-stacking'
		/* 14 */ ,'noUi-block'
		/* 15 */ ,'noUi-state-blocked'
		/* 16 */ ,'noUi-ltr'
		/* 17 */ ,'noUi-rtl'
		/* 18 */ ,'noUi-dragable'
		/* 19 */ ,'noUi-extended'
		/* 20 */ ,'noUi-state-drag'
		]

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		,actions = window.navigator['pointerEnabled'] ? {
			 start: 'pointerdown'
			,move: 'pointermove'
			,end: 'pointerup'
		} : window.navigator['msPointerEnabled'] ? {
			 start: 'MSPointerDown'
			,move: 'MSPointerMove'
			,end: 'MSPointerUp'
		} : {
			 start: 'mousedown touchstart'
			,move: 'mousemove touchmove'
			,end: 'mouseup touchend'
		};


// Percentage calculation

	// (percentage) How many percent is this value of this range?
		function fromPercentage ( range, value ) {
			return (value * 100) / ( range[1] - range[0] );
		}

	// (percentage) Where is this value on this range?
		function toPercentage ( range, value ) {
			return fromPercentage( range, range[0] < 0 ?
				value + Math.abs(range[0]) :
					value - range[0] );
		}

	// (value) How much is this percentage on this range?
		function isPercentage ( range, value ) {
			return ((value * ( range[1] - range[0] )) / 100) + range[0];
		}


// Type tests

	// Test in an object is an instance of jQuery or Zepto.
		function isInstance ( a ) {
			return a instanceof $ || ( $['zepto'] && $['zepto']['isZ'](a) );
		}

	// Checks whether a value is numerical.
		function isNumeric ( a ) {
			return !isNaN( parseFloat( a ) ) && isFinite( a );
		}


// General helper functions

	// Test an array of objects, and calls them if they are a function.
		function call ( functions, scope ) {

			// Allow the passing of an unwrapped function.
			// Leaves other code a more comprehensible.
			if( !$.isArray( functions ) ){
				functions = [ functions ];
			}

			$.each( functions, function(){
				if (typeof this === 'function') {
					this.call(scope);
				}
			});
		}

	// Returns a proxy to set a target using the public value method.
		function setN ( target, number ) {

			return function(){

				// Determine the correct position to set,
				// leave the other one unchanged.
				var val = [null, null];
				val[ number ] = $(this).val();

				// Trigger the 'set' callback
				target.val(val, true);
			};
		}

	// Round a value to the closest 'to'.
		function closest ( value, to ){
			return Math.round(value / to) * to;
		}

	// Format output value to specified standards.
		function format ( value, options ) {

			// Round the value to the resolution that was set
			// with the serialization options.
			value = value.toFixed( options['decimals'] );

			// Rounding away decimals might cause a value of -0
			// when using very small ranges. Remove those cases.
			if ( parseFloat(value) === 0 ) {
				value = value.replace('-0', '0');
			}

			// Apply the proper decimal mark to the value.
			return value.replace( '.', options['serialization']['mark'] );
		}

	// Determine the handle closest to an event.
		function closestHandle ( handles, location, style ) {

			if ( handles.length === 1 ) {
				return handles[0];
			}

			var total = handles[0].offset()[style] +
						handles[1].offset()[style];

			return handles[ location < total / 2 ? 0 : 1 ];
		}

	// Round away small numbers in floating point implementation.
		function digits ( value, round ) {
			return parseFloat(value.toFixed(round));
		}

// Event abstraction

	// Provide a clean event with standardized offset values.
		function fixEvent ( e ) {

			// Prevent scrolling and panning on touch events, while
			// attempting to slide. The tap event also depends on this.
			e.preventDefault();

			// Filter the event to register the type, which can be
			// touch, mouse or pointer. Offset changes need to be
			// made on an event specific basis.
			var  touch = e.type.indexOf('touch') === 0
				,mouse = e.type.indexOf('mouse') === 0
				,pointer = e.type.indexOf('pointer') === 0
				,x,y, event = e;

			// IE10 implemented pointer events with a prefix;
			if ( e.type.indexOf('MSPointer') === 0 ) {
				pointer = true;
			}

			// Get the originalEvent, if the event has been wrapped
			// by jQuery. Zepto doesn't wrap the event.
			if ( e.originalEvent ) {
				e = e.originalEvent;
			}

			if ( touch ) {
				// noUiSlider supports one movement at a time,
				// so we can select the first 'changedTouch'.
				x = e.changedTouches[0].pageX;
				y = e.changedTouches[0].pageY;
			}
			if ( mouse || pointer ) {

				// Polyfill the pageXOffset and pageYOffset
				// variables for IE7 and IE8;
				if( !pointer && window.pageXOffset === undefined ){
					window.pageXOffset = document.documentElement.scrollLeft;
					window.pageYOffset = document.documentElement.scrollTop;
				}

				x = e.clientX + window.pageXOffset;
				y = e.clientY + window.pageYOffset;
			}

			return $.extend( event, {
				 'pointX': x
				,'pointY': y
				,cursor: mouse
			});
		}

	// Handler for attaching events trough a proxy
		function attach ( events, element, callback, pass ) {

			var target = pass.target;

			// Add the noUiSlider namespace to all events.
			events = events.replace( /\s/g, namespace + ' ' ) + namespace;

			// Bind a closure on the target.
			return element.on( events, function( e ){

				// jQuery and Zepto handle unset attributes differently.
				var disabled = target.attr('disabled');
					disabled = !( disabled === undefined || disabled === null );

				// Test if there is anything that should prevent an event
				// from being handled, such as a disabled state or an active
				// 'tap' transition.
				if( target.hasClass('noUi-state-tap') || disabled ) {
					return false;
				}

				// Call the event handler with three arguments:
				// - The event;
				// - An object with data for the event;
				// - The slider options;
				// Having the slider options as a function parameter prevents
				// getting it in every function, which muddies things up.
				callback (
					 fixEvent( e )
					,pass
					,target.data('base').data('options')
				);
			});
		}


// Serialization and value storage

	// Store a value on all serialization targets, or get the current value.
		function serialize ( a ) {

			/*jshint validthis: true */

			// Re-scope target for availability within .each;
			var target = this.target;

			// Get the value for this handle
			if ( a === undefined ) {
				return this.element.data('value');
			}

			// Write the value to all serialization objects
			// or store a new value on the handle
			if ( a === true ) {
				a = this.element.data('value');
			} else {
				this.element.data('value', a);
			}

			// Prevent a serialization call if the value wasn't initialized.
			if ( a === undefined ) {
				return;
			}

			// If the provided element was a function,
			// call it with the slider as scope. Otherwise,
			// simply call the function on the object.
			$.each( this.elements, function() {
				if ( typeof this === 'function' ) {
					this.call(target, a);
				} else {
					this[0][this[1]](a);
				}
			});
		}

	// Map serialization to [ element, method ]. Attach events where required.
		function storeElement ( handle, item, number ) {

			// Add a change event to the supplied jQuery objects,
			// which triggers the value-setting function on the target.
			if ( isInstance( item ) ) {

				var elements = [], target = handle.data('target');

				// Link the field to the other handle if the
				// slider is inverted.
				if ( handle.data('options').direction ) {
					number = number ? 0 : 1;
				}

				// Loop all items so the change event is properly bound,
				// and the items can individually be added to the array.
				item.each(function(){

					// Bind the change event.
					$(this).on('change' + namespace, setN( target, number ));

					// Store the element with the proper handler.
					elements.push([ $(this), 'val' ]);
				});

				return elements;
			}

			// Append a new input to the noUiSlider base.
			// Prevent the change event from flowing upward.
			if ( typeof item === 'string' ) {

				item = [ $('<input type="hidden" name="'+ item +'">')
					.appendTo(handle)
					.addClass(clsList[3])
					.change(function ( e ) {
						e.stopPropagation();
					}), 'val'];
			}

			return [item];
		}

	// Access point and abstraction for serialization.
		function store ( handle, i, serialization ) {

			var elements = [];

			// Loops all items in the provided serialization setting,
			// add the proper events to them or create new input fields,
			// and add them as data to the handle so they can be kept
			// in sync with the slider value.
			$.each( serialization['to'][i], function( index ){
				elements = elements.concat(
					storeElement( handle, serialization['to'][i][index], i )
				);
			});

			return {
				 element: handle
				,elements: elements
				,target: handle.data('target')
				,'val': serialize
			};
		}


// Handle placement

	// Fire callback on unsuccessful handle movement.
		function block ( base, stateless ) {

			var target = base.data('target');

			if ( !target.hasClass(clsList[14]) ){

				// The visual effects should not always be applied.
				if ( !stateless ) {
					target.addClass(clsList[15]);
					setTimeout(function(){
						target.removeClass(clsList[15]);
					}, 450);
				}

				target.addClass(clsList[14]);
				call( base.data('options').block, target );
			}
		}

	// Change inline style and apply proper classes.
		function placeHandle ( handle, to ) {

			var settings = handle.data('options');

			to = digits(to, 7);

			// If the slider can move, remove the class
			// indicating the block state.
			handle.data('target').removeClass(clsList[14]);

			// Set handle to new location
			handle.css( settings['style'], to + '%' ).data('pct', to);

			// Force proper handle stacking
			if ( handle.is(':first-child') ) {
				handle.toggleClass(clsList[13], to > 50 );
			}

			if ( settings['direction'] ) {
				to = 100 - to;
			}

			// Write the value to the serialization object.
			handle.data('store').val(
				format ( isPercentage( settings['range'], to ), settings )
			);
		}

	// Test suggested values and apply margin, step.
		function setHandle ( handle, to ) {

			var base = handle.data('base'), settings = base.data('options'),
				handles = base.data('handles'), lower = 0, upper = 100;

			// Catch invalid user input
			if ( !isNumeric( to ) ){
				return false;
			}

			// Handle the step option.
			if ( settings['step'] ){
				to = closest( to, settings['step'] );
			}

			if ( handles.length > 1 ){
				if ( handle[0] !== handles[0][0] ) {
					lower = digits(handles[0].data('pct')+settings['margin'],7);
				} else {
					upper = digits(handles[1].data('pct')-settings['margin'],7);
				}
			}

			// Limit position to boundaries. When the handles aren't set yet,
			// they return -1 as a percentage value.
			to = Math.min( Math.max( to, lower ), upper < 0 ? 100 : upper );

			// Stop handling this call if the handle can't move past another.
			// Return an array containing the hit limit, so the caller can
			// provide feedback. ( block callback ).
			if ( to === handle.data('pct') ) {
				return [!lower ? false : lower, upper === 100 ? false : upper];
			}

			placeHandle ( handle, to );
			return true;
		}

	// Handles movement by tapping
		function jump ( base, handle, to, callbacks ) {

			// Flag the slider as it is now in a transitional state.
			// Transition takes 300 ms, so re-enable the slider afterwards.
			base.addClass(clsList[5]);
			setTimeout(function(){
				base.removeClass(clsList[5]);
			}, 300);

			// Move the handle to the new position.
			setHandle( handle, to );

			// Trigger the 'slide' and 'set' callbacks,
			// pass the target so that it is 'this'.
			call( callbacks, base.data('target') );

			base.data('target').change();
		}


// Event handlers

	// Handle movement on document for handle and range drag.
		function move ( event, Dt, Op ) {

			// Map event movement to a slider percentage.
			var handles = Dt.handles, limits,
				proposal = event[ Dt.point ] - Dt.start[ Dt.point ];

			proposal = ( proposal * 100 ) / Dt.size;

			if ( handles.length === 1 ) {

				// Run handle placement, receive true for success or an
				// array with potential limits.
				limits = setHandle( handles[0], Dt.positions[0] + proposal );

				if ( limits !== true ) {

					if ( $.inArray ( handles[0].data('pct'), limits ) >= 0 ){
						block ( Dt.base, !Op['margin'] );
					}
					return;
				}

			} else {

				// Dragging the range could be implemented by forcing the
				// 'move' event on both handles, but this solution proved
				// lagging on slower devices, resulting in range errors. The
				// slightly ugly solution below is considerably faster, and
				// it can't move the handle out of sync. Bypass the standard
				// setting method, as other checks are needed.

				var l1, u1, l2, u2;

				// Round the proposal to the step setting.
				if ( Op['step'] ) {
					proposal = closest( proposal, Op['step'] );
				}

				// Determine the new position, store it twice. Once for
				// limiting, once for checking whether placement should occur.
				l1 = l2 = Dt.positions[0] + proposal;
				u1 = u2 = Dt.positions[1] + proposal;

				// Round the values within a sensible range.
				if ( l1 < 0 ) {
					u1 += -1 * l1;
					l1 = 0;
				} else if ( u1 > 100 ) {
					l1 -= ( u1 - 100 );
					u1 = 100;
				}

				// Don't perform placement if no handles are to be changed.
				// Check if the lowest value is set to zero.
				if ( l2 < 0 && !l1 && !handles[0].data('pct') ) {
					return;
				}
				// The highest value is limited to 100%.
				if ( u1 === 100 && u2 > 100 && handles[1].data('pct') === 100 ){
					return;
				}

				placeHandle ( handles[0], l1 );
				placeHandle ( handles[1], u1 );
			}

			// Trigger the 'slide' event, if the handle was moved.
			call( Op['slide'], Dt.target );
		}

	// Unbind move events on document, call callbacks.
		function end ( event, Dt, Op ) {

			// The handle is no longer active, so remove the class.
			if ( Dt.handles.length === 1 ) {
				Dt.handles[0].data('grab').removeClass(clsList[4]);
			}

			// Remove cursor styles and text-selection events bound to the body.
			if ( event.cursor ) {
				body.css('cursor', '').off( namespace );
			}

			// Unbind the move and end events, which are added on 'start'.
			doc.off( namespace );

			// Trigger the change event.
			Dt.target.removeClass( clsList[14] +' '+ clsList[20]).change();

			// Trigger the 'end' callback.
			call( Op['set'], Dt.target );
		}

	// Bind move events on document.
		function start ( event, Dt, Op ) {

			// Mark the handle as 'active' so it can be styled.
			if( Dt.handles.length === 1 ) {
				Dt.handles[0].data('grab').addClass(clsList[4]);
			}

			// A drag should never propagate up to the 'tap' event.
			event.stopPropagation();

			// Attach the move event.
			attach ( actions.move, doc, move, {
				 start: event
				,base: Dt.base
				,target: Dt.target
				,handles: Dt.handles
				,positions: [ Dt.handles[0].data('pct')
					   ,Dt.handles[ Dt.handles.length - 1 ].data('pct') ]
				,point: Op['orientation'] ? 'pointY' : 'pointX'
				,size: Op['orientation'] ? Dt.base.height() : Dt.base.width()
			});

			// Unbind all movement when the drag ends.
			attach ( actions.end, doc, end, {
				 target: Dt.target
				,handles: Dt.handles
			});

			// Text selection isn't an issue on touch devices,
			// so adding additional callbacks isn't required.
			if ( event.cursor ) {

				// Prevent the 'I' cursor and extend the range-drag cursor.
				body.css('cursor', $(event.target).css('cursor'));

				// Mark the target with a dragging state.
				if ( Dt.handles.length > 1 ) {
					Dt.target.addClass(clsList[20]);
				}

				// Prevent text selection when dragging the handles.
				body.on('selectstart' + namespace, function( ){
					return false;
				});
			}
		}

	// Move closest handle to tapped location.
		function tap ( event, Dt, Op ) {

			var base = Dt.base, handle, to, point, size;

			// The tap event shouldn't propagate up to trigger 'edge'.
			event.stopPropagation();

			// Determine the direction of the slider.
			if ( Op['orientation'] ) {
				point = event['pointY'];
				size = base.height();
			} else {
				point = event['pointX'];
				size = base.width();
			}

			// Find the closest handle and calculate the tapped point.
			handle = closestHandle( base.data('handles'), point, Op['style'] );
			to = (( point - base.offset()[ Op['style'] ] ) * 100 ) / size;

			// The set handle to the new position.
			jump( base, handle, to, [ Op['slide'], Op['set'] ]);
		}

	// Move handle to edges when target gets tapped.
		function edge ( event, Dt, Op ) {

			var handles = Dt.base.data('handles'), to, i;

			i = Op['orientation'] ? event['pointY'] : event['pointX'];
			i = i < Dt.base.offset()[Op['style']];

			to = i ? 0 : 100;
			i = i ? 0 : handles.length - 1;

			jump ( Dt.base, handles[i], to, [ Op['slide'], Op['set'] ]);
		}

// API

	// Validate and standardize input.
		function test ( input, sliders ){

	/*	Every input option is tested and parsed. This'll prevent
		endless validation in internal methods. These tests are
		structured with an item for every option available. An
		option can be marked as required by setting the 'r' flag.
		The testing function is provided with three arguments:
			- The provided value for the option;
			- A reference to the options object;
			- The name for the option;

		The testing function returns false when an error is detected,
		or true when everything is OK. It can also modify the option
		object, to make sure all values can be correctly looped elsewhere. */

			function values ( a ) {

				if ( a.length !== 2 ){
					return false;
				}

				// Convert the array to floats
				a = [ parseFloat(a[0]), parseFloat(a[1]) ];

				// Test if all values are numerical
				if( !isNumeric(a[0]) || !isNumeric(a[1]) ){
					return false;
				}

				// The lowest value must really be the lowest value.
				if( a[1] < a[0] ){
					return false;
				}

				return a;
			}

			var serialization = {
				 resolution: function(q,o){

					// Parse the syntactic sugar that is the serialization
					// resolution option to a usable integer.
					// Checking for a string '1', since the resolution needs
					// to be cast to a string to split in on the period.
					switch( q ){
						case 1:
						case 0.1:
						case 0.01:
						case 0.001:
						case 0.0001:
						case 0.00001:
							q = q.toString().split('.');
							o['decimals'] = q[0] === '1' ? 0 : q[1].length;
							break;
						case undefined:
							o['decimals'] = 2;
							break;
						default:
							return false;
					}

					return true;
				}
				,mark: function(q,o,w){

					if ( !q ) {
						o[w]['mark'] = '.';
						return true;
					}

					switch( q ){
						case '.':
						case ',':
							return true;
						default:
							return false;
					}
				}
				,to: function(q,o,w){

					// Checks whether a variable is a candidate to be a
					// valid serialization target.
					function ser(r){
						return isInstance ( r ) ||
							typeof r === 'string' ||
							typeof r === 'function' ||
							r === false ||
							( isInstance ( r[0] ) &&
							  typeof r[0][r[1]] === 'function' );
					}

					// Flatten the serialization array into a reliable
					// set of elements, which can be tested and looped.
					function filter ( value ) {

						var items = [[],[]];

						// If a single value is provided it can be pushed
						// immediately.
						if ( ser(value) ) {
							items[0].push(value);
						} else {

							// Otherwise, determine whether this is an
							// array of single elements or sets.
							$.each(value, function(i, val) {

								// Don't handle an overflow of elements.
								if( i > 1 ){
									return;
								}

								// Decide if this is a group or not
								if( ser(val) ){
									items[i].push(val);
								} else {
									items[i] = items[i].concat(val);
								}
							});
						}

						return items;
					}

					if ( !q ) {
						o[w]['to'] = [[],[]];
					} else {

						var i, j;

						// Flatten the serialization array
						q = filter ( q );

						// Reverse the API for RTL sliders.
						if ( o['direction'] && q[1].length ) {
							q.reverse();
						}

						// Test all elements in the flattened array.
						for ( i = 0; i < o['handles']; i++ ) {
							for ( j = 0; j < q[i].length; j++ ) {

								// Return false on invalid input
								if( !ser(q[i][j]) ){
									return false;
								}

								// Remove 'false' elements, since those
								// won't be handled anyway.
								if( !q[i][j] ){
									q[i].splice(j, 1);
								}
							}
						}

						// Write the new values back
						o[w]['to'] = q;
					}

					return true;
				}
			}, tests = {
				/*	Handles.
				 *	Has default, can be 1 or 2.
				 */
				 'handles': {
					 'r': true
					,'t': function(q){
						q = parseInt(q, 10);
						return ( q === 1 || q === 2 );
					}
				}
				/*	Range.
				 *	Must be an array of two numerical floats,
				 *	which can't be identical.
				 */
				,'range': {
					 'r': true
					,'t': function(q,o,w){

						o[w] = values(q);

						// The values can't be identical.
						return o[w] && o[w][0] !== o[w][1];
					}
				 }
				/*	Start.
				 *	Must be an array of two numerical floats when handles = 2;
				 *	Uses 'range' test.
				 *	When handles = 1, a single float is also allowed.
				 */
				,'start': {
					 'r': true
					,'t': function(q,o,w){
						if( o['handles'] === 1 ){
							if( $.isArray(q) ){
								q = q[0];
							}
							q = parseFloat(q);
							o.start = [q];
							return isNumeric(q);
						}

						o[w] = values(q);
						return !!o[w];
					}
				}
				/*	Connect.
				 *	Must be true or false when handles = 2;
				 *	Can use 'lower' and 'upper' when handles = 1.
				 */
				,'connect': {
					 'r': true
					,'t': function(q,o,w){

						if ( q === 'lower' ) {
							o[w] = 1;
						} else if ( q === 'upper' ) {
							o[w] = 2;
						} else if ( q === true ) {
							o[w] = 3;
						} else if ( q === false ) {
							o[w] = 0;
						} else {
							return false;
						}

						return true;
					}
				}
				/*	Connect.
				 *	Will default to horizontal, not required.
				 */
				,'orientation': {
					 't': function(q,o,w){
						switch (q){
							case 'horizontal':
								o[w] = 0;
								break;
							case 'vertical':
								o[w] = 1;
								break;
							default: return false;
						}
						return true;
					}
				}
				/*	Margin.
				 *	Must be a float, has a default value.
				 */
				,'margin': {
					 'r': true
					,'t': function(q,o,w){
						q = parseFloat(q);
						o[w] = fromPercentage(o['range'], q);
						return isNumeric(q);
					}
				}
				/*	Direction.
				 *	Required, can be 'ltr' or 'rtl'.
				 */
				,'direction': {
					 'r': true
					,'t': function(q,o,w){

						switch ( q ) {
							case 'ltr': o[w] = 0;
								break;
							case 'rtl': o[w] = 1;
								// Invert connection for RTL sliders;
								o['connect'] = [0,2,1,3][o['connect']];
								break;
							default:
								return false;
						}

						return true;
					}
				}
				/*	Behaviour.
				 *	Required, defines responses to tapping and
				 *	dragging elements.
				 */
				,'behaviour': {
					 'r': true
					,'t': function(q,o,w){

						o[w] = {
							 'tap': q !== (q = q.replace('tap', ''))
							,'extend': q !== (q = q.replace('extend', ''))
							,'drag': q !== (q = q.replace('drag', ''))
							,'fixed': q !== (q = q.replace('fixed', ''))
						};

						return !q.replace('none','').replace(/\-/g,'');
					}
				}
				/*	Serialization.
				 *	Required, but has default. Must be an array
				 *	when using two handles, can be a single value when using
				 *	one handle. 'mark' can be period (.) or comma (,).
				 */
				,'serialization': {
					 'r': true
					,'t': function(q,o,w){

						return serialization.to( q['to'], o, w ) &&
							   serialization.resolution( q['resolution'], o ) &&
							   serialization.mark( q['mark'], o, w );
					}
				}
				/*	Slide.
				 *	Not required. Must be a function.
				 */
				,'slide': {
					 't': function(q){
						return $.isFunction(q);
					}
				}
				/*	Set.
				 *	Not required. Must be a function.
				 *	Tested using the 'slide' test.
				 */
				,'set': {
					 't': function(q){
						return $.isFunction(q);
					}
				}
				/*	Block.
				 *	Not required. Must be a function.
				 *	Tested using the 'slide' test.
				 */
				,'block': {
					 't': function(q){
						return $.isFunction(q);
					}
				}
				/*	Step.
				 *	Not required.
				 */
				,'step': {
					 't': function(q,o,w){
						q = parseFloat(q);
						o[w] = fromPercentage ( o['range'], q );
						return isNumeric(q);
					}
				}
			};

			$.each( tests, function( name, test ){

				/*jslint devel: true */

				var value = input[name], isSet = value !== undefined;

				// If the value is required but not set, fail.
				if( ( test['r'] && !isSet ) ||
				// If the test returns false, fail.
					( isSet && !test['t']( value, input, name ) ) ){

					// For debugging purposes it might be very useful to know
					// what option caused the trouble. Since throwing an error
					// will prevent further script execution, log the error
					// first. Test for console, as it might not be available.
					if( console && console.log && console.group ){
						console.group( 'Invalid noUiSlider initialisation:' );
						console.log( 'Option:\t', name );
						console.log( 'Value:\t', value );
						console.log( 'Slider(s):\t', sliders );
						console.groupEnd();
					}

					throw new RangeError('noUiSlider');
				}
			});
		}

	// Parse options, add classes, attach events, create HTML.
		function create ( options ) {

			/*jshint validthis: true */

			// Store the original set of options on all targets,
			// so they can be re-used and re-tested later.
			// Make sure to break the relation with the options,
			// which will be changed by the 'test' function.
			this.data('options', $.extend(true, {}, options));

			// Set defaults where applicable;
			options = $.extend({
				 'handles': 2
				,'margin': 0
				,'connect': false
				,'direction': 'ltr'
				,'behaviour': 'tap'
				,'orientation': 'horizontal'
			}, options);

			// Make sure the test for serialization runs.
			options['serialization'] = options['serialization'] || {};

			// Run all options through a testing mechanism to ensure correct
			// input. The test function will throw errors, so there is
			// no need to capture the result of this call. It should be noted
			// that options might get modified to be handled properly. E.g.
			// wrapping integers in arrays.
			test( options, this );

			// Pre-define the styles.
			options['style'] = options['orientation'] ? 'top' : 'left';

			return this.each(function(){

				var target = $(this), i, dragable, handles = [], handle,
					base = $('<div/>').appendTo(target);

				// Throw an error if the slider was already initialized.
				if ( target.data('base') ) {
					throw new Error('Slider was already initialized.');
				}

				// Apply classes and data to the target.
				target.data('base', base).addClass([
					clsList[6]
				   ,clsList[16 + options['direction']]
				   ,clsList[10 + options['orientation']] ].join(' '));

				for (i = 0; i < options['handles']; i++ ) {

					handle = $('<div><div/></div>').appendTo(base);

					// Add all default and option-specific classes to the
					// origins and handles.
					handle.addClass( clsList[1] );

					handle.children().addClass([
						clsList[2]
					   ,clsList[2] + clsList[ 7 + options['direction'] +
						( options['direction'] ? -1 * i : i ) ]].join(' ') );

					// Make sure every handle has access to all variables.
					handle.data({
						 'base': base
						,'target': target
						,'options': options
						,'grab': handle.children()
						,'pct': -1
					}).attr('data-style', options['style']);

					// Every handle has a storage point, which takes care
					// of triggering the proper serialization callbacks.
					handle.data({
						'store': store(handle, i, options['serialization'])
					});

					// Store handles on the base
					handles.push(handle);
				}

				// Apply the required connection classes to the elements
				// that need them. Some classes are made up for several
				// segments listed in the class list, to allow easy
				// renaming and provide a minor compression benefit.
				switch ( options['connect'] ) {
					case 1:	target.addClass( clsList[9] );
							handles[0].addClass( clsList[12] );
							break;
					case 3: handles[1].addClass( clsList[12] );
							/* falls through */
					case 2: handles[0].addClass( clsList[9] );
							/* falls through */
					case 0: target.addClass(clsList[12]);
							break;
				}

				// Merge base classes with default,
				// and store relevant data on the base element.
				base.addClass( clsList[0] ).data({
					 'target': target
					,'options': options
					,'handles': handles
				});

				// Use the public value method to set the start values.
				target.val( options['start'] );

				// Attach the standard drag event to the handles.
				if ( !options['behaviour']['fixed'] ) {
					for ( i = 0; i < handles.length; i++ ) {

						// These events are only bound to the visual handle
						// element, not the 'real' origin element.
						attach ( actions.start, handles[i].children(), start, {
							 base: base
							,target: target
							,handles: [ handles[i] ]
						});
					}
				}

				// Attach the tap event to the slider base.
				if ( options['behaviour']['tap'] ) {
					attach ( actions.start, base, tap, {
						 base: base
						,target: target
					});
				}

				// Extend tapping behaviour to target
				if ( options['behaviour']['extend'] ) {

					target.addClass( clsList[19] );

					if ( options['behaviour']['tap'] ) {
						attach ( actions.start, target, edge, {
							 base: base
							,target: target
						});
					}
				}

				// Make the range dragable.
				if ( options['behaviour']['drag'] ){

					dragable = base.find('.'+clsList[9]).addClass(clsList[18]);

					// When the range is fixed, the entire range can
					// be dragged by the handles. The handle in the first
					// origin will propagate the start event upward,
					// but it needs to be bound manually on the other.
					if ( options['behaviour']['fixed'] ) {
						dragable = dragable
							.add( base.children().not(dragable).data('grab') );
					}

					attach ( actions.start, dragable, start, {
						 base: base
						,target: target
						,handles: handles
					});
				}
			});
		}

	// Return value for the slider, relative to 'range'.
		function getValue ( ) {

			/*jshint validthis: true */

			var base = $(this).data('base'), answer = [];

			// Loop the handles, and get the value from the input
			// for every handle on its' own.
			$.each( base.data('handles'), function(){
				answer.push( $(this).data('store').val() );
			});

			// If the slider has just one handle, return a single value.
			// Otherwise, return an array, which is in reverse order
			// if the slider is used RTL.
			if ( answer.length === 1 ) {
				return answer[0];
			}

			if ( base.data('options').direction ) {
				return answer.reverse();
			}

			return answer;
		}

	// Set value for the slider, relative to 'range'.
		function setValue ( args, set ) {

			/*jshint validthis: true */

			// If the value is to be set to a number, which is valid
			// when using a one-handle slider, wrap it in an array.
			if( !$.isArray(args) ){
				args = [args];
			}

			// Setting is handled properly for each slider in the data set.
			return this.each(function(){

				var b = $(this).data('base'), to, i,
					handles = Array.prototype.slice.call(b.data('handles'),0),
					settings = b.data('options');

				// If there are multiple handles to be set run the setting
				// mechanism twice for the first handle, to make sure it
				// can be bounced of the second one properly.
				if ( handles.length > 1) {
					handles[2] = handles[0];
				}

				// The RTL settings is implemented by reversing the front-end,
				// internal mechanisms are the same.
				if ( settings['direction'] ) {
					args.reverse();
				}

				for ( i = 0; i < handles.length; i++ ){

					// Calculate a new position for the handle.
					to = args[ i%2 ];

					// The set request might want to ignore this handle.
					// Test for 'undefined' too, as a two-handle slider
					// can still be set with an integer.
					if( to === null || to === undefined ) {
						continue;
					}

					// Add support for the comma (,) as a decimal symbol.
					// Replace it by a period so it is handled properly by
					// parseFloat. Omitting this would result in a removal
					// of decimals. This way, the developer can also
					// input a comma separated string.
					if( $.type(to) === 'string' ) {
						to = to.replace(',', '.');
					}

					// Calculate the new handle position
					to = toPercentage( settings['range'], parseFloat( to ) );

					// Invert the value if this is an right-to-left slider.
					if ( settings['direction'] ) {
						to = 100 - to;
					}

					// If the value of the input doesn't match the slider,
					// reset it. Sometimes the input is changed to a value the
					// slider has rejected. This can occur when using 'select'
					// or 'input[type="number"]' elements. In this case, set
					// the value back to the input.
					if ( setHandle( handles[i], to ) !== true ){
						handles[i].data('store').val( true );
					}

					// Optionally trigger the 'set' event.
					if( set === true ) {
						call( settings['set'], $(this) );
					}
				}
			});
		}

	// Unbind all attached events, remove classed and HTML.
		function destroy ( target ) {

			// Start the list of elements to be unbound with the target.
			var elements = [[target,'']];

			// Get the fields bound to both handles.
			$.each(target.data('base').data('handles'), function(){
				elements = elements.concat( $(this).data('store').elements );
			});

			// Remove all events added by noUiSlider.
			$.each(elements, function(){
				if( this.length > 1 ){
					this[0].off( namespace );
				}
			});

			// Remove all classes from the target.
			target.removeClass(clsList.join(' '));

			// Empty the target and remove all data.
			target.empty().removeData('base options');
		}

	// Merge options with current initialization, destroy slider
	// and reinitialize.
		function build ( options ) {

			/*jshint validthis: true */

			return this.each(function(){

				// When uninitialised, jQuery will return '',
				// Zepto returns undefined. Both are falsy.
				var values = $(this).val() || false,
					current = $(this).data('options'),
				// Extend the current setup with the new options.
					setup = $.extend( {}, current, options );

				// If there was a slider initialised, remove it first.
				if ( values !== false ) {
					destroy( $(this) );
				}

				// Make the destroy method publicly accessible.
				if( !options ) {
					return;
				}

				// Create a new slider
				$(this)['noUiSlider']( setup );

				// Set the slider values back. If the start options changed,
				// it gets precedence.
				if ( values !== false && setup.start === current.start ) {
					$(this).val( values );
				}
			});
		}

	// Overwrite the native jQuery value function
	// with a simple handler. noUiSlider will use the internal
	// value method, anything else will use the standard method.
		$.fn.val = function(){

			// If the function is called without arguments,
			// act as a 'getter'. Call the getValue function
			// in the same scope as this call.
			if ( this.hasClass( clsList[6] ) ){
				return arguments.length ?
					setValue.apply( this, arguments ) :
					getValue.apply( this );
			}

			// If this isn't noUiSlider, continue with jQuery's
			// original method.
			return $VAL.apply( this, arguments );
		};

		return ( rebuild ? build : create ).call( this, options );
	};

}( window['jQuery'] || window['Zepto'] ));
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
		hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
		dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
		],
		dontEnumsLength = dontEnums.length;

		return function (obj) {
			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

			var result = [];

			for (var prop in obj) {
				if (hasOwnProperty.call(obj, prop)) result.push(prop);
			}

			if (hasDontEnumBug) {
				for (var i=0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
				}
			}
			return result;
		};
	})();
}

//special consideration for internet exploder < 8
if (!Date.now) {
  Date.now = function() {
    return new Date().valueOf();
  };
}

window.console = console || { log : function() {} };

function basename(path) {
    return path.replace(/\\/g,'/').replace( /.*\//, '' );
}

/**
 *	ActivityRez Web Booker
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booker
 */

//compresses to 21207 B

var WebBooker = {
	bootstrap: {},
	showInitLoader: ko.observable(true),
	wbLoaded: ko.observable(false),
	show404: ko.observable(false),
	hasReseller: ko.observable(false),
	selectedCurrency: ko.observable({}),
	available_currencies: ko.observableArray([]),
	thumbnailHeight: wb_global_vars.thumbnailHeight || 125,
	galleryImageHeight: wb_global_vars.galleryImageHeight || 700,
	timthumb: 'https://media1.activityrez.com/images/',
	mediaServer: (wb_global_vars && wb_global_vars.server == 'training') ? '//devmedia.activityrez.com' : '//media.activityrez.com',
	selectedLanguage: ko.observable(),
	available_langs: ko.observableArray([]),
	
	isOldIE: (function(){
		if(navigator.appName != "Microsoft Internet Explorer")
			return false;
		return parseInt(/MSIE\s(\d)/.exec(navigator.appVersion)[1],10) < 9
	})(),

	us_states: [
		'Alabama',
		'Alaska',
		'American Samoa',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'District of Columbia',
		'Florida',
		'Georgia',
		'Guam',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Northern Marianas Islands',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Puerto Rico',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Virgin Islands',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming'
	],

	setCurrency: function(val){
		WebBooker.selectedCurrency(val);
		WebBooker.Settings.set('currency',val.title);
	},

	init: function() {
		var sel_curr = WebBooker.Settings.get('currency')||wb_global_vars.currency,
			sel_lang = WebBooker.Settings.get('i18n')||wb_global_vars.i18n,
			ni, elem;
		for(ni=0; ni<wb_global_vars.available_currencies.length; ni++){
			elem = document.createElement('span');
			elem.innerHTML = wb_global_vars.available_currencies[ni].symbol;
			wb_global_vars.available_currencies[ni].symbol = elem.innerHTML;

			WebBooker.available_currencies.push(wb_global_vars.available_currencies[ni]);
			if(sel_curr != wb_global_vars.available_currencies[ni].title)
				continue;
			WebBooker.selectedCurrency(wb_global_vars.available_currencies[ni]);
		}

		if(!WebBooker.selectedCurrency()){	//triggered by a saved currency not existing in available_currencies
			sel_curr = wb_global_vars.currency;
			for(ni in wb_global_vars.available_currencies){
				if(sel_curr != wb_global_vars.available_currencies[ni].title)
					continue;
				WebBooker.selectedCurrency(wb_global_vars.available_currencies[ni]);
				break;
			}
		}
		
		if ( wb_global_vars.default_cutoff_hrs ) {
			wb_global_vars.default_cutoff_hrs = parseInt( wb_global_vars.default_cutoff_hrs, 10 );
		}
		if ( wb_global_vars.default_cutoff_mins ) {
			wb_global_vars.default_cutoff_mins = parseInt( wb_global_vars.default_cutoff_mins, 10 );
		}

		for(ni=0; ni<wb_global_vars.languages.length; ni++){
			WebBooker.available_langs.push(wb_global_vars.languages[ni]);
			if(sel_lang != wb_global_vars.languages[ni].i18n)
				continue;
			WebBooker.selectedLanguage(wb_global_vars.languages[ni]);
		}

		if(!WebBooker.selectedLanguage()){	//triggered by a saved currency not existing in available_currencies
			sel_lang = wb_global_vars.i18n;
			for(ni in wb_global_vars.languages){
				if(sel_lang != wb_global_vars.languages[ni].i18n)
					continue;
				WebBooker.selectedLanguage(wb_global_vars.languages[ni]);
				break;
			}
		}
		WebBooker.selectedLanguage.subscribe(function(val){
			if(!val) return;
			WebBooker.API.changeI18N(val);
		});

		WebBooker.bootstrap = wb_global_vars;
		if( WebBooker.bootstrap && WebBooker.bootstrap.server && WebBooker.bootstrap.server == 'training'){
			var training_div = '<div class="trainingWarning">You are currently in training mode. Switch to production mode <a href="' ;
				training_div += WebBooker.bootstrap.webbooker_settings + '" target="_blank">here</a> to start accepting payments.</div>';

			jQuery('body').addClass('training');
			jQuery('body').append(training_div);
			jQuery('.trainingClose').on('click',function(){
				jQuery('.trainingWarning').hide();
			});
		}
		createCookie('ACTIVITYREZ', WebBooker.bootstrap.nonce);
		WebBooker.Agent.last_key = WebBooker.bootstrap.nonce;
		jQuery('#wb_bootstrapper').remove();

		//lets save some keystrokes
		var boot = WebBooker.bootstrap;
		boot.crossDomain = true;
		boot.privacy = ko.observable(boot.privacy);
		WebBooker.searchUrl = boot.wb_url + '/#/Search';

		// Begin bootstrapping.
		WebBooker.hasReseller(boot.user_id && boot.user_id > 0);
		WebBooker.About.content(boot.aboutus);
		WebBooker.Contact.content(boot.contact);
		if(boot.user_name){
			WebBooker.Agent.name(boot.user_name);
		} else if(boot.user_fname){
			WebBooker.Agent.name(boot.user_fname + (boot.user_lname?' ' + boot.user_lname:''));
		}

		// Set the user id.
		WebBooker.Agent.user_id(boot.user_id);

		//start the deafult language grab for js
		__.load(boot.webBookerID,boot.i18n);

		// Load voucher payment types.
		var vouch = (boot.vouchers||[]).slice(0);
		boot.payment_types = [];
		for(ni = 0; ni < vouch.length; ni++){
			boot.payment_types.push(new $ar.VoucherPaymentModel(vouch[ni]));
		}
		// Load cc payment type.
		boot.payment_types.push(new $ar.CreditCardPaymentModel());

		for(ni=0; ni<WebBooker.bootstrap.payment_types.length; ni++){
			WebBooker.bootstrap.payment_types[ni].label = __(WebBooker.bootstrap.payment_types[ni].label);
		}
		// translate destinations,categories,tags,and moods
		boot.wb_destinations = boot.wb_destinations || [];
		for(ni = 0; ni < boot.wb_destinations.length; ni++){
			boot.wb_destinations[ni].__name = __(boot.wb_destinations[ni].name);
			boot.wb_destinations[ni].name = ko.observable(boot.wb_destinations[ni].name);
		}
		boot.wb_destinations.sort(function(a, b) {
			if ( a.name() > b.name() ) {
				return 1;
			}
			if ( a.name() < b.name() ) {
				return -1;
			}
			return 0;
		});
		boot.cats = boot.cats || [];
		for(ni = 0; ni < boot.cats.length; ni++){
			boot.cats[ni] = $ar.Taxonomy(boot.cats[ni]);
		}
		boot.tags = boot.tags || [];
		for(ni = 0; ni < boot.tags.length; ni++){
			boot.tags[ni] = $ar.Taxonomy(boot.tags[ni]);
		}
		boot.moods = boot.moods || [];
		for(ni = 0; ni < boot.moods.length; ni++){
			boot.moods[ni] = $ar.Taxonomy(boot.moods[ni]);
		}

		// init the date pickers
		jQuery('.datepicker').each(function() {
			jQuery(this).datepicker({
				minDate: 0,
				numberOfMonths: 2,
				dateFormat: 'mm/dd/yy',
				beforeShow: function(a) {
					if( a.id == 'datepicker-second' && jQuery('#datepicker-first').datepicker('getDate') ) {
						return {
							minDate: jQuery('#datepicker-first').datepicker('getDate')
						};
					}
					var b = new Date();
					return	{
						minDate: new Date(b.getFullYear(), b.getMonth(), b.getDate())
					};
				}
			});
		});
		
		// init the price range slider
		jQuery('#price-range-slider').noUiSlider({
			range: [0,10000],
			start: [0,10000],
			step: 10,
			slide: function() {
				var values = jQuery(this).val();
				
				WebBooker.Catalog.search_params.price_min( values[0] );
				WebBooker.Catalog.search_params.price_max( values[1] );
			}
		});

		// init pages.
		WebBooker.Cart.init();
		WebBooker.Catalog.init();
		WebBooker.Homepage.init();
		WebBooker.ActivityView.init();
		
		// Start cookie listener
		WebBooker.Agent.cookieInterval = setInterval( WebBooker.Agent.pingCookie, 3000 );
	},

	hideAllScreens: function() {
		jQuery('#cart-sidebar .retrieve').show(); //this is dumb
		WebBooker.Homepage.show(false);
		WebBooker.Catalog.show(false);
		WebBooker.ActivityView.show(false);
		WebBooker.Dashboard.show(false);
		WebBooker.Dashboard.showMain(true);
		WebBooker.Dashboard.showReports(false);
		WebBooker.Dashboard.showSignup(false);
		WebBooker.CheckoutNav.show(false);
		WebBooker.CheckoutNav.showConfirmation(false);
		WebBooker.Itinerary.show(false);
		WebBooker.Contact.show(false);
		WebBooker.show404(false);
		WebBooker.Agent.passwordReset(false);
		WebBooker.Agent.passwordResetRequest(false);
		WebBooker.Dashboard.showPasswordResetConfirmation(false);
	},

	successMsg: function(msg) {
		$ar.Notification(msg,'success');
	},

	errorMsg: function(msg){
		$ar.Notification(msg,'error');
	}
};

// Agents
WebBooker.Agent = {
	user_id: ko.observable(),
	user: ko.observable(),
	name: ko.observable(),
	email: ko.observable(),
	password: ko.observable(),
	password2: ko.observable(),
	key: ko.observable(),
	isLoggingIn: ko.observable(false),
	loginError: ko.observable(),
	loginSuccess: ko.observable(),
	passwordReset: ko.observable(false),
	passwordResetRequest: ko.observable(false),
	signup_fields: {
		first_name: ko.observable(),
		last_name: ko.observable(),
		user_name: ko.observable(),
		email: ko.observable(),
		arc: ko.observable(),
		password: ko.observable(),
		verify_password: ko.observable()
	},
	pw_reset: {
		username: ko.observable(),
		old_pw: ko.observable(),
		new_pw: ko.observable(),
		new_pw_confirm: ko.observable()
	},
	signup_error: ko.observable(false),
	last_key: false,
	cookieInterval: false,

	login: function() {
		var email = WebBooker.Agent.email(),
		password = WebBooker.Agent.password();

		if(!email || email === '') {
			$ar.Notification(__('Please enter a username.'),'error');
			return false;
		}

		if(!password || password === '') {
			$ar.Notification(__('Please enter a password.'),'error');
			return false;
		}

		WebBooker.Agent.loginError(null);
		WebBooker.Agent.isLoggingIn(true);

		WebBooker.API.loginAgent({
			user: email,
			pass: password
		}, function(data) {
			WebBooker.Agent.isLoggingIn(false);

			if(data.status <= 0 && data.status != -2){
				WebBooker.Agent.loginError(data.msg);
				return;
			}
			
			if ( data.status == -2 ) {
				window.location.hash = '#/Dashboard/PasswordReset';
				return;
			}

			data.display_name = data.display_name||'';
			WebBooker.bootstrap.reseller2_id = data.agencyID;
			WebBooker.Agent.user_id(data.userID);
			if(data.display_name.replace(/\s/g,'').length){
				WebBooker.Agent.name(data.display_name);
			} else {
				WebBooker.Agent.name(data.name);
			}
			// Set the nonce to this new one.
			WebBooker.bootstrap.nonce = data.nonce;
			WebBooker.Agent.last_key = data.nonce;
			// Reload the page so we can get the WP cookie.
			if(window.location.hash != '/Dashboard/signup'){
				location.reload();
			} else {
				window.location.hash = '/Home';
				location.reload();
			}
		});
	},
	
	logout : function(){
		WebBooker.API.logoutAgent();
	},
	
	resetPassword: function() {
		WebBooker.Agent.loginError(false);
		if ( !WebBooker.Agent.pw_reset.username() ) {
			WebBooker.errorMsg(__('Please enter your username.'));
			return false;
		}
		if ( !WebBooker.Agent.pw_reset.old_pw() ) {
			WebBooker.errorMsg(__('Please enter your current password.'));
			return false;
		}
		if ( !WebBooker.Agent.pw_reset.new_pw() ) {
			WebBooker.errorMsg(__('Please enter a new password.'));
			return false;
		}
		if ( WebBooker.Agent.pw_reset.new_pw() != WebBooker.Agent.pw_reset.new_pw_confirm() ) {
			WebBooker.errorMsg(__('New passwords do not match.'));
			return false;
		}
		
		WebBooker.Agent.isLoggingIn(true);
		
		WebBooker.API.resetPassword({
			username: WebBooker.Agent.pw_reset.username(),
			old_pw: WebBooker.Agent.pw_reset.old_pw(),
			new_pw: WebBooker.Agent.pw_reset.new_pw(),
			new_pw_confirm: WebBooker.Agent.pw_reset.new_pw_confirm()
		}, function(result) {
			WebBooker.Agent.isLoggingIn(false);
			if ( result.status == 1 ) {
				WebBooker.Agent.password(null);
				WebBooker.Dashboard.showPasswordReset(false);
				WebBooker.Dashboard.showPasswordResetConfirmation(true);
				WebBooker.Agent.loginSuccess(__('Your password has been reset successfully. Please log-in here.'));
				var sidebar = jQuery('#agents-sidebar');
				jQuery('html, body').animate({ scrollTop: sidebar.offset().top }, 500);
				WebBooker.postMessage('scroll_to=' + sidebar.offset().top);
			} else {
				WebBooker.Agent.loginError(result.msg);
			}
		});
	},

	doSignup: function() {
		if(!WebBooker.Agent.verifySignupFields()) {
			return false;
		}

		var params = {
			first_name: WebBooker.Agent.signup_fields.first_name(),
			last_name: WebBooker.Agent.signup_fields.last_name(),
			email: WebBooker.Agent.signup_fields.email(),
			password: WebBooker.Agent.signup_fields.password(),
			verify_password: WebBooker.Agent.signup_fields.verify_password(),
			arc: WebBooker.Agent.signup_fields.arc(),
			user_name: WebBooker.Agent.signup_fields.user_name()
		};

		WebBooker.hideAllScreens();
		WebBooker.showInitLoader(true);

		WebBooker.API.signupAgent(params, function(result) {
			if(result.status == 1) {
				WebBooker.Agent.resetSignupFields();
				WebBooker.showInitLoader(false);
				WebBooker.Dashboard.show(true);
				WebBooker.Dashboard.showMain(false);
				WebBooker.Dashboard.showReports(false);
				WebBooker.Dashboard.showSignup(false);
				WebBooker.Dashboard.signupSuccessMsg(true);
				var sidebar = jQuery('#agents-sidebar');
				jQuery('html, body').animate({ scrollTop: sidebar.offset().top }, 500);
				WebBooker.postMessage('scroll_to=' + sidebar.offset().top);
				WebBooker.Agent.loginSuccess(__('Congratulations, your travel agent sign-up is complete! You may log-in now below.')());
			} else {
				WebBooker.showInitLoader(false);
				WebBooker.Dashboard.show(true);
				WebBooker.Dashboard.showMain(false);
				WebBooker.Dashboard.showReports(false);
				WebBooker.Dashboard.showSignup(true);
				WebBooker.Agent.signup_error(result.msg);
				WebBooker.Dashboard.signupSuccessMsg(false);
				WebBooker.Agent.loginSuccess(false);
			}
		});
	},

	verifySignupFields: function() {
		var msg = false;
		WebBooker.Agent.signup_error(false);
		if(WebBooker.Agent.signup_fields.password() !== WebBooker.Agent.signup_fields.verify_password()) {
			msg = __('The passwords you entered don\'t match.');
		}
		if(!WebBooker.Agent.signup_fields.verify_password()) {
			msg = __('You need to enter the password again for verification.');
		}
		if(!WebBooker.Agent.signup_fields.password()) {
			msg = __('You need to enter a password.');
		}
		if(!WebBooker.Agent.signup_fields.arc()) {
			msg = __('You need to enter the ARC number.');
		}
		if(!WebBooker.Agent.signup_fields.email()) {
			msg = __('You need to enter your e-mail address.');
		}
		if(!WebBooker.Agent.signup_fields.user_name()) {
			msg = __('You need to enter a user name.');
		}
		if ( /[^A-Za-z0-9\.]+/gi.test(WebBooker.Agent.signup_fields.user_name()) ) {
			msg = __('Your username cannot have spaces or special characters in it.');
		}
		if(!WebBooker.Agent.signup_fields.last_name()) {
			msg = __('You need to enter your last name.');
		}
		if(!WebBooker.Agent.signup_fields.first_name()) {
			msg = __('You need to enter your first name.');
		}
		if(msg) {
			WebBooker.Agent.signup_error(msg());
			return false;
		}
		return true;
	},

	resetSignupFields: function() {
		WebBooker.Agent.signup_fields.password('');
		WebBooker.Agent.signup_fields.verify_password('');
		WebBooker.Agent.signup_fields.arc('');
		WebBooker.Agent.signup_fields.email('');
		WebBooker.Agent.signup_fields.user_name('');
		WebBooker.Agent.signup_fields.last_name('');
		WebBooker.Agent.signup_fields.first_name('');
		WebBooker.Agent.signup_error(false);
	},

	doShowSignup: function() {
		if(window.location.href != WebBooker.bootstrap.wb_url + '/#/Dashboard/signup') {
			window.location.href = WebBooker.bootstrap.wb_url + '/#/Dashboard/signup';
			return;
		}
		if(window.location.hash != '#/Dashboard/signup') {
			window.location.hash = '#/Dashboard/signup';
		}
	},
	
	PasswordReset: function(login, key) {
		if ( WebBooker.Agent.password() == WebBooker.Agent.password2() ) {
			var args = {
				login: WebBooker.Agent.user(),
				password: WebBooker.Agent.password(),
				key: WebBooker.Agent.key()
			};
			
			WebBooker.API.passwordReset(args,
				function(json) {
					if ( json.status == 1 ) {
						WebBooker.successMsg(json.msg);
						window.location.hash = '#/Home';
					} else if ( json.status == -1 ) {
						WebBooker.errorMsg(json.msg);
					} else {
						WebBooker.errorMsg(json.msg);
					}
				}
			);
		} else {
			WebBooker.errorMsg( __('Passwords do not match!') );
		}
	},
	
	PasswordResetRequest: function() {
		var args = {
			user: WebBooker.Agent.user()
		};
		
		WebBooker.API.passwordResetRequest(args,
			function(json) {
				if ( json.status == 1 ) {
					WebBooker.successMsg(json.msg);
				} else if ( json.status == -1 ) {
					WebBooker.errorMsg(json.msg);
				} else {
					WebBooker.errorMsg(json.msg);
				}
			}
		);
	},
	
	pingCookie: function() {
		var cookie = readCookie('ACTIVITYREZ');
		
		if ( cookie && cookie != WebBooker.Agent.last_key ) {
			WebBooker.bootstrap.nonce = cookie;
		}
		
		return;
	}
};

// Routes
function notFound() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.show404(true);
}

Path.map("#/Home").to(function(){
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Homepage.show(true);
	WebBooker.Analytics.trigger({}, 'action_Home');
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/Search').to(function() {
	if(!WebBooker.Catalog.searchResults().length) {
		WebBooker.Catalog.hasSearched(false);
	}
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Catalog.show(true);
	setTimeout(function() {
		jQuery('html, body').animate({ scrollTop: 0 }, 500);
		WebBooker.postMessage('scroll_to=0');
		WebBooker.Catalog.loadWithFilters();
		jQuery('#webbooker-search-results .results').focus();
	}, 1);
});

Path.map('#/Contact').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Contact.show(true);
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/About').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.About.show(true);
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/Dashboard').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Dashboard.showMain(true);
	WebBooker.Dashboard.showReports(false);
	WebBooker.Dashboard.showPasswordReset(false);
	WebBooker.Dashboard.show(true);
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/Dashboard/reports').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Dashboard.show(true);
	WebBooker.Dashboard.showMain(false);
	WebBooker.Dashboard.showPasswordReset(false);
	WebBooker.Dashboard.showReports(true);
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/Dashboard/signup').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Dashboard.show(true);
	WebBooker.Dashboard.showMain(false);
	WebBooker.Dashboard.showReports(false);
	WebBooker.Dashboard.showPasswordReset(false);
	WebBooker.Dashboard.showSignup(true);
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/Dashboard/PasswordReset').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Dashboard.show(true);
	WebBooker.Dashboard.showMain(false);
	WebBooker.Dashboard.showReports(false);
	WebBooker.Dashboard.showSignup(false);
	WebBooker.Dashboard.showPasswordReset(true);
	WebBooker.Agent.pw_reset.username(WebBooker.Agent.email());
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/Checkout').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Checkout.sale.loadFromCart();
	WebBooker.CheckoutNav.show(true);

	setTimeout(function() {
		/*var items = [];
		for ( ni = 0; ni < WebBooker.Cart.items().length; ni += 1 ) {
			items.push( WebBooker.Cart.items()[ni].processActivityForAnalytics() );
		}*/

		WebBooker.Analytics.trigger( {
			cart_items: WebBooker.Cart.items(),
			subtotal: WebBooker.Checkout.sale.subtotal(),
			currency: WebBooker.selectedCurrency().title,
			prev_url: false
		}, 'action_Checkout');
	}, 1000);
});

Path.map('#/Confirmation/:saleID').to(function(){
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();

	WebBooker.CheckoutNav.showConfirmation(true);
	WebBooker.CheckoutNav.progress(71);
	var sale = WebBooker.Sale.get('sale');
	if( !sale || !sale.leadGuest.email ) {
		WebBooker.Checkout.moreErrorMsg(__('Unable to retrieve sale; Missing e-mail.'));
		return;
	}
	WebBooker.Checkout.sale.id(parseInt(this.params['saleID'],10));
	WebBooker.Checkout.sale.leadGuest.email( sale.leadGuest.email );

	WebBooker.Checkout.sale.load(function(){
		WebBooker.Analytics.trigger( WebBooker.Checkout.sale, 'action_Confirmation' );
	});
	
	if(window.addEvent){
		window.addEvent('onunload', function(event) {
			WebBooker.Checkout.newSale();
		});
	} else if(window.addEventListener){
		window.addEventListener('unload', function(event) {
			WebBooker.Checkout.newSale();
		});
	}

	// send confirmation email
	if(!WebBooker.Sale.get('loadedConfirmation')) {
		WebBooker.Sale.set('loadedConfirmation', true);
		WebBooker.API.doItineraryAction({
			saleID: WebBooker.Checkout.sale.id(),
			email: WebBooker.Checkout.sale.leadGuest.email(),
			output: 'email',
			subject: __('Itinerary Confirmation')()
		});
	}
});

Path.map('#/Confirmation/error/:errorMsg').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.CheckoutNav.showConfirmation(true);
	WebBooker.Checkout.errorMsg(this.params['errorMsg']);
	var sale = WebBooker.Sale.get('sale');
	if(sale) {
		WebBooker.Checkout.sale.json(sale);
	}
});

Path.map('#/Itinerary').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	jQuery('#cart-sidebar .retrieve').hide(); //dumbness
	WebBooker.Itinerary.show(true);
});

Path.map('#/Itinerary/:saleID').to(function() {
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	jQuery('#cart-sidebar .retrieve').hide(); //dumbness
	var sale = WebBooker.Sale.get('sale');
	if(sale) WebBooker.Itinerary.sale = $ar.SaleModel(sale);
	WebBooker.Itinerary.sale.id(this.params['saleID']);
	WebBooker.Itinerary.load();
	WebBooker.Itinerary.show(true);
});

Path.map('#/PasswordResetRequest').to(function(){
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Agent.passwordResetRequest(true);
	jQuery('#passwordResetRequest input').focus();
	jQuery('html, body').animate({ scrollTop: 0 }, 500);
	WebBooker.postMessage('scroll_to=0');
});

Path.map('#/PasswordReset/:login/:key').to(function(){
	WebBooker.showInitLoader(false);
	WebBooker.hideAllScreens();
	WebBooker.Agent.passwordReset(true);
	WebBooker.Agent.user(this.params['login']);
	WebBooker.Agent.key(this.params['key']);
});

// Settings
WebBooker.Settings = new Store('WebBooker_Settings_' + wb_global_vars.webBookerID);

// Store sale info locally
WebBooker.Sale = new Store('WebBooker_Sale_' + wb_global_vars.webBookerID);

WebBooker.Contact = {
	show: ko.observable(false),
	content: ko.observable('')
};

WebBooker.About = {
	show: ko.observable(false),
	content: ko.observable('')
};

// postMessage for iFrame 
WebBooker.postMessage = function(message) {
	if(WebBooker.bootstrap.parent_url) {
		if(typeof window.parent !== 'undefined' && typeof window.parent.postMessage == 'function'){
			window.parent.postMessage(message, WebBooker.bootstrap.parent_url);
		}
	}
};

jQuery.fn.typeahead.Constructor.prototype.show = function () {
	var pos = jQuery.extend({}, this.$element.offset(), {
		height: this.$element[0].offsetHeight
	}),
	menu = this.$menu,
	elem = this.$element;
	menu.show(function(){
		menu.insertAfter(elem);
		if(pos.top + pos.height + menu.outerHeight() > window.outerHeight && pos.top - menu.outerHeight() > jQuery(window).scrollTop()){
			menu.css({
	          top: 0 - menu[0].offsetHeight + 25
	        , left: 0
	        })	
		}else{
			menu.css({
	          top: pos.height
	        , left: 0
	        })
		}
		
	});
	this.shown = true;
	return this;
}

// Binding Handlers
ko.bindingHandlers.collapseSidebarBox = {
	init: function(element, valueAccessor) {
		setTimeout(function(){
		    if(!jQuery(element).siblings('.collapse-me').is(':hidden')){
		        jQuery(element).children('i').removeClass('icon-chevron-down');
				jQuery(element).children('i').addClass('icon-chevron-up');
			}
		}, 2000);
		jQuery(element).click(function(e) {
			e.preventDefault();
			jQuery(this).siblings('.collapse-me').slideToggle();
			jQuery(this).children('i').toggleClass('icon-chevron-down icon-chevron-up');
			var title = jQuery(this).attr('title');
			title = (title == __('Show')()) ? __('Hide')() : __('Show')();
			jQuery(this).attr('title', title);
			return false;
		});
	}
};

ko.bindingHandlers.hotelTypeahead = {
	init: function(element, valueAccessor) {
		var option = valueAccessor()['value'],
			saved_query = '',
			elem = jQuery(element),
			no_results;
		if(WebBooker.bootstrap.agencyID == 1260) return false;
		jQuery(element).typeahead({
			source: function(query,process) {
				if(query.length < 3 || query == saved_query) {
					if(!query.length) {
						option(null);
					}
					return [];
				}

				saved_query = query;
				option(null);
				
				var searchArgs = {
					object: 'hotel',
					property: 'post_title',
					query: query
				};

				if( WebBooker.Cart.items().length > 0 ){
					searchArgs.activities = [];
					acts = WebBooker.Cart.items();
					for( var ne = 0; ne < acts.length; ne++ ){
						if( jQuery.inArray( acts[ne].activity, searchArgs.activities ) == -1 )
							searchArgs.activities.push( acts[ne].activity );
					}
				}
				
				WebBooker.API.request('lookup','liveSearch', searchArgs,
				function(data){
					var names = [];
					var mappedObjs = jQuery.map(data.items,
						function(item) {
							item.name = item.name.trim();
							var n = item.name + ' - ';
							if ( item.hotel_st ) n = n + item.hotel_st + ', ';
							n += item.hotel_country;
							names.push(n);
							return $ar.HotelModel(item);
						}
					);
					if (data.items.length) {
						WebBooker.Checkout.hotels(mappedObjs);
						no_results = false;
						process(names);
					} else {
						no_results = true;
						process([]);
						jQuery(elem).after('<ul class="typeahead dropdown-menu no-results" style="top: 55px; left: 0px; display: block">' +
								           '<li class="active"><a href="#">No Results Found</a></li>' +
									   '</ul>');
					}
				});
			},
			property: 'name',
			items: 8,
			updater: function(item) {
				option(null);
				for(var r = 0; r < WebBooker.Checkout.hotels().length; r++){
					var hotel = WebBooker.Checkout.hotels()[r];
					if(hotel.generatedName == item){
						option(hotel);
						jQuery(element).val(hotel.name);
						return item.trim();
					}
				}
			},
			matcher: function(item) {
				// we return true because the ajax livesearch handles the matching.
				return true;
			}
		});
		
		elem.keydown(function(e){
			if(e.keyCode == '13' && no_results){
				e.preventDefault();
				return;
			}
			
			jQuery('.typeahead.dropdown-menu.no-results').remove();
		});
		
		elem.on('blur',function(){
			jQuery('.typeahead.dropdown-menu.no-results').remove();
		});
	},
	update: function(element, valueAccessor) {
		var option = valueAccessor()['value'];
		if(option()) {
			jQuery(element).val(option().name);
		}
	}
};

ko.bindingHandlers.processingBtn = {
	update: function(element, valueAccessor) {
		if(valueAccessor()) {
			jQuery(element).prepend('<i class="icon-processing"></i> ');
		} else {
			var content = jQuery(element).html();
			content.replace('<i class="icon-processing"></i> ', '');
			jQuery(element).html(content);
		}
	}
};

ko.bindingHandlers.scrollTopOnClick = {
	init: function(element, valueAccessor) {
		jQuery(element).click(function(e) {
			jQuery('html, body').animate({ scrollTop: 0 }, 500);
			WebBooker.postMessage('scroll_to=0');
		});
	}
};

ko.bindingHandlers.scrollTo = {
	init: function(element, scrollTo) {
		jQuery(element).click(function(e) {
			var offset = jQuery(scrollTo()).offset();
			jQuery('html, body').animate({ scrollTop: offset.top }, 1000);
			WebBooker.postMessage('scroll_to=' + offset.top);
		});
	}
};

ko.bindingHandlers.fadeOpacity = {
	init: function(element, valueAccessor) {
		jQuery(element).css({opacity: 0.2});
	},
	update: function(element, valueAccessor) {
		var shouldDisplay = ko.utils.unwrapObservable(valueAccessor());
		shouldDisplay ? jQuery(element).fadeTo('slow', 1) : jQuery(element).fadeTo('slow', 0.2);
	}
};

ko.bindingHandlers.fadeVisible = {
	init: function(element, valueAccessor) {
		// Start visible/invisible according to initial value
		var shouldDisplay = ko.utils.unwrapObservable(valueAccessor());
		jQuery(element).toggle(shouldDisplay);
	},
	update: function(element, valueAccessor) {
		// On update, fade in/out
		var shouldDisplay = ko.utils.unwrapObservable(valueAccessor());
		shouldDisplay ? jQuery(element).fadeIn() : jQuery(element).fadeOut();
	}
};

// Utilities
// Calculates the distance between two locations.
function getDistance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180,
		radlat2 = Math.PI * lat2/180,
		radlon1 = Math.PI * lon1/180,
		radlon2 = Math.PI * lon2/180,
		theta = lon1-lon2,
		radtheta = Math.PI * theta/180,
		dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
	
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	
	return +(Math.round(dist + 'e+2') + 'e-2');
}

// Converts numeric degrees to radians
function toRad(value) {
	return value * Math.PI / 180;
}

function sortNearestDistance(a,b) {
	return a.distance - b.distance;
}

function formatTime(date) {
	var d = new Date(date),
		hh = d.getHours(),
		m = d.getMinutes(),
		s = d.getSeconds(),
		dd = " am",
		h = hh;

	if (h >= 12) {
		h = hh-12;
		dd = " pm";
	}
	if (h == 0) {
		h = 12;
	}
	m = m<10?"0"+m:m;

	s = s<10?"0"+s:s;

	/* if you want 2 digit hours: */
	//h = h<10?"0"+h:h;

	return h + ':' + m + dd;

  //  var pattern = new RegExp("0?"+hh+":"+m+":"+s);
   // return date.replace(pattern,h+":"+m+":"+s+" "+dd)
}

function createTimestamp(now) {
	var year = "" + now.getFullYear();
	var month = "" + (now.getMonth() + 1);if (month.length == 1) {month = "0" + month;}
	var day = "" + now.getDate();if (day.length == 1) {day = "0" + day;}
	var hour = "" + now.getHours();if (hour.length == 1) {hour = "0" + hour;}
	var minute = "" + now.getMinutes();if (minute.length == 1) {minute = "0" + minute;}
	var second = "" + now.getSeconds();if (second.length == 1) {second = "0" + second;}
	return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
}

function cleanTimestamp(stamp) {
	return stamp.replace(/-/g, '/');
}

function getDateString(date) {
	var month = '' + (date.getMonth() + 1);
	var day = '' + date.getDate();

	if (month.length == 1) {
		month = '0' + month;
	}
	if (day.length == 1) {
		day = '0' + day;
	}

	return month + '/' + day + '/' + date.getFullYear();
}

function createCookie(name, value, days){
	var expires = '',
		date = new Date();

	if(days) {
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = '; expires=' + date.toGMTString();
	} else {
		expires = '';
	}

	document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name){
	var nameEQ = name + '=',
		ca = document.cookie.split(';');

	for(var i=0; i<ca.length; i+=1) {
		var c = ca[i];
		while(c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}
		if(c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}

function deleteCookie(name) {
	createCookie(name, '', -1);
}

function betterRounding(amt) {
	return Math.round( parseFloat(amt) * 100 ) / 100;
}

//javascript i18n
var __ = (function(){
	var langFile = ko.observable(),
		ret = function(){
			return (function(args){
				var _val = args[0];
				var _params = Array.prototype.slice.call(args,1);
				return ko.computed({
					read: function(){
						var text = '' + _val;
						if(langFile() && langFile()[_val]){
							text = langFile()[_val].translation;
						}

						//basic sprintf feature
						var bits = text.split('%'),
							out = bits[0],
							re = /^([ds])(.*)$/;

						for(var i=1; i<bits.length; i++){
							p = re.exec(bits[i]);
							if(!p || _params[i-1]===null) continue;
							if(p[1] == 'd')
								out += parseFloat(ko.utils.unwrapObservable(_params[i-1]), 10);
							else if(p[1] == 's')
								out += _params[i-1];
							out += p[2];
						}
						return out;
					},
					write: function(){
						_val = arguments[0];
						if(arguments.length > 1){
							_params = Array.prototype.slice.call(arguments,1);
						}

					}
				});
			})(arguments);
		};
	ret.load = function(post_id, i18n) {
		WebBooker.API.getPOFile({
			post_id: post_id,
			i18n: i18n
		}, function(data) {
			if(data.status != 1) return false;
			langFile(data.po);
			return true;
		});
	};

	return ret;
})();

var fn_format_money = function() {
	var val, elem, format;

	//format comes in as:
	//{ symbol: string, title: string, rate: number, thousands: string, decimal: string }
	if(arguments.length < 2){
		throw new Error("fn_format_money called with too few parameters");
	}

	if(arguments.length < 3){
		val = arguments[0];
		format = arguments[1];
		elem = {};
	} else {
		elem = arguments[0];
		val = arguments[1];
		format = arguments[2];
	}

	if(typeof val == 'function')
		val = ko.utils.unwrapObservable(val());

	if(!val || isNaN(val)) val = 0;

	var pad = function(num,dec,toLeft){ var str = ''+num; while(str.length<dec) str=toLeft?'0'+str:str+'0'; return str; },
		value = ko.utils.unwrapObservable(val),
		decimalPlaces = 2,
		pow = Math.pow(10,decimalPlaces),
		before, curr, after = [];
	value = Math.round(val*(format.rate||1) * pow)/pow;
	curr = Math.floor(Math.abs(value));
	while(Math.floor(curr/1000)){
		after.push(pad(curr%1000,3,1));
		curr = (curr/1000)&~0;
	}
	after.push(curr);
	curr = after.reverse().join(format.thousands||',');
	value = (format.symbol||'$') + (val < 0?'-':'') + curr + (format.decimal||'.') + pad(Math.abs(Math.round((value*pow)%pow)), decimalPlaces,1);
	elem.innerHTML = value;
	return value;
};

//formats numbers based on the location's currency
ko.bindingHandlers.money = {
	init : function(elem, val){
		var format = WebBooker.selectedCurrency()||{};
		fn_format_money(elem, val, format);
	},
	update : function(elem, val){
		var format = WebBooker.selectedCurrency()||{};
		fn_format_money(elem, val, format);
	}
};

//still formats, but ignores the rate
ko.bindingHandlers.clean_money = {
	init : function(elem, val){
		var format = WebBooker.selectedCurrency()||{},
			newFormat = {
				decimal: format.decimal||'.',
				rate: 1,
				symbol: format.symbol||'',
				thousands: format.thousands||',',
				title: format.title||''
			};

		fn_format_money(elem, val, newFormat);
	},
	update : function(elem, val){
		var format = WebBooker.selectedCurrency()||{},
			newFormat = {
				decimal: format.decimal||'.',
				rate: 1,
				symbol: format.symbol||'',
				thousands: format.thousands||',',
				title: format.title||''
			};

		fn_format_money(elem, val, newFormat);
	}
};
/* TODO, figure out why this is here
jQuery(document).ready(function(){
	 if(jQuery.browser.msie){
		 jQuery(function() {
			jQuery('[placeholder]').focus(function() {
			  if(jQuery(this).val() == jQuery(this).attr('placeholder')) {
				jQuery(this).val('');
			  }
			}).blur(function() {
			  if (jQuery(this).val() == '' || jQuery(this).val() == jQuery(this).attr('placeholder')) {
				jQuery(this).val(jQuery(this).attr('placeholder'));
			  }
			}).blur();
		});
	}
});
*/

window.$ar = window.$ar||{};
$ar.Notification = (function(){
	var visible = 6000,
		remove = 300;

	var notice = function(msg,level){
		var _self = {};
		_self.elem = document.createElement('div');
		_self.elem.className = 'entry';
		if(/(error|success)/.test(level))
			_self.elem.className += ' ' + level;
		if(ko && ko.isObservable(msg))
			msg = msg();
		_self.elem.innerHTML = msg;
		if(/^error$/.test(level)){
			var close = document.createElement('p');
			close.className = 'closeClick';
			close.innerHTML = __('click to close')();
			_self.elem.appendChild(close);
		}

		var clearElem = function(){
			if(_self.time) clearTimeout(_self.time);
			jQuery(_self.elem).off('mousedown',clearElem);
			_self.elem.className += ' remove';
			setTimeout(function(){
				_self.elem.parentNode.removeChild(_self.elem);
			},remove);
		};
		jQuery(_self.elem).mousedown(clearElem);
		//if(!/(error)/.test(level)){
			_self.time = setTimeout(clearElem,visible);
		//}

		setTimeout(function(){ _self.elem.className += ' active'; },5);
		return _self.elem;
	};

	var self = function(msg,level){
		if(!/(error|success)/.test(level))
			level = 'normal';
		if(ko && ko.isObservable(msg) && Object.prototype.toString.call(msg()) == '[object Array]')
			msg = msg();
		if(Object.prototype.toString.call(msg) != '[object Array]')
			msg = [msg];

		for(var ni = 0; ni < msg.length; ni++){
			if(self.preinit){
				self.prequeue.push({ msg: msg[ni], level: level });
				continue;
			}
			self.elem.insertBefore(new notice(msg[ni],level),self.elem.firstChild);
		}
	};
	self.elem = null;
	self.prequeue = [];
	self.preinit = setInterval(function(){
		if(!document.body) return;
		clearInterval(self.preinit);
		if(!self.elem){
			self.elem = document.createElement('div');
			self.elem.className = 'notifications';
			document.body.appendChild(self.elem);
		}
		for(var ni = 0; ni < self.prequeue.length; ni++){
			self.elem.insertBefore(new notice(self.prequeue[ni].msg,self.prequeue[ni].level),self.elem.firstChild);
		}
		self.preinit = null;
	},30);

	return self;
})();

$ar.data_mapper = function(map,data){
	if(!map || !data) return;
	for(var ni in map){
		if(!data.hasOwnProperty(ni)) continue;
		data[map[ni]] = data[ni];
		delete data[ni];
	}

	return data;
};
$ar.load = function(path,callback){
	var d = document,
		js = /\.js$/.test(path),
		elem;

	if(!/\.(js|css)$/.test(path)) return;
	elem = d.createElement(js?'script':'link');
	elem[js?'src':'href'] = path;
	if(!js) elem.rel = 'stylesheet';

	if(typeof callback == 'function')
		elem.onload = callback;

	d.body.appendChild(elem);
};
$ar.Model = function(def, _json){
	var ret = {};
	for(var ni in def){
		ret[ni] = def[ni];
	}
	ret._json_callback = null;
	ret.json = function(json){
		var ni, no;
		if(!json){
			var obj = {}, tmp, _tmp;
			for(ni in def){
				tmp = ko.utils.unwrapObservable(ret[ni]);

				if(/^_/.test(ni) || typeof tmp == 'function'){
					continue;
				}

				//gotta look for models WITHIN models
				if(!tmp){
					obj[ni] = tmp;
				} else if(tmp.hasOwnProperty && tmp.hasOwnProperty('json')){
					obj[ni] = tmp.json();
				} else if(Object.prototype.toString.call(tmp) == '[object Array]'){
					_tmp = [];
					for(no = 0; no < tmp.length; no++){
						if(tmp[no].hasOwnProperty && tmp[no].hasOwnProperty('json')){
							_tmp[no] = tmp[no].json();
						} else {
							_tmp[no] = tmp[no];
						}
					}
					obj[ni] = _tmp;
				} else if(typeof tmp == 'object'){
					for(no in tmp){
						if(tmp[no].hasOwnProperty && tmp[no].hasOwnProperty('json'))
							tmp[no] = tmp[no].json();
					}
					obj[ni] = tmp;
				} else {
					obj[ni] = tmp;
				}
			}
			return obj;
		}
		if(ret._json_callback) ret._json_callback(json);
		for(ni in json){
			if(!def.hasOwnProperty(ni))
				continue;
			if(ko.isObservable(ret[ni])){
				ret[ni](ret.cleanNumbers(json[ni]));
			} else {
				ret[ni] = ret.cleanNumbers(json[ni]);
			}
		}
		return ret;
	};
	ret.extend = function(_def,_json){
		for(var ni in _def){
			if(def[ni]) continue;
			if(/^(json|_|cleanNumbers|extend)/.test(ni)) continue;
			def[ni] = ret[ni] = _def[ni];
		}
		if(_json) ret.json(_json);
		return ret;
	};
	ret.cleanNumbers = function(obj){
		if(!obj)
			return obj;
		if(!isNaN(parseFloat(obj)) && isFinite(obj))
			return parseFloat(obj);
		if(typeof obj == 'string'){
			if(obj == 'null' || obj == '')
				obj = null;
			return obj;
		}
		if(typeof obj == 'function')
			return obj;
		for(var ni in obj)
			obj[ni] = ret.cleanNumbers(obj[ni]);
		return obj;
	};

	if(_json) ret.json(_json);

	return ret;
};
$ar.MiniActivityModel = (function() {
	var cache = {};
	return function( data ) {
		if( cache[( data || { id: 0 } ).id]) {
			return cache[data.id];
		}
		var that = $ar.Model({
			id: 0,
			activityID: 0,
			title: '',
			slug: '',
			i18n: 'en_US',
			destination: '',
			destinationID: 0,
			shortDesc: null,
			duration: null,
			tags: [],
			prices: [],
			r2: 0,
			times: [],
			display_price: 0
		});

		that.thumbnail_url = ko.observable();
		that.slug = ko.observable( that.slug );
		that.url = ko.computed(function() {
			return WebBooker.bootstrap.wb_url + '/' + that.slug() + '/';//added terminating slash to avoid a redirect and 400ms
		});

		that.link = function() {
			window.location.href = that.url();
		};

		that._json_callback = function( beans ) {
			//need to normalize this on the backend
			if( beans.json_input.id ){
				beans.id = beans.json_input.id;	
			}else{
				beans.id = null;
			}
			beans.prices = beans.json_input.prices;
			beans.times = beans.json_input.times;

			if ( beans.prices && beans.prices.length ) {
				beans.r2 = beans.prices[0].r2;
			}

			if ( beans.id ) {
				cache[beans.id] = that;
			}
			if ( beans.json_input && beans.json_input.media ) {
				var media = beans.json_input.media, na, featured;
				for( na in media ) {
					if ( media[na].type != 'image' || !media[na].hash) continue;
					if(media[na].hasOwnProperty('featured') && media[na].featured == 'true'){
						that.thumbnail_url(WebBooker.mediaServer+'/media/'+media[na].hash+'/thumbnail/height/'+200);
						break;
					}
					if(!that.thumbnail_url() && media[na].url){
					  that.thumbnail_url(WebBooker.timthumb + 'tth/' + WebBooker.thumbnailHeight + '/' + basename(media[na].url));
					  break;
					}else if(media[na].hash){
					  that.thumbnail_url(WebBooker.mediaServer+'/media/'+media[na].hash+'/thumbnail/height/'+200);
					}
				} 
				if ( beans.id ) {
					cache[beans.id] = that;
				}
			}
		};

		that.json( data );

		return that;
	};
})();
$ar.SearchResult = function(data) {
	var that = $ar.MiniActivityModel( data ),
		ni;
	that.active_days = ko.computed(function(){
		if(!that.times || !that.times.length)
			return '';
		var days = {},
			d = {
				'Sunday': 0,
				'Monday': 1,
				'Tuesday': 2,
				'Wednesday': 3,
				'Thursday': 4,
				'Friday': 5,
				'Saturday': 6
			},
			out = [];
		for ( ni = 0; ni < that.times.length; ni += 1 ) {
			if( that.times[ni].start && !days.hasOwnProperty( that.times[ni].start.day ) )
				days[that.times[ni].start.day] = __( that.times[ni].start.day.substr(0,3) )();
		}
		//sort on key
		for(ni in days) {
			out.push(days[ni]);
		}
		out.sort( function( a, b ) {
			return d[a.name] > d[b.name];
		} );

		if( out.length == 7 ) {
			return __('Every day')();
		} else {
			return out.join(', ');
		}
	});

	return that;
};
$ar.Taxonomy = function(data){
	var that = $ar.Model({
		name: '',
		__name: '',
		slug: '',
		term_id: 0
	},data);
	that.selected = ko.observable(false);
	that.__name = __(that.name);
	that.name = ko.observable(that.name);
	return that;
};
$ar.Geocoder = (function() {
	var that = {
		geocoder: function() {
			return new google.maps.Geocoder();
		},
	
		geocode: function(object, callback) {
			that.geocoder().geocode(
				object,
				function(results, status) {
					if(status == google.maps.GeocoderStatus.OK) {
						callback(results);
					}
					else {
						WebBooker.errorMsg('ERROR: Can not geocode address.');
					}
				}
			);
		}
	};
	return that;
})();
jQuery(document).ready(function(){
	setTimeout(function(){
		jQuery('.collapse-me input[type="text"]').each(function(){
			if (jQuery(this).val())
				jQuery(this).closest('.collapse-me').show();
		});

		jQuery('.collapse-me select').each(function(){
			if (jQuery(this).val())
				jQuery(this).closest('.collapse-me').show();
		});

		jQuery('.collapse-me input:checked').each(function(){
			jQuery(this).closest('.collapse-me').show();
		});
	}, 2000);

	
	jQuery("#search-keywords").keypress(function(event){
		if(event.keyCode == 13){
			jQuery("#searchActivitiesButton").click();
		}
	});
});
/**
 *	ActivityRez Web Booking Engine
 *	API Functions File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booking Engine
 */

//compresses to 5858 B

WebBooker.API = {
	raw: function(url,data,callback){
		var args = {
			type: 'POST',
			async: true,
			data: data
		};

		if(WebBooker.bootstrap.crossDomain){
			args.url = url;
			args.dataType = 'jsonp';
			args.crossDomain = true;
		} else {
			args.url = url;
			args.dataType = 'json';
			args.crossDomain = false;
		}

		jQuery.ajax(args).always(function(result){
			if(typeof callback == 'function'){
				callback(result);
			}
		});
	},
	request : function(service,action,params,callback){
		WebBooker.API.raw(WebBooker.bootstrap.api_url,{
			service: service,
			action: action,
			nonce: WebBooker.bootstrap.nonce,
			data: params
		},callback);
	},
	queryCatalog: function(callback) {
		var destination = WebBooker.Catalog.search_params.destination();
		if(WebBooker.bootstrap['search_destination'] && WebBooker.bootstrap['search_destination'].length > 0){
			destination = {name: ko.observable(WebBooker.bootstrap['search_destination'])};
		}

		var keywords = WebBooker.Catalog.search_params.keywords(),
			tag = WebBooker.Catalog.search_params.tag_private() ? WebBooker.Catalog.search_params.tag_private() : WebBooker.Catalog.search_params.tag(),
			category = WebBooker.Catalog.search_params.category(),
			startDate = WebBooker.Catalog.search_params.date_start(),
			endDate = WebBooker.Catalog.search_params.date_end(),
			minPrice = WebBooker.Catalog.search_params.price_min(),
			maxPrice = WebBooker.Catalog.search_params.price_max(),
			moods = [];
			for(var i = 0; i < WebBooker.Catalog.search_params.moods().length; ++i)
				moods.push(WebBooker.Catalog.search_params.moods()[i].name());

		WebBooker.API.request('lookup','activities',{
			i18n: WebBooker.bootstrap['i18n'],
			des: (destination) ? destination.name : '',
			s: (keywords) ? keywords : '',
			tag: (tag) ? tag : '',
			moods: (moods) ? moods : '',
			category: (category) ? category : '',
			startDate: (startDate) ? startDate : '',
			endDate: (endDate) ? endDate : '',
			minPrice: minPrice,
			maxPrice: maxPrice,
			featured: WebBooker.Catalog.search_params.featured(),
			count: WebBooker.Catalog.pageSize(),
			page: WebBooker.Catalog.pageIndex(),
			sort: WebBooker.Catalog.search_params.sort().sort,
			sortDir: WebBooker.Catalog.search_params.sort().sort_dir,
			showInWB: WebBooker.bootstrap.webBookerID,
			reseller2ID: WebBooker.bootstrap.reseller2_id,
			reseller2_userID: WebBooker.bootstrap.user_id
		},callback);
	},
	
	fetchImages: function(id,callback){
		jQuery.ajax({
		    url: WebBooker.mediaServer + '/media/' + WebBooker.bootstrap.nonce + '/meta/all/activity_id/' + id,
		    type: 'GET',
			async: true
		}).always(function(result){
			if(typeof callback == 'function'){
				callback(result);
			}
		});
	},
	
	getFeaturedActivities: function (dest, callback) {
		WebBooker.API.request('lookup','activities',{
			i18n: WebBooker.bootstrap['i18n'],
			des: dest,
			featured: true,
			count: 100,
			showInWB: WebBooker.bootstrap.webBookerID
		},callback);
	},

	getActivity: function(id, date, callback) {
		WebBooker.API.request('lookup','getActivity',{
			ID: id,
			reseller2ID: WebBooker.bootstrap.reseller2_id,
			reseller2_userID: WebBooker.bootstrap.user_id,
			showInWB: WebBooker.bootstrap.webBookerID,
			date: date
		},callback);
	},

	betterGetActivity: function(params, callback){
		params['showInWB'] = WebBooker.bootstrap.webBookerID;
		if(params['id']){
			params['ID'] = params['id'];
			delete params['id'];
		}
		if(WebBooker.bootstrap.reseller2_id){
			params['reseller2ID'] = WebBooker.bootstrap.reseller2_id;
		}
		if(WebBooker.bootstrap.user_id){
			params['reseller2_userID'] = WebBooker.bootstrap.user_id;
		}

		WebBooker.API.request('lookup','getActivity',params,callback);
	},

	checkAvailability: function (params, callback) {
		WebBooker.API.request('lookup','inventory',{
			activityID: params.id,
			timestamp: params.datetime,
			locationID: WebBooker.bootstrap.webBookerID,
			resellerID: WebBooker.bootstrap.reseller2_id
		},callback);
	},

	getSale: function(params, callback) {
		WebBooker.API.request('checkOut','getSale',{
			saleID: params.saleID,
			email: params.email
		},callback);
	},

	saveSale: function(sale, callback) {
		sale.i18n = WebBooker.selectedLanguage().i18n;
		sale.source = 'web';
		sale.currency = WebBooker.selectedCurrency().title;
		sale.locationID = WebBooker.bootstrap.webBookerID;
		sale.balance_due = 0;
		if(WebBooker.bootstrap.user_id){
			sale.reseller2ID = WebBooker.bootstrap.reseller2_id;
			sale.reseller2_userID = WebBooker.bootstrap.user_id;
		}

		WebBooker.API.request('checkOut','saveSale',sale,function(sale){
			if(sale.status == 1 && typeof callback == 'function')
				callback(sale);
		});
	},

	saveTicket: function(ticket, callback) {
		WebBooker.API.request('checkOut','saveTicket',{
			ID: ticket.id,
			activityID: ticket.aid,
			datetime: ticket.timestamp,
			saleID: ticket.sid,
			locationID: WebBooker.bootstrap.webBookerID,
			guest_type_id: ticket.guest_type_id,
			guest_type: ticket.guest_type,
			leadGuest: ticket.leadGuest,
			cfa: ticket.cfa,
			cfa_name: ticket.cfa_name,
			cfa_number: ticket.cfa_number,
			firstName: ticket.firstName,
			lastName: ticket.lastName,
			currency: WebBooker.selectedCurrency().title,
			lead_guest_hotel: ticket.lead_guest_hotel
		}, function(tix){
			if(tix.status == 1 && typeof callback == 'function'){
				callback(tix);
			} else {
				WebBooker.Checkout.errorMsg(tix.msg);
			}
		});
	},

	saveDiscount: function(discount, callback) {
		WebBooker.API.request('checkOut','saveDiscount',{
			ticketID: discount.ticketID,
			saleID: discount.saleID,
			amount: discount.amount,
			percent: discount.percent,
			scope: discount.scope,
			reason: discount.reason,
			approval: discount.approval,
			discount_id: discount.discount_id,
			locationID: WebBooker.bootstrap.webBookerID
		}, function(disc){
			if(disc.status == 1 && typeof callback == 'function'){
				callback(disc);
			}
		});
	},

	saveOption: function(option, callback) {
		WebBooker.API.request('checkOut','saveOption',{
			ID: option.id,
			ticketID: option.ticketID,
			saleID: option.saleID,
			name: option.name,
			value: option.value,
			choice: option.choice,
			fee: option.fee,
			type: option.type,
			locationID: WebBooker.bootstrap.webBookerID
		}, function(opt){
			if(opt.status == 1 && typeof callback == 'function'){
				callback(opt);
			}
		});
	},

	savePayment: function(payment, callback) {
		WebBooker.API.request('checkOut','savePayment',{
			saleID: payment.sid,
			source: 'web',
			payment_type_id: payment.payment_type_id,
			locationID: WebBooker.bootstrap.webBookerID,
			amount: payment.amount,
			payee: payment.payee,
			currency: WebBooker.selectedCurrency().title,
			options: payment.options,
			comment: payment.comment,
			authorization_ID: payment.authorization_ID
		},callback);
	},

	doItineraryAction: function(params, callback) {
		params.all = 1;
		params.wb = true;
		params.resellerID = WebBooker.bootstrap.reseller2_id;
		params.locationID = WebBooker.bootstrap.webBookerID;

		WebBooker.API.request('arezConfirmation','printConfirm',params,callback);
	},

	loginAgent: function(params, callback){
		WebBooker.API.raw(WebBooker.bootstrap.api_url,{
			service: 'userLogin',
			action: 'login',
			nonce: WebBooker.bootstrap.nonce,
			user: params.user,
			pass: params.pass
		},callback);
	},

	logoutAgent: function(params, callback){
		WebBooker.API.request('userLogin','logout',null,function(){
			window.location.reload();
		});
	},

	signupAgent: function(params, callback) {
		WebBooker.API.raw(WebBooker.bootstrap.api_url,{
			nonce: WebBooker.bootstrap.nonce,
			service: 'updateUser',
			first_name: params.first_name,
			last_name: params.last_name,
			user_email: params.email,
			user_pass: params.password,
			confirm_pass: params.verify_password,
			user_login: params.user_name,
			arc_number: params.arc,
			reseller1ID: WebBooker.bootstrap.reseller1_id,
			booker_site: true,
			cache_buster: new Date().getTime()
		},callback);
	},
	
	passwordReset: function(params, callback){
		WebBooker.API.request('accountManage','userPasswordReset',{
			login: params.login,
			password: params.password,
			key: params.key
		},callback);
	},
	
	passwordResetRequest: function(params, callback) {
		WebBooker.API.request('accountManage', 'userPasswordResetRequest', {
			wbID: WebBooker.bootstrap.webBookerID,
			site: WebBooker.bootstrap.wb_url,
			user: params.user
		}, callback);
	},
	
	resetPassword: function(params, callback) {
		WebBooker.API.request('userLogin', 'pw_reset', params, callback);
	},

	validateDiscountCode: function(promo_code, callback) {
		WebBooker.API.raw(WebBooker.bootstrap.api_url,{
			nonce: WebBooker.bootstrap.nonce,
			service: 'validateDiscount',
			code: promo_code,
			pos: WebBooker.bootstrap.webBookerID
		},callback);
	},

	geocodeAddress: function(address, callback) {
		WebBooker.API.raw(WebBooker.bootstrap.api_url,{
			nonce: WebBooker.bootstrap.nonce,
			service: 'geocodeAddress',
			address: address
		},callback);
	},

	getAgentCommissions: function(params, callback) {
		WebBooker.API.request('arezReporting','getMyCommissions',{
			startDate: params.startDate,
			endDate: params.endDate,
			tz: params.tz,
			wb: true
		},function(data){
			if(data.status == 1 && typeof callback == 'function'){
				callback(data);
			}
		});
	},

	updateCurrency : function(locationID, callback){
		WebBooker.API.request('lookup','getExchangeRates',{
			locationID: locationID
		},callback);
	},

	getPOFile: function(params, callback) {
		WebBooker.API.request('webBooker','getPO',{
			webBookerID: params.post_id,
			i18n: params.i18n
		},callback);
	},

	changeI18N: function(params){
		WebBooker.API.request('webBooker','changeI18N',{
			i18N: params.i18n
		}, function(data){
			if(data.status == 1) window.location.reload(true);
		});
	}
};
/**
 *	ActivityRez Web Booking Engine
 *	Catalog File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booking Engine
 */

 //compresses to 4498 B

WebBooker.Catalog = (function(){
	var self = {};

	self.show = ko.observable(false);
	self.show_mini_search = ko.observable(false);
	self.isSearching = ko.observable(false),
	self.hasSearched = ko.observable(false),
	self.sortToggle = ko.observable(1),

	self.toggle_mini_search = function(evt){
		self.show_mini_search(!self.show_mini_search());
	};

	self.search_filter_data = {
		destinations: ko.observableArray([]),
		sub_destinations: ko.observableArray([]),
		categories: ko.observableArray([]),
		tags: ko.observableArray([]),
		moods: ko.observableArray([]),
		sorts: ko.observableArray([{
			id: 1,
			sort: 'title',
			sort_dir: 'asc',
			label: __('Alphabetical: A to Z')
		}, {
			id: 2,
			sort: 'title',
			sort_dir: 'desc',
			label: __('Alphabetical: Z to A')
		}, {
			id: 3,
			sort: 'price',
			sort_dir: 'asc',
			label: __('Price: Low to High')
		}, {
			id: 4,
			sort: 'price',
			sort_dir: 'desc',
			label: __('Price: High to Low')
		}])
	};
	self.search_params = {
		sort: ko.observable({
			id: 1,
			sort: 'title',
			sort_dir: 'asc',
			label: __('Alphabetical: A to Z')
		}),
		keywords: ko.observable(),
		date_start: ko.observable(),
		date_end: ko.observable(),
		price_min: ko.observable(0),
		price_max: ko.observable(10000),
		destination: ko.observable(),
		sub_destination: ko.observable(),
		featured: ko.observable(),
		category: ko.observable(),
		tag: ko.observable(),
		tag_private: ko.observable(false),
		moods: ko.computed({
			read: function(){
				var checked = [],
					moods = self.search_filter_data.moods(),
					ni;
				for(ni = 0; ni < moods.length;ni++){
					if(!moods[ni].selected()) continue;
					checked.push(moods[ni]);
				}
				return checked;
			},
			write: function(val){
				var moods = self.search_filter_data.moods(),
					ni,no;
				val = val||[];
				if(Object.prototype.toString.call(val)!='[object Array]') return;
				for(ni = 0; ni < moods.length; ni++){
					moods[ni].selected(false);
				}
				for(ni = 0; ni < val.length; ni++){
					if(!val[ni].term_id) continue;
					for(no = 0; no < moods.length; no++){
						if(moods[no].term_id != val[ni].term_id) continue;
						moods[no].selected(true);
						break;
					}
				}
			}
		})
	};
	
	self.backup_search_params = {
		keywords: '',
		destinaton: '',
		moods: '',
		category: '',
		tag: '',
		date_start: '',
		date_end: ''
	};

	self.searchResults = ko.observableArray([]);
	self.totalResults = ko.observable(0);

	self.pageIndex = ko.observable(false);
	self.pageSize = ko.observable(15);

	self.maxPageIndex = ko.computed(function(){
		return Math.ceil(self.totalResults() / self.pageSize());
	});

	self.pages = ko.computed(function() {
		var maxPages = Math.min(self.maxPageIndex(),12),
			pages = [],
			ni = self.pageIndex(), i;

		for(i = 1; i <= maxPages; i++) {
			pages.push({
				index: i,
				current: ni == i
			});
		}

		return pages;
	});

	self.totalResultsText = ko.computed(function() {
		if(self.totalResults() == 1 && WebBooker.selectedLanguage().i18n != 'ja')
			return self.totalResults() + ' ' + __('Activity')();
		return self.totalResults() + ' ' + __('Activities')();
	});

	self.load = function(){
		self.isSearching(true);
		self.hasSearched(false);

		if( self.checkUpdateParams() ) {
			self.searchResults([]);
			self.pageIndex(1);
		} else {
			WebBooker.API.queryCatalog(function(results) {
				self.isSearching(false);
				self.hasSearched(true);
				self.totalResults(0);

				var destination = WebBooker.Catalog.search_params.destination(),
					category = WebBooker.Catalog.search_params.category(),
					keywords = WebBooker.Catalog.search_params.keywords(),
					tag = WebBooker.Catalog.search_params.tag_private() ? WebBooker.Catalog.search_params.tag_private() : WebBooker.Catalog.search_params.tag(),
					moods = WebBooker.Catalog.search_params.moods(),
					dstart = WebBooker.Catalog.search_params.date_start(),
					dend = WebBooker.Catalog.search_params.date_end();

				// Analytics hook
				WebBooker.Analytics.trigger( {
					keywords: keywords ? keywords : false,
					destinaton: destination ? destination.name() : false,
					moods: ( moods.length ) ? moods : false,
					category: category ? category : false,
					tag: tag ? tag : false,
					date_start: dstart ? dstart : false,
					date_end: dend ? dend : false,
					total_results: results.total ? results.total : 0
				}, 'action_Search' );
			
				if( results.status != 1 ) {
					if( results.status == 0 && results.total > 0 ) {
						self.totalResults( self.searchResults().length  );
					} else if( results.status == 0 && results.total == 0 ) {
						self.searchResults([]);
					}
					return;
				}
				self.processResults( results );
				self.isSearching(false);
				// keep previous search paramaters
				self.backupParams();
			});
		}
	};

	self.processResults = function(results) {
		self.totalResults( results.total );

		var data = results.data, ni;

		for ( ni = 0; ni < data.length; ni += 1 ) {
			self.searchResults.push( new $ar.SearchResult( data[ni] ) );
		}
	};

	self.checkUpdateParams = function() {
		var ret = false,
			params = self.getParams();
		for( var k in self.backup_search_params ) {
			curr = typeof params[k]=='undefined' ? '' : params[k];
			prev = self.backup_search_params[k];
			if( self.pageIndex() > 1 && prev != curr ) {
				ret = true;
				break;
			}
		}
		return ret;
	};

	self.backupParams = function() {
		var params = self.getParams();
		jQuery.each( params, function( key, value ) {
			self.backup_search_params[key] = typeof value == 'undefined' ? '' : value;
		});
	};
	
	self.getParams = function() {
		var params = {
			destination: WebBooker.Catalog.search_params.destination(),
			category: WebBooker.Catalog.search_params.category(),
			keywords: WebBooker.Catalog.search_params.keywords(),
			tag: WebBooker.Catalog.search_params.tag_private() ? WebBooker.Catalog.search_params.tag_private() : WebBooker.Catalog.search_params.tag(),
			moods: WebBooker.Catalog.search_params.moods(),
			dstart: WebBooker.Catalog.search_params.date_start(),
			dend: WebBooker.Catalog.search_params.date_end()
		}
		return params;
	};

	self.loadWithFilters = function() {
		if(window.location.href != WebBooker.bootstrap.wb_url + '/#/Search') {
			window.location.href = WebBooker.bootstrap.wb_url + '/#/Search';
			return;
		}
		if(window.location.hash != '#/Search') {
			window.location.hash = '#/Search';
		}

		self.searchResults([]);
		if(self.pageIndex() != 1) {
			self.pageIndex(1);
		} else {
			self.load();
		}
	};

	self.clearFilters = function(){
		self.search_params.keywords('');
		self.search_params.date_start('');
		self.search_params.date_end('');
		self.search_params.destination(null);
		self.search_params.sub_destination(null);
		self.search_params.category(null);
		self.search_params.tag(null);
		self.search_params.moods([]);
		self.search_params.price_min(0);
		self.search_params.price_max(10000);
		jQuery('#price-range-slider').val([0,10000]);
	};

	self.init = function() {
		// load the parameters from the cookie
		var cookie_grab = function( fdata, pdata, m, m_on ) {
			m_on = m_on || 'id';
			m = WebBooker.Settings.get(m);
			if( !m ) return;
			var no = self.search_filter_data[fdata](), ni;
			for( ni = 0; ni < no.length; ni += 1 ) {
				if( no[ni][m_on] != m[m_on] ) continue;
				self.search_params[pdata]( no[ni] );
				break;
			}
		}, bootstrap_grab = function( args ) {
			var no = WebBooker.bootstrap[ args.boot_source ], ni;
			
			for ( ni = 0; ni < no.length; ni += 1 ) {
				// if no bootstrapped value, abort.
				if ( !WebBooker.bootstrap[ args.search_name ] ) return false;
				
				// otherwise continue as usual.
				var m = decodeEntities( WebBooker.bootstrap[ args.search_name ] ).toLowerCase(),
					b = decodeEntities( no[ni].name() ).toLowerCase();
					
				if ( b != m ) {
					if ( args.filter_name === 'tag' ) {
						self.search_params.tag_private( m );
					}
					continue;
				}
				
				if ( args.filter_name !== 'moods' ) {
					self.search_params[ args.filter_name ]( args.use_name ? no[ ni ].name() : no[ ni ] );
					break;
				} else {
					// we have to handle moods a little differently.
					for ( var ne = 0; ne < self.search_filter_data[ args.filter_name ]().length; ne += 1 ) {
						if ( self.search_filter_data[ args.filter_name ]()[ ne ].name().toLowerCase() != m ) continue;
						self.search_filter_data[ args.filter_name ]()[ ne ].selected(true);
					}
				}
			}
			return true;
		},
		decodeEntities = (function() {
		  // this prevents any overhead from creating the object each time
		  var element = document.createElement('div');
		
		  function decodeHTMLEntities (str) {
		    if(str && typeof str === 'string') {
		      // strip script/html tags
		      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
		      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
		      element.innerHTML = str;
		      str = element.innerHTML;
		      element.innerHTML = '';
		    }
		
		    return str;
		  }
		
		  return decodeHTMLEntities;
		})(),
		has_bootstrapped = false,
		min_price = WebBooker.Settings.get('SearchParams_MinPrice'),
		max_price = WebBooker.Settings.get('SearchParams_MaxPrice');

		self.search_params.date_start(WebBooker.Settings.get('SearchParams_StartDate') || null);
		self.search_params.date_end(WebBooker.Settings.get('SearchParams_EndDate') || null);
		self.search_params.keywords(WebBooker.Settings.get('SearchParams_Keywords') || null);
		self.search_params.price_min(min_price || 0);
		self.search_params.price_max(max_price || 10000);
		jQuery('#price-range-slider').val([ min_price || 0, max_price || 10000 ]);

		//grab this bit from the bootstrap
		for ( var i = 0; i < WebBooker.bootstrap.wb_destinations.length; i += 1 ) {
			WebBooker.bootstrap.wb_destinations[i].name( decodeEntities( WebBooker.bootstrap.wb_destinations[i].name() ) );
		}
		self.search_filter_data.destinations(WebBooker.bootstrap.wb_destinations);
		self.search_filter_data.categories(WebBooker.bootstrap.cats);
		self.search_filter_data.tags(WebBooker.bootstrap.tags);
		self.search_filter_data.moods(WebBooker.bootstrap.moods);
		
		cookie_grab('sorts','sort','SearchParams_Sort');
		
		if ( bootstrap_grab( { filter_name: 'destination', search_name: 'search_destination', boot_source: 'wb_destinations' } ) ) {
			has_bootstrapped = true;
		}
		if ( bootstrap_grab( { filter_name: 'category', search_name: 'search_category', boot_source: 'cats', use_name: true } ) ) {
			has_bootstrapped = true;
		}
		if ( bootstrap_grab( { filter_name: 'tag', search_name: 'search_tag', boot_source: 'tags', use_name: true } ) ) {
			has_bootstrapped = true;
		}
		if ( bootstrap_grab( { filter_name: 'moods', search_name: 'search_mood', boot_source: 'moods' } ) ) {
			has_bootstrapped = true;
		}
		
		// if we didn't receive any bootstrapped search values,
		// now we see if local storage has any.
		if ( !has_bootstrapped ) {
			//self.search_params.destination(WebBooker.Settings.get('SearchParams_Destination') || null);
			cookie_grab('destinations','destination','SearchParams_Destination');
			self.search_params.category(WebBooker.Settings.get('SearchParams_Category') || null);
			self.search_params.tag(WebBooker.Settings.get('SearchParams_Tag') || null);
			var moods = WebBooker.Settings.get('SearchParams_Moods') || [],
				mods = self.search_filter_data.moods() || [],
				ni, no;
			for ( ni = 0; ni < mods.length; ni += 1 ) {
				for ( no = 0; no < moods.length; no += 1 ) {
					if ( moods[ no ] == mods[ ni ].name() ) {
						mods[ ni ].selected( true );
					}
				}
			}
		}

		// set pageIndex, if bootstrap initially has destination search..
		if(	has_bootstrapped && WebBooker.bootstrap['search_destination'] ) {
			self.pageIndex(1);
		}
		
		// Init subscriptions after loading parameters
		// So we aren't accidentally saving the initial bindings.
		self.search_params.sort.subscribe(function(value) {
			WebBooker.Settings.set('SearchParams_Sort', value.id);

			if( self.pageIndex() !== false ) {
				// Refresh to subscribe self.pageIndex(), if sortToggle is changed
				if(	self.pageIndex() == 1 && self.sortToggle() != value.id ) {
					self.pageIndex(false);
				}
				self.searchResults([]);
				self.pageIndex(1);
				self.sortToggle(value.id);
			}
		});
		self.search_params.destination.subscribe(function(value) {
			WebBooker.Settings.set('SearchParams_Destination', value || '');
		});
		self.search_params.category.subscribe(function(value){
			WebBooker.Settings.set('SearchParams_Category', value || '');
			jQuery('#search-activities-form').mouseleave(function(){
				setTimeout(function(){
					if(!self.search_params.category() && !self.search_params.tag() && !jQuery('.select-category').hover())
						jQuery('#search-filters-categories .collapse-me').slideUp();
				}, 1000);
			});
		});
		self.search_params.tag.subscribe(function(value){
			WebBooker.Settings.set('SearchParams_Tag', value || '');
			jQuery('#search-activities-form').mouseleave(function(){
				setTimeout(function(){
					if(!self.search_params.category() && !self.search_params.tag() && !jQuery('.select-tag').hover())
						jQuery('#search-filters-categories .collapse-me').slideUp();
				}, 1000);
			});
		});
		self.search_params.date_start.subscribe(function(value){
			WebBooker.Settings.set('SearchParams_StartDate', value || '');
			//checks to see if the mouse is over the section
			jQuery('#search-activities-form').mouseleave(function(){
				setTimeout(function(){
					if(!self.search_params.date_start() && !self.search_params.date_end() && !jQuery('#ui-datepicker-div').is(':visible')) {
						// if the mouse has not been in the section, for 1 sec and nothing is checked
						jQuery('#search-filters-date .collapse-me').slideUp();
					}
				}, 1000);
			});
		});
		self.search_params.date_end.subscribe(function(value){
			WebBooker.Settings.set('SearchParams_EndDate', value || '');
			jQuery('#search-activities-form').mouseleave(function(){
				setTimeout(function(){
					if(!self.search_params.date_start() && !self.search_params.date_end() && !jQuery('#ui-datepicker-div').is(':visible'))
						jQuery('#search-filters-date .collapse-me').slideUp();
				}, 1000);
			});
		});
		self.search_params.price_min.subscribe(function(value) {
			WebBooker.Settings.set('SearchParams_MinPrice', value || '');
		});
		self.search_params.price_max.subscribe(function(value) {
			WebBooker.Settings.set('SearchParams_MaxPrice', value || '');
		});
		self.search_params.keywords.subscribe(function(value){
			WebBooker.Settings.set('SearchParams_Keywords', value || '');
		});
		self.search_params.moods.subscribe(function(value){
			var saver = [],
				moods = self.search_params.moods(),
				ni;
			for(ni = 0; ni < moods.length; ni += 1) {
				saver.push(moods[ni].name());
			}
			WebBooker.Settings.set('SearchParams_Moods', saver);
			jQuery('#search-activities-form').mouseleave(function(){
				setTimeout(function(){
					if(self.search_params.moods().length < 1)
						jQuery('#search-filters-moods .collapse-me').slideUp();
				}, 1000);
			});
		});
		self.pageIndex.subscribe(function(value){
			// prevent API call twice
			if( self.pageIndex() !== false ) {
				self.load();
			}
		});
	};

	return self;
})();
/**
 *	ActivityRez Web Booking Engine
 *	Shopping Cart
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booking Engine
 */

//compresses to 2391 B

$ar = $ar||{};
WebBooker = WebBooker||{};

WebBooker.Cart = (function(){
	var self = {
		cart: null,
		items: ko.observableArray([])
	};

	self.init = function(){
		self.cart = new Store('WebBooker_Cart_' + WebBooker.bootstrap.webBookerID);
		var items = self.cart.get('Items'),
			timestamp = self.cart.get('Timestamp');

		// that honkey has expired
		if(!timestamp || Math.floor(((new Date()).getTime() - (new Date(timestamp)).getTime())/3600000) > 48){
			self.items([]);
			self.cart.reset();
		} else if(items){
			var _items = [],ni;
			for(ni = 0; ni < items.length; ni++){
				_items.push($ar.CartItemModel(items[ni]));
			}
			self.items(_items);
		}

		self.items.subscribe(function(){
			self.saveToLocal();
		});
	};

	self.saveToLocal = function(){
		var _items = self.items(), items = [], ni;
		for(ni = 0; ni < _items.length; ni++){
			_items[ni].inCart = true;
			items.push(_items[ni].json());
		}
		self.cart.set('Items', items);
		self.cart.set('Timestamp', new Date());
	};

	self.viewCart = function(){
		window.location.href = WebBooker.bootstrap.wb_url + '/#/Checkout';
	};

	self.subtotal = ko.computed(function(){
		var items = self.items(),
			sub = 0,
			ni;

		for(ni = 0; ni < items.length; ni++) {
			sub += items[ni].subtotal();
		}

		return sub;
	});

	return self;
})();
$ar.CartItemModel = function(data){
	var that = new $ar.Model({
		inCart: false,
		activity: 0,
		date: null,
		i18n_date: null,
		time: null,

		url: '',
		title: '',
		destination: '',

		guests: []
	});
	
	that._json_callback = function(beans){
		if(!beans) return;
		beans.guests = beans.guests||[];

		var ni;
		for(ni = 0; ni < beans.guests.length; ni++){
			beans.guests[ni] = $ar.CartGuestModel(beans.guests[ni]);
		}
	};
	that.json(data);

	that.guests = ko.observableArray(that.guests||[]);
	that.remove = function() {
		if(!that.inCart) return;
		that.inCart = false;
		var items = WebBooker.Checkout.sale.items(),
			guests = that.guests(),
			ni;

		for(ni = 0; ni < guests.length; ni++){
			guests[ni].qty(0);
		}
		WebBooker.Cart.items.remove(that);
		for(ni = 0; ni < items.length; ni++) {
			if(!items[ni].cartItem || items[ni].cartItem != that) {
				continue;
			}
			WebBooker.Checkout.sale.items.remove(items[ni]);
		}
		setTimeout(function() {
			WebBooker.Checkout.updatePmtAmounts();
		}, 100);
		return;
	};

	that.subtotal = ko.computed(function(){
		var guests = that.guests()||{},
			subtotal = 0,
			rate = (WebBooker.selectedCurrency().rate||1)*100,
			ni;

		for(ni = 0; ni < guests.length; ni++){
			subtotal += Math.round(parseFloat(guests[ni].price())*rate)/100 * guests[ni].qty();
		}

		return subtotal/(WebBooker.selectedCurrency().rate||1);
	});
	
	that.processActivityForAnalytics = function( include_options ) {
		var total_guests = 0,
			types = [],
			options = [];
			
		for ( ni = 0; ni < that.guests().length; ni += 1 ) {
			total_guests += that.guests()[ni].qty();
			types.push({
				name: that.guests()[ni].name,
				qty: that.guests()[ni].qty()
			});
		}
		
		return {
			title: that.json().title,
			id: that.activity,
			date: that.date,
			time: that.time,
			total_guests: total_guests,
			guest_types: types
		};
	};
	
	that.i18n_date = function(){
		var time = new Date(that.date + (that.time.startTime === 'Open' ? '' : ' ' + that.time.startTime)),
			i18n = WebBooker.Settings.get('i18n') || wb_global_vars.i18n,
			date;
			
		switch( i18n ) {
			case 'ja' 	:	//iso
			case 'zh_SG':
			case 'zh_TW':
			case 'zh_HK':
			case 'zh_CN':
			case 'ko_KR':
				date =  time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate();
				break;
			case 'en_GB':	//euro
			case 'en_AU':
			case 'en_AG':
			case 'cs_CZ':
			case 'da_DK':
			case 'nl_NL':
			case 'fi_FI':
			case 'fr_FR':
			case 'fr_BE':
			case 'fr_CA':
			case 'de_DE':
			case 'de_AT':
			case 'el_GR':
			case 'it':
			case 'in_IN':
			case 'ms_MY':
			case 'ml_IN':
			case 'no_NO':
			case 'nb_NO':
			case 'nn_NO':
			case 'pl_PL':
			case 'pt_BR':
			case 'pt_PT':
			case 'ru_RU':
			case 'es_ES':
			case 'es_AR':
			case 'es_MX':
			case 'es':
			case 'sv_se':
			case 'th':
			case 'vi':
				date = time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();
				break;
			case 'en_US':	//us original
			case 'en_CA':
			default:
				date = (time.getMonth() + 1) + '/' + time.getDate() + '/' + time.getFullYear();
				break;
		}
		return date;
	};

	return that;
};
$ar.CartGuestModel = function(data){
	var that = new $ar.Model({
		id: 0,
		name: '',
		qty: 0,
		price: 0,
		r2: 0
	},$ar.data_mapper({
		'guest_type_id':'id',
		'guest_type':'name',
		'amount':'price'
	},data));

	that.price = ko.observable(that.price||0);
	(function(){
		var _qty = ko.observable(that.qty||0),
			_validate;
		that.qty = ko.computed({
			read: function(){ return _qty(); },
			write: function(nval){
				if(typeof _validate == 'function' && !_validate(nval))
					return;

				_qty(nval);
				WebBooker.Cart.saveToLocal();
			}
		});
		that.qty.setValidate = function(val){
			_validate = val;
		};
		that.qty.real = function(){ return _qty; };
	})();

	that.subtotal = ko.computed(function(){
		var rate = WebBooker.selectedCurrency().rate||1;
		return (Math.round(parseFloat(that.price())* rate * 100)/100 * that.qty()) / rate;
	});
	
	that.name = __( that.name )();

	return that;
};
/**
 *	ActivityRez Web Booking Engine
 *	Homepage Functions File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booking Engine
 */

WebBooker.Homepage = {
	show: ko.observable(false),
	featured_destinations: ko.observableArray([]),
	init: function() {}
};

WebBooker.Homepage.show.subscribe(function(newValue){
	if( newValue === true && WebBooker.Homepage.featured_destinations().length === 0 ) {
		if ( WebBooker.bootstrap.use_custom_home ) return;
		
		var des = [], no;
		
		for ( no = 0; no < WebBooker.bootstrap.wb_destinations.length; no += 1 ) {
			des.push( WebBooker.bootstrap.wb_destinations[no].name() );
		}
		
		WebBooker.API.getFeaturedActivities( des, function(results) {
			if ( results.status == 1 ) {
				var dests = [],
					ni, no;
					
				for ( ni = 0; ni < results.data.length; ni += 1 ) {
					if ( jQuery.inArray( results.data[ni].destination, dests ) < 0 ) {
						dests.push( results.data[ni].destination );
					}
				}
				dests.sort(function(a, b) {
					if ( a > b ) {
						return 1;
					}
					if ( a < b ) {
						return -1;
					}
					return 0;
				});
				for ( ni = 0; ni < dests.length; ni += 1 ) {
					var d = dests[ni];
					dests[ni] = {
						destination: d,
						activities: ko.observableArray([])
					};
					for ( no = 0; no < results.data.length; no += 1 ) {
						if ( dests[ni].destination == results.data[no].destination ) {
							dests[ni].activities.push( new $ar.MiniActivityModel( results.data[no] ) );
						}
					}
				}
				
				WebBooker.Homepage.featured_destinations( dests );
			}
		});
	}
});/**
 *	ActivityRez Web Booking Engine
 *	Activity JS Functions File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booking Engine
 */

//compresses to 8469 B

WebBooker.MiniCart = (function(){
	var self = {};

	self.activity = ko.observable(null);
	self.cartItem = ko.observable(null);
	self.checkingInventory = ko.observable(false);
	self.date = ko.observable('');
	self.time = ko.observable('');
	self.blackoutDays = [];

	self.times = ko.observableArray([]);

	self.inventory = ko.observable();
	self.cfa = ko.observable();
	self.notPastCutoff = ko.observable();
	self.notPastDeadline = ko.observable();

	self.guests = ko.computed(function(){
		if(!self.cartItem() || !Object.keys(self.cartItem().guests()).length) return [];
		return self.cartItem().guests();
	});
	self.canAdd = ko.computed(function(){
		if(!self.cartItem || !self.cartItem() ) return false;
		if(!Object.keys(self.cartItem).length) return false;
		var total = 0,
			g = self.cartItem().guests(),
			ni;
		for(ni = 0; ni < g.length; ++ni)
			total += g[ni].qty();
		return total > 0;
	});
	self.canBook = ko.computed(function() {
		if(!self.inventory()) return false;
		if(!self.cartItem) return false;

		var avai = self.inventory().available,
			inv = self.inventory().inventory,
			cfa = self.cfa();

		if(!self.notPastCutoff())
			return false;
		if(inv === 0 && self.guests().length)
			return true;
		if(avai === 0 && cfa === 0)
			return false;
		if(inv === 0 && avai === 0)
			return false;
		if(inv > 0 || avai > 0){
			if(self.guests().length && (avai <= inv || (avai > inv && cfa))) {
				return true;
			}
		} else {
			return false;
		}
		if(!self.guests().length){
			return false;
		}
	});

	self.availabilityStatus = ko.computed(function() {
		if(self.checkingInventory()) {
			return __('Checking')() + '...';
		}
		if(self.date()) {
			if(self.time()) {
				if( self.notPastDeadline() ) {
					if(self.notPastCutoff()) {
						if(self.guests().length) {
							if(self.canBook()) {
								return __('Available')();
							}
							return __('Unavailable')();
						}
						return __('No Pricing Available')();
					}
					return __(' ')();
				}
				return __('Unavailable')();
			}
			return __('Select a time')();
		}
		return __('Select a date')();
	});

	self.isAvailable = function(nval, pid) {
		function doNotification() {
			if(!self.cartUpdateNotification) {
				self.cartUpdateNotificationStart();
			} else {
				clearTimeout(self.cartUpdateNotification);
				self.cartUpdateNotificationStart();
			}
		};
/*		
		if ( !self.notPastCutoff() ) {
			$ar.Notification( __('Past cutoff time.'), 'error' );
			return false;
		}
*/		
		switch(true) {
			case ( nval < 0 ):
				return false;
				break;
				
			case ( self.cfa() == 1 ):
				doNotification();
				return true;
				break;
				
			case ( self.inventory().inventory == 0 ):
				doNotification();
				return true;
				break;
		}

		var max = self.inventory().available, prices = self.cartItem().guests(), ni;
		for ( ni = 0; ni < prices.length; ni++ ) {
			if( prices[ni].id == pid )
				continue;
			max -= prices[ni].qty();
		}

		if ( nval > max ) {
			$ar.Notification( __('No more tickets left.'), 'error' );
			return false;
		}
		
		doNotification();
		return true;
	};
	
	self.cartUpdateNotification = false;
	self.cartUpdateNotificationStart = function() {
		self.cartUpdateNotification = setTimeout( function() {
			$ar.Notification( __('Cart Updated'), 'success' );
		}, 500 );
	};
	
	self.checkout = function(){
		if( !self.addToCart() ) return;
		jQuery('html, body').animate({ scrollTop: 0 }, 500);
		window.location.href = WebBooker.bootstrap.wb_url + '/#/Checkout';
	};
	self.addToCart = function(){
		if(!self.cartItem()) return true;
		var g = self.cartItem().guests(),
			qty = 0,
			ni;
		for(ni = 0; ni < g.length; ni++){
			qty += g[ni].qty();
		}
		if(!qty) return true;
		if(self.cartItem().inCart) return true;
		self.cartItem().inCart = true;
		WebBooker.Cart.items.push(self.cartItem());

		// Analytics hook.
		//WebBooker.Analytics.trigger(event.target, 'action_addToCart');
		
		return true;
	};

	self.checkInventory = function() {
		var date = self.date(),
			_date = new Date( self.date() ),
			time = self.time().startTime == 'Open' ? '' : self.time().startTime,
			saved_time = self.time();
			
		self.checkingInventory(true);
		if(!saved_time){
			jQuery('#activity-availability > span').effect('pulsate', {times: 2}, 500);
			self.checkingInventory(false);
			return;
		}
			
		self.cartItem(null);
		
		WebBooker.API.checkAvailability({
			id: self.activity().id,
			datetime: createTimestamp(new Date(self.date() + ' ' + time))
		}, function(data){

			self.checkingInventory(false);
			
			if(data.status > 0){
				self.inventory(data);
				self.cfa(data.cfa);
			} else if(data.status < 0 && data.status != -10){
				self.inventory(false);
				return false;
			}

			var ni,
				i = WebBooker.Cart.items(), 
				//bookDate = new Date( self.date() + ' ' + time ),
				today = new Date(),
				cutoff_timestamp = self.getCutoffTimestamp({
					book_date: today,
				}),
				deadline_time = self.getStopSellingTime({
					book_date: today,
				}),
				_time = function() {
					if( self.activity().book_until_end ) {
						_t = self.time().endTime == 'Open' ? '' : self.time().endTime;
					} else {
						_t = self.time().startTime == 'Open' ? '' : self.time().startTime;
					}
					return _t;
				},
				selected_date_time = new Date(self.date() + ' ' + _time());
				selected_start_time = new Date(self.date() + ' ' + _time());

			if( selected_date_time.getTime() - deadline_time <= 0 ) {
				self.notPastCutoff(false);
				self.notPastDeadline(false);
				self.inventory(false);
				return false;
			} else {
				self.notPastDeadline(true);
			}
			
			if ( data.cfa ) {
				// zero available and past cutoff
				if ( !data.available ) {
					self.notPastCutoff(false);
					self.inventory(false);
				}
				else if ( selected_start_time.getTime() - deadline_time <= 0 ) {
					self.notPastCutoff(false);
					self.inventory(false);
				} else {
					self.notPastCutoff(true);
					self.notPastDeadline(true);
				}
			} else {
				self.notPastCutoff(true);
			}

			//wraps the validation script to maintain object's presence in the cart
			var valFunc = function(obj){
				obj.qty.setValidate(function(nval){
					if(!self.isAvailable(nval, obj.id)||!self.cartItem())
						return false;
					var g = self.cartItem().guests(),
						tickets = 0,
						ni;
					//here we're only grabing tickets from other types
					//to see what's a valid number for this type
					for(ni = 0; ni < g.length; ni++){
						if(g[ni].id == obj.id) continue;
						tickets += g[ni].qty();
					}

					if(nval + tickets > 0 && !self.cartItem().inCart){
						self.cartItem().inCart = true;
						WebBooker.Cart.items.push(self.cartItem());
					} else if(nval+tickets <= 0 && self.cartItem().inCart){
						WebBooker.Cart.items.remove(self.cartItem());
						self.cartItem().inCart = false;
					}
					return true;
				});
			};

			var _ci;
			//check for thineself in the cart
			for(ni = 0; ni < i.length; ni++){
				if(i[ni].activity != self.activity().id)
					continue;
				if(i[ni].date != self.date() || i[ni].time != self.time())
					continue;
				_ci = i[ni];
				break;
			}
			if(!_ci){
				_ci = new $ar.CartItemModel({
					inCart: false,
					activity: self.activity().id,
					date: self.date(),
					time: self.time(),
					title: self.activity().title,
					url: WebBooker.bootstrap.wb_url + '/' + self.activity().slug + '/',
					destination: self.activity().destination
				});
			}
			var g = _ci.guests(), temp,found;
			for(ni = 0; ni < data.prices.length; ni++){
				temp = data.prices[ni].guest_type_id;
				found = false;
				for(no = 0; no < g.length; no++){
					if(g[no].id != temp) continue;
					g[no].json(data.prices[ni]);
					valFunc(g[no]);
					found = true;
				}
				if(!found){
					g.push($ar.CartGuestModel(data.prices[ni]));
					valFunc(g[g.length-1]);
				}
			}
			
			self.checkingInventory(false);
			_ci.guests(g);
			self.cartItem(_ci);
		});
	};
	
	//check all the days in the calendar against the dates in blackoutDays then check to see if the activity is available on that day
	self.dayAvailable = function(date) {
		var weekday = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ],
			times = self.activity().times,
			today = new Date(),
			diff = Math.floor( ( today.getTime() - date.getTime() ) / 86400000 ),
			ni, lifespanDateStart, lifespanDateEnd, ds, de;
			
		if('0000-00-00 00:00:00' == self.activity().date_start){
			ds = '2001/01/01 00:00:00';
		}else{
			ds = cleanTimestamp( self.activity().date_start );
		}
		if('0000-00-00 00:00:00' == self.activity().date_end){
			de = '2037/01/01 00:00:00';
		}else{
			de = cleanTimestamp( self.activity().date_end );
		}
		
		lifespanDateEnd = new Date(de);
		lifespanDateStart = new Date(ds);
			
		today.setHours(0, 0, 0);
		
		// reject old dates
		if(today > date && diff != 0) {
			return [false];
		}
		// check lifespan dates
		if(lifespanDateStart && lifespanDateEnd ){
			if( lifespanDateStart.getTime() > date.getTime() || lifespanDateEnd.getTime() < date.getTime() ){
				return [false];
			}
		}
		
		// check blackout days
		for(ni = 0; ni < (self.blackoutDays||[]).length; ni++){
			if(self.blackoutDays[ni].valueOf() != date.valueOf()) {
				continue;
			}
			return [false];
		}
		
		var _date = date.valueOf(),
			cutoff_hrs = parseInt(self.activity().cutoff_hours || 0),
			cutoff_minutes = parseInt(self.activity().cutoff_minutes || 0),
			cutoff_mins = ( cutoff_hrs * 60 ) + cutoff_minutes,
			book_until_end = self.activity().book_until_end,
			cfa = parseInt( self.cfa(), 10) === 1 ? true : false,
			time,
			time_diff,
			clean,
			start_date,
			end_date,
			_ret = [false];
		
		//reset today to new date for processing below
		today = new Date();
		
		//check the calendar date against all the days the activity is on
		for(ni = 0; ni < times.length; ni++){
			start_date = new Date( times[ni].startDate === '0000-00-00 00:00:00' ? '2001/01/01 00:00:00' : cleanTimestamp( times[ni].startDate ) );
			end_date = new Date( times[ni].endDate === '0000-00-00 00:00:00' ? '2037/01/01 00:00:00' : cleanTimestamp(times[ni].endDate) );
			
			if ( !book_until_end && times[ni].startDayOfWeek && times[ni].startDayOfWeek != weekday[date.getDay()]){
				continue;
			} else if ( book_until_end && times[ni].endDayOfWeek && times[ni].endDayOfWeek != weekday[date.getDay()] ) {
				continue;
			}
			
			if ( start_date > date || end_date < date ) {
				continue;
			}
			
			_ret = [true];
		}
		return _ret;
	};
	self.showDatePicker = function(){
		jQuery('#activity-date .datepicker').datepicker('show');
	};
	self.add = function( item, evt ) {
		item.qty( item.qty() + 1 );
		
		var d = self.cartItem().processActivityForAnalytics();
		
		WebBooker.Analytics.trigger( {
			element: evt.currentTarget,
			title: d.title,
			id: d.id,
			date: d.date,
			time: d.time,
			total_guests: d.total_guests,
			guest_types: d.guest_types
		}, 'action_updateCart' );
	};
	self.remove = function( item, evt ) {
		var d = self.cartItem().processActivityForAnalytics();
		
		WebBooker.Analytics.trigger( {
			element: evt.currentTarget,
			title: d.title,
			id: d.id,
			date: d.date,
			time: d.time,
			total_guests: d.total_guests,
			guest_types: d.guest_types
		}, 'action_removeFromCart' );
		
		item.qty( item.qty() - 1 );
	};

	self.getCutoffTimestamp = function(args) {
		var unit = 60000, //60,000 milliseconds in a minute
			_date = new Date( args.book_date.getTime() ),
			//cutoff times are in minutes
			_cutoff = ( self.activity().cutoff_hours ? parseInt( self.activity().cutoff_hours, 10 ) * 60 : 0 ) + ( self.activity().cutoff_minutes ? parseInt( self.activity().cutoff_minutes, 10 ) : 0 );
			
		_date = new Date( _date.getTime() + ( _cutoff * unit ) );
		return _date;
	};

	self.getStopSellingTime = function(args) {
		var unit = 60000, //60,000 milliseconds in a minute
			cfa = parseInt( self.cfa(), 10 ) === 1 ? true : false,
			_date = new Date( args.book_date.getTime() ),
			//cutoff times are in minutes
			activity_deadline = ( self.activity().cutoff_hours ? parseInt( self.activity().cutoff_hours, 10 ) * 60 : 0 ) + ( self.activity().cutoff_minutes ? parseInt( self.activity().cutoff_minutes, 10 ) : 0 ),
			default_deadline = ( WebBooker.bootstrap.default_cutoff_hrs ? parseInt( WebBooker.bootstrap.default_cutoff_hrs, 10 ) * 60 : 0 ) + ( WebBooker.bootstrap.default_cutoff_mins ? parseInt( WebBooker.bootstrap.default_cutoff_mins, 10 ) : 0 );

		// if CFA off, then respect activity deadline when activity > default
		if( !cfa ) {
			_date = new Date( _date.getTime() + ( ( activity_deadline > default_deadline ? activity_deadline : default_deadline ) * unit ) );
		// otherwise, default deadline is always deadline.	
		} else {
			_date = new Date( _date.getTime() + ( default_deadline * unit ) );
		}
		
		return _date.getTime();
	};

	self._grabDays = function(day){
		var times = self.activity().times,
			days = {},
			d = {
				'Sunday': 0,
				'Monday': 1,
				'Tuesday': 2,
				'Wednesday': 3,
				'Thursday': 4,
				'Friday': 5,
				'Saturday': 6
			},
			start_date,
			end_date,
			out = [], ni;
		for(ni = 0; ni < times.length; ni += 1){
			start_date = new Date( times[ni].startDate === '0000-00-00 00:00:00' ? '2001/01/01 00:00:00' : cleanTimestamp(times[ni].startDate) );
			end_date = new Date( times[ni].endDate === '0000-00-00 00:00:00' ? '2037/01/01 00:00:00' : cleanTimestamp(times[ni].endDate) );
			
			if ( start_date >= day || end_date <= day ) {
				continue;
			}
			
			if(!days.hasOwnProperty(times[ni].startDayOfWeek)) {
				days[times[ni].startDayOfWeek] = {
					name: times[ni].startDayOfWeek,
					times: [],
					name_abbrv: times[ni].startDayOfWeek.substr(0,3)
				};
			}
			
			days[times[ni].startDayOfWeek].times.push({
				startDate: times[ni].startDate,
				endDate: times[ni].endDate,
				startTime: times[ni].startTime,
				endTime: times[ni].endTime
			});
		}
		//sort on key
		for(ni in days) {
			out.push(days[ni]);
		}
		out.sort(function(a,b){
			return d[a.name] > d[b.name];
		});
		return out;
	};
	self.getTimestamp = ko.computed(function() {
		if(!self.date() || !self.time())
			return;
		var time = (self.time().startTime == 'Open') ? '' : self.time().startTime;
		return createTimestamp(new Date(self.date() + ' ' + time));
	});

	self.activity.subscribe(function(activity){
	
		var today = function() {
			var d = new Date();
			var month = ('0' + (d.getMonth() + 1)).slice(-2),
				day = ('0' + d.getDate()).slice(-2);
			return month + "/" + day + "/" + d.getFullYear();
		}

		self.date(today());
		self.blackoutDays = [];
		self.cfa(activity.cfa);

		var blackouts = activity.blackouts||[],
			curr_date, end_date, ni;

		//get the dates for each blackout date range and append them to blackoutDays

		for(ni = 0; ni < blackouts.length; ni++) {
			//generate a list of dates from a range
			curr_date = new Date( cleanTimestamp( blackouts[ni].startDate ) );
			end_date = new Date( cleanTimestamp( blackouts[ni].endDate ) );
			while(curr_date <= end_date){
				self.blackoutDays.push(new Date(curr_date.getTime()));
				curr_date.setDate(curr_date.getDate() + 1);
			}
		}
		// adjust the date picker.
		jQuery('#webbooker-activity-book .datepicker').datepicker({
			numberOfMonths: 1,
			minDate: 0,
			//showOn: 'button',
			buttonImage: WebBooker.bootstrap.plugin_url + '/images/icon-calendar.png',
			dateFormat: 'mm/dd/yy',
			buttonImageOnly: true,
			beforeShowDay: self.dayAvailable
		});
	});
	self.date.subscribe(function(newValue) {
		var activityTimes = [];
		self.inventory([]);
		self.time(null);
		self.times([]);

		if(!newValue) return;
		
		var day = new Date(newValue),
			date = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][day.getDay()],
			days = self._grabDays(day),
			today = new Date(),
			date_diff = Math.floor( ( today.getTime() - day.getTime() ) / 86400000 ),
			book_until_end = self.activity().book_until_end,
			ni,no;
			
		for(ni = 0; ni < days.length; ni++){
			if(days[ni].name != date) continue;

			for(no = 0; no < days[ni].times.length; no++){
			
				var time = days[ni].times[no];

				if ( self.times.indexOf( time ) >= 0 ) {
					continue;
				}
				self.times.push(time);
			}
			
			break;
		}
		self.times.sort( function( a, b ) {
			return new Date('1970/01/01 ' + a.startTime) - new Date('1970/01/01 ' + b.startTime);
		} );
		// sort "Open"
		var o = -1;
		for( ni=0; ni < self.times().length; ni++ ) {
			if( jQuery.trim(self.times()[ni].startTime) == 'Open' ) {
				o = ni;
			}
		}
		if( o >= 0 ) {
			var _times = self.times.splice( o, 1 );
			self.times.unshift(_times[0]);
		}
		
		if(self.times().length === 1) {
			self.time(self.times()[0]);
		}
	});
	self.time.subscribe(function(newValue){
		if(newValue){
			self.checkInventory();
		}
	});
	
	return self;
})();

WebBooker.ChildActivityView = function(data){
	var self = {
		title: data.title,
		shortDesc: data.shortDesc,
		url: WebBooker.bootstrap.wb_url + '/' + data.slug + '/',
		display_price: false,
		low: null,
		high: null
	}, ni;

	if(!data.prices) return self;

	for ( ni = 0; ni < data.prices.length; ni += 1 ) {
		if (data.prices[ni].display_price == 1 ) {
			self.display_price = data.prices[ni].amount;
			break;
		}
		if (!self.low || data.prices[ni].amount < self.low ) {
			self.low = data.prices[ni].amount;
		}
		if ( !self.high || data.prices[ni].amount > self.high ) {
			self.high = data.prices[ni].amount;
		}
	}
	
	//self.low = low;
	//self.high = high;
	self.prices = data.prices

	return self;
};
WebBooker.ActivityView = (function(){
	var self = {};
	self.fullScreenShow  = ko.observable(false);
	self.show = ko.observable(false);
	self.invalidLanguage = ko.observable(false);
	self.activity = ko.observable();
	self.children = ko.observableArray([]);
	self.slideshow = ko.observableArray([]);

	self.i18n = function(val){
		WebBooker.API.changeI18N({ i18n: val.i18n });
	};
	
	self.analyticsContinueShopping = function(item, evt) {
		WebBooker.Analytics.trigger( evt.currentTarget, 'action_continueShopping' );
		return true;
	};
	
	self.displayPrice = ko.computed(function() {
		if ( !self.activity() ) return false;
		
		var kids = self.children(),
			prices = self.activity().prices || [],
			price = false,
			i;
		
		if ( kids.length > 0 ) {
			for ( i = 0; i < kids.length; i += 1 ) {
				if ( kids[i].display_price ) {
					price = kids[i].display_price;
					break;
				}
				else if ( !price || kids[i].low < price ) {
					price = kids[i].low;
				}
			}
		} else {
			for ( i = 0; i < prices.length; i += 1 ) {
				if ( prices[i].display_price == 1 ) {
					price = prices[i].amount;
					break;
				}
				else if ( ( !price || prices[i].amount < price ) && prices[i].amount > 0 ) {
					price = prices[i].amount;
				}
			}
		}
		return price;
	});
	
	self.days = ko.computed(function(){
		if(!self.activity()) return;
		if(!(self.activity().times||[]).length) return;

		var times = self.activity().times,
			days = {},
			d = {
				'Sunday': 0,
				'Monday': 1,
				'Tuesday': 2,
				'Wednesday': 3,
				'Thursday': 4,
				'Friday': 5,
				'Saturday': 6
			},
			out = [], ni;
		for(ni = 0; ni < times.length; ni += 1){
			if(!days.hasOwnProperty(times[ni].startDayOfWeek))
				days[times[ni].startDayOfWeek] = {
					name: times[ni].startDayOfWeek,
					times: [],
					name_abbrv: times[ni].startDayOfWeek.substr(0,3)
				};
			days[times[ni].startDayOfWeek].times.push({
				from: times[ni].startDate,
				to: times[ni].endDate,
				time: times[ni].startTime
			});
		}
		//sort on key
		for(ni in days)
			out.push(days[ni]);
		out.sort(function(a,b){ return d[a.name] > d[b.name]; });

		if(out.length == 7){
			return __('Everyday')();
		}
		//make a string
		days = [];
		for(ni = 0; ni < out.length; ni++)
			days.push(__(out[ni].name_abbrv)());
		return days.join(', ');
	});

	self.viewFullSize = function(){
		$ar.load(wb_global_vars['plugin_url'] + '/js/lib/bootstrap-modal-carousel.js', function (){
			self.fullScreenShow(true);
			jQuery('.carousel').carousel({pause: 'hover'});
		});
	};

	self.activity.subscribe(function(activity){
		if(!activity) return;

		jQuery('#activityCarousel').hide();

		self.slideshow([]);
		self.children([]);

		for(ni = 0; ni < (activity.children||[]).length; ni++){
			self.children.push(new WebBooker.ChildActivityView(activity.children[ni]));
		}

		if(!self.children().length){
			//knockout has a rough time keeping up
			setTimeout(function(){
				ko.toJS(activity);
				WebBooker.MiniCart.activity(activity);
			},1);
		}

		//set up the gallery
		if(activity.media && activity.media.length > 0){
			var show = [];
			var columnWidth = jQuery('#webbooker-main').width();
			var makeurl = function(hash, height){
				return WebBooker.mediaServer+'/media/'+hash+'/thumbnail/height/'+height;
			}
			for(ni in activity.media){
				if(activity.media[ni] && activity.media[ni].type == 'image'){
					if(activity.media[ni].url){
						show.push( {
							standard: WebBooker.timthumb + 'tth/400/' + basename(activity.media[ni].url),
							full: WebBooker.timthumb + 'tth/' + WebBooker.galleryImageHeight + '/' + basename(activity.media[ni].url),
							orig: activity.media[ni] 
						} );
					}else if (activity.media[ni].hash) {
						if (activity.media[ni].hasOwnProperty('featured') && activity.media[ni].featured == 'true') {
							if (show.length > 0) {
								show.unshift({
									full : makeurl(activity.media[ni].hash, 700),
									standard : makeurl(activity.media[ni].hash, 400)
								});
							} else {
								show.push({
									full : makeurl(activity.media[ni].hash, 700),
									standard : makeurl(activity.media[ni].hash, 400)
								});
							}
						} else {
							show.push({
								full : makeurl(activity.media[ni].hash, 700),
								standard : makeurl(activity.media[ni].hash, 400)
							});
						}
					}
				}
			}
			self.slideshow(show);
			jQuery('.carousel').carousel({pause: 'hover'});
		}

		// Analytics hook
		WebBooker.Analytics.trigger({
			id: activity.id,
			title: activity.title
		}, 'action_viewActivity');

		if(activity.address_lng && activity.address_lat && !isNaN(activity.address_lng) && !isNaN(activity.address_lat)){
			jQuery(document).ready(function(){
				var map_canvas = document.getElementById('map_canvas');
				if ( map_canvas ) {
					map_canvas.style.width = '100%';
					if(window.innerWidth > 640){
						var mapOptions = {
							zoom: 10,
							center: new google.maps.LatLng(activity.address_lat, activity.address_lng),
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							scrollwheel: false
						};
					} else{
						var mapOptions = {
							zoom: 10,
							center: new google.maps.LatLng(activity.address_lat, activity.address_lng),
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							scrollwheel: false,
							draggable: false
						};
					}
					map = new google.maps.Map(map_canvas, mapOptions);
					
					new google.maps.Marker({
						position: mapOptions.center,
						map: map,
						title:"Activity Location"
					});
				}
			});
		}

		WebBooker.showInitLoader(false);
		WebBooker.hideAllScreens();
		self.show(true);
		if(!window.isIE){
			$ar.load(wb_global_vars['plugin_url'] + '/js/lib/jquery.qrcode.min.js', function() {
				jQuery('#qrcode').qrcode(document.URL);
			});
		}
	});

	self.init = function(){

		if(!WebBooker.bootstrap.activity) {
			return;
		}
			
		if ( WebBooker.bootstrap.activity.status == -1 ) {
			WebBooker.errorMsg('There was a problem loading this activity.');
			return;
		}
		self.activity(WebBooker.bootstrap.activity);
		self.activity().stop_sell_hours = ( WebBooker.bootstrap.default_cutoff_hrs ? parseInt( WebBooker.bootstrap.default_cutoff_hrs, 10 ) : 0 ) + ( WebBooker.bootstrap.default_cutoff_mins ? parseInt( WebBooker.bootstrap.default_cutoff_mins, 10 ) / 60  : 0 );
		jQuery('.carousel').carousel({pause: 'hover'});
	};

	return self;
})();
/**
 *	ActivityRez Web Booking Engine
 *	Checkout File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booking Engine
 */

//compresses to 20348 B

$ar = $ar||{};
WebBooker = WebBooker||{};

$ar.CreditCardModel = function(data){
	var that = $ar.Model({
		number: '',
		year: '',
		month: '',
		code: ''
	},$ar.data_mapper({
		'cc_number':'number'
	},data));

	for(var ni in that){
		if(typeof that[ni] == 'function')
			continue;
		that[ni] = ko.observable(that[ni]);
	}

	var luhnCheck = function(s){
		var i, n, c, r;

		// First, reverse the string and remove any non-numeric characters.
		// we're also turing it into an array now
		r = s.replace(/[^\d]/g,'').split("").reverse();
		if (r.length <= 1)
			return false;

		// Now run through each single digit to create a new string. Even digits
		// are multiplied by two, odd digits are left alone. Then add the string
		// digits (13 -> '1' + '3' -> 4)

		n = 0;
		for(i = 0; i < r.length; i++){
			c = parseInt(r[i], 10) * ((i % 2)+1);
			n += c%10 + Math.floor(c/10);
		}

		// If the resulting sum is an even multiple of ten (but not zero), the
		// card number is good.
		if(n > 0 && n % 10 === 0)
			return true;
		return false;
	};

	that.errors = ko.observableArray([]);
	that.numberValidate = function(){
		that.errors([]);
		if(!that.number()){
			that.errors.push(__('Card number is required.')());
		}
		if(!luhnCheck(that.number()) || !that.type()){
			that.errors.push(__('Invalid card number.')());
		}
	};
	that.validate = function(){
		that.numberValidate();
		if(!that.year()){
			that.errors.push(__('Card expiration year is required.')());
		}
		if(!that.month()){
			that.errors.push(__('Card expiration month is required.')());
		}
		if(!that.code()){
			that.errors.push(__('Card security code is required.')());
		}
		return that.errors().length === 0;
	};
	that.type = ko.computed(function(){
		if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(that.number())) {
			return 'visa';
		}
		if(/^5[1-5][0-9]{14}$/.test(that.number())) {
			return 'mastercard';
		}
		if(/^3[47][0-9]{13}$/.test(that.number())) {
			return 'amex';
		}
		if(/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(that.number()) || /^35(?:2[89]|[3-8]\d)([\ \-]?)\d{4}\1\d{4}\1\d{4}$/.test(that.number())) {
			return 'discover';
		}
		return false;
	});

	that.number.subscribe(that.numberValidate);

	return that;
};
$ar.CheckoutItemModel = function(data){
	var that = $ar.Model({
		activity: 0,
		date: null,
		i18n_date: null,
		time: null,

		url: '',
		title: '',
		destination: '',

		directions_url: '',
		instructions: '',

		cfa: false,
		pending: false,
		inventory: 0,
		tickets: [],

		discounts: [],
		options: [],
		fees: [],
		transportation: [],
		transport: null,
		row_id: String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now()
	});
	that._json_callback = function(beans){
		if(!beans) return;

		beans.tickets = beans.tickets||[];
		beans.options = beans.options||[];
		beans.transportation = beans.transportation||[];
		beans.fees = beans.fees||[];
		
		if(beans.cfa && !beans.inventory) {
			beans.pending = 1;
		}

		var ni;
		for(ni = 0; ni < beans.tickets.length; ni++) {
			beans.tickets[ni] = $ar.CheckoutTicketModel(beans.tickets[ni]);
		}
		for(ni = 0; ni < beans.fees.length; ni++) {
			beans.fees[ni] = $ar.FeeModel(beans.fees[ni]);
		}
		for(ni = 0; ni < beans.options.length; ni++) {
			beans.options[ni] = $ar.OptionModel(beans.options[ni]);
		}
		for(ni = 0; ni < beans.transportation.length; ni++) {
			beans.transportation[ni] = $ar.TransportationModel(beans.transportation[ni]);
		}
	};
	that.json(data);

	that.url = ko.observable(that.url);
	that.title = ko.observable(that.title);
	that.destination = ko.observable(that.destination);
	that.instructions = ko.observable(that.instructions);
	that.cfa = ko.observable(that.cfa);
	that.inventory = ko.observable(that.inventory);

	that.copyToAll = ko.observable( (wb_global_vars.guest_copytoall == 'true') ? true : false ); //keep this false. pleasant will lose their shit if this is checked by default.
	that.cartItem = (data?data.cartItem:false)||null;
	that.pending = ko.observable(that.pending);
	that.fees = ko.observableArray(that.fees||[]);
	
	that.transport = ko.observable(that.transport);
	that.transport.subscribe(function(transport) {
		that.makeTransportMaster( that.transportView );
	});
	that.transportation = ko.observableArray(that.transportation||[]);
	that.transportation.subscribe(function(nval){
		var no, ni, out = [], outtix = [], tickets = that.tickets();
		if ( that.transport() ) {
			return false;
		}
		for(no = 0; no < nval.length; no++){
			// don't add transp options that are outside the date range
			var date_start = (nval[no].start && nval[no].start != '0000/00/00 00:00:00') ? (new Date(nval[no].start)).getTime() : false,
				date_end = (nval[no].end && nval[no].end != '0000/00/00 00:00:00') ? (new Date(nval[no].end)).getTime() : false,
				act_date = (new Date(that.date + ' ' + that.time)).getTime();
			
			if ( date_start && date_end ) {
				if ( act_date < date_start || act_date > date_end ) {
					continue;
				}
			} else if ( date_start && !date_end ) {
				if ( act_date < date_start ) {
					continue;
				}
			} else if ( date_end && !date_start ) {
				if ( act_date > date_end ) {
					continue;
				}
			}
			
			out.push($ar.TransportationModel(nval[no].json()));
			outtix.push(nval[no].json());
		}
		that.transportView.transportation( out );
		for ( no = 0; no < tickets.length; no += 1 ) {
			if ( tickets[no].transport() ) {
				continue;
			}
			for ( ni = 0; ni < outtix.length; ni += 1 ) {
				tickets[no].transportView.transportation.push( $ar.TransportationModel( outtix[ni] ) );
			}
		}
	});
	that.transportView = $ar.TransportView();
	that.transportView.transportation.subscribe(function(nval){
		if(!nval) return;
		var ni,
			setTransport = function(item){
				return function(_nval){
					if(!_nval) {
						that.transport(null);
					} else {
						that.transport(item);
					}
				};
			};

		for(ni = 0; ni < nval.length; ni++){
			nval[ni].selected.subscribe((setTransport)(nval[ni]));
		}
	});
	that.transportView.hotel.subscribe(function(nval){
		if(!nval)
			that.transport(null);
	});
	that.transportView.room.subscribe(function(val) {
		that.makeTransportMaster( that.transportView );
	});
	that.transportView.selectTransport.subscribe(function(val) {
		if ( val == 'false' ) {
			that.makeTransportsFalse();
		} else if ( val == 'empty' ) {
			that.undoTransportMaster();
		} else {
			that.makeTransportMaster( that.transportView );
		}
	});
	that.transportView.row_id = that.row_id;
	
	that.options = ko.observableArray(that.options||[]);
	that.options.subscribe(function(nval){
		var tix = that.tickets(),
			open = false,
			ni, no, out;
		for(ni = 0; ni < nval.length; ni++){
			if(nval[ni].required){
				open = true;
			}
		}
		for(ni = 0; ni < tix.length; ni++){
			if(tix[ni].options().length) continue;
			out = [];
			for(no = 0; no < nval.length; no++){
				out.push($ar.OptionModel(nval[no].json()));
			}
			tix[ni].options(out);
			if(open || ni === 0) {
				tix[ni].showOptions(true);
			}
		}
	});
	that.tickets = ko.observableArray(that.tickets||[]);

	that.guests = ko.computed(function(){
		var tix = that.tickets(),
			guests = {},
			out = [],
			ni,no,fees;
		for(ni = 0; ni < tix.length; ni++){
			if(!guests[tix[ni].id]){
				guests[tix[ni].id] = {
					name: __(tix[ni].name)(),
					price: tix[ni].price(),
					qty: 0
				};
			}
			guests[tix[ni].id].qty++;
		}
		for(ni in guests){
			fees = that.fees()||[];
			guests[ni].fees = 0;
			for(no = 0; no < fees.length; no++){
				if(fees[no].percentage)
					guests[ni].fees += guests[ni].price * guests[ni].qty * fees[no].percentage;
				else
					guests[ni].fees += fees[no].amount * guests[ni].qty;
			}
			guests[ni].total = guests[ni].price * guests[ni].qty;
			out.push(guests[ni]);
		}
		return out;
	}).extend({ throttle: 10 });

	that.validate = function(){
		var valid = true,
			tix = that.tickets(),
			lead = tix[0].options(),
			opt, ni, no;
		for( ni = 0; ni < tix.length; ni++ ) {
			if( that.copyToAll() ) {
				opt = tix[ni].options();
				for(no = 0; no < opt.length; no++){
					opt[no].json(lead[no].json());
				}
			}
			valid = valid && tix[ni].validate();
		}
		return valid;
	};

	//this function is super ugly because of json_input on the activity
	//and the way options are stored on tickets. Guarenteed to break.
	that.parseOptions = function(_json){
		var tix = that.tickets(),
			hash = {},
			opt,ni,no,items;
			
		for(ni = 0; ni < tix.length; ni++)
			hash[tix[ni].ticket_id] = tix[ni];
		for(ni = 0; ni < _json.length; ni++){
			if(!hash.hasOwnProperty(parseInt(_json[ni].ticketID,10))) continue;
			if(_json[ni].type != 'criteria') continue;
			opt = hash[parseInt(_json[ni].ticketID,10)].options();
			for(no = 0; no < opt.length; no++){
				if(opt[no].name != _json[ni].name) continue;
				if(/^\s*(dropdown|combo)\s*$/.test(opt[no].type.toLowerCase())){
					items = opt[no].items();
					for(na = 0; na < items.length; na++){
						if(items[na].name == _json[ni].value){
							opt[no].selectedItem(items[na]);
						}
					}
				}
			}
		}
	};

	that.remove = function(){
		if(that.cartItem)
			WebBooker.Cart.items.remove(that.cartItem);
		WebBooker.Checkout.sale.items.remove(that);
	};

	that.removeGuest = function(poo){
		var ni, guests;
		that.tickets.remove(poo);
		if(!that.tickets().length) {
			that.remove();
		} else if( that.cartItem ) {
			guests = that.cartItem.guests();
			for ( ni = 0; ni < guests.length; ni += 1 ) {
				if ( guests[ni].id === poo.id ) {
					guests[ni].qty( guests[ni].qty() - 1 );
				}
			}
		}
	};

	that.ticketTotal = ko.computed(function(){
		var tix = that.tickets(),
			sub = 0,
			ni,no;
		for(ni = 0; ni < tix.length; ni++){
			sub += tix[ni].price();
		}
		return sub;
	}).extend({ throttle: 10 });
	that.optionTotal = ko.computed(function(){
		var tix = that.tickets()||[],
			fees = that.fees()||[],
			toAll = that.copyToAll()&&tix[0]?tix[0].options():false,
			sub = 0,
			ni, no, opt;
		for(ni = 0; ni < tix.length; ni++){
			for(no = 0; no < fees.length; no++){
				sub += Math.round(fees[no].price(tix[ni].price())*100)/100;
			}

			opt = toAll||tix[ni].options();
			for(no = 0; no < opt.length; no++){
				if(opt[no].type.toLowerCase() == 'text') continue;
				if(!opt[no].selectedItem()) continue;
				sub += opt[no].selectedItem().fee||0;
			}
		}
		return sub;
	}).extend({ throttle: 10 });
	that.transportTotal = ko.computed(function(){
		var tix = that.tickets(),
			sub = 0,
			ni;
		for(ni = 0; ni < tix.length; ni++){
			if(!tix[ni].transportView.wantsTransport()) continue;
			/*if(that.transportMaster() && that.transportMaster().transport()){
				if ( that.transportMaster().transportView.hotel() ) {
					WebBooker.Checkout.sale.leadGuest.hotel( $ar.HotelModel(that.transportMaster().transportView.hotel().json()) );
					WebBooker.Checkout.sale.leadGuest.room( that.transportMaster().transportView.room() );
				}
				sub += that.transportMaster().transport().amount;
				continue;
			}*/
			if(tix[ni].transport() && tix[ni].transport().amount) {
				sub += tix[ni].transport().amount;
			}
			/*if ( !that.transportMaster() && tix[ni].transport() && tix[ni].transportView.hotel() ) {
				WebBooker.Checkout.sale.leadGuest.hotel( $ar.HotelModel(tix[ni].transportView.hotel().json()) );
				WebBooker.Checkout.sale.leadGuest.room( tix[ni].transportView.room() );
			}*/
		}
		return sub;
	}).extend({ throttle: 10 });
	that.subtotal = ko.computed(function(){
		var sub = that.ticketTotal();
		sub += that.optionTotal();
		sub += that.transportTotal();
		return sub;
	}).extend({ throttle: 10 });
	that.taxTotal = function(discount){
		var tix = that.tickets()||[],
			fees = that.fees()||[],
			toAll = that.copyToAll()&&tix[0]?tix[0].options():false,
			//masterTran = that.transportMaster() && that.transportMaster().transport()?that.transportMaster().transport().amount:false,
			dis = discount||{ rate: 0, amount: 0 },
			taxRate = WebBooker.bootstrap.taxRate,
			sub = 0,
			dis_r = parseFloat(dis.rate),
			dis_a = parseFloat(dis.amount),
			ni, no, tix_sub;

		for(ni = 0; ni < tix.length; ni++){
			tix_sub = tix[ni].price();
			for(no = 0; no < fees.length; no++){
				tix_sub += fees[no].price(tix[ni].price());
			}

			opt = toAll||tix[ni].options();
			for(no = 0; no < opt.length; no++){
				if(opt[no].type.toLowerCase() == 'text') continue;
				if(!opt[no].selectedItem()) continue;
				tix_sub += opt[no].selectedItem().fee||0;
			}

			if(tix[ni].transportView.wantsTransport()){
				//if(masterTran){
				//	tix_sub += masterTran;
				//} else 
				if(tix[ni].transport() && tix[ni].transport().amount){
					tix_sub += tix[ni].transport().amount;
				}
			}
			tix_sub = tix_sub - ((dis_r*tix_sub) / 100) - dis_a;
			sub += Math.round(tix_sub * taxRate)/100;
		}

		return sub;
	};

	//this function connects an item in the cart to this checkout item
	that.connectCart = function(cartItem){
		that.cartItem = cartItem;
		that.json(cartItem.json());
		
		var guests = cartItem.guests(),
			data,qty,ni,no;

		var tickets = [];
		for(ni = 0; ni < guests.length; ni++){
			qty = guests[ni].qty();
			for(no = 0; no < qty; no++){
				data = {
					id: guests[ni].id,
					name: guests[ni].name,
					price: guests[ni].price()
				};
				if(that.options().length){
					data.options = that.options();
				}
				tickets.push($ar.CheckoutTicketModel(data));
			}
		}
		that.tickets(tickets);
	};
	that.load = function(_callback){
		if(!that.activity){
			if(typeof _callback == 'function')
				_callback();
			return;
		}

		var params = {
			id: that.activity,
			date: createTimestamp(new Date(that.date + (that.time.startTime == 'Open'?'': ' ' + that.time.startTime))),
			currency: WebBooker.selectedCurrency().title
		};
		WebBooker.API.betterGetActivity(params,function(result){
			that.cfa(result.inventory.cfa);
			that.inventory(result.inventory.available);
			
			if ( result.inventory.cfa && result.inventory.available <= 0 ) {
				that.pending(1);
			}

			that.title(result.title);
			that.destination(__(result.destination)());
			that.url(WebBooker.bootstrap.wb_url + '/' + result.slug + '/');
			that.instructions(result.instructions);

			var tix = that.tickets(),
				guests = that.cartItem?that.cartItem.guests():[],
				prices = {};
				
			//adjust the prices of all the tickets
			for(ni = 0; ni < result.prices.length; ni++){
				prices[result.prices[ni].guest_type_id] = result.prices[ni];
			}
			for(ni = 0; ni < tix.length; ni++){
				if(!prices[tix[ni].id]) continue;
				tix[ni].price(parseFloat(prices[tix[ni].id].amount));
			}
			for(ni = 0; ni < guests.length; ni++){
				if(!prices[guests[ni].id]) continue;
				guests[ni].price(prices[guests[ni].id].amount / prices[guests[ni].id].rate);
			}
			that.tickets.valueHasMutated();
			if(that.cartItem) {
				that.cartItem.guests.valueHasMutated();
			}

			var crit = result.criteria||[];
			for(ni = 0; ni < crit.length; ni++){
				crit[ni] = $ar.OptionModel(crit[ni]);
			}
			that.options(crit);
			
			var transport = result.transport||[];
			for(ni=0;ni<transport.length;ni++){
				transport[ni] = $ar.TransportationModel(transport[ni]);
			}
			that.transportation(transport);

			var fee = result.fees||[];
			for(ni = 0; ni < fee.length; ni++){
				fee[ni] = $ar.FeeModel(fee[ni]);
			}
			that.fees(fee);

			if(typeof _callback == 'function'){
				_callback();
			}
		});
	};
	that.save = function(sale_id, _callback){
		var tix = that.tickets()||[],
			tix_num = 0,
			ni;

		//if(that.transportMaster() && that.transportMaster().transport()){
		//	for(ni = 0; ni < tix.length; ni++){
		//		tix[ni].transport($ar.TransportationModel(that.transportMaster().transport().json()));
		//	}
		//}
		var parse_tix = function(result){
			if(!--tix_num && typeof _callback == 'function'){
				_callback();
			}
		};
		for(ni = 0; ni < tix.length; ni++){
			tix_num++;
			tix[ni].save(that, sale_id,parse_tix);
		}
	};
	that.transportMaster = ko.observable(false);
	that.makeTransportMaster = function(item){
		var tix = that.tickets(), ni;
		if ( !that.transport() ) return;
		for(ni = 0; ni < tix.length; ni++){
			if ( tix[ni].transportView.selectTransport() === 'false' ) {
				continue;
			}
			tix[ni].transportView.selectTransport('true');
			tix[ni].transportView.wantsTransport(true);
			tix[ni].transportView.selectedTransType(item.selectedTransType());
			tix[ni].transportView.locationSelect(item.locationSelect());
			tix[ni].transport( $ar.TransportationModel( that.transport().json() ) );
			if(item.locationSelect() == 'hotel' && item.hotel()) {
				tix[ni].transportView.hotel($ar.HotelModel(item.hotel().json()));
				tix[ni].transportView.room(item.room());
			} else if(item.locationSelect() == 'address' && item.lat()) {
				tix[ni].transportView.lat(item.lat());
				tix[ni].transportView.lng(item.lng());
				tix[ni].transportView.home.address(item.home.address());
				tix[ni].transportView.home.city(item.home.city());
				tix[ni].transportView.home.state(item.home.state());
				tix[ni].transportView.home.postal(item.home.postal());
				tix[ni].transportView.home.country(item.home.country());
			}
			//if(tix[ni].transportView == item){
			//	that.transportMaster(!!!tix[ni].transportView.master()?tix[ni]:null);
			//	tix[ni].transportView.master(!!!tix[ni].transportView.master());
			//	continue;
			//}
			//tix[ni].transportView.master(false);
			for ( var no = 0; no < tix[ni].transportView.transportation().length; no += 1 ) {
				var transp = tix[ni].transportView.transportation()[no];
				if ( transp.name == that.transport().name ) {
					transp.selected(true);
				} else {
					transp.selected(false);
				}
			}
		}
	};
	that.undoTransportMaster = function() {
		var tix = that.tickets(), ni;
		//that.transportMaster(false);
		for ( ni = 0; ni < tix.length; ni += 1 ) {
			tix[ni].transport(null);
			//tix[ni].transportView.master(false);
			tix[ni].transportView.selectTransport('empty');
			tix[ni].transportView.wantsTransport(false);
			tix[ni].transportView.selectedTransType(null);
			tix[ni].transportView.locationSelect(false);
			tix[ni].transportView.hotel(null);
			tix[ni].transportView.room(null);
			tix[ni].transportView.lat(null);
			tix[ni].transportView.lng(null);
			tix[ni].transportView.home.address('');
			tix[ni].transportView.home.city('');
			tix[ni].transportView.home.state('');
			tix[ni].transportView.home.postal('');
			tix[ni].transportView.home.country('');
		}
	};
	that.makeTransportsFalse = function() {
		var tix = that.tickets(), ni;
		//that.transportMaster(false);
		for ( ni = 0; ni < tix.length; ni += 1 ) {
			tix[ni].transport(null);
			//tix[ni].transportView.master(false);
			tix[ni].transportView.selectTransport('false');
			tix[ni].transportView.wantsTransport(false);
		}
	};
	
	that.i18n_date = function(){
		if( typeof that.time === 'object' ) {
			var time = new Date(that.date + (that.time.startTime=='Open'?' ':' ' + that.time.startTime));
		} else {
			var time = new Date(that.date + (that.time == 'Open'?'': ' ' + that.time));
		}
		var i18n = WebBooker.Settings.get('i18n') || wb_global_vars.i18n,
				   date;
		switch( i18n ) {
			case 'ja' 	:	//iso
			case 'zh_SG':
			case 'zh_TW':
			case 'zh_HK':
			case 'zh_CN':
			case 'ko_KR':
							date =  time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate();
							break;			
			case 'en_GB':	//euro
			case 'en_AU':
			case 'en_AG':
			case 'cs_CZ':
			case 'da_DK':
			case 'nl_NL':
			case 'fi_FI':
			case 'fr_FR':
			case 'fr_BE':
			case 'fr_CA':
			case 'de_DE':
			case 'de_AT':
			case 'el_GR':
			case 'it':
			case 'in_IN':
			case 'ms_MY':
			case 'ml_IN':
			case 'no_NO':
			case 'nb_NO':
			case 'nn_NO':
			case 'pl_PL':
			case 'pt_BR':
			case 'pt_PT':
			case 'ru_RU':
			case 'es_ES':
			case 'es_AR':
			case 'es_MX':
			case 'es':
			case 'sv_se':
			case 'th':
			case 'vi':
							date = time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();
							break;
			case 'en_US':	//us original
			case 'en_CA':
			default		:	date = (time.getMonth() + 1) + '/' + time.getDate() + '/' + time.getFullYear();
		}
		return date;
	};
	
	return that;
};
$ar.TransportView = function(data){
	var self = $ar.Model({
		master: false,
		transportation: [],
		wantsTransport: 'empty',
		locationSelect: false,
		hotel: null,
		room: null,
		home: {
			address: ko.observable(''),
			city: ko.observable(''),
			state: ko.observable(''),
			postal: ko.observable(''),
			country: ko.observable('')
		},
		lat: null,
		lng: null,
		stored_lat: null,
		stored_lng: null,
		showMoreTransports: false,
		map: null,
		row_id: null,
		map_container: null
	});

	self.drawMap = function() {
		if(!self.map_container)
			self.map_container = document.getElementById(self.row_id).getElementsByClassName('map-canvas')[0];

		var options = {
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				maxZoom: 22,
				scrollwheel: false,
				zoom: 18
			};

		self.map_container.style.display = 'block';
		self.map = new google.maps.Map(self.map_container, options);
		self.map_container.style.display = 'none';
	};

	self.doGeocode = function() {
		if(!self.home.address() || !self.home.city() || !self.home.state() || !self.home.postal() || !self.home.country()) return;
		var address = self.home.address() + ' ' + self.home.city() + ' ' + self.home.state() + ' ' + self.home.postal() + ' ' + self.home.country()['alpha-2'];
		if(!self.map_container) {
			self.map_container = document.getElementById(self.row_id).getElementsByClassName('map-canvas')[0];
		}

		$ar.Geocoder.geocode({ address: address }, function(results) {
			var loc = results[0].geometry.location;
			self.stored_lat(loc.lat());
			self.stored_lng(loc.lng());
			self.map_container.style.display = 'block';
			self.map = new google.maps.Map(self.map_container, {
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				maxZoom: 22,
				scrollwheel: false,
				zoom: 18,
				center: new google.maps.LatLng(loc.lat(), loc.lng())
			});
			new google.maps.Marker({
				map: self.map,
				position: loc,
				draggable: false,
				animation: google.maps.Animation.DROP
			});
		});
	};

	self.acceptGeocode = function() {
		self.lat(self.stored_lat());
		self.lng(self.stored_lng());
		self.stored_lat(null);
		self.stored_lng(null);
		self.map_container.style.display = 'none';
		self.map = null;
	};

	self._json_callback = function(beans){
		beans = beans||{};
		beans.home = beans.home||{};
		beans.home = {
			address: ko.observable(beans.home.address),
			city: ko.observable(beans.home.city),
			state: ko.observable(beans.home.state),
			postal: ko.observable(beans.home.postal),
			country: ko.observable(beans.home.country)
		};
	};

	self.master = ko.observable(self.master);

	self.transportation = ko.observableArray(self.transportation);
	self.transportation.subscribe(function(nval){
		if(!nval) return;
		var ni;
		var clean_house = function(item){
			return function(_nval){
				if(!_nval) return;
				var trans = self.transportation(),
					no;
				for(no = 0; no < trans.length; no++){
					if(trans[no] == item) continue;
					trans[no].selected(false);
				}
			};
		};
		for(ni = 0; ni < nval.length; ni++){
			nval[ni].selected.subscribe((clean_house)(nval[ni]));
		}
	});
	self.transportationTypes = ko.computed(function() {
		var types = [__('Any')()], ni;
		for ( ni = 0; ni < self.transportation().length; ni += 1 ) {
			var trans = self.transportation()[ni],
				vehicle = decodeURIComponent(trans.vehicle);//Remove URL Encoding if there
				vehicle = __( trans.vehicle.charAt(0).toUpperCase() + trans.vehicle.slice(1) )();
			
			if ( jQuery.inArray( vehicle, types ) < 0 ) {
				types.push( vehicle );
			}
		}
		return types;
	});
	self.selectedTransType = ko.observable();
	self.selectTransport = ko.observable(self.wantsTransport);
	self.selectTransport.subscribe(function(value) {
		if ( value == 'empty' || value == 'false' ) {
			self.wantsTransport(false);
		} else if ( value == 'true' ) {
			self.wantsTransport(true);
		}
	});
	self.wantsTransport = ko.observable( ( self.wantsTransport == 'empty' ) ? false : self.wantsTransport );
	self.locationSelect = ko.observable(self.locationSelect);
	if(WebBooker.bootstrap.agencyID == 1260) {
		// TODO - We should not hard-code clients like this. Let's make it manageable
		// from the Admin, i.e. option to set default hotel on a Web Booker.
		self.hotel = ko.observable( $ar.HotelModel( {
			'ID': 18655,
			'hotel_addr1': '92-1185 Aliinui Dr',
			'hotel_addr2': '',
			'hotel_city': 'Kapolei',
			'hotel_country': 'US',
			'hotel_lat': '21.33914939329752',
			'hotel_lng': '-158.12336684232787',
			'hotel_phone': '(808) 674-6200',
			'hotel_st': 'HI',
			'hotel_zip': '96707',
			'name': 'Aulani Resort & Spa'
		} ) );
	} else {
		self.hotel = ko.observable(self.hotel);
	}
	self.room = ko.observable(self.room);

	self.lat = ko.observable(self.lat);
	self.lng = ko.observable(self.lng);
	self.stored_lat = ko.observable(self.stored_lat);
	self.stored_lng = ko.observable(self.stored_lng);

	self.showMoreTransports = ko.observable(self.showMoreTransports);
	self.transportsToShow = ko.computed(function(){
		if(!self.locationSelect()) return [];
		var transports = [],
			location = {},
			location_select = self.locationSelect();

		if(location_select == 'hotel') {
			location = self.hotel();
		}else if(self.lat() && self.lng()) {
			location.lat = parseFloat(self.lat());
			location.lng = parseFloat(self.lng());
		}
		if(!location)
			return [];
		if(!location.lat || !location.lng)
			return [];
		
		for ( var ni = 0; ni < self.transportation().length; ni += 1 ) {
			var transport = self.transportation()[ni];
			transport.distance = getDistance(transport.lat, transport.lng, location.lat, location.lng, 'M');
			if ( self.selectedTransType() && ( self.selectedTransType() === __( transport.vehicle.charAt(0).toUpperCase() + transport.vehicle.slice(1) )() || self.selectedTransType() === __('Any')() ) ) {
				transports.push(transport);
			}
		}

		if ( transports.length ) {
			transports.sort(sortNearestDistance);
			transports[0].selected(true);
		}

		if(!self.showMoreTransports())
			return transports.slice(0,3);
		return transports;
	});
	self.toggleTransportMore = function(){
		self.showMoreTransports(!!!self.showMoreTransports());
	};

	return self;
};
$ar.CheckoutTicketModel = function(data){
	var that = $ar.Model({
		ticket_id: 0,
		row_id: String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now(),

		id: 0,
		name: '',
		price: 0,

		first_name: '',
		last_name: '',

		options: [],
		transport: null,
		editTransport: false
	});
	that._json_callback = function(beans){
		if(!beans) return;
		beans.options = beans.options||[];
		var ni;
		for(ni = 0; ni < beans.options.length; ni++)
			beans.options[ni] = $ar.OptionModel(beans.options[ni]);
		if(beans.transport) beans.transport = $ar.TransportationModel(beans.transport);
	};
	that.json(data);

	that.price = ko.observable(that.price||0);
	that.first_name = ko.observable(that.first_name||'');
	that.last_name = ko.observable(that.last_name||'');
	that.options = ko.observableArray(that.options||[]);
	that.showOptions = ko.observable(true);

	that.editTransport = ko.observable(that.editTransport||false);
	that.transport = ko.observable(that.transport);
	that.hotelRoom = ko.observable('');
	that.transportView = $ar.TransportView();
	that.transportView.transportation.subscribe(function(nval){
		if(!nval) return;
		var ni,
			setTransport = function(item){
				return function(_nval){
					if(!_nval) that.transport(null);
					else that.transport(item);
				};
			};

		for(ni = 0; ni < nval.length; ni++){
			nval[ni].selected.subscribe((setTransport)(nval[ni]));
		}
	});
	that.transportView.hotel.subscribe(function(nval){
		if(!nval)
			that.transport(null);
	});

	that.transportView.row_id = that.row_id;

	that.toggleEditTransport = function() {
		that.editTransport( that.editTransport() ? false : true );
	};

	that.validate = function(){
		var valid = true,
			opt = that.options(),
			ni;
		for(ni = 0; ni < opt.length; ni++){
			valid = valid && opt[ni].validate();
		}
		if( that.transportView.transportation().length > 0 && that.transportView.selectTransport() == 'empty' ) {
			valid = false;
		}
		if( that.transportView.wantsTransport() ) {
			if( !that.transport() || 
				!that.transportView.locationSelect() || 
				( that.transportView.locationSelect() == 'hotel' && ( !that.transportView.hotel() || !that.transportView.room() ) ) ||
				( that.transportView.locationSelect() == 'address' && !that.transportView.lat() ) ) {
				valid = false;
			}
		}
		if(!valid) that.showOptions(true);
		return valid;
	};
	that.toggleOptions = function(){
		that.showOptions(!that.showOptions());
	};

	that.save = function(guest,sale_id,_callback){
		var a_cfa = guest.cfa && !guest.inventory;
		var ticket = {
			aid: guest.activity,
			sid: sale_id,
			timestamp: createTimestamp(new Date(guest.date + (guest.time.startTime=='Open'?' ':' ' + guest.time.startTime))),
			guest_type_id: that.id,
			guest_type: that.name,
			//leadGuest: guest.lead(),
			lead_guest_hotel: (that.transportView.hotel()||{ json:function(){ return null; }}).json(),
			cfa: guest.cfa,
			cfa_name: '',
			cfa_number: '',
			firstName: that.first_name(),
			lastName: that.last_name()
		};
		WebBooker.API.saveTicket(ticket, function(result){
			if(result.status != 1){
				if(typeof _callback == 'function')
					_callback();
				return;
			}
			that.ticket_id = result.data.ID;

			if(result.data.cfa == 1 && !a_cfa){
				guest.pending(1);
			}

			var opts = that.options(),
				ni;
			for(ni = 0; ni < opts.length; ni++){
				opts[ni].save(that.ticket_id,sale_id);
			}

			if(WebBooker.Checkout.sale.discount()){
				WebBooker.Checkout.sale.discount().save(that.ticket_id,sale_id);
			}

			if(that.transportView.wantsTransport() && that.transport()){
				that.transport().save(that.ticket_id, sale_id);
			}

			if(typeof _callback == 'function')
				_callback();
		});
	};

	return that;
};
$ar.FeeModel = function(data){
	var that = $ar.Model({
		ticket: 0,
		label: '',
		amount: false,
		percentage: false
	});
	that._json_callback = function(beans){
		if(/\%/.test(beans.amount)){
			beans.percentage = parseFloat(beans.amount);
			beans.amount = false;
		} else {
			beans.percentage = false;
			beans.amount = beans.amount;
		}
	};
	that.json(data);

	that.displayText = ko.computed(function(){
		if(that.percentage){
			return that.percentage + '%';
		}
		return WebBooker.selectedCurrency().symbol + that.amount;
	});
	that.price = function(p){
		if(that.amount) return that.amount;
		return p * that.percentage/100;
	};

	return that;
};
$ar.TransportationModel = function(data){
	var that = $ar.Model({
		ticket: 0,
		type: 'transportation',
		name: '',
		id: '',
		vehicle: '',
		amount: '',
		start: false,
		end: false,
		lat: 0,
		lng: 0,
		instructions: '',
		address: ''
	},$ar.data_mapper({ 'ID': 'id' },data));

	that.selected = ko.observable(false);
	that.save = function(ticket, sale_id){
		WebBooker.API.saveOption({
			ticketID: ticket,
			saleID: sale_id,
			name: that.name,
			value: that.id,
			fee: that.amount,
			type: 'transportation'
		});
	};

	return that;
};
$ar.OptionModel = function(data){
	var that = $ar.Model({
		ticket: 0,
		id: '',
		type: '',
		name: '',
		qty: 0,
		required: false,
		items: [],
		selectedItem: null,
		text: ''
	},$ar.data_mapper({
		'req': 'required',
		'amount': 'fee'
	},data));

	that.text = ko.observable(that.text||'');
	that.items = ko.observableArray(that.items||[]);
	that.selectedItem = ko.observable(that.selectedItem);

	that.validate = function(){
		if(!that.required) return true;
		switch(that.type.toLowerCase()){
			case 'text':
				if(!that.text()) return false;
				return true;
			case 'dropdown':
			case 'combo':
				if(!that.selectedItem()) return false;
				return true;
			default:
				return false;
		}
		return true;
	};

	that.save = function(ticket, sale_id){
		var opt_value,
			opt_fee,
			opt_choice = '';

		if(that.type.toLowerCase() == 'text') {
			opt_value = that.text;
			opt_fee = '';
			opt_choice = that.text;
		}
		if(/^(dropdown|combo)/.test(that.type.toLowerCase())){
			opt_value = that.selectedItem() ? that.selectedItem().name : '';
			opt_fee = that.selectedItem() ? parseFloat(that.selectedItem().fee) : '';

			if(opt_fee)
				opt_choice =  opt_value + ' &#043;' + opt_fee;
			else
				opt_choice =  opt_value;
		}
		WebBooker.API.saveOption({
			ticketID: ticket,
			saleID: sale_id,
			name: that.name,
			value: opt_value,
			fee: opt_fee,
			type: /^(text|combo|dropdown)/.test(that.type.toLowerCase()) ? 'criteria' : that.type
		});
	};

	return that;
};

$ar.LeadGuestInfoModel = function(data){
	var that = new $ar.Model({
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		address: '',
		city: '',
		state: '',
		postal: '',
		country: '',
		hotel: null,
		room: null
	},data);

	for(var ni in that){
		if(typeof that[ni] == 'function' || /^(_)/.test(ni))
			continue;
		that[ni] = ko.observable(that[ni]);
	}

	that.full_name = ko.computed(function(){
		var i18n = WebBooker.Settings.get('i18n') || wb_global_vars.i18n;
		
		if ( WebBooker.Checkout ) {
			var sale = WebBooker.Checkout.sale;
		
			if ( sale.items().length && WebBooker.Checkout.copyNames() ) {
				var items = sale.items(),
					ni, no, tix;
				for ( ni = 0; ni < items.length; ni += 1) {
					tix = items[ni].tickets();
					for ( no = 0; no < tix.length; no += 1 ) {
						//if ( !tix[no].first_name() || tix[no].first_name() === '' )
							tix[no].first_name( that.first_name() );
						//if ( !tix[no].last_name() || tix[no].last_name() === '' )
							tix[no].last_name( that.last_name() );
					}
				}
			}
		}
		
		if( i18n == 'ja' ) {
			return that.last_name() + ' ' + that.first_name();
		} else {
			return that.first_name() + ' ' + that.last_name();
		}
	});
	that.saveToLocal = ko.computed(function() {
		var f_name = that.first_name(),
			l_name = that.last_name(),
			phone = that.phone(),
			email = that.email();
			
		if ( !f_name || !l_name || !phone || !email ) return false;
		WebBooker.Sale.set('leadGuestInfo', {
			f_name: f_name,
			l_name: l_name,
			phone: phone,
			email: email
		});
	});
	that.states = WebBooker.us_states;
	that.errors = ko.observableArray([]);
	that.validate = function(){
		that.errors([]);
		var email_regexp = /[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+(?:\.[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?/;

		if(!that.first_name()){
			that.errors.push(__('First name is required.')());
		}
		if(!that.last_name()){
			that.errors.push(__('Last name is required.')());
		}
		if(!that.phone()){
			that.errors.push(__('Telephone number is required.')());
		}
		if(!that.email()){
			that.errors.push(__('E-mail address is required.')());
		}
		if(that.email() && !email_regexp.test(that.email())){
			that.errors.push(__('E-mail address is not valid.')());
		}
		return that.errors().length === 0;
	};
	
	that.copyToPayment = function() {
		var payments = WebBooker.Checkout.sale.payments(), ni, pmt;
		for ( ni = 0; ni < payments.length; ni += 1 ) {
			pmt = payments[ni];
			if ( pmt.type !== 'credit' ) continue;
			
			if ( !pmt.payee.first_name() ) {
				pmt.payee.first_name( that.first_name() );
			}
			if ( !pmt.payee.last_name() ) {
				pmt.payee.last_name( that.last_name() );
			}
			if ( !pmt.payee.email() ) {
				pmt.payee.email( that.email() );
			}
			if ( !pmt.payee.phone() ) {
				pmt.payee.phone( that.phone() );
			}
			
			break;
		}
	};

	return that;
};

$ar.PaymentInfoModel = function(data){
	var that = $ar.Model({
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		address: '',
		city: '',
		state: '',
		postal: '',
		country: ''
	},data);

	for(var ni in that){
		if(typeof that[ni] == 'function' || /^_/.test(ni))
			continue;
		that[ni] = ko.observable(that[ni]);
	}
	that.states = WebBooker.us_states;
	that.errors = ko.observableArray([]);
	that.validate = function(){
		that.errors([]);
		var email_regexp = /[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+(?:\.[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?/;

		if(!that.first_name()){
			that.errors.push(__('First name is required.')());
		}
		if(!that.last_name()){
			that.errors.push(__('Last name is required.')());
		}
		if(!that.phone()){
			that.errors.push(__('Telephone number is required.')());
		}
		if(!that.country()){
			that.errors.push(__('Country is required.')());
		}
		if(!that.city()){
			that.errors.push(__('City is required.')());
		}
		if(!that.state()){
			that.errors.push(__('State is required.')());
		}
		if(!that.address()){
			that.errors.push(__('Address number is required.')());
		}
		if(!that.postal()){
			that.errors.push(__('Postal Code is required.')());
		}

		if( that.errors().length === 0 ) {
			WebBooker.Checkout.sale.leadGuest.json({
				'country': that.country(),
				'city': that.city(),
				'state': that.state(),
				'address': that.address(),
				'postal': that.postal()
			});
		}
		
		return that.errors().length === 0;
	};

	return that;
};

$ar.HotelModel = function(data){
	var that = $ar.Model({
		id: 0,
		addr1: '',
		addr2: '',
		st:'',
		city: '',
		zip: '',
		country: '',

		lat: '',
		lng: '',

		name: '',
		phone: '',
		generatedName: ''
	},$ar.data_mapper({
		'ID': 'id',
		'hotel_addr1': 'addr1',
		'hotel_addr2': 'addr2',
		'hotel_city': 'city',
		'hotel_country': 'country',
		'hotel_lat': 'lat',
		'hotel_lng': 'lng',
		'hotel_phone': 'phone',
		'hotel_st': 'st',
		'hotel_zip': 'zip'
	},data));
	
	var n = that.name + ' - ';
	if ( that.st ) n = n + that.st + ', ';
	n += that.country;
	
	that.generatedName = n;

	return that;
};
$ar.PaymentModel = function(data){
	var that = $ar.Model({
		type: '',
		type_id: '',
		label: '',
		amount: 0,
		comment: '',
	},data);

	that.amount = ko.observable(that.amount||0);
	that.comment = ko.observable(that.comment||'');

	return that;
};
$ar.VoucherPaymentModel = function(data){
	data.type = 'voucher';
	var that = $ar.PaymentModel().extend({
		max_amount: 0,
		default_amount: 0,
		require_authorization_id: 0,
		authorization_ID: '',
	},$ar.data_mapper({
		'ID':'type_id',
		'payment_type_id':'type_id'
	},data));
	
	that.require_authorization_id = ko.observable(that.require_authorization_id||0);
	that.authorization_ID = ko.observable(that.authorization_ID);

	that.save = function(sale_id,_callback){
		var obj = {
			sid: sale_id,
			payment_type_id: that.type_id,
			amount: that.amount(),
			comment: that.comment(),
			authorization_ID: that.authorization_ID()
		};

		WebBooker.API.savePayment(obj, function(result){
			if(typeof _callback == 'function'){
				_callback(result);
			}
		});
	};

	return that;
};
$ar.CreditCardPaymentModel = function(data){
	var use_hosted = (WebBooker.bootstrap.paymentInfo[WebBooker.selectedCurrency().title].options||{}).hosted||false;
	var that = $ar.PaymentModel().extend({
		type: 'credit',
		payee: null,
		useHostedPage: use_hosted,
		card: null
	},data);

	that.payee = $ar.PaymentInfoModel(that.payee);
	that.card = $ar.CreditCardModel(that.card);
	that.type_id = WebBooker.bootstrap.paymentInfo.ID;
	that.label = __('Credit Card')();
	that.years = (function(){
		var thisyr = new Date(),
			out = [];
		for(var i = 0; i <= 20; i++){
			out.push(thisyr.getFullYear()+i);
		}
		return out;
	})();
	
	that.months = $ar.ccMonthModel();
	that.lastFour = ko.computed(function(){
		return that.card?(''+that.card.number()).slice(-4):false;
	});
	that.sameAsContact = ko.computed({
		read: function(){
			var pj = that.payee.json(),
				cj = WebBooker.Checkout.sale.leadGuest.json(),
				ni;
			for(ni in cj){
				if(!pj.hasOwnProperty(ni) || pj[ni] != cj[ni])
					return false;
			}
			return true;
		},
		write: function(val){
			if(val)
				that.payee.json(WebBooker.Checkout.sale.leadGuest.json());
			else
				that.payee = $ar.PaymentInfoModel();
		}
	});

	that.validate = function(){
		if(!that.payee.validate())
			return false;
		if(!that.useHostedPage && !that.card.validate())
			return false;
		return true;
	};
	that.save = function(sale_id,_callback){
		var obj = {
			sid: sale_id,
			payment_type_id: that.type_id,
			amount: that.amount(),
			comment: that.comment(),
			payee: $ar.data_mapper({
				'first_name':'firstName',
				'last_name':'lastName'
			},that.payee.json())
		};

		obj.payee.country = obj.payee.country['alpha-2'];

		if(!that.useHostedPage){
			obj.options = $ar.data_mapper({
				'number':'cc_number',
				'month': 'cc_exp_month',
				'year': 'cc_exp_year',
				'code':'cc_security'
			},that.card.json());
		}

		WebBooker.API.savePayment(obj, function(result){
			if(typeof _callback == 'function'){
				_callback(result);
			}
		});
	};

	return that;
};
$ar.DiscountModel = function(data){
	if(data && data.discount_amt){
		if(data.discount_amt.indexOf('%') < 0) {
			data.amount = data.discount_amt;
		} else {
			data.rate = data.discount_amt;
		}
		delete data.discount_amt;
	}

	var that = $ar.Model({
		id: 0,
		name: '',
		amount: 0,
		rate: 0
	},$ar.data_mapper({
		'discount_id':'id',
		"discount_name":'name'
	},data));

	that.save = function(ticket,sale_id){
		WebBooker.API.saveDiscount({
			ticketID: ticket,
			saleID: sale_id,
			amount: that.amount||'',
			percent: that.rate||'',
			scope: 'all',
			discount_id: that.id
		});
	};

	return that;
};
$ar.SaleModel = function(data){
	var self = $ar.Model({
		id: 0,
		items: [],
		payments: [],
		discount: null,
		leadGuest: null,
		modified: null,
		i18n_modified: null
	});
	self._json_callback = function(beans){
		if(!beans) return;

		beans.items = beans.items||[];
		beans.payments = beans.payments||[];

		var ni;
		for(ni = 0; ni < beans.items.length; ni++){
			beans.items[ni] = $ar.CheckoutItemModel(beans.items[ni]);
		}
		for(ni = 0; ni < beans.payments.length; ni++){
			if(beans.payments[ni].type == 'credit')
				beans.payments[ni] = $ar.CreditCardPaymentModel(beans.payments[ni]);
			if(beans.payments[ni].type == 'voucher')
				beans.payments[ni] = $ar.VoucherPaymentModel(beans.payments[ni]);
		}
		beans.leadGuest = $ar.LeadGuestInfoModel(beans.leadGuest);
		if(beans.discount) beans.discount = $ar.DiscountModel(beans.discount);
	};
	self.json(data);

	self.id = ko.observable(self.id||0);
	self.items = ko.observableArray(self.items||[]);
	self.leadGuest = self.leadGuest||$ar.LeadGuestInfoModel();
	self.payments = ko.observableArray(self.payments||[]);
	self.discount = ko.observable(self.discount);
	self.modified = ko.observable(self.modified);
	self.i18n_modified = ko.observable(self.i18n_modified);
	
	self.hasTransportOptions = ko.computed(function(){
		var item = self.items(),
			transport = false,
			ni;
		for(ni = 0; ni < item.length; ni++){
			if(item[ni].transportation().length) {
				transport = true;
			}
		}

		return transport;
	}).extend({ throttle: 10 });

	self.cfa_activities = ko.computed(function(){
		var items = self.items(),
			cfa = [],
			ni;
		for(ni = 0; ni < items.length; ni++){
			if(!items[ni].pending()) continue;
			cfa.push(items[ni]);
		}
		return cfa;
	}).extend({ throttle: 10 });

	self.discountTotal = ko.computed(function(){
		if(!self.discount() || !self.items().length) return 0;
		var items = self.items(),
			sub = 0,
			amt,ni;
		if(self.discount().rate){
			amt = parseFloat( self.discount().rate.replace('%', '') )/100;
			for(ni = 0; ni < items.length; ni++){
				sub += items[ni].subtotal() * amt;
			}
		} else {
			sub = self.discount().amount;
		}
		return sub;
	}).extend({ throttle: 10 });
	self.validateCustomize = function(){
		var valid = true,
			item = self.sale.items(),
			tix, opt, ni, no, na;
		for(ni = 0; ni < item.length; ni++){
			valid = valid && item[ni].validate();
		}
		return sub;
	};
	self.subtotal = ko.computed(function(){
		if(!self.items().length) return 0;
		var items = self.items(),
			sub = 0,
			ni;
		for(ni = 0; ni < items.length; ni++){
			sub += items[ni].subtotal();
		}
		return sub;
	}).extend({ throttle: 10 });
	self.taxes = ko.computed(function(){
		var items = self.items(),
			sub = 0,
			ni;
		for(ni = 0; ni < items.length; ni++)
			sub += items[ni].taxTotal(self.discount());
		return sub;
	}).extend({ throttle: 10 });
	self.total = ko.computed(function(){
		var sub = self.subtotal() - self.discountTotal();
		sub += self.taxes();
		return sub;
	}).extend({ throttle: 10 });

	self.loadFromCart = function(_callback){
		var items = WebBooker.Cart.items(),
			lead_guest_info = WebBooker.Sale.get('leadGuestInfo'),
			caller = function(){ self.items.valueHasMutated(); },
			_items = [],
			ni, no,
			act, it, json, tmp_amt;
			
		for(ni = 0; ni < items.length; ni++){
			it = $ar.CheckoutItemModel();
			it.connectCart(items[ni]);
			it.load(caller);
			_items.push(it);
		}
		self.items(_items);
		
		// load guest info
		if ( lead_guest_info ) {
			self.leadGuest.first_name( lead_guest_info.f_name );
			self.leadGuest.last_name( lead_guest_info.l_name );
			self.leadGuest.phone( lead_guest_info.phone );
			self.leadGuest.email( lead_guest_info.email );
		}
		
		WebBooker.CheckoutNav.goToStep('Customize');
		if(typeof _callback == 'function')
			_callback();
	};
	self.load = function(_callback){
		WebBooker.API.getSale({
			saleID: self.id(),
			email: self.leadGuest.email()
		},function(result){
			if(result.status != 1) {
				_callback(result);
				return
			}

			self.leadGuest.json($ar.data_mapper({
				'lead_guest_firstName': 'first_name',
				'lead_guest_lastName': 'last_name',
				'lead_guest_city': 'city',
				'lead_guest_state': 'state',
				'lead_guest_address': 'address',
				'lead_guest_postal':'postal',
				'lead_guest_country':'country',
				'lead_guest_phone': 'phone',
				'lead_guest_email': 'email'
			},result.data));

			var currs = WebBooker.available_currencies(),
				types = [],
				tix = result.data.tickets,
				options = result.data.options,
				time,type,ni,no;

			self.modified(new Date(result.data.modified * 1000).toDateString());
			self.i18n_modified( self.getDateOrder( new Date(result.data.modified * 1000) ));
			
			for(ni = 0; ni < currs.length; ni++){
				if(currs[ni].title != result.data.currency) continue;
				WebBooker.selectedCurrency(currs[ni]);
				break;
			}

			for(ni = 0; ni < tix.length; ni++){
				type = false;
				time = new Date(tix[ni].datetime);
				for(no = 0; no < types.length; no++){
					if(types[no].activity != tix[ni].activityID) continue;
					if(types[no].date != (time.getMonth() + 1) + '/' + time.getDate() + '/' + time.getFullYear()) continue;
					if(types[no].time != formatTime(tix[ni].datetime)) continue;
					type = types[no];
					break;
				}
				if(!type){
					type = $ar.CheckoutItemModel({
						activity: tix[ni].activityID,
						date: (time.getMonth() + 1) + '/' + time.getDate() + '/' + time.getFullYear(),
						time: formatTime(tix[ni].datetime),
						tickets: []
					});
					type.load((function(beans,opt){
						return function(){
							beans.parseOptions(opt);
						}
					})(type,options));
					types.push(type);
				}
				
				if ( tix[ni].cfa ) {
					type.pending(true);
				}
				
				tix[ni] = $ar.CheckoutTicketModel($ar.data_mapper({
					'ID':'ticket_id',
					'guest_type_id':'id',
					'guest_type':'name',
					'firstName':'first_name',
					'last_name':'last_name'
				},tix[ni]));

				for(no = 0; no < options.length; no++){
					if(options[no].ticketID != tix[ni].ticket_id) continue;
					if(options[no].type == 'transportation'){
						tix[ni].transportView.wantsTransport(true);
						tix[ni].transport($ar.TransportationModel($ar.data_mapper({
							'fee':'amount'
						},options[no])));
					}
				}
				
				type.tickets.push(tix[ni]);
			}
			self.items(types);

			var payments = result.data.payments;
			self.payments([]);
			for(ni = 0; ni < payments.length; ni++){
				delete payments[ni].label;
				payments[ni] = $ar.data_mapper({
					'payment-type':'type',
					'payment_type_label':'label'
				},payments[ni]);
				if(payments[ni].type == 'credit')
					self.payments.push($ar.CreditCardPaymentModel(payments[ni]));
				if(payments[ni].type == 'voucher'){
					self.payments.push($ar.VoucherPaymentModel(payments[ni]));
				}
			}

			if(typeof _callback == 'function'){
				_callback(result);
			}
		});
	};
	self.save = function(_callback){
		// Create the sale.
		var sale = $ar.data_mapper({
			'first_name': 'lead_guest_firstName',
			'last_name': 'lead_guest_lastName',
			'hotel': 'lead_guest_hotel',
			'room': 'lead_guest_room',
			'phone': 'lead_guest_phone',
			'email':'lead_guest_email',
			'address':'lead_guest_address',
			'city': 'lead_guest_city',
			'state': 'lead_guest_state',
			'postal': 'lead_guest_postal',
			'country': 'lead_guest_country'
		},self.leadGuest.json()),
			ni;
		if(sale.lead_guest_country) {
			sale.lead_guest_country = (sale||{}).lead_guest_country['alpha-2']||'';
		}

		// Send the sale.
		WebBooker.API.saveSale(sale, function(result) {
			if(!result||!result.data||!result.data.ID){
				if(typeof _callback == 'function')
					_callback(result);
				return;
			}
			self.id(result.data.ID);
			WebBooker.Sale.set('sale', self.json());

			var items = self.items(),
				item_num = 0,
				tix,ni,no;

			var done_tickets = function(){
				if(--item_num) return;
				var payments = self.payments(),
					pay_count = 0,
					res = {
						error_msg: false,
						hosted: false
					};

				var parseSave = function(payment){
					return function(result){
						if(result.status != 1 && result.status != 2) {
							res.error_msg = result.msg;
						} else if(payment.hasOwnProperty('useHostedPage') && payment.useHostedPage && result.status == 2) {
							res.hosted = result.redirect;
						}

						if(!--pay_count){
							if(!res.error_msg){
								var items = self.items(),
									ni;
								for(ni = 0; ni < items.length; ni++){
									if(items[ni].cartItem){
										//should be pushed to pubsub
										WebBooker.Cart.items.remove(items[ni].cartItem);
									}
								}
							}
							if(typeof _callback == 'function')
								_callback(res);
						}
					};
				};
				for(ni = 0; ni < payments.length; ni++) {
					pay_count++;
					payments[ni].save(self.id(),(parseSave)(payments[ni]));
				}
			};

			for(ni = 0; ni < items.length; ni++){
				item_num++;
				items[ni].save(self.id(),done_tickets);
			}
			
			// clear guest info
			setTimeout(function() {
				WebBooker.Sale.remove('leadGuestInfo');
				//WebBooker.Sale.set('leadGuestInfo',{});
			},1000);
		});
	};

	WebBooker.selectedCurrency.subscribe(function(){
		var items = self.items(),
			payments = self.payments(),
			total = self.total(),
			the_credit, ni;

		var caller = function(){ self.items.valueHasMutated(); };
		for(ni = 0; ni < items.length; ni++){
			items[ni].load(caller);
		}
	});

	self.getDateOrder = function(time){
		var i18n = WebBooker.Settings.get('i18n') || wb_global_vars.i18n,
			days = new Array( __('Sun')(), __('Mon')(), __('Tue')(), __('Wed')(), __('Thu')(), __('Fri')(), __('Sat')() ),
			date;
		switch( i18n ) {
			case 'ja' 	:	//iso
			case 'zh_SG':
			case 'zh_TW':
			case 'zh_HK':
			case 'zh_CN':
			case 'ko_KR':
							date =  time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate() + ' (' + days[time.getDay()] + ')';
							break;
			case 'en_GB':	//euro
			case 'en_AU':
			case 'en_AG':
			case 'cs_CZ':
			case 'da_DK':
			case 'nl_NL':
			case 'fi_FI':
			case 'fr_FR':
			case 'fr_BE':
			case 'fr_CA':
			case 'de_DE':
			case 'de_AT':
			case 'el_GR':
			case 'it':
			case 'in_IN':
			case 'ms_MY':
			case 'ml_IN':
			case 'no_NO':
			case 'nb_NO':
			case 'nn_NO':
			case 'pl_PL':
			case 'pt_BR':
			case 'pt_PT':
			case 'ru_RU':
			case 'es_ES':
			case 'es_AR':
			case 'es_MX':
			case 'es':
			case 'sv_se':
			case 'th':
			case 'vi':			
							date = days[time.getDay()] + ' ' + time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();
							break;
			case 'en_US':	//us original
			case 'en_CA':
			default		:	date = days[time.getDay()] + ' ' + (time.getMonth() + 1) + '/' + time.getDate() + '/' + time.getFullYear();
		}
		return date;
	};

	return self;
};

$ar.ccMonthModel = function(){
	months = [
		{
			index: 1,
			label: '01 - ' + __('January')()
		}, {
			index: 2,
			label: '02 - ' + __('February')()
		}, {
			index: 3,
			label: '03 - ' + __('March')()
		}, {
			index: 4,
			label: '04 - ' + __('April')()
		}, {
			index: 5,
			label: '05 - ' + __('May')()
		}, {
			index: 6,
			label: '06 - ' + __('June')()
		}, {
			index: 7,
			label: '07 - ' + __('July')()
		}, {
			index: 8,
			label: '08 - ' + __('August')()
		}, {
			index: 9,
			label: '09 - ' + __('September')()
		}, {
			index: 10,
			label: '10 - ' + __('October')()
		}, {
			index: 11,
			label: '11 - ' + __('November')()
		}, {
			index: 12,
			label: '12 - ' + __('December')()
		}
	];
	return months;
};

WebBooker.Checkout = (function(){
	var self = {};

	self.sale = $ar.SaleModel();

	self.termsAccepted = ko.observable(false);
	self.copyNames = ko.observable(true);

	self.copyNames.subscribe(function(value) {
		if ( !self.sale.items().length ) return;
		var item = self.sale.items(),
			ni,no,tix;
		for(ni = 0; ni < item.length; ni++){
			tix = item[ni].tickets();
			for(no = 0; no < tix.length; no++){
				//if ( !tix[no].first_name() || tix[no].first_name() === '' )
					tix[no].first_name( self.sale.leadGuest.first_name() );
				//if ( !tix[no].last_name() || tix[no].last_name() === '' )
					tix[no].last_name( self.sale.leadGuest.last_name() );
			}
		}
	});

	self.errorMsg = ko.observable(false);
	self.moreErrorMsg = ko.observable(false);
	self.locationSelect = ko.observable();

	self.paymentType = ko.observable();
	self.paymentType.subscribe(function(type){
		self.sale.payments([]);
		if(!type || !/^(credit|voucher)$/.test(type.type)){
			return;
		}

		if(type.type == 'voucher' && type.default_amount < self.sale.total()){
			// If so, push the CC payment type in, input the amount difference
			// and post an alert message.
			var cc = new $ar.CreditCardPaymentModel();
			cc.amount(self.sale.total() - type.default_amount);
			type.amount(type.default_amount);
			self.sale.payments.push(cc);
			$ar.Notification(__('Voucher amount is less than sale total. We have applied it, but you must complete the sale with a credit card.'),'error');
		} else {
			type.amount(self.sale.total());
			type.months = $ar.ccMonthModel();
		}
		self.sale.payments.push(type);
		WebBooker.Checkout.sale.leadGuest.copyToPayment();
	});
	
	self.printTickets = function() {
		WebBooker.Itinerary.printTickets({
			id: self.sale.id() || false,
			email: self.sale.leadGuest.email() || false
		});
	};
	
	self.updatePmtAmounts = function() {
		var pmts = self.sale.payments(),
			total = self.sale.total(),
			ni;
			
		if ( !pmts.length ) return false;
			
		for ( ni = 0; ni < pmts.length; ni += 1 ) {
			if ( pmts[ni].type == 'voucher' ) {
				var diff = pmts[ni].default_amount - self.sale.total();
				if ( diff < 0 ) {
					total - pmts[ni].default_amount;
				} else {
					if ( self.paymentType() && self.paymentType().type != 'voucher' ) {
						self.sale.payments.remove( pmts[ni] );
					}
				}
			}
		}
		for ( ni = 0; ni < pmts.length; ni += 1 ) {
			if ( pmts[ni].type == 'credit' && total > 0 ) {
				pmts[ni].amount( total );
			}
		}
	};

	//@ should this be here or in the app.js?
	self.hotels = ko.observableArray([]);

	self.verifying = ko.observable(false);
	self.discountCode = ko.observable();
	self.codeGood = ko.observable(true);

	self.enableSubmit = ko.computed(function() {
		if(!self.paymentType()){
			return false;
		}
		if(!self.termsAccepted()){
			return false;
		}
		if(WebBooker.CheckoutNav.processing()){
			return false;
		}
		var payments = self.sale.payments(),
			ni;
		for(ni = 0; ni < payments.length; ni++){
			if(payments[ni].type != 'credit') continue;
		}
		return true;
	});

	self.process = function(item, event){
		var voucher = true,
			payments = self.sale.payments(),
			ni;
		for(ni = 0; ni < payments.length; ni++){
			if(payments[ni].type == 'credit') continue;

			//should we check if r2 is in use now?
			//TODO insure this is for r2
			if(payments[ni].require_authorization_id() && !payments[ni].authorization_ID()){
				$ar.Notification(__('Authorization ID is required'),'error');
				jQuery(window).scrollTop(jQuery("#authorization_id").offset().top, 200);
				return false;	
			}
		}

		WebBooker.CheckoutNav.processing(true);

		for(ni = 0; ni < payments.length; ni++) {

			if(payments[ni].type != 'credit')
				continue;
			if(payments[ni].payee.validate() && (payments[ni].useHostedPage || payments[ni].card.validate()))
				continue;

			if(payments[ni].payee.errors().length){
				$ar.Notification(payments[ni].payee.errors,'error');
			} else {
				$ar.Notification(payments[ni].card.errors,'error');
			}
			WebBooker.CheckoutNav.processing(false);
			jQuery('#checkout-processing').modal('hide');
			return false;
		}

		jQuery('#checkout-processing').removeData('modal').modal({
			show: true,
			backdrop: 'static',
			keyboard: false
		});

		self.sale.save(function(result){
			if(!self.sale.id()){
				jQuery('#checkout-processing').modal('hide');
				return;
			}

			WebBooker.CheckoutNav.processing(false);

			if(result.error_msg){
				self.errorMsg(result.error_msg);
			} else {
				self.errorMsg(false);
				
				//cleanup current session
				var saleid = self.sale.id();
//				self.sale = $ar.SaleModel();
//				WebBooker.Sale.remove('leadGuestInfo');
				WebBooker.Sale.set('loadedConfirmation', false);

				if(result.hosted){
					window.location.href = result.hosted;
				} else {
					jQuery('.modal-backdrop').hide();
					jQuery('html, body').animate({ scrollTop: 0 }, 500);
					window.location.hash = '/Confirmation/' + saleid;
				}
			}

			jQuery('#checkout-processing').modal('hide');
		});
	};

	self.newSale = function(){
		Store.clear();
		self.sale = $ar.SaleModel();
		WebBooker.Cart.items([]);
		self.termsAccepted(false);
		WebBooker.Catalog.clearFilters();
	};
	self.setAgreement = function() {
		self.termsAccepted(true);
		$('#reseller-agreement').modal('hide');
		return false;
	};
	self.unsetAgreement = function() {
		self.termsAccepted(false);
		$('#reseller-agreement').modal('hide');
		return false;
	};

	self.getDiscount = function(){
		self.verifying(true);
		if(!self.discountCode()){
			self.verifying(false);
			self.codeGood(false);
			return;
		}
		WebBooker.API.validateDiscountCode(self.discountCode(), function(response){
			self.verifying(false);
			if(response.status == 'valid' && response.discount_apr != 'true' ){
				self.sale.discount($ar.DiscountModel(response));
				self.codeGood(true);
			} else {
				self.sale.discount(null);
				self.codeGood(false);
			}
		});
	};
	
	self.clearDiscount = function() {
		self.verifying(false);
		self.discountCode(undefined);
		self.sale.discount(undefined);
	};
	self.validateCustomize = function(){
		var valid = true,
			item = self.sale.items(),
			tix, opt, ni, no, na;
		for(ni = 0; ni < item.length; ni++){
			valid = valid && item[ni].validate();
		}
		if(!valid){
			jQuery("#checkout-customize .required").addClass('warning-shadow');
			$ar.Notification(__('You seem to have missed something. Please check again.'),'error');
			jQuery(window).scrollTop(jQuery("#checkout-activities").offset().top, 200);
		} else {
			jQuery('#checkout-customize .warning-shadow').removeClass('warning-shadow');
			jQuery("#checkout-customize .required").removeClass('warning-shadow');
		}
		return valid;
	};

	return self;
})();
WebBooker.CheckoutNav = (function(){
	var self = {};

	self.show = ko.observable(false);
	self.showCustomize = ko.observable(false);
	self.showContact = ko.observable(false);
	self.showReview = ko.observable(false);
	self.showPayment = ko.observable(false);
	self.showConfirmation = ko.observable(false);
	self.processing = ko.observable(false);

	self.progress = ko.observable(4);
	self.progressWidth = ko.computed(function(){ return self.progress() + '%'; });
	self.goToStep = function(item, event) {
		var which = arguments.length == 2?jQuery(event.currentTarget).attr('data-target'):item;
		if(which == 'Confirmation' && !self.termsAccepted()){
			return false;
		}
		//the progress for this is handled in app.js
		if(which == 'Payment'){
			if(!WebBooker.Checkout.sale.leadGuest.validate()){
				$ar.Notification(WebBooker.Checkout.sale.leadGuest.errors,'error');
				return false;
			}
			if(!WebBooker.Checkout.validateCustomize()) return false;
			
			/*var items = [];
			for ( ni = 0; ni < WebBooker.Cart.items().length; ni += 1 ) {
				items.push( WebBooker.Cart.items()[ni].processActivityForAnalytics( true ) );
			}*/

			WebBooker.Analytics.trigger( {
				cart_items: WebBooker.Cart.items(),
				subtotal: WebBooker.Checkout.sale.subtotal(),
				currency: WebBooker.selectedCurrency().title,
				prev_url: false
			}, 'action_Customize');
			
			WebBooker.Checkout.sale.leadGuest.copyToPayment();
			
			WebBooker.Analytics.trigger( { cart_items: WebBooker.Cart.items() } , 'action_checkoutBilling');
			self.progress(37);
		}
		if(which == 'Customize'){
			self.progress(8);
		}
		if(WebBooker.bootstrap.payment_types && WebBooker.bootstrap.payment_types.length == 1){
			WebBooker.Checkout.paymentType(WebBooker.bootstrap.payment_types[0]);
		}
		self.hideAll();
		WebBooker.Sale.set('sale', WebBooker.Checkout.sale.json());
		self['show' + which](true);
	};
	self.hideAll = function(){
		self.showCustomize(false);
		self.showContact(false);
		self.showReview(false);
		self.showPayment(false);
		self.showConfirmation(false);
	};
	self.continueShopping = function() {
		WebBooker.Analytics.trigger({}, 'action_continueShopping');
		window.location.hash = '/Search';
	};
	self.viewItinerary = function(){
		window.location.hash = '/Itinerary/' + WebBooker.Checkout.sale.id();
	};
	self.goToSearch = function(){
		window.location.hash = '/Search';
	};

	self.showNav = ko.computed(function(){
		return self.show() && WebBooker.Checkout.sale.items().length > 0 && !self.showConfirmation();
	});

	return self;
})();

jQuery(document).ready(function(){
	ko.applyBindings(WebBooker.bootstrap, jQuery('#reseller-privacy-policy .modal-body')[0]);
});
/**
 *	ActivityRez Web Booking Engine
 *	Reseller Dashboard
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booking Engine
 */

//compresses to 2576 B

WebBooker.Dashboard = {
	show: ko.observable(false),
	showMain: ko.observable(true),
	showReports: ko.observable(false),
	showSignup: ko.observable(false),
	showPasswordReset: ko.observable(false),
	showPasswordResetConfirmation: ko.observable(false),
	signupSuccessMsg: ko.observable(false),
	agentCommissionsChart: ko.observable(),
	agentCommissionsData: ko.observable(),
	agentCommissionsStartDate: ko.observable(),
	agentCommissionsEndDate: ko.observable(),
	agentCommissionsTotal: ko.observable(),
	agentCommissionsReport: ko.observable(),

	populateAgentCommissionsData: function() {
		var date = new Date();
		if(!WebBooker.Dashboard.agentCommissionsStartDate()) {
			WebBooker.Dashboard.agentCommissionsStartDate(getDateString(new Date(date.getFullYear(), date.getMonth(), 1)));
		}
		if(!WebBooker.Dashboard.agentCommissionsEndDate()) {
			WebBooker.Dashboard.agentCommissionsEndDate(getDateString(new Date(date.getFullYear(), date.getMonth()+1, 0)));
		}

		var d = new Date(),
			startDate = new Date(WebBooker.Dashboard.agentCommissionsStartDate()),
			endDate = new Date(WebBooker.Dashboard.agentCommissionsEndDate());

		//adjust endDate for end of day
		endDate.setHours(23,59,59);
		
		WebBooker.Dashboard.agentCommissionsData(null);
		WebBooker.Dashboard.agentCommissionsReport(null);
		WebBooker.Dashboard.agentCommissionsTotal(0);

		WebBooker.API.getAgentCommissions({
			startDate: createTimestamp(startDate),
			endDate: createTimestamp(endDate), 
			tz: d.getTimezoneOffset()
		}, function(results) {
			var dataset = [],
				obj = {},
				_date, ni;

			for ( ni = 0; ni < results.data.length; ni += 1 ) { //sum all the commissions on the same date for the chart
				b = new Date((parseInt(results.data[ni].date,10) ) * 1000);
				tmpDate = new Date((parseInt(results.data[ni].date,10) + (new Date()).getTimezoneOffset() * 60) * 1000);
				results.data[ni].date = ((tmpDate.getMonth()+1)<10?'0'+(tmpDate.getMonth()+1):(tmpDate.getMonth()+1)) + '/' +(tmpDate.getDate()<10?'0'+tmpDate.getDate():tmpDate.getDate()) + '/' + tmpDate.getFullYear();
				if(!obj.hasOwnProperty(results.data[ni].date)){
					obj[results.data[ni].date] = 0;
				}
				obj[results.data[ni].date] += parseFloat(results.data[ni].amount);
			}
			
			var someDate = new Date(WebBooker.Dashboard.agentCommissionsStartDate());
            someDate.setHours(0);
            
			var anotherDate = new Date(WebBooker.Dashboard.agentCommissionsEndDate());
            anotherDate.setHours(23);
            
			//push evey date in the range for the charts and its associated commission or 0.
			//someDate needs to be in Date format for comparison with endDate, UTC format for the chart, and yyyy/mm/dd format for indexing the obj, hence all the conversions
			while ( someDate <= anotherDate ) {

				dataset.push(
					[
						someDate.getTime(), 
						obj[(((someDate.getMonth()+1)<10?'0'+(someDate.getMonth()+1):(someDate.getMonth()+1)) + '/' + (someDate.getDate()<10?'0'+someDate.getDate():someDate.getDate()) + '/' + someDate.getFullYear())] || 0
					]
				);
				
				someDate.setDate(someDate.getDate() + 1);
			}
			someDate = new Date(WebBooker.Dashboard.agentCommissionsStartDate());
            someDate.setHours(0);
            
			anotherDate = new Date(WebBooker.Dashboard.agentCommissionsEndDate());
            anotherDate.setHours(23);

			WebBooker.Dashboard.agentCommissionsData({
				name: 'Commissions',
				pointStart: (new Date(startDate)).getTime(),
				pointEnd: (new Date(endDate)).getTime(), //not used by the series, but used for the max range of the x axis
				data: dataset
			});

			var tot = 0;
			ko.utils.arrayForEach(results.data, function(comm){ //stupid ie8 doesnt do .reduce, so for loop to sum all commissions
				tot += comm.amount;
			});

			WebBooker.Dashboard.agentCommissionsTotal(parseFloat(tot));
			WebBooker.Dashboard.agentCommissionsReport(results.data);
			WebBooker.Dashboard.initAgentCommissionsChart();
		});
	},

	initAgentCommissionsChart: function() {
		var data = WebBooker.Dashboard.agentCommissionsData();
		if(!data) return false;

		Highcharts.setOptions({
			global: {
				useUTC: false 
			}
		});
		var chart = new Highcharts.Chart({
			chart: {
				renderTo: 'dash-commissions-chart',
				type: 'area',
				zoomType: 'x',
				marginBottom: 100
			},
			title: {
				text: null
			},
			xAxis: {
				type: 'datetime',
				maxZoom: 30 * 24 * 360000,
				min: data.pointStart,
				max: data.pointEnd,
				title: {
					text: null
				}
			},
			yAxis: {
				title: {
					text: 'Commissions' + ' ($)'
				},
				min: 0
			},
			legend: {
				align: 'left',
				floating: true
			}
		});
		chart.addSeries(data);

		WebBooker.Dashboard.agentCommissionsChart(chart);
	},

	reloadAgentCommissionsChart: function() {
		var chart = WebBooker.Dashboard.agentCommissionsChart();
		if(chart) {
			chart.destroy();
			WebBooker.Dashboard.agentCommissionsChart(null);
		}
		WebBooker.Dashboard.populateAgentCommissionsData();
	},
	
	downLoadCSV: function() {
		if(!WebBooker.Dashboard.agentCommissionsStartDate()) {
			var date = new Date();
			WebBooker.Dashboard.agentCommissionsStartDate(utils.getDateString(new Date(date.getFullYear(), date.getMonth(), 1)));
		}
		if(!WebBooker.Dashboard.agentCommissionsEndDate()) {
			var date = new Date();
			WebBooker.Dashboard.agentCommissionsEndDate(utils.getDateString(new Date(date.getFullYear(), date.getMonth()+1, 0)));
		}
		
		var d = new Date(),
		startDate = new Date(WebBooker.Dashboard.agentCommissionsStartDate()),
		endDate = new Date(WebBooker.Dashboard.agentCommissionsEndDate());
		
		/*if(utils.getMonthName(new Date(startDate)) == utils.getMonthName(new Date(endDate)))
			POSApp.Dashboard.Charts.commissionMonthName(utils.getMonthName(new Date(startDate)));
		else
			POSApp.Dashboard.Charts.commissionMonthName('');*/
		
		endDate.setHours(endDate.getHours()+ d.getTimezoneOffset() / 60);
		startDate.setHours(startDate.getHours()+ d.getTimezoneOffset() / 60);
			
		var csvURL = WebBooker.bootstrap.api_url+'?nonce='+WebBooker.bootstrap.nonce+'&service=arezReporting&action=getMyCommissions&data[startDate]='+createTimestamp(startDate)+'&data[endDate]='+createTimestamp(endDate)+'&data[csv]=1&data[tz]='+(d.getTimezoneOffset())+'&data[wb]=true&consumer-key=posapp';
		window.open(csvURL,'_blank');
		
	}

};

WebBooker.Dashboard.agentCommissionsEndDate.subscribe(function(value) {
	var start = WebBooker.Dashboard.agentCommissionsStartDate(), end;
	if(start) {
		start = new Date(start);
		end = new Date(value);
		if(start.getTime() > end.getTime()) {
			WebBooker.errorMsg('You can\'t select an end date that is before the start date.');
			WebBooker.Dashboard.agentCommissionsEndDate('');
		}
	}
});


WebBooker.Dashboard.show.subscribe(function(value) {
	if(value) {
		$ar.load(wb_global_vars['plugin_url'] + '/js/lib/highcharts.js', function () {
			setTimeout(function() {
				jQuery('.datepicker-dash').each(function() {
					jQuery(this).datepicker({
						numberOfMonths: 2,
						dateFormat: 'mm/dd/yy',
						beforeShow: function(a) {
							if ( a.id == 'topgross-enddate' && jQuery('#topgross-startdate').datepicker('getDate') ) {
								return {
									minDate: jQuery('#topgross-startdate').datepicker('getDate')
								};
							}
						}
					});
				});
			}, 500);
			if(!WebBooker.Dashboard.agentCommissionsData()) {
				WebBooker.Dashboard.populateAgentCommissionsData();
			}
		});
	}
	if(!WebBooker.Dashboard.agentCommissionsData()) { // need this again for stupid ie
		WebBooker.Dashboard.populateAgentCommissionsData();
	}
});/**
 *	ActivityRez Web Booker
 *	Itinerary File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booker
 */

//compresses to 936 B

WebBooker.Itinerary = (function(){
	var self = {
		show: ko.observable(false),
		sale: $ar.SaleModel(),
		loading: ko.observable(false),
		loaded: ko.observable(false),

		errorMsg: ko.observable(),
	};

	self.show.subscribe(function(value) {
		if(value) {
			// Analytics hook.
			WebBooker.Analytics.trigger({}, 'action_Itinerary');
		}
	});

	self.reset = function(){
		self.loading(false);
		self.errorMsg(null);
		self.loaded(false);
		self.sale.id('');
		self.sale.leadGuest.email('');
	};

	self.load = function(){
		if(!self.sale.leadGuest.email() && !WebBooker.Agent.user_id()) {
			self.errorMsg(__('E-mail address is missing.')());
			return false;
		}

		if(!self.sale.id()) {
			self.errorMsg(__('Reservation number is missing.')());
			return false;
		}

		self.loaded(false);
		self.loading(true);
		self.errorMsg(null);

		self.sale.load(function(result){
			self.loading(false);
			if(result.status != 1) {
				self.loaded(false);
				self.errorMsg(__(result.msg)());
				return;
			}
			
			self.loaded(true);
			
			WebBooker.Analytics.trigger( result.data, 'action_viewItinerary' );
		});
	};
	self.popupError = ko.observable(false);
	self.popupErrorClose = function(){
		self.popupError(false);
	}
	self.printTickets = function(args) {
		var params = {
			saleID: args.id || self.sale.id(),
			output: 'html',
			email: args.email || self.sale.leadGuest.email()
		};
		WebBooker.API.doItineraryAction(params, function(data) {
			var itineraryWindow = window.open('');
			if(!itineraryWindow || itineraryWindow.closed || typeof itineraryWindow.closed=='undefined'){ 
				self.popupError(true);
			}
			if(itineraryWindow){
				itineraryWindow.document.write(data.data);
				itineraryWindow.focus();
			}
		});
	};

	return self;
})();
/**
 *	ActivityRez Web Booking Engine
 *	Analytics Hooks File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booker Plugin
 */

WebBooker.Analytics = {
	trigger: function( data, action ) {
		if( WebBooker.Analytics.hasOwnProperty( action ) ) {
			WebBooker.Analytics[ action ]( data );
		}
	},

	stored_data: {}
};/**
 *	ActivityRez Web Booking Engine
 *	Initalization File
 *
 *	@author Ryan Freeman <ryan@stoked-industries.com>
 *	@package ActivityRez
 *	@subpackage Web Booker Plugin
 */

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
		"use strict";
		if (this === null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0) {
			return -1;
		}
		var n = 0;
		if (arguments.length > 0) {
			n = Number(arguments[1]);
			if (n != n) { // shortcut for verifying if it's NaN
				n = 0;
			} else if (n !== 0 && n != Infinity && n != -Infinity) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if (n >= len) {
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
		return -1;
	};
}

// Function for posting the current page's height through
// the iframe to the parent.
var if_height_interval = false;
function setHeight(parent_url) {
	if_height_interval = setInterval(function() {
		WebBooker.postMessage('if_height=' + jQuery('body').outerHeight(true));
	}, 2000);
}

function unescapeHTML(code) {
	var node = document.createElement('div');
	node.innerHTML = code;
	var node_r = node.innerHTML;
	return node_r;
}

// Listeners to grab the parent page's URL and use it
// in the postMessage setting the iframe's height.
var if_parent_url = false;
if(window.addEventListener) {
	window.addEventListener('message', function(event) {
		if(if_height_interval) {
			clearInterval(if_height_interval);
		}
		console.log(event.data);
		if(event.data.substring(0,4) !== '_FB_'){
			WebBooker.bootstrap.parent_url = event.data;
			setHeight(event.data);
		}
	});
} else if(window.attachEvent) {
	window.attachEvent('onmessage', function(event) {
		if(if_height_interval) {
			clearInterval(if_height_interval);
		}
		if(event.data.substring(0,4) !== '_FB_'){
			WebBooker.bootstrap.parent_url = event.data;
			setHeight(event.data);
		}
	});
}

jQuery(document).ready(function(){
	if(jQuery('#multi-everything').length){
		ko.applyBindings(WebBooker, jQuery('#multi-everything')[0]);
	}
	if(jQuery('#webbooker-sidebar').length){
		ko.applyBindings(WebBooker, jQuery('#webbooker-sidebar')[0]);
	}
	if(jQuery('#webbooker-modals').length){
		ko.applyBindings(WebBooker, jQuery('#webbooker-modals')[0]);
	}
	if(jQuery('#webbooker-main').length){
		ko.applyBindings(WebBooker, jQuery('#webbooker-main')[0]);//don't bind the same object to different places in ie8
	}

	WebBooker.init();
	WebBooker.wbLoaded(true);
    Path.rescue(notFound);
	//this interval updates the currency exchange rates for the user every 3min
	//in case there's an update on the server
	setInterval( function(){
		WebBooker.API.updateCurrency( WebBooker.bootstrap.webBookerID, function( data ) {
			data = data.data;
			var curr = WebBooker.selectedCurrency().title,
				ni;
			WebBooker.available_currencies(data);
			for ( ni in data ) {
				if ( data[ni].title != curr ) continue;
				WebBooker.selectedCurrency(data[ni]);
				break;
			}
		} );
	}, 180000 );
	
	var searches = [ 'search_tag', 'search_category', 'search_destination', 'search_mood' ],
		is_search = false;
	
	for ( var ni = 0; ni < searches.length; ni += 1 ) {
		if ( !WebBooker.bootstrap[ searches[ ni ] ] ) continue;
		is_search = true;
		if(!WebBooker.Catalog.searchResults().length) {
			WebBooker.Catalog.hasSearched(false);
		}
		WebBooker.showInitLoader(false);
		WebBooker.hideAllScreens();
		WebBooker.Catalog.show(true);
		if(WebBooker.Catalog.pageIndex() != 1) {
			WebBooker.Catalog.pageIndex(1);
		} else {
			WebBooker.Catalog.load();
		}
		jQuery('#webbooker-search-results .results').focus();
	}
	
	if ( !WebBooker.bootstrap.activity && !is_search ) {
		Path.root("#/Home");
		Path.listen();
	}
});