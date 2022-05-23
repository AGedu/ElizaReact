//appena viene caricata la pagina viene mandata in output la chat
$(document).ready(function(){
	displayChat();
});

// quando l'utente preme il tasto enter, il sistema prende in input la stringa
$(document).keypress(function(e) {
	
	if(e.which == 13) {
		getUserInput();
	}
});

// funzione che prende in input il messaggio dell'utente
function getUserInput(){
	var inputFromUser = $(".send-textbox").val();
	// se l'input dell'utente è null o è vuoto il sistema segnala errore
	if(inputFromUser == null || inputFromUser != null && inputFromUser.length == 0){
		error("Error: Input cannot be blank");
	}else if(inputFromUser == "run demo1"){
		runDemo1();
		clearSendTextbox();
	}else if(inputFromUser == "run demo2"){
		runDemo2();
		clearSendTextbox();
	}else{
		sendElizaNewMessage(inputFromUser);
	}
}

function error(message){
	createNegativeNotification(message, 9);
}

// funzione per mandare in output la chat
function displayChat(){
	
	
	var html = '';
	if(chatHistory.length == 0){
		startElizaChat();
	}else{
		for(var i = 0;i < chatHistory.length;i++){

			var currentMessage = chatHistory[i];
			
			// se sta rispondendo eliza aggiungiamo alla stringa html la risposta di eliza
			if(currentMessage.isEliza){
				html += getElizaMessageHTML(currentMessage.content);
			// se invece sta scrivend l'utente, aggiungiamo alla stringa html l'input dell'utente	
			}else{
				html += getUserMessageHTML(currentMessage.content);
			}
		}
		
		// inseriamo nell'html della chat la stringa html
		$("#chat-area").html(html);
		$('#chat-area').scrollTop($('#chat-area')[0].scrollHeight);
	}
	$('#body').scrollTop($('#body')[0].scrollHeight);
	
}

// funzione che restituisce l'html del messaggio di eliza
function getElizaMessageHTML(message){
	return '<div class="chat-message-outter-wrapper"><img src="./assets/imgs/elizah.png" class="chat-message-icon"><div class="chat-message-wrapper eliza-message"><p class="chat-message-text text-left">' + message + '</p><p class="chat-user-text">Eliza</p></div></div>';
}

// funzione che restituisce l'html del messaggio dell'utente
function getUserMessageHTML(message){
	return '<div class="chat-message-outter-wrapper text-right"><div class="chat-message-wrapper you-message"><p class="chat-message-text text-left">' + message + '</p><p class="chat-user-text">You</p></div><img src="./assets/imgs/just.png" class="chat-message-icon"></div>';
}

// funzione che ripulisce la barra dell'input
function clearSendTextbox(){
	$(".send-textbox").val('');
}