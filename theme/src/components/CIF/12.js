(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{515:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return _}));var a,c=t(0),s=t.n(c),o=t(1),u=t(13),r=t.n(u),i=t(5),l=t.n(i),O=t(6),d=t.n(O),m=t(110),f=t(181),b=t(24),g=t(34),p=t(9),C=t.n(p),k=t(30),S={signOutMutation:Object(k.d)(a||(a=C()(["\n    mutation SignOutFromMenu {\n        revokeCustomerToken {\n            result\n        }\n    }\n"])))},h=t(501),j=t(449),I=t(132),A=t(35),N=t(445),w=function(e){var n=function(e){var n=e.onSignOut,t=Object(c.useCallback)((function(){n()}),[n]),a=Object(A.useConfigContext)().pagePaths;return{handleSignOut:t,menuItems:[{name:"Order History",id:"accountMenu.orderHistoryLink",url:a.orderHistory},{name:"Address Book",id:"accountMenu.addressBookLink",url:a.addressBook},{name:"Account Information",id:"accountMenu.accountInfoLink",url:a.accountDetails}]}}({onSignOut:e.onSignOut}),t=n.handleSignOut,a=n.menuItems,o=Object(b.default)(N.a,e.classes),u=a.map((function(e){return s.a.createElement("a",{className:o.link,key:e.name,href:e.url},s.a.createElement(I.a,{id:e.id,defaultMessage:e.name}))}));return s.a.createElement("div",{className:o.root},u,s.a.createElement("button",{className:o.signOut,onClick:t,type:"button"},s.a.createElement(I.a,{id:"accountMenu.signOutButtonText",defaultMessage:"Sign Out"})))},E=w;w.propTypes={classes:Object(o.shape)({link:o.string,signOut:o.string}),onSignOut:o.func};var M=t(497),v=t(446),T=s.a.forwardRef((function(e,n){var t=e.accountMenuIsOpen,a=function(e){var n=e.accountMenuIsOpen,t=e.setAccountMenuIsOpen,a=Object(b.default)(S,e.operations).signOutMutation,s=Object(c.useState)("SIGNIN"),o=l()(s,2),u=o[0],i=o[1],O=Object(c.useState)(""),p=l()(O,2),C=p[0],k=p[1],h=Object(m.f)(),j=Object(m.g)(),I=Object(f.a)(a),A=l()(I,1)[0],N=Object(g.b)(),w=l()(N,2),E=w[0].isSignedIn,M=w[1].signOut,v=Object(c.useCallback)(r()(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("SIGNIN"),t(!1),e.next=4,M({revokeToken:A});case 4:h.go(0);case 5:case"end":return e.stop()}}),e)}))),[h,A,t,M]),T=Object(c.useCallback)((function(){i("FORGOT_PASSWORD")}),[]),_=Object(c.useCallback)((function(){i("SIGNIN")}),[]),U=Object(c.useCallback)((function(){i("CREATE_ACCOUNT")}),[]),y=Object(c.useCallback)((function(){i("ACCOUNT")}),[]);return Object(c.useEffect)((function(){t(!1)}),[j,t]),Object(c.useEffect)((function(){i(E?"ACCOUNT":"SIGNIN")}),[n,E]),{handleAccountCreation:y,handleCreateAccount:U,handleForgotPassword:T,handleCancel:_,handleSignOut:v,updateUsername:k,username:C,view:u}}({accountMenuIsOpen:t,setAccountMenuIsOpen:e.setAccountMenuIsOpen}),o=a.view,u=a.username,i=a.handleAccountCreation,O=a.handleSignOut,p=a.handleForgotPassword,C=a.handleCancel,k=a.handleCreateAccount,I=a.updateUsername,A=Object(b.default)(v.a,e.classes),N=t?A.root_open:A.root,w=t?A.contents_open:A.contents,T=null;switch(o){case"ACCOUNT":T=s.a.createElement(E,{onSignOut:O});break;case"FORGOT_PASSWORD":T=s.a.createElement(M.a,{initialValues:{email:u},onCancel:C});break;case"CREATE_ACCOUNT":T=s.a.createElement(h.a,{classes:{root:A.createAccount},initialValues:{email:u},isCancelButtonHidden:!1,onSubmit:i,onCancel:C});break;case"SIGNIN":default:T=s.a.createElement(j.a,{classes:{modal_active:A.loading},setDefaultUsername:I,showCreateAccount:k,showForgotPassword:p})}return s.a.createElement("aside",{className:N},s.a.createElement("div",{ref:n,className:w},t?T:null))})),_=T;T.propTypes={classes:Object(o.shape)({root:o.string,root_open:o.string,link:o.string,contents_open:o.string,contents:o.string})}}}]);