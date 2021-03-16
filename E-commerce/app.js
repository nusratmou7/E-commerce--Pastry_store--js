
var p_total=document.getElementById('p_total')
var s_total=document.getElementById('s_total')
var total_cart=document.getElementById('total_cart')
var discount_code1=document.getElementById('discount_code1')


const decrease=(indec,itemp)=>{
    var itemval=document.getElementById(indec)
    var itemp=document.getElementById(itemp)
    if(itemval.value <= 0){
        itemval.value=0
        alert('negative item not allowed')
    }else{
        itemval.value=parseInt( itemval.value)-1
        itemval.style.background='#fff'
        itemval.style.color='#000'
        itemp.innerHTML=parseInt(itemp.innerHTML)-15;
        p_total.innerHTML=parseInt(p_total.innerHTML)-15;
        total_cart.innerHTML=parseInt(p_total.innerHTML)+parseInt(s_total.innerHTML)
    }
}
const increase=(indec,itemp)=>{
    var itemval=document.getElementById(indec)
    var itemp=document.getElementById(itemp)
    if(itemval.value >= 5){
        itemval.value=5
        alert('max 5 allowed')
        itemval.style.background='red'
        itemval.style.color='#fff'
    }else{
        itemval.value=parseInt(itemval.value)+1
        itemp.innerHTML=parseInt(itemp.innerHTML)+15;
        p_total.innerHTML=parseInt(p_total.innerHTML)+15;
        total_cart.innerHTML=parseInt(p_total.innerHTML)+parseInt(s_total.innerHTML)
    }
}

const discount_code=()=>{
    let totalcur=parseInt(total_cart.innerHTML)
    let error=document.getElementById('error')
    if(discountcode.value=='m'){
        let newt=totalcur-15
        total_cart.innerHTML=newt
        error.innerHTML='hurrrrehhhhhhhhh'
    }else{
     error.innerHTML='try again'
    }
}