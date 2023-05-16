
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

var table = document.querySelector(".mainDescr");

var iconDelete = document.querySelector(".delete");

iconDelete.addEventListener("click", function(){

   table.remove();

})