import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { JokesGeneratorComponent } from './jokes-generator.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [JokesGeneratorComponent]
})
export class JokesGeneratorModule { }
