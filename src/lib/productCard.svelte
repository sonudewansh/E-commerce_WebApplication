<script lang="ts">
    import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../cart";
    export let product : Product = {id: "", img_src: "", name:"", price: 0};
    let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
    // id: "1"
    let cartItemIndex = cart.findIndex((item) => {
        return item.id === product.id 
    });

    export let cartProduct = cart[cartItemIndex];
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => {
            return item.id === product.id
        });
        cartProduct = cart[cartItemIndex];
        // console.log(cart);
    });
</script>


<main class="card mx-4 mb-4 w-[200px]">
    <header class="card-header">
        <a  href={product.img_src}>
            <img class="h-[100px] w-[170px]" src={product.img_src} alt={product.name} />
        </a>
            <h7>{product.name}</h7>
    </header>
    <div class="h-5">
        {#if cartProduct !== undefined}
            <div class="card-body px-4">
                Added: <strong>{cartProduct.quantity}</strong>
            </div>
        {/if}
    </div>
    <div class="card-body px-4">
        Price: Rs.{product.price}
    </div>
    <footer class="card-footer">
        <button class="p-2 rounded bg-sky-800 focus:outline-none hover:bg-sky-900" on:click={() => addToCart(product.id)}>Add</button>
        <button class="p-2 rounded bg-green-800 focus:outline-none hover:bg-green-900" on:click={() => removeFromCart(product.id)}>Remove</button>
    </footer>
</main>