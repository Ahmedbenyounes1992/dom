let add = document.querySelectorAll('.addtocart')
for (let i = 0 ; i < add.length; i++){
    add[i].addEventListener('click', () => {
        console.log('product added');
    })
}