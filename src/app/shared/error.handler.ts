import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsHandler implements ErrorHandler {
  messages: string[] = [];

  handleError(error: Error) {
    
  }

  clear() {
    this.messages = [];
  }
}
