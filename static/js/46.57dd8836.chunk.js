(this["webpackJsonpionic-firebase"]=this["webpackJsonpionic-firebase"]||[]).push([[46],{292:function(i,n,t){"use strict";t.r(n),t.d(n,"ion_infinite_scroll",(function(){return l})),t.d(n,"ion_infinite_scroll_content",(function(){return c}));var e=t(1),o=t(21),s=t(23),r=t(100),l=function(){function i(i){var n=this;Object(o.o)(this,i),this.ionInfinite=Object(o.g)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=n.scrollEl;if(!i||!n.canStart())return 1;var t=n.el.offsetHeight;if(0===t)return 2;var e=i.scrollTop,o=i.scrollHeight,s=i.offsetHeight,r=0!==n.thrPc?s*n.thrPc:n.thrPx;if(("bottom"===n.position?o-t-e-r-s:e-t-r)<0){if(!n.didFire)return n.isLoading=!0,n.didFire=!0,n.ionInfinite.emit(),3}else n.didFire=!1;return 4}}return i.prototype.thresholdChanged=function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)},i.prototype.disabledChanged=function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)},i.prototype.connectedCallback=function(){return Object(e.b)(this,void 0,void 0,(function(){var i,n,t=this;return Object(e.d)(this,(function(e){switch(e.label){case 0:return(i=this.el.closest("ion-content"))?(n=this,[4,i.getScrollElement()]):(console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),[2]);case 1:return n.scrollEl=e.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(o.f)((function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)})),[2]}}))}))},i.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},i.prototype.complete=function(){return Object(e.b)(this,void 0,void 0,(function(){var i,n,t=this;return Object(e.d)(this,(function(e){return i=this.scrollEl,this.isLoading&&i?(this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,n=i.scrollHeight-i.scrollTop,requestAnimationFrame((function(){Object(o.h)((function(){var e=i.scrollHeight-n;requestAnimationFrame((function(){Object(o.f)((function(){i.scrollTop=e,t.isBusy=!1}))}))}))}))),[2]):[2]}))}))},i.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading},i.prototype.enableScrollEvents=function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},i.prototype.render=function(){var i,n=Object(s.b)(this),t=this.disabled;return Object(o.j)(o.c,{class:(i={},i[n]=!0,i["infinite-scroll-loading"]=this.isLoading,i["infinite-scroll-enabled"]=!t,i)})},Object.defineProperty(i.prototype,"el",{get:function(){return Object(o.k)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),i}();l.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var c=function(){function i(i){Object(o.o)(this,i)}return i.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var i=Object(s.b)(this);this.loadingSpinner=s.c.get("infiniteLoadingSpinner",s.c.get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.render=function(){var i,n=Object(s.b)(this);return Object(o.j)(o.c,{class:(i={},i[n]=!0,i["infinite-scroll-content-"+n]=!0,i)},Object(o.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(o.j)("div",{class:"infinite-loading-spinner"},Object(o.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(o.j)("div",{class:"infinite-loading-text",innerHTML:Object(r.a)(this.loadingText)})))},i}();c.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);
//# sourceMappingURL=46.57dd8836.chunk.js.map