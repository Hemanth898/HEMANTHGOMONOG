const btn = document.querySelector('button');
const spans = document.getElementById('updateContent');

btn.onclick = function () {
    const name = prompt('enter your name');
    spans.innerHTML = 
    `Good morning! 🌞🌼 ${name}
Rise with purpose, shine with confidence, and let today be your masterpiece—painted with smiles, kindness, and little moments of magic. ✨
Remember, even the smallest step forward is a step toward something greater.
Breathe in hope, exhale doubt.
Have a truly beautiful day ahead! 🌈💫

`;
    btn.style.display = 'none'; 
    changeBackground();
};

document.body.addEventListener('click', function () {
    changeBackground();
});
