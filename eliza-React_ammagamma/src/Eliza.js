class Elizabot{
    constructor(message){
        this.message = message;
    }
    getInitialPhrase(){
        var initialMessages = [
            "Ciao, hai un qualche problema di cui vorresti parlarmi?",
            "Ciao, Come stai? Parlami del tuo problema"
        ];
        return initialMessages[Math.floor(Math.random()*initialMessages.length)];                
    }


    calculateResponse(){

    }

    getEndChatResponse(){
        return " alla prossima ";
    }
}


export default Eliza;