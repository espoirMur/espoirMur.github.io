(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),l=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=A(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,E=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(O,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,j=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:I?1:0,transition:C?"opacity "+h+"ms":"none"},o),B="boolean"==typeof m?"lightgray":m,N={transitionDelay:h+"ms"},Q=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&N,{},o,{},A),z={title:t,alt:this.state.isVisible?"":a,style:Q,className:f,itemProp:y};if(p){var V=p,M=V[0];return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),B&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&N)}),M.base64&&d.default.createElement(L,{src:M.base64,spreadProps:z,imageVariants:V,generateSources:v}),M.tracedSVG&&d.default.createElement(L,{src:M.tracedSVG,spreadProps:z,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(V),d.default.createElement(O,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:V}))}}))}if(g){var T=g,P=T[0],k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete k.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},B&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:B,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&N)}),P.base64&&d.default.createElement(L,{src:P.base64,spreadProps:z,imageVariants:T,generateSources:v}),P.tracedSVG&&d.default.createElement(L,{src:P.tracedSVG,spreadProps:z,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(T),d.default.createElement(O,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:w},P,{imageVariants:T}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});I.propTypes={resolutions:C,sizes:x,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var B=I;t.default=B},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},T4LW:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAXABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAGAEAAwEBAAAAAAAAAAAAAAAAAgMEAAH/2gAMAwEAAhADEAAAAcOyastnguXB0sYTT//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREjL/2gAIAQEAAQUCUabKeUle9WuQInmMMP8A/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQETFB/9oACAEDAQE/AVUdFh//xAAXEQEAAwAAAAAAAAAAAAAAAAAQARFB/9oACAECAQE/AZsw/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARECAh/9oACAEBAAY/AoJiyVxNf//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhMWH/2gAIAQEAAT8hog2w7EtXgVaqezuoxoDyJgP/2gAMAwEAAgADAAAAELQIPv/EABgRAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAEDAQE/EHl3H2PUP//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEh/9oACAECAQE/EDoyydn/xAAcEAEBAAICAwAAAAAAAAAAAAABEQAQITFRYZH/2gAIAQEAAT8QUUowAuOyinH3RlIyQtqojU0SF5YT2esoh08mf//Z","width":50,"height":50,"src":"/static/8f987b034c85873917f3cecccdaa2d97/30d3a/profile-pic.jpg","srcSet":"/static/8f987b034c85873917f3cecccdaa2d97/30d3a/profile-pic.jpg 1x,\\n/static/8f987b034c85873917f3cecccdaa2d97/66c95/profile-pic.jpg 1.5x,\\n/static/8f987b034c85873917f3cecccdaa2d97/aacbd/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Espoir Murhabazi"}}}}')},yZlL:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=(a("0mN4"),a("T4LW")),o=a("9eSz"),l=a.n(o),d=a("p3AD"),c=function(){var e=s.data,t=e.site.siteMetadata.author;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})," ",i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null," ",t," ")," , a Engineer from DRC"," ",i.a.createElement("span",{class:"flag-icon flag-icon-cd"})," who is currently living and working in Rwanda ",i.a.createElement("span",{class:"flag-icon flag-icon-cd"}," . ")))},u=a("Bl7J"),A=a("vrFN");var f=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).commentBox=i.a.createRef(),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.componentDidMount=function(){var e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",!0),e.setAttribute("repo","espoirMur/espoirMur.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-dark"),this.commentBox.current.appendChild(e)},n.render=function(){return i.a.createElement("div",{className:"comment-box-wrapper container pt-7"},i.a.createElement("h1",{className:"mb-0"},"Comments"),i.a.createElement("hr",{className:"my-0"}),i.a.createElement("div",{ref:this.commentBox,className:"comment-box"}))},r}(r.Component);a.d(t,"pageQuery",(function(){return g}));var p=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,s=a.next;return i.a.createElement(u.a,{location:this.props.location,title:t},i.a.createElement(A.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt})," ",i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title," ")," ",i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date," ")," ")," ",i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}})," ",i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}})," ",i.a.createElement("footer",null,i.a.createElement(c,null))," "),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null," ",r&&i.a.createElement(n.Link,{to:r.fields.slug,rel:"prev"}," ","←",r.frontmatter.title," ")," ")," ",i.a.createElement("li",null," ",s&&i.a.createElement(n.Link,{to:s.fields.slug,rel:"next"}," ",s.frontmatter.title,"→"," ")," ")," ")," ")," ",i.a.createElement(f,null))},r}(r.Component),g=(t.default=p,"2413264714")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-83eb4465b6a7713d9712.js.map