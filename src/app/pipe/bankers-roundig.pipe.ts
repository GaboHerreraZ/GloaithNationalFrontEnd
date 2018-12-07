import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankersRoundig'
})
export class BankersRoundigPipe implements PipeTransform {


  transform(value: any,limit:number): any {
    let convert;
    let position = value.toString().indexOf(".");
    let first = String(value).substring(position+1,position+2);
    let val = String(value).substring(position+2,value.length)
    if(val.length>1){
      let newValue; 
      let one = val.substr(0,1);
      let two = val.substr(1,1);
        if(Number(two)>=5&&Number(one)!=9){
          convert = Number(one)+1;
        }else if(Number(one)==9){
          convert = Number(String((first+one)))+1;
          return String(value).substring(0,position)+"."+convert;
        }
        else{
          convert = one;
        }    
        newValue = String(value).substring(0,position)+"."+first+convert;
        return newValue;
    }else{
      return value;
    }
  }

}
