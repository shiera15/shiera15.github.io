(function() {

    var card = document.getElementsByClassName('flip-container')[0];
    
    card.addEventListener('click', function() {
        if(!card.classList.contains('flipped')) {
            card.classList.add('flipped');
            setTimeout(function() {
                card.getElementsByClassName('back')[0].classList.add('expanded');
            }, 500);
        }
    });

})();