class ElizabotIta{
    /*
    constructor(message){
        this.message = message;
    }  
    */
    getInitialPhrase(){
        var initialMessages = ["Ciao, hai un qualche problema di cui vorresti parlarmi?","Ciao, Come stai? Parlami del tuo problema"];
        return initialMessages[Math.floor(Math.random()*initialMessages.length)];                
    }
    
    //per i soggetti, i complementi e i verbi gli cambiamo manualmente per le risposte di eliza
    replaceWords(input){
        var wordsForReplacement = [];
        wordsForReplacement["io"] = "tu";
        wordsForReplacement["tu"] = "io";
        wordsForReplacement["me"] = "tu";
        wordsForReplacement["mio"] = "tuo";
        wordsForReplacement["sono"] = "sei";
        wordsForReplacement["sei"] = "sono";
        wordsForReplacement["ero"] = "erano";
        wordsForReplacement["vorrei"] = "tu vorresti";
        wordsForReplacement["ho"] = "hai";
        wordsForReplacement["farò"] = "farai";
        wordsForReplacement["hai"] = "ho";
        wordsForReplacement["desideri"] = "farò";
        wordsForReplacement["tuo"] = "mio";
        wordsForReplacement["il tuo"] = "il mio";
        wordsForReplacement["me"] = "te";
        wordsForReplacement["sempre avuto"] = "ho sempre";
        var inputSplit = input.split(" ");
        var newSplit = [];
        for(var i=0; i<inputSplit.length; i++){
            var currentInputWord = inputSplit[i];
            if(currentInputWord in wordsForReplacement){
                var replacementWord = wordsForReplacement[currentInputWord];
                newSplit[i] = replacementWord;
            }
            else
                newSplit[i] = currentInputWord;
        }
        var updatedMessage = '';
        for(var i=0; i<newSplit.length; i++){
            var word = newSplit[i];
            if(updatedMessage != '')
                updatedMessage += ' ';
            updatedMessage += word;
        }
        return updatedMessage;
    }

    calculateResponse(input){
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
                "responses" : ["perchè lo pensi?","Sembri abbastanza positivo."]},
            "no" : {
                "weight" : 1,
                "responses" : ["Perchè no?","Ne sei sicuro?"]},
            "sto" : {
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
                "responses" : ["Mi dispiace che tu lo sia. Cosa ti rende triste?"]},
            "sono felice" : {
                "weight" : 1,
                "responses" : ["Questo è un bene. Cosa ti rende felice?"]},
            "sono annoiato" : {
                "weight" : 1,
                "responses" : ["Cosa ti annoia?"]}
        };

        var synonyms = {
            "scusa" : ["mi dispiace"],
            "un'altra lingua" : ["german", "tedesco", "french", "francese", "spanish", "spagnolo"],
        };
        
        var endChatTerms = ["arrivederci","devo andare","devo andarmene","esci"];
        var found = false; //variabile booleana che indica se è una parola chiave o meno
	    var response = ''; //stringa che conterra la risposta
        var keyword = '';
	    
        //controlla che il messaggio non sia un messaggio di fine
		for(var i=0;i<endChatTerms.length;i++)
            if(input === endChatTerms[i])
                return "Arrivederci. Ricarica la pagina per iniziare una nuova chat";
        
        //controlla parola per parola 
        var words = input.split(" ");
        for(var i=0;i<words.length;i++){
            if(responses[words[i]]){
                found = true;
                keyword = words[i];
            }else if (synonyms[words[i]])
                found = true;
                keyword = synonyms[words[i]];
        }
		
        if(found)
            response = responses[keyword].responses[Math.floor(Math.random()*responses[keyword].responses.length)];

	    if(!found)
		    response = responses["NOTFOUND"].responses[Math.floor(Math.random()*responses["NOTFOUND"].responses.length)];

	    return response;
    }
}


export default ElizabotIta;