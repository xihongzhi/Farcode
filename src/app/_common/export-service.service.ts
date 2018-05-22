import { Injectable } from '@angular/core';

@Injectable()
export class ExportServiceService {
  csvSeparator = ',';
  constructor() { }
 /**
   * @param value //[{'姓名':'小明','成绩','100'}]
   * @param columns //['姓名','成绩']
   * @param exportFilename // '成绩统计表'
   */
  exportCSV(value,hrears, columns, exportFilename) {
    const data = value;
    let csv = '\ufeff';
    // headers
    for (let i = 0; i < hrears.length; i++) {
      const hrear = hrears[i];

      csv += '"' + (hrear.header || hrear) + '"';
      if (i < (hrears.length - 1)) {
        csv += this.csvSeparator;
      }
    }
     // body
     data.forEach((record) => {
      csv += '\n';
      for (let i_1 = 0; i_1 < columns.length; i_1++) {
        const column = columns[i_1];
        csv += '"' + this.resolveFieldData(record, column) + '"';
        if (i_1 < (columns.length - 1)) {
          csv += this.csvSeparator;
        }
      }
    });
    debugger;
    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, exportFilename + '.csv');
    } else {
      const link = document.createElement('a');
      link.style.display = 'none';
      document.body.appendChild(link);
      if (link.download !== undefined) {
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', exportFilename + '.csv');
        link.click();
      } else {
        csv = 'data:text/csv;charset=utf-8,' + csv;
        window.open(encodeURI(csv));
      }
      document.body.removeChild(link);
    }
  }
  resolveFieldData(data, field) {
    if (data && field) {
      if (field.indexOf('.') === -1) {
        data[field]= data[field]==undefined?'':data[field];
       return   data[field]+'\t';
      } else {
        const fields = field.split('.');
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value === null) {
            return "";
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
}
