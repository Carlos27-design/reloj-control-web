import { Injectable } from '@angular/core';
import { Registro } from 'app/shared/models/registro';
import * as Exceljs from 'exceljs/dist/exceljs.min.js';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class ExportarHorasTrabajadorService {
  exportarExcel(registros: Registro[]) {
    const libro = new Exceljs.Workbook();
    const hoja = libro.addWorksheet('RegistrosHoraXTrabajador');

    hoja.columns = [
      { header: 'fecha', key: 'fecha', width: 10 },
      { header: 'Entradas', key: 'Entradas', width: 10 },
      { header: 'Salidas', key: 'Salidas', width: 10 },
    ];

    registros.forEach((registro) => {
      const fecha = new Date(registro.fecha);
      const entrada = new Date(registro.entrada);
      const salida = new Date(registro.salida);
      hoja.addRow({
        fecha: this.extractDate(fecha),
        Entradas: this.extractHoras(entrada),
        Salidas: this.extractHoras(salida),
      });
    });

    for (let i = 0; i < hoja.columns.length; i += 1) {
      let dataMax = 0;
      const column = hoja.columns[i];
      for (let j = 0; j < column.values.length; j += 1) {
        const columnLenght = column.values[j];
        if (columnLenght > dataMax) {
          dataMax = columnLenght;
        }
      }
      hoja.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        row.eachCell(function (cell, colNumber) {
          cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
          };
        });
      });
      column.width = dataMax < 28 ? 28 : dataMax;
    }
    libro.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'registros-trabajador' + '.xlsx');
    });
  }

  private extractDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let final = '';

    day < 10 ? (final += `0${day}-`) : (final += `${day}-`);
    month < 10 ? (final += `0${month}-`) : (final += `${month}-`);
    final += `${year} `;

    return final;
  }

  private extractHoras(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let final = '';

    hours < 10 ? (final += `0${hours}:`) : (final += `${hours}:`);
    minutes < 10 ? (final += `0${minutes}:`) : (final += `${minutes}:`);
    seconds < 10 ? (final += `0${seconds}`) : (final += `${seconds}`);

    return final;
  }
}
