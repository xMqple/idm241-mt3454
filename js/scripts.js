// Select the checkbox
const checkbox = document.getElementById('check');

// Add an event listener to toggle the checkbox state
document.querySelector('.like-icon').addEventListener('click', function() {
    checkbox.checked = !checkbox.checked; // Toggle the checkbox
});
  
var QtyInput = (function () {
	var $qtyInputs = $(".qty-input");

	if (!$qtyInputs.length) {
		return;
	}

	var $inputs = $qtyInputs.find(".product-qty");
	var $countBtn = $qtyInputs.find(".qty-count");
	var qtyMin = parseInt($inputs.attr("min"));
	var qtyMax = parseInt($inputs.attr("max"));

	$inputs.change(function () {
		var $this = $(this);
		var $minusBtn = $this.siblings(".qty-count-minus");
		var $addBtn = $this.siblings("qty-count-add");
		var qty = parseInt($this.val());

		if (isNaN(qty) || qty <= qtyMin) {
			$this.val(qtyMin);
			$minusBtn.attr("disabled", true);
		} else {
			$minusBtn.attr("disabled", false);
			
			if(qty >= qtyMax){
				$this.val(qtyMax);
				$addBtn.attr('disabled', true);
			} else {
				$this.val(qty);
				$addBtn.attr('disabled', false);
			}
		}
	});

	$countBtn.click(function () {
		var operator = this.dataset.action;
		var $this = $(this);
		var $input = $this.siblings(".product-qty");
		var qty = parseInt($input.val());

		if (operator == "add") {
			qty += 1;
			if (qty >= qtyMin + 1) {
				$this.siblings(".qty-count-minus").attr("disabled", false);
			}

			if (qty >= qtyMax) {
				$this.attr("disabled", true);
			}
		} else {
			qty = qty <= qtyMin ? qtyMin : (qty -= 1);
			
			if (qty == qtyMin) {
				$this.attr("disabled", true);
			}

			if (qty < qtyMax) {
				$this.siblings("qty-count-add").attr("disabled", false);
			}
		}

		$input.val(qty);
	});
})();

/* Add to cart */
document.getElementById('addToCartButton').addEventListener('click', function () {
    // Get the game image source
    const gameImageSrc = document.querySelector('.game-image img').src;

    // Create a new div for the cart item
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    // Add the image to the cart item
    const cartImage = document.createElement('img');
    cartImage.src = gameImageSrc;
    cartImage.alt = 'Game Image';
    cartImage.className = 'cart-image';

    // Append the image to the cart item
    cartItem.appendChild(cartImage);

    // Append the cart item to the shopping cart container
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.appendChild(cartItem);
});