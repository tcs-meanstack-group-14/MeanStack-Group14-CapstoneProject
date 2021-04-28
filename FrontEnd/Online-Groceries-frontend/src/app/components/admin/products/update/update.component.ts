import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

	updateProductForm = this.fb.group({
		productId: ['', [Validators.required]],
		name: ['', [Validators.required]],
		price: ['', [Validators.required]],
		quantity: ['', [Validators.required]],
	})

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

	onSubmit() {
		const [productId, name, price, quantity] = ["productId", "name", "price", "quantity"].map(
			key => this.updateProductForm.get(key) as FormControl
		)

		const invalidCtrl = [name, price, quantity].find(ctrl => ctrl.invalid);

		if (invalidCtrl !== undefined) {
			console.debug("invalid ctrl: ", invalidCtrl);
		} else {
			const product = {
				productId: productId.value,
				name: name.value,
				price: price.value,
				quantity: quantity.value,
			}
			console.table(product);
		}
	}

}
