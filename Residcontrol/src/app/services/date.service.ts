import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatHorasMinutos(totalMinutos: number){
    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;
    let result = ''
    if(horas > 0)
      result = result + `${horas}h `
    if(minutos > 0)
      result = result + `${minutos}min`
    return result;
  }
}
