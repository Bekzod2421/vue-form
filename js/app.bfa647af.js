(function(){"use strict";var e={8086:function(e,n,t){var l=t(9242),i=t(3396);const o={class:"container"};function r(e,n,t,l,r,u){const s=(0,i.up)("Sup");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(s)])}var u=t(7139);const s={action:"",class:"sup"},a=(0,i._)("label",{for:""},"Email",-1),c=(0,i._)("label",{for:""},"Password",-1),p=(0,i._)("label",{for:""}," Select course",-1),d=(0,i._)("option",{value:"dev"},"Web Developer",-1),f=(0,i._)("option",{value:"des"},"Web Designer",-1),k=[d,f],m=(0,i._)("label",{for:""},"Terms of using",-1),v=(0,i._)("label",{for:""},"Skils",-1),h={class:"block"},w=["skil"],y=["onClick"],_={class:"text"},b={class:"text"},g={class:"text"},x={class:"text"},O={class:"text"};function U(e,n,t,o,r,d){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("form",s,[a,(0,i.wy)((0,i._)("input",{type:"email",required:"","onUpdate:modelValue":n[0]||(n[0]=e=>r.email=e)},null,512),[[l.nr,r.email]]),c,(0,i.wy)((0,i._)("input",{type:"password",required:"","onUpdate:modelValue":n[1]||(n[1]=e=>r.code=e)},null,512),[[l.nr,r.code]]),p,(0,i.wy)((0,i._)("select",{name:"",id:"","onUpdate:modelValue":n[2]||(n[2]=e=>r.kurs=e)},k,512),[[l.bM,r.kurs]]),(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":n[3]||(n[3]=e=>r.terms=e)},null,512),[[l.e8,r.terms]]),m]),(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":n[4]||(n[4]=e=>r.like=e),value:"ok"},null,512),[[l.e8,r.like]]),(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":n[5]||(n[5]=e=>r.like=e),value:"yes"},null,512),[[l.e8,r.like]]),(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=e=>r.like=e),value:"ye"},null,512),[[l.e8,r.like]]),(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=e=>r.like=e),value:"no"},null,512),[[l.e8,r.like]]),v,(0,i.wy)((0,i._)("input",{type:"text",onKeyup:n[8]||(n[8]=(0,l.iM)(((...e)=>d.skil&&d.skil(...e)),["alt"])),"onUpdate:modelValue":n[9]||(n[9]=e=>r.skilName=e)},null,544),[[l.nr,r.skilName]]),(0,i._)("div",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.skils,(e=>((0,i.wg)(),(0,i.iD)("div",{skil:e},[(0,i._)("span",{onClick:n=>d.del(e)},(0,u.zw)(e),9,y)],8,w)))),256))])]),(0,i._)("p",_,"Email: "+(0,u.zw)(r.email),1),(0,i._)("p",b,"Password: "+(0,u.zw)(r.code),1),(0,i._)("p",g,"Course: "+(0,u.zw)(r.kurs),1),(0,i._)("p",x,"Terms of using "+(0,u.zw)(r.terms),1),(0,i._)("p",O,"Like "+(0,u.zw)(r.like),1)],64)}var V={data(){return{email:"Bek",code:"",kurs:"des",terms:!0,like:[],skilName:"",skils:[]}},methods:{skil(e){","===e.key&&(","===this.skilName||this.skils.includes(this.skilName)||this.skils.push(this.skilName),this.skilName="")},del(e){this.skils=this.skils.filter((n=>e!==n))}}},N=t(89);const j=(0,N.Z)(V,[["render",U]]);var z=j,D={name:"App",components:{Sup:z}};const C=(0,N.Z)(D,[["render",r]]);var P=C;(0,l.ri)(P).mount("#app")}},n={};function t(l){var i=n[l];if(void 0!==i)return i.exports;var o=n[l]={exports:{}};return e[l](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,l,i,o){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],i=e[c][1],o=e[c][2];for(var u=!0,s=0;s<l.length;s++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[s])}))?l.splice(s--,1):(u=!1,o<r&&(r=o));if(u){e.splice(c--,1);var a=i();void 0!==a&&(n=a)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var i,o,r=l[0],u=l[1],s=l[2],a=0;if(r.some((function(n){return 0!==e[n]}))){for(i in u)t.o(u,i)&&(t.m[i]=u[i]);if(s)var c=s(t)}for(n&&n(l);a<r.length;a++)o=r[a],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},l=self["webpackChunkvue_form"]=self["webpackChunkvue_form"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(8086)}));l=t.O(l)})();
//# sourceMappingURL=app.bfa647af.js.map