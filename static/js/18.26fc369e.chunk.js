"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[18],{18:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(87),u=r(689),l=r(634),v="MovieDetails_list__k0RDM",d="MovieDetails_wrapper__W1Sit",p="MovieDetails_btn__keuaL",f=r(184),h=function(){var e,t,r,c,h=(0,i.useState)(null),m=(0,a.Z)(h,2),x=m[0],w=m[1],k=(0,u.UO)().id,_=(0,u.s0)(),b=(0,u.TH)();console.log("Details",b),(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.b.getMovieDetails(k);case 3:t=e.sent,w(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response,console.log(r.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]);if(x){var g=x.original_title,j=x.overview,Z=x.genres,y=void 0===Z?[]:Z,M=x.poster_path,D=x.vote_average,C=y.map((function(e){var t=e.id,r=e.name;return(0,f.jsx)("li",{children:r},t)}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{children:(0,f.jsx)("button",{type:"button",className:p,onClick:function(){var e,t;return _(null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"")},children:"Go back"})}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(M),alt:"{original_title}",width:"300"}),(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("h2",{children:g}),(0,f.jsxs)("p",{children:["User score: ",Math.round(10*D),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:j}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:C}),(0,f.jsx)(o.rU,{state:{from:null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},to:"cast",children:"Cast"}),(0,f.jsx)(o.rU,{state:{from:null!==(r=null===(c=b.state)||void 0===c?void 0:c.from)&&void 0!==r?r:"/"},to:"reviews",children:"Reviews"}),(0,f.jsx)(u.j3,{})]})]})]})}}},634:function(e,t,r){r.d(t,{b:function(){return u}});var n=r(861),a=r(757),c=r.n(a),s=r(243),i="b72fb3135a2d69ab2146fd23de192433",o="https://api.themoviedb.org/3",u={fetchTrend:function(){return(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("".concat(o,"/trending/movie/week?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},getMovieDetails:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},getSearchMovie:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},getCast:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},getReviews:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=18.26fc369e.chunk.js.map