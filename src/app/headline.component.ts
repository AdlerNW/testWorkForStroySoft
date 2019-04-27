import { Component } from '@angular/core';
      
@Component({
    selector: 'headline-comp',
    template: `<div class="headline">В честь Дня народного единства Smeta.Cloud дарит всем бесплатный пакет на три дня!</div>`,
    styles: [`
		.headline {
			color: white;
			font-size: 3.18vh;
			letter-spacing: 0.2vh;
			width: 100vh;
			text-align: center;
			margin: 13vh auto 0 auto;
		}
`]
})
export class HeadlineComponent {}