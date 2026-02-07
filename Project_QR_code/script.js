const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
generateBtn=wrapper.querySelector(".form button"),
qrImg=wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click",() =>{
let qrvalue=qrInput.value;
if(!qrvalue) return ;
generateBtn.innerText="Generating QR Code.,,,";
qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
qrImg.addEventListener("load",()=>{
    wrapper.classList.add('active');
})
// console.log(qrvalue);
wrapper.classList.add("active");
generateBtn.innerText="Generate";
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})
const input = document.getElementById("Enterbox");

input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
        document.title = ` ${input.value}`;
    } else {
        document.title = "QR Code Generator";
    }
});

