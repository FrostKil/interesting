window.addEventListener('DOMContentLoaded', function() {
    const billboard = document.getElementById('billboard-text');
    billboard.innerHTML = billboard.textContent + ' \u00A0 \u00A0 ' + billboard.textContent;
});