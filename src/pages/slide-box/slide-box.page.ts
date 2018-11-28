import { Component } from '@angular/core';

@Component({
	templateUrl: 'slide-box.html'
})
export class SlideBoxPage {
	public items: any[];

	constructor() {
		this.items = this.generateItems(7);
	}

	private generateItems(n: number): any {
		let items = [];
		for (let i = 0; i < n; i++) {
			items.push({
				image: 'https://picsum.photos/g/786/1024?image=' + i
			});
		}
		return items;
	}
}
