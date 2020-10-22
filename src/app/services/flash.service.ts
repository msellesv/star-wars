import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  flash;

  constructor(private router:Router) {
    this.initService();
  }

  initService() {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationStart) {
        this.clearFlashMessage();
      }
    });
  }

  clearFlashMessage() {
    if (this.flash){
      if(!this.flash.keepAfterLocationChange) {
        delete this.flash;
      } else {
        // only keep for a single location change
        this.flash.keepAfterLocationChange = false;
      }
    }
  }

  Success(message, keepAfterLocationChange = false) {
    this.flash = {
      message: message,
      type: 'success', 
      keepAfterLocationChange: keepAfterLocationChange
    };
  }

  Error(message, keepAfterLocationChange = false) {
    this.flash = {
      message: message,
      type: 'error',
      keepAfterLocationChange: keepAfterLocationChange
    };
  }

}
