let counter_element=document.getElementById("counter_value");
function onIncrease(){
    let present_value=counter_element.textContent;
    let updated_value=parseInt(present_value)+1;
    counter_element.textContent=updated_value;
    if(updated_value<0){
        counter_element.style.color="red";
    }
    else if(updated_value>0){
        counter_element.style.color="green";
    }
    else{
        counter_element.style.color="black";
    }
}

function onDecrease(){
    let present_value=counter_element.textContent;
    let updated_value=parseInt(present_value)-1;
    counter_element.textContent=updated_value;
    if(updated_value<0){
        counter_element.style.color="red";
    }
    else if(updated_value>0){
        counter_element.style.color="green";
    }
    else{
        counter_element.style.color="black";
    }
}

function onReset(){
    counter_element.textContent="0";
    counter_element.style.color="black";
    
}