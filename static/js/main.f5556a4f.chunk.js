(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{209:function(e,t,n){},224:function(e,t){},233:function(e,t){},251:function(e,t){},253:function(e,t){},270:function(e,t){},271:function(e,t){},335:function(e,t){},337:function(e,t){},346:function(e,t){},348:function(e,t){},373:function(e,t){},375:function(e,t){},376:function(e,t){},381:function(e,t){},383:function(e,t){},396:function(e,t){},408:function(e,t){},411:function(e,t){},416:function(e,t){},427:function(e,t){},430:function(e,t){},488:function(e,t,n){"use strict";n.r(t);var a,i,s=n(3),r=n.n(s),u=n(198),o=n.n(u),c=(n(209),n(210),n(31)),p=n(19),l=n.n(p),y=n(62),d=n(493),b=n(494),m=n(495),f=n(496),j=n(497),h=n(199),T=n.n(h),O=[{inputs:[{internalType:"uint256",name:"_initTokenPriceForEth",type:"uint256"},{internalType:"uint256",name:"_initTotalSupply",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenPriceForEth",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Sale",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_price",type:"uint256"}],name:"setTokenPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getTokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"transferd",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"sendTokensFromContractAddress",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"getBalanceContract",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"}],w=n(10),v=function(){var e=Object(y.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.methods.totalSupply().call());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(y.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.methods.balanceOf("0x61f60cb9bEE5c1106bC1e0c9227Bf4da0378cC35").call());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),n=t[0],r=t[1],u=Object(s.useState)(null),o=Object(c.a)(u,2),p=o[0],h=o[1],g=Object(s.useState)(null),M=Object(c.a)(g,2),k=M[0],C=M[1],S=Object(s.useState)(null),E=Object(c.a)(S,2),F=E[0],P=E[1],A=Object(s.useState)(null),_=Object(c.a)(A,2),B=(_[0],_[1],Object(s.useState)(null)),L=Object(c.a)(B,2),N=L[0],R=(L[1],Object(s.useState)(null)),I=Object(c.a)(R,2),J=I[0],V=I[1],X=Object(s.useState)(null),Z=Object(c.a)(X,2),D=Z[0],q=Z[1],z=function(){var e=Object(y.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0x61f60cb9bEE5c1106bC1e0c9227Bf4da0378cC35",a=new i.eth.Contract(O,"0x61f60cb9bEE5c1106bC1e0c9227Bf4da0378cC35"),e.t0=V,e.next=5,v();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=q,e.next=10,x();case 10:e.t3=e.sent,(0,e.t2)(e.t3);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){window.addEventListener("load",(function(){return"undefined"!==typeof window.web3?i=new T.a(window.web3.currentProvider):a=null,console.log(i),i&&z()}))}),[]);var G=function(){var e=Object(y.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(p),console.log(F),console.log(a),e.next=5,a.methods.owner().call();case 5:n=e.sent,console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.a,{fluid:!0,children:Object(w.jsxs)(b.a,{children:[Object(w.jsx)("h1",{children:"XZT"}),Object(w.jsx)("p",{children:"total balance of tokens-".concat(J)}),Object(w.jsx)("p",{children:" total contract balance-".concat(D)}),Object(w.jsx)("p",{children:"user balance-".concat(N)})]})}),Object(w.jsxs)("div",{children:[Object(w.jsxs)(m.a,{className:"mb-3",children:[Object(w.jsx)(f.a,{onChange:function(e){return r(e.target.value)},value:n,placeholder:"change the address of the owner of the contract","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(w.jsx)(m.a.Append,{children:Object(w.jsx)(j.a,{onClick:function(e){a.methods.transferOwnership(n).call()},variant:"outline-secondary",children:"change owner"})})]}),Object(w.jsxs)(m.a,{className:"mb-3",children:[Object(w.jsx)(m.a.Prepend,{children:Object(w.jsx)(f.a,{onChange:function(e){return P(e.target.value)},value:F,placeholder:"amount XZT","aria-label":"Amount (to the nearest dollar)"})}),Object(w.jsx)(f.a,{onChange:function(e){return h(e.target.value)},value:p,placeholder:"transfer tokens to address","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(w.jsx)(m.a.Append,{children:Object(w.jsx)(j.a,{onClick:G,variant:"outline-secondary",children:"transfer tokens"})})]}),Object(w.jsxs)(m.a,{className:"mb-3",children:[Object(w.jsx)(f.a,{onChange:function(e){return C(e.target.value)},value:k,placeholder:"change token price","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(w.jsx)(m.a.Append,{children:Object(w.jsx)(j.a,{onClick:function(e){a.methods.setTokenPrice(k).call()},variant:"outline-secondary",children:"change price"})})]})]})]})};var M=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(g,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,498)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root")),k()}},[[488,1,2]]]);
//# sourceMappingURL=main.f5556a4f.chunk.js.map