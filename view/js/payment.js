const formPayment = {
    paymentSelect:document.forms[0].elements[0],
    card:document.forms[0].elements[1],
    nameCard:document.forms[0].elements[2],
    mouthCard:document.forms[0].elements[3],
    yearCard:document.forms[0].elements[4],
    cvvCard:document.forms[0].elements[5],
    selectPay:document.forms[0].elements[6]
}




const formAddressPayment = {
    addressCep:document.forms[0].elements[9],
    addressStreet:document.forms[0].elements[10],
    addressNumber:document.forms[0].elements[11],
    addressDistrict:document.forms[0].elements[12],
    addressCity:document.forms[0].elements[13],
    addressUf:document.forms[0].elements[14]
}


// 5392076388465820
function validCard(form) {
    const mastercardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if(mastercardRegex.test(form.value)){
        form.setAttribute("class"," normal-style-form correct")
        formPayment.nameCard.removeAttribute('disabled')

    }else{
        form.setAttribute("class"," normal-style-form incorrect")
        formPayment.nameCard.setAttribute('disabled','disabled')
    }

}


function validNameCard(form){
    const nameRegex = /[A-Z][a-z].* [A-Z][a-z].*/

    if(nameRegex.test(form.value)){
        form.setAttribute("class"," normal-style-form correct")
        formPayment.mouthCard.removeAttribute('disabled')
    }else{
        form.setAttribute("class"," normal-style-form incorrect")
        formPayment.nameCard.setAttribute('disabled','disabled')
    }
}

function validMouthCard(form) {
    const regexCardName = /[1-9]/;

    if(regexCardName.test(form.value) && form.value <= 12 && form.value >= 1){
        form.setAttribute("class"," normal-style-form correct-second")
        formPayment.yearCard.removeAttribute('disabled')
    }else{
        form.setAttribute("class"," normal-style-form incorrect-second")
        formPayment.nameCard.setAttribute('disabled','disabled')
    }
    
}


function validYearCard(form){
    const regexNumber = /[1-9]/;

    const year = new Date().getFullYear()

    if(regexNumber.test(form.value) && form.value.length  == 4 && form.value >= year){
        form.setAttribute("class"," normal-style-form correct-third")
        formPayment.cvvCard.removeAttribute('disabled')
    }else{
        form.setAttribute("class"," normal-style-form incorrect-third")
        formPayment.nameCard.setAttribute('disabled','disabled')
    }
}

function validCvvCard(form){
    const regexNumber = /[1-9]/;

    if(regexNumber.test(form.value) && form.value.length  == 3){
        form.setAttribute("class"," normal-style-form correct-fourth")
        formPayment.selectPay.removeAttribute("disabled")
    }else{
        form.setAttribute("class"," normal-style-form incorrect-fourth")
        formPayment.nameCard.setAttribute('disabled','disabled')
    }
}

// Valid address ----------------- 


function validAdressCep(form) {
    const regexCep = /[0-9]{5}-[0-9]{3}/

    if(regexCep.test(form.value)){
        form.setAttribute("class"," normal-style-form correct")
        formAddressPayment.addressStreet.removeAttribute("disabled")
       
    }else{
        form.setAttribute("class"," normal-style-form incorrect")
        formAddressPayment.addressStreet.setAttribute("disabled","disabled")
    }
}


function validAdressStreet(form){
    const nameRegex = /[A-z][a-z ]/
    if(nameRegex.test(form.value)){
        form.setAttribute("class"," normal-style-form correct")
        formAddressPayment.addressNumber.removeAttribute("disabled")
    }else{
        form.setAttribute("class"," normal-style-form incorrect")
        formAddressPayment.addressNumber.setAttribute("disabled","disabled")
    }
}

function validAdressCity(form){
    const nameRegex = /[A-z][a-z ]/
    if(nameRegex.test(form.value)){
        form.setAttribute("class"," normal-style-form correct")
        formAddressPayment.addressUf.removeAttribute("disabled")
    }else{
        form.setAttribute("class"," normal-style-form incorrect")
        formAddressPayment.addressUf.setAttribute("disabled","disabled")
    }
}

function validAdressDistrict(form){
    const nameRegex = /[A-z][a-z ]/
    if(nameRegex.test(form.value)){
        form.setAttribute("class"," normal-style-form correct")
        formAddressPayment.addressCity.removeAttribute("disabled")
    }else{
        form.setAttribute("class"," normal-style-form incorrect")
        formAddressPayment.addressCity.setAttribute("disabled","disabled")
    }
}


function validAdressNumber(form){
    const regexNumber = /[0-9]/

    if(regexNumber.test(form.value)){
        form.setAttribute("class"," normal-style-form correct")
        formAddressPayment.addressDistrict.removeAttribute("disabled")
    }else{
        form.setAttribute("class"," normal-style-form incorrect")
        formAddressPayment.addressDistrict.setAttribute("disabled","disabled")
    }
}


function validAdressUf(form) {

    let saveCard = document.querySelector("#save-card");

    if(form.value != ""){
        form.setAttribute("class"," normal-style-form correct-uf")
        saveCard.removeAttribute("disabled")
    }
}

const paymenteBtn = document.getElementsByName('form-payment')

paymenteBtn[1].addEventListener("click",function() {
    if(paymenteBtn[1].checked){
        
        document.querySelector("#area-ticket").style.display = "flex"
        document.querySelector('#info-input-card').style.display = "none"

        for(let i = 1 ; i <= 5;i++){
            document.forms[0].elements[i].value = " "
        }
    }
})




paymenteBtn[0].addEventListener("click",function() {
    if(paymenteBtn[0].checked){
        document.querySelector("#area-ticket").style.display = "none"
        document.querySelector('#info-input-card').style.display = "flex"
    }
})


formPayment.card.addEventListener("blur",function(){
    validCard(this)
})

formPayment.nameCard.addEventListener('blur',function() {
    validNameCard(this)
})

formPayment.mouthCard.addEventListener('blur', function(){
    validMouthCard(this)
})

formPayment.yearCard.addEventListener('blur',function(){
    validYearCard(this)
})

formPayment.cvvCard.addEventListener('blur',function(){
    validCvvCard(this)
})


formAddressPayment.addressCep.addEventListener('blur',function() {
    validAdressCep(this)
})

formAddressPayment.addressStreet.addEventListener('blur',function(){
    validAdressStreet(this)
})

formAddressPayment.addressNumber.addEventListener('blur',function(){
    validAdressNumber(this)
})

formAddressPayment.addressDistrict.addEventListener('blur',function(){
    validAdressDistrict(this)
})

formAddressPayment.addressCity.addEventListener('blur',function(){
    validAdressCity(this)
})


formAddressPayment.addressUf.addEventListener('blur',function(){
    validAdressUf(this)
})


// function mask(form) {

//     if(form.value.length == 4 || form.value.length == 9 || form.value.length == 14){
//         form.value += " "
//     }
// }

// formPayment.card.addEventListener('keypress',function() {
//     mask(this)
// })