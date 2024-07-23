const ass = document.getElementById('ass');
const clearr = document.getElementById('fd1b')
const in1 = document.getElementById('in1');
const in2 = document.getElementById('in2');
const in3 = document.getElementById('in3');
const fd2a = document.getElementById('fd2a');
const fd4b = document.getElementById('fd4b');
const fd4c = document.getElementById('fd4c');
const ssa = document.getElementById('ssa');
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const b1 = document.getElementById('b1');
const err1 = document.getElementById('err1');
const err2 = document.getElementById('err2');
const err3 = document.getElementById('err3');
const err4 = document.getElementById('err4');
const azz = document.getElementById('azz');
const bzz = document.getElementById('bzz');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const ld1 = document.getElementById('ld1');
const ld2 = document.getElementById('ld2');
const zza = document.getElementById('zza');

/* solve = p*
((r(1+r)**n)
/
((1+r)**n)-1) */
/* console.log(re)
console.log(ne)
console.log(in1.value) */

clearr.addEventListener("click", function() {
    in1.value = '';
    in2.value = '';
    in3.value = '';
    ch1.checked = false;
    ch2.checked = false;
    fd4b.style.borderColor = 'hsl(203, 41%, 72%)'
    fd4c.style.borderColor = 'hsl(203, 41%, 72%)'
}) 

in1.addEventListener('focusin', function() {
    ass.style.backgroundColor = 'hsl(61, 70%, 52%)';
    in1.style.borderColor = 'hsl(61, 70%, 52%)';
})

in1.addEventListener('focusout', function() {
    ass.style.backgroundColor = 'hsl(202, 86%, 94%)';
    in1.style.borderColor = 'hsl(203, 41%, 72%)'; 
})


/* if(document.getElementById('ch1').checked){
    console.log(ch1.value)
}
 */

fd4b.addEventListener('click', function(){
    if(ch1.checked == true){
        fd4c.style.borderColor = 'hsl(203, 41%, 72%)'
        ch1.style.accentColor = 'hsl(61, 70%, 52%)';
        fd4b.style.borderColor = 'hsl(61, 70%, 52%)';
    }
})

fd4c.addEventListener('click', function(){
    if(ch2.checked == true){
        fd4b.style.borderColor = 'hsl(203, 41%, 72%)'
        ch2.style.accentColor = 'hsl(61, 70%, 52%)';
        fd4c.style.borderColor = 'hsl(61, 70%, 52%)';
    }
})

function calcndisc(){
    ass.style.backgroundColor = 'hsl(202, 86%, 94%)'
    ass.style.color = 'hsl(200, 24%, 40%)'
    ass.style.borderColor = 'hsl(203, 41%, 72%)'
    in1.style.borderColor = 'hsl(203, 41%, 72%)'
    azz.style.backgroundColor = 'hsl(202, 86%, 94%)'
    azz.style.color = 'hsl(200, 24%, 40%)'
    azz.style.borderColor = 'hsl(203, 41%, 72%)'
    in2.style.borderColor = 'hsl(203, 41%, 72%)'
    bzz.style.backgroundColor = 'hsl(202, 86%, 94%)'
    bzz.style.color = 'hsl(200, 24%, 40%)'
    bzz.style.borderColor = 'hsl(203, 41%, 72%)'
    in3.style.borderColor = 'hsl(203, 41%, 72%)'
    err1.style.display = 'none';
    err2.style.display = 'none';
    err3.style.display = 'none';
    err4.style.display = 'none';
    ld1.style.display = 'none';
    ld2.style.display = 'block';
    if(ch1.checked == true){
        p = in1.value;
        b = in2.value;
        c = in3.value;
        n = b*12
        r = (c/100)/12 
        ra=(1+r)**n
        rb=r*ra
        rc=ra-1
        rd=rb/rc
        re=p*rd
        ne=re*n
        span1.innerText = re.toFixed(2);
        span2.innerText = ne.toFixed(2);
    }
    if(ch2.checked == true){
        p = in1.value;
        b = in2.value;
        c = in3.value;
        r = c/100
        x = r*p
        g = x/12
        span1.innerText = g.toFixed(2);
        span2.innerText = 'Null';
    }
}

b1.addEventListener('click', function(){
    if(in1.value == ''){
        err1.style.display = 'block';
        ass.style.backgroundColor = 'hsl(4, 69%, 50%)'
        ass.style.color = 'hsl(0, 0%, 100%)'
        ass.style.borderColor = 'hsl(4, 69%, 50%)'
        in1.style.borderColor = 'hsl(4, 69%, 50%)'
    }
    if(in2.value == ''){
        err2.style.display = 'block';
        azz.style.backgroundColor = 'hsl(4, 69%, 50%)'
        azz.style.color = 'hsl(0, 0%, 100%)'
        azz.style.borderColor = 'hsl(4, 69%, 50%)'
        in2.style.borderColor = 'hsl(4, 69%, 50%)'
    }
    if(in3.value == ''){
        err3.style.display = 'block';
        bzz.style.backgroundColor = 'hsl(4, 69%, 50%)'
        bzz.style.color = 'hsl(0, 0%, 100%)'
        bzz.style.borderColor = 'hsl(4, 69%, 50%)'
        in3.style.borderColor = 'hsl(4, 69%, 50%)'
    }
    if(ch1.checked == false && ch2.checked == false){
        err4.style.display = 'block';
    }
    else{
        calcndisc()
    }
})

/* function long(){
    if(in1.value == ''){
        err1.style.display = 'block';
        ass.style.backgroundColor = 'hsl(4, 69%, 50%)'
    }
} */




/* if(document.getElementById('ch1').checked == true){
    ch1.style.
}
 */














