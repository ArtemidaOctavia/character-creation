(this["webpackJsonpcharacter-creator"]=this["webpackJsonpcharacter-creator"]||[]).push([[0],{10:function(t,e,a){t.exports={header:"header_header__3Bf2j",button:"header_button__1i0ad",pointsCounter:"header_pointsCounter__RWtsp",error:"header_error__1XrN1"}},15:function(t,e,a){t.exports={traitsHolder:"traitsList_traitsHolder__3J0Rh",trait:"traitsList_trait__oklwh",pickedTrait:"traitsList_pickedTrait__3NwmU"}},20:function(t,e,a){t.exports={profession:"profession_profession__2XyZ2",active:"profession_active__3tgdz"}},29:function(t,e,a){t.exports=a(41)},34:function(t,e,a){},35:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(16),r=a.n(c),s=(a(34),a(35),a(7)),o=a(9),l=a(10),u=a.n(l),f=Object(s.b)((function(t){return{pointsLeft:t.header.pointsLeft,pickedTraits:t.traits.pickedTraits}}),(function(t){return{changePoints:function(e){t({type:"CHANGE-POINTS",value:e})}}}))((function(t){return i.a.createElement("div",{className:u.a.header},i.a.createElement("nav",null,i.a.createElement(o.b,{className:u.a.button,to:"/profession"},"Profession"),i.a.createElement(o.b,{className:u.a.button,to:"/stats"},"Stats"),i.a.createElement(o.b,{className:u.a.button,to:"/traits"},"Traits"),i.a.createElement(o.b,{className:u.a.button,to:"/skills"},"Skills"),i.a.createElement(o.b,{className:u.a.button,to:"/description"},"Description")),i.a.createElement("div",{className:t.pointsLeft<0?u.a.error:""},"Points left: ",t.pointsLeft))})),d=a(2),p=a(20),v=a.n(p),h=Object(s.b)((function(t){return{professionList:t.profession.professionList,activeProfession:t.profession.activeProfession}}),(function(t){return{activateProfession:function(e){t({type:"ACTIVATE-PROFESSION",profession:e})},changePoints:function(e){t({type:"CHANGE-POINTS",value:e})}}}))((function(t){return i.a.createElement("div",null,i.a.createElement("div",null,t.professionList.map((function(e,a){var n=Object.keys(e)[0];return i.a.createElement("span",{onClick:function(){!function(e,a){t.activeProfession!==e[a]&&(t.activeProfession.cost&&t.changePoints(t.activeProfession.cost),t.activateProfession(e[a]),t.changePoints(-e[a].cost))}(e,n)},key:a,className:e[n]===t.activeProfession?"".concat(v.a.profession," ").concat(v.a.active):v.a.profession},n)}))))})),k=Object(s.b)((function(t){return{statsList:t.stats.statsList,activeStat:t.stats.activeStat}}),(function(t){return{changeStat:function(e,a){t({type:"CHANGE-STAT",stat:e,value:a})},changePoints:function(e){t({type:"CHANGE-POINTS",value:e})},activateStat:function(e){t({type:"ACTIVATE-STAT",stat:e})}}}))((function(t){return i.a.createElement("div",null,t.statsList.map((function(e,a){var n=Object.keys(e)[0];return i.a.createElement("div",{key:a},i.a.createElement("span",{onMouseOver:function(){t.activateStat(e)},onMouseOut:function(){t.activateStat(null)}},n," ",e[n],i.a.createElement("button",{onClick:function(){!function(e,a){e[a]<=4||(e[a]<=12?(t.changeStat(a,-1),t.changePoints(1)):(t.changeStat(a,-1),t.changePoints(2)))}(e,n)}},"-"),i.a.createElement("button",{onClick:function(){!function(e,a){e[a]>=14||(e[a]<12?(t.changeStat(a,1),t.changePoints(-1)):(t.changeStat(a,1),t.changePoints(-2)))}(e,n)}},"+")))})),i.a.createElement("div",null,t.activeStat&&t.activeStat.description))})),T=a(15),m=a.n(T),b=function(t){var e=function(e){return t.pickedTraits.some((function(t){return Object.keys(t)[0]===Object.keys(e)[0]}))};return i.a.createElement("div",{className:m.a.traitsHolder},t.traitsList.map((function(a,n){var c=Object.keys(a)[0];return i.a.createElement("span",{key:n,onClick:function(){var n=a[Object.keys(a)[0]].cost;t.pickTrait(a),e(a)?t.changePoints(n):t.changePoints(-n)},onMouseOver:function(){t.activateTrait(a[c])},onMouseOut:function(){t.activateTrait(null)},className:e(a)?"".concat(m.a.trait," ").concat(m.a.pickedTrait):m.a.trait},c)})))},g=Object(s.b)((function(t){return{goodTraitsList:t.traits.goodTraitsList,badTraitsList:t.traits.badTraitsList,pickedTraits:t.traits.pickedTraits,pointsLeft:t.header.pointsLeft,activeTrait:t.traits.activeTrait}}),(function(t){return{pickTrait:function(e){t({type:"TOGGLE-TRAIT-PICK",trait:e})},changePoints:function(e){t({type:"CHANGE-POINTS",value:e})},activateTrait:function(e){t({type:"ACTIVATE-TRAIT",trait:e})}}}))((function(t){return i.a.createElement("div",null,i.a.createElement(b,{traitsList:t.goodTraitsList,pickTrait:t.pickTrait,activateTrait:t.activateTrait,changePoints:t.changePoints,pickedTraits:t.pickedTraits}),i.a.createElement(b,{traitsList:t.badTraitsList,pickTrait:t.pickTrait,activateTrait:t.activateTrait,changePoints:t.changePoints,pickedTraits:t.pickedTraits}),i.a.createElement("div",null,t.activeTrait?"".concat(t.activeTrait.description,", cost ").concat(t.activeTrait.cost):""))})),E=Object(s.b)((function(t){return{skillsList:t.skills.skillsList,activeSkill:t.skills.activeSkill}}),(function(t){return{changeSkill:function(e,a){t({type:"CHANGE-SKILL",skill:e,value:a})},changePoints:function(e){t({type:"CHANGE-POINTS",value:e})},activateSkill:function(e){t({type:"ACTIVATE-SKILL",skill:e})}}}))((function(t){return i.a.createElement("div",null,t.skillsList.map((function(e){var a=Object.keys(e)[0];return i.a.createElement("div",null,i.a.createElement("span",{onMouseOver:function(){t.activateSkill(e)},onMouseOut:function(){t.activateSkill(null)}},a," ",e[a],i.a.createElement("button",{onClick:function(){!function(e,a){switch(e[a]){case 2:case 3:t.changeSkill(a,-1),t.changePoints(1);break;case 4:case 5:t.changeSkill(a,-1),t.changePoints(2);break;case 6:case 7:t.changeSkill(a,-1),t.changePoints(3);break;case 8:case 9:t.changeSkill(a,-1),t.changePoints(4);break;case 10:t.changeSkill(a,-1),t.changePoints(5)}}(e,a)}},"-"),i.a.createElement("button",{onClick:function(){!function(e,a){switch(e[a]){case 1:case 2:t.changeSkill(a,1),t.changePoints(-1);break;case 3:case 4:t.changeSkill(a,1),t.changePoints(-2);break;case 5:case 6:t.changeSkill(a,1),t.changePoints(-3);break;case 7:case 8:t.changeSkill(a,1),t.changePoints(-4);break;case 9:t.changeSkill(a,1),t.changePoints(-5)}}(e,a)}},"+")))})),i.a.createElement("div",null,t.activeSkill&&t.activeSkill.description))}));var S=function(){return i.a.createElement("div",null,i.a.createElement(f,null),i.a.createElement(d.a,{path:"/profession",render:function(){return i.a.createElement(h,null)}}),i.a.createElement(d.a,{path:"/stats",render:function(){return i.a.createElement(k,null)}}),i.a.createElement(d.a,{path:"/traits",render:function(){return i.a.createElement(g,null)}}),i.a.createElement(d.a,{path:"/skills",render:function(){return i.a.createElement(E,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(13),P=a(3),L={pointsLeft:8},y={professionList:[{Ninja:{cost:3}},{Hobo:{cost:1}}],activeProfession:{}},j=a(19),N={statsList:[{strength:8,description:"strength descr"},{dexterity:8,description:"dexterity descr"},{intelligence:8,description:"intelligence descr"},{perception:8,description:"perception descr"}],activeStat:null},A=a(28),C={goodTraitsList:[{fast:{cost:3,description:"do some fasty"}},{willpower:{cost:2,description:"do some willpowery"}},{religious:{cost:1,description:"do some religiously"}}],badTraitsList:[{albino:{cost:-1,description:"do some albiny"}},{asthma:{cost:-3,description:"do some asthmy"}},{insomnia:{cost:-2,description:"do some insomny"}}],activeTrait:null,pickedTraits:[]},I={skillsList:[{melee:1,description:"melee descr"},{crafting:1,description:"crafting descr"},{tailoring:1,description:"tailoring descr"},{medicine:1,description:"medicine descr"}],activeSkill:null},_=Object(O.b)({header:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE-POINTS":return Object(P.a)(Object(P.a)({},t),{},{pointsLeft:t.pointsLeft+e.value});default:return t}},profession:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ACTIVATE-PROFESSION":return Object(P.a)(Object(P.a)({},t),{},{activeProfession:e.profession});default:return t}},stats:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE-STAT":var a=JSON.parse(JSON.stringify(t));return a.statsList.forEach((function(t){var a=Object.keys(t),n=Object(j.a)(a,1)[0];n===e.stat&&(t[n]+=e.value)})),a;case"ACTIVATE-STAT":return Object(P.a)(Object(P.a)({},t),{},{activeStat:e.stat});default:return t}},traits:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ACTIVATE-TRAIT":return Object(P.a)(Object(P.a)({},t),{},{activeTrait:e.trait});case"TOGGLE-TRAIT-PICK":var a=Object.keys(e.trait)[0],n=t.pickedTraits.some((function(t){return Object.keys(t)[0]===a}));if(n){var i=t.pickedTraits.filter((function(t){return Object.keys(t)[0]!==a}));return Object(P.a)(Object(P.a)({},t),{},{pickedTraits:i})}return Object(P.a)(Object(P.a)({},t),{},{pickedTraits:[].concat(Object(A.a)(t.pickedTraits),[e.trait])});default:return t}},skills:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE-SKILL":var a=JSON.parse(JSON.stringify(t));return a.skillsList.forEach((function(t){var a=Object.keys(t),n=Object(j.a)(a,1)[0];n===e.skill&&(t[n]+=e.value)})),a;case"ACTIVATE-SKILL":return Object(P.a)(Object(P.a)({},t),{},{activeSkill:e.skill});default:return t}}}),w=Object(O.c)(_);window.store=w;var G=w;r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,null,i.a.createElement(s.a,{store:G},i.a.createElement(S,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.3ca62987.chunk.js.map