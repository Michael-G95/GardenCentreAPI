(this["webpackJsonpgc-frontend"]=this["webpackJsonpgc-frontend"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={root:"PlantView_root__3Tqki",plantView:"PlantView_plantView__3zxcq",plantButtonRow:"PlantView_plantButtonRow__1EXxi",plantItem:"PlantView_plantItem__10Inn",plantButton:"PlantView_plantButton__2UeV5"}},function(e,t,a){e.exports={plantView:"AddPlantView_plantView__sJoez",plantButtonRow:"AddPlantView_plantButtonRow__2BWRb",plantItem:"AddPlantView_plantItem__2MuIj",plantButton:"AddPlantView_plantButton__3SQ7j",plantButtonDanger:"AddPlantView_plantButtonDanger__2i3s6",plantHeader:"AddPlantView_plantHeader__L7gVO"}},function(e,t,a){e.exports={root:"SinglePlantView_root__XEYip",plantView:"SinglePlantView_plantView__zKWyy",plantButtonRow:"SinglePlantView_plantButtonRow__3hJTM",plantItem:"SinglePlantView_plantItem__1f4MI",plantButton:"SinglePlantView_plantButton__dF7JI",plantHeader:"SinglePlantView_plantHeader__231Zh"}},function(e,t,a){e.exports={plantView:"EditPlantView_plantView__1aKOR",plantButtonRow:"EditPlantView_plantButtonRow__2j7Wt",plantItem:"EditPlantView_plantItem__LlCG5",plantButton:"EditPlantView_plantButton__1iap1",plantButtonDanger:"EditPlantView_plantButtonDanger__2YXAC",plantHeader:"EditPlantView_plantHeader__35OCB"}},function(e,t,a){e.exports={root:"SingleOrderView_root__1wJw0",orderView:"SingleOrderView_orderView__3g2aC",orderButtonRow:"SingleOrderView_orderButtonRow__1DvAk",orderItem:"SingleOrderView_orderItem__1CxTU",orderButton:"SingleOrderView_orderButton__1J0v2",orderHeader:"SingleOrderView_orderHeader__tt9BK"}},function(e,t,a){e.exports={root:"OrderView_root__3j5XF",orderView:"OrderView_orderView__3ahb8",orderButtonRow:"OrderView_orderButtonRow__3xAut",orderItem:"OrderView_orderItem__3O3J7",orderButton:"OrderView_orderButton__3P6yJ"}},,function(e,t,a){e.exports={orderView:"EditOrderView_orderView__2Qfat",orderButtonRow:"EditOrderView_orderButtonRow__1oUhi",orderItem:"EditOrderView_orderItem__18gNZ",orderButton:"EditOrderView_orderButton__3FGoF",orderButtonDanger:"EditOrderView_orderButtonDanger__1YE_f",orderHeader:"EditOrderView_orderHeader__E1RHq"}},,,,,,,,,,function(e,t,a){e.exports={navBar:"NavBar_navBar__nR0dM",navItem:"NavBar_navItem__2VYpj",navText:"NavBar_navText__2Z3An"}},,function(e,t,a){e.exports={"grid-div":"Login_grid-div__1c_4D","login-root":"Login_login-root__2Gweb","grid-item":"Login_grid-item__2erbj",display:"Login_display__185FD"}},,function(e,t,a){e.exports={searchArea:"SearchPlant_searchArea__1k2n9",searchHeader:"SearchPlant_searchHeader__1f8xh",searchBar:"SearchPlant_searchBar__3pgab",goButton:"SearchPlant_goButton__2jvBO"}},,,,function(e,t,a){e.exports={errorList:"Styles_errorList__3D1ii",errorDismiss:"Styles_errorDismiss__4wYXR"}},function(e,t,a){e.exports={menu:"Home_menu__J69dc",appContainer:"Home_appContainer__3DXgA"}},function(e,t,a){e.exports={menuitem:"MenuItem_menuitem__1EE4F",menuTitle:"MenuItem_menuTitle__1pJua"}},,,,function(e,t,a){e.exports={plantsTitle:"PlantViews_plantsTitle__3AhlR"}},,function(e,t,a){e.exports={ordersTitle:"OrdersViews_ordersTitle__ZTfVB"}},,,,,,,,,,,,,function(e,t,a){e.exports={plantHome:"Plants_plantHome__2GP7Z"}},function(e,t,a){e.exports={menuItem:"MenuItem_menuItem__2Euh9"}},function(e,t,a){e.exports={menu:"PlantMenu_menu__SMXBf"}},function(e,t,a){e.exports={orderHome:"Orders_orderHome__3CCgt"}},function(e,t,a){e.exports={menuItem:"MenuItem_menuItem__GCbP3"}},function(e,t,a){e.exports={menu:"OrderMenu_menu__3gYw9"}},function(e,t,a){e.exports=a(87)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),m=(a(62),a(63),a(2)),o=a(20),i=a(31),u=a.n(i),s=a(32),d=a.n(s),E=function(e){var t=e.name,a=e.link,n=e.color,r=void 0===n?"white":n;return l.a.createElement(m.b,{to:a,className:d.a.menuitem,style:{backgroundColor:r}},l.a.createElement("p",{className:d.a.menuTitle},t))},p=a(22),v=a.n(p),g=function(e){var t=e.to,a=void 0===t?"":t,n=e.text,r=void 0===n?"Link":n;return l.a.createElement(m.b,{className:v.a.navItem,to:a},l.a.createElement("p",{className:v.a.navText},r))},f=a(4),_=Object(f.b)((function(e){return{status:e.loggedIn}}))((function(e){var t=e.status;return l.a.createElement("div",{className:v.a.navBar},t?l.a.createElement(g,{to:"/logout",text:"Log Out"}):l.a.createElement(g,{to:"/login",text:"Log In"}),l.a.createElement(g,{to:"/plants",text:"Plants"}),l.a.createElement(g,{to:"/orders",text:"Orders"}),l.a.createElement(g,{to:"/",text:"Home"}))})),h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:u.a.appContainer},l.a.createElement("div",{className:u.a.menu},l.a.createElement(E,{name:"Plants",link:"/plants",color:"Forestgreen"}),l.a.createElement(E,{name:"Orders",link:"/orders",color:"darkslategray"}))))},N=a(51),I=a.n(N),b=a(52),w=a.n(b),O=function(e){var t=e.text,a=e.to;return l.a.createElement(m.b,{to:a,className:w.a.menuItem},l.a.createElement("p",null,t))},x=a(53),V=a.n(x),B=function(e,t){return{text:e,to:t}},y=function(){var e=[B("View all plants","/plants/all"),B("Search for a plant","/plants/search"),B("Add a plant","/plants/new")].map((function(e,t){return l.a.createElement(O,{key:t,text:e.text,to:e.to})}));return l.a.createElement("div",{className:V.a.menu},e)},j=Object(f.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){return e.loggedIn?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:I.a.plantHome},l.a.createElement(y,null))):l.a.createElement(o.a,{to:"/login"})})),P=a(3),F=a(5),S=a.n(F),C=Object(o.g)((function(e){var t=e.plant,a=e.history;return l.a.createElement("div",{className:S.a.root},l.a.createElement("div",{className:S.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.name))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.description))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.price))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.category))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.section))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.stocked?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.quantity)))),l.a.createElement("div",{className:S.a.plantButtonRow},l.a.createElement("div",{className:S.a.plantButton,onClick:function(){return a.push("/plants/view/".concat(t.id))}},l.a.createElement("span",null,"View/Edit"))))})),k=a(36),R=a.n(k),A=function(e){var t=e.plants,a=e.title;if(t.length<1)return l.a.createElement("h1",{className:R.a.plantsTitle},"No Plants to Display!");var n=t.map((function(e){return l.a.createElement(C,{key:e.id,plant:e})}));return l.a.createElement("div",null,l.a.createElement("h1",{className:R.a.plantsTitle},a),n)},H=a(25),D=a.n(H),L=a(37),T=a(17),J=a.n(T),M="https://localhost:44337/api",U={getAllPlants:function(){var e=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.get("".concat(M,"/plants")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPlant:function(e){return J.a.get("".concat(M,"/plants/").concat(e))},putPlant:function(e,t){return J.a.put("".concat(M,"/plants/").concat(e),t)},deletePlant:function(e){return J.a.delete("".concat(M,"/plants/").concat(e))},createPlant:function(e){return J.a.post("".concat(M,"/plants"),e)},getAllOrders:function(){var e=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.get("".concat(M,"/orders/")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getOrder:function(e){return J.a.get("".concat(M,"/orders/").concat(e))},putOrder:function(e,t){return J.a.put("".concat(M,"/orders/").concat(e),t)},deleteOrder:function(e){return J.a.delete("".concat(M,"/orders/").concat(e))},createOrder:function(e){return J.a.post("".concat(M,"/orders/"),e)}},Y=a(30),q=a.n(Y),G=function(e){var t=e.error,a=e.remove;return l.a.createElement("div",{onClick:a},l.a.createElement("h3",null,t.name),l.a.createElement("p",null,t.message))},X="SetStateID",Q="AddIdNumber",W="RemoveIdNumber",Z="LogIn",z="LogOut",K="PopError",$="PushError",ee=function(e,t){return console.log("ACTION"),{type:$,name:e,message:t}},te=Object(f.b)((function(e){return{errorList:e.error}}),(function(e){return{popError:function(){return e({type:K})}}}))((function(e){var t=e.errorList,a=e.popError;if(t.length<1)return l.a.createElement(l.a.Fragment,null);var n=l.a.createElement(G,{error:t[0],remove:a});return l.a.createElement("div",{className:q.a.errorList},n)})),ae=function(e){var t=Object(n.useState)(!1),a=Object(P.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(!1),o=Object(P.a)(m,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){console.log("effect");try{U.getAllPlants().then((function(e){c(e.data),u(!0)})).catch((function(e){console.log(e.message)}))}catch(e){}}),[]),i?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(A,{plants:r,title:"All Plants"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("p",null,"Loading..."))},ne=a(24),le=a.n(ne),re=function(e){var t=e.digit,a=e.onClickHandler;return l.a.createElement("div",{onClick:a},l.a.createElement("p",null,t))},ce=function(e){var t=e.id;return l.a.createElement("div",{className:le.a.display},l.a.createElement("p",null,t))},me=Object(o.g)(Object(f.b)((function(e){return{id:e.id}}),(function(e){return{addDigit:function(t){return e(function(e){return{type:Q,data:e}}(t))},removeDigit:function(){return e({type:W})},logIn:function(t){return e(function(e){return{type:Z,data:{id:e}}}(t))},pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.pushError,a=e.history,n=e.id,r=e.addDigit,c=e.removeDigit,m=e.logIn,o=[1,2,3,4,5,6,7,8,9].map((function(e){return l.a.createElement(re,{key:e,digit:e,onClickHandler:function(){return r(e.toString())}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("div",{className:le.a["login-root"]},l.a.createElement(ce,{id:n}),l.a.createElement("div",{className:le.a["grid-div"]},o,l.a.createElement(re,{digit:"<",onClickHandler:function(){c()}}),l.a.createElement(re,{digit:"Go",onClickHandler:function(){1995==n?(m(n),a.push("/")):t("Access Denied","Passcode incorrect!")}}),l.a.createElement(re,{digit:"Back",onClickHandler:function(){return a.push("/")}}))))}))),oe=Object(f.b)((function(e){return{}}),(function(e){return{logOut:function(){return e({type:z})}}}))((function(e){return(0,e.logOut)(),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{to:"/"}))})),ie=a(7),ue=a.n(ie),se=Object(o.g)((function(e){var t=e.plant,a=e.history;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:ue.a.plantHeader},t.name),l.a.createElement("div",{className:ue.a.root},l.a.createElement("div",{className:ue.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.description))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.price))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.category))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.section))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.stocked?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.quantity)))),l.a.createElement("div",{className:ue.a.plantButtonRow},l.a.createElement("div",{className:ue.a.plantButton,onClick:function(){return a.push("/plants/edit/".concat(t.id))}},l.a.createElement("span",null,"Edit")))))})),de=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(P.a)(a,2),c=r[0],m=r[1];return Object(n.useEffect)((function(){U.getPlant(t.params.id).then((function(e){console.log(e.data),m(e.data)})).catch((function(e){console.log(e.message)}))}),[t.params.id]),c?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(se,{plant:c})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("h1",null,"Loading..."))},Ee=a(8),pe=a.n(Ee),ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=Object(n.useState)(a),m=Object(P.a)(c,2),o=m[0],i=m[1];return{value:o,inputField:r?l.a.createElement("input",{type:t,className:e,onChange:function(e){i(e.target.checked)},checked:o}):l.a.createElement("input",{type:t,className:e,onChange:function(e){return i(e.target.value)},value:o})}},ge=Object(o.g)((function(e){var t=e.plant,a=e.finishEditing,n=e.deletePlant,r=ve("","text",t.description),c=ve("","number",t.price),m=ve("","text",t.category),o=ve("","text",t.section),i=ve("","checkbox",!!t.stocked,!0),u=ve("","number",t.quantity);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:pe.a.plantHeader},t.name),l.a.createElement("div",{className:pe.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:pe.a.plantItem},r.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,c.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,m.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,o.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,i.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:pe.a.plantItem},l.a.createElement("span",null,u.inputField)))),l.a.createElement("div",{className:pe.a.plantButtonRow},l.a.createElement("div",{className:pe.a.plantButton,onClick:function(){return t={name:t.name,description:r.value,price:c.value,category:m.value,section:o.value,stocked:i.value,quantity:u.value},void a(t)}},l.a.createElement("span",null,"Save")),l.a.createElement("div",{className:pe.a.plantButtonDanger,onClick:function(){return n()}},l.a.createElement("span",null,"Delete"))))})),fe=Object(o.g)(Object(f.b)((function(e){return{}}),(function(e){return{pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.history,a=e.match,r=e.pushError,c=Object(n.useState)({}),m=Object(P.a)(c,2),o=m[0],i=m[1],u=a.params.id;Object(n.useEffect)((function(){U.getPlant(u).then((function(e){i(e.data)})).catch((function(e){r("Error getting plant data from the API",e.message)}))}),[u]);return void 0===o.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(ge,{plant:o,finishEditing:function(e){e.id=u,U.putPlant(u,e).then((function(a){t.push("/plants/view/".concat(e.id))})).catch((function(e){r("Unable to save changes",e.message)}))},deletePlant:function(){U.deletePlant(u).then((function(){t.push("/plants/all")})).catch((function(e){r("Unable to delete",e.message)}))}}))}))),_e=a(26),he=a.n(_e),Ne=Object(o.g)((function(e){var t=e.history,a=Object(n.useState)(""),r=Object(P.a)(a,2),c=r[0],m=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("div",{className:he.a.searchArea},l.a.createElement("div",{className:he.a.searchHeader},l.a.createElement("h1",null,"Plant Search")),l.a.createElement("div",{className:he.a.searchBar},l.a.createElement("div",null,l.a.createElement("span",null,"Search For Name:"),l.a.createElement("input",{type:"text",value:c,onChange:function(e){return m(e.target.value)}})),l.a.createElement("div",{className:he.a.goButton,onClick:function(){return t.push("/plants/search/".concat(c))}},l.a.createElement("span",null,"Go")))))})),Ie=function(e){var t=e.match.params.term.toUpperCase(),a=Object(n.useState)({}),r=Object(P.a)(a,2),c=r[0],m=r[1];return Object(n.useEffect)((function(){U.getAllPlants().then((function(e){m(e.data.filter((function(e){return e.name.toString().toUpperCase().includes(t)||e.description.toString().toUpperCase().includes(t)})))}))}),[t]),console.log(c),void 0===c[0]?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(A,{plants:c,title:"Search Results"}))},be=a(6),we=a.n(be),Oe=Object(o.g)((function(e){var t=e.finishAdd,a=ve("","text"),n=ve("","text"),r=ve("","number"),c=ve("","text"),m=ve("","text"),o=ve("","checkbox",!1,!0),i=ve("","number");return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:we.a.plantHeader},"New Plant"),l.a.createElement("div",{className:we.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:we.a.plantItem},a.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:we.a.plantItem},n.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,r.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,c.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,m.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,o.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,i.inputField)))),l.a.createElement("div",{className:we.a.plantButtonRow},l.a.createElement("div",{className:we.a.plantButton,onClick:function(){return function(){console.log("FINAL SF.VAL=",o.value);var e={name:a.value,description:n.value,price:r.value,category:c.value,section:m.value,stocked:o.value,quantity:i.value};t(e)}()}},l.a.createElement("span",null,"Save"))))})),xe=Object(f.b)((function(e){return{}}),(function(e){return{pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.pushError;return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(Oe,{finishAdd:function(e){U.createPlant(e).then((function(e){console.log(e)})).catch((function(e){t("Error adding the new plant",e.message)}))}}))})),Ve=a(54),Be=a.n(Ve),ye=a(55),je=a.n(ye),Pe=function(e){var t=e.text,a=e.to;return l.a.createElement(m.b,{to:a,className:je.a.menuItem},l.a.createElement("p",null,t))},Fe=a(56),Se=a.n(Fe),Ce=function(e,t){return{text:e,to:t}},ke=function(){var e=[Ce("View all orders","/orders/all"),Ce("Search for an order","/orders/search"),Ce("Add an order","/orders/new")].map((function(e,t){return l.a.createElement(Pe,{key:t,text:e.text,to:e.to})}));return l.a.createElement("div",{className:Se.a.menu},e)},Re=Object(f.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){return e.loggedIn?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:Be.a.orderHome},l.a.createElement(ke,null))):l.a.createElement(o.a,{to:"/login"})})),Ae=a(38),He=a.n(Ae),De=a(10),Le=a.n(De),Te=Object(o.g)((function(e){var t=e.order,a=e.history;return l.a.createElement("div",{className:Le.a.root},l.a.createElement("div",{className:Le.a.orderView},l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Customer Name")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.customerName))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Customer Email")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.customerEmail))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Invoice Number")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.invoiceNumber))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Order Completed?")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.orderCompleted?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Items")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.items?t.items.length:0)))),l.a.createElement("div",{className:Le.a.orderButtonRow},l.a.createElement("div",{className:Le.a.orderButton,onClick:function(){return a.push("/orders/view/".concat(t.id))}},l.a.createElement("span",null,"View/Edit"))))})),Je=function(e){var t=e.orders,a=e.title;if(t.length<1)return l.a.createElement("h1",{className:He.a.ordersTitle},"No Orders to Display!");var n=t.map((function(e){return l.a.createElement(Te,{key:e.id,order:e})}));return l.a.createElement("div",null,l.a.createElement("h1",{className:He.a.ordersTitle},a),n)},Me=function(){var e=Object(n.useState)(!1),t=Object(P.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(P.a)(c,2),o=m[0],i=m[1];return Object(n.useEffect)((function(){try{U.getAllOrders().then((function(e){r(e.data),i(!0)})).catch((function(e){console.log(e.message)}))}catch(e){}}),[]),o?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(Je,{orders:a,title:"All Orders"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("p",null,"Loading..."))},Ue=a(9),Ye=a.n(Ue),qe=Object(o.g)((function(e){var t=e.order,a=e.history;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:Ye.a.orderHeader},"Order"),l.a.createElement("div",{className:Ye.a.root},l.a.createElement("div",{className:Ye.a.orderView},l.a.createElement("div",null,l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,"Customer Name")),l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,t.customerName))),l.a.createElement("div",null,l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,"Customer Email")),l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,t.customerEmail))),l.a.createElement("div",null,l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,"Invoice Number")),l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,t.invoiceNumber))),l.a.createElement("div",null,l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,"Order Completed?")),l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,t.orderCompleted?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,"Items")),l.a.createElement("div",{className:Ye.a.orderItem},l.a.createElement("span",null,t.items?t.items.length:0)))),l.a.createElement("div",{className:Ye.a.orderButtonRow},l.a.createElement("div",{className:Ye.a.orderButton,onClick:function(){return a.push("/orders/edit/".concat(t.id))}},l.a.createElement("span",null,"Edit")))))})),Ge=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(P.a)(a,2),c=r[0],m=r[1];return Object(n.useEffect)((function(){U.getOrder(t.params.id).then((function(e){console.log(e.data),m(e.data)})).catch((function(e){console.log(e.message)}))}),[t.params.id]),c?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(qe,{order:c})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("h1",null,"Loading..."))},Xe=a(12),Qe=a.n(Xe),We=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=Object(n.useState)(a),m=Object(P.a)(c,2),o=m[0],i=m[1];return{value:o,inputField:r?l.a.createElement("input",{type:t,className:e,onChange:function(e){i(e.target.checked)},checked:o}):l.a.createElement("input",{type:t,className:e,onChange:function(e){return i(e.target.value)},value:o})}},Ze=Object(o.g)((function(e){var t=e.order,a=e.finishEditing,n=e.deleteOrder,r=We("","text",t.customerName),c=We("","number",t.customerEmail),m=We("","text",t.invoiceNumber),o=We("","checkbox",!!t.orderCompleted,!0),i=t.items;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:Qe.a.orderHeader},t.name),l.a.createElement("div",{className:Qe.a.orderView},l.a.createElement("div",null,l.a.createElement("div",{className:Qe.a.orderItem},l.a.createElement("span",null,"Customer Name")),l.a.createElement("div",{className:Qe.a.orderItem},r.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:Qe.a.orderItem},l.a.createElement("span",null,"Customer Email")),l.a.createElement("div",{className:Qe.a.orderItem},l.a.createElement("span",null,c.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Qe.a.orderItem},l.a.createElement("span",null,"Invoice Number")),l.a.createElement("div",{className:Qe.a.orderItem},l.a.createElement("span",null,m.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Qe.a.orderItem},l.a.createElement("span",null,"Order Completed?")),l.a.createElement("div",{className:Qe.a.orderItem},l.a.createElement("span",null,o.inputField)))),l.a.createElement("div",{className:Qe.a.orderButtonRow},l.a.createElement("div",{className:Qe.a.orderButton,onClick:function(){return t={customerName:r.value,customerEmail:c.value,invoiceNumber:m.value,completedField:o.value,items:i},void a(t)}},l.a.createElement("span",null,"Save")),l.a.createElement("div",{className:Qe.a.orderButtonDanger,onClick:function(){return n()}},l.a.createElement("span",null,"Delete"))))})),ze=Object(o.g)(Object(f.b)((function(e){return{}}),(function(e){return{pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.history,a=e.match,r=e.pushError,c=Object(n.useState)({}),m=Object(P.a)(c,2),o=m[0],i=m[1],u=a.params.id;Object(n.useEffect)((function(){U.getOrder(u).then((function(e){i(e.data)})).catch((function(e){r("Error getting order data from the API",e.message)}))}),[u]);return void 0===o.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(Ze,{order:o,finishEditing:function(e){e.id=u,U.putOrder(u,e).then((function(a){t.push("/orders/view/".concat(e.id))})).catch((function(e){r("Unable to save changes",e.message)}))},deleteOrder:function(){U.deleteOrder(u).then((function(){t.push("/orders/all")})).catch((function(e){r("Unable to delete",e.message)}))}}))})));var Ke=function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/plants/all",exact:!0,component:ae}),l.a.createElement(o.b,{path:"/plants/view/:id",exact:!0,component:de}),l.a.createElement(o.b,{path:"/plants/edit/:id",exact:!0,component:fe}),l.a.createElement(o.b,{path:"/plants/search",exact:!0,component:Ne}),l.a.createElement(o.b,{path:"/plants/search/:term",exact:!0,component:Ie}),l.a.createElement(o.b,{path:"/plants/new",exact:!0,component:xe}),l.a.createElement(o.b,{path:"/orders",exact:!0,component:Re}),l.a.createElement(o.b,{path:"/orders/all",exact:!0,component:Me}),l.a.createElement(o.b,{path:"/orders/view/:id",exact:!0,component:Ge}),l.a.createElement(o.b,{path:"/orders/edit/:id",exact:!0,component:ze}),l.a.createElement(o.b,{path:"/plants",exact:!0,component:j}),l.a.createElement(o.b,{path:"/login",exact:!0,component:me}),l.a.createElement(o.b,{path:"/logout",exact:!0,component:oe}),l.a.createElement(o.b,{path:"/",component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=a(23),et={idReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return t.data;case Q:return e+t.data;case W:return e.length>0?e.substr(0,e.length-1):"";case z:return"";default:return e}},loggedInReducer:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return!0;case z:return!1;default:return e}},errorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("REDUCER",t.type),t.type){case K:return e.length>0?e.slice(0,e.length-1):e;case $:return e.concat({name:t.name,message:t.message});default:return e}}},tt=Object($e.b)({id:et.idReducer,loggedIn:et.loggedInReducer,error:et.errorReducer}),at=Object($e.c)(tt);console.log(at.getState()),at.subscribe((function(){return console.log(at.getState())}));var nt=at,lt=function(){return c.a.render(l.a.createElement(f.a,{store:nt},l.a.createElement(Ke,null)),document.getElementById("root"))};lt(),nt.subscribe(lt),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[57,1,2]]]);
//# sourceMappingURL=main.e7cedecd.chunk.js.map