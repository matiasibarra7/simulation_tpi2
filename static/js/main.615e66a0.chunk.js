(this["webpackJsonptpi2-simulacion"]=this["webpackJsonptpi2-simulacion"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),o=c.n(a),l=c(2),r=(c(9),c(0));var d=function(){var e=Object(n.useState)(7),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),o=Object(l.a)(a,2),d=o[0],j=o[1],i=Object(n.useState)(40),b=Object(l.a)(i,2),h=b[0],p=b[1],u=Object(n.useState)(30),O=Object(l.a)(u,2),v=O[0],x=O[1],g=Object(n.useState)(null),m=Object(l.a)(g,2),y=m[0],E=m[1],S=[],f=0,V=3,k=7,A=10,D=0,P=0,C=0,J=0,L=0,M=0,N=0,R=0,T=[],w=0,F=0,I=0,K=0,$=2720,q=0,G=0,H=40,z=[1,4,6],B={1:"Lunes",2:"Martes",3:"Mi\xe9rcoles",4:"Jueves",5:"Viernes",6:"S\xe1bado",0:"Domingo"};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"TPI2 - Simulaci\xf3n"}),Object(r.jsx)("input",{type:"number",value:c,onChange:function(e){return s(e.target.value)},min:"1"}),Object(r.jsx)("input",{type:"button",value:"Realizar simulaci\xf3n",onClick:function(){function e(e){var t,c=0;if(T.length){for(var n=0;n<T.length;n++)c+=T[n];c=Math.round(c/T.length),console.log("El promedio de ventas perdidas es de ".concat(c))}t=1===e?h:v;var s=Math.round(c/2)-H;return t+s>0?t+s:0}function t(){var e=Math.random();return e>=0&&e<.054?11:e>=.054&&e<.14?12:e>=.14&&e<.249?13:e>=.249&&e<.412?14:e>=.412&&e<.564?15:e>=.564&&e<.738?16:e>=.738&&e<.858?17:e>=.858&&e<.923?18:e>=.923&&e<.977?19:e>=.977&&e<1?20:void 0}for(var n=1;n<=c;n++){switch(console.log("ESTE ES EL ARREGLO DE VENTAS PERDIDAS",T),f++,console.log("Hoy es d\xeda ".concat(n," ").concat(B[f])),n){case V:console.log("Venc\xedo tu pan del lunes"),!J>=D&&(H-=D-J>0?D-J:0);break;case k:console.log("Venc\xedo tu pan del jueves"),!L>=P&&(H-=P-L>0?P-L:0);break;case A:console.log("Venc\xedo tu pan del s\xe1bado"),!M>=C&&(H-=C-M>0?C-M:0)}if(z.includes(f))switch(console.log("Hoy se compra paaaaaaaaaaan"),R=e(f),console.log("CA GENERADOOOOOOO",R),R>0&&(N+=650,$+=68*R),f){case 1:V=n+3,J=0,H+=D=R;break;case 4:k=n+3,L=0,H+=P=R;break;case 6:A=n+3,M=0,H+=C=R}w=t(),console.log("hoy se vendi\xf3 ".concat(w," Kg de pan")),w<=H?(H-=w,F+=w):(K=w-H,console.log("st: ",H),T.push(K),F+=H,H=0,G+=K,q+=I+=60*K),J+=F,L+=F,M+=F,f>=7&&(f=0);var s={t:n,day:B[f],vd:w,vpl:V,vpj:k,vps:A,vpArray:T,ca:R,st:H,pl:D,pj:P,ps:C};S.push(s),console.log("--------------------------------"),console.log("vpArray",T),console.log("--------------------------------")}console.log("El costo total de compra de pan es: $".concat($)),console.log("El total de pan vendido es: ".concat(F," Kg")),console.log("El total de pan perdido es: ".concat(G," Kg")),console.log("El costo total de venta p\xe9rdida es: $".concat(q)),console.log("El costo de b\xfasqueda total: $".concat(N)),E({ctcp:$,pv:F,tpvp:G,tcvp:q,cbp:N}),j(S)}}),Object(r.jsxs)("div",{style:{margin:"1rem"},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{style:{margin:"0 1rem"},children:"Pan a reponer los Lunes"}),Object(r.jsx)("input",{type:"number",onChange:function(e){return p(Number(e.target.value))},value:h})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{style:{margin:"0 1rem"},children:"Pan a reponer los Jueves y S\xe1bados"}),Object(r.jsx)("input",{type:"number",onChange:function(e){return x(Number(e.target.value))},value:v})]})]}),Object(r.jsx)("div",{className:"result-container",children:y?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Resultados"})}),Object(r.jsxs)("div",{children:["El costo total de compra de pan: ",y.ctcp]}),Object(r.jsxs)("div",{children:["Total de pan vendido: ",y.pv]}),Object(r.jsxs)("div",{children:["Total de pan perdido: ",y.tpvp]}),Object(r.jsxs)("div",{children:["Costo total de venta p\xe9rdida: ",y.tcvp]}),Object(r.jsxs)("div",{children:["Costo de b\xfasqueda total : ",y.cbp]})]}),Object(r.jsxs)("table",{style:{margin:"1rem auto"},children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"D\xeda nro"}),Object(r.jsx)("th",{children:"D\xeda de la semana"}),Object(r.jsx)("th",{children:"Venta Diaria"}),Object(r.jsx)("th",{children:"Pan Lunes"}),Object(r.jsx)("th",{children:"Vto. pan Lunes"}),Object(r.jsx)("th",{children:"Pan Jueves"}),Object(r.jsx)("th",{children:"Vto. pan Jueves"}),Object(r.jsx)("th",{children:"Pan S\xe1bado"}),Object(r.jsx)("th",{children:"Vto. pan S\xe1bado"}),Object(r.jsx)("th",{children:"Stock/Final d\xeda"}),Object(r.jsx)("th",{children:"Pan comprado hoy"})]})}),Object(r.jsx)("tbody",{children:d.length?d.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.t}),Object(r.jsx)("td",{children:e.day}),Object(r.jsx)("td",{children:e.vd}),Object(r.jsx)("td",{children:e.pl}),Object(r.jsx)("td",{children:e.vpl}),Object(r.jsx)("td",{children:e.pj}),Object(r.jsx)("td",{children:e.vpj}),Object(r.jsx)("td",{children:e.ps}),Object(r.jsx)("td",{children:e.vps}),Object(r.jsx)("td",{children:e.st}),Object(r.jsx)("td",{children:e.ca})]},t)})):Object(r.jsx)(r.Fragment,{})})]})]}):Object(r.jsx)(r.Fragment,{})})]})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.615e66a0.chunk.js.map