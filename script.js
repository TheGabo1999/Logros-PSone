
/*// Declara una variable booleana para rastrear el estado actual
let imagen1Visible = true;

// Obtén referencias a la imagen y al botón
const achievementImage = document.getElementById('achievementImage');
const achievementUnlock = document.getElementById('achievementUnlock');

// Intenta recuperar el src de LocalStorage
const savedSrc = localStorage.getItem('savedSrc');
if (savedSrc) {
    achievementImage.src = savedSrc;
}

// Agrega un evento de clic al botón
achievementUnlock.addEventListener('click', function() {
   // Verifica el estado actual y cambia la imagen en consecuencia
    if (imagen1Visible) {
        // Elimina una parte específica del src
        achievementImage.src = achievementImage.src.replace('_lock', '');
    } else {
        // Restaura el src original o elimina la misma parte
        achievementImage.src = achievementImage.src.replace('_lock', '');
    }

    // Guarda el nuevo src en LocalStorage
    localStorage.setItem('savedSrc', achievementImage.src);

    // Invierte el valor booleano para el próximo clic
    imagen1Visible = !imagen1Visible;
});*/





