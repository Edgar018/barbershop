(self.webpackChunkbarbershop=self.webpackChunkbarbershop||[]).push([[587],{3587:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ProductsModule:()=>I});var a=i(4466),r=i(4762),o=i(3962),n=i(1494),c=i(2789),u=i(3679),l=i(7716),m=i(3831),s=i(8295),d=i(9983),p=i(8583),f=i(1095),Z=i(4885);function h(t,e){1&t&&(l.TgZ(0,"th",27),l._uU(1," ID "),l.qZA())}function g(t,e){if(1&t&&(l.TgZ(0,"td",28),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.id," ")}}function q(t,e){1&t&&(l.TgZ(0,"th",27),l._uU(1," Name "),l.qZA())}function A(t,e){if(1&t&&(l.TgZ(0,"td",28),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.name," ")}}function T(t,e){1&t&&(l.TgZ(0,"th",27),l._uU(1," type "),l.qZA())}function x(t,e){if(1&t&&(l.TgZ(0,"td",28),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.type," ")}}function w(t,e){1&t&&(l.TgZ(0,"th",27),l._uU(1," price "),l.qZA())}function y(t,e){if(1&t&&(l.TgZ(0,"td",28),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" $",t.price," ")}}function N(t,e){1&t&&(l.TgZ(0,"th",27),l._uU(1," stock "),l.qZA())}function U(t,e){if(1&t&&(l.TgZ(0,"td",28),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t.stock," ")}}function k(t,e){1&t&&l._UZ(0,"tr",29)}function _(t,e){1&t&&l._UZ(0,"tr",30)}function v(t,e){if(1&t&&(l.TgZ(0,"tr",31),l.TgZ(1,"td",32),l._uU(2),l.qZA(),l.qZA()),2&t){l.oxw(2);const t=l.MAs(7);l.xp6(2),l.hij('No data matching the filter "',t.value,'"')}}const b=function(){return[5,10,25,100]};function C(t,e){if(1&t&&(l.TgZ(0,"div",14),l.TgZ(1,"table",15),l.ynx(2,16),l.YNc(3,h,2,0,"th",17),l.YNc(4,g,2,1,"td",18),l.BQk(),l.ynx(5,19),l.YNc(6,q,2,0,"th",17),l.YNc(7,A,2,1,"td",18),l.BQk(),l.ynx(8,20),l.YNc(9,T,2,0,"th",17),l.YNc(10,x,2,1,"td",18),l.BQk(),l.ynx(11,21),l.YNc(12,w,2,0,"th",17),l.YNc(13,y,2,1,"td",18),l.BQk(),l.ynx(14,22),l.YNc(15,N,2,0,"th",17),l.YNc(16,U,2,1,"td",18),l.BQk(),l.YNc(17,k,1,0,"tr",23),l.YNc(18,_,1,0,"tr",24),l.YNc(19,v,3,1,"tr",25),l.qZA(),l._UZ(20,"mat-paginator",26),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("dataSource",t.dataSource),l.xp6(16),l.Q6J("matHeaderRowDef",t.displayedColumns),l.xp6(1),l.Q6J("matRowDefColumns",t.displayedColumns),l.xp6(2),l.Q6J("pageSizeOptions",l.DdM(4,b))}}function Y(t,e){1&t&&(l.TgZ(0,"div"),l._UZ(1,"mat-spinner"),l.qZA())}let S=(()=>{class t{constructor(t,e){this.productsService=t,this.formBuilder=e,this.displayedColumns=["id","name","type","price","stock"],this.load=!0,this.loadTable(),this.initForm()}loadTable(){this.productsService.getProducts().then(t=>{this.dataSource=new c.by(t),setTimeout(()=>{this.load=!1},1e3)})}initForm(){this.form=this.formBuilder.group({name:["",[u.kI.required]],price:[0,[u.kI.required]],stock:[0,[u.kI.required]]})}newProduct(){return(0,r.mG)(this,void 0,void 0,function*(){yield this.productsService.addProduct(this.form.value),this.load=!0,this.loadTable()})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(m.s),l.Y36(u.qu))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-products"]],viewQuery:function(t,e){if(1&t&&(l.Gf(o.NW,5),l.Gf(n.YE,5)),2&t){let t;l.iGM(t=l.CRH())&&(e.paginator=t.first),l.iGM(t=l.CRH())&&(e.sort=t.first)}},decls:28,vars:4,consts:[["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],["class","mat-elevation-z8",4,"ngIf"],[4,"ngIf"],[2,"margin-top","20px","display","flex","text-align","center",3,"formGroup"],[1,"example-full-width",2,"margin-right","28px"],["formControlName","name","required","","matInput","","placeholder","Ex. Pizza"],["serviceInput",""],[2,"margin-right","28px"],["matPrefix",""],["formControlName","price","required","","matInput","","type","number","placeholder","price","min","0"],[2,"margin-right","28px","flex","1"],["formControlName","stock","required","","matInput","","type","number","placeholder","stock","min","0"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["matColumnDef","price"],["matColumnDef","stock"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,e){1&t&&(l.TgZ(0,"div"),l.TgZ(1,"h1"),l._uU(2,"Products"),l.qZA(),l.TgZ(3,"mat-form-field"),l.TgZ(4,"mat-label"),l._uU(5,"Filter"),l.qZA(),l.TgZ(6,"input",0,1),l.NdJ("keyup",function(t){return e.applyFilter(t)}),l.qZA(),l.qZA(),l.YNc(8,C,21,5,"div",2),l.YNc(9,Y,2,0,"div",3),l.TgZ(10,"div",4),l.TgZ(11,"mat-form-field",5),l.TgZ(12,"mat-label"),l._uU(13,"Product Name"),l.qZA(),l._UZ(14,"input",6,7),l.qZA(),l.TgZ(16,"mat-form-field",8),l.TgZ(17,"mat-label"),l._uU(18," Price"),l.qZA(),l.TgZ(19,"span",9),l._uU(20,"$"),l.qZA(),l._UZ(21,"input",10),l.qZA(),l.TgZ(22,"mat-form-field",11),l.TgZ(23,"mat-label"),l._uU(24," Stock"),l.qZA(),l._UZ(25,"input",12),l.qZA(),l.TgZ(26,"button",13),l.NdJ("click",function(){return e.newProduct()}),l._uU(27,"Create "),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(8),l.Q6J("ngIf",!e.load),l.xp6(1),l.Q6J("ngIf",e.load),l.xp6(1),l.Q6J("formGroup",e.form),l.xp6(16),l.Q6J("disabled",!e.form.valid))},directives:[s.KE,s.hX,d.Nt,p.O5,u.JL,u.sg,u.Fj,u.JJ,u.u,u.Q7,s.qo,u.wV,u.qQ,f.lW,c.BZ,n.YE,c.w1,c.fO,c.Dz,c.as,c.nj,c.Ee,o.NW,c.ge,n.nU,c.ev,c.XQ,c.Gk,Z.$g],styles:[""]}),t})();var Q=i(4655);const D=[{path:"",component:S}];let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[Q.Bz.forChild(D)],Q.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[p.ez,J,a.m]]}),t})()}}]);