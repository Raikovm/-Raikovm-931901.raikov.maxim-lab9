function insert(num){
    document.form.textView.style.color='black';

    if ((num === '+') || (num === '-') || (num === '*') || (num === '/')){
        document.form.textView.value = document.form.textView.value + " " + num + " ";
        document.form.textView.style.color='gray';
    }
    else{
        document.form.textView.value = document.form.textView.value + num;
    }
}
function clean(){
    document.form.textView.value = "";
}
function back(){
    const expression = document.form.textView.value;

    if (expression.slice(-1) === ' '){
        document.form.textView.value = expression.substring(0,expression.length-3);
    }
    else{
        document.form.textView.value = expression.substring(0,expression.length-1);
    }
}
function equal(){
    const expression = document.form.textView.value;

    if(expression){
        document.form.textView.value = eval(expression);
        document.form.textView.style.color='black';
    }
}