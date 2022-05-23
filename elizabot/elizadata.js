var elizaInitials = [
	"Come va? Per favore, dimmi il tuo problema.",
	"Per favore, dimmi cosa ti ha dato fastidio.",
	"Qualcosa ti preoccupa?"
];

var elizaFinals = [
	"Addio. È stato bello parlare con te.",
	"Addio. Questa è stata davvero una bella chiacchierata.",
	"Arrivederci. Non vedo l'ora della nostra prossima sessione.",
	"Questa è stata una buona sessione, vero, ma il tempo è finito ora. Arrivederci.",
	"Forse potremmo discuterne anche nella prossima sessione? Arrivederci."
];

var elizaQuits = [
	"addio",
	"arrivederci",
	"fatto",
	"uscita",
	"uscire"
];

var elizaPres = [
	"non", "non",
	"non posso", "non posso",
	"non lo farò", "non lo farò",
	"ricordare", "ricordare",
	"ricordare", "ricordare",
	"sognato", "sognato",
	"sogni", "sogno",
	"forse",
	"certamente", "sì",
	"macchina", "computer",
	"macchine", "computer",
	"computer", "computer",
	"erano", "era",
	"sei", "sei",
	"Io sono io sono",
	"uguale", "uguale",
	"identico", "uguale",
	"equivalente", "uguale"
];

var elizaPosts = [
	"sono", "sono",
	"tuo mio",
	"io", "tu",
	"me stesso te stesso",
	"te stesso", "me stesso",
	"io tu",
	"tu", "io",
	"mio tuo",
	"io sono", "tu sei"
];

var elizaSynons = {
	"essere": ["sono", "è", "sono", "era"],
	"credenza": ["sentire", "pensare", "credere", "desiderare"],
	"non posso": ["non posso"],
	"desiderio": ["voglio", "bisogno"],
	"tutti": ["tutti", "nessuno", "nessuno"],
	"famiglia": ["madre", "mamma", "padre", "papà", "sorella", "fratello", "moglie", "figli", "bambino"],
	"happy": ["euforico", "contento", "meglio"],
	"triste": ["infelice", "depresso", "malato"]
};

var elizaKeywords = [

["xnone", 0, [
 ["*", [
    "Non sono sicuro di capirti completamente.",
    "Per favore vai avanti.",
    "Cosa ti suggerisce?",
    "Sei forte nel discutere di queste cose?",
    "È interessante. Continua per favore.",
    "Dimmi di più.",
    "Parlare di questo ti dà fastidio?"
  ]]
]],
["scusa", 0, [
 ["*", [
    "Per favore, non scusarti.",
    "Le scuse non sono necessarie.",
    "Ti ho detto che le scuse non sono necessarie.",
    "Non mi ha infastidito. Per favore, continua."
  ]]
]],
["apologise", 0, [
 ["*", [
    "vai a scusarti"
  ]]
]],
["ricorda", 5, [
 ["* io ricordo *", [
    "Pensi spesso a (2)?",
    "Pensare a (2) ti fa venire in mente qualcos'altro?",
    "Cos'altro ricordi?",
    "Perché ricordi (2) proprio ora?",
    "Cosa nella situazione attuale ti ricorda (2)?",
    "Qual è la connessione tra me e (2)?",
    "Cos'altro ti ricorda (2)?"
  ]],
 ["* ti ricordi *", [
    "Pensavi che avrei dimenticato (2)?",
    "Perché pensi che dovrei ricordare (2) ora?",
    "E (2)?",
    "vai a scusarti",
    "Hai menzionato (2)?"
  ]],
 ["* Ti ricordi *", [
    "Come potrei dimenticare (2)?",
    "Che cosa di (2) dovrei ricordare?",
    "vai da te"
  ]]
]],
["dimentica", 5, [
  ["* io dimentico *", [
    "Riesci a pensare perché potresti dimenticare (2)?",
    "Perché non ricordi (2)?",
    "Quante volte pensi a (2)?",
    "Ti dà fastidio dimenticarlo?",
    "Potrebbe essere un blocco mentale?",
    "Sei generalmente smemorato?",
    "Pensi di sopprimere (2)?"
   ]],
 ["* Hai dimenticato *", [
    "Perché lo chiedi?",
    "Sei sicuro di avermelo detto?",
    "Ti darebbe fastidio se dimenticassi (2)?",
    "Perché dovrei ricordare (2) proprio ora?",
    "vai a cosa",
    "Dimmi di più su (2)."
   ]]
]],
["se", 3, [
  ["* se *", [
    "Pensi che sia probabile che (2)?",
    "Lo desideri (2)?",
    "Cosa sai di (2)?",
    "Davvero, se (2)?",
    "Cosa faresti se (2)?",
    "Ma quali sono le possibilità che (2)?",
    "A cosa porta questa speculazione?"
  ]]
]],
["sognato", 4, [
  ["* ho sognato *", [
    "Davvero, (2)?",
    "Hai mai fantasticato (2) mentre eri sveglio?",
    "Hai mai sognato (2) prima?",
    "vai a sognare"
   ]]
]],
["sogno", 3, [
  ["*", [
    "Cosa ti suggerisce quel sogno?",
    "Sogni spesso?",
    "Quali persone appaiono nei tuoi sogni?",
    "Credi che i sogni abbiano qualcosa a che fare con il tuo problema?"
   ]]
]],
["forse", 0, [
  ["*", [
    "Non sembri del tutto sicuro.",
    "Perché il tono incerto?",
    "Non puoi essere più positivo?",
    "Non sei sicuro?",
    "Non lo sai?",
    "Quanto è probabile?"
   ]]
]],
["nome", 15, [
  ["*", [
    "Non mi interessano i nomi.",
    "Te l'ho già detto, non mi interessano i nomi, per favore continua."
   ]]
]],
["tedesco", 0, [
  ["*", [
    "vai all'estero",
    "Te l'ho detto prima, non capisco il tedesco."
   ]]
]],
["francese", 0, [
  ["*", [
    "vai all'estero",
    "Te l'ho detto prima, non capisco il francese."
   ]]
]],
["inglese", 0, [
 ["*", [
    "vai all'estero",
    "Te l'ho detto prima, non capisco l'inglese."
  ]]
]],
["spagnolo", 0, [
 ["*", [
    "vai all'estero",
    "Te l'ho detto prima, non capisco lo spagnolo."
  ]]
]],
["straniero", 0, [
  ["*", [
      "Parlo solo l'italiano."
   ]]
]],
["ciao", 0, [
  ["*", [
    "Come stai? Indica il tuo problema.",
    "Ciao. Quale pensi che sia il tuo problema?"
   ]]
]],
["computer", 50, [
  ["*", [
    "I computer ti preoccupano?",
    "Perché parli di computer?",
    "Cosa pensi che le macchine abbiano a che fare con il tuo problema?",
    "Non pensi che i computer possano aiutare le persone?",
    "E le macchine ti preoccupano?",
    "Cosa ne pensi delle macchine?",
    "Non pensi che io sia un programma per computer, vero?"
   ]]
]],
["sono", 0, [
  ["* sono io *", [
      "Credi di essere (2)?",
      "Vorresti essere (2)?",
      "Vorresti che ti dicessi che sei (2)?",
      "Cosa significherebbe se tu fossi (2)?",
      "vai al punto"
   ]],
["* io sono *", [
      "vai a io"
   ]],
 ["*", [
    "Perché dici 'sono'?",
    "Non lo capisco."
  ]]
]],
["sono", 0, [
  ["* sei *", [
    "Perché ti interessa sapere se io sono (2) o no?",
    "Preferiresti se non fossi (2)?",
    "Forse sono (2) nelle tue fantasie.",
    "A volte pensi che io sia (2)?",
    "vai a cosa",
    "Ti importerebbe?",
    "E se fossi (2)?"
   ]],
 ["* siete *", [
      "vai da te"
   ]],
 ["* sono *", [
    "Pensavi che potrebbero non essere (2)?",
    "Ti piacerebbe se non fossero (2)?",
    "E se non fossero (2)?",
    "Sono sempre (2)?",
    "Forse sono (2).",
    "Sei sicuro che lo siano (2)?"
   ]]
]],
["tuo", 0, [
  ["* il tuo *", [
    "Perché sei preoccupato per il mio (2)?",
    "E il tuo (2)?",
    "Sei preoccupato per il (2) di qualcun altro?",
    "Davvero, il mio (2)?",
    "Cosa ti fa pensare alla mia (2)?",
    "Vuoi il mio (2)?"
   ]]
]],
["era", 2, [
  ["* ero io *", [
    "E se tu fossi (2)?",
    "Pensi di essere (2)?",
    "Eri (2)?",
    "Cosa significherebbe se tu fossi (2)?",
    "Cosa ti suggerisce '(2)'?",
    "vai a cosa"
   ]],
 ["* io ero *", [
    "Eri davvero?",
    "Perché mi dici che eri (2) adesso?",
    "Forse so già che eri (2)."
   ]],
 ["* eri tu *", [
    "Vuoi credere che fossi (2)?",
    "Cosa suggerisce che fossi (2)?",
    "Cosa pensi ?",
    "Forse ero (2).",
    "E se fossi stato (2)?"
   ]]
]],
["io", 0, [
  ["* @desidero *", [
    "Cosa significherebbe per te se avessi (3)?",
    "Perché vuoi (3)?",
    "Supponiamo che tu abbia presto (3).",
    "E se non avessi mai avuto (3)?",
    "Cosa significherebbe per te ricevere (3)?",
    "Cosa c'entra il volere (3) con questa discussione?"
   ]],
 ["* sono* @triste *", [
    "Mi dispiace sapere che sei (3).",
    "Pensi che venire qui ti aiuterà a non essere (3)?",
    "Sono sicuro che non è piacevole essere (3).",
    "Puoi spiegare cosa ti ha fatto (3)?"
   ]],
 ["* sono* @felice *", [
    "Come ti ho aiutato ad essere (3)?",
    "Il tuo trattamento ti ha reso (3)?",
    "Cosa ti rende (3) proprio ora?",
    "Puoi spiegare perché sei improvvisamente (3)?"
   ]],
 ["* io ero *", [
      "vai era"
   ]],
 ["* io @credo di essere *", [
    "Lo pensi davvero?",
    "Non sei sicuro di te (3).",
    "Dubiti davvero di te (3)?"
   ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];