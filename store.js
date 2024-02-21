function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = "$" + caseNumber * price;
    calculateTotal();
    updateTotalQuantity()
    }

    function upadatePV(product, price, isIncreasing){
        const caseInput = document.getElementById(product + '-number');
        let caseNumber = caseInput.value;
                if(isIncreasing){
                    caseNumber = parseInt(caseNumber);
                }
                
        else if(caseNumber > 0){
               caseNumber = parseInt(caseNumber);
             }
            
        // update case total 
        const caseTotal = document.getElementById(product + '-pv');
        caseTotal.innerText = caseNumber * price;
        calculateTotal2();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        if (productNumber > 0) {
            productInput.classList.add('red-text');
        } else {
            productInput.classList.remove('red-text');
        }
        return productNumber;
    }

    // 金額
    function calculateTotal(){
        const a = getInputvalue('a') * 1995;
        const ab = getInputvalue('b') * 1995;
        const c = getInputvalue('c') * 1995;
        const d = getInputvalue('d') * 3990;
        const e = getInputvalue('e') * 4200;
        const f = getInputvalue('f') * 4200;
        const g = getInputvalue('g') * 3990;
        const h = getInputvalue('h') * 3990;
        const i = getInputvalue('i') * 3990;
        const j = getInputvalue('j') * 2415;
        const k = getInputvalue('k') * 3465;
        const l = getInputvalue('l') * 2415;
        const m = getInputvalue('m') * 2415;
        const n = getInputvalue('n') * 3465;
        const o = getInputvalue('o') * 29400;
        const p = getInputvalue('p') * 1995;
        const q = getInputvalue('q') * 1995;
        const r = getInputvalue('r') * 2625;
        const s = getInputvalue('s') * 2625;
        const t = getInputvalue('t') * 3210;
        const u = getInputvalue('u') * 3210;
        const v = getInputvalue('v') * 3210;
        const w = getInputvalue('w') * 3210;
        const x = getInputvalue('x') * 1000;

        
        const subTotal = a + ab + c + d + e + f + g + h + i +j + k + l + m + n + o + p + q + r + s + t + u + v + w + x;

        document.getElementById('a-total').innerText = "$" + a;
        document.getElementById('b-total').innerText = "$" + ab;
        document.getElementById('c-total').innerText = "$" + c;
        document.getElementById('d-total').innerText = "$" + d;
        document.getElementById('e-total').innerText = "$" + e;
        document.getElementById('f-total').innerText = "$" + f;
        document.getElementById('g-total').innerText = "$" + g;
        document.getElementById('h-total').innerText = "$" + h;
        document.getElementById('i-total').innerText = "$" + i;
        document.getElementById('j-total').innerText = "$" + j;
        document.getElementById('k-total').innerText = "$" + k;
        document.getElementById('l-total').innerText = "$" + l;
        document.getElementById('m-total').innerText = "$" + m;
        document.getElementById('n-total').innerText = "$" + n;
        document.getElementById('o-total').innerText = "$" + o;
        document.getElementById('p-total').innerText = "$" + p;
        document.getElementById('q-total').innerText = "$" + q;
        document.getElementById('r-total').innerText = "$" + r;
        document.getElementById('s-total').innerText = "$" + s;
        document.getElementById('t-total').innerText = "$" + t;
        document.getElementById('u-total').innerText = "$" + u;
        document.getElementById('v-total').innerText = "$" + v;
        document.getElementById('w-total').innerText = "$" + w;
        document.getElementById('x-total').innerText = "$" + x;

        // update on the html 
        document.getElementById('sub-total').innerText = "$" + subTotal;
    }

    function calculateTotal2(){
        const a = getInputvalue('a') * 1700;
        const ab = getInputvalue('b') * 1700;
        const c = getInputvalue('c') * 1700;
        const d = getInputvalue('d') * 3500;
        const e = getInputvalue('e') * 3600;
        const f = getInputvalue('f') * 3600;
        const g = getInputvalue('g') * 3500;
        const h = getInputvalue('h') * 3500;
        const i = getInputvalue('i') * 3500;
        const j = getInputvalue('j') * 1800;
        const k = getInputvalue('k') * 3000;
        const l = getInputvalue('l') * 1800;
        const m = getInputvalue('m') * 1800;
        const n = getInputvalue('n') * 3000;
        const o = getInputvalue('o') * 26000;
        const p = getInputvalue('p') * 1700;
        const q = getInputvalue('q') * 1700;
        const r = getInputvalue('r') * 2300;
        const s = getInputvalue('s') * 2300;
        const t = getInputvalue('t') * 2400;
        const u = getInputvalue('u') * 2400;
        const v = getInputvalue('v') * 2200;
        const w = getInputvalue('w') * 2200;
        const x = getInputvalue('x') * 0;
        const pvTotal = a + ab + c + d + e + f + g + h + i +j + k + l + m + n + o + p + q + r + s + t + u + v + w + x;

        document.getElementById('a-pv').innerText = "$" + a;
        document.getElementById('b-pv').innerText = "$" + ab;
        document.getElementById('c-pv').innerText = "$" + c;
        document.getElementById('d-pv').innerText = "$" + d;
        document.getElementById('e-pv').innerText = "$" + e;
        document.getElementById('f-pv').innerText = "$" + f;
        document.getElementById('g-pv').innerText = "$" + g;
        document.getElementById('h-pv').innerText = "$" + h;
        document.getElementById('i-pv').innerText = "$" + i;
        document.getElementById('j-pv').innerText = "$" + j;
        document.getElementById('k-pv').innerText = "$" + k;
        document.getElementById('l-pv').innerText = "$" + l;
        document.getElementById('m-pv').innerText = "$" + m;
        document.getElementById('n-pv').innerText = "$" + n;
        document.getElementById('o-pv').innerText = "$" + o;
        document.getElementById('p-pv').innerText = "$" + p;
        document.getElementById('q-pv').innerText = "$" + q;
        document.getElementById('r-pv').innerText = "$" + r;
        document.getElementById('s-pv').innerText = "$" + s;
        document.getElementById('t-pv').innerText = "$" + t;
        document.getElementById('u-pv').innerText = "$" + u;
        document.getElementById('v-pv').innerText = "$" + v;
        document.getElementById('w-pv').innerText = "$" + w;
        document.getElementById('x-pv').innerText = "$" + x;

        // update on the html 
        document.getElementById('pv-total').innerText = pvTotal;
    }

document.getElementById('a-plus').addEventListener('click',function(){
   upadateCaseNumber('a', 1995 ,true);
   upadatePV('a', 1700 ,true);
});

document.getElementById('a-minus').addEventListener('click',function(){
    upadateCaseNumber('a', 1995, false);
    upadatePV('a', 1700 ,false);
});

document.getElementById('b-plus').addEventListener('click',function(){
    upadateCaseNumber('b',1995, true);
    upadatePV('b', 1700 ,true);
});
document.getElementById('b-minus').addEventListener('click',function(){
    upadateCaseNumber('b',1995 , false);
    upadatePV('b', 1700 ,false);
});

document.getElementById('c-plus').addEventListener('click',function(){
    upadateCaseNumber('c', 1995 ,true);
    upadatePV('c', 1700 ,true);
 });
 document.getElementById('c-minus').addEventListener('click',function(){
     upadateCaseNumber('c', 1995, false);
     upadatePV('c', 1700 ,false);
 });

 document.getElementById('d-plus').addEventListener('click',function(){
    upadateCaseNumber('d',3990, true);
    upadatePV('d', 3500 ,true);
});
document.getElementById('d-minus').addEventListener('click',function(){
    upadateCaseNumber('d',3990 , false);
    upadatePV('d', 3500 ,false);
});
 
 document.getElementById('e-plus').addEventListener('click',function(){
     upadateCaseNumber('e',4200, true);
     upadatePV('e', 3600 ,true);
 });
 document.getElementById('e-minus').addEventListener('click',function(){
     upadateCaseNumber('e',4200 , false);
     upadatePV('e', 3600 ,false);
 });

 
 document.getElementById('f-plus').addEventListener('click',function(){
    upadateCaseNumber('f', 4200 ,true);
    upadatePV('f', 3600 ,true);
 });
 document.getElementById('f-minus').addEventListener('click',function(){
     upadateCaseNumber('f', 4200, false);
     upadatePV('f', 3600 ,false);
 });
 
 document.getElementById('g-plus').addEventListener('click',function(){
     upadateCaseNumber('g',3990, true);
     upadatePV('g', 3500 ,true);
 });
 document.getElementById('g-minus').addEventListener('click',function(){
     upadateCaseNumber('g',3990 , false);
     upadatePV('g', 3500 ,false);
 });

 
 document.getElementById('h-plus').addEventListener('click',function(){
    upadateCaseNumber('h', 3990 ,true);
    upadatePV('h', 3500 ,true);
 });
 document.getElementById('h-minus').addEventListener('click',function(){
     upadateCaseNumber('h', 3990, false);
     upadatePV('h', 3500 ,false);
 });
 
 document.getElementById('i-plus').addEventListener('click',function(){
     upadateCaseNumber('i',3990, true);
     upadatePV('i', 3500 ,true);
 });
 document.getElementById('i-minus').addEventListener('click',function(){
     upadateCaseNumber('i',3990 , false);
     upadatePV('i', 3500 ,false);
 });

 
 document.getElementById('j-plus').addEventListener('click',function(){
    upadateCaseNumber('j', 2415 ,true);
    upadatePV('j', 1800 ,true);
 });
 document.getElementById('j-minus').addEventListener('click',function(){
     upadateCaseNumber('j', 2415, false);
     upadatePV('j', 1800 ,false);
 });
 
 document.getElementById('k-plus').addEventListener('click',function(){
     upadateCaseNumber('k',3465, true);
     upadatePV('k', 3000 ,true);
 });
 document.getElementById('k-minus').addEventListener('click',function(){
     upadateCaseNumber('k',3465 , false);
     upadatePV('k', 3000 ,false);
 });

 
 document.getElementById('l-plus').addEventListener('click',function(){
    upadateCaseNumber('l', 2415 ,true);
    upadatePV('l', 1800 ,true);
 });
 document.getElementById('l-minus').addEventListener('click',function(){
     upadateCaseNumber('l', 2415, false);
     upadatePV('l', 1800 ,false);
 });
 
 document.getElementById('m-plus').addEventListener('click',function(){
     upadateCaseNumber('m',2415, true);
     upadatePV('m', 1800 ,true);
 });
 document.getElementById('m-minus').addEventListener('click',function(){
     upadateCaseNumber('m',2415 , false);
     upadatePV('m', 1800 ,false);
 });

 
 document.getElementById('n-plus').addEventListener('click',function(){
    upadateCaseNumber('n', 3465 ,true);
    upadatePV('n', 3000 ,true);
 });
 document.getElementById('n-minus').addEventListener('click',function(){
     upadateCaseNumber('n', 3465, false);
     upadatePV('n', 3000 ,false);
 });
 
 document.getElementById('o-plus').addEventListener('click',function(){
     upadateCaseNumber('o',29400, true);
     upadatePV('o', 26000 ,true);
 });
 document.getElementById('o-minus').addEventListener('click',function(){
     upadateCaseNumber('o',29400 , false);
     upadatePV('o', 26000 ,false);
 });

 
 document.getElementById('p-plus').addEventListener('click',function(){
    upadateCaseNumber('p', 1995 ,true);
    upadatePV('p', 1700 ,true);
 });
 document.getElementById('p-minus').addEventListener('click',function(){
     upadateCaseNumber('p', 1995, false);
     upadatePV('p', 1700 ,false);
 });
 
 document.getElementById('q-plus').addEventListener('click',function(){
     upadateCaseNumber('q',1995, true);
     upadatePV('q', 1700 ,true);
 });
 document.getElementById('q-minus').addEventListener('click',function(){
     upadateCaseNumber('q',1995 , false);
     upadatePV('q', 1700 ,false);
 });

 
 document.getElementById('r-plus').addEventListener('click',function(){
    upadateCaseNumber('r', 2625 ,true);
    upadatePV('r', 2300 ,true);
 });
 document.getElementById('r-minus').addEventListener('click',function(){
     upadateCaseNumber('r', 2625, false);
     upadatePV('r', 2300 ,false);
 });
 
 document.getElementById('s-plus').addEventListener('click',function(){
     upadateCaseNumber('s',2625, true);
     upadatePV('s', 2300 ,true);
 });
 document.getElementById('s-minus').addEventListener('click',function(){
     upadateCaseNumber('s',2625 , false);
     upadatePV('s', 2300 ,false);
 });

 
 document.getElementById('t-plus').addEventListener('click',function(){
    upadateCaseNumber('t', 3210 ,true);
    upadatePV('t', 2400 ,true);
 });
 document.getElementById('t-minus').addEventListener('click',function(){
     upadateCaseNumber('t', 3210, false);
     upadatePV('t', 2400 ,false);
 });
 
 document.getElementById('u-plus').addEventListener('click',function(){
     upadateCaseNumber('u',3210, true);
     upadatePV('u', 2400 ,true);
 });
 document.getElementById('u-minus').addEventListener('click',function(){
     upadateCaseNumber('u',3210 , false);
     upadatePV('u', 2400 ,false);
 });

 
 document.getElementById('v-plus').addEventListener('click',function(){
    upadateCaseNumber('v', 3210 ,true);
    upadatePV('v', 2200 ,true);
 });
 document.getElementById('v-minus').addEventListener('click',function(){
     upadateCaseNumber('v', 3210, false);
     upadatePV('v', 2200 ,false);
 });
 
 document.getElementById('w-plus').addEventListener('click',function(){
     upadateCaseNumber('w',3210, true);
     upadatePV('w', 2200 ,true);
 });
 document.getElementById('w-minus').addEventListener('click',function(){
     upadateCaseNumber('w',3210 , false);
     upadatePV('w', 2200 ,false);
 });

 
 document.getElementById('x-plus').addEventListener('click',function(){
    upadateCaseNumber('x', 1000 ,true);
    upadatePV('x', 0 ,true);
 });
 document.getElementById('x-minus').addEventListener('click',function(){
     upadateCaseNumber('x', 1000, false);
     upadatePV('x', 0 ,false);
 });

 document.getElementById('confirm').addEventListener('click',function(){
    sendDataToNextPage()
});

document.getElementById("a-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
}); 

document.getElementById("b-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("c-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("d-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("e-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("f-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("g-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("h-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("i-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("j-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("k-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("l-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("m-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("n-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("o-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("p-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("q-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("r-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("s-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("t-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("u-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("v-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("w-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});

document.getElementById("x-number").addEventListener("input", function() {
    calculateTotal();
    calculateTotal2();
    updateTotalQuantity();
});




function updateTotalQuantity() {
    const a_number = parseInt(document.getElementById('a-number').value);
    const b_number = parseInt(document.getElementById('b-number').value);
    const c_number = parseInt(document.getElementById('c-number').value);
    const d_number = parseInt(document.getElementById('d-number').value);
    const e_number = parseInt(document.getElementById('e-number').value);
    const f_number = parseInt(document.getElementById('f-number').value);
    const g_number = parseInt(document.getElementById('g-number').value);
    const h_number = parseInt(document.getElementById('h-number').value);
    const i_number = parseInt(document.getElementById('i-number').value);
    const j_number = parseInt(document.getElementById('j-number').value);
    const k_number = parseInt(document.getElementById('k-number').value);
    const l_number = parseInt(document.getElementById('l-number').value);
    const m_number = parseInt(document.getElementById('m-number').value);
    const n_number = parseInt(document.getElementById('n-number').value);
    const o_number = parseInt(document.getElementById('o-number').value);
    const p_number = parseInt(document.getElementById('p-number').value);
    const q_number = parseInt(document.getElementById('q-number').value);
    const r_number = parseInt(document.getElementById('r-number').value);
    const s_number = parseInt(document.getElementById('s-number').value);
    const t_number = parseInt(document.getElementById('t-number').value);
    const u_number = parseInt(document.getElementById('u-number').value);
    const v_number = parseInt(document.getElementById('v-number').value);
    const w_number = parseInt(document.getElementById('w-number').value);
    const x_number = parseInt(document.getElementById('x-number').value);
    const productQuantity = a_number + b_number + c_number + d_number + e_number + f_number + g_number + h_number + i_number + j_number + k_number + l_number + m_number + n_number + o_number + p_number + q_number + r_number + s_number + t_number +
    u_number + v_number + w_number + x_number;
    
    // 更新總計數量
    document.getElementById('productQuantity').textContent = productQuantity;
}

function sendDataToNextPage() {
    const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

    items.forEach(item => {
        const number = parseInt(document.getElementById(`${item}-number`).value);
        const total = document.getElementById(`${item}-total`).textContent;
        const pv = document.getElementById(`${item}-pv`).textContent;
        sessionStorage.setItem(`${item}_number`, number);
        sessionStorage.setItem(`${item}_total`, total);
        sessionStorage.setItem(`${item}_pv`, pv);
    });

    const productQuantity = document.getElementById('productQuantity').textContent;
    const subTotal = document.getElementById('sub-total').textContent;
    const pvTotal = document.getElementById('pv-total').textContent;
    sessionStorage.setItem('productQuantity', productQuantity);
    sessionStorage.setItem('sub_total', subTotal);
    sessionStorage.setItem('pv_total', pvTotal);
    
    // 重定向到 responsive-table.html 頁面
    window.location.href = 'responsive-table.html';
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const returnParam = urlParams.get('return');

    // Only populate fields if returning from another page
    if (returnParam === 'true') {
        populateFieldsFromSessionStorage();
    }
};

function populateFieldsFromSessionStorage() {
    const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

    items.forEach(item => {
        const number = sessionStorage.getItem(`${item}_number`);
        const total = sessionStorage.getItem(`${item}_total`);
        const pv = sessionStorage.getItem(`${item}_pv`);
        const numberElement = document.getElementById(`${item}-number`);
        const totalElement = document.getElementById(`${item}-total`);
        const pvElement = document.getElementById(`${item}-pv`);

        numberElement.value = number;
        totalElement.textContent = total;
        pvElement.textContent = pv;

        // 检查 `${item}-number` 是否大于 0，如果是则添加 'red-text' 类
        if (parseInt(number) > 0) {
            numberElement.classList.add('red-text');
        }
    });

    const productQuantity = sessionStorage.getItem('productQuantity');
    const subTotal = sessionStorage.getItem('sub_total');
    const pvTotal = sessionStorage.getItem('pv_total');
    document.getElementById('productQuantity').textContent = productQuantity;
    document.getElementById('sub-total').textContent = subTotal;
    document.getElementById('pv-total').textContent = pvTotal;
}
