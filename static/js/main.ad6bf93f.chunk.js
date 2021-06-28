(this["webpackJsonptpi2-simulacion"]=this["webpackJsonptpi2-simulacion"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),i=c.n(a),r=c(2),j=(c(9),c(0));var d=function(){var e=Object(s.useState)(7),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(r.a)(a,2),d=i[0],l=i[1],o=Object(s.useState)(40),b=Object(r.a)(o,2),h=b[0],x=b[1],u=Object(s.useState)(30),O=Object(r.a)(u,2),p=O[0],v=O[1],m=Object(s.useState)([]),g=Object(r.a)(m,2),f=g[0],N=g[1],M=Object(s.useState)([]),F=Object(r.a)(M,2),y=F[0],C=F[1],S=Object(s.useState)([]),q=Object(r.a)(S,2),P=q[0],I=q[1],k=Object(s.useState)([]),w=Object(r.a)(k,2),V=w[0],A=w[1],D=Object(s.useState)([]),J=Object(r.a)(D,2),T=J[0],z=J[1],L=Object(s.useState)(null),R=Object(r.a)(L,2),E=R[0],K=R[1];function $(){var e=[],t=0,s=3,n=7,a=10,i=0,r=0,j=0,d=0,o=0,b=0,x=0,u=0,O=[],v=0,m=0,g=0,f=0,N=2720,M=0,F=0,y=40,C=[1,4,6],S={1:"Lunes",2:"Martes",3:"Mi\xe9rcoles",4:"Jueves",5:"Viernes",6:"S\xe1bado",0:"Domingo"};function q(e){var t,c=0;if(O.length){for(var s=0;s<O.length;s++)c+=O[s];c=Math.round(c/O.length)}t=1===e?h:p;var n=Math.round(c/2)-y;return t+n>0?t+n:0}function P(){var e=Math.random();return e>=0&&e<.054?11:e>=.054&&e<.14?12:e>=.14&&e<.249?13:e>=.249&&e<.412?14:e>=.412&&e<.564?15:e>=.564&&e<.738?16:e>=.738&&e<.858?17:e>=.858&&e<.923?18:e>=.923&&e<.977?19:e>=.977&&e<1?20:void 0}for(var I=1;I<=c;I++){switch(t++,I){case s:!d>=i&&(y-=i-d>0?i-d:0);break;case n:!o>=r&&(y-=r-o>0?r-o:0);break;case a:!b>=j&&(y-=j-b>0?j-b:0)}if(C.includes(t))switch((u=q(t))>0&&(x+=650,N+=68*u),t){case 1:s=I+3,d=0,y+=i=u;break;case 4:n=I+3,o=0,y+=r=u;break;case 6:a=I+3,b=0,y+=j=u}(v=P())<=y?(y-=v,m+=v):(f=v-y,O.push(f),m+=y,y=0,F+=f,M+=g+=60*f),d+=m,o+=m,b+=m,t>=7&&(t=0);var k={t:I,day:S[t],vd:v,vpl:s,vpj:n,vps:a,vpArray:O,ca:u,st:y,pl:i,pj:r,ps:j};e.push(k)}var w={ctcp:N,pv:m,tpvp:F,tcvp:M,cbp:x};return K(w),l(e),w}return Object(j.jsxs)("div",{className:"App container",children:[Object(j.jsx)("h1",{className:"mt-5",children:"TPI2 - Simulaci\xf3n"}),Object(j.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(j.jsx)("h4",{children:"Datos de entrada"}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("span",{className:"input-group-text",children:"D\xedas de la simulaci\xf3n"}),Object(j.jsx)("input",{type:"number",className:"form-control",value:c,onChange:function(e){return n(e.target.value)},min:"1"})]})})]}),Object(j.jsxs)("div",{className:"row d-flex justify-content-center mt-4",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("span",{className:"input-group-text",children:"Pan a reponer los Lunes"}),Object(j.jsx)("input",{type:"number",className:"form-control",onChange:function(e){return x(Number(e.target.value))},value:h})]})}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("span",{className:"input-group-text",children:"Pan a reponer los Jueves y S\xe1bados"}),Object(j.jsx)("input",{type:"number",className:"form-control",onChange:function(e){return v(Number(e.target.value))},value:p})]})})]}),Object(j.jsxs)("div",{className:"d-flex p-2 justify-content-center mb-3 mt-3",children:[Object(j.jsx)("input",{type:"button",className:"btn btn-primary mx-2",value:"Realizar una corrida",onClick:$}),Object(j.jsx)("input",{type:"button",className:"btn btn-primary mx-2",value:"Realizar replicas",onClick:function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e4,t=[],c=0;c<e;c++)t.push($());N(t),console.log(t)}()}})]}),f.length?Object(j.jsxs)("div",{className:"container ic-container",children:[Object(j.jsx)("h4",{className:"mt-2",children:"Intervalos de confianza"}),Object(j.jsx)("input",{type:"button",className:"btn btn-success m-2",value:"Obtener intervalos de confianza",onClick:function(){return function(){for(var e=0,t=0,c=0,s=0,n=f.length,a=0;a<n;a++)e+=f[a].tpvp,t+=f[a].tcvp,c+=f[a].ctcp,s+=f[a].pv;e/=n,t/=n,c/=n,s/=n;for(var i=0,r=0,j=0,d=0,l=0;l<n;l++)i+=Math.pow(f[l].tpvp-e,2),r+=Math.pow(f[l].tcvp-t,2),j+=Math.pow(f[l].ctcp-c,2),d+=Math.pow(f[l].pv-s,2);var o=Math.sqrt(1/(n-1)*i),b=Math.sqrt(1/(n-1)*r),h=Math.sqrt(1/(n-1)*j),x=Math.sqrt(1/(n-1)*d),u=[],O=[],p=[],v=[],m=e-o/Math.sqrt(.05*n),g=e+o/Math.sqrt(.05*n),N=t-b/Math.sqrt(.05*n),M=t+b/Math.sqrt(.05*n),F=c-h/Math.sqrt(.05*n),y=c+h/Math.sqrt(.05*n),S=s-x/Math.sqrt(.05*n),q=s+x/Math.sqrt(.05*n);u.push(m),u.push(g),O.push(N),O.push(M),p.push(F),p.push(y),v.push(S),v.push(q),C(u),I(O),A(p),z(v),console.log(u),console.log(O),console.log(p),console.log(v)}()}}),y.length?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"p-2",children:[Object(j.jsx)("span",{className:"alpha-aclaration",children:"Alpha utilizado: 0.05"}),Object(j.jsxs)("div",{className:"m-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)("b",{children:"TPVP (Kg):"})}),Object(j.jsx)("div",{children:"IC: [".concat(y[0].toFixed(4)," - ").concat(y[1].toFixed(4),"]")}),Object(j.jsx)("div",{children:"Media: ".concat(((y[1]+y[0])/2).toFixed(4))}),Object(j.jsx)("div",{children:"Amplitud del IC: ".concat((y[1]-y[0]).toFixed(4))})]}),Object(j.jsxs)("div",{className:"m-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)("b",{children:"PV (Kg):"})}),Object(j.jsx)("div",{children:"IC: [".concat(T[0].toFixed(4)," - ").concat(T[1].toFixed(4),"]")}),Object(j.jsx)("div",{children:"Media: ".concat(((T[1]+T[0])/2).toFixed(4))}),Object(j.jsx)("div",{children:"Amplitud del IC: ".concat((T[1]-T[0]).toFixed(4))})]}),Object(j.jsxs)("div",{className:"m-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)("b",{children:"TCVP ($):"})}),Object(j.jsx)("div",{children:"IC: [".concat(P[0].toFixed(4)," - ").concat(P[1].toFixed(4),"]")}),Object(j.jsx)("div",{children:"Media: ".concat(((P[1]+P[0])/2).toFixed(4))}),Object(j.jsx)("div",{children:"Amplitud del IC: ".concat((P[1]-P[0]).toFixed(4))})]}),Object(j.jsxs)("div",{className:"m-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)("b",{children:"CTCP ($):"})}),Object(j.jsx)("div",{children:"IC: [".concat(V[0].toFixed(4)," - ").concat(V[1].toFixed(4),"]")}),Object(j.jsx)("div",{children:"Media: ".concat(((V[1]+V[0])/2).toFixed(4))}),Object(j.jsx)("div",{children:"Amplitud del IC: ".concat((V[1]-V[0]).toFixed(4))})]})]})}):Object(j.jsx)(j.Fragment,{})]}):Object(j.jsx)(j.Fragment,{}),Object(j.jsx)("div",{className:"mt-4"}),E?Object(j.jsxs)("div",{className:"result-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Resultados de la \xfaltima r\xe9plica"}),Object(j.jsxs)("div",{children:["El costo total de compra de pan: ",E.ctcp]}),Object(j.jsxs)("div",{children:["Total de pan vendido: ",E.pv]}),Object(j.jsxs)("div",{children:["Total de pan perdido: ",E.tpvp]}),Object(j.jsxs)("div",{children:["Costo total de venta p\xe9rdida: ",E.tcvp]}),Object(j.jsxs)("div",{children:["Costo de b\xfasqueda total : ",E.cbp]})]}),Object(j.jsxs)("table",{style:{margin:"1rem auto"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"D\xeda nro"}),Object(j.jsx)("th",{children:"D\xeda de la semana"}),Object(j.jsx)("th",{children:"Venta Diaria"}),Object(j.jsx)("th",{children:"Pan Lunes"}),Object(j.jsx)("th",{children:"Vto. pan Lunes"}),Object(j.jsx)("th",{children:"Pan Jueves"}),Object(j.jsx)("th",{children:"Vto. pan Jueves"}),Object(j.jsx)("th",{children:"Pan S\xe1bado"}),Object(j.jsx)("th",{children:"Vto. pan S\xe1bado"}),Object(j.jsx)("th",{children:"Stock/Final d\xeda"}),Object(j.jsx)("th",{children:"Pan comprado hoy"})]})}),Object(j.jsx)("tbody",{children:d.length?d.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.t}),Object(j.jsx)("td",{children:e.day}),Object(j.jsx)("td",{children:e.vd}),Object(j.jsx)("td",{children:e.pl}),Object(j.jsx)("td",{children:e.vpl}),Object(j.jsx)("td",{children:e.pj}),Object(j.jsx)("td",{children:e.vpj}),Object(j.jsx)("td",{children:e.ps}),Object(j.jsx)("td",{children:e.vps}),Object(j.jsx)("td",{children:e.st}),Object(j.jsx)("td",{children:e.ca})]},t)})):Object(j.jsx)(j.Fragment,{})})]})]}):Object(j.jsx)(j.Fragment,{})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.ad6bf93f.chunk.js.map