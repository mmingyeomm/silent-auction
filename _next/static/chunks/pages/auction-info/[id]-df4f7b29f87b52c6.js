(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{484:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auction-info/[id]",function(){return n(9392)}])},6541:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=n(8754),o=n(1757),r=n(5893),s=o._(n(7294)),a=i._(n(3935)),l=i._(n(7828)),c=n(7367),d=n(7903),u=n(4938);n(1997);let f=n(9953),m=i._(n(6663)),_={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,n,i,o,r,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function g(e){let[t,n]=s.version.split(".",2),i=parseInt(t,10),o=parseInt(n,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,s.forwardRef)((e,t)=>{let{src:n,srcSet:i,sizes:o,height:a,width:l,decoding:c,className:d,style:u,fetchPriority:f,placeholder:m,loading:_,unoptimized:p,fill:x,onLoadRef:b,onLoadingCompleteRef:j,setBlurComplete:v,setShowAltText:I,sizesInput:y,onLoad:w,onError:C,...A}=e;return(0,r.jsx)("img",{...A,...g(f),loading:_,width:l,height:a,decoding:c,"data-nimg":x?"fill":"1",className:d,style:u,sizes:o,srcSet:i,src:n,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,m,b,j,v,p,y))},[n,m,b,j,v,C,p,y,t]),onLoad:e=>{h(e.currentTarget,m,b,j,v,p,y)},onError:e=>{I(!0),"empty"!==m&&v(!0),C&&C(e)}})});function x(e){let{isAppRouter:t,imgAttributes:n}=e,i={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,i),null):(0,r.jsx)(l.default,{children:(0,r.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...i},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let n=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(u.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=_||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[i]),{onLoad:a,onLoadingComplete:l}=e,h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let g=(0,s.useRef)(l);(0,s.useEffect)(()=>{g.current=l},[l]);let[b,j]=(0,s.useState)(!1),[v,I]=(0,s.useState)(!1),{props:y,meta:w}=(0,c.getImgProps)(e,{defaultLoader:m.default,imgConf:o,blurComplete:b,showAltText:v});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{...y,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:j,setShowAltText:I,sizesInput:e.sizes,ref:t}),w.priority?(0,r.jsx)(x,{isAppRouter:!n,imgAttributes:y}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(1997);let i=n(9919),o=n(7903);function r(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,l,c,{src:d,sizes:u,unoptimized:f=!1,priority:m=!1,loading:_,className:h,quality:g,width:p,height:x,fill:b=!1,style:j,overrideSrc:v,onLoad:I,onLoadingComplete:y,placeholder:w="empty",blurDataURL:C,fetchPriority:A,layout:N,objectFit:S,objectPosition:k,lazyBoundary:P,lazyRoot:z,...E}=e,{imgConf:B,showAltText:R,blurComplete:H,defaultLoader:D}=t,M=B||o.imageConfigDefault;if("allSizes"in M)a=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,t)=>e-t),t=M.deviceSizes.sort((e,t)=>e-t);a={...M,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=E.loader||D;delete E.loader,delete E.srcSet;let F="__next_img_default"in T;if(F){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...i}=t;return e(i)}}if(N){"fill"===N&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!u&&(u=t)}let O="",L=s(p),W=s(x);if("object"==typeof(n=d)&&(r(n)||void 0!==n.src)){let e=r(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,C=C||e.blurDataURL,O=e.src,!b){if(L||W){if(L&&!W){let t=L/e.width;W=Math.round(e.height*t)}else if(!L&&W){let t=W/e.height;L=Math.round(e.width*t)}}else L=e.width,W=e.height}}let G=!m&&("lazy"===_||void 0===_);(!(d="string"==typeof d?d:O)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,G=!1),a.unoptimized&&(f=!0),F&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),m&&(A="high");let K=s(g),U=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:k}:{},R?{}:{color:"transparent"},j),V=H||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:W,blurWidth:l,blurHeight:c,blurDataURL:C||"",objectFit:U.objectFit})+'")':'url("'+w+'")',q=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Z=function(e){let{config:t,src:n,unoptimized:i,width:o,quality:r,sizes:s,loader:a}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:n,quality:r,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:a({config:t,src:n,quality:r,width:l[d]})}}({config:a,src:d,unoptimized:f,width:L,quality:K,sizes:u,loader:T});return{props:{...E,loading:G?"lazy":_,fetchPriority:A,width:L,height:W,decoding:"async",className:h,style:{...U,...q},sizes:Z.sizes,srcSet:Z.srcSet,src:v||Z.src},meta:{unoptimized:f,priority:m,placeholder:w,fill:b}}}},9919:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:o,blurDataURL:r,objectFit:s}=e,a=i?40*i:t,l=o?40*o:n,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=n(8754),o=n(7367),r=n(6541),s=i._(n(6663));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=r.Image},6663:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),n.__next_img_default=!0;let i=n},9361:function(e,t,n){"use strict";var i=n(5893);n(7294);var o=n(9008),r=n.n(o),s=n(1664),a=n.n(s),l=n(2003),c=n.n(l);t.Z=e=>{let{title:t="SilentAuction",description:n="Bid on exciting items!"}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("header",{className:c().header,children:[(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)("h1",{children:"Silent-Auction"})}),(0,i.jsxs)("nav",{children:[(0,i.jsx)(a(),{href:"/",children:"Home"}),(0,i.jsx)(a(),{href:"/auctions",children:"Live Auctions"}),(0,i.jsx)(a(),{href:"/create",children:"Create New Auction"}),(0,i.jsx)(a(),{href:"/finished-auctions",children:"Finished Auctions"})]})]})]})}},9392:function(e,t,n){"use strict";n.r(t);var i=n(5893),o=n(7294),r=n(5675),s=n.n(r),a=n(1163),l=n(1011),c=n.n(l),d=n(9361);let u={1:{winnerAddress:"0x742d35Cc6634C0532925a3b844Bc454e4438f44e",winningBid:50,itemName:"Rare Digital Art #1",endTime:"2024-10-25T15:30:00Z",nftImage:"https://picsum.photos/400/400",contractAddress:"0x742d35Cc6634C0532925a3b844Bc454e4438f44e",id:"1234",description:"A unique piece of digital art representing the future of creativity in the digital age.",creator:"0xArtist123..."},3:{winnerAddress:"B62qkUQoebsMDhaC6vn1PiherKgNeMW4p1hxWKhFw7xkNZwjy4zhDRJ",winningBid:170,itemName:"Pudgy Penguin",endTime:"2024-10-26T15:30:00Z",nftImage:"/assets/pudgy-penguin.png",contractAddress:"0x123456789...",id:"5678",description:"Another amazing piece of digital art.",creator:"0xArtist456..."}};t.default=()=>{let{id:e}=(0,a.useRouter)().query,[t,n]=(0,o.useState)(null),[r,l]=(0,o.useState)(""),[f,m]=(0,o.useState)(""),[_,h]=(0,o.useState)(!1),[g,p]=(0,o.useState)(null);(0,o.useEffect)(()=>{if(e){let t=u[e];console.log("Found data:",t),t&&n(t)}},[e]);let x=async e=>{e.preventDefault(),m(""),h(!0);try{await new Promise(e=>setTimeout(e,1e3)),"12345"===r?p({bidAmount:120,timestamp:"2024-10-25T14:30:00Z",isWinner:!1,bidtxid:"https://minascan.io/devnet/account/B62qjYDFfZWN7xXH7EP3jUX4JMqFQ3ntynFLwUKUTCKE6hXxC2xSDfR/txs",merkleroot:"15808653983891655572297620380441094149970272485610379904537881633613561093685n"}):"56789"==r?p({bidAmount:170,timestamp:"2024-10-28T14:30:00Z",isWinner:!0,bidtxid:"https://minascan.io/devnet/account/B62qjYDFfZWN7xXH7EP3jUX4JMqFQ3ntynFLwUKUTCKE6hXxC2xSDfR/txs",merkleroot:"19988526156529649009362165196142195992555127306190212867869130421781688803633n"}):m("Invalid bid key. Please check and try again.")}catch(e){m("An error occurred while verifying your bid.")}finally{h(!1)}};return t?(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsx)("header",{className:c().header,children:(0,i.jsx)(d.Z,{})}),(0,i.jsx)("main",{className:c().mainContent,children:(0,i.jsxs)("div",{className:c().twoColumnLayout,children:[(0,i.jsxs)("div",{className:c().leftColumn,children:[(0,i.jsxs)("div",{className:c().infoCard,children:[(0,i.jsx)("h3",{children:"Auction Information"}),(0,i.jsxs)("p",{children:["Item: ",t.itemName]}),(0,i.jsxs)("p",{children:["End Time: ",new Date(t.endTime).toLocaleString()]}),(0,i.jsxs)("p",{children:["Winning Key: ",56789," "]}),(0,i.jsxs)("p",{children:["Winning Bid: ",t.winningBid," MINA"]}),(0,i.jsxs)("div",{className:c().winnerInfo,children:[(0,i.jsx)("h4",{children:"Winner Information"}),(0,i.jsxs)("p",{children:["Winner Address: ",t.winnerAddress]})]})]}),(0,i.jsxs)("div",{className:c().nftDetailsSection,children:[(0,i.jsx)("h3",{children:"NFT Details"}),(0,i.jsxs)("div",{className:c().nftContent,children:[(0,i.jsx)("div",{className:c().nftImageContainer,children:(0,i.jsx)(s(),{src:t.nftImage,alt:t.itemName,width:400,height:400,className:c().nftImage,priority:!0})}),(0,i.jsxs)("div",{className:c().nftInfo,children:[(0,i.jsxs)("div",{className:c().infoRow,children:[(0,i.jsx)("strong",{children:"Contract Address:"}),(0,i.jsx)("span",{children:t.contractAddress}),(0,i.jsx)("button",{className:c().copyButton,onClick:()=>navigator.clipboard.writeText(t.contractAddress),children:"Copy"})]}),(0,i.jsxs)("div",{className:c().infoRow,children:[(0,i.jsx)("strong",{children:"Token ID:"}),(0,i.jsx)("span",{children:t.id})]}),(0,i.jsxs)("div",{className:c().infoRow,children:[(0,i.jsx)("strong",{children:"Creator:"}),(0,i.jsx)("span",{children:t.creator})]}),(0,i.jsxs)("div",{className:c().descriptionRow,children:[(0,i.jsx)("strong",{children:"Description:"}),(0,i.jsx)("p",{children:t.description})]})]})]})]})]}),(0,i.jsx)("div",{className:c().rightColumn,children:(0,i.jsxs)("div",{className:c().bidVerification,children:[(0,i.jsx)("h3",{children:"Verify Your Bid"}),(0,i.jsx)("p",{children:"Enter your bid key to see your bid information"}),(0,i.jsxs)("form",{onSubmit:x,className:c().bidKeyForm,children:[(0,i.jsx)("input",{type:"text",value:r,onChange:e=>l(e.target.value),placeholder:"Enter your bid key",className:c().bidKeyInput,disabled:_}),(0,i.jsx)("button",{type:"submit",className:c().verifyButton,disabled:_||!r,children:_?"Verifying...":"Verify"})]}),f&&(0,i.jsx)("div",{className:c().error,children:f}),g&&(0,i.jsxs)("div",{className:c().personalBidInfo,children:[(0,i.jsx)("h4",{children:"Your Bid Information"}),(0,i.jsxs)("div",{className:c().bidInfoGrid,children:[(0,i.jsxs)("div",{className:c().bidInfoItem,children:[(0,i.jsx)("label",{children:"Bid Amount:"}),(0,i.jsxs)("span",{children:[g.bidAmount," MINA"]})]}),(0,i.jsxs)("div",{className:c().bidInfoItem,children:[(0,i.jsx)("label",{children:"Transaction:"}),(0,i.jsx)("a",{href:g.bidtxid,target:"_blank",rel:"noopener noreferrer",className:c().transactionLink,children:"View on Explorer →"})]}),(0,i.jsxs)("div",{className:c().bidInfoItem,children:[(0,i.jsx)("label",{children:"Merkle Root:"}),(0,i.jsxs)("div",{className:c().merkleContainer,children:[(0,i.jsx)("span",{children:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return e.length<=t+n?e:"".concat(e.slice(0,t),"...").concat(e.slice(-n))}(g.merkleroot,6,4)}),(0,i.jsx)("button",{className:c().copyButton,onClick:()=>navigator.clipboard.writeText(g.merkleroot),title:"Copy full merkle root",children:"Copy"})]})]}),(0,i.jsxs)("div",{className:c().bidInfoItem,children:[(0,i.jsx)("label",{children:"Timestamp:"}),(0,i.jsx)("span",{children:new Date(g.timestamp).toLocaleString()})]}),(0,i.jsxs)("div",{className:c().bidInfoItem,children:[(0,i.jsx)("label",{children:"Status:"}),(0,i.jsx)("span",{className:g.isWinner?c().winner:c().notWinner,children:g.isWinner?"Winner!":"Not the winning bid"})]})]})]})]})})]})}),(0,i.jsx)("footer",{className:c().footer,children:(0,i.jsx)("p",{children:"\xa9 2024 Silent-Auction. All rights reserved."})})]}):(0,i.jsx)("div",{className:c().loading,children:"Loading auction information..."})}},1011:function(e){e.exports={pageContainer:"AuctionInfo_pageContainer__3r84K",logo:"AuctionInfo_logo__wUlXP",nav:"AuctionInfo_nav__tT8_9",navLink:"AuctionInfo_navLink__bY1pX",mainContent:"AuctionInfo_mainContent__PYNKb",twoColumnLayout:"AuctionInfo_twoColumnLayout__NdkyP",leftColumn:"AuctionInfo_leftColumn__8qmvo",rightColumn:"AuctionInfo_rightColumn__2RpM0",infoCard:"AuctionInfo_infoCard__Bt6OI",nftDetailsSection:"AuctionInfo_nftDetailsSection__hrr2B",bidVerification:"AuctionInfo_bidVerification__h3C8L",title:"AuctionInfo_title__5joqu",nftContent:"AuctionInfo_nftContent__brt0x",nftImageContainer:"AuctionInfo_nftImageContainer__fI0H8",nftImage:"AuctionInfo_nftImage__V_A6E",nftInfo:"AuctionInfo_nftInfo__caf0m",infoRow:"AuctionInfo_infoRow__0kcFS",copyButton:"AuctionInfo_copyButton__LMf_i",descriptionRow:"AuctionInfo_descriptionRow__DFzH3",bidKeyForm:"AuctionInfo_bidKeyForm__ShyqR",bidKeyInput:"AuctionInfo_bidKeyInput__Mzy9P",verifyButton:"AuctionInfo_verifyButton__w3o3z",error:"AuctionInfo_error__cAUUa",personalBidInfo:"AuctionInfo_personalBidInfo__zMJ9J",bidInfoGrid:"AuctionInfo_bidInfoGrid__g7e4_",bidInfoItem:"AuctionInfo_bidInfoItem___KZhT",transactionLink:"AuctionInfo_transactionLink__yN7uG",merkleContainer:"AuctionInfo_merkleContainer__PiPuY",winner:"AuctionInfo_winner__JbVmQ",notWinner:"AuctionInfo_notWinner__3Dg6U",bidStatus:"AuctionInfo_bidStatus__Ps2ek",winnerInfo:"AuctionInfo_winnerInfo__qFD0N",loading:"AuctionInfo_loading__8Fwc1",footer:"AuctionInfo_footer__Cf22J",nftDetailsText:"AuctionInfo_nftDetailsText__p_nsM"}},2003:function(e){e.exports={container:"Home_container__9OuOz",main:"Home_main__2uIek",title:"Home_title__YEn0u",background:"Home_background__CTycG",backgroundGradients:"Home_backgroundGradients__VUGb4",tagline:"Home_tagline__Jw01K",start:"Home_start__ELciH",code:"Home_code__BZK8z",grid:"Home_grid__vo_ES",card:"Home_card__HIlp_",center:"Home_center__Y_rV4",logo:"Home_logo__ZEOng",content:"Home_content__Qnbja",header:"Home_header__ZUWxe",footer:"Home_footer__wJNRn",description:"Home_description__zHUB6",hero:"Home_hero__g_og0",button:"Home_button__Mzpzz",auctionScrollContainer:"Home_auctionScrollContainer__zehpG",auctionGrid:"Home_auctionGrid___V5p_",auctionBox:"Home_auctionBox__PbP2x",chartContainer:"Home_chartContainer__SoXyb"}},5675:function(e,t,n){e.exports=n(5666)},1163:function(e,t,n){e.exports=n(9090)}},function(e){e.O(0,[996,888,774,179],function(){return e(e.s=484)}),_N_E=e.O()}]);