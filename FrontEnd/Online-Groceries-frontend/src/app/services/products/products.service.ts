import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	host = "http://localhost:9090";
	endpoint = "/inventory";

	constructor(private http: HttpClient) { }

	addProduct(product: { name: String, price: Number, stockInventory: Number }) {
		const url = this.host + this.endpoint + "/addOne";
		this.http.post(url, product)
			.subscribe(result => console.log(result), error => console.error(error));
	}

	updateProduct(update: { productId: String, name: String, price: Number, stockInventory: Number }) {
		const url = this.host + this.endpoint + "/updateById";
		this.http.put(url, update)
			.subscribe(result => console.log(result), error => console.error(error));
	}

	deleteProduct(product: { productId: String }) {
		const url = this.host + this.endpoint + "/deleteById";
		this.http.delete(url, { params: { "productId": product.productId.toString() } })
			.subscribe(result => console.log(result), error => console.error(error));
	}
}