const blagues = [
    "Le crocodile 🐊 n'attend pas que le gorille 🦍 accouche", 
    "On as pas besoin d'eau 💦 potable pour eteindre un incendie 🔥.", 
    "La France 🇫🇷 nous a souvent volé nos richesses 💎💰... vous allez aussi nous voler nos footballeur 🏃🏼‍♂️ ?", 
    "L'oiseau 🦜 sur le baobab ne doit pas oublier qu'il a porté des lunettes 🕶!", 
    "Il est tombé comme du n'importe quoi, on dirait la girafe 🦒 qui s'emmêle les pattes."
];

window.addEventListener('load', ()=>{
    getBlague ();
});


let generate = document.getElementById('generateBlague');
generate.addEventListener('click', ()=>{
    getBlague ();
});

function getBlague (){
    let presi = document.getElementById('presi');
    let index = Math.floor(Math.random() * blagues.length);
    presi.innerHTML = blagues[index];
}