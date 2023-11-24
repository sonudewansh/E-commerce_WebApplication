<script lang="ts">
	import { deleteData, getData } from '../helper/localstorage';
	import ProductCard from "../lib/productCard.svelte"
	import Footer from "../lib/footer.svelte";
	import { get } from "svelte/store";
	import { cartItems } from "../cart";
	

	const handleLogout=()=>{
  		deleteData()
  		location.reload()
	}

	const products : Product[] = [
		{
			id: "price_1OFVp4SDrTsAvMFhq6rXtVnW",
			img_src: "https://m.media-amazon.com/images/I/41prb8zbVPL._MCnd_AC_.jpg",
			name: "MSI Katana 15, Intel 12th Gen...",
			price: 75990
		},
		{
			id: "price_1OFVr7SDrTsAvMFh4OcSxzfu",
			img_src: "https://m.media-amazon.com/images/I/61PrdKgYaYL._AC_UY327_FMwebp_QL65_.jpg",
			name: "MSI Bravo 15 Gaming Laptop..",
			price: 46990
		},
		{
			id: "price_1OFVsDSDrTsAvMFhHmHFnBUO",
			img_src: "https://m.media-amazon.com/images/I/71odFxm6AQL._AC_UY327_FMwebp_QL65_.jpg",
			name: "MSI GF63 Thin, Intel 11th Gen. i7-11800H..",
			price: 68590
		},
		{
			id: "price_1OFVt6SDrTsAvMFhT5yNNEHr",
			img_src: "https://m.media-amazon.com/images/I/61w06bQsOyL._AC_UY327_FMwebp_QL65_.jpg",
			name: "MSI Modern 15, Intel 11th Gen. i5-1155G7...",
			price: 47999
		},
		{
			id: "price_1OFVuHSDrTsAvMFhbSjUHQ3N",
			img_src: "https://m.media-amazon.com/images/I/516qCPpFXkL._AC_UY327_FMwebp_QL65_.jpg",
			name: "Acer Nitro V Laptop 13th Gen Intel Core i5..",
			price: 76990
		},
		{
			id: "price_1OFVv4SDrTsAvMFhYPcIziAY",
			img_src: "https://m.media-amazon.com/images/I/714TjZtB+hL._AC_UY327_FMwebp_QL65_.jpg",
			name: "Fujitsu UH-X 13th Gen Intel Evo Core i5..",
			price: 86990
		},
		{
			id: "price_1OFVvxSDrTsAvMFhgkM0R8bv",
			img_src: "https://m.media-amazon.com/images/I/71I5fx8iPJL._AC_UY327_FMwebp_QL65_.jpg",
			name: "Dell 15 Vostro 3510 Laptop, Intel Core i5..",
			price: 51879
		},
		{
			id: "price_1OFVxUSDrTsAvMFhbmpCEMSq",
			img_src: "https://m.media-amazon.com/images/I/51-OoAkxQqL._AC_UY327_FMwebp_QL65_.jpg",
			name: "Dell Inspiron 3525 Laptop, AMD Ryzen..",
			price: 31599
		},
		{
			id: "price_1OFW5jSDrTsAvMFhdnrirXHp",
			img_src: "https://m.media-amazon.com/images/I/51jUcRK69ML._AC_UY327_FMwebp_QL65_.jpg",
			name: "Dell G15 5520 Gaming Laptop, Intel i5..",
			price: 70990
		},
		{
			id: "price_1OFW6VSDrTsAvMFhlBxNyRNB",
			img_src: "https://m.media-amazon.com/images/I/710aJMxsUXL._AC_UY327_FMwebp_QL65_.jpg",
			name: "Xiaomi Notebook Ultra Max 11th Core i5..",
			price: 48990
		},
		{
			id: "price_1OFW79SDrTsAvMFhg4kCT9AI",
			img_src: "https://m.media-amazon.com/images/I/71KBDHTMKgL._AC_UY327_FMwebp_QL65_.jpg",
			name: "Mi Notebook Pro Intel Core i5..",
			price: 42490
		},
		{
			id: "price_1OFW7qSDrTsAvMFhbotLcnPV",
			img_src: "https://m.media-amazon.com/images/I/71fSS6dVWzL._AC_UY327_FMwebp_QL65_.jpg",
			name: "HP Laptop 15s, 11th Gen Intel Core i3..",
			price: 37990
		}
	]

	async function checkout() {
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(
				{ items: get(cartItems) }
			)
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
		});
	}

	function handleScroll() {
    //   console.log("Scrolling...");
    }

</script>

<main on:scroll={handleScroll} class="h-screen overflow-y-auto">

<header class="text-gray-100 body-font sticky top-0 w-full bg-sky-800">
		<div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
		  <button class=" flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 no-underline">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
			  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
			</svg>
			<span class="ml-3 text-xl no-underline">Notebooks Field</span>
		</button>
		  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<!-- <button  class="mr-5 hover:text-gray-900">Home</button> -->
			<button  class="mr-5 hover:text-gray-900">Products</button>
			<button on:click={() => checkout()} class="mr-5 hover:text-gray-900">Check Out</button>
		  </nav>
		  <button on:click={()=>handleLogout("LOGIN")} class="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Logout</button>
		</div>
</header>

<section>
	<div class="flex flex-wrap w-full mb-10 mt-10 flex-col items-center text-center">
		<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Notebooks Field e-commerce</h1>
		<p class="lg:w-1/2 w-full leading-relaxed text-gray-500">notebooksfield.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence</p>
	</div>
</section>

<section >
	<div>	
		<div class="flex flex-wrap justify-center">
		{#each products as product}
			<ProductCard product={product}/>
		{/each}
		</div>
	</div>
</section>

<Footer/>

</main>
