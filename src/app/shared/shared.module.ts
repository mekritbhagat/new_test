import { CommonModule } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
// import { MatFileUploadModule } from 'angular-material-fileupload';
import { MaterialModule } from './material/material.module';
import { LazyImageComponent } from './lazy-image/lazy-image.component';
import { LazyImageDataComponent } from './lazy-image-data/lazy-image-data.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    //CoreModule,
    // MatFileUploadModule,
  ],
  declarations: [LazyImageComponent, LazyImageDataComponent, ConfirmdialogComponent],
  exports: [ MaterialModule ],
  entryComponents: [LazyImageComponent, LazyImageDataComponent]
})
export class SharedModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [LazyImageComponent, ''],
      [LazyImageDataComponent, '']
    ];
    // for (const [component, name] of elements) {
    //   const el = createCustomElement(component, { injector: this.injector });
    //   customElements.define(name, el);
    // }
  }
}
