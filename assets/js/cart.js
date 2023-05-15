
let input = document.querySelector(".quantityInput")


function handleIncreaseQuantity(){
    input.value++
}
function handleDEcreaseQuantity(){

    if(input.value <=1){
    
    }
    else{
    input.value--
    }
}