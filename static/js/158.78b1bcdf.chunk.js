"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{158:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),c=n(757),u=n.n(c),o=n(791),s=n(634),i=n(87),p=n(689),f=n(7),h=n.n(f),v=n(128),l="Search_searchbar__uubQU",m="Search_form__jUSwi",d="Search_button__W5MQY",x="Search_input__klILD",b=n(184),w=function(e){var t=e.onSubmit,n=(0,o.useState)(""),r=(0,a.Z)(n,2),c=r[0],u=r[1];return(0,b.jsx)("header",{className:l,children:(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),u("")},className:m,children:[(0,b.jsx)("button",{type:"submit",className:d,children:(0,b.jsx)(v.G4C,{})}),(0,b.jsx)("input",{name:"query",value:c,onChange:function(e){var t=e.target.value;u(t.toLowerCase())},className:x,type:"text",placeholder:"Search movies"})]})})};w.prototype={onSubmit:h().func};var _=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,i.lr)(),h=(0,a.Z)(f,2),v=h[0],l=h[1],m=v.get("query"),d=(0,p.TH)();(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.getSearchMovie(m);case 3:t=e.sent,c(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}m&&function(){e.apply(this,arguments)}()}),[m]);var x=n.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return n&&r?(0,b.jsx)("li",{children:(0,b.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:d},children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:n,width:"300"}),n]})},t):null}));return(0,b.jsxs)("div",{children:[(0,b.jsx)(w,{onSubmit:function(e){l({query:e})}}),(0,b.jsx)("ul",{children:x})]})}},634:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243),o="b72fb3135a2d69ab2146fd23de192433",s="https://api.themoviedb.org/3",i={fetchTrend:function(){return(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(s,"/trending/movie/week?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},getMovieDetails:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getSearchMovie:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getCast:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getReviews:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=158.78b1bcdf.chunk.js.map