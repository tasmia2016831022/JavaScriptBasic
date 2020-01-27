const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');
let lastcheck;
function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox =>{
            console.log(checkbox);
            if(checkbox === this || checkbox === lastcheck){
                inBetween =! inBetween;
                console.log('Check');
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });

    }
    lastcheck = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));