"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[339],{339:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),s=r(689),i=r(634),p=r(184);e.default=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],f=(0,s.UO)().id;(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.getCast(f);case 3:e=t.sent,c(e.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[f]);var d=r.map((function(t){var e=t.cast_id,r=t.original_name,n=t.character,a=t.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r,width:"150"}),(0,p.jsxs)("p",{children:["Name: ",r]}),(0,p.jsxs)("p",{children:["Character: ",n]})]},e)}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Additional informaton"}),d]})}},634:function(t,e,r){r.d(e,{b:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(243),o="b72fb3135a2d69ab2146fd23de192433",s="https://api.themoviedb.org/3",i={fetchTrend:function(){return(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(s,"/trending/movie/week?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},getMovieDetails:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(s,"/movie/").concat(t,"?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()},getSearchMovie:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()},getCast:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()},getReviews:function(t){return(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()}}}}]);
//# sourceMappingURL=339.8bf82dcf.chunk.js.map