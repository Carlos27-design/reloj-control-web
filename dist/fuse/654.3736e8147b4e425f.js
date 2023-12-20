"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[654],{4654:(X,g,d)=>{d.r(g),d.d(g,{EntradaSalidaTrabajadorModule:()=>L});var b=d(6895),p=d(9798),c=d(6308),i=d(7155),a=d(4650),x=d(6514),f=d(2510);function S(e,n){1&e&&(a.TgZ(0,"mat-header-cell",16),a._uU(1," Trabajador "),a.qZA())}function _(e,n){if(1&e&&(a.TgZ(0,"mat-cell",17),a._uU(1),a.qZA()),2&e){const t=n.$implicit;a.xp6(1),a.AsE(" ",t.nombre," ",t.apellido," ")}}function T(e,n){1&e&&a._UZ(0,"mat-header-row")}function E(e,n){if(1&e){const t=a.EpF();a.TgZ(0,"mat-row",18),a.NdJ("click",function(){const s=a.CHM(t).$implicit,l=a.oxw();return a.KtG(l.toVer(s))}),a.qZA()}}const y=function(){return[10,15,25,100]};let j=(()=>{class e{constructor(t,o){this._trabajadorService=t,this._router=o,this.displayedColumns=["Trabajador"],this.dataSource=new i.by,this.resultsLenght=0}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}ngOnInit(){this.getData()}getData(){this._trabajadorService.getAll().subscribe(t=>{this.dataSource.data=t,this.resultsLenght=this.dataSource.data.length},t=>{console.log(t)})}toVer(t){this._router.navigate(["entradaSalidaTrabajador/verEntradaSalida",{trabajadorId:t.id}])}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(x.B),a.Y36(f.F0))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-entrada-salida-trabajador"]],viewQuery:function(t,o){if(1&t&&(a.Gf(c.YE,5),a.Gf(p.NW,5)),2&t){let r;a.iGM(r=a.CRH())&&(o.sort=r.first),a.iGM(r=a.CRH())&&(o.paginator=r.first)}},decls:18,vars:5,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"table-responsive"],["matSort","",3,"dataSource"],["matColumnDef","Trabajador"],["mat-sort-header","",4,"matHeaderCellDef"],["data-label","Trabajador",4,"matCellDef"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],["mat-sort-header",""],["data-label","Trabajador"],[3,"click"]],template:function(t,o){1&t&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),a._uU(5,"Trabajadores"),a.qZA()(),a.TgZ(6,"div",5)(7,"h2",6),a._uU(8," Listado de trabajadores "),a.qZA()()()(),a.TgZ(9,"div",7)(10,"div",8)(11,"mat-table",9),a.ynx(12,10),a.YNc(13,S,2,0,"mat-header-cell",11),a.YNc(14,_,2,2,"mat-cell",12),a.BQk(),a.YNc(15,T,1,0,"mat-header-row",13),a.YNc(16,E,1,0,"mat-row",14),a.qZA()(),a._UZ(17,"mat-paginator",15),a.qZA()()),2&t&&(a.xp6(11),a.Q6J("dataSource",o.dataSource),a.xp6(4),a.Q6J("matHeaderRowDef",o.displayedColumns),a.xp6(1),a.Q6J("matRowDefColumns",o.displayedColumns),a.xp6(1),a.Q6J("pageSizeOptions",a.DdM(4,y)))},dependencies:[c.YE,c.nU,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,p.NW],styles:[".mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#f5f5f5}.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.table-responsive[_ngcontent-%COMP%]{display:block;width:100%;overflow-x:auto}.table-responsive[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{width:100%;max-width:100%;margin-bottom:1rem;display:table;border-collapse:collapse;margin:0}.table-responsive[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:table-row}.table-responsive[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{word-wrap:initial;display:table-cell;padding:0 5px;line-break:unset;width:auto;white-space:nowrap;overflow:hidden;vertical-align:middle}"]}),e})();var M=d(1677),v=d(4859),Z=d(3546),D=d(4850),O=d(9549),w=d(7392),A=d(4144),H=d(2003),k=d(4466),P=d(4313),Y=d(4327);let N=(()=>{class e{exportarExcel(t){const o=new P.Workbook,r=o.addWorksheet("RegistrosHoraXTrabajador");r.columns=[{header:"fecha",key:"fecha",width:10},{header:"Entradas",key:"Entradas",width:10},{header:"Salidas",key:"Salidas",width:10}],t.forEach(s=>{const l=new Date(s.fecha),u=new Date(s.entrada),m=new Date(s.salida);r.addRow({fecha:this.extractDate(l),Entradas:this.extractHoras(u),Salidas:this.extractHoras(m)})});for(let s=0;s<r.columns.length;s+=1){let l=0;const u=r.columns[s];for(let m=0;m<u.values.length;m+=1){const h=u.values[m];h>l&&(l=h)}r.eachRow({includeEmpty:!0},function(m,h){m.eachCell(function(W,K){W.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),u.width=l<28?28:l}o.xlsx.writeBuffer().then(s=>{const l=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});Y.saveAs(l,"registros-trabajador.xlsx")})}extractDate(t){const o=t.getDate(),r=t.getMonth()+1;let l="";return l+=o<10?`0${o}-`:`${o}-`,l+=r<10?`0${r}-`:`${r}-`,l+=`${t.getFullYear()} `,l}extractHoras(t){const o=t.getHours(),r=t.getMinutes(),s=t.getSeconds();let l="";return l+=o<10?`0${o}:`:`${o}:`,l+=r<10?`0${r}:`:`${r}:`,l+=s<10?`0${s}`:`${s}`,l}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function U(e,n){1&e&&(a.TgZ(0,"mat-header-cell",23),a._uU(1," Fecha "),a.qZA())}function V(e,n){if(1&e&&(a.TgZ(0,"mat-cell",24),a._uU(1),a.ALo(2,"date"),a.qZA()),2&e){const t=n.$implicit;a.xp6(1),a.hij(" ",a.xi3(2,1,t.fecha," dd-MM-yyyy")," ")}}function Q(e,n){1&e&&(a.TgZ(0,"mat-header-cell",23),a._uU(1," Entrada "),a.qZA())}function R(e,n){if(1&e&&(a.TgZ(0,"mat-cell",24),a._uU(1),a.ALo(2,"date"),a.qZA()),2&e){const t=n.$implicit;a.xp6(1),a.hij(" ",a.xi3(2,1,t.entrada," HH:mm:ss")," ")}}function $(e,n){1&e&&(a.TgZ(0,"mat-header-cell",23),a._uU(1," Salida "),a.qZA())}function B(e,n){if(1&e&&(a.TgZ(0,"mat-cell",25),a._uU(1),a.ALo(2,"date"),a.qZA()),2&e){const t=n.$implicit;a.xp6(1),a.hij(" ",a.xi3(2,1,t.salida," HH:mm:ss")," ")}}function J(e,n){1&e&&a._UZ(0,"mat-header-row")}function F(e,n){if(1&e){const t=a.EpF();a.TgZ(0,"mat-row",26),a.NdJ("click",function(){const s=a.CHM(t).$implicit,l=a.oxw();return a.KtG(l.toVer(s))}),a.qZA()}}const G=function(){return[10,15,20,100]};let I=(()=>{class e{constructor(t,o,r,s){this._trabajadorService=t,this._route=o,this._router=r,this._exportarHorasTrabajadorService=s,this.displayedColumns=["Fecha","Entrada","Salida"],this.dataSource=new i.by,this.resultLenght=0}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}ngOnInit(){this.trabajadorId=parseInt(this._route.snapshot.paramMap.get("trabajadorId")),this.getData()}getData(){this._trabajadorService.get(this.trabajadorId).subscribe(t=>{this.trabajador=t,this.dataSource.data=this.trabajador.Registros,this.resultLenght=this.dataSource.data.length},t=>{console.log(t)})}exportarAExcel(){this._exportarHorasTrabajadorService.exportarExcel(this.trabajador.Registros)}toBack(){this._router.navigate(["entradaSalidaTrabajador"])}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(x.B),a.Y36(f.gz),a.Y36(f.F0),a.Y36(N))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-ver-entrada-salida"]],viewQuery:function(t,o){if(1&t&&(a.Gf(c.YE,5),a.Gf(p.NW,5)),2&t){let r;a.iGM(r=a.CRH())&&(o.sort=r.first),a.iGM(r=a.CRH())&&(o.paginator=r.first)}},decls:30,vars:5,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex-auto","p-1","sm:p-1"],["mat-button","","color","primary",3,"click"],["svgIcon","heroicons_solid:document-download"],[1,"table-responsive"],["matSort","",3,"dataSource"],["matColumnDef","Fecha"],["mat-sort-header","",4,"matHeaderCellDef"],["data-label","Entrada",4,"matCellDef"],["matColumnDef","Entrada"],["matColumnDef","Salida"],["data-label","Salida",4,"matCellDef"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],["mat-button","",3,"click"],["mat-sort-header",""],["data-label","Entrada"],["data-label","Salida"],[3,"click"]],template:function(t,o){1&t&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),a._uU(5,"Entrada y salidas Trabajadores"),a.qZA()(),a.TgZ(6,"div",5)(7,"h2",6),a._uU(8,"Ver Horas Del Trabajador"),a.qZA()()()(),a.TgZ(9,"div",7)(10,"div",8)(11,"button",9),a.NdJ("click",function(){return o.exportarAExcel()}),a._uU(12,"Exportar a Excel "),a._UZ(13,"mat-icon",10),a.qZA()(),a.TgZ(14,"div",11)(15,"mat-table",12),a.ynx(16,13),a.YNc(17,U,2,0,"mat-header-cell",14),a.YNc(18,V,3,4,"mat-cell",15),a.BQk(),a.ynx(19,16),a.YNc(20,Q,2,0,"mat-header-cell",14),a.YNc(21,R,3,4,"mat-cell",15),a.BQk(),a.ynx(22,17),a.YNc(23,$,2,0,"mat-header-cell",14),a.YNc(24,B,3,4,"mat-cell",18),a.BQk(),a.YNc(25,J,1,0,"mat-header-row",19),a.YNc(26,F,1,0,"mat-row",20),a.qZA()(),a._UZ(27,"mat-paginator",21),a.TgZ(28,"button",22),a.NdJ("click",function(){return o.toBack()}),a._uU(29,"Volver"),a.qZA()()()),2&t&&(a.xp6(15),a.Q6J("dataSource",o.dataSource),a.xp6(10),a.Q6J("matHeaderRowDef",o.displayedColumns),a.xp6(1),a.Q6J("matRowDefColumns",o.displayedColumns),a.xp6(1),a.Q6J("pageSizeOptions",a.DdM(4,G)))},dependencies:[v.lW,c.YE,c.nU,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,p.NW,w.Hw,b.uU],styles:[".mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#f5f5f5}.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.table-responsive[_ngcontent-%COMP%]{display:block;width:100%;overflow-x:auto}.table-responsive[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{width:100%;max-width:100%;margin-bottom:1rem;display:table;border-collapse:collapse;margin:0}.table-responsive[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:table-row}.table-responsive[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{word-wrap:initial;display:table-cell;padding:0 5px;line-break:unset;width:auto;white-space:nowrap;overflow:hidden;vertical-align:middle}"]}),e})();var C=d(9131);const z=[{path:"",canActivate:[C.k],component:j},{path:"verEntradaSalida",canActivate:[C.k],component:I}];let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[b.ez,f.Bz.forChild(z),v.ot,Z.QW,c.JX,i.p0,p.TU,D.t,k.m,A.c,M.o9,O.lN,w.Ps,H.$]}),e})()}}]);