const expressionElem = document.getElementById('expression');
const resultElem = document.getElementById('result');

let currentExpr = '';
let openParenthesis = true;

//ham them ki tu
function appendInput(val) {
    if(val == '()'){
        if(openParenthesis){
            currentExpr += '(';
        }else {
            currentExpr +=')';
        }
        openParenthesis = !openParenthesis;
    }else{
        currentExpr += val;
    }
    expressionElem.innerHTML = currentExpr;
}

//xoa het (btn C)
function clearAll(){
    currentExpr ='';
    expressionElem.innerText='';
    resultElem.innerText='0';
    openParenthesis = true;
}

//tinh ket qua(btn =)
function calculate(){
    if(!currentExpr) return;

    try{
        //chuyen doi ki tu
        let formattedExpr = currentExpr
        .replace(/×/g,'*')
        .replace(/÷/g,'/')
        .replace(/%/g,'/100');
        
        let calculatedResult = eval(formattedExpr);

        //lam tron so thap phan
        if(!Number.isInteger(calculatedResult)){
            calculatedResult = parseFloat(calculatedResult.toFixed(8));
        }
        resultElem.innerText= calculatedResult;
    }
    catch(error){
        resultElem.innerText = 'Lỗi';
    }
    
}