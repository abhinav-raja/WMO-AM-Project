function changeQuantity(amount){
		const quantDisplay = document.getElementById('quantity');
		currVal = parseInt(quantDisplay.value)
		quantDisplay.value = currVal + amount;
		if(parseInt(quantDisplay.value) < 0){
			quantDisplay.value = 0;
		} else if (parseInt(quantDisplay.value) > 99){
			quantDisplay.value = 99;
		}
}

for(let i = 1; i <= 4; i++){
	document.getElementById(`img${i}Btn`).onclick = function(){
		document.getElementById('mainImgDisplay').src = `imgs/sneakers${i}.png`;
	}
}

