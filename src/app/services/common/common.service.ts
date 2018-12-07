import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _toast:ToastrService) { }

  success(message:string){
    this._toast.success(message,'OK!');
  }

  error(error:string){
    this._toast.error(error,'ERROR!')
  }
}
