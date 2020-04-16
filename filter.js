const filterIt = () => {

    let checkBoxBankID = document.getElementById('bankid'); 
    let checkBoxSnabb = document.getElementById('snabb');
    let checkBoxutanUC = document.getElementById('utanUC');
    let checkBoxAnmarkningar = document.getElementById('anmarkningar');
    let checkBoxHidden = document.getElementById('hidden'); //Hidden, to display items with slider if no box is checked
    
   //Push classes to array based on if it's checked or not
   let isChecked = []
   let unChecked = []
    
    if (checkBoxBankID.checked == true){isChecked.push('bankid')}else{unChecked.push('bankid')}
    if (checkBoxSnabb.checked == true){isChecked.push('snabb')}else{unChecked.push('snabb')}
    if (checkBoxutanUC.checked == true){isChecked.push('utanUC')}else{unChecked.push('utanUC')}
    if (checkBoxAnmarkningar.checked == true){isChecked.push('anmarkningar')}else{unChecked.push('anmarkningar')}
    if (checkBoxHidden.checked == true){isChecked.push('hidden')}

    //Add display none to classes in unChecked array and in isChecked array
    for(i=0;i<unChecked.length;i++) {
        let getClass = document.getElementsByClassName(unChecked[i]);
            for(c=0;c<getClass.length;c++) {
                getClass[c].style.display ="none";}}
    for(i=0;i<isChecked.length;i++) {
        let getClass = document.getElementsByClassName(isChecked[i]);
            for(c=0;c<getClass.length;c++) {
                getClass[c].style.display ="none";}}

    //Show divs if they contain all the classes in the array and if they are above the slider amount
        let classes = isChecked, classCheck = "." + classes.join(".")
        for(i=0;i<document.querySelectorAll(classCheck).length;i++) {
            let getClass = document.querySelectorAll(classCheck)[i];
            let getAmount = parseFloat(document.getElementById("amount").innerHTML)
            let spanValue = parseFloat(getClass.getElementsByTagName('span')[0].innerHTML)
            console.log(getClass)
            console.log(spanValue)
            if(spanValue < getAmount) {
            getClass.style.display ="none";}
            if (spanValue >= getAmount) {
            getClass.style.display ="block";}
            }

        }

//Respond on slider input and update data
window.addEventListener("load",()=>{
    const slider = document.getElementById("loanAmount");
    const amount = document.getElementById("amount");
    document.getElementById("amount").innerHTML = slider.value;

    slider.oninput = function() {
      amount.innerHTML = this.value;
      filterIt();
    }})