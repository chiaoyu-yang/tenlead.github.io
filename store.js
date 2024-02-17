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
        const g = getInputvalue('g') * 4200;
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
     upadateCaseNumber('k',2465, true);
     upadatePV('k', 3000 ,true);
 });
 document.getElementById('k-minus').addEventListener('click',function(){
     upadateCaseNumber('k',2465 , false);
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
    upadatePV('a', 2200 ,true);
 });
 document.getElementById('v-minus').addEventListener('click',function(){
     upadateCaseNumber('v', 3210, false);
     upadatePV('a', 2200 ,false);
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
    
    const a_number = parseInt(document.getElementById('a-number').value);
    const a_total = document.getElementById('a-total').textContent;
    const a_pv = document.getElementById('a-pv').textContent;
    sessionStorage.setItem('a_number', a_number);
    sessionStorage.setItem('a_total', a_total);
    sessionStorage.setItem('a_pv', a_pv);

    const b_number = parseInt(document.getElementById('b-number').value);
    const b_total = document.getElementById('b-total').textContent;
    const b_pv = document.getElementById('b-pv').textContent;
    sessionStorage.setItem('b_number', b_number);
    sessionStorage.setItem('b_total', b_total);
    sessionStorage.setItem('b_pv', b_pv);

    const c_number = parseInt(document.getElementById('c-number').value);
    const c_total = document.getElementById('c-total').textContent;
    const c_pv = document.getElementById('c-pv').textContent;
    sessionStorage.setItem('c_number', c_number);
    sessionStorage.setItem('c_total', c_total);
    sessionStorage.setItem('c_pv', c_pv);

    const d_number = parseInt(document.getElementById('d-number').value);
    const d_total = document.getElementById('d-total').textContent;
    const d_pv = document.getElementById('d-pv').textContent;
    sessionStorage.setItem('d_number', d_number);
    sessionStorage.setItem('d_total', d_total);
    sessionStorage.setItem('d_pv', d_pv);

    const e_number = parseInt(document.getElementById('e-number').value);
    const e_total = document.getElementById('e-total').textContent;
    const e_pv = document.getElementById('e-pv').textContent;
    sessionStorage.setItem('e_number', e_number);
    sessionStorage.setItem('e_total', e_total);
    sessionStorage.setItem('e_pv', e_pv);

    const f_number = parseInt(document.getElementById('f-number').value);
    const f_total = document.getElementById('f-total').textContent;
    const f_pv = document.getElementById('f-pv').textContent;
    sessionStorage.setItem('f_number', f_number);
    sessionStorage.setItem('f_total', f_total);
    sessionStorage.setItem('f_pv', f_pv);

    const g_number = parseInt(document.getElementById('g-number').value);
    const g_total = document.getElementById('g-total').textContent;
    const g_pv = document.getElementById('g-pv').textContent;
    sessionStorage.setItem('g_number', g_number);
    sessionStorage.setItem('g_total', g_total);
    sessionStorage.setItem('g_pv', g_pv);

    const h_number = parseInt(document.getElementById('h-number').value);
    const h_total = document.getElementById('h-total').textContent;
    const h_pv = document.getElementById('h-pv').textContent;
    sessionStorage.setItem('h_number', h_number);
    sessionStorage.setItem('h_total', h_total);
    sessionStorage.setItem('h_pv', h_pv);

    const i_number = parseInt(document.getElementById('i-number').value);
    const i_total = document.getElementById('i-total').textContent;
    const i_pv = document.getElementById('i-pv').textContent;
    sessionStorage.setItem('i_number', i_number);
    sessionStorage.setItem('i_total', i_total);
    sessionStorage.setItem('i_pv', i_pv);

    const j_number = parseInt(document.getElementById('j-number').value);
    const j_total = document.getElementById('j-total').textContent;
    const j_pv = document.getElementById('j-pv').textContent;
    sessionStorage.setItem('j_number', j_number);
    sessionStorage.setItem('j_total', j_total);
    sessionStorage.setItem('j_pv', j_pv);

    const k_number = parseInt(document.getElementById('k-number').value);
    const k_total = document.getElementById('k-total').textContent;
    const k_pv = document.getElementById('k-pv').textContent;
    sessionStorage.setItem('k_number', k_number);
    sessionStorage.setItem('k_total', k_total);
    sessionStorage.setItem('k_pv', k_pv);

    const l_number = parseInt(document.getElementById('l-number').value);
    const l_total = document.getElementById('l-total').textContent;
    const l_pv = document.getElementById('l-pv').textContent;
    sessionStorage.setItem('l_number', l_number);
    sessionStorage.setItem('l_total', l_total);
    sessionStorage.setItem('l_pv', l_pv);

    const m_number = parseInt(document.getElementById('m-number').value);
    const m_total = document.getElementById('m-total').textContent;
    const m_pv = document.getElementById('m-pv').textContent;
    sessionStorage.setItem('m_number', a_number);
    sessionStorage.setItem('m_total', a_total);
    sessionStorage.setItem('m_pv', a_pv);

    const n_number = parseInt(document.getElementById('n-number').value);
    const n_total = document.getElementById('n-total').textContent;
    const n_pv = document.getElementById('n-pv').textContent;
    sessionStorage.setItem('n_number', n_number);
    sessionStorage.setItem('n_total', n_total);
    sessionStorage.setItem('n_pv', n_pv);

    const o_number = parseInt(document.getElementById('o-number').value);
    const o_total = document.getElementById('o-total').textContent;
    const o_pv = document.getElementById('o-pv').textContent;
    sessionStorage.setItem('o_number', o_number);
    sessionStorage.setItem('o_total', o_total);
    sessionStorage.setItem('o_pv', o_pv);

    const p_number = parseInt(document.getElementById('p-number').value);
    const p_total = document.getElementById('p-total').textContent;
    const p_pv = document.getElementById('p-pv').textContent;
    sessionStorage.setItem('p_number', p_number);
    sessionStorage.setItem('p_total', p_total);
    sessionStorage.setItem('p_pv', p_pv);

    const q_number = parseInt(document.getElementById('q-number').value);
    const q_total = document.getElementById('q-total').textContent;
    const q_pv = document.getElementById('q-pv').textContent;
    sessionStorage.setItem('q_number', q_number);
    sessionStorage.setItem('q_total', q_total);
    sessionStorage.setItem('q_pv', q_pv);

    const r_number = parseInt(document.getElementById('r-number').value);
    const r_total = document.getElementById('r-total').textContent;
    const r_pv = document.getElementById('r-pv').textContent;
    sessionStorage.setItem('r_number', r_number);
    sessionStorage.setItem('r_total', r_total);
    sessionStorage.setItem('r_pv', r_pv);

    const s_number = parseInt(document.getElementById('s-number').value);
    const s_total = document.getElementById('s-total').textContent;
    const s_pv = document.getElementById('s-pv').textContent;
    sessionStorage.setItem('s_number', s_number);
    sessionStorage.setItem('s_total', s_total);
    sessionStorage.setItem('s_pv', s_pv);

    const t_number = parseInt(document.getElementById('t-number').value);
    const t_total = document.getElementById('t-total').textContent;
    const t_pv = document.getElementById('t-pv').textContent;
    sessionStorage.setItem('t_number', t_number);
    sessionStorage.setItem('t_total', t_total);
    sessionStorage.setItem('t_pv', t_pv);

    const u_number = parseInt(document.getElementById('u-number').value);
    const u_total = document.getElementById('u-total').textContent;
    const u_pv = document.getElementById('u-pv').textContent;
    sessionStorage.setItem('u_number', u_number);
    sessionStorage.setItem('u_total', u_total);
    sessionStorage.setItem('u_pv', u_pv);

    const v_number = parseInt(document.getElementById('v-number').value);
    const v_total = document.getElementById('v-total').textContent;
    const v_pv = document.getElementById('v-pv').textContent;
    sessionStorage.setItem('v_number', v_number);
    sessionStorage.setItem('v_total', v_total);
    sessionStorage.setItem('v_pv', v_pv);

    const w_number = parseInt(document.getElementById('w-number').value);
    const w_total = document.getElementById('w-total').textContent;
    const w_pv = document.getElementById('w-pv').textContent;
    sessionStorage.setItem('w_number', w_number);
    sessionStorage.setItem('w_total', w_total);
    sessionStorage.setItem('w_pv', w_pv);

    const x_number = parseInt(document.getElementById('x-number').value);
    const x_total = document.getElementById('x-total').textContent;
    const x_pv = document.getElementById('x-pv').textContent;
    sessionStorage.setItem('x_number', x_number);
    sessionStorage.setItem('x_total', x_total);
    sessionStorage.setItem('x_pv', x_pv);

    const productQuantity = document.getElementById('productQuantity').textContent;
    const sub_total = document.getElementById('sub-total').textContent;
    const pv_total = document.getElementById('pv-total').textContent;
    sessionStorage.setItem('productQuantity', productQuantity);
    sessionStorage.setItem('sub_total', sub_total);
    sessionStorage.setItem('pv_total', pv_total);
    
    // 重定向到 responsive-table.html 頁面
    window.location.href = 'responsive-table.html';
}

