(this.webpackJsonpVSM=this.webpackJsonpVSM||[]).push([[0],{80:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(18),o=a.n(c),r=(a(80),a(5)),l=a(66),s=a(149),d=a(150),u=a(64),b=a(13),j=a(24),p=a.n(j),x=a(34),f={WEBSOCKET_URL:"ws://localhost:8765",SOCKET_RETRY_THRESHOLD:5},h=new WebSocket(f.WEBSOCKET_URL),m=function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){try{h.send(JSON.stringify(t))}catch(n){console.log("you fucking moron this state should never occur"),a("error")}h.onmessage=function(n){var i=JSON.parse(n.data);i.request===t.request&&(i.error?a(i):e(i))}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=a(111),g=a(26),v=a(154),y=a(113),w=a(114),k=a(48),S=a(115),C=a(152),N=a(117),_=a(116),D=a(118),I=a(119),E=a(120),T=a(112),L=a(1),A=Object(O.a)((function(e){return{backdrop:{display:"flex",alignItems:"center",justifyContent:"center"},mainPaper:{margin:"auto",width:"40%",height:"70vh",minWidth:"400px",maxWidth:"550px",display:"flex",justifySelf:"flex-start",justifyContent:"center",alignContent:"flex-start",flexWrap:"wrap",overflow:"auto"}}}));var B=function(e){var t=A();return Object(g.a)(),Object(L.jsx)(T.a,{open:!1,className:t.backdrop,style:{zIndex:4},children:Object(L.jsx)(y.a,{className:t.mainPaper,children:"asdf"})})},q=Object(O.a)((function(e){return{"@global":{"@keyframes spin":{"0%":{transform:"rotate(-360deg)"},"100%":{transform:"rotate(0deg)"}}},appBar:{flexGrow:1,margin:"12px",display:"flex",flexDirection:"column",zIndex:5,backgroundColor:"rgba(0, 0, 0, 0)",border:"0px rgb(255,255,255) solid",borderRadius:"15px"},statusBar:{alignSelf:"center",justifySelf:"center",display:"flex",marginRight:e.spacing(1),flexGrow:1},inGameIndicator:{alignSelf:"center",color:"#9de069"},action:{width:"40px",height:"40px",margin:e.spacing(.25)},loading:{animation:"spin 4s linear infinite"}}}));var W=function(e){var t=q(),a=Object(g.a)(),n=i.a.useState(!1),c=Object(r.a)(n,2),o=c[0],l=c[1],s=i.a.useState(!1),d=Object(r.a)(s,2),u=d[0],b=d[1];function j(){return(j=Object(x.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),setTimeout((function(){l(!1)}),3e3),t.next=4,m({request:"randomize_skins"}).then((function(t){e.setLoadout(t.response),l(!1)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return h.onmessage=function(e){var t=JSON.parse(e.data);"game_state"===t.event&&(!0===t.data.state?b(!0):b(!1))},Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(B,{}),Object(L.jsx)(v.a,{direction:"down",in:!0,children:Object(L.jsx)(y.a,{variant:"outlined",className:t.appBar,position:"static",children:Object(L.jsxs)(w.a,{children:[Object(L.jsx)(k.a,{variant:"h6",style:{flexGrow:0,marginRight:a.spacing(2)},children:"a creative title"}),Object(L.jsx)("div",{className:t.statusBar,children:Object(L.jsx)(S.a,{in:u,children:Object(L.jsx)(C.a,{title:"In game",children:Object(L.jsx)(_.a,{className:t.inGameIndicator})})})}),Object(L.jsxs)("div",{className:t.actions,children:[Object(L.jsx)(N.a,{"aria-label":"randomize","aria-controls":"menu-appbar","aria-haspopup":"true",edge:"end",onClick:o?null:function(){return j.apply(this,arguments)},color:"inherit",className:t.action,children:o?Object(L.jsx)(D.a,{className:t.loading}):Object(L.jsx)(I.a,{})}),Object(L.jsx)(N.a,{"aria-label":"account button lol","aria-controls":"menu-appbar","aria-haspopup":"true",edge:"end",color:"inherit",className:t.action,children:Object(L.jsx)(E.a,{})})]})]})})})]})},F=a(136),R=a(137),G=a(159),z=a(121),M=Object(O.a)((function(e){return{}}));var P=function(e){M(),Object(g.a)();var t=e.equippedChromaIndex,a=Object.keys(e.levelData).length.toString(),i=Object(n.useState)(e.equippedLevelIndex.toString()),c=Object(r.a)(i,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){if(1!==t&&o!==a){l(a);var n=Object.values(e.levelData)[a-1];e.setter(n)}}),[t]),Object(n.useEffect)((function(){l(e.equippedLevelIndex.toString())}),[e.equippedLevelIndex]),"1"!==a?Object(L.jsx)("div",{style:{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-start",height:"45px"},children:Object(L.jsx)(G.a,{value:o,exclusive:!0,onChange:function(t,a){if(null!==a){l(a);var n=Object.values(e.levelData)[a-1];e.setter(n)}},"aria-label":"chroma level",style:{width:"90%",height:"95%"},children:Object.keys(e.levelData).map((function(n){var i=e.levelData[n],c=i.index.toString();return Object(L.jsx)(C.a,{title:i.level_type,disabled:!i.unlocked||!(1===t&&1!==c)&&c!==a,arrow:!0,children:Object(L.jsx)(z.a,{selected:o===c,value:c,"aria-label":i.index,style:{border:i.favorite?"1px #996D2D solid":null},children:i.shorthand_display_name})},i.display_name)}))})}):null},V=Object(O.a)((function(e){return{}}));var U=function(e){V(),e.equippedLevelIndex;var t=Object.keys(e.chromaData).length.toString(),a=(Object.keys(e.levelData).length.toString(),Object(n.useState)(e.equippedChromaIndex.toString())),i=Object(r.a)(a,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){o(e.equippedChromaIndex.toString())}),[e.equippedChromaIndex]),"1"!==t?Object(L.jsx)("div",{style:{flexGrow:1,width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-end",height:"45px"},children:Object(L.jsx)(G.a,{value:c,exclusive:!0,onChange:function(t,a){if(null!==a){o(a);var n=Object.values(e.chromaData)[a-1];e.setter(n)}},"aria-label":"skin level",style:{width:"90%",height:"95%",justifyContent:"flex-end",marginLeft:0},children:Object.keys(e.chromaData).map((function(t){var a=e.chromaData[t],n=a.index.toString();return null!==a.swatch_icon?Object(L.jsx)(C.a,{title:a.unlocked?a.display_name:"".concat(a.display_name," (Locked)"),disabled:!a.unlocked,arrow:!0,children:Object(L.jsx)(z.a,{selected:c===n,value:n,"aria-label":a.index,style:{border:a.favorite?"1px #996D2D solid":null},children:Object(L.jsx)("img",{alt:a.display_name,src:a.swatch_icon,style:{width:"25px",height:"auto",filter:a.unlocked?"":"grayscale(75%)"}})})},a.display_name):null}))})}):null},H=Object(O.a)((function(e){return{weaponPaper:{width:"100%",height:"75px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"0.1s ease-out !important","&:hover":{border:"1px ".concat(e.palette.primary.main," solid")}},container:{width:"93%",height:"90%",display:"flex"},tierImage:{height:"25px",alignSelf:"flex-end",margin:"3px 3px",position:"relative",bottom:"-2px",objectFit:"contain",objectPosition:"left center"},favoriteButton:{alignSelf:"flex-end",right:"2px",height:"25px",objectPosition:"center center"}}}));var J=function(e){var t=H(),a=Object(g.a)(),i=e.skinData,c="2f59173c-4bed-b6c3-2191-dea9b58be9c7"===e.weaponData.uuid,o=e.skinData.favorite,l=Object(n.useState)(i.uuid===e.equipped.uuid),s=Object(r.a)(l,2),d=s[0],u=s[1];return Object(n.useEffect)((function(){e.equipped.uuid===i.uuid?u(!0):u(!1)}),[e.equipped]),Object(L.jsx)(y.a,{variant:"outlined",className:t.weaponPaper,onClick:function(){e.equip(i.uuid)},style:{border:o?"1px ".concat(a.palette.warning.light," solid"):d?"1px ".concat(a.palette.primary.light," solid"):null},children:Object(L.jsx)("div",{className:t.container,style:{backgroundImage:"url(".concat(i.display_icon,")"),backgroundSize:c?"auto 87%":"contain",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",flexDirection:c?"column":"row",justifyContent:c?"flex-end":null},children:Object(L.jsx)("img",{alt:i.content_tier.display_name,src:i.content_tier.display_icon,className:t.tierImage,style:{left:c?"6px":"-6px"}})})})},K=a(122),Y=a(123),X=a(124),Q=a(125),Z=a(126),$=Object(O.a)((function(e){return{"@global":{"@keyframes spin":{"0%":{transform:"rotate(-360deg)"},"100%":{transform:"rotate(0deg)"}}},header:{width:"auto",display:"flex",marginTop:"15px",flexWrap:"wrap"},headerButton:{marginLeft:e.spacing(.25)},loading:{animation:"spin 4s linear infinite"}}}));var ee=function(e){var t=$(),a=(Object(g.a)(),e.equippedSkinData),n=e.inventoryData,i=e.saving,c=e.saveCallback,o=e.isFavorite,r=e.favoriteCallback,l=e.isLocked,s=e.lockCallback;return Object(L.jsxs)("div",{className:t.header,children:[Object(L.jsx)("div",{style:{width:"auto",alignSelf:"center"},children:"Standard"!==a.content_tier.dev_name?Object(L.jsx)("img",{alt:a.content_tier.dev_name,src:a.content_tier.display_icon,style:{width:"auto",height:"40px",justifySelf:"center",marginRight:"10px"}}):null}),Object(L.jsxs)("div",{children:[Object(L.jsx)(k.a,{variant:"h5",children:a.display_name}),Object(L.jsxs)(k.a,{variant:"overline",children:["Battlepass"!==a.content_tier.dev_name?a.content_tier.dev_name:"Unlockable"," ",n.display_name]})]}),Object(L.jsxs)("div",{style:{flexGrow:1,display:"flex",height:"100%",justifyContent:"flex-end"},children:[Object(L.jsx)(C.a,{title:l?"Unlock weapon from randomization":"Lock weapon from randomization",className:t.headerButton,children:Object(L.jsx)(N.a,{onClick:s,style:{height:"40px",width:"40px"},children:l?Object(L.jsx)(K.a,{}):Object(L.jsx)(Y.a,{})})}),Object(L.jsx)(C.a,{title:o?"Remove skin from favorites":"Add skin to favorites",className:t.headerButton,children:Object(L.jsx)(N.a,{onClick:r,style:{height:"40px",width:"40px"},children:o?Object(L.jsx)(X.a,{}):Object(L.jsx)(Q.a,{})})}),Object(L.jsx)(C.a,{title:"Save",className:t.headerButton,children:Object(L.jsx)(N.a,{onClick:c,style:{height:"40px",width:"40px"},children:i?Object(L.jsx)(D.a,{className:t.loading}):Object(L.jsx)(Z.a,{})})})]})]})},te=a(127),ae=a(128),ne=a(129),ie=a(130),ce=a(131),oe=a(132),re=a(133),le=a(134),se=a(135),de=Object(O.a)((function(e){return{equippedActions:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"10px",marginLeft:"10px",padding:"2px",transition:"all .2s ease !important"},previewAction:{height:"35px",width:"35px",alignSelf:"center",margin:e.spacing(.25),transition:"all .2s ease !important"},previewActionIcon:{width:"20px",height:"20px"}}}));var ue=function(e){var t=de(),a=(Object(g.a)(),e.hasAlternateMedia),n=e.showingVideo,i=e.changeVideoStateCallback,c=e.showingControls,o=e.changeControlsStateCallback,r=e.isFavoriteLevel,l=e.isFavoriteChroma,s=e.toggleFavoriteLevelCallback,d=e.toggleFavoriteChromaCallback,u=e.canFavoriteLevel,b=e.canFavoriteChroma,j=a||u||b;return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(S.a,{in:j,mountOnEnter:!0,unmountOnExit:!0,children:Object(L.jsxs)(y.a,{variant:"outlined",outlinecolor:"secondary",className:t.equippedActions,children:[Object(L.jsx)(te.a,{in:u,mountOnEnter:!0,unmountOnExit:!0,children:Object(L.jsx)(C.a,{title:r?"Remove level from favorites":"Add level to favorites",children:Object(L.jsx)(N.a,{onClick:function(){s()},"aria-label":"favorite level",className:t.previewAction,children:r?Object(L.jsx)(ae.a,{className:t.previewActionIcon}):Object(L.jsx)(ne.a,{className:t.previewActionIcon})})})}),Object(L.jsx)(te.a,{in:b,mountOnEnter:!0,unmountOnExit:!0,children:Object(L.jsx)(C.a,{title:l?"Remove chroma from favorites":"Add chroma to favorites",children:Object(L.jsx)(N.a,{onClick:function(){d()},"aria-label":"favorite chroma",className:t.previewAction,children:l?Object(L.jsx)(ie.a,{className:t.previewActionIcon}):Object(L.jsx)(ce.a,{className:t.previewActionIcon})})})}),Object(L.jsx)(te.a,{in:a,mountOnEnter:!0,unmountOnExit:!0,children:Object(L.jsx)(C.a,{title:n?"Stop video preview":"Play video preview",children:Object(L.jsx)(N.a,{onClick:function(){i(!n)},"aria-label":"preview",className:t.previewAction,children:n?Object(L.jsx)(oe.a,{className:t.previewActionIcon}):Object(L.jsx)(re.a,{className:t.previewActionIcon})})})}),Object(L.jsx)(te.a,{in:n,mountOnEnter:!0,unmountOnExit:!0,children:Object(L.jsx)(C.a,{title:c?"Hide video controls":"Show video controls",children:Object(L.jsx)(N.a,{onClick:function(){o(!c)},"aria-label":"preview",className:t.previewAction,children:c?Object(L.jsx)(le.a,{className:t.previewActionIcon}):Object(L.jsx)(se.a,{className:t.previewActionIcon})})})})]})})})},be=Object(O.a)((function(e){return{backdrop:{display:"flex",alignItems:"center",justifyContent:"center"},masterGrid:{display:"flex",margin:"auto",height:"100%",width:"100%"},mainPaper:{margin:"auto",width:"50%",height:"90vh",minWidth:"500px",maxWidth:"800px",display:"flex",justifySelf:"flex-start",justifyContent:"center",alignContent:"flex-start",flexWrap:"wrap",overflow:"auto","&::-webkit-scrollbar":{width:4},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",outline:"1px solid slategrey",backgroundClip:"padding-box"}},paperOnTopContent:{width:"92%",background:"#424242",paddingBottom:"10px",display:"flex",flexDirection:"column",position:"sticky",top:0,zIndex:4},mainSkinMedia:{width:"100%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",marginTop:"10px",transition:"all .2s ease"},paperCustomizingContent:{width:"92%",height:"auto",marginTop:"5px",display:"flex",flexDirection:"column",overflowY:"auto",alignItems:"stretch",top:0},levelSelectors:{display:"flex",flexDirection:"row",width:"100%",flexGrow:1,marginBottom:"15px",transition:"all .2s ease"},skinSelector:{marginBottom:"15px",marginTop:"15px",padding:"2px 2px",display:"flex",justifyContent:"center"}}}));var je=function(e){var t=be(),a=(Object(g.a)(),e.inventoryData[e.weaponUuid]),i=a.skins,c=e.initialSkinData,o=Object(n.useState)(i[c.skin_uuid]),l=Object(r.a)(o,2),s=l[0],d=l[1],u=Object(n.useState)(i[c.skin_uuid].levels[e.loadoutWeaponData.level_uuid]),b=Object(r.a)(u,2),j=b[0],p=b[1],x=Object(n.useState)(i[c.skin_uuid].chromas[e.loadoutWeaponData.chroma_uuid]),f=Object(r.a)(x,2),h=f[0],m=f[1],O=Object(n.useState)(i[c.skin_uuid].favorite),v=Object(r.a)(O,2),w=v[0],k=v[1],C=Object(n.useState)(),N=Object(r.a)(C,2),_=N[0],D=N[1],I=Object(n.useState)(),E=Object(r.a)(I,2),A=E[0],B=E[1],q=Object(n.useState)(!0),W=Object(r.a)(q,2),G=W[0],z=W[1],M=Object(n.useState)(!0),V=Object(r.a)(M,2),H=V[0],K=V[1],Y=Object(n.useState)(!1),X=Object(r.a)(Y,2),Q=X[0],Z=X[1],$=Object(n.useState)(!1),te=Object(r.a)($,2),ae=te[0],ne=te[1],ie=Object(n.useState)(a.locked),ce=Object(r.a)(ie,2),oe=ce[0],re=ce[1],le=Object(n.useState)(!0),se=Object(r.a)(le,2),de=se[0],je=se[1],pe=Object(n.useState)(!1),xe=Object(r.a)(pe,2),fe=xe[0],he=xe[1],me=Object(n.useState)(!1),Oe=Object(r.a)(me,2),ge=Oe[0],ve=Oe[1],ye=Object(n.useState)(!1),we=Object(r.a)(ye,2),ke=we[0],Se=we[1],Ce=Object(n.useState)(!1),Ne=Object(r.a)(Ce,2),_e=Ne[0],De=Ne[1],Ie=Object(n.useState)(!1),Ee=Object(r.a)(Ie,2),Te=Ee[0],Le=Ee[1];function Ae(e){for(var t=i[e],a=0,n=0;n<Object.keys(t.levels).length;n++)!0===t.levels[Object.keys(t.levels)[n]].unlocked&&(a=t.levels[Object.keys(t.levels)[n]].index);for(var c=0;c<Object.keys(t.chromas).length;c++)!0===t.chromas[Object.keys(t.chromas)[c]].unlocked&&t.chromas[Object.keys(t.chromas)[c]].index;1===Object.keys(t.levels).length&&1===Object.keys(t.chromas).length?ve(!1):ve(!0),d(t),p(t.levels[Object.keys(t.levels)[a-1]]),m(t.chromas[Object.keys(t.chromas)[0]]),Se(!1),Le(!1)}return Object(n.useEffect)((function(){de&&(document.title="VSM // ".concat(a.display_name))}),[de]),Object(n.useEffect)((function(){De(null!==h.video_preview||null!==j.video_preview),k(s.favorite),function(){for(var e=s.levels,t=[],a=0,n=Object.keys(e);a<n.length;a++){var i=e[n[a]];i.favorite&&t.push(i.uuid)}D(t),t.includes(j.uuid)?Z(!0):Z(!1),1===Object.keys(e).length?z(!1):z(!0)}(),function(){for(var e=s.chromas,t=[],a=0,n=Object.keys(e);a<n.length;a++){var i=e[n[a]];i.favorite&&t.push(i.uuid)}B(t),t.includes(h.uuid)?ne(!0):ne(!1),1===Object.keys(e).length?K(!1):K(!0)}()}),[s,j,h]),Object(n.useEffect)((function(){Ae(c.skin_uuid),p(i[c.skin_uuid].levels[e.loadoutWeaponData.level_uuid]),m(i[c.skin_uuid].chromas[e.loadoutWeaponData.chroma_uuid])}),[]),null==a&&null==c?null:Object(L.jsx)(T.a,{open:de,className:t.backdrop,style:{zIndex:4},children:Object(L.jsxs)(y.a,{className:t.mainPaper,children:[Object(L.jsxs)("div",{className:t.paperOnTopContent,children:[Object(L.jsx)(ee,{equippedSkinData:s,inventoryData:a,saving:fe,saveCallback:function(){he(!0);var t={weaponUuid:e.weaponUuid,skinUuid:s.uuid,levelUuid:j.uuid,chromaUuid:h.uuid,inventoryData:a,skinsData:i},n=c.skin_uuid,o=c.chroma_uuid,r=c.level_uuid,l=j.uuid===r&&h.uuid===o&&s.uuid===n,d=JSON.stringify(t),u=!1;e.saveCallback(d,l).then((function(){u=!0,je(!1),setTimeout((function(){e.closeEditor()}),100)})),setTimeout((function(){u||(je(!1),setTimeout((function(){e.closeEditor()}),100))}),3e3)},isFavorite:w,favoriteCallback:function(){i[s.uuid].favorite=!w,k(!w)},isLocked:oe,lockCallback:function(){re(!a.locked),a.locked=!a.locked}}),Object(L.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row"},children:[Object(L.jsx)(y.a,{variant:"outlined",outlinecolor:"secondary",className:t.mainSkinMedia,style:{height:ke?"35vh":"125px",maxHeight:"350px",maxWidth:"100%",overflowX:"hidden"},children:function(){var e=!1,t=!1;return null!==h.video_preview&&(e=!0),1!==h.index||null===j.display_icon||s.display_name.includes("Standard")||(t=!0),ke?ke&&null!==j.video_preview?Object(L.jsx)(S.a,{in:!0,children:Object(L.jsx)("video",{src:e?h.video_preview:j.video_preview,type:"video/mp4",controls:Te,autoPlay:!0,onEnded:function(){Se(!1)},style:{width:"auto",height:"100%",overflow:"hidden",objectFit:"contain",flexGrow:1,alignSelf:"center"}})}):void Se(!1):Object(L.jsx)(S.a,{in:!0,children:Object(L.jsx)("img",{alt:h.display_name,src:t?j.display_icon:h.display_icon,style:{maxWidth:"90%",maxHeight:"85%",objectFit:"contain",alignSelf:"center",overflow:"hidden"}})})}()}),Object(L.jsx)(ue,{hasAlternateMedia:_e,showingVideo:ke,changeVideoStateCallback:Se,showingControls:Te,changeControlsStateCallback:Le,toggleFavoriteLevelCallback:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e=null===t?j.uuid:t;var n,c=_;(n=null===a?!c.includes(j.uuid):a)&&!c.includes(e)?c.push(e):!n&&c.includes(e)&&c.splice(c.indexOf(e),1),Z(n),D(c),i[s.uuid].levels[j.uuid].favorite=n},isFavoriteLevel:Q,toggleFavoriteChromaCallback:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===t?(e=h.uuid,console.log(e)):e=t;var n,c=A;(n=null===a?!c.includes(h.uuid):a)&&!c.includes(e)?c.push(e):!n&&c.includes(e)&&c.splice(c.indexOf(e),1),ne(n),B(c),i[s.uuid].chromas[e].favorite=n},isFavoriteChroma:ae,canFavoriteLevel:G,canFavoriteChroma:H})]})]}),Object(L.jsxs)("div",{className:t.paperCustomizingContent,children:[Object(L.jsxs)("div",{className:t.levelSelectors,style:{height:ge?"45px":"0px"},children:[Object(L.jsx)(P,{levelData:s.levels,equippedLevelIndex:j.index,equippedChromaIndex:h.index,setter:p}),Object(L.jsx)(U,{levelData:s.levels,chromaData:s.chromas,equippedLevelIndex:j.index,equippedChromaIndex:h.index,setter:m})]}),ge?Object(L.jsx)(F.a,{variant:"middle"}):null,Object(L.jsx)("div",{className:t.skinSelector,children:Object(L.jsx)(R.a,{style:{width:"100%",height:"100%",justifySelf:"center"},container:!0,justifyContent:"flex-start",direction:"row",alignItems:"center",spacing:1,children:Object.keys(i).map((function(e){var t=i[e];return Object(L.jsx)(R.a,{item:!0,xs:4,children:Object(L.jsx)(J,{skinData:t,weaponData:a,equip:Ae,equipped:s})},t.display_name)}))})})]})]})})},pe=a(93),xe=a(138),fe={"29a0cfab-485b-f5d5-779a-b59f85e204a8":["100px","20px"],"42da8ccc-40d5-affc-beec-15aa47b42eda":["130px","30px"],"44d4e95c-4157-0037-81b2-17841bf2e8e3":["100px","10px"],"1baa85b4-4c70-1284-64bb-6481dfc3bb4e":["140px","35px"],"e336c6b8-418d-9340-d77f-7a9e4cfe0702":["140px","20px"],"f7e1b454-4ad4-1063-ec0a-159e56b58941":["195px","20px"],"462080d1-4035-2937-7c09-27aa2a5c27a7":["200px","20px"],"910be174-449b-c412-ab22-d0873436b21b":["240px","40px"],"ec845bf4-4f79-ddda-a3da-0db3774b2794":["240px","30px"],"ae3de142-4d85-2547-dd26-4e90bed35cf7":["240px","20px"],"4ade7faa-4cf1-8376-95ef-39884480959b":["240px","60px"],"ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a":["250px","30px"],"9c82e19d-4575-0200-1a81-3eacf00cf872":["240px","30px"],"c4883e50-4494-202c-3ec3-6b8a9284f00b":["250px","70px"],"a03b24d3-4319-996d-0f8c-94bbfba1dfc7":["240px","100px"],"55d8a0f4-4274-ca67-fe2c-06ab45efdf58":["260px","80px"],"63e6c2b6-4a8e-869c-3d4c-e38355226584":["270px","40px"],"2f59173c-4bed-b6c3-2191-dea9b58be9c7":["auto","20px"]},he=Object(O.a)((function(e){return{weaponContainerVideo:{position:"absolute",objectFit:"cover",width:"auto",height:"auto"},weaponPaper:{flexDirection:"row",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:-1,transition:"0.1s ease-out !important","&:hover":{border:"1px ".concat(e.palette.primary.main," solid")}},bottomGradient:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 60%,rgba(0,0,0,.15) 100%)",zIndex:0,width:"100%",height:"100%"},dataContainer:{width:"100%",height:"100%",display:"flex",position:"relative",top:"-100%"},textContainer:{display:"flex",flexDirection:"column",width:"100%",height:"100%",alignSelf:"flex-start",alignItems:"center",justifyContent:"center",backgroundPosition:"center",overflow:"visible",zIndex:1},buddyContainer:{display:"flex",maxWidth:"50px",height:"100%",position:"relative",right:0,bottom:7},buddyImage:{width:"100%",height:"auto",objectFit:"contain",alignSelf:"flex-end"},weaponLabelHolder:{display:"flex",width:"80%",height:"50%",position:"relative",alignSelf:"flex-start",left:12,bottom:-22},weaponLabel:{textAlign:"left",width:"100%",flexGrow:1,height:"auto",alignSelf:"flex-end",textOverflow:"ellipsis"}}}));var me=function(e){var t=he(),a=(Object(g.a)(),!1),i=Object(n.useState)(!0),c=Object(r.a)(i,2),o=c[0],l=c[1],s=Object(n.useState)(!1),d=Object(r.a)(s,2),u=d[0],b=d[1],j=Object(n.useState)({}),p=Object(r.a)(j,2),x=p[0],f=p[1],h=Object(n.useState)(!1),m=Object(r.a)(h,2),O=m[0],v=m[1],w=void 0!==e.data?e.data.favorite:"",C=void 0!==e.data?e.data.locked:"";function N(){return 150*Math.random()+100}return Object(n.useEffect)((function(){if(void 0!==e.data){var t=null!==x?x.skin_image:"";!1===a&&e.data.skin_image!==t&&(a=!0,setTimeout((function(){l(!0),setTimeout((function(){f(e.data),setTimeout((function(){l(!1),a=!1}),N())}),N())}),N())),e.data.buddy_name!==x.buddy_name&&setTimeout((function(){b(!0),setTimeout((function(){f(e.data),setTimeout((function(){b(!1)}),N())}),N())}),N())}}),[e.data]),Object(L.jsx)(pe.a,{in:!o,children:Object(L.jsxs)(y.a,{className:t.weaponPaper,variant:"outlined",onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)},onMouseDown:function(){e.weaponEditorCallback(e.uuid)},style:{backgroundPosition:e.useLargeWeaponImage?"50% 50%":"50% 40%",backgroundImage:x!=={}?"url(".concat(x.skin_image,")"):'url("https://media.valorant-api.com/weapons/'.concat(e.uuid,'/displayicon.png")'),backgroundSize:"2f59173c-4bed-b6c3-2191-dea9b58be9c7"!==e.uuid?e.useLargeWeaponImage?"calc(".concat(fe[e.uuid][0]," + ").concat(fe[e.uuid][1],") auto"):"".concat(e.uuid in fe?fe[e.uuid][0]:"250px"," auto"):"auto 80%"},children:[Object(L.jsx)("div",{className:t.bottomGradient}),Object(L.jsxs)("div",{className:t.dataContainer,children:[Object(L.jsxs)("div",{className:t.textContainer,children:[Object(L.jsx)("div",{className:t.weaponLabelHolder,children:Object(L.jsxs)(k.a,{className:t.weaponLabel,variant:"overline",children:[C?"\ud83d\udd12 ":null,e.displayName]})}),Object(L.jsx)("div",{style:{width:"80%",alignSelf:"flex-start",position:"relative",left:12},children:Object(L.jsx)(xe.a,{in:O,children:Object(L.jsxs)(k.a,{className:t.weaponLabel,variant:"body2",style:{marginTop:"14px",marginBottom:"5px"},children:[w?"\u2764 ":null,x.skin_name]})})})]}),Object(L.jsx)(S.a,{in:!u,children:Object(L.jsx)("div",{className:t.buddyContainer,style:{width:e.isSidearm?"20%":"14%"},children:"2f59173c-4bed-b6c3-2191-dea9b58be9c7"!==e.uuid?Object(L.jsx)("img",{alt:x.buddy_name,className:t.buddyImage,src:""!==x.buddy_image?x.buddy_image:null}):Object(L.jsx)("img",{alt:"",src:""})})})]})]})})},Oe=Object(O.a)((function(e){return{root:{display:"flex",margin:"auto",width:"100%",alignSelf:"center"},collectionMainGridItem:{display:"flex",alignItems:"center"},collectionItem:{height:"115px"}}})),ge=[[{type:"weapon",sidearm:!0,uuid:"29a0cfab-485b-f5d5-779a-b59f85e204a8",displayName:"Classic"},{type:"weapon",sidearm:!1,uuid:"f7e1b454-4ad4-1063-ec0a-159e56b58941",displayName:"Stinger"},{type:"weapon",sidearm:!1,uuid:"ae3de142-4d85-2547-dd26-4e90bed35cf7",displayName:"Bulldog"},{type:"weapon",sidearm:!1,uuid:"c4883e50-4494-202c-3ec3-6b8a9284f00b",displayName:"Marshal"}],[{type:"weapon",sidearm:!0,uuid:"42da8ccc-40d5-affc-beec-15aa47b42eda",displayName:"Shorty"},{type:"weapon",sidearm:!1,uuid:"462080d1-4035-2937-7c09-27aa2a5c27a7",displayName:"Spectre"},{type:"weapon",sidearm:!1,uuid:"4ade7faa-4cf1-8376-95ef-39884480959b",displayName:"Guardian"},{type:"weapon",sidearm:!1,uuid:"a03b24d3-4319-996d-0f8c-94bbfba1dfc7",displayName:"Operator"}],[{type:"weapon",sidearm:!0,uuid:"44d4e95c-4157-0037-81b2-17841bf2e8e3",displayName:"Frenzy"},{type:"weapon",sidearm:!1,uuid:"910be174-449b-c412-ab22-d0873436b21b",displayName:"Bucky"},{type:"weapon",sidearm:!1,uuid:"ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a",displayName:"Phantom"},{type:"weapon",sidearm:!1,uuid:"55d8a0f4-4274-ca67-fe2c-06ab45efdf58",displayName:"Ares"}],[{type:"weapon",sidearm:!0,uuid:"1baa85b4-4c70-1284-64bb-6481dfc3bb4e",displayName:"Ghost"},{type:"weapon",sidearm:!1,uuid:"ec845bf4-4f79-ddda-a3da-0db3774b2794",displayName:"Judge"},{type:"weapon",sidearm:!1,uuid:"9c82e19d-4575-0200-1a81-3eacf00cf872",displayName:"Vandal"},{type:"weapon",sidearm:!1,uuid:"63e6c2b6-4a8e-869c-3d4c-e38355226584",displayName:"Odin"}],[{type:"weapon",sidearm:!0,uuid:"e336c6b8-418d-9340-d77f-7a9e4cfe0702",displayName:"Sheriff"},{type:"placeholder"},{type:"weapon",sidearm:!1,uuid:"2f59173c-4bed-b6c3-2191-dea9b58be9c7",displayName:"Melee"}]];var ve=function(e){var t=Oe(),a=window.innerWidth<980||window.innerWidth>1500,i=window.innerWidth<980;return Object(n.useEffect)((function(){a=window.innerWidth<980||window.innerWidth>1500,i=window.innerWidth<980}),[]),Object(L.jsx)(R.a,{className:t.root,container:!0,justifyContent:"center",direction:"row",alignItems:"center",spacing:2,children:ge.map((function(n){if(null!==e.loadout)return n.map((function(n){return"weapon"===n.type?Object(L.jsx)(R.a,{className:t.collectionItem,item:!0,md:!0===n.sidearm?2:3,sm:12,xs:12,children:Object(L.jsx)(me,{data:e.loadout[n.uuid],uuid:n.uuid,displayName:n.displayName,useLargeWeaponImage:a,weaponEditorCallback:e.weaponEditorCallback,isSidearm:n.sidearm})},n.uuid):i?Object(L.jsx)("br",{}):Object(L.jsx)(R.a,{className:t.collectionItem,item:!0,md:6,sm:!1,xs:!1},"placeholder")}))}))})},ye=a(139),we=Object(O.a)((function(e){return{footer:{height:"25vh"},root:{height:"80vh",margin:"auto",display:"flex",padding:0,flexGrow:1}}}));var ke=function(e){var t=we(),a=Object(n.useState)(!1),i=Object(r.a)(a,2),c=i[0],o=i[1],l=Object(n.useState)(""),s=Object(r.a)(l,2),d=(s[0],s[1],Object(n.useState)({})),u=Object(r.a)(d,2),b=u[0],j=u[1],f=Object(n.useState)(!1),h=Object(r.a)(f,2),O=h[0],g=h[1],v=Object(n.useState)({}),y=Object(r.a)(v,2),w=y[0],k=y[1],S=Object(n.useState)(),C=Object(r.a)(S,2),N=C[0],_=C[1];function D(){return(D=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({request:"fetch_inventory"}).then((function(e){!0===e.success&&j(e.response.skins)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return E.apply(this,arguments)}function E(){return(E=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({request:"fetch_loadout"}).then((function(e){!0===e.success&&k(e.response)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return A.apply(this,arguments)}function A(){return(A=Object(x.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){try{m({request:"update_inventory",args:{payload:t}}).then((function(n){j(n.response),a?e():m({request:"put_weapon",args:{payload:t}}).then((function(t){k(t.response),e()}))}))}catch(i){e()}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){g(!1),_(null)}return Object(n.useEffect)((function(){c||(setTimeout((function(){I().then((function(){!function(){D.apply(this,arguments)}()}))}),300),setInterval((function(){return I()}),5e3),o(!0))}),[]),Object(n.useEffect)((function(){O||(document.title="VSM // Collection")}),[O]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(W,{setLoadout:k}),Object(L.jsxs)(ye.a,{maxWidth:"xxl",className:t.root,children:[N,Object(L.jsx)(ve,{weaponEditorCallback:function(e){g(!0),_(Object(L.jsx)(je,{weaponUuid:e,initialSkinData:w[e],inventoryData:b,loadoutWeaponData:w[e],saveCallback:T,closeEditor:B}))},loadout:w})]})]})},Se=a(155),Ce=a(140),Ne=a(153),_e=Object(O.a)((function(e){return{stepper:{}}})),De=["Hello!","VALORANT Account","Settings"];var Ie=function(e){var t=_e(),a=(Object(g.a)(),e.activeStep);return Object(L.jsx)(Se.a,{activeStep:a,className:t.stepper,children:De.map((function(e,t){return Object(L.jsx)(Ce.a,{children:Object(L.jsx)(Ne.a,{children:e})},e)}))})},Ee=a(141),Te=a(156),Le=a(142),Ae=a(143),Be=Object(O.a)((function(e){return{headerText:{justifySelf:"center",textAlign:"center",background:"linear-gradient(90deg, rgba(255,190,190,1) 0%, rgba(250,117,129,1) 50%, rgba(255,190,190,1) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},bodyText:{marginTop:"3px",justifySelf:"center",textAlign:"center"},list:{width:"400px",justifySelf:"center",alignSelf:"center",display:"flex",flexDirection:"column",paddingTop:"0px"},listItem:{justifySelf:"center",textAlign:"center",padding:"2px"},buttonDiv:{display:"flex",height:"100%",width:"100%",flexDirection:"column",flexGrow:1,marginTop:"5px",justifyContent:"flex-end"},startButton:{width:"100%",height:"37px",alignSelf:"center",marginBottom:"15px"}}}));var qe=function(e){var t=Be(),a=(Object(g.a)(),e.pageStyle);return Object(L.jsxs)("div",{style:a,children:[Object(L.jsx)(k.a,{variant:"h3",className:t.headerText,children:Object(L.jsx)("strong",{children:"VSM"})}),Object(L.jsx)(k.a,{variant:"body1",className:t.bodyText,children:"VALORANT inventory management, expanded"}),Object(L.jsx)(F.a,{variant:"middle",style:{margin:"10px"}}),Object(L.jsx)(Ee.a,{className:t.list,dense:!0,children:["improved skin selection","favorites system","skin randomizer","automatic randomization"].map((function(e){return Object(L.jsx)(Te.a,{className:t.listItem,children:Object(L.jsx)(Le.a,{primary:e})},e)}))}),Object(L.jsx)("div",{className:t.buttonDiv,children:Object(L.jsx)(Ae.a,{variant:"outlined",color:"primary",onClick:e.nextCallback,className:t.startButton,children:"Get Started"})})]})},We=a(144),Fe=a(157),Re=a(145),Ge=a(146),ze=a(147),Me=Object(O.a)((function(e){return{"@global":{"@keyframes spin":{"0%":{transform:"rotate(-360deg)"},"100%":{transform:"rotate(0deg)"}}},start:{display:"flex",flexDirection:"column",flexGrow:1},gameNotRunning:{display:"flex",flexDirection:"column",flexGrow:1},autodetectClient:{display:"flex",flexDirection:"column",flexGrow:1},accountDataList:{flexGrow:0,marginBottom:"5px"},loading:{animation:"spin 4s linear infinite"},buttons:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"flex-end"},nextButton:{width:"100%",height:"37px",marginBottom:"15px"}}}));var Pe=function(e){var t=Me(),a=(Object(g.a)(),e.pageStyle),i=Object(n.useState)(!1),c=Object(r.a)(i,2),o=c[0],l=c[1],s=Object(n.useState)(!0),d=Object(r.a)(s,2),u=d[0],b=d[1],j=Object(n.useState)(!1),p=Object(r.a)(j,2),x=p[0],f=p[1],h=Object(n.useState)(!1),O=Object(r.a)(h,2),v=O[0],y=O[1],w=Object(n.useState)({}),S=Object(r.a)(w,2),C=S[0],N=S[1];return Object(n.useEffect)((function(){x||m({request:"get_running_state"}).then((function(e){!0===e.success&&(l(e.response),f(!0))}))}),[]),Object(n.useEffect)((function(){o&&!v&&m({request:"autodetect_account"}).then((function(e){!0===e.success&&(y(!0),N(e.response))}))}),[o]),Object(L.jsx)("div",{style:a,children:Object(L.jsxs)("div",{className:t.start,children:[Object(L.jsx)(k.a,{variant:"h4",children:"Let's get started"}),Object(L.jsx)(pe.a,{in:!o&&x,unmountOnExit:!0,mountOnEnter:!0,children:Object(L.jsxs)("div",{className:t.gameNotRunning,children:[Object(L.jsx)(k.a,{style:{marginTop:"12px",marginBottom:"10px"},variant:"body2",children:"It looks like VALORANT isn't open. VALORANT needs to be open to set up VSM."}),Object(L.jsx)(Ae.a,{variant:"outlined",color:"primary",disabled:!u,className:t.startButton,onClick:function(){b(!1),m({request:"start_game"}).then((function(e){!0===e.response&&l(!0)}))},children:u?"Launch VALORANT":Object(L.jsx)(D.a,{className:t.loading})})]})}),Object(L.jsx)(pe.a,{in:o,style:{transitionDelay:"200ms"},unmountOnExit:!0,mountOnEnter:!0,children:Object(L.jsxs)("div",{className:t.autodetectClient,children:[Object(L.jsx)(k.a,{style:{marginTop:"12px",marginBottom:"5px"},variant:"body2",children:v?"Discovered the following account data:":"Attempting to autodetect your VALORANT account."}),Object(L.jsx)(pe.a,{in:v,mountOnEnter:!0,unmountOnExit:!0,children:Object(L.jsxs)(Ee.a,{className:t.accountDataList,children:[Object(L.jsxs)(Te.a,{children:[Object(L.jsx)(We.a,{children:Object(L.jsx)(Fe.a,{children:Object(L.jsx)(Re.a,{})})}),Object(L.jsx)(Le.a,{primary:"".concat(C.game_name,"#").concat(C.game_tag)})]}),Object(L.jsxs)(Te.a,{children:[Object(L.jsx)(We.a,{children:Object(L.jsx)(Fe.a,{children:Object(L.jsx)(Ge.a,{})})}),Object(L.jsx)(Le.a,{primary:"Region: ".concat(C.region)})]}),Object(L.jsxs)(Te.a,{children:[Object(L.jsx)(We.a,{children:Object(L.jsx)(Fe.a,{children:Object(L.jsx)(ze.a,{})})}),Object(L.jsx)(Le.a,{primary:"Shard: ".concat(C.shard)})]})]})}),Object(L.jsx)(pe.a,{in:v,style:{transitionDelay:"500ms"},mountOnEnter:!0,unmountOnExit:!0,children:Object(L.jsx)("div",{className:t.buttons,children:Object(L.jsx)(Ae.a,{variant:"outlined",color:"primary",onClick:e.nextCallback,className:t.nextButton,children:"Next"})})})]})})]})})},Ve=Object(O.a)((function(e){return{root:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},paper:{width:"500px",height:"400px",display:"flex",flexDirection:"column"},pageContent:{display:"flex",flexGrow:1,alignItems:"center",flexDirection:"column"}}})),Ue={width:"90%",height:"100%",display:"flex",flexDirection:"column",flexGrow:1};var He=function(e){var t=Ve(),a=(Object(g.a)(),[Object(L.jsx)(qe,{pageStyle:Ue,nextCallback:s}),Object(L.jsx)(Pe,{pageStyle:Ue,nextCallback:s})]),i=Object(n.useState)(0),c=Object(r.a)(i,2),o=c[0],l=c[1];function s(){l(o+1)}return Object(L.jsx)(ye.a,{maxWidth:"xl",className:t.root,children:Object(L.jsx)(S.a,{in:!0,children:Object(L.jsxs)(y.a,{variant:"outlined",className:t.paper,children:[Object(L.jsx)(Ie,{activeStep:o}),Object(L.jsx)("div",{className:t.pageContent,children:a[o]})]})})})},Je=Object(O.a)((function(e){return{root:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.background.default,zIndex:100},main:{width:"300px",height:"200px",display:"flex",flexDirection:"column",alignItems:"center"},content:{display:"flex",flexDirection:"column",flexGrow:1,alignItems:"center"},retryButton:{alignSelf:"center",width:"80%"},buttons:{display:"flex",width:"100%",flexDirection:"column",flexGrow:1,justifyContent:"center"}}}));var Ke=function(e){var t=Je();return Object(g.a)(),Object(L.jsx)(T.a,{open:!0,className:t.root,children:Object(L.jsx)(S.a,{in:!0,children:Object(L.jsx)("div",{className:t.main,children:Object(L.jsxs)("div",{className:t.content,children:[Object(L.jsx)(k.a,{variant:"h4",children:"Connection failed"}),Object(L.jsx)(k.a,{variant:"body1",style:{textAlign:"center",marginTop:"10px"},children:"Couldn't connect to your computer. Is the VSM client companion running?"}),Object(L.jsx)("div",{className:t.buttons,children:Object(L.jsx)(Ae.a,{variant:"outlined",color:"primary",onClick:e.retry,className:t.retryButton,children:"Retry"})})]})})})})},Ye=a(151),Xe=a(148),Qe=Object(O.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var Ze=function(e){var t=Qe();return Object(L.jsx)(T.a,{className:t.backdrop,open:e.open,children:Object(L.jsx)(Ye.a,{children:Object(L.jsx)(Xe.a,{color:"#ffffff"})})})},$e=Object(l.a)({palette:{type:"dark",primary:{main:"#fa7581"},secondary:{main:"#454545"}},typography:{fontFamily:["Chivo","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiCssBaseline:{"@global":{body:{"&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",outline:"1px solid slategrey"}}}}}});var et=function(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),i=a[0],c=a[1],o=Object(n.useState)(!0),l=Object(r.a)(o,2),j=l[0],p=l[1],x=Object(n.useState)(!0),O=Object(r.a)(x,2),g=(O[0],O[1]),v=Object(n.useState)(!1),y=Object(r.a)(v,2),w=y[0],k=y[1],S=Object(n.useState)(!1),C=Object(r.a)(S,2),N=C[0],_=C[1],D=Object(n.useState)(!1),I=Object(r.a)(D,2),E=I[0],T=I[1],A=Object(n.useState)(null),B=Object(r.a)(A,2),q=B[0],W=B[1];function F(){p(!1),setTimeout((function(){c(!1)}),300)}function R(){c(!0),p(!0),_(!1),k(!1),g(!1),W(null);var e=0;(h=new WebSocket(f.WEBSOCKET_URL)).readyState,function t(){e<f.SOCKET_RETRY_THRESHOLD?0===h.readyState?(e++,setTimeout((function(){t()}),500)):1===h.readyState&&(k(!0),F(),console.log("connected")):(console.log("failed"),F(),g(!0))}()}return Object(n.useEffect)((function(){R()}),[]),Object(n.useEffect)((function(){w&&!N&&w&&!N&&m({request:"get_onboarding_state"}).then((function(e){console.log(e),!1===e.response?T(!1):T(!0),_(!0)}))}),[w]),h.onclose=function(e){W(Object(L.jsx)(Ke,{retry:R}))},Object(L.jsxs)(s.a,{theme:$e,children:[Object(L.jsx)(d.a,{}),q,function(){if(i)return Object(L.jsx)(Ze,{open:j})}(),N?Object(L.jsxs)(u.a,{basename:"/",children:[Object(L.jsx)(b.b,{exact:!0,path:"/",children:E?Object(L.jsx)(b.a,{to:"/collection"}):Object(L.jsx)(b.a,{to:"/onboarding"})}),Object(L.jsx)(b.b,{path:"/collection",children:Object(L.jsx)(ke,{})}),Object(L.jsx)(b.b,{path:"/onboarding",children:Object(L.jsx)(He,{})})]}):null]})},tt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,160)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(et,{})}),document.getElementById("root")),tt()}},[[91,1,2]]]);
//# sourceMappingURL=main.454442ee.chunk.js.map