(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Cxu4:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var s=u("pMnS"),i=u("oBZk"),a=u("ZZ/e"),r=u("s7LF"),o=u("SVse"),d=u("mrSG");class b{constructor(l){this.toastController=l,this.placeholderPassword="12345678",this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond="",this.emailPattern=/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,this.editingPassword=!1,this.waitingForResponse=!1}ngOnInit(){this.userEmail=localStorage.getItem("username"),this.boundEmail=this.userEmail}validateEmail(){return this.boundEmail!=this.userEmail?this.emailPattern.test(this.boundEmail):null}validatePasswords(){if(this.editingPassword){let l=!0;return l=l&&this.validatePassword(this.newPasswordFirst),l=l&&this.validatePassword(this.newPasswordSecond),l=l&&this.validatePassword(this.oldPassword),l&&this.newPasswordFirst==this.newPasswordSecond&&""!=this.oldPassword&&""!=this.newPasswordFirst}return null}formTouched(){return this.boundEmail!=this.userEmail||this.editingPassword}validateForm(){return(this.validateEmail()||null==this.validateEmail())&&(this.validatePasswords()||null==this.validatePasswords())&&this.formTouched()}saveForm(){return d.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:this.validateForm()?(this.waitingForResponse=!0,this.waitingForResponse=!1,this.userEmail=this.boundEmail,localStorage.setItem("username",this.userEmail),this.resetPasswordForm(),this.successToast("Your settings have been saved")):this.dangerToast("Invalid request");case 1:case"end":return l.stop()}}),l,this)})))}resetPasswordForm(){this.editingPassword=!1,this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond=""}dangerToast(l){return d.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:l,color:"danger",duration:2e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}successToast(l){return d.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:l,color:"success",duration:2e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}validatePassword(l){return/[a-z]/.test(l)&&/[A-Z]/.test(l)&&/[0-9]/.test(l)&&l.length>=7&&l.length<=16&&l.indexOf(" ")<0}}var g=e.Ab({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%;margin-top:5%;border-radius:10px;background-color:#fff}.invalid[_ngcontent-%COMP%]{--background:rgb(255, 209, 209)}.valid[_ngcontent-%COMP%]{--background:rgb(207, 253, 217)}"]],data:{}});function c(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-spinner",[["name","dots"],["slot","end"],["style","size: 50%"]],null,null,null,i.ab,i.y)),e.Bb(1,49152,null,0,a.sb,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"dots")}),null)}function p(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-icon",[["name","close-circle-outline"],["style","align-self: flex-end; margin-right: 5%; font-size: 120%"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==(t.boundEmail=t.userEmail)&&e),e}),i.L,i.j)),e.Bb(1,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"close-circle-outline")}),null)}function h(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[["style","color: white; margin-top: 2%; margin-left: 7%; font-size: 4vw"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Must be valid email"]))],null,null)}function w(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-icon",[["name","close-circle-outline"],["style","align-self: flex-end; margin-right: 5%; font-size: 120%"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.resetPasswordForm()&&e),e}),i.L,i.j)),e.Bb(1,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"close-circle-outline")}),null)}function m(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,5,"ion-item",[["lines","none"]],null,null,null,i.N,i.l)),e.Bb(1,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Cb(2,0,null,0,3,"ion-input",[["button",""],["type","password"]],null,[[null,"click"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,5)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,5)._handleInputEvent(u.target)&&t),"click"===n&&(t=0!=(s.editingPassword=!s.editingPassword)&&t),t}),i.M,i.k)),e.Qb(5120,null,r.f,(function(l){return[l]}),[a.Ob]),e.Bb(4,49152,null,0,a.G,[e.j,e.p,e.F],{type:[0,"type"],value:[1,"value"]},null),e.Bb(5,16384,null,0,a.Ob,[e.p],null,null)],(function(l,n){var u=n.component;l(n,1,0,"none"),l(n,4,0,"password",e.Gb(1,"",u.placeholderPassword,""))}),null)}function f(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[["style","color: white; margin-top: 2%; margin-left: 7%; font-size: 4vw"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Must contain 1 uppercase letter, 1 lowercase letter, 1 number, no spaces, and be 7-16 characters"]))],null,null)}function v(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[["style","color: white; margin-top: 2%; margin-left: 7%; font-size: 4vw"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Must be match previous entry"]))],null,null)}function C(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,40,"div",[],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.N,i.l)),e.Qb(512,null,o.r,o.s,[e.x,e.y,e.p,e.K]),e.Bb(3,278528,null,0,o.h,[o.r],{ngClass:[0,"ngClass"]},null),e.Pb(4,{valid:0,invalid:1}),e.Bb(5,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Cb(6,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","Old Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,7)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,7)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.oldPassword=u)&&t),t}),i.M,i.k)),e.Bb(7,16384,null,0,a.Ob,[e.p],null,null),e.Qb(1024,null,r.f,(function(l){return[l]}),[a.Ob]),e.Bb(9,671744,null,0,r.j,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,r.g,null,[r.j]),e.Bb(11,16384,null,0,r.h,[[4,r.g]],null,null),e.Bb(12,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.Cb(13,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.N,i.l)),e.Qb(512,null,o.r,o.s,[e.x,e.y,e.p,e.K]),e.Bb(15,278528,null,0,o.h,[o.r],{ngClass:[0,"ngClass"]},null),e.Pb(16,{valid:0,invalid:1}),e.Bb(17,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Cb(18,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","New Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,19)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,19)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.newPasswordFirst=u)&&t),t}),i.M,i.k)),e.Bb(19,16384,null,0,a.Ob,[e.p],null,null),e.Qb(1024,null,r.f,(function(l){return[l]}),[a.Ob]),e.Bb(21,671744,null,0,r.j,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,r.g,null,[r.j]),e.Bb(23,16384,null,0,r.h,[[4,r.g]],null,null),e.Bb(24,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.rb(16777216,null,null,1,null,f)),e.Bb(26,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(27,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.N,i.l)),e.Qb(512,null,o.r,o.s,[e.x,e.y,e.p,e.K]),e.Bb(29,278528,null,0,o.h,[o.r],{ngClass:[0,"ngClass"]},null),e.Pb(30,{valid:0,invalid:1}),e.Bb(31,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Cb(32,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,33)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,33)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.newPasswordSecond=u)&&t),t}),i.M,i.k)),e.Bb(33,16384,null,0,a.Ob,[e.p],null,null),e.Qb(1024,null,r.f,(function(l){return[l]}),[a.Ob]),e.Bb(35,671744,null,0,r.j,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,r.g,null,[r.j]),e.Bb(37,16384,null,0,r.h,[[4,r.g]],null,null),e.Bb(38,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.rb(16777216,null,null,1,null,v)),e.Bb(40,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,e=l(n,4,0,u.validatePassword(u.oldPassword),!u.validatePassword(u.oldPassword)&&""!=u.oldPassword);l(n,3,0,e),l(n,5,0,"none"),l(n,9,0,u.oldPassword),l(n,12,0,"","Old Password","password");var t=l(n,16,0,u.validatePassword(u.newPasswordFirst),!u.validatePassword(u.newPasswordFirst)&&""!=u.newPasswordFirst);l(n,15,0,t),l(n,17,0,"none"),l(n,21,0,u.newPasswordFirst),l(n,24,0,"","New Password","password"),l(n,26,0,!u.validatePassword(u.newPasswordFirst)&&""!=u.newPasswordFirst);var s=l(n,30,0,u.newPasswordFirst==u.newPasswordSecond&&""!=u.newPasswordFirst,u.newPasswordFirst!=u.newPasswordSecond);l(n,29,0,s),l(n,31,0,"none"),l(n,35,0,u.newPasswordSecond),l(n,38,0,"","Confirm Password","password"),l(n,40,0,u.newPasswordFirst!=u.newPasswordSecond)}),(function(l,n){l(n,6,0,e.Ob(n,11).ngClassUntouched,e.Ob(n,11).ngClassTouched,e.Ob(n,11).ngClassPristine,e.Ob(n,11).ngClassDirty,e.Ob(n,11).ngClassValid,e.Ob(n,11).ngClassInvalid,e.Ob(n,11).ngClassPending),l(n,18,0,e.Ob(n,23).ngClassUntouched,e.Ob(n,23).ngClassTouched,e.Ob(n,23).ngClassPristine,e.Ob(n,23).ngClassDirty,e.Ob(n,23).ngClassValid,e.Ob(n,23).ngClassInvalid,e.Ob(n,23).ngClassPending),l(n,32,0,e.Ob(n,37).ngClassUntouched,e.Ob(n,37).ngClassTouched,e.Ob(n,37).ngClassPristine,e.Ob(n,37).ngClassDirty,e.Ob(n,37).ngClassValid,e.Ob(n,37).ngClassInvalid,e.Ob(n,37).ngClassPending)}))}function P(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,2,"ion-button",[["style","float: right; margin: 5%; width: 45%"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.saveForm()&&e),e}),i.D,i.b)),e.Bb(1,49152,null,0,a.k,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Save"]))],null,null)}function B(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,12,"ion-header",[],null,null,null,i.K,i.i)),e.Bb(1,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,10,"ion-toolbar",[],null,null,null,i.db,i.B)),e.Bb(3,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(4,0,null,0,2,"ion-title",[],null,null,null,i.bb,i.z)),e.Bb(5,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Settings"])),(l()(),e.Cb(7,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.E,i.c)),e.Bb(8,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Cb(9,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,i.Q,i.p)),e.Bb(10,49152,null,0,a.R,[e.j,e.p,e.F],{autoHide:[0,"autoHide"]},null),(l()(),e.rb(16777216,null,0,1,null,c)),e.Bb(12,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(13,0,null,null,31,"ion-content",[["style","--background: gray"]],null,null,null,i.I,i.g)),e.Bb(14,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Cb(15,0,null,0,4,"div",[["style","margin-top: 5%; margin-left: 5%; display: flex; align-items: center; justify-content: space-between"]],null,null,null,null,null)),(l()(),e.Cb(16,0,null,null,1,"div",[["style","color: white"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Email Address:"])),(l()(),e.rb(16777216,null,null,1,null,p)),e.Bb(19,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(20,0,null,0,11,"ion-item",[["lines","none"]],null,null,null,i.N,i.l)),e.Qb(512,null,o.r,o.s,[e.x,e.y,e.p,e.K]),e.Bb(22,278528,null,0,o.h,[o.r],{ngClass:[0,"ngClass"]},null),e.Pb(23,{valid:0,invalid:1}),e.Bb(24,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Cb(25,0,null,0,6,"ion-input",[["clearInput",""],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,26)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,26)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.boundEmail=u)&&t),t}),i.M,i.k)),e.Bb(26,16384,null,0,a.Ob,[e.p],null,null),e.Qb(1024,null,r.f,(function(l){return[l]}),[a.Ob]),e.Bb(28,671744,null,0,r.j,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,r.g,null,[r.j]),e.Bb(30,16384,null,0,r.h,[[4,r.g]],null,null),e.Bb(31,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),e.rb(16777216,null,0,1,null,h)),e.Bb(33,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(34,0,null,0,4,"div",[["style","margin-top: 5%; margin-left: 5%; display: flex; align-items: center; justify-content: space-between"]],null,null,null,null,null)),(l()(),e.Cb(35,0,null,null,1,"div",[["style","color: white"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Password:"])),(l()(),e.rb(16777216,null,null,1,null,w)),e.Bb(38,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,m)),e.Bb(40,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,C)),e.Bb(42,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,P)),e.Bb(44,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,10,0,"false"),l(n,12,0,u.waitingForResponse),l(n,19,0,u.boundEmail!=u.userEmail);var e=l(n,23,0,u.validateEmail(),u.boundEmail!=u.userEmail&&!u.validateEmail());l(n,22,0,e),l(n,24,0,"none"),l(n,28,0,u.boundEmail),l(n,31,0,"","email"),l(n,33,0,u.boundEmail!=u.userEmail&&!u.validateEmail()),l(n,38,0,u.editingPassword),l(n,40,0,!u.editingPassword),l(n,42,0,u.editingPassword),l(n,44,0,u.validateForm())}),(function(l,n){l(n,25,0,e.Ob(n,30).ngClassUntouched,e.Ob(n,30).ngClassTouched,e.Ob(n,30).ngClassPristine,e.Ob(n,30).ngClassDirty,e.Ob(n,30).ngClassValid,e.Ob(n,30).ngClassInvalid,e.Ob(n,30).ngClassPending)}))}var O=e.yb("app-user-settings",b,(function(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"app-user-settings",[],null,null,null,B,g)),e.Bb(1,114688,null,0,b,[a.Pb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),F=u("iInd");class y{}u.d(n,"UserSettingsPageModuleNgFactory",(function(){return I}));var I=e.zb(t,[],(function(l){return e.Lb([e.Mb(512,e.m,e.jb,[[8,[s.a,O]],[3,e.m],e.D]),e.Mb(4608,o.l,o.k,[e.z,[2,o.w]]),e.Mb(4608,r.n,r.n,[]),e.Mb(4608,a.b,a.b,[e.F,e.g]),e.Mb(4608,a.Gb,a.Gb,[a.b,e.m,e.w]),e.Mb(4608,a.Lb,a.Lb,[a.b,e.m,e.w]),e.Mb(1073742336,o.b,o.b,[]),e.Mb(1073742336,r.m,r.m,[]),e.Mb(1073742336,r.e,r.e,[]),e.Mb(1073742336,a.Eb,a.Eb,[]),e.Mb(1073742336,F.o,F.o,[[2,F.t],[2,F.m]]),e.Mb(1073742336,y,y,[]),e.Mb(1073742336,t,t,[]),e.Mb(1024,F.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);