var responses = {
	"NOTFOUND" : {
				 "weight" : 0,
				 "responses" : [
						"cosa ti fa pensare?",
						"Non credo di capirti bene.",
						"Puoi parlarmene?",
						"Questo è al quanto interessante.",
						"Perfavore, dimmi di più.",
						"Cambiamo argomento... parlami un po' della tua famiglia",
						"Puoi parlarmene di più?",
						"Perchè mi dici questo *?"
					]
				},
	"scusa" : {
				 "weight" : 1,
				 "responses" : ["Non ti scusare.", "Non c'è bisogno di scusarsi."]},

	"sempre" : {
				 "weight" : 1,
				 "responses" : ["Puoi pensare ad un esempio specifico?"]},
	"perchè" : {
				 "weight" : 6,
				 "responses" : ["E' questo il vero motivo?"]},
	"forse" : {
				 "weight" : 1,
				 "responses" : ["Non mi sembri tanto sicuro."]},
	"penso" : {
				 "weight" : 2,
				 "responses" : ["lo pensi davvero?"]},
	"tu" : {
				 "weight" : 1,
				 "responses" : ["Stavamo parlando di te, non di me.","Perchè dici queste cose su di me?","perchè ti interessa se io \"*\"?"]},
	"sì" : {
				 "weight" : 1,
				 "responses" : ["perchè lo pensi?","Sembri abbastanza positivo."]
				},
	"no" : {
				 "weight" : 1,
				 "responses" : ["Perchè no?","Ne sei sicuro?"]},
	"sono" : {
				 "weight" : 1,
				 "responses" : ["Mi dispiace sentire che tu stia *.","Per quanto tempo sei stato *?","Pensi sia normale che tu *?","Ti piace essere *?","Sei venuto da me perchè sei *?"]},
	"mi sento" : {
				 "weight" : 4,
				 "responses" : ["Parlami di più di questi sentimenti.","Ti senti spesso *?","Ti piace stare *?","Perchè ti senti così?"]},
	"famiglia" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"madre" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"padre" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"mamma" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"sorella" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"fratello" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"marito" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"moglie" : {
				 "weight" : 16,
				 "responses" : ["Dimmi di più sulla tua famiglia.","Che rapporti hai con la tua famiglia?","Per te è importante la tua famiglia?"]},
	"bambino" : {
				 "weight" : 16,
				 "responses" : ["Avevi tanti amici da bambino?","Qual'è il tuo ricordo migliore da bambino?","Ricordi qualche sogno o incubo fatto da bambino?","Come pensi che la tua infanzia influenzi i tuoi sentimenti di adesso?"]},
	"sognato" : {
				 "weight" : 4,
				 "responses" : ["Cosa ti fa provare quel sogno","Sogni tante volte?","Che persone appaiono nei tuoi sogni?","I tuoi sogni ti disturbano?"]},
	"incubo" : {
				 "weight" : 3,
				 "responses" : ["Cosa ti fa provare quell'incubo?","Hai molte volte gli incubi?","Che persone appaiono nei tuoi incubi?","I tuoi incubi ti disturbano?"]},
	"ciao" : {
				 "weight" : 1,
				 "responses" : ["Ciao di nuovo. come stai?","Come stai oggi? hai avuto problemi?"]},
	"buon pomeriggio" : {
				 "weight" : 1,
				 "responses" : ["Ciao di nuovo. come stai?","Come stai oggi? hai avuto problemi?"]},
	"buongiorno" : {
				 "weight" : 1,
				 "responses" : ["Ciao di nuovo. come stai?","Come stai oggi? hai avuto problemi?"]},
	"arrivederci" : {
				 "weight" : 1,
				 "responses" : ["Arrivederci e alla prossima seduta"]},
	"ho bisogno" : {
				 "weight" : 5,
				 "responses" : ["perchè ne hai bisogno? averlo ti aiuterebbe?"],},
	"perchè non puoi" : {
				 "weight" : 3,
				 "responses" : ["Pensi davvero che io non *"],},
	"perchè non posso" : {
				 "weight" : 3,
				 "responses" : ["Pensi di doverlo poter fare?"],},
	"non posso" : {
				 "weight" : 4,
				 "responses" : ["Come fai a sapere di non riuscirci?"]},
	"ricordi" : {
				 "weight" : 5,
				 "responses" : ["Pensi spesso a *?","Pensare a * ti fa venire in mente altro?"]},
	"ti ricordi" : {
				 "weight" : 6,
				 "responses" : ["Pensi che me lo dimenticherei? Sì, mi ricordo di *."]},
	"se" : {
				 "weight" : 3,
				 "responses" : ["Pensi sia possibile *?","Vorresti davvero *?",]},
	"nome" : {
				 "weight" : 15,
				 "responses" : ["Non mi interessano i nomi.","Ti avevo già detto che non mi interessanto i nomi -- continua per favore."]},
	"un'altra lingua" : {
				 "weight" : 1,
				 "responses" : ["Ti avevo già detto che non parlo nessuna lingua oltre all'italiao "]},
	"computer" : {
				 "weight" : 12,
				 "responses" : ["Ti fanno paura i computer?"]},
	"sei" : {
				 "weight" : 2,
				 "responses" : ["Pechè pensi a *?"]},
	"sono" : {
				 "weight" : 1,
				 "responses" : ["Pensavi che non lo potessero essere?"]},
	"tuoi" : {
				 "weight" : 1,
				 "responses" : ["Perchè ti interessi ai miei *"]},
	"io ero" : {
				 "weight" : 2,
				 "responses" : ["Cosa sarebbe successo se tu fossi *?"]},
	"eri tu" : {
				 "weight" : 2,
				 "responses" : ["Ti piacerebbe pensare che io fossi *"]},
	"io desidero" : {
				 "weight" : 1,
				 "responses" : ["Cosa significherebbe per te ottenerlo?"]},
	"io desideravo" : {
				 "weight" : 1,
				 "responses" : ["Sei riuscito ad ottenerlo o sei semplicemente andato avanti?"]},
	"sono triste" : {
				"weight" : 1,
				"responses" : ["Mi dispiace che tu lo sia. Cosa ti rende triste?"]
			},
	"sono felice" : {
				"weight" : 1,
				"responses" : ["Questo è un bene. Cosa ti rende felice?"]
			},
	"sono annoiato" : {
				"weight" : 1,
				"responses" : ["Cosa ti annoia?"]
			}

	
};

var synonyms = {
	"sorry" : [
		"mi dispiace"
	],
	"another language" : [
		"deutsch",
		"francais",
		"french",
		"italiano",
		"italian",
		"espanol",
		"spanish",
		"xforeign"
	],
};

var responsesWithWildcard = {
	"sono *1-3* felice" : {	
							weight : 20,
							replacementWord : "sono felice"
						},
	"sono *1-3* triste" : {	
							weight : 20,
							replacementWord : "aono triste"
						},
	"sono *1-3* annoiato" : {	
							weight : 20,
							replacementWord : "sono annoiato"
						}
	
};



var initialMessages = ["Ciao, benvenuto nel mio ufficio. Hai un qualche problema di cui vorresti parlarmi?", "Come stai? Parlami del tuo problema"];
var endChatTerms = ["arrivederci","devo andare","devo andarmene","esci"];
var chatHistory = [];
var keywords = [];
var conversationOver = false;
var usedResponses = [];


//funzione che inizia la chat ( comincia eliza ) 
function startElizaChat(){
	
	
	getKeywordsByWeight();

	// randomizza il messaggio iniziale
	var initialMessage = initialMessages[Math.floor(Math.random()*initialMessages.length)];
	chatHistory.push({ isEliza : true, content : initialMessage });
	displayChat();

}

// Prende le parole chiave prese in input da utente in base al peso
function getKeywordsByWeight(){
	var weights = [];
	var tempKeywords = [];
	//aggiunge le risposte all frase
	for(var responseKeyword in responses){
		var weight = responses[responseKeyword].weight;
		tempKeywords[responseKeyword] = weight;
		// se l'array weights non contiene il peso della parola chiave, il peso viene aggiunto all'array
		if(!weights.includes(weight)){
			weights.push(weight);
		}
	}

	
	// aggiunge le parole simili alla parola chiave inserita
	for(var wordWithResponse in synonyms){
		if(wordWithResponse in tempKeywords){
			var weight = tempKeywords[wordWithResponse];

			for(var i = 0;i < synonyms[wordWithResponse].length;i++){
				var similarWord = synonyms[wordWithResponse][i];
				tempKeywords[similarWord] = weight;
			}
		}// se non è presente nessuna parola chiave questa funzione non fa nulla
	}

	// risposta con molto un po' poco tanto ecc.
	for(var word in responsesWithWildcard){
		var weight = responsesWithWildcard[word].weight;

		if(!weights.includes(weight)){
			weights.push(weight);
		}
		
		tempKeywords[word] = weight;
	}

	//ordina le parole in base al peso decrescente
	weights = weights.sort(sortNumber);
	
	
	for(var i = 0;i < weights.length;i++){
		var weight = weights[i];
		for(var word in tempKeywords){
			
			if(tempKeywords[word] == weight && word != "NOTFOUND"){
				var obj = {};
				obj.word = word;
				obj.weight = weight;

				keywords.push(obj);
			}
		}
	}
}

//manda la risposta di eliza
function sendElizaNewMessage(newMessage){
	
	// aggiunge Elisa all'interfaccia utente
	chatHistory.push({ isEliza : false, content : newMessage });
	displayChat(); //output a schermo del messaggio
	clearSendTextbox();	//svuota dopo ogni messaggio la barra degli input
	
	if(!conversationOver){
		
		newMessage = processInput(newMessage);
		
		var response = analyze(newMessage);
	}else{
		var response = "Our conversation has ended. Refresh the page to start again.";
	}

	
	setTimeout(function(){
		usedResponses.push(response);
		chatHistory.push({ isEliza : true, content : response });
		displayChat();
	}, determineResponseTime());

}

// analizza i messaggi
function analyze(newMessage){
	var found = false; // variabile booleana che indica se è una parola chiave o meno
	var response = ''; // stringa che conterra la risposta

	//controlla parola per parola 
	for (var i = 0;i < keywords.length;i++) {
		var word = keywords[i].word;
		// controlla che il messaggio non sia un messaggio di fine
		if(endChatTerms.contains(newMessage)){
			conversationOver = true;
			newMessage = "goodbye";
		}

		
		if(word.indexOf("*") != -1 && containsKeywordWithWildcard(newMessage, word) && !found){
			
			response = selectResponse(findBasicKeywordFromKeywordWithWildcard(word));
			found = true;

		}else if((newMessage.indexOf(word) != -1 && newMessage.length == word.length || newMessage.indexOf(word + " ") != -1 || newMessage.indexOf(" " + word) != -1) && !found){
			
			response = selectResponse(word);
			
			
			found = true;

		}
		

		if(found && response.indexOf("*") != -1){
				
				var remainingInput = newMessage.substring(newMessage.indexOf(word) + word.length+1, newMessage.length);				
				var rightOfWildcardInResponse = response.substring(response.indexOf("*")+1);				
				var startOfResponseToWildcard = response.substring(0, response.indexOf("*"));	
				var startOfInputMinusOneCharacter = remainingInput.substring(0, remainingInput.length-1); // prende l'input dell'utente
				var remainingOfInputOnRight = remainingInput.substring(remainingInput.length-1, remainingInput.length).replace("[^A-Za-z]","");


				response =  startOfResponseToWildcard + replaceWords(startOfInputMinusOneCharacter + remainingOfInputOnRight) + rightOfWildcardInResponse;
	
		}
		if(found){
			break;
		}
		

	}

	if(!found){
		response = responses["NOTFOUND"].responses[Math.floor(Math.random()*responses["NOTFOUND"].responses.length)];
	}

	return response;
}

// funzione che seleziona la risposta da dare all'utente
function selectResponse(word){
	var potentialResponses = [];
	if(word in responses){
		potentialResponses = responses[word];
	}else{
		potentialResponses = findResponsesForSimilarWord(word);
	}

	
	var newResponses = [];
	var originalResponsesSize = potentialResponses.responses.length;


	for(var i = 0;i < originalResponsesSize;i++){
		newResponses.push(potentialResponses.responses[i]);

		//If has wild card, adds another
		if(potentialResponses.responses[i].indexOf("*") !== -1){
			newResponses.push(potentialResponses.responses[i]);
		}

		//If the response hasnt been used
		if(!usedResponses.contains(potentialResponses.responses[i])){
			newResponses.push(potentialResponses.responses[i]);
		}
	}
	return newResponses[Math.floor(Math.random()*newResponses.length)];
}

//funzione che processa l'input
function processInput(message){
	message = message.toLowerCase(); // mettiamo l'input da utente tutto in minuscolo così che sia più facile lavorarci sopra
	message = removePunctuation(message); // togliamo la punteggiatura per favorire la lettura della stringa
	return message;
}

// per i soggetti, i complementi e i verbi gli cambiamo manualmente per le risposte di eliza
function replaceWords(input){
	
	var wordsForReplacement = [];
	wordsForReplacement["i"] = "you";
	wordsForReplacement["you"] = "i";
	wordsForReplacement["me"] = "you";
	wordsForReplacement["my"] = "your";
	wordsForReplacement["am"] = "are";
	wordsForReplacement["are"] = "am";
	wordsForReplacement["was"] = "were";
	wordsForReplacement["i'd"] = "you would";
	wordsForReplacement["i've"] = "you have";
	wordsForReplacement["i'll"] = "you will";
	wordsForReplacement["you've"] = "i have";
	wordsForReplacement["you'll"] = "i will";
	wordsForReplacement["your"] = "my";
	wordsForReplacement["yours"] = "mine";
	wordsForReplacement["me"] = "you";
	wordsForReplacement["always had"] = "always have";
	
	// dividiamo in pezzi l'input
	var inputSplit = input.split(" ");

	// per ogni pezzo controlliamo se è un soggetto come io o tu
	var newSplit = [];
	for(var i = 0;i < inputSplit.length;i++){
		var currentInputWord = inputSplit[i];
		if(currentInputWord in wordsForReplacement){
			// cambiamo soggetti, predicati complementi
			var replacementWord = wordsForReplacement[currentInputWord];
			newSplit[i] = replacementWord;

		}else{
			newSplit[i] = currentInputWord;
		}
	}
	
	// funzione che applica i cambiamenti al messaggio
	var updatedMessage = "";
	for(var i = 0;i < newSplit.length;i++){
		var word = newSplit[i];
		if(updatedMessage != ""){
			updatedMessage += " ";
		}
		updatedMessage += word;
	}

	return updatedMessage;
}

// funzione che rimuove la punteggiatura dall'input dell'utente
function removePunctuation(message){
	//',;.?!:'
	message = message.replace(",","");
	message = message.replace(";","");
	message = message.replace(".","");
	message = message.replace("?","");
	message = message.replace("!","");
	message = message.replace(":","");
	
	
	return message;
}

// funzione che randomizza il tempo di risposta di eliza
function determineResponseTime(){
	var m = Math.floor(Math.random() * 2000) + 500;
	return m;
}


function sortNumber(a,b) {
    return b - a;
}

//funzione che costruisce una risposta per le parole simili
function findResponsesForSimilarWord(word){
	var foundKey = "";
	
	for(var key in synonyms){ // per ogni parola chiave nei sinonimi
		var similarWords = synonyms[key];
		for(var i = 0;i < similarWords.length;i++){ // controlla se la parola è un sinonimo
			if(similarWords[i] == word){
				foundKey = key;
				break;
			}
		}
		if(foundKey != ""){
			break;
		}
	}

	return responses[foundKey];
}

function containsKeywordWithWildcard(input, keywordsWithWildcardStr){
	
	var responseWildcardObj = getResponseWildcardInfo(keywordsWithWildcardStr);

	var numberOfWordsInWildcard = 0;
	var foundKeywords = 0;
	// spezza in piu parti l'input dell'utente
	var inputArray = input.split(" ");
	for(var i = 0;i < inputArray.length;i++){
		var currentWord = inputArray[i];
		
		if((foundKeywords >= responseWildcardObj.minNumWords && foundKeywords <= responseWildcardObj.maxNumWords) && !responseWildcardObj.keywords.contains(currentWord)){
			numberOfWordsInWildcard++;
		}

		if(responseWildcardObj.keywords.length > 0 && currentWord == responseWildcardObj.keywords[0]){
			responseWildcardObj.keywords.remove(currentWord);
			foundKeywords++;
		}
	}


	if(responseWildcardObj.keywords.length > 0){
		return false;
	}
	if(!(numberOfWordsInWildcard >= responseWildcardObj.minNumWords && numberOfWordsInWildcard <= responseWildcardObj.maxNumWords)){
		return false;
	}
	
	return true;
}

// funzione che estrae dalla stringa una parola chiave
function findBasicKeywordFromKeywordWithWildcard(keywordsWithWildcardStr){
	var t =  responsesWithWildcard[keywordsWithWildcardStr].replacementWord;
	console.log("Replacement:" + t);
	return t;
}

// funzione che torna lo stato della risposta
function getResponseWildcardInfo(keywordsWithWildcardStr){
	var keywordsWithWildcard = keywordsWithWildcardStr.split(" ");
	
	var rulesInSingleStr = "";
	var positionOfWordBeforeOfWildcard = 0;
	var positionOfWordAfterOfWildcard = 0;
	for(var i = 0;i < keywordsWithWildcard.length;i++){
		var str = keywordsWithWildcard[i];
		
		positionOfWordAfterOfWildcard = i;
		

		if(str.indexOf("*") != -1){
			rulesInSingleStr = str;
			break;
		}
	}
	positionOfWordBeforeOfWildcard = positionOfWordAfterOfWildcard-1;
	keywordsWithWildcard = keywordsWithWildcard.remove(rulesInSingleStr);
	
	rulesInSingleStr = rulesInSingleStr.replace("*","").replace("*","");//*1-3* --> 1-3
	if(rulesInSingleStr.length < 3){
		return false;
	}
	
	var minNumWords = rulesInSingleStr.substring(0,1);
	var maxNumWords = rulesInSingleStr.substring(2);
	

	var obj = {
		minNumWords : minNumWords,
		maxNumWords : maxNumWords,
		wordBeforeWildcard : positionOfWordBeforeOfWildcard,
		wordAfterWildcard : positionOfWordAfterOfWildcard,
		keywords : keywordsWithWildcard
	};


	return obj;
}



Array.prototype.remove = function ( needle ) {
	var index = this.indexOf(needle);
	
	if(index > -1){
		this.splice(index, 1);
		return this;
	}
	return this;
}

Array.prototype.contains = function ( needle ) {
   for (i in this) {
      if (this[i] == needle) return true;
   }
   return false;
}
