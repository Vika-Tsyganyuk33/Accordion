document.body.querySelector('.container').addEventListener('click', fun)
let a = [];
function fun(e){
    let y = e.target.closest('div')
    y.querySelector('.text').classList.add('some')
    a.push(y.querySelector('.text'))
    if(a.length > 1){
        a[0].classList.remove('some')
        a.splice(0,1)
    }
}