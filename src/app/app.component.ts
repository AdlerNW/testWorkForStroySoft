import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    template: `
                <div class="container">
									<header-comp></header-comp>
									<headline-comp></headline-comp>
									<getfree-comp></getfree-comp>
									<footer-comp></footer-comp>
								</div>`,
		styleUrls: ['./app.component.css']
})
export class AppComponent {}