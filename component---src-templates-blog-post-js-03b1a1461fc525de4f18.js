(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,E=y&&window.IntersectionObserver,S=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(z,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=e.loading,O=e.draggable,R=g||h;if(!R)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:C?1:0,transition:V?"opacity "+y+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,H={transitionDelay:y+"ms"},W=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&H,o,f),M={title:t,alt:this.state.isVisible?"":a,style:W,className:m,itemProp:S},N=this.state.isHydrated?p(R):R[0];if(g)return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),T&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&H)}),N.base64&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:M,imageVariants:R,generateSources:L}),N.tracedSVG&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:M,imageVariants:R,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,v(R),d.default.createElement(z,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},N,{imageVariants:R}))}}));if(h){var B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete B.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},T&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},V&&H)}),N.base64&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:M,imageVariants:R,generateSources:L}),N.tracedSVG&&d.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:M,imageVariants:R,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,v(R),d.default.createElement(z,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},N,{imageVariants:R}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:V,sizes:k,fixed:T(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:T(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=C;t.default=H},Bl7J:function(e,t,a){"use strict";var r=a("dI71"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("RMg3"),l=a("p3AD"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},n.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/blog"},r)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/blog"},r)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(3/4)}},n.a.createElement(o.a,null),n.a.createElement("header",null,e),n.a.createElement("main",null,i),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Build by Espy Mur"))},t}(i.Component);t.a=d},yZlL:function(e,t,a){"use strict";a.r(t);var r=a("dI71"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("9eSz"),l=a.n(o),d=a("p3AD"),c=function(){var e=Object(s.useStaticQuery)("4211413508"),t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})," ",n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null," ",t," ")," , a Software Engineer from DRC 🇨🇩 lost in Data Science .🤪"))},u=a("Bl7J"),f=a("vrFN"),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).commentBox=n.a.createRef(),a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",!0),e.setAttribute("repo","espoirMur/espoirMur.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-dark"),this.commentBox.current.appendChild(e)},a.render=function(){return n.a.createElement("div",{className:"comment-box-wrapper container pt-7"},n.a.createElement("h1",{className:"mb-0"},"Comments"),n.a.createElement("hr",{className:"my-0"}),n.a.createElement("div",{ref:this.commentBox,className:"comment-box"}))},t}(i.Component),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return n.a.createElement(u.a,{location:this.props.location,title:t},n.a.createElement(f.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt})," ",n.a.createElement("article",null,n.a.createElement("header",null,n.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title," ")," ",n.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date," ")," ")," ",n.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}})," ",n.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}})," ",n.a.createElement("footer",null,n.a.createElement(c,null))," "),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null," ",r&&n.a.createElement(s.Link,{to:r.fields.slug,rel:"prev"}," ","←",r.frontmatter.title," ")," ")," ",n.a.createElement("li",null," ",i&&n.a.createElement(s.Link,{to:i.fields.slug,rel:"next"}," ",i.frontmatter.title,"→"," ")," ")," ")," ")," ",n.a.createElement(m,null))},t}(i.Component);t.default=p}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-03b1a1461fc525de4f18.js.map