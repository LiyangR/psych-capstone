(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Cxu4:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var s=u("pMnS"),i=u("oBZk"),a=u("ZZ/e"),o=u("s7LF"),r=u("SVse"),d=u("mrSG");class b{constructor(l){this.toastController=l,this.userEmail="placeholder@email.com",this.userPassword="12345678",this.placeholderPassword="12345678",this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond="",this.emailPattern=/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,this.editingPassword=!1,this.waitingForResponse=!1}ngOnInit(){this.boundEmail=this.userEmail}validateEmail(){return this.boundEmail!=this.userEmail?this.emailPattern.test(this.boundEmail):null}validatePassword(){return this.editingPassword?this.newPasswordFirst==this.newPasswordSecond&&""!=this.oldPassword&&""!=this.newPasswordFirst:null}formTouched(){return this.boundEmail!=this.userEmail||this.editingPassword}validateForm(){return(this.validateEmail()||null==this.validateEmail())&&(this.validatePassword()||null==this.validatePassword())&&this.formTouched()}saveForm(){return d.b(this,void 0,void 0,(function*(){this.waitingForResponse=!0,this.waitingForResponse=!1,this.userEmail=this.boundEmail,this.userPassword=this.newPasswordFirst,this.resetPasswordForm(),(yield this.toastController.create({message:"Your settings have been saved.",duration:2e3,color:"success"})).present(),this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond=""}))}resetPasswordForm(){this.editingPassword=!1,this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond=""}}var g=e.Ab({encapsulation:0,styles:[["ion-label[_ngcontent-%COMP%]{color:#fff;margin-left:10px}ion-input[_ngcontent-%COMP%]{margin:20px;width:85%;border-radius:10px;background-color:#fff;--padding-start:10px;border-left:10px solid #fff;cursor:pointer}.little-label[_ngcontent-%COMP%]{margin-left:20px;font-size:70%}.little-input[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.edited-valid[_ngcontent-%COMP%]{border-left:10px solid #1e90ff}.valid[_ngcontent-%COMP%]{border-left:10px solid #01df74}.invalid[_ngcontent-%COMP%]{border-left:10px solid #fe2e2e}"]],data:{}});function c(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-spinner",[["name","dots"],["slot","end"],["style","size: 50%"]],null,null,null,i.O,i.s)),e.Bb(1,49152,null,0,a.rb,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"dots")}),null)}function p(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-icon",[["name","close-circle-outline"],["style","float: right; font-size: 150%; margin-right: 20px; margin-top: 2px"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==(t.boundEmail=t.userEmail)&&e),e}),i.E,i.i)),e.Bb(1,49152,null,0,a.B,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"close-circle-outline")}),null)}function h(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"ion-icon",[["name","close-circle-outline"],["style","float: right; font-size: 150%; margin-right: 20px; margin-top: 2px"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.resetPasswordForm()&&e),e}),i.E,i.i)),e.Bb(1,49152,null,0,a.B,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"close-circle-outline")}),null)}function w(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,3,"ion-input",[["button",""],["type","password"]],null,[[null,"click"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,3)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,3)._handleInputEvent(u.target)&&t),"click"===n&&(t=0!=(s.editingPassword=!s.editingPassword)&&t),t}),i.F,i.j)),e.Qb(5120,null,o.b,(function(l){return[l]}),[a.Kb]),e.Bb(2,49152,null,0,a.F,[e.j,e.p,e.F],{type:[0,"type"],value:[1,"value"]},null),e.Bb(3,16384,null,0,a.Kb,[e.p],null,null)],(function(l,n){l(n,2,0,"password",e.Gb(1,"",n.component.placeholderPassword,""))}),null)}function C(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,36,"div",[],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,2,"ion-label",[["class","little-label"]],null,null,null,i.H,i.l)),e.Bb(2,49152,null,0,a.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Old Password:"])),(l()(),e.Cb(4,0,null,null,6,"ion-input",[["class","little-input"],["clearInput",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,5)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,5)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.oldPassword=u)&&t),t}),i.F,i.j)),e.Bb(5,16384,null,0,a.Kb,[e.p],null,null),e.Qb(1024,null,o.b,(function(l){return[l]}),[a.Kb]),e.Bb(7,671744,null,0,o.e,[[8,null],[8,null],[8,null],[6,o.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,o.c,null,[o.e]),e.Bb(9,16384,null,0,o.d,[[4,o.c]],null,null),e.Bb(10,49152,null,0,a.F,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),e.Cb(11,0,null,null,2,"ion-label",[["class","little-label"]],null,null,null,i.H,i.l)),e.Bb(12,49152,null,0,a.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["New Password:"])),(l()(),e.Cb(14,0,null,null,9,"ion-input",[["class","little-input"],["clearInput",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,18)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,18)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.newPasswordFirst=u)&&t),t}),i.F,i.j)),e.Qb(512,null,r.r,r.s,[e.x,e.y,e.p,e.K]),e.Bb(16,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Pb(17,{valid:0}),e.Bb(18,16384,null,0,a.Kb,[e.p],null,null),e.Qb(1024,null,o.b,(function(l){return[l]}),[a.Kb]),e.Bb(20,671744,null,0,o.e,[[8,null],[8,null],[8,null],[6,o.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,o.c,null,[o.e]),e.Bb(22,16384,null,0,o.d,[[4,o.c]],null,null),e.Bb(23,49152,null,0,a.F,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),e.Cb(24,0,null,null,2,"ion-label",[["class","little-label"]],null,null,null,i.H,i.l)),e.Bb(25,49152,null,0,a.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Retype New:"])),(l()(),e.Cb(27,0,null,null,9,"ion-input",[["class","little-input"],["clearInput",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,31)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,31)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.newPasswordSecond=u)&&t),t}),i.F,i.j)),e.Qb(512,null,r.r,r.s,[e.x,e.y,e.p,e.K]),e.Bb(29,278528,null,0,r.h,[r.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Pb(30,{valid:0,invalid:1}),e.Bb(31,16384,null,0,a.Kb,[e.p],null,null),e.Qb(1024,null,o.b,(function(l){return[l]}),[a.Kb]),e.Bb(33,671744,null,0,o.e,[[8,null],[8,null],[8,null],[6,o.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,o.c,null,[o.e]),e.Bb(35,16384,null,0,o.d,[[4,o.c]],null,null),e.Bb(36,49152,null,0,a.F,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],type:[1,"type"]},null)],(function(l,n){var u=n.component;l(n,7,0,u.oldPassword),l(n,10,0,"","password");var e=l(n,17,0,""!=u.newPasswordFirst);l(n,16,0,"little-input",e),l(n,20,0,u.newPasswordFirst),l(n,23,0,"","password");var t=l(n,30,0,u.newPasswordFirst==u.newPasswordSecond&&""!=u.newPasswordFirst,u.newPasswordFirst!=u.newPasswordSecond);l(n,29,0,"little-input",t),l(n,33,0,u.newPasswordSecond),l(n,36,0,"","password")}),(function(l,n){l(n,4,0,e.Ob(n,9).ngClassUntouched,e.Ob(n,9).ngClassTouched,e.Ob(n,9).ngClassPristine,e.Ob(n,9).ngClassDirty,e.Ob(n,9).ngClassValid,e.Ob(n,9).ngClassInvalid,e.Ob(n,9).ngClassPending),l(n,14,0,e.Ob(n,22).ngClassUntouched,e.Ob(n,22).ngClassTouched,e.Ob(n,22).ngClassPristine,e.Ob(n,22).ngClassDirty,e.Ob(n,22).ngClassValid,e.Ob(n,22).ngClassInvalid,e.Ob(n,22).ngClassPending),l(n,27,0,e.Ob(n,35).ngClassUntouched,e.Ob(n,35).ngClassTouched,e.Ob(n,35).ngClassPristine,e.Ob(n,35).ngClassDirty,e.Ob(n,35).ngClassValid,e.Ob(n,35).ngClassInvalid,e.Ob(n,35).ngClassPending)}))}function m(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,2,"ion-button",[["style","float: right; margin-right: 20px; width: 130px"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.saveForm()&&e),e}),i.x,i.b)),e.Bb(1,49152,null,0,a.j,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Save"]))],null,null)}function f(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,12,"ion-header",[],null,null,null,i.D,i.h)),e.Bb(1,49152,null,0,a.A,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,10,"ion-toolbar",[],null,null,null,i.R,i.v)),e.Bb(3,49152,null,0,a.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(4,0,null,0,2,"ion-title",[],null,null,null,i.P,i.t)),e.Bb(5,49152,null,0,a.zb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Settings"])),(l()(),e.Cb(7,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.y,i.c)),e.Bb(8,49152,null,0,a.k,[e.j,e.p,e.F],null,null),(l()(),e.Cb(9,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,i.J,i.o)),e.Bb(10,49152,null,0,a.Q,[e.j,e.p,e.F],{autoHide:[0,"autoHide"]},null),(l()(),e.rb(16777216,null,0,1,null,c)),e.Bb(12,16384,null,0,r.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(13,0,null,null,28,"ion-content",[["style","--background: gray"]],null,null,null,i.B,i.f)),e.Bb(14,49152,null,0,a.t,[e.j,e.p,e.F],null,null),(l()(),e.Cb(15,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(16,0,null,0,2,"ion-label",[],null,null,null,i.H,i.l)),e.Bb(17,49152,null,0,a.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Email Address:"])),(l()(),e.rb(16777216,null,0,1,null,p)),e.Bb(20,16384,null,0,r.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(21,0,null,0,9,"ion-input",[["clearInput",""],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,25)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,25)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.boundEmail=u)&&t),t}),i.F,i.j)),e.Qb(512,null,r.r,r.s,[e.x,e.y,e.p,e.K]),e.Bb(23,278528,null,0,r.h,[r.r],{ngClass:[0,"ngClass"]},null),e.Pb(24,{"edited-valid":0,invalid:1}),e.Bb(25,16384,null,0,a.Kb,[e.p],null,null),e.Qb(1024,null,o.b,(function(l){return[l]}),[a.Kb]),e.Bb(27,671744,null,0,o.e,[[8,null],[8,null],[8,null],[6,o.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,o.c,null,[o.e]),e.Bb(29,16384,null,0,o.d,[[4,o.c]],null,null),e.Bb(30,49152,null,0,a.F,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),e.Cb(31,0,null,0,2,"ion-label",[],null,null,null,i.H,i.l)),e.Bb(32,49152,null,0,a.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Password:"])),(l()(),e.rb(16777216,null,0,1,null,h)),e.Bb(35,16384,null,0,r.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,w)),e.Bb(37,16384,null,0,r.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,C)),e.Bb(39,16384,null,0,r.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,m)),e.Bb(41,16384,null,0,r.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,10,0,"false"),l(n,12,0,u.waitingForResponse),l(n,20,0,u.boundEmail!=u.userEmail);var e=l(n,24,0,u.validateEmail(),u.boundEmail!=u.userEmail&&!u.validateEmail());l(n,23,0,e),l(n,27,0,u.boundEmail),l(n,30,0,"","email"),l(n,35,0,u.editingPassword),l(n,37,0,!u.editingPassword),l(n,39,0,u.editingPassword),l(n,41,0,u.validateForm())}),(function(l,n){l(n,21,0,e.Ob(n,29).ngClassUntouched,e.Ob(n,29).ngClassTouched,e.Ob(n,29).ngClassPristine,e.Ob(n,29).ngClassDirty,e.Ob(n,29).ngClassValid,e.Ob(n,29).ngClassInvalid,e.Ob(n,29).ngClassPending)}))}function P(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"app-user-settings",[],null,null,null,f,g)),e.Bb(1,114688,null,0,b,[a.Lb],null,null)],(function(l,n){l(n,1,0)}),null)}var v=e.yb("app-user-settings",b,P,{},{},[]),B=u("iInd");class F{}u.d(n,"UserSettingsPageModuleNgFactory",(function(){return O}));var O=e.zb(t,[],(function(l){return e.Lb([e.Mb(512,e.m,e.jb,[[8,[s.a,v]],[3,e.m],e.D]),e.Mb(4608,r.l,r.k,[e.z,[2,r.w]]),e.Mb(4608,o.g,o.g,[]),e.Mb(4608,a.b,a.b,[e.F,e.g]),e.Mb(4608,a.Fb,a.Fb,[a.b,e.m,e.w]),e.Mb(4608,a.Ib,a.Ib,[a.b,e.m,e.w]),e.Mb(1073742336,r.b,r.b,[]),e.Mb(1073742336,o.f,o.f,[]),e.Mb(1073742336,o.a,o.a,[]),e.Mb(1073742336,a.Db,a.Db,[]),e.Mb(1073742336,B.o,B.o,[[2,B.t],[2,B.m]]),e.Mb(1073742336,F,F,[]),e.Mb(1073742336,t,t,[]),e.Mb(1024,B.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);