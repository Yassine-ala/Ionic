import { NgModule } from '@angular/core';
import { WordcountPipe } from './wordcount/wordcount';
import { TimemodPipe } from './timemod/timemod';

@NgModule({
	declarations: [WordcountPipe,
    TimemodPipe],
	imports: [],
	exports: [WordcountPipe,
    TimemodPipe]
})
export class PipesModule {}
