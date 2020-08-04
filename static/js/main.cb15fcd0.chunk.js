(this["webpackJsonpcharacter-creation"]=this["webpackJsonpcharacter-creation"]||[]).push([[0],{11:function(e,t,a){e.exports={header:"header_header__3Bf2j",buttonsHolder:"header_buttonsHolder__2HXm1",button:"header_button__1i0ad",points:"header_points__1MmMz",error:"header_error__1XrN1"}},13:function(e,t,a){e.exports={profession:"profession_profession__2XyZ2",professionHolder:"profession_professionHolder__Q5tRx",professionsList:"profession_professionsList__2BA7D",professionDescription:"profession_professionDescription__S4v8Q",active:"profession_active__3tgdz"}},14:function(e,t,a){e.exports={statsList:"stats_statsList__23xnO",description:"stats_description__1UP7z",statsHolder:"stats_statsHolder__1JXjE",active:"stats_active__I60iZ",button:"stats_button__so2Us"}},19:function(e,t,a){e.exports={traitsHolder:"traitsList_traitsHolder__3J0Rh",trait:"traitsList_trait__oklwh",pickedBadTrait:"traitsList_pickedBadTrait__1Fo2s",pickedGoodTrait:"traitsList_pickedGoodTrait__2rWBG"}},26:function(e,t,a){e.exports={button:"skills_button__2Iegr"}},31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},37:function(e,t,a){},4:function(e,t,a){e.exports={active:"description_active__jZQYe",element:"description_element__2Z6QC",trait:"description_trait__jCOU4",anthropometric:"description_anthropometric__2cWKW",environmental:"description_environmental__2YXkJ"}},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),s=a.n(r),c=(a(36),a(37),a(5)),o=a(12),l=a(11),u=a.n(l),m=Object(c.b)((function(e){return{pointsLeft:e.header.pointsLeft}}),(function(e){return{changePoints:function(t){e({type:"CHANGE-POINTS",value:t})}}}))((function(e){var t=e.pointsLeft;return i.a.createElement("div",{className:u.a.header},i.a.createElement("nav",{className:u.a.buttonsHolder},i.a.createElement(o.b,{className:u.a.button,to:"/profession"},"Profession"),i.a.createElement(o.b,{className:u.a.button,to:"/stats"},"Stats"),i.a.createElement(o.b,{className:u.a.button,to:"/traits"},"Traits"),i.a.createElement(o.b,{className:u.a.button,to:"/skills"},"Skills"),i.a.createElement(o.b,{className:u.a.button,to:"/description"},"Description")),i.a.createElement("div",{className:t<0?"".concat(u.a.error," ").concat(u.a.points):u.a.points},"Points left:"," ",t))})),d=a(3),p=a(13),f=a.n(p),v=a(9),E=a.n(v),h=function(e){var t=e.profession,a=function(e){return e.map((function(e,t){return i.a.createElement("div",{key:t},e)}))};return i.a.createElement("div",null,i.a.createElement("div",{className:E.a.element},t.description),i.a.createElement("div",{className:E.a.element},i.a.createElement("div",{className:E.a.blue},"Profession skills:"),t.skillBonus?t.skillBonus.map((function(e,t){return i.a.createElement("div",{key:t},e.name,":"," ",e.value)})):"none"),i.a.createElement("div",{className:E.a.equipment},i.a.createElement("div",{className:"".concat(E.a.element," ").concat(E.a.blue)},"Equipment:"),i.a.createElement("div",{className:E.a.element},i.a.createElement("span",{className:E.a.cyan}," Wield:"),t.wield?" ".concat(t.wield):" none"),i.a.createElement("div",{className:E.a.element},i.a.createElement("div",{className:E.a.cyan},"Appearence:"),t.appearence?a(t.appearence):"none"),i.a.createElement("div",{className:E.a.element},i.a.createElement("div",{className:E.a.cyan},"Inventory:"),t.inventory?a(t.inventory):"none")))},g=Object(c.b)((function(e){return{professionList:e.profession.professionList,activeProfession:e.profession.activeProfession}}),(function(e){return{activateProfession:function(t){e({type:"ACTIVATE-PROFESSION",profession:t})},changePoints:function(t){e({type:"CHANGE-POINTS",value:t})}}}))((function(e){var t=e.activeProfession,a=e.changePoints,n=e.activateProfession,r=e.professionList;return i.a.createElement("div",{className:f.a.professionHolder},i.a.createElement("div",{className:f.a.professionsList},r.map((function(e,r){var s=Object.keys(e)[0];return i.a.createElement("span",{onClick:function(){return function(e,i){t!==e[i]&&(t&&a(t.cost),n(e[i]),a(-e[i].cost))}(e,s)},key:r,className:e[s]===t?"".concat(f.a.profession," ").concat(f.a.active):f.a.profession},s)}))),i.a.createElement("div",{className:f.a.professionDescription},t&&i.a.createElement(h,{profession:t})))})),b=function(e){var t=e.statsList,a=e.stat;return i.a.createElement("div",null,function(e){if(e){var a=Object.keys(e)[0],n=t.filter((function(e){return Object.keys(e)[0]===a}))[0][a];switch(a){case"strength":return i.a.createElement("div",null,i.a.createElement("div",null,"Base HP:",10*n),i.a.createElement("div",null,"Max carrying weight:",6*n,"kg"),i.a.createElement("div",null,"Blunt damage bonus:",1*n));case"dexterity":return i.a.createElement("div",null,i.a.createElement("div",null,"Close combat precision modifier:",(.25*n).toFixed(2)),i.a.createElement("div",null,"Throwing penalty for one point of target dodge skill:",(45-3.125*n).toFixed(0)),i.a.createElement("div",null,"Ranged combat penalty:",-16+n));case"intelligence":return i.a.createElement("div",null,i.a.createElement("div",null,"Reading speed:",(12.5*n).toFixed(0),"%"),i.a.createElement("div",null,"Craft speed bonus:",n,"%"));case"perception":return i.a.createElement("div",null,i.a.createElement("div",null,"Aim penalty",-(24-1.3*n).toFixed(0)))}}}(a),a.description)},k=a(14),T=a.n(k),N=Object(c.b)((function(e){return{statsList:e.stats.statsList,activeStat:e.stats.activeStat}}),(function(e){return{changeStat:function(t,a){e({type:"CHANGE-STAT",stat:t,value:a})},changePoints:function(t){e({type:"CHANGE-POINTS",value:t})},activateStat:function(t){e({type:"ACTIVATE-STAT",stat:t})}}}))((function(e){var t=e.changeStat,a=e.changePoints,n=e.statsList,r=e.activeStat,s=e.activateStat;return i.a.createElement("div",{className:T.a.statsHolder},i.a.createElement("div",{className:T.a.statsList},n.map((function(e,n){var c;return r&&(c=e.name===r.name?T.a.active:""),i.a.createElement("div",{key:n,className:c},i.a.createElement("span",{onClick:function(){return s(e)}},e.name," ",e.value,i.a.createElement("button",{className:T.a.button,onClick:function(){return function(e){e.value<=4||(e.value<=12?(t(e.name,-1),a(1)):(t(e.name,-1),a(2)))}(e)}},"-"),i.a.createElement("button",{className:T.a.button,onClick:function(){return function(e){e.value>=14||(e.value<12?(t(e.name,1),a(-1)):(t(e.name,1),a(-2)))}(e)}},"+")))}))),i.a.createElement("div",{className:T.a.description},r&&i.a.createElement(b,{statsList:n,stat:r})))})),_=a(19),y=a.n(_),O=function(e){var t=e.pickedTraits,a=e.pickTrait,n=e.changePoints,r=e.traitsList,s=e.activateTrait,c=e.traitStyle,o=function(e){return t.some((function(t){return t.name===e.name}))};return i.a.createElement("div",{className:y.a.traitsHolder},r.map((function(e,t){return i.a.createElement("span",{key:t,onClick:function(){return function(e){a(e),o(e)?n(e.cost):n(-e.cost)}(e)},onMouseOver:function(){return s(e)},onMouseOut:function(){return s(null)},className:o(e)?"".concat(y.a.trait," ").concat(y.a["".concat(c)]):y.a.trait},e.name)})))},L=Object(c.b)((function(e){return{goodTraitsList:e.traits.goodTraitsList,badTraitsList:e.traits.badTraitsList,pickedTraits:e.traits.pickedTraits,pointsLeft:e.header.pointsLeft,activeTrait:e.traits.activeTrait}}),(function(e){return{pickTrait:function(t){e({type:"TOGGLE-TRAIT-PICK",trait:t})},changePoints:function(t){e({type:"CHANGE-POINTS",value:t})},activateTrait:function(t){e({type:"ACTIVATE-TRAIT",trait:t})}}}))((function(e){var t=e.goodTraitsList,a=e.pickTrait,n=e.activateTrait,r=e.changePoints,s=e.pickedTraits,c=e.badTraitsList,o=e.activeTrait;return i.a.createElement("div",null,i.a.createElement(O,{traitsList:t,pickTrait:a,activateTrait:n,changePoints:r,pickedTraits:s,traitStyle:"pickedGoodTrait"}),i.a.createElement(O,{traitsList:c,pickTrait:a,activateTrait:n,changePoints:r,pickedTraits:s,traitStyle:"pickedBadTrait"}),i.a.createElement("div",null,o?"".concat(o.description,", cost ").concat(o.cost):""))})),S=a(26),A=a.n(S),j=Object(c.b)((function(e){return{skillsList:e.skills.skillsList,activeSkill:e.skills.activeSkill,profession:e.profession.activeProfession}}),(function(e){return{changeSkill:function(t,a){e({type:"CHANGE-SKILL",skill:t,value:a})},changePoints:function(t){e({type:"CHANGE-POINTS",value:t})},activateSkill:function(t){e({type:"ACTIVATE-SKILL",skill:t})}}}))((function(e){var t=e.changeSkill,a=e.changePoints,n=e.activateSkill,r=e.profession,s=e.activeSkill,c=e.skillsList;return i.a.createElement("div",null,c.map((function(e,s){return i.a.createElement("div",{key:s},i.a.createElement("span",{onMouseOver:function(){return n(e)},onMouseOut:function(){return n(null)}},e.name," ",e.value,r&&function(e,t){var a=t.filter((function(t){return t.name===e.name}));if(a[0])return i.a.createElement("span",null," ","(+",a[0].value,")")}(e,r.skillBonus),i.a.createElement("button",{type:"button",className:A.a.button,onClick:function(){return function(e){switch(e.value){case 2:case 3:t(e.name,-1),a(1);break;case 4:case 5:t(e.name,-1),a(2);break;case 6:case 7:t(e.name,-1),a(3);break;case 8:case 9:t(e.name,-1),a(4);break;case 10:t(e.name,-1),a(5)}}(e)}},"-"),i.a.createElement("button",{type:"button",className:A.a.button,onClick:function(){return function(e){switch(e.value){case 1:case 2:t(e.name,1),a(-1);break;case 3:case 4:t(e.name,1),a(-2);break;case 5:case 6:t(e.name,1),a(-3);break;case 7:case 8:t(e.name,1),a(-4);break;case 9:t(e.name,1),a(-5)}}(e)}},"+")))})),i.a.createElement("div",null,s&&s.description))})),P=a(4),C=a.n(P),I=function(e){var t=e.valueName,a=e.field,n=e.type,r=e.toggleField,s=e.fieldName,c=e.setValue,o=e.value;return i.a.createElement("div",{className:C.a.element},"".concat(t,": "),a?i.a.createElement("input",{autoFocus:!0,type:"".concat(n),onMouseOut:function(){return r("".concat(s))},onChange:function(e){return c(e.target.value)}}):i.a.createElement("span",{onClick:function(){return r("".concat(s))}},o))},w=function(e){var t=e.setSex,a=e.sex;return i.a.createElement("div",{className:C.a.element}," ","Sex: ",i.a.createElement("span",{onClick:function(){return t("male")},className:"male"===a?C.a.active:""},"Male"),i.a.createElement("span",null,"/"),i.a.createElement("span",{onClick:function(){return t("female")},className:"female"===a?C.a.active:""},"Female"))},H=function(e){var t=e.statsList;return i.a.createElement("div",{className:C.a.element},i.a.createElement("div",null,"Stats:"),t.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("span",null,e.name," ",e.value))})))},x=function(e){var t=e.pickedTraits;return i.a.createElement("div",{className:C.a.element},i.a.createElement("div",null,"Traits:"),t.map((function(e,t){return i.a.createElement("div",{className:C.a.trait,key:t},e.name)})))},F=function(e){var t=e.profession;return i.a.createElement("div",{className:C.a.element},i.a.createElement("div",null,"Profession:"),t&&t.name)},G=a(16),B=a(1),M=function(e){return e.map((function(e,t){return i.a.createElement("div",{key:t},e.name," ",e.value)}))},V=function(e){var t=e.profession,a=e.skills;return i.a.createElement("div",{className:C.a.element},i.a.createElement("div",null,"Skills:"),M(t?function(e,t){return e.map((function(e){return t.forEach((function(t){e.name===t.name&&(e=Object(B.a)(Object(B.a)({},e),{},Object(G.a)({},"value",e.value+t.value)))})),e})).filter((function(e){return 1!==e.value}))}(a,t.skillBonus):function(e){return e.filter((function(e){return 1!==e.value}))}(a)))},D=Object(c.b)((function(e){return{profession:e.profession.activeProfession,pickedTraits:e.traits.pickedTraits,name:e.description.name,sex:e.description.sex,height:e.description.height,heightFieldActive:e.description.heightFieldActive,age:e.description.age,ageFieldActive:e.description.ageFieldActive,nameFieldActive:e.description.nameFieldActive,statsList:e.stats.statsList,skills:e.skills.skillsList}}),(function(e){return{setName:function(t){e({type:"SET-NAME",name:t})},setSex:function(t){e({type:"SET-SEX",sex:t})},setHeight:function(t){e({type:"SET-HEIGHT",height:t})},setAge:function(t){e({type:"SET-AGE",age:t})},toggleField:function(t){e({type:"TOGGLE-FIELD",field:t})}}}))((function(e){var t=e.nameFieldActive,a=e.toggleField,n=e.setName,r=e.name,s=e.setSex,c=e.sex,o=e.heightFieldActive,l=e.setHeight,u=e.height,m=e.ageFieldActive,d=e.setAge,p=e.age,f=e.statsList,v=e.pickedTraits,E=e.profession,h=e.skills;return i.a.createElement("div",null,i.a.createElement("div",{className:C.a.anthropometric},i.a.createElement(I,{field:t,type:"String",valueName:"Name",fieldName:"nameFieldActive",toggleField:a,setValue:n,value:r}),i.a.createElement(w,{setSex:s,sex:c}),i.a.createElement(I,{field:o,type:"Number",valueName:"Height",fieldName:"heightFieldActive",toggleField:a,setValue:l,value:u}),i.a.createElement(I,{field:m,type:"Number",valueName:"Age",fieldName:"ageFieldActive",toggleField:a,setValue:d,value:p})),i.a.createElement("div",{className:C.a.environmental},i.a.createElement(H,{statsList:f}),i.a.createElement(x,{pickedTraits:v}),i.a.createElement(F,{profession:E}),i.a.createElement(V,{profession:E,skills:h})))}));var J=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement(d.a,{path:"/profession",render:function(){return i.a.createElement(g,null)}}),i.a.createElement(d.a,{path:"/stats",render:function(){return i.a.createElement(N,null)}}),i.a.createElement(d.a,{path:"/traits",render:function(){return i.a.createElement(L,null)}}),i.a.createElement(d.a,{path:"/skills",render:function(){return i.a.createElement(j,null)}}),i.a.createElement(d.a,{path:"/description",render:function(){return i.a.createElement(D,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(18),X={pointsLeft:8},K={professionList:[{Ninja:{name:"Ninja",cost:3,description:"A shadow warrior from feudal Japan",skillBonus:[{name:"melee",value:2}],wield:"katana",appearence:["tabi","kimono","mask"],inventory:["smoke grenades","kunai","sushi"]}},{Hobo:{name:"Hobo",cost:1,description:"A man, who chose freedom instead living in society",skillBonus:[{name:"tailoring",value:1},{name:"crafting",value:2}],wield:null,appearence:["shirt","shorts","shoes"],inventory:["cigarettes","15 cents","pocket knife"]}}],activeProfession:null},W={statsList:[{name:"strength",value:8,description:"strength descr"},{name:"dexterity",value:8,description:"dexterity descr"},{name:"intelligence",value:8,description:"intelligence descr"},{name:"perception",value:8,description:"perception descr"}],activeStat:null},Z=a(30),z={goodTraitsList:[{name:"fast",cost:3,description:"do some fasty"},{name:"willpower",cost:2,description:"do some willpowery"},{name:"religious",cost:1,description:"do some religiously"}],badTraitsList:[{name:"albino",cost:-1,description:"do some albiny"},{name:"asthma",cost:-3,description:"do some asthmy"},{name:"insomnia",cost:-2,description:"do some insomny"}],activeTrait:null,pickedTraits:[]},Q={skillsList:[{name:"melee",value:1,description:"melee descr"},{name:"crafting",value:1,description:"crafting descr"},{name:"tailoring",value:1,description:"tailoring descr"},{name:"medicine",value:1,description:"medicine descr"}],activeSkill:null},U={name:"/click to enter name/",nameFieldActive:!1,sex:"",height:175,heightFieldActive:!1,age:25,ageFieldActive:!1},Y=Object(R.b)({header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-POINTS":return Object(B.a)(Object(B.a)({},e),{},{pointsLeft:e.pointsLeft+t.value});default:return e}},profession:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVATE-PROFESSION":return Object(B.a)(Object(B.a)({},e),{},{activeProfession:t.profession});default:return e}},stats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-STAT":var a=JSON.parse(JSON.stringify(e));return a.statsList.forEach((function(e){e.name===t.stat&&(e.value+=t.value)})),a;case"ACTIVATE-STAT":return Object(B.a)(Object(B.a)({},e),{},{activeStat:t.stat});default:return e}},traits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVATE-TRAIT":return Object(B.a)(Object(B.a)({},e),{},{activeTrait:t.trait});case"TOGGLE-TRAIT-PICK":var a=t.trait,n=e.pickedTraits.some((function(e){return e===a}));if(n){var i=e.pickedTraits.filter((function(e){return e!==a}));return Object(B.a)(Object(B.a)({},e),{},{pickedTraits:i})}return Object(B.a)(Object(B.a)({},e),{},{pickedTraits:[].concat(Object(Z.a)(e.pickedTraits),[t.trait])});default:return e}},skills:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-SKILL":var a=JSON.parse(JSON.stringify(e));return a.skillsList.forEach((function(e){e.name===t.skill&&(e.value+=t.value)})),a;case"ACTIVATE-SKILL":return Object(B.a)(Object(B.a)({},e),{},{activeSkill:t.skill});default:return e}},description:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-NAME":return Object(B.a)(Object(B.a)({},e),{},{name:t.name});case"SET-SEX":return Object(B.a)(Object(B.a)({},e),{},{sex:t.sex});case"SET-HEIGHT":return t.height>200?Object(B.a)(Object(B.a)({},e),{},{height:200}):t.height<140?Object(B.a)(Object(B.a)({},e),{},{height:140}):Object(B.a)(Object(B.a)({},e),{},{height:t.height});case"SET-AGE":return t.age<16?Object(B.a)(Object(B.a)({},e),{},{age:16}):t.age>60?Object(B.a)(Object(B.a)({},e),{},{age:60}):Object(B.a)(Object(B.a)({},e),{},{age:t.age});case"TOGGLE-FIELD":return Object(B.a)(Object(B.a)({},e),{},Object(G.a)({},t.field,!e[t.field]));default:return e}}}),q=Object(R.c)(Y);window.store=q;var $=q;s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,null,i.a.createElement(c.a,{store:$},i.a.createElement(J,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={element:"professionDescription_element__3CzZh",cyan:"professionDescription_cyan__322Yv",blue:"professionDescription_blue__4M0WX"}}},[[31,1,2]]]);
//# sourceMappingURL=main.cb15fcd0.chunk.js.map