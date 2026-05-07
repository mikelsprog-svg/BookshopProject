import "./CartPage.css";
import { CartList } from "../components/Cart/CartList";
import { CartSummary } from "../components/Cart/CartSummary";

export function CartPage() {
	return (
		<main className="cart-page">
			<h1 className="cart-page__title">Cesta de la compra</h1>
			<section className="cart-page__layout">
				<div className="cart-page__items">
					<CartList />
				</div>
				<aside className="cart-page__sidebar">
					<CartSummary />
				</aside>
			</section>
		</main>
	);
}
