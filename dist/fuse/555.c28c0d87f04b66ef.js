"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[555],{6555:(F,x,l)=>{l.r(x),l.d(x,{RolModule:()=>P});var u=l(6895),f=l(9798),m=l(6308),s=l(7155),t=l(4650),p=l(5082),c=l(2510),d=l(4859),g=l(7392);function y(o,a){1&o&&(t.TgZ(0,"mat-header-cell",21),t._uU(1," Rol "),t.qZA())}function Z(o,a){if(1&o&&(t.TgZ(0,"mat-cell",22),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.rol," ")}}function w(o,a){1&o&&(t.TgZ(0,"mat-header-cell",21),t._uU(1," Creado "),t.qZA())}function T(o,a){if(1&o&&(t.TgZ(0,"mat-cell",23),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.created_at,"dd - MM - yyyy")," ")}}function R(o,a){1&o&&(t.TgZ(0,"mat-header-cell",21),t._uU(1," Actualizado "),t.qZA())}function A(o,a){if(1&o&&(t.TgZ(0,"mat-cell",24),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=a.$implicit;t.Udp("color",e.rut),t.xp6(1),t.hij(" ",t.xi3(2,3,e.updated_at,"dd - MM - yyyy")," ")}}function M(o,a){1&o&&t._UZ(0,"mat-header-row")}function k(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-row",25),t.NdJ("click",function(){const v=t.CHM(e).$implicit,b=t.oxw();return t.KtG(b.toModificar(v))}),t.qZA()}}const N=function(){return[10,15,25,100]};let U=(()=>{class o{constructor(e,r){this._rolService=e,this._router=r,this.displayedColumns=["Rol","Creado","Actualizado"],this.dataSource=new s.by,this.resultsLenght=0}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}ngOnInit(){this.getData()}getData(){this._rolService.getAll().subscribe(e=>{this.dataSource.data=e,this.resultsLenght=this.dataSource.data.length},e=>{console.log(e)})}toNuevo(){this._router.navigate(["rol/nuevo"])}toModificar(e){this._router.navigate(["rol/modificar",{rolId:e.id}])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.m),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rol"]],viewQuery:function(e,r){if(1&e&&(t.Gf(m.YE,5),t.Gf(f.NW,5)),2&e){let n;t.iGM(n=t.CRH())&&(r.sort=n.first),t.iGM(n=t.CRH())&&(r.paginator=n.first)}},decls:25,vars:6,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tighter","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex","items-start","justify-start"],["mat-button","","color","primary",3,"click"],[3,"svgIcon"],[1,"table-responsive"],["matSort","",3,"dataSource"],["matColumnDef","Rol"],["mat-sort-header","",4,"matHeaderCellDef"],["data-label","Rol",4,"matCellDef"],["matColumnDef","Creado"],["data-label","Creado",4,"matCellDef"],["matColumnDef","Actualizado"],["data-label","Actualizado",3,"color",4,"matCellDef"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],["mat-sort-header",""],["data-label","Rol"],["data-label","Creado"],["data-label","Actualizado"],[3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),t._uU(5," Lista de Roles "),t.qZA()()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"button",7),t.NdJ("click",function(){return r.toNuevo()}),t._uU(9,"Nuevo Rol "),t._UZ(10,"mat-icon",8),t.qZA()(),t.TgZ(11,"div",9)(12,"mat-table",10),t.ynx(13,11),t.YNc(14,y,2,0,"mat-header-cell",12),t.YNc(15,Z,2,1,"mat-cell",13),t.BQk(),t.ynx(16,14),t.YNc(17,w,2,0,"mat-header-cell",12),t.YNc(18,T,3,4,"mat-cell",15),t.BQk(),t.ynx(19,16),t.YNc(20,R,2,0,"mat-header-cell",12),t.YNc(21,A,3,6,"mat-cell",17),t.BQk(),t.YNc(22,M,1,0,"mat-header-row",18),t.YNc(23,k,1,0,"mat-row",19),t.qZA()(),t._UZ(24,"mat-paginator",20),t.qZA()()),2&e&&(t.xp6(10),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(2),t.Q6J("dataSource",r.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,N)))},dependencies:[d.lW,m.YE,m.nU,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,f.NW,g.Hw,u.uU],styles:[".mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#f5f5f5}.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.table-responsive[_ngcontent-%COMP%]{display:block;width:100%;overflow-x:auto}.table-responsive[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{width:100%;max-width:100%;margin-bottom:1rem;display:table;border-collapse:collapse;margin:0}.table-responsive[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:table-row}.table-responsive[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{word-wrap:initial;display:table-cell;padding:0 5px;line-break:unset;width:auto;white-space:nowrap;overflow:hidden;vertical-align:middle}"]}),o})();var S=l(1677),J=l(3546),Y=l(4850),C=l(9549),O=l(4144),D=l(2003),G=l(4466),i=l(4006);class _{}function I(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"El Rol es requerido"),t.qZA())}let j=(()=>{class o{constructor(e,r,n){this._router=e,this._rolService=r,this._formBuilder=n,this.desactivarGuardar=!1,this.formGroup=this._formBuilder.group({rol:["",[i.kI.required]]})}ngOnInit(){}onSubmit(){let e=new _;e.rol=this.formGroup.value.rol,this._rolService.create(e).subscribe(r=>{this.toBack()},r=>{})}toBack(){this._router.navigate(["rol"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.F0),t.Y36(p.m),t.Y36(i.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-nuevo"]],decls:22,vars:3,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"mt-2"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tighter","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[3,"formGroup","ngSubmit"],["form","ngForm"],[1,"grid","md:grid-cols-2","md:gap-6"],[1,"relative","z-0","w-full","mb-6","group"],["type","text","formControlName","rol",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[4,"ngIf"],[1,"flex","items-start","justify-start"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t._uU(5,"Rol"),t.qZA()(),t.TgZ(6,"h2",5),t._uU(7," Nuevo "),t.qZA()()(),t.TgZ(8,"div",6)(9,"form",7,8),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(11,"div",9)(12,"div",10),t._UZ(13,"input",11),t.TgZ(14,"label",12),t._uU(15,"Rol:"),t.qZA(),t.YNc(16,I,2,0,"mat-error",13),t.qZA()(),t.TgZ(17,"div",14)(18,"button",15),t.NdJ("click",function(){return r.toBack()}),t._uU(19,"Volver"),t.qZA(),t.TgZ(20,"button",16),t._uU(21,"Crear Trabajador"),t.qZA()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",r.formGroup),t.xp6(7),t.Q6J("ngIf",r.formGroup.get("rol").hasError("required")),t.xp6(4),t.Q6J("disabled",r.formGroup.invalid))},dependencies:[u.O5,d.lW,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,C.TO]}),o})();var B=l(1683);let Q=(()=>{class o{constructor(e,r,n,v,b){this._router=e,this._route=r,this._rolService=n,this._formBuilder=v,this._fuseConfirmationService=b,this.formGroup=this._formBuilder.group({rol:["",[i.kI.required]]})}ngOnInit(){this.rolId=parseInt(this._route.snapshot.paramMap.get("rolId")),this.getData()}getData(){this._rolService.get(this.rolId).subscribe(e=>{this.formGroup.get("rol").setValue(e.rol)},e=>{console.log(e)})}onUpdate(){let e=new _;e.rol=this.formGroup.value.rol,this._rolService.update(this.rolId,e).subscribe(r=>{this.toBack()},r=>{})}onDelete(){this._fuseConfirmationService.open({title:"Eliminar Trabajador",message:"\xbfEstas seguro que deseas eliminar el trabajador?",actions:{confirm:{label:"Eliminar"},cancel:{label:"Cancelar"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._rolService.delete(this.rolId).subscribe(n=>{this.toBack()},n=>{})})}toBack(){this._router.navigate(["rol"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.F0),t.Y36(c.gz),t.Y36(p.m),t.Y36(i.qu),t.Y36(B.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-modificar"]],decls:25,vars:2,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"mt-2"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tighter","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex-col","p-2","sm:p-1","items-start","justify-start"],["mat-button","","color","warn",3,"click"],[3,"svgIcon"],[3,"formGroup","ngSubmit"],["form","ngForm"],[1,"grid","md:grid-cols-2","md:gap-6"],[1,"relative","z-0","w-full","mb-6","group"],["type","text","formControlName","rol",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[1,"flex","items-start","justify-start"],["mat-button","",3,"click"],["mat-raised-button","","color","primary"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t._uU(5,"Rol"),t.qZA()(),t.TgZ(6,"h2",5),t._uU(7," Modificar "),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"button",8),t.NdJ("click",function(){return r.onDelete()}),t._uU(11,"Eliminar Rol "),t._UZ(12,"mat-icon",9),t.qZA()(),t.TgZ(13,"form",10,11),t.NdJ("ngSubmit",function(){return r.onUpdate()}),t.TgZ(15,"div",12)(16,"div",13),t._UZ(17,"input",14),t.TgZ(18,"label",15),t._uU(19,"Rol:"),t.qZA()()(),t.TgZ(20,"div",16)(21,"button",17),t.NdJ("click",function(){return r.toBack()}),t._uU(22,"Volver"),t.qZA(),t.TgZ(23,"button",18),t._uU(24,"Modificar Trabajador"),t.qZA()()()()()),2&e&&(t.xp6(12),t.Q6J("svgIcon","heroicons_solid:trash"),t.xp6(1),t.Q6J("formGroup",r.formGroup))},dependencies:[d.lW,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.Hw]}),o})();var h=l(6525);const z=[{path:"",canActivate:[h.u],component:U},{path:"nuevo",canActivate:[h.u],component:j},{path:"modificar",canActivate:[h.u],component:Q}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,c.Bz.forChild(z),d.ot,J.QW,m.JX,s.p0,f.TU,Y.t,G.m,O.c,S.o9,C.lN,g.Ps,D.$]}),o})()}}]);