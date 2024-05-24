const text = prompt("Ismingizni kiriting");
const harf = prompt("Bironta harf kiriting");
let KattaHarf = text.toLowerCase();
if(KattaHarf.includes(harf))  {
    alert(`${KattaHarf} ismda ${harf} harfi mavjud`);
}  else {
    alert(`${KattaHarf} ismda ${harf} harfi mavjud emas`);
}  