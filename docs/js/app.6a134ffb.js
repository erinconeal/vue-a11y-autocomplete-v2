(function(e){function n(n){for(var o,i,d=n[0],s=n[1],r=n[2],m=0,l=[];m<d.length;m++)i=d[m],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(n);while(l.length)l.shift()();return c.push.apply(c,r||[]),a()}function a(){for(var e,n=0;n<c.length;n++){for(var a=c[n],o=!0,d=1;d<a.length;d++){var s=a[d];0!==t[s]&&(o=!1)}o&&(c.splice(n--,1),e=i(i.s=a[0]))}return e}var o={},t={app:0},c=[];function i(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,n,a){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(a,o,function(n){return e[n]}.bind(null,o));return a},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/vue-a11y-autocomplete-v2/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var r=0;r<d.length;r++)n(d[r]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("cd49")},"596f":function(e,n,a){"use strict";a("c8a0")},c8a0:function(e,n,a){},cd49:function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function t(e,n){var a=Object(o["u"])("router-view");return Object(o["n"])(),Object(o["d"])(a)}a("def4");const c={};c.render=t;var i=c,d=a("6c02"),s=a("cf05"),r=a.n(s),u={class:"home"},m=Object(o["e"])("img",{alt:"Vue logo",src:r.a},null,-1);function l(e,n,a,t,c,i){var d=Object(o["u"])("Autocomplete");return Object(o["n"])(),Object(o["d"])("div",u,[m,Object(o["e"])(d)])}a("b0c0");var p=Object(o["B"])("data-v-7201ab94");Object(o["q"])("data-v-7201ab94");var h={class:"hello"},b=Object(o["e"])("h1",null,"vue-a11y-autocomplete",-1),f={class:"container"},O=Object(o["e"])("label",{for:"destination"},[Object(o["e"])("span",null,"Destination")],-1),y={class:"autocomplete mt-1"},M=Object(o["e"])("g",null,[Object(o["e"])("polygon",{points:"0 0 22 0 11 17"})],-1),x={key:1,id:"autocomplete-option--NoResults"},T={"aria-live":"polite",role:"status",class:"visually-hidden"},C={key:0},S={key:1};Object(o["o"])();var v=p((function(e,n,a,t,c,i){return Object(o["n"])(),Object(o["d"])("div",h,[b,Object(o["e"])("div",f,[O,Object(o["e"])("div",y,[Object(o["A"])(Object(o["e"])("input",{"aria-owns":"autocomplete-options--destination",autocapitalize:"none",type:"text",autocomplete:"off","aria-autocomplete":"list",role:"combobox",id:"destination","aria-expanded":e.menuOpen?"true":"false",ref:"destination",onKeyup:n[1]||(n[1]=function(){return e.onTextBoxKeyUp&&e.onTextBoxKeyUp.apply(e,arguments)}),onKeydown:n[2]||(n[2]=function(){return e.onTextBoxKeyDown&&e.onTextBoxKeyDown.apply(e,arguments)}),onClick:n[3]||(n[3]=function(){return e.onTextBoxClick&&e.onTextBoxClick.apply(e,arguments)}),onFocus:n[4]||(n[4]=function(){return e.onTextBoxFocus&&e.onTextBoxFocus.apply(e,arguments)}),"onUpdate:modelValue":n[5]||(n[5]=function(n){return e.inputValue=n}),class:{"autocomplete-isInputFieldFocused":e.isInputFieldFocused}},null,42,["aria-expanded"]),[[o["y"],e.inputValue]]),(Object(o["n"])(),Object(o["d"])("svg",{focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",onClick:n[6]||(n[6]=function(){return e.onArrowClick&&e.onArrowClick.apply(e,arguments)})},[M])),Object(o["e"])("ul",{id:"autocomplete-options--destination",role:"listbox",class:{hidden:!e.menuOpen},onKeydown:n[7]||(n[7]=function(){return e.onMenuKeyDown&&e.onMenuKeyDown.apply(e,arguments)})},[e.results.length?(Object(o["n"])(!0),Object(o["d"])(o["a"],{key:0},Object(o["t"])(e.results,(function(n,a){return Object(o["n"])(),Object(o["d"])("li",{key:n.code,role:"option",tabindex:"-1","aria-selected":a===e.indexCounter,ref:"autocomplete-option-index--".concat(a),onClick:function(a){return e.onOptionClick(n)}},Object(o["w"])(n.name),9,["aria-selected","onClick"])})),128)):(Object(o["n"])(),Object(o["d"])("li",x,"No results"))],34),Object(o["e"])("div",T,[0===e.results.length?(Object(o["n"])(),Object(o["d"])("span",C,"No results.")):(Object(o["n"])(),Object(o["d"])("span",S,Object(o["w"])(e.results.length)+" results available. ",1))])]),Object(o["e"])("button",{type:"button",onClick:n[8]||(n[8]=function(){return e.submit&&e.submit.apply(e,arguments)}),class:"btn mt-3"},"Submit")])])})),g=(a("4de4"),a("7db0"),a("caad"),a("d3b7"),a("2532"),a("ddb0"),[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]),B=g,k=Object(o["f"])({name:"Autcomplete",data:function(){return{keys:{enter:"Enter",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",tab:"Tab",left:"ArrowLeft",right:"ArrowRight"},inputValue:"",isInputFieldFocused:!1,menuOpen:!1,results:[],indexCounter:-1}},methods:{submit:function(){var e=this,n=B.find((function(n){return n.name===e.inputValue}));n?alert("Submitting country ".concat(n.name)):alert("Please submit a valid country from the autocomplete.")},onMenuKeyDown:function(e){switch(e.code){case this.keys.up:this.onOptionUpArrow(e);break;case this.keys.down:this.onOptionDownArrow(e);break;case this.keys.enter:this.onOptionEnter(e);break;case this.keys.space:this.onOptionSpace(e);break;case this.keys.esc:this.onOptionEscape();break;case this.keys.tab:this.hideMenu(),this.removeTextBoxFocus();break;default:this.focusTextBox()}},onOptionEnter:function(e){this.inputValue=this.results[this.indexCounter].name,this.hideMenu(),this.focusTextBox(),e.preventDefault()},onOptionSpace:function(e){this.inputValue=this.results[this.indexCounter].name,this.hideMenu(),this.focusTextBox(),e.preventDefault()},onOptionEscape:function(){this.clearOptions(),this.hideMenu(),this.focusTextBox()},onOptionDownArrow:function(e){var n=this;this.indexCounter<this.results.length-1&&(this.indexCounter=this.indexCounter+1,this.$nextTick((function(){n.$refs["autocomplete-option-index--".concat(n.indexCounter)].focus()}))),e.preventDefault()},onOptionUpArrow:function(e){var n=this;this.indexCounter>0?(this.indexCounter=this.indexCounter-1,this.$nextTick((function(){n.$refs["autocomplete-option-index--".concat(n.indexCounter)].focus()}))):(this.focusTextBox(),this.hideMenu()),e.preventDefault()},onTextBoxKeyUp:function(e){if(!e.shiftKey)switch(e.code){case this.keys.esc:case this.keys.up:case this.keys.left:case this.keys.right:case this.keys.space:case this.keys.enter:case this.keys.tab:break;case this.keys.down:this.onTextBoxDownPressed(e);break;default:this.onTextBoxType()}},onTextBoxKeyDown:function(e){switch(e.code){case this.keys.tab:this.hideMenu(),this.removeTextBoxFocus();break;default:this.focusTextBox()}},onTextBoxDownPressed:function(e){var n=this.getOptions();this.buildMenu(n),this.showMenu(),this.onOptionDownArrow(e)},onTextBoxType:function(){var e=this.getOptions();this.buildMenu(e),this.showMenu()},getOptions:function(){var e=this;return B.filter((function(n){return n.name.toLowerCase().includes(e.inputValue.toLowerCase())}))},buildMenu:function(e){this.clearOptions(),this.results=e,this.$nextTick((function(){document.getElementById("autocomplete-options--destination").scrollTop=0}))},showMenu:function(){this.menuOpen=!0},hideMenu:function(){this.menuOpen=!1,this.indexCounter=-1,this.clearOptions()},clearOptions:function(){this.results=[]},removeTextBoxFocus:function(){this.isInputFieldFocused=!1},onTextBoxFocus:function(){this.isInputFieldFocused=!0},focusTextBox:function(){this.$refs.destination.focus()},onOptionClick:function(e){this.inputValue=e.name,this.hideMenu(),this.focusTextBox()},onDocumentClick:function(e){return e.target.closest("div.autocomplete")?e:(this.hideMenu(),this.removeTextBoxFocus(),null)},onTextBoxClick:function(){this.clearOptions();var e=this.getOptions();this.buildMenu(e),this.showMenu()},onArrowClick:function(){this.clearOptions();var e=this.getOptions();this.buildMenu(e),this.showMenu(),this.focusTextBox()}},mounted:function(){document.addEventListener("click",this.onDocumentClick)},beforeUnmount:function(){document.removeEventListener("click",this.onDocumentClick)}});a("596f");k.render=v,k.__scopeId="data-v-7201ab94";var w=k,A=Object(o["f"])({name:"Home",components:{Autocomplete:w}});A.render=l;var j=A,I=[{path:"/",name:"Home",component:j}],G=Object(d["a"])({history:Object(d["b"])("/vue-a11y-autocomplete-v2/"),routes:I}),P=G;Object(o["c"])(i).use(P).mount("#app")},cf05:function(e,n,a){e.exports=a.p+"img/logo.82b9c7a5.png"},def4:function(e,n,a){"use strict";a("fdec")},fdec:function(e,n,a){}});
//# sourceMappingURL=app.6a134ffb.js.map