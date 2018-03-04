import { NgModule } from '@angular/core';
import { WordcountPipe } from './wordcount/wordcount';
@NgModule({
	declarations: [WordcountPipe],
	imports: [],
	exports: [WordcountPipe]
})
export class PipesModule {}
