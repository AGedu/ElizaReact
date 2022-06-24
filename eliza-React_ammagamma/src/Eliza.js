class ElizabotIta{

    getLanguageChoisePhrase = () => {
        return  " What language do you want to use in this conversation? (italian / english). Che lingua vuoi usare per questa conversazione? (italiano / inglese)";
    }


    getInitialPhrase = (language) => {
        if(language === "italiano" || language === "italian")
            return "Ciao, Come stai? Parlami del tuo problema";
        else
            return "Hello. How are you feeling today?";         
    }
    

    calculateResponse = (input, language) => {
        var responses;
        var endChatTerms;
        var synonyms;
        if(language === "italiano" || language === "italian"){
            responses = {
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
                        "Perchè mi dici che *?"
                    ]
                },
                "scusa" : {
                    "weight" : 1,
                    "responses" : [
                        "Non ti scusare.",
                        "Non c'è bisogno di scusarsi."
                    ]
                },
                "sempre" : {
                    "weight" : 1,
                    "responses" : [
                        "Puoi pensare ad un esempio specifico?"
                    ]
                },
                "perchè" : {
                    "weight" : 6,
                    "responses" : [
                        "E' questo il vero motivo?"
                    ]
                },
                "forse" : {
                    "weight" : 1,
                    "responses" : [
                        "Non mi sembri tanto sicuro."
                    ]
                },
                "penso" : {
                    "weight" : 2,
                    "responses" : [
                        "lo pensi davvero?"
                    ]
                },
                "tu" : {
                    "weight" : 1,
                    "responses" : [
                        "Stavamo parlando di te, non di me.",
                        "Perchè dici queste cose su di me?",
                        "perchè ti interessa se io \"*\"?"
                    ]
                },
                "sì" : {
                    "weight" : 1,
                    "responses" : [
                        "perchè lo pensi?",
                        "Sembri abbastanza positivo."
                    ]
                },
                "no" : {
                    "weight" : 1,
                    "responses" : [
                        "Perchè no?",
                        "Ne sei sicuro?"
                    ]
                },
                "sto" : {
                    "weight" : 1,
                    "responses" : [
                        "Mi dispiace sentire che tu stia *.",
                        "Per quanto tempo sei stato *?",
                        "Pensi sia normale che tu *?",
                        "Ti piace essere *?",
                        "Sei venuto da me perchè sei *?"
                    ]
                },
                "mi sento" : {
                    "weight" : 4,
                    "responses" : [
                        "Parlami di più di questi sentimenti.",
                        "Ti senti spesso *?",
                        "Ti piace stare *?",
                        "Perchè ti senti così?"
                    ]
                },
                "famiglia" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "madre" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "padre" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "mamma" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "sorella" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "fratello" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "marito" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "moglie" : {
                    "weight" : 16,
                    "responses" : [
                        "Dimmi di più sulla tua famiglia.",
                        "Che rapporti hai con la tua famiglia?",
                        "Per te è importante la tua famiglia?"
                    ]
                },
                "bambino" : {
                    "weight" : 16,
                    "responses" : [
                        "Avevi tanti amici da bambino?",
                        "Qual'è il tuo ricordo migliore da bambino?",
                        "Ricordi qualche sogno o incubo fatto da bambino?",
                        "Come pensi che la tua infanzia influenzi i tuoi sentimenti di adesso?"
                    ]
                },
                "sognato" : {
                    "weight" : 4,
                    "responses" : [
                        "Cosa ti fa provare quel sogno",
                        "Sogni tante volte?",
                        "Che persone appaiono nei tuoi sogni?",
                        "I tuoi sogni ti disturbano?"
                    ]
                },
                "incubo" : {
                    "weight" : 3,
                    "responses" : [
                        "Cosa ti fa provare quell'incubo?",
                        "Hai molte volte gli incubi?",
                        "Che persone appaiono nei tuoi incubi?",
                        "I tuoi incubi ti disturbano?"
                    ]
                },
                "ciao" : {
                    "weight" : 1,
                    "responses" : [
                        "Ciao di nuovo. come stai?",
                        "Come stai oggi? hai avuto problemi?"
                    ]
                },
                "buon pomeriggio" : {
                    "weight" : 1,
                    "responses" : [
                        "Ciao di nuovo. come stai?",
                        "Come stai oggi? hai avuto problemi?"
                    ]
                },
                "buongiorno" : {
                    "weight" : 1,
                    "responses" : [
                        "Ciao di nuovo. come stai?",
                        "Come stai oggi? hai avuto problemi?"
                    ]
                },
                "ho bisogno" : {
                    "weight" : 5,
                    "responses" : [
                        "perchè ne hai bisogno? averlo ti aiuterebbe?"
                    ]
                },
                "perchè non puoi" : {
                    "weight" : 3,
                    "responses" : [
                        "Pensi davvero che io non *"
                    ]
                },
                "perchè non posso" : {
                    "weight" : 3,
                    "responses" : [
                        "Pensi di doverlo poter fare?"
                    ]
                },
                "non posso" : {
                    "weight" : 4,
                    "responses" : [
                        "Come fai a sapere di non riuscirci?"
                    ]
                },
                "ricordi" : {
                    "weight" : 5,
                    "responses" : [
                        "Pensi spesso a *?",
                        "Pensare a * ti fa venire in mente altro?"
                    ]
                },
                "ti ricordi" : {
                    "weight" : 6,
                    "responses" : [
                        "Pensi che me lo dimenticherei? Sì, mi ricordo di *."
                    ]
                },
                "se" : {
                    "weight" : 3,
                    "responses" : [
                        "Pensi sia possibile *?"
                        ,"Vorresti davvero *?",
                    ]
                },
                "nome" : {
                    "weight" : 15,
                    "responses" : [
                        "Non mi interessano i nomi.",
                        "Ti avevo già detto che non mi interessanto i nomi -- continua per favore."
                    ]
                },
                "un'altra lingua" : {
                    "weight" : 1,
                    "responses" : [
                        "Ti avevo già detto che non parlo nessuna lingua oltre all'italiao "
                    ]
                },
                "computer" : {
                    "weight" : 12,
                    "responses" : [
                        "Ti fanno paura i computer?"
                    ]
                },
                "sei" : {
                    "weight" : 2,
                    "responses" : [
                        "Pechè pensi a *?"
                    ]
                },
                "sono" : {
                    "weight" : 1,
                    "responses" : [
                        "Pensavi che non lo potessero essere?"
                    ]
                },
                "tuoi" : {
                    "weight" : 1,
                    "responses" : [
                        "Perchè ti interessi ai miei *"
                    ]
                },
                "io ero" : {
                    "weight" : 2,
                    "responses" : [
                        "Cosa sarebbe successo se tu fossi *?"
                    ]
                },
                "eri tu" : {
                    "weight" : 2,
                    "responses" : [
                        "Ti piacerebbe pensare che io fossi *"
                    ]
                },
                "io desidero" : {
                    "weight" : 1,
                    "responses" : [
                        "Cosa significherebbe per te ottenerlo?"
                    ]
                },
                "io desideravo" : {
                    "weight" : 1,
                    "responses" : [
                        "Sei riuscito ad ottenerlo o sei semplicemente andato avanti?"
                    ]
                },
                "sono triste" : {
                    "weight" : 1,
                    "responses" : [
                        "Mi dispiace che tu lo sia. Cosa ti rende triste?"
                    ]
                },
                "sono felice" : {
                    "weight" : 1,
                    "responses" : [
                        "Questo è un bene. Cosa ti rende felice?"
                    ]
                },
                "sono annoiato" : {
                    "weight" : 1,
                    "responses" : [
                        "Cosa ti annoia?"
                    ]
                }
            };

            synonyms = {
                "scusa" : [
                    "mi dispiace"
                ],
                "un'altra lingua" : [
                    "tedesco",
                    "francese",
                    "spagnolo"
                ]
            };
            
            endChatTerms = [
                "arrivederci",
                "devo andare",
                "devo andarmene",
                "esci"
            ];
        }
        else{
            responses = {
                "NOTFOUND" : {
                    "weight" : 0,
                    "responses" : [
                        "What does that suggest to you?",
                        "I see.",
                        "I'm not sure I understand you fully.",
                        "Can you elaborate?",
                        "That is quite interesting.",
                        "Please tell me more.",
                        "Let's change focus a bit... Tell me about your family.",
                        "Can you elaborate on that?",
                        "Why do you say that *?"
                    ]
                },
                "sorry" : {
                    "weight" : 1,
                    "responses" : [
                        "Please don't apologize.",
                        "Apologies are not necessary.", 
                        "Apologies are not required."
                    ]
                },
                "always" : {
                    "weight" : 1,
                    "responses" : [
                       "Can you think of a specific example?"
                    ]
                },
                "because" : {
                    "weight" : 6,
                    "responses" : [
                        "Is that the real reason?"
                    ]
                },
                "maybe" : {
                    "weight" : 1,
                    "responses" : [
                       "You  don't seem very certain."
                    ]
                },
                "i think" : {
                    "weight" : 2,
                    "responses" : [
                        "Do you really think so?"
                    ]
                },
                "you" : {
                    "weight" : 1,
                    "responses" : [
                        "We were discussing you, not me.",
                        "Why do you say that about me?",
                        "Why do you care whether I \"*\"?"
                    ]
                },
                "yes" : {
                    "weight" : 1,
                    "responses" : [
                        "Why do you think so?","You seem quite positive."
                    ]
                },
                "no" : {
                    "weight" : 1,
                    "responses" : [
                        "Why not?",
                        "Are you sure?"
                    ]
                },
                "i am" : {
                    "weight" : 1,
                    "responses" : [
                        "I am sorry to hear you are *.",
                        "How long have you been *?",
                        "Do you believe it is normal to be *?",
                        "Do you enjoy being *?",
                        "Did you come to me because you are *?"
                    ]
                },
                "i feel" : {
                    "weight" : 4,
                    "responses" : [
                        "Tell me more about such feelings.",
                        "Do you often feel *?",
                        "Do you enjoy feeling *?",
                        "Why do you feel that way?"
                    ]
                },
                "family" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?",
                        "Is your family important to you?"
                    ]
                },
                "mother" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?",
                        "Is your family important to you?"
                    ]
                },
                "father" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?"
                        ,"Is your family important to you?"
                    ]
                },
                "mom" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?",
                        "Is your family important to you?"
                    ]
                },
                "sister" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?",
                        "Is your family important to you?"
                    ]
                },
                "brother" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?",
                        "Is your family important to you?"
                    ]
                },
                "husband" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?",
                        "Is your family important to you?"
                    ]
                },
                "wife" : {
                    "weight" : 16,
                    "responses" : [
                        "Tell me more about your family.",
                        "How do you get along with your family?",
                        "Is your family important to you?"
                    ]
                },
                "child" : {
                    "weight" : 16,
                    "responses" : [
                        "Did you have close friends as a child?",
                        "What is your favorite childhood memory?",
                        "Do you remember any dreams or nightmares from childhood?",
                        "Did the other children sometimes tease you?",
                        "How do you think your childhood experiences relate to your feelings today?"
                    ]
                },
                "dreamed" : {
                    "weight" : 4,
                    "responses" : [
                        "What does that dream suggest to you?",
                        "Do you dream often?","What people appear in your dreams?"
                        ,"Are you disturbed by your dreams?",
                        "Have you ever fantasized * while you were awake?"
                    ]
                },
                "nightmare" : {
                    "weight" : 3,
                    "responses" : [
                        "What does that dream suggest to you?",
                        "Do you dream often?",
                        "What persons appear in your dreams?",
                        "Are you disturbed by your dreams?"
                    ]
                },
                "hello" : {
                    "weight" : 1,
                    "responses" : [
                        "Hi again! How is going?",
                        "How are you today? Any problems?"
                    ]
                },
                "good afternoon" : {
                    "weight" : 1,
                    "responses" : [
                        "Hi again! How is going?",
                        "How are you today? Any problems?"
                    ]
                },
                "good morning" : {
                    "weight" : 1,
                    "responses" : [
                        "Hi again! How is going?",
                        "How are you today? Any problems?"
                    ]
                },
                "hi" : {
                    "weight" : 1,
                    "responses" : [
                        "Hi again! How is going?",
                        "How are you today? Any problems?"
                    ]
                },
                "goodbye" : {
                    "weight" : 1,
                    "responses" : [
                        "Goodbye.  Thank you for talking to me."
                    ]
                },
                "i need" : {
                    "weight" : 5,
                    "responses" : [
                        "Why do you need *?",
                        "Would it really help you to get *?",
                        "Are you sure you need *?"
                    ]
                },
                "why don't you" : {
                    "weight" : 3,
                    "responses" : [
                        "Do you really think I don't *?",
                        "Perhaps eventually I will *.",
                        "Do you really want me to *?"
                    ]
                },
                "why can't i" : {
                    "weight" : 3,
                    "responses" : [
                        "Do you think you should be able to *?",
                        "If you could *, what would you do?",
                        "I don't know -- why can't you *?",
                        "Have you really tried?"
                    ]
                },
                "i can't" : {
                    "weight" : 4,
                    "responses" : [
                        "How do you know you can't \"*\"?",
                        "Perhaps you could * if you tried.",
                        "What would it take for you to *?"
                    ]
                },
                "perhaps" : {
                    "weight" : 1,
                    "responses" : [
                        "How do you know you can't \"*\"?",
                        "Perhaps you could * if you tried.",
                        "What would it take for you to *?"
                    ]
                },
                "remember" : {
                    "weight" : 5,
                    "responses" : [
                        "Do you often think of *?",
                        "Does thinking of * bring anything else to mind",
                        "What else do you recollect?",
                        "Why do you recollect * just now?",
                        "What in the present situation reminds you of *?",
                        "What is the connection between me and *?"
                    ]
                },
                "do you remember" : {
                    "weight" : 6,
                    "responses" : [
                        "Do you think I would forget?",
                        "Yes I do remember *."
                    ]
                },
                "if" : {
                    "weight" : 3,
                    "responses" : [
                        "Do you think it's likely that *?",
                        "Do you wish that *?",
                        "What do you know about *?",
                        "Really, if *?"
                    ]
                },
                "name" : {
                    "weight" : 15,
                    "responses" : [
                        "I am not interested in names.",
                        "I've told you before, I do not care about names -- please continue."
                    ]
                },
                "another language" : {
                    "weight" : 1,
                    "responses" : [
                        "I told you before, I don't understand languages that are not English or Italian."
                    ]
                },
                "computer" : {
                    "weight" : 12,
                    "responses" : [
                        "Do computers worry you?",
                        "Why do you mention computers?",
                        "Could you expand on how computers and * are related?",
                        "What do you think machines have to do with your problem?",
                        "Don't you think computers can help people?",
                        "What about machines worrys you?",
                        "What do you think about machines?"
                    ]
                },
                "are you" : {
                    "weight" : 2,
                    "responses" : [
                        "Why are you interested in whether I am * or not?",
                        "Would you prefer if I weren't *?",
                        "Perhaps I am * in your fantasies.",
                        "Do you sometimes think I am *?"
                    ]
                },
                "are" : {
                    "weight" : 1,
                    "responses" : [
                        "Did you think they might not be *?",
                        "Would you like it if they were not *?",
                        "What if they were not *?",
                        "Possibly they are *."
                    ]
                },
                "your" : {
                    "weight" : 1,
                    "responses" : [
                        "Why are you concerned over my *?",
                        "What about your own *?",
                        "Are you worried about someone else's *?",
                        "Really, my *?"
                    ]
                },
                "was i" : {
                    "weight" : 2,
                    "responses" : [
                        "What if you were *?",
                        "Do you think you were *?",
                        "Were you *?",
                        "What would it mean if you were *?",
                        "What does * suggest to you?"
                    ]
                },
                "were you" : {
                    "weight" : 2,
                    "responses" : [
                        "Would you like to believe I was *?",
                        "What suggests that I was *?",
                        "What do you think?"
                    ]
                },
                "i desire" : {
                    "weight" : 1,
                    "responses" : [
                        "What would it mean to you if you got it?",
                        "Why do you want it?",
                        "What if you never got it?"
                    ]
                },
                "i desired" : {
                    "weight" : 1,
                    "responses" : [
                        "Did you achieve it or simply moved on?"
                    ]
                },
                "i am sad" : {
                    "weight" : 1,
                    "responses" : [
                        "Sorry to hear you are. Tell me about it."
                    ]
                },
                "i am happy" : {
                    "weight" : 1,
                    "responses" : [
                        "That's good. What is making you happy?"
                    ]
                },
                "i am bored" : {
                    "weight" : 1,
                    "responses" : [
                        "What makes you bored?"
                    ]
                }
            
            };
            synonyms = {
                "sorry" : [
                    "apologise"
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
                "dreamed" : [
                    "dream",
                    "dreams"
                ],
                "i am" : [
                    "am i",
                    "im",
                    "i'm"
                ],
                "you" : [
                    "you're",
                    "you are"
                ],
                "was i" : [
                    "i was"
                ]
            };

            endChatTerms = [
                "goodbye",
                "I have to leave",
                "I have to leave.",
                "quit",
                "bye",
                "exit"
            ];
        }
        
        var found = false; //variable that indicates if it's keyword or not
        var keyword = '';

        //we control if the message sent by the user is an ending chat one
		for(var i=0; i<endChatTerms.length; i++){
            if(input === endChatTerms[i]){
                if(language === "italiano" || language === "italian")
                    return "Arrivederci. Ricarica la pagina per iniziare una nuova chat";
                return "Goodbye. Reload the page to start a new chat";
            }        
        }            
        //we control the input word by word to decide the response
        var maxWeight = 0;
        var words = input.split(' ');
        for(var j=0; j<words.length; j++){
            if(responses[words[j]]){
                if(responses[words[j]].weight>maxWeight){
                    maxWeight = responses[words[j]].weight;
                    found = true;
                    keyword = words[j];
                }    
            }
            else{
                if(synonyms[words[j]]){
                    found = true;
                    keyword = synonyms[words[j]];
                }
            }
        }

        if(found)
            return responses[keyword].responses[Math.floor(Math.random()*responses[keyword].responses.length)];
        else
		    return responses["NOTFOUND"].responses[Math.floor(Math.random()*responses["NOTFOUND"].responses.length)];
    }
}

export default ElizabotIta;