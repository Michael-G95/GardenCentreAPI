(this["webpackJsonpgc-frontend"]=this["webpackJsonpgc-frontend"]||[]).push([[0],[,,,function(e,t,a){e.exports={root:"PlantView_root__3Tqki",plantView:"PlantView_plantView__3zxcq",plantButtonRow:"PlantView_plantButtonRow__1EXxi",plantItem:"PlantView_plantItem__10Inn",plantButton:"PlantView_plantButton__2UeV5"}},function(e,t,a){e.exports={plantView:"AddPlantView_plantView__sJoez",plantButtonRow:"AddPlantView_plantButtonRow__2BWRb",plantItem:"AddPlantView_plantItem__2MuIj",plantButton:"AddPlantView_plantButton__3SQ7j",plantButtonDanger:"AddPlantView_plantButtonDanger__2i3s6",plantHeader:"AddPlantView_plantHeader__L7gVO"}},,function(e,t,a){e.exports={root:"SinglePlantView_root__XEYip",plantView:"SinglePlantView_plantView__zKWyy",plantButtonRow:"SinglePlantView_plantButtonRow__3hJTM",plantItem:"SinglePlantView_plantItem__1f4MI",plantButton:"SinglePlantView_plantButton__dF7JI",plantHeader:"SinglePlantView_plantHeader__231Zh"}},function(e,t,a){e.exports={plantView:"EditPlantView_plantView__1aKOR",plantButtonRow:"EditPlantView_plantButtonRow__2j7Wt",plantItem:"EditPlantView_plantItem__LlCG5",plantButton:"EditPlantView_plantButton__1iap1",plantButtonDanger:"EditPlantView_plantButtonDanger__2YXAC",plantHeader:"EditPlantView_plantHeader__35OCB"}},,function(e,t,a){e.exports={root:"OrderView_root__3j5XF",orderView:"OrderView_orderView__3ahb8",orderButtonRow:"OrderView_orderButtonRow__3xAut",orderItem:"OrderView_orderItem__3O3J7",orderButton:"OrderView_orderButton__3P6yJ"}},,,,,,,,,,,function(e,t,a){e.exports={navBar:"NavBar_navBar__nR0dM",navItem:"NavBar_navItem__2VYpj",navText:"NavBar_navText__2Z3An"}},,function(e,t,a){e.exports={"grid-div":"Login_grid-div__1c_4D","login-root":"Login_login-root__2Gweb","grid-item":"Login_grid-item__2erbj",display:"Login_display__185FD"}},,function(e,t,a){e.exports={searchArea:"SearchPlant_searchArea__1k2n9",searchHeader:"SearchPlant_searchHeader__1f8xh",searchBar:"SearchPlant_searchBar__3pgab",goButton:"SearchPlant_goButton__2jvBO"}},,,,function(e,t,a){e.exports={errorList:"Styles_errorList__3D1ii",errorDismiss:"Styles_errorDismiss__4wYXR"}},function(e,t,a){e.exports={menu:"Home_menu__J69dc",appContainer:"Home_appContainer__3DXgA"}},function(e,t,a){e.exports={menuitem:"MenuItem_menuitem__1EE4F",menuTitle:"MenuItem_menuTitle__1pJua"}},,,,function(e,t,a){e.exports={plantsTitle:"PlantViews_plantsTitle__3AhlR"}},,function(e,t,a){e.exports={ordersTitle:"OrdersViews_ordersTitle__ZTfVB"}},,,,,,,,,,,,,function(e,t,a){e.exports={plantHome:"Plants_plantHome__2GP7Z"}},function(e,t,a){e.exports={menuItem:"MenuItem_menuItem__2Euh9"}},function(e,t,a){e.exports={menu:"PlantMenu_menu__SMXBf"}},function(e,t,a){e.exports={orderHome:"Orders_orderHome__3CCgt"}},function(e,t,a){e.exports={menuItem:"MenuItem_menuItem__GCbP3"}},function(e,t,a){e.exports={menu:"OrderMenu_menu__3gYw9"}},function(e,t,a){e.exports=a(85)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),m=(a(60),a(61),a(2)),o=a(18),i=a(29),u=a.n(i),s=a(30),d=a.n(s),p=function(e){var t=e.name,a=e.link,n=e.color,r=void 0===n?"white":n;return l.a.createElement(m.b,{to:a,className:d.a.menuitem,style:{backgroundColor:r}},l.a.createElement("p",{className:d.a.menuTitle},t))},E=a(20),v=a.n(E),g=function(e){var t=e.to,a=void 0===t?"":t,n=e.text,r=void 0===n?"Link":n;return l.a.createElement(m.b,{className:v.a.navItem,to:a},l.a.createElement("p",{className:v.a.navText},r))},f=a(5),_=Object(f.b)((function(e){return{status:e.loggedIn}}))((function(e){var t=e.status;return l.a.createElement("div",{className:v.a.navBar},t?l.a.createElement(g,{to:"/logout",text:"Log Out"}):l.a.createElement(g,{to:"/login",text:"Log In"}),l.a.createElement(g,{to:"/plants",text:"Plants"}),l.a.createElement(g,{to:"/orders",text:"Orders"}),l.a.createElement(g,{to:"/",text:"Home"}))})),h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:u.a.appContainer},l.a.createElement("div",{className:u.a.menu},l.a.createElement(p,{name:"Plants",link:"/plants",color:"Forestgreen"}),l.a.createElement(p,{name:"Orders",link:"/orders",color:"darkslategray"}))))},N=a(49),I=a.n(N),b=a(50),w=a.n(b),O=function(e){var t=e.text,a=e.to;return l.a.createElement(m.b,{to:a,className:w.a.menuItem},l.a.createElement("p",null,t))},x=a(51),P=a.n(x),y=function(e,t){return{text:e,to:t}},B=function(){var e=[y("View all plants","/plants/all"),y("Search for a plant","/plants/search"),y("Add a plant","/plants/new")].map((function(e,t){return l.a.createElement(O,{key:t,text:e.text,to:e.to})}));return l.a.createElement("div",{className:P.a.menu},e)},V=Object(f.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){return e.loggedIn?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:I.a.plantHome},l.a.createElement(B,null))):l.a.createElement(o.a,{to:"/login"})})),j=a(8),k=a(3),S=a.n(k),F=Object(o.g)((function(e){var t=e.plant,a=e.history;return l.a.createElement("div",{className:S.a.root},l.a.createElement("div",{className:S.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.name))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.description))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.price))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.category))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.section))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.stocked?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:S.a.plantItem},l.a.createElement("span",null,t.quantity)))),l.a.createElement("div",{className:S.a.plantButtonRow},l.a.createElement("div",{className:S.a.plantButton,onClick:function(){return a.push("/plants/view/".concat(t.id))}},l.a.createElement("span",null,"View/Edit"))))})),C=a(34),A=a.n(C),R=function(e){var t=e.plants,a=e.title;if(t.length<1)return l.a.createElement("h1",{className:A.a.plantsTitle},"No Plants to Display!");var n=t.map((function(e){return l.a.createElement(F,{key:e.id,plant:e})}));return l.a.createElement("div",null,l.a.createElement("h1",{className:A.a.plantsTitle},a),n)},H=a(23),D=a.n(H),L=a(35),T=a(15),M=a.n(T),J="https://localhost:44337/api",Y={getAllPlants:function(){var e=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.a.get("".concat(J,"/plants")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPlant:function(e){return M.a.get("".concat(J,"/plants/").concat(e))},putPlant:function(e,t){return M.a.put("".concat(J,"/plants/").concat(e),t)},deletePlant:function(e){return M.a.delete("".concat(J,"/plants/").concat(e))},createPlant:function(e){return M.a.post("".concat(J,"/plants"),e)},getAllOrders:function(){var e=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.a.get("".concat(J,"/orders/")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getOrder:function(e){return M.a.get("".concat(J,"/orders/").concat(e))},putOrder:function(e,t){return M.a.put("".concat(J,"/orders/").concat(e),t)},deleteOrder:function(e){return M.a.delete("".concat(J,"/orders/").concat(e))},createOrder:function(e){return M.a.post("".concat(J,"/orders/"),e)}},q=a(28),U=a.n(q),X=function(e){var t=e.error,a=e.remove;return l.a.createElement("div",{onClick:a},l.a.createElement("h3",null,t.name),l.a.createElement("p",null,t.message))},G="SetStateID",Q="AddIdNumber",W="RemoveIdNumber",Z="LogIn",z="LogOut",K="PopError",$="PushError",ee=function(e,t){return console.log("ACTION"),{type:$,name:e,message:t}},te=Object(f.b)((function(e){return{errorList:e.error}}),(function(e){return{popError:function(){return e({type:K})}}}))((function(e){var t=e.errorList,a=e.popError;if(t.length<1)return l.a.createElement(l.a.Fragment,null);var n=l.a.createElement(X,{error:t[0],remove:a});return l.a.createElement("div",{className:U.a.errorList},n)})),ae=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(!1),o=Object(j.a)(m,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){console.log("effect");try{Y.getAllPlants().then((function(e){c(e.data),u(!0)})).catch((function(e){console.log(e.message)}))}catch(e){}}),[]),i?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(R,{plants:r,title:"All Plants"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("p",null,"Loading..."))},ne=a(22),le=a.n(ne),re=function(e){var t=e.digit,a=e.onClickHandler;return l.a.createElement("div",{onClick:a},l.a.createElement("p",null,t))},ce=function(e){var t=e.id;return l.a.createElement("div",{className:le.a.display},l.a.createElement("p",null,t))},me=Object(o.g)(Object(f.b)((function(e){return{id:e.id}}),(function(e){return{addDigit:function(t){return e(function(e){return{type:Q,data:e}}(t))},removeDigit:function(){return e({type:W})},logIn:function(t){return e(function(e){return{type:Z,data:{id:e}}}(t))},pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.pushError,a=e.history,n=e.id,r=e.addDigit,c=e.removeDigit,m=e.logIn,o=[1,2,3,4,5,6,7,8,9].map((function(e){return l.a.createElement(re,{key:e,digit:e,onClickHandler:function(){return r(e.toString())}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("div",{className:le.a["login-root"]},l.a.createElement(ce,{id:n}),l.a.createElement("div",{className:le.a["grid-div"]},o,l.a.createElement(re,{digit:"<",onClickHandler:function(){c()}}),l.a.createElement(re,{digit:"Go",onClickHandler:function(){1995==n?(m(n),a.push("/")):t("Access Denied","Passcode incorrect!")}}),l.a.createElement(re,{digit:"Back",onClickHandler:function(){return a.push("/")}}))))}))),oe=Object(f.b)((function(e){return{}}),(function(e){return{logOut:function(){return e({type:z})}}}))((function(e){return(0,e.logOut)(),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{to:"/"}))})),ie=a(6),ue=a.n(ie),se=Object(o.g)((function(e){var t=e.plant,a=e.history;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:ue.a.plantHeader},t.name),l.a.createElement("div",{className:ue.a.root},l.a.createElement("div",{className:ue.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.description))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.price))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.category))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.section))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.stocked?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:ue.a.plantItem},l.a.createElement("span",null,t.quantity)))),l.a.createElement("div",{className:ue.a.plantButtonRow},l.a.createElement("div",{className:ue.a.plantButton,onClick:function(){return a.push("/plants/edit/".concat(t.id))}},l.a.createElement("span",null,"Edit")))))})),de=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(j.a)(a,2),c=r[0],m=r[1];return Object(n.useEffect)((function(){Y.getPlant(t.params.id).then((function(e){console.log(e.data),m(e.data)})).catch((function(e){console.log(e.message)}))}),[t.params.id]),c?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(se,{plant:c})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("h1",null,"Loading..."))},pe=a(7),Ee=a.n(pe),ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=Object(n.useState)(a),m=Object(j.a)(c,2),o=m[0],i=m[1];return{value:o,inputField:r?l.a.createElement("input",{type:t,className:e,onChange:function(e){i(e.target.checked)},checked:o}):l.a.createElement("input",{type:t,className:e,onChange:function(e){return i(e.target.value)},value:o})}},ge=Object(o.g)((function(e){var t=e.plant,a=e.finishEditing,n=e.deletePlant,r=ve("","text",t.description),c=ve("","number",t.price),m=ve("","text",t.category),o=ve("","text",t.section),i=ve("","checkbox",!!t.stocked,!0),u=ve("","number",t.quantity);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:Ee.a.plantHeader},t.name),l.a.createElement("div",{className:Ee.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:Ee.a.plantItem},r.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,c.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,m.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,o.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,i.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:Ee.a.plantItem},l.a.createElement("span",null,u.inputField)))),l.a.createElement("div",{className:Ee.a.plantButtonRow},l.a.createElement("div",{className:Ee.a.plantButton,onClick:function(){return t={name:t.name,description:r.value,price:c.value,category:m.value,section:o.value,stocked:i.value,quantity:u.value},void a(t)}},l.a.createElement("span",null,"Save")),l.a.createElement("div",{className:Ee.a.plantButtonDanger,onClick:function(){return n()}},l.a.createElement("span",null,"Delete"))))})),fe=Object(o.g)(Object(f.b)((function(e){return{}}),(function(e){return{pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.history,a=e.match,r=e.pushError,c=Object(n.useState)({}),m=Object(j.a)(c,2),o=m[0],i=m[1],u=a.params.id;Object(n.useEffect)((function(){Y.getPlant(u).then((function(e){i(e.data)})).catch((function(e){r("Error getting plant data from the API",e.message)}))}),[u]);return void 0===o.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(ge,{plant:o,finishEditing:function(e){e.id=u,Y.putPlant(u,e).then((function(a){t.push("/plants/view/".concat(e.id))})).catch((function(e){r("Unable to save changes",e.message)}))},deletePlant:function(){Y.deletePlant(u).then((function(){t.push("/plants/all")})).catch((function(e){r("Unable to delete",e.message)}))}}))}))),_e=a(24),he=a.n(_e),Ne=Object(o.g)((function(e){var t=e.history,a=Object(n.useState)(""),r=Object(j.a)(a,2),c=r[0],m=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("div",{className:he.a.searchArea},l.a.createElement("div",{className:he.a.searchHeader},l.a.createElement("h1",null,"Plant Search")),l.a.createElement("div",{className:he.a.searchBar},l.a.createElement("div",null,l.a.createElement("span",null,"Search For Name:"),l.a.createElement("input",{type:"text",value:c,onChange:function(e){return m(e.target.value)}})),l.a.createElement("div",{className:he.a.goButton,onClick:function(){return t.push("/plants/search/".concat(c))}},l.a.createElement("span",null,"Go")))))})),Ie=function(e){var t=e.match.params.term.toUpperCase(),a=Object(n.useState)({}),r=Object(j.a)(a,2),c=r[0],m=r[1];return Object(n.useEffect)((function(){Y.getAllPlants().then((function(e){m(e.data.filter((function(e){return e.name.toString().toUpperCase().includes(t)||e.description.toString().toUpperCase().includes(t)})))}))}),[t]),console.log(c),void 0===c[0]?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(R,{plants:c,title:"Search Results"}))},be=a(4),we=a.n(be),Oe=Object(o.g)((function(e){var t=e.finishAdd,a=ve("","text"),n=ve("","text"),r=ve("","number"),c=ve("","text"),m=ve("","text"),o=ve("","checkbox",!1,!0),i=ve("","number");return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:we.a.plantHeader},"New Plant"),l.a.createElement("div",{className:we.a.plantView},l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:we.a.plantItem},a.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:we.a.plantItem},n.inputField," ")),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Price")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,r.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Category")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,c.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Section")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,m.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Stocked?")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,o.inputField))),l.a.createElement("div",null,l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,"Quantity ")),l.a.createElement("div",{className:we.a.plantItem},l.a.createElement("span",null,i.inputField)))),l.a.createElement("div",{className:we.a.plantButtonRow},l.a.createElement("div",{className:we.a.plantButton,onClick:function(){return function(){console.log("FINAL SF.VAL=",o.value);var e={name:a.value,description:n.value,price:r.value,category:c.value,section:m.value,stocked:o.value,quantity:i.value};t(e)}()}},l.a.createElement("span",null,"Save"))))})),xe=Object(f.b)((function(e){return{}}),(function(e){return{pushError:function(t,a){return e(ee(t,a))}}}))((function(e){var t=e.pushError;return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(Oe,{finishAdd:function(e){Y.createPlant(e).then((function(e){console.log(e)})).catch((function(e){t("Error adding the new plant",e.message)}))}}))})),Pe=a(52),ye=a.n(Pe),Be=a(53),Ve=a.n(Be),je=function(e){var t=e.text,a=e.to;return l.a.createElement(m.b,{to:a,className:Ve.a.menuItem},l.a.createElement("p",null,t))},ke=a(54),Se=a.n(ke),Fe=function(e,t){return{text:e,to:t}},Ce=function(){var e=[Fe("View all orders","/orders/all"),Fe("Search for an order","/orders/search"),Fe("Add an order","/orders/new")].map((function(e,t){return l.a.createElement(je,{key:t,text:e.text,to:e.to})}));return l.a.createElement("div",{className:Se.a.menu},e)},Ae=Object(f.b)((function(e){return{loggedIn:e.loggedIn}}))((function(e){return e.loggedIn?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("div",{className:ye.a.orderHome},l.a.createElement(Ce,null))):l.a.createElement(o.a,{to:"/login"})})),Re=a(36),He=a.n(Re),De=a(9),Le=a.n(De),Te=Object(o.g)((function(e){var t=e.order,a=e.history;return l.a.createElement("div",{className:Le.a.root},l.a.createElement("div",{className:Le.a.orderView},l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Customer Name")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.customerName))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Customer Email")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.customerEmail))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Invoice Number")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.invoiceNumber))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Order Completed?")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.orderCompleted?"Yes":"No"))),l.a.createElement("div",null,l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,"Items")),l.a.createElement("div",{className:Le.a.orderItem},l.a.createElement("span",null,t.items.length)))),l.a.createElement("div",{className:Le.a.orderButtonRow},l.a.createElement("div",{className:Le.a.orderButton,onClick:function(){return a.push("/orders/view/".concat(t.id))}},l.a.createElement("span",null,"View/Edit"))))})),Me=function(e){var t=e.plants,a=e.title;if(t.length<1)return l.a.createElement("h1",{className:He.a.ordersTitle},"No Orders to Display!");var n=t.map((function(e){return l.a.createElement(Te,{key:e.id,order:e})}));return l.a.createElement("div",null,l.a.createElement("h1",{className:He.a.ordersTitle},a),n)},Je=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(j.a)(c,2),o=m[0],i=m[1];return Object(n.useEffect)((function(){try{Y.getAllOrders().then((function(e){r(e.data),i(!0)})).catch((function(e){console.log(e.message)}))}catch(e){}}),[]),o?l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement(Me,{orders:a,title:"All Orders"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(te,null),l.a.createElement("p",null,"Loading..."))};var Ye=function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0,component:h}),l.a.createElement(o.b,{path:"/plants/all",exact:!0,component:ae}),l.a.createElement(o.b,{path:"/plants/view/:id",exact:!0,component:de}),l.a.createElement(o.b,{path:"/plants/edit/:id",exact:!0,component:fe}),l.a.createElement(o.b,{path:"/plants/search",exact:!0,component:Ne}),l.a.createElement(o.b,{path:"/plants/search/:term",exact:!0,component:Ie}),l.a.createElement(o.b,{path:"/plants/new",exact:!0,component:xe}),l.a.createElement(o.b,{path:"/orders",exact:!0,component:Ae}),l.a.createElement(o.b,{path:"/orders/all",exact:!0,component:Je}),l.a.createElement(o.b,{path:"/plants",exact:!0,component:V}),l.a.createElement(o.b,{path:"/login",exact:!0,component:me}),l.a.createElement(o.b,{path:"/logout",exact:!0,component:oe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=a(21),Ue={idReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return t.data;case Q:return e+t.data;case W:return e.length>0?e.substr(0,e.length-1):"";case z:return"";default:return e}},loggedInReducer:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return!0;case z:return!1;default:return e}},errorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("REDUCER",t.type),t.type){case K:return e.length>0?e.slice(0,e.length-1):e;case $:return e.concat({name:t.name,message:t.message});default:return e}}},Xe=Object(qe.b)({id:Ue.idReducer,loggedIn:Ue.loggedInReducer,error:Ue.errorReducer}),Ge=Object(qe.c)(Xe);console.log(Ge.getState()),Ge.subscribe((function(){return console.log(Ge.getState())}));var Qe=Ge,We=function(){return c.a.render(l.a.createElement(f.a,{store:Qe},l.a.createElement(Ye,null)),document.getElementById("root"))};We(),Qe.subscribe(We),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[55,1,2]]]);
//# sourceMappingURL=main.336771f0.chunk.js.map