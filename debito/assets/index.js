'use strict'

document.addEventListener('DOMContentLoaded', function () {
    let escala1al10 = document.querySelectorAll('.encuesta__puntuacion--item')

    let selectedItem = null;
    escala1al10.forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (selectedItem) {
                selectedItem.style.color = '';
                selectedItem.style.backgroundColor = '';
            }
            
            const item = e.target;
            item.style.color = 'white';
            item.style.backgroundColor = '#20A6FF';
            selectedItem = item;
        });
    });


    const rangeInput = document.querySelector('.encuesta__range');
    const rangeValue = document.querySelector('.encuesta__range-value');
    
    function updateRange() {
      const value = rangeInput.value;
      rangeValue.textContent = value;
    
      const min = rangeInput.min ? rangeInput.min : 0;
      const max = rangeInput.max ? rangeInput.max : 10;
      const percentage = ((value - min) / (max - min)) * 100;
    
      // Actualizar posición de la viñeta
      rangeValue.style.left = `calc(${percentage}% + (${8 - percentage * 0.15}px))`;
    
      // Actualizar variable CSS para el sombreado
      rangeInput.style.setProperty('--progress', `${percentage}%`);
    }
    
    rangeInput.addEventListener('input', updateRange);
    updateRange();
})
