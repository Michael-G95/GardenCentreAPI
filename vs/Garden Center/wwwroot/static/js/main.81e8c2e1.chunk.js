(this["webpackJsonpgc-frontend"]=this["webpackJsonpgc-frontend"]||[]).push([[0],{19:function(e,t,a){e.exports={navBar:"NavBar_navBar__nR0dM",navItem:"NavBar_navItem__2VYpj",navText:"NavBar_navText__2Z3An"}},2:function(e,t,a){e.exports={root:"PlantView_root__3Tqki",plantView:"PlantView_plantView__3zxcq",plantButtonRow:"PlantView_plantButtonRow__1EXxi",plantItem:"PlantView_plantItem__10Inn",plantButton:"PlantView_plantButton__2UeV5"}},21:function(e,t,a){e.exports={"grid-div":"Login_grid-div__1c_4D","login-root":"Login_login-root__2Gweb","grid-item":"Login_grid-item__2erbj",display:"Login_display__185FD"}},23:function(e,t,a){e.exports={searchArea:"SearchPlant_searchArea__1k2n9",searchHeader:"SearchPlant_searchHeader__1f8xh",searchBar:"SearchPlant_searchBar__3pgab",goButton:"SearchPlant_goButton__2jvBO"}},27:function(e,t,a){e.exports={errorList:"Styles_errorList__3D1ii",errorDismiss:"Styles_errorDismiss__4wYXR"}},28:function(e,t,a){e.exports={menu:"Home_menu__J69dc",appContainer:"Home_appContainer__3DXgA"}},29:function(e,t,a){e.exports={menuitem:"MenuItem_menuitem__1EE4F",menuTitle:"MenuItem_menuTitle__1pJua"}},3:function(e,t,a){e.exports={plantView:"AddPlantView_plantView__sJoez",plantButtonRow:"AddPlantView_plantButtonRow__2BWRb",plantItem:"AddPlantView_plantItem__2MuIj",plantButton:"AddPlantView_plantButton__3SQ7j",plantButtonDanger:"AddPlantView_plantButtonDanger__2i3s6",plantHeader:"AddPlantView_plantHeader__L7gVO"}},33:function(e,t,a){e.exports={plantsTitle:"PlantViews_plantsTitle__3AhlR"}},4:function(e,t,a){e.exports={root:"SinglePlantView_root__XEYip",plantView:"SinglePlantView_plantView__zKWyy",plantButtonRow:"SinglePlantView_plantButtonRow__3hJTM",plantItem:"SinglePlantView_plantItem__1f4MI",plantButton:"SinglePlantView_plantButton__dF7JI",plantHeader:"SinglePlantView_plantHeader__231Zh"}},47:function(e,t,a){e.exports={plantHome:"Plants_plantHome__2GP7Z"}},48:function(e,t,a){e.exports={menuItem:"MenuItem_menuItem__2Euh9"}},49:function(e,t,a){e.exports={menu:"PlantMenu_menu__SMXBf"}},5:function(e,t,a){e.exports={plantView:"EditPlantView_plantView__1aKOR",plantButtonRow:"EditPlantView_plantButtonRow__2j7Wt",plantItem:"EditPlantView_plantItem__LlCG5",plantButton:"EditPlantView_plantButton__1iap1",plantButtonDanger:"EditPlantView_plantButtonDanger__2YXAC",plantHeader:"EditPlantView_plantHeader__35OCB"}},50:function(e,t,a){e.exports=a(80)},55:function(e,t,a){},56:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),i=(a(55),a(56),a(6)),m=a(17),u=a(28),o=a.n(u),s=a(29),p=a.n(s),d=function(e){var t=e.name,a=e.link,n=e.color,r=void 0===n?"white":n;return l.a.createElement(i.b,{to:a,className:p.a.menuitem,style:{backgroundColor:r}},l.a.createElement("p",{className:p.a.menuTitle},t))},E=a(19),v=a.n(E),g=function(e){var t=e.to,a=void 0===t?"":t,n=e.text,r=void 0===n?"Link":n;return l.a.createElement(i.b,{className:v.a.navItem,to:a},l.a.createElement("p",{className:v.a.navText},r))},f=a(7),_=Object(f.b)((function(e){return{status:e.loggedIn}}))((function(e){var t=e.status;return l.a.createElement("div",{className:v.a.navBar},t?l.a.createElement(g,{to:"/logout",text:"Log Out"}):l.a.createElement(g,{to:"/login",text:"Log In"}),l.a.createElement(g,{to:"/plants",text:"Plants"}),l.a.createElement(g,{to:"/orders",text:"Orders"}),l.a.createElement(g,{to:"/",text:"Home"}))})),h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:o.a.appContainer},l.a.createElement("div",{className:o.a.menu},l.a.createElement(d,{name:"Plants",link:"/plants",color:"Forestgreen"}),l.a.createElement(d,{name:"Orders",link:"/orders",color:"darkslategray"}))))},N=a(47),I=a.n(N),b=a(48),w=a.n(b),P=function(e){var t=e.text,a=e.to;return l.a.createElement(i.b,{to:a,className:w.a.menuItem},l.a.createElement("p",null,t))},x=a(49),y=a.n(x),O=function(e,t){return{text:e,to:t}},B=function(){var e=[O("View all plants","/plants/all"),O("Search for a plant","/plants/search"),O("Add a plant","/plants/new")].map((function(e,t){return l.a.createElement(P,{key:t,text:e.text,to:e.to})}));return l.a.createElement("div",{className:y.a.menu},e)},k=Object(f.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){return e.loggedIn?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:I.a.plantHome},l.a.createElement(B,null))):l.a.createElement(m.a,{to:"/login"})})),S=a(10),j=a(2),V=a.n(j),F=Object(m.g)((function(e){var t=e.plant,a=e.history;return l.a.createElement("div",{className:V.a.root},l.a.createElement("div",{className:V.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,t.name))),l.a.createElement("div",null,l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,t.description))),l.a.createElement("div",null,l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,t.price))),l.a.createElement("div",null,l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,t.category))),l.a.createElement("div",null,l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,t.section))),l.a.createElement("div",null,l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,t.stocked?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:V.a.plantItem},l.a.createElement("span",null,t.quantity)))),l.a.createElement("div",{className:V.a.plantButtonRow},l.a.createElement("div",{className:V.a.plantButton,onClick:function(){return a.push("/plants/view/".concat(t.id))}},l.a.createElement("span",null,"View/Edit"))))})),C=a(33),R=a.n(C),A=function(e){var t=e.plants,a=e.title;if(t.length<1)return l.a.createElement("h1",{className:R.a.plantsTitle},"No Plants to Display!");var n=t.map((function(e){return l.a.createElement(F,{key:e.id,plant:e})}));return l.a.createElement("div",null,l.a.createElement("h1",{className:R.a.plantsTitle},a),n)},D=a(22),H=a.n(D),L=a(34),T=a(14),M=a.n(T),q="https://localhost:44337/api",J={getAllPlants:function(){var e=Object(L.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.a.get("".concat(q,"/plants")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPlant:function(e){return M.a.get("".concat(q,"/plants/").concat(e))},putPlant:function(e,t){return M.a.put("".concat(q,"/plants/").concat(e),t)},deletePlant:function(e){return M.a.delete("".concat(q,"/plants/").concat(e))},createPlant:function(e){return M.a.post("".concat(q,"/plants"),e)},getAllOrders:function(){var e=Object(L.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.a.get("".concat(q,"/orders/")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getOrder:function(e){return M.a.get("".concat(q,"/orders/").concat(e))},putOrder:function(e,t){return M.a.put("".concat(q,"/orders/").concat(e),t)},deleteOrder:function(e){return M.a.delete("".concat(q,"/orders/").concat(e))},createOrder:function(e){return M.a.post("".concat(q,"/orders/"),e)}},U=a(27),X=a.n(U),Y=function(e){var t=e.error,a=e.remove;return l.a.createElement("div",{onClick:a},l.a.createElement("h3",null,t.name),l.a.createElement("p",null,t.message))},G="SetStateID",Q="AddIdNumber",W="RemoveIdNumber",z="LogIn",Z="LogOut",K="PopError",$="PushError",ee=function(e,t){return console.log("ACTION"),{type:$,name:e,message:t}},te=Object(f.b)((function(e){return{errorList:e.error}}),(function(e){return{popError:function(){return e({type:K})}}}))((function(e){var t=e.errorList,a=e.popError;if(t.length<1)return l.a.createElement(l.a.Fragment,null);var n=l.a.createElement(Y,{error:t[0],remove:a});return l.a.createElement("div",{className:X.a.errorList},n)})),ae=function(e){var t=Object(n.useState)(!1),a=Object(S.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),m=Object(S.a)(i,2),u=m[0],o=m[1];return Object(n.useEffect)((function(){console.log("effect");try{J.getAllPlants().then((function(e){c(e.data),o(!0)})).catch((function(e){console.log(e.message)}))}catch(e){}}),[]),u?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(A,{plants:r,title:"All Plants"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("p",null,"Loading..."))},ne=a(21),le=a.n(ne),re=function(e){var t=e.digit,a=e.onClickHandler;return l.a.createElement("div",{onClick:a},l.a.createElement("p",null,t))},ce=function(e){var t=e.id;return l.a.createElement("div",{className:le.a.display},l.a.createElement("p",null,t))},ie=Object(m.g)(Object(f.b)((function(e){return{id:e.id}}),(function(e){return{addDigit:function(t){return e(function(e){return{type:Q,data:e}}(t))},removeDigit:function(){return e({type:W})},logIn:function(t){return e(function(e){return{type:z,data:{id:e}}}(t))},pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.pushError,a=e.history,n=e.id,r=e.addDigit,c=e.removeDigit,i=e.logIn,m=[1,2,3,4,5,6,7,8,9].map((function(e){return l.a.createElement(re,{key:e,digit:e,onClickHandler:function(){return r(e.toString())}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("div",{className:le.a["login-root"]},l.a.createElement(ce,{id:n}),l.a.createElement("div",{className:le.a["grid-div"]},m,l.a.createElement(re,{digit:"<",onClickHandler:function(){c()}}),l.a.createElement(re,{digit:"Go",onClickHandler:function(){1995==n?(i(n),a.push("/")):t("Access Denied","Passcode incorrect!")}}),l.a.createElement(re,{digit:"Back",onClickHandler:function(){return a.push("/")}}))))}))),me=Object(f.b)((function(e){return{}}),(function(e){return{logOut:function(){return e({type:Z})}}}))((function(e){return(0,e.logOut)(),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{to:"/"}))})),ue=a(4),oe=a.n(ue),se=Object(m.g)((function(e){var t=e.plant,a=e.history;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:oe.a.plantHeader},t.name),l.a.createElement("div",{className:oe.a.root},l.a.createElement("div",{className:oe.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,t.description))),l.a.createElement("div",null,l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,t.price))),l.a.createElement("div",null,l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,t.category))),l.a.createElement("div",null,l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,t.section))),l.a.createElement("div",null,l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,t.stocked?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:oe.a.plantItem},l.a.createElement("span",null,t.quantity)))),l.a.createElement("div",{className:oe.a.plantButtonRow},l.a.createElement("div",{className:oe.a.plantButton,onClick:function(){return a.push("/plants/edit/".concat(t.id))}},l.a.createElement("span",null,"Edit")))))})),pe=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(S.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){J.getPlant(t.params.id).then((function(e){console.log(e.data),i(e.data)})).catch((function(e){console.log(e.message)}))}),[t.params.id]),c?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(se,{plant:c})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("h1",null,"Loading..."))},de=a(5),Ee=a.n(de),ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=Object(n.useState)(a),c=Object(S.a)(r,2),i=c[0],m=c[1],u=l.a.createElement("input",{type:t,className:e,onChange:function(e){return m(e.target.value)},value:i});return{value:i,inputField:u}},ge=Object(m.g)((function(e){var t=e.plant,a=(e.history,e.finishEditing),n=e.deletePlant,r=ve("","text",t.name),c=ve("","number",t.price),i=ve("","text",t.category),m=ve("","text",t.section),u=ve("","checkbox",t.stocked),o=ve("","number",t.quantity);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:Ee.a.plantHeader},t.name),l.a.createElement("div",{className:Ee.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:Ee.a.plantItem},r.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,c.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,i.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,m.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,u.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,o.inputField)))),l.a.createElement("div",{className:Ee.a.plantButtonRow},l.a.createElement("div",{className:Ee.a.plantButton,onClick:function(){return t={name:r.value,price:c.value,category:i.value,section:m.value,stocked:u.value,quantity:o.value},void a(t)}},l.a.createElement("span",null,"Save")),l.a.createElement("div",{className:Ee.a.plantButtonDanger,onClick:function(){return n()}},l.a.createElement("span",null,"Delete"))))})),fe=Object(f.b)((function(e){return{}}),(function(e){return{pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.match,a=e.pushError,r=Object(n.useState)({}),c=Object(S.a)(r,2),i=c[0],m=c[1],u=t.params.id;Object(n.useEffect)((function(){J.getPlant(u).then((function(e){m(e.data)})).catch((function(e){a("Error getting plant data from the API",e.message)}))}),[u]);return void 0===i.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(ge,{plant:i,finishEditing:function(e){e.id=u,J.putPlant(u,e).then((function(e){})).catch((function(e){a("Unable to save changes",e.message)}))},deletePlant:function(){J.deletePlant(u)}}))})),_e=a(23),he=a.n(_e),Ne=Object(m.g)((function(e){var t=e.history,a=Object(n.useState)(""),r=Object(S.a)(a,2),c=r[0],i=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("div",{className:he.a.searchArea},l.a.createElement("div",{className:he.a.searchHeader},l.a.createElement("h1",null,"Plant Search")),l.a.createElement("div",{className:he.a.searchBar},l.a.createElement("div",null,l.a.createElement("span",null,"Search For Name:"),l.a.createElement("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",{className:he.a.goButton,onClick:function(){return t.push("/plants/search/".concat(c))}},l.a.createElement("span",null,"Go")))))})),Ie=function(e){var t=e.match.params.term.toUpperCase(),a=Object(n.useState)({}),r=Object(S.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){J.getAllPlants().then((function(e){i(e.data.filter((function(e){return e.name.toString().toUpperCase().includes(t)||e.description.toString().toUpperCase().includes(t)})))}))}),[t]),console.log(c),void 0===c[0]?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(A,{plants:c,title:"Search Results"}))},be=a(3),we=a.n(be),Pe=Object(m.g)((function(e){var t=e.finishAdd,a=ve("","text"),n=ve("","text"),r=ve("","number"),c=ve("","text"),i=ve("","text"),m=ve("","checkbox"),u=ve("","number");return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:we.a.plantHeader},"New Plant"),l.a.createElement("div",{className:we.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:we.a.plantItem},a.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:we.a.plantItem},n.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,r.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,c.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,i.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,m.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,u.inputField)))),l.a.createElement("div",{className:we.a.plantButtonRow},l.a.createElement("div",{className:we.a.plantButton,onClick:function(){return function(){var e={name:a.value,price:r.value,category:c.value,sectionField:i.value,stocked:m.value,quantityField:u.value};t(e)}()}},l.a.createElement("span",null,"Save"))))})),xe=Object(f.b)((function(e){return{}}),(function(e){return{pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.pushError;return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(Pe,{finishAdd:function(e){J.createPlant(e).then((function(e){console.log(e)})).catch((function(e){t("Error adding the new plant",e.message)}))}}))}));var ye=function(){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0,component:h}),l.a.createElement(m.b,{path:"/plants/all",exact:!0,component:ae}),l.a.createElement(m.b,{path:"/plants/view/:id",exact:!0,component:pe}),l.a.createElement(m.b,{path:"/plants/edit/:id",exact:!0,component:fe}),l.a.createElement(m.b,{path:"/plants/search",exact:!0,component:Ne}),l.a.createElement(m.b,{path:"/plants/search/:term",exact:!0,component:Ie}),l.a.createElement(m.b,{path:"/plants/new",exact:!0,component:xe}),l.a.createElement(m.b,{path:"/plants",exact:!0,component:k}),l.a.createElement(m.b,{path:"/login",exact:!0,component:ie}),l.a.createElement(m.b,{path:"/logout",exact:!0,component:me}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=a(20),Be={idReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return t.data;case Q:return e+t.data;case W:return e.length>0?e.substr(0,e.length-1):"";case Z:return"";default:return e}},loggedInReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return!0;case Z:return!1;default:return e}},errorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("REDUCER",t.type),t.type){case K:return e.length>0?e.slice(0,e.length-1):e;case $:return e.concat({name:t.name,message:t.message});default:return e}}},ke=Object(Oe.b)({id:Be.idReducer,loggedIn:Be.loggedInReducer,error:Be.errorReducer}),Se=Object(Oe.c)(ke);console.log(Se.getState()),Se.subscribe((function(){return console.log(Se.getState())}));var je=Se,Ve=function(){return c.a.render(l.a.createElement(f.a,{store:je},l.a.createElement(ye,null)),document.getElementById("root"))};Ve(),je.subscribe(Ve),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.81e8c2e1.chunk.js.map