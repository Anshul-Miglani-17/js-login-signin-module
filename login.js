const form=document.querySelector('.form');
const logstatus=document.querySelector('.log');
const signstatus=document.querySelector('.log2');
const logsin=document.querySelector('.login');
const signin=document.querySelector('.signin');

const form2=document.querySelector('.form2');

let users=[];

form.addEventListener('submit',e=>{
    e.preventDefault();
    let flag=0;
    let flag2=0;
    for(let i=0;i<users.length;i++){
        if(users[i][0]===form.name.value){
            flag2=1;
            if(users[i][1]===form.pass.value){
                flag=1;
                //console.log('logged in');
                logstatus.innerText='loggedin.. enjoyy';
                break;
            }
        }
    }
    if(flag2===0){
        //console.log('incorrect details');
        logstatus.innerText='user not registered.. signin first';

    }else if(flag==0){
        logstatus.innerText='incorrect password or username';

    }
    //console.log(form.name.value , form.pass.value);
});

form2.addEventListener('submit',e => {
    e.preventDefault();
    let flag=0;
    for(let i=0;i<users.length;i++){
        if(users[i][0]===form2.name2.value){
            //console.log('user existed');
            signstatus.innerText='user existed';
            flag=1;
            break;
        }
    }if(flag===0){
        let data=[form2.name2.value,form2.pass2.value];
    let d=users.push(data);
    console.log(d);
    signstatus.innerText='signed in.. now login to enjoy';
    }
    
});

logstatus.addEventListener('click',()=>{
    logstatus.innerText='log status';
});
signstatus.addEventListener('click',()=>{
    signstatus.innerText='signin status';
});

logsin.addEventListener('click',e=>{
    if(form2.parentElement.style.display==='unset' && form.parentElement.style.display==='none' ){
        form2.parentElement.style.display='none';
        form.parentElement.style.display='unset';
        
    }
    if(form.parentElement.style.display==='unset')
    form.parentElement.style.display='none';
    else 
    form.parentElement.style.display='unset';  
});
//sign

signin.addEventListener('click',e=>{
    if(form2.parentElement.style.display==='none' && form.parentElement.style.display==='unset' ){
        form2.parentElement.style.display='unset';
        form.parentElement.style.display='none';
    }

    if(form2.parentElement.style.display==='unset')
    form2.parentElement.style.display='none';
    else 
    form2.parentElement.style.display='unset';
});

