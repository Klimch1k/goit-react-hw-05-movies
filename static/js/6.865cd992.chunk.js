"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6],{126:function(t,e,n){n.d(e,{HI:function(){return u},IR:function(){return s},M1:function(){return a},Rw:function(){return o},tx:function(){return f}});var c=n(243),r="e1f0ba7edbc19668553e294a4c65bcf8",i=c.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){return i.get("/trending/movie/day?api_key=".concat(r))},u=function(t){return i.get("/movie/".concat(t,"?api_key=").concat(r))},a=function(t){return i.get("movie/".concat(t,"/credits?api_key=").concat(r))},f=function(t){return i.get("movie/".concat(t,"/reviews?api_key=").concat(r))},s=function(t){return i.get("search/movie?api_key=".concat(r,"&query=").concat(t))}},6:function(t,e,n){n.r(e);var c=n(439),r=n(791),i=n(126),o=n(689),u=n(87),a=n(184);e.default=function(){var t=(0,r.useState)([]),e=(0,c.Z)(t,2),n=e[0],f=e[1],s=(0,o.TH)();return(0,r.useEffect)((function(){(0,i.Rw)().then((function(t){return f(t.data.results)}))}),[]),(0,a.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:s},children:n})},e)}))})}}}]);
//# sourceMappingURL=6.865cd992.chunk.js.map