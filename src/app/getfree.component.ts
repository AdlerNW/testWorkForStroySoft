import { Component } from '@angular/core';

@Component({
	selector: 'getfree-comp',
	template: `
								<button class="getfree" (click)="toggle($event)">Получить бесплатный пакет</button>
							`,
	styles: [`
						.getfree{
							display: block;
							background: #f66;
							border: 3px outset #fff;
							height: 5.55vh;
							font-size: 2vh;
							color: #fff;
							border-radius: 3px;
							padding: 0 4vh 0 4vh;
							margin: 3.8vh auto 0 auto;
						}

						
						`]
})

export class GetFreeComponent {
	pressed = false;
	toggle(e: any): void {
		this.pressed = !this.pressed;

		fetch("http://localhost:3000/vote", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ vote: this.pressed })
		});

		if (this.pressed) e.target.style.borderStyle = 'inset';
		else e.target.style.borderStyle = 'outset';
	}
}