"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{126:function(e,t,n){n.d(t,{HI:function(){return u},IR:function(){return f},M1:function(){return a},Rw:function(){return o},tx:function(){return s}});var c=n(243),r="e1f0ba7edbc19668553e294a4c65bcf8",i=c.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){return i.get("/trending/movie/day?api_key=".concat(r))},u=function(e){return i.get("/movie/".concat(e,"?api_key=").concat(r))},a=function(e){return i.get("movie/".concat(e,"/credits?api_key=").concat(r))},s=function(e){return i.get("movie/".concat(e,"/reviews?api_key=").concat(r))},f=function(e){return i.get("search/movie?api_key=".concat(r,"&query=").concat(e))}},186:function(e,t,n){n.r(t);var c=n(439),r=n(126),i=n(791),o=n(689),u=n(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)([]),n=(0,c.Z)(t,2),a=n[0],s=n[1];return(0,i.useEffect)((function(){(0,r.tx)(e).then((function(e){return s(e.data.results)}))}),[e]),(0,u.jsx)("ul",{children:a.length>1?a.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h2",{children:["Author: ",e.author]}),(0,u.jsx)("p",{children:e.content})]},e.id)})):(0,u.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=186.b1cc922c.chunk.js.map