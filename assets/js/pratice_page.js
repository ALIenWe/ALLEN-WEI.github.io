
/*方塊呼喚*/
const btnofnav = document.querySelector('.circle_btn');
const listitems = document.querySelector('.list_items');
let x = false;

btnofnav.addEventListener("mousedown", function () {
    if (x == false) {
        this.classList.add("rotate");
        listitems.style.display = "block";
        x = true;
    }
    else {
        this.classList.remove("rotate");
        listitems.style.display = "none";
        x = false;
    }
})


