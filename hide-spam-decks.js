var spamBros = ['CaglarYilmazz', 'ISpreadI']

;(function() {
  console.log('[HideSpamDecks] Running deckspam extension')

  hideSpam()

  function hideSpam() {
    var decks = document.querySelectorAll('div[class^="Item__DeckContainer"]')
    decks.forEach((deck) => {
    	hideMe(deck)
	});
  }

  function hideMe(deck) {
	var author = deck.querySelector('div[class^="Item__DeckAuthor"]').childNodes[0].text
	if(spamBros.includes(author))
		deck.style.display = 'none'
	else deck.style.display = 'flex'
  }


const config = { attributes: true, attributeFilter: ['class'], childList: false, characterData: false };
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
		if (mutation.type === 'attributes') {
            hideSpam(mutation.target);
        }
    }
};

const observer = new MutationObserver(callback);

var targetNodes = document.querySelectorAll('div[class^="Item__DeckContainer"]');
targetNodes.forEach((n) => {
	observer.observe(n, config)
});


})()