(function() {

    var card = document.getElementsByClassName('flip-container')[0];
    
    card.addEventListener('click', function() {
        if(!card.classList.contains('flipped')) {
            card.classList.add('flipped');
        }
    });

})();