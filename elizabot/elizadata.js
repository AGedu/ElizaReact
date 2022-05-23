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
 ["* io* @credo *tu *", [
     "vai da te"
  ]],
 ["* io sono *", [
     "È perché sei (2) che sei venuto da me?",
     "Da quanto tempo sei (2)?",
     "Credi che sia normale essere (2)?",
     "Ti piace essere (2)?",
     "Conosci qualcun altro che è (2)?"
  ]],
 ["* non posso *", [
     "Come fai a sapere che non puoi (3)?",
     "Hai provato ?",
     "Forse potresti (3) ora.",
     "Vuoi davvero essere in grado di (3)?",
     "E se potessi (3)?"
  ]],
 ["* Io non *", [
     "Non sei davvero (2)?",
     "Perché non (2)?",
     "Vuoi essere in grado di (2)?",
     "Ti dà fastidio?"
  ]],
 ["* io sento *", [
     "Dimmi di più su tali sentimenti.",
     "Ti senti spesso (2)?",
     "Ti piace sentire (2)?",
     "Di cosa ti ricorda il sentimento (2)?"
  ]],
 ["* io tu *", [
     "Forse nelle tue fantasie ci (2) l'un l'altro.",
     "Vuoi (2) me?",
     "Sembra che tu abbia bisogno di (2) me.",
     "Tu (2) qualcun altro?"
  ]],
 ["*", [
     "Tu dici (1)?",
     "Puoi approfondire?",
     "Dici (1) per qualche motivo speciale?",
     "Questo è piuttosto interessante."
  ]]
]],
["tu", 0, [
 ["* mi ricordi *", [
     "vai allo stesso modo"
  ]],
 ["* siete *", [
     "Cosa ti fa pensare che io sia (2)?",
     "Ti piace credere che io sia (2)?",
     "A volte vorresti essere (2)?",
     "Forse vorresti essere (2)."
  // ]],
["* tu* io *", [
     "Perché pensi che io (2) tu?",
     "Ti piace pensare che io (2) tu -- vero?",
     "Cosa ti fa pensare che io (2) tu?",
     "Davvero, io (2) tu?",
     "Vuoi credere che io (2) te?",
     "Supponiamo che io abbia fatto (2) te - cosa significherebbe?",
     "Qualcun altro crede che io (2) te?"
  ]],
 ["* Voi *", [
     "Stavamo discutendo di te, non di me.",
     "Oh, io (2)?",
     "Non stai davvero parlando di me, vero?",
     "Quali sono i tuoi sentimenti adesso?"
  ]]
]],
["sì", 0, [
 ["*", [
     "Sembri abbastanza positivo.",
     "Sei sicuro.",
     "Vedo.",
     "Capisco."
  ]]
]],
["no", 0, [
 ["* nessuno *", [
     "Sei sicuro, nessuno (2)?",
     "Sicuramente qualcuno (2) .",
     "Riesci a pensare a qualcuno?",
     "Stai pensando a una persona molto speciale?",
     "Chi, posso chiedere?",
     "Hai in mente una persona in particolare, vero?",
     "Di chi pensi di parlare?"
  ]],
 ["*", [
     "Stai dicendo di no solo per essere negativo?",
     "Sei un po' negativo.",
     "Perchè no ?",
     "Perché no' ?"
  ]]
]],
["mio", 2, [
 ["$ * mio *", [
     "Ha qualcosa a che fare con il fatto che il tuo (2) ?",
     "Discutiamo ulteriormente perché il tuo (2).",
     "Prima hai detto il tuo (2).",
     "Ma il tuo (2)."
  ]],
 ["* la mia famiglia *", [
     "Dimmi di più sulla tua famiglia.",
     "Chi altro nella tua famiglia (4)?",
     "Il tuo (3)?",
     "Cos'altro ti viene in mente quando pensi al tuo (3)?"
  ]],
["* mio *", [
     "Il tuo (2)?",
     "Perché dici il tuo (2)?",
     "Questo suggerisce qualcos'altro che ti appartiene?",
     "È importante per te che il tuo (2)?"
  ]]
]],
["può", 0, [
 ["* può *", [
     "Credi che io possa (2) non è vero?",
     "vai a cosa",
     "Vuoi che io sia in grado di (2).",
     "Forse ti piacerebbe essere in grado di (2) te stesso."
  ]],
 ["* posso *", [
     "Se puoi o meno (2) dipende da te più che da me.",
     "Vuoi essere in grado di (2)?",
     "Forse non vuoi (2).",
     "vai a cosa"
  ]]
]],
["cosa", 0, [
 ["*", [
     "Perché lo chiedi ?",
     "Ti interessa questa domanda?",
     "Cosa vuoi veramente sapere?",
     "Sono domande simili nella tua mente?",
     "Quale risposta ti piacerebbe di più?",
     "Cosa pensi ?",
     "Cosa ti viene in mente quando me lo chiedi?",
     "Hai fatto domande simili prima?",
     "Hai chiesto a qualcun altro?"
  ]]
]],
["chi", 0, [
 ["chi *", [
     "vai a cosa"
  ]]
]],
["quando", 0, [
 ["quando *", [
     "vai a cosa"
  ]]
]],
["dove", 0, [
 ["dove *", [
     "vai a cosa"
  ]]
]],
["come", 0, [
 ["come *", [
     "vai a cosa"
  ]]
]],
["perché", 0, [
 ["*", [
     "È questo il vero motivo?",
     "Non mi vengono in mente altri motivi?",
     "Questo motivo sembra spiegare qualcos'altro?",
     "Quali altri motivi potrebbero esserci?"
  ]]
]],
["perché", 0, [
 ["* perché non lo fai *", [
     "Credi che io non (2)?",
     "Forse lo farò (2) in tempo utile.",
     "Dovresti (2) te stesso?",
     "Vuoi che io (2)?",
     "vai a cosa"
  ]],
 ["* perché non posso *", [
     "Pensi che dovresti essere in grado di (2)?",
     "Vuoi essere in grado di (2)?",
     "Credi che questo ti aiuterà a (2)?",
     "Hai idea del perché non puoi (2)?",
     "vai a cosa"
  ]],
 ["*", [
     "vai a cosa"
  ]]
]],

["tutti", 2, [
 ["* @tutti *", [
     "Davvero, (2)?",
     "Sicuramente no (2).",
     "Riesci a pensare a qualcuno in particolare?",
     "Chi, per esempio?",
     "Stai pensando a una persona molto speciale?",
     "Chi, posso chiedere?",
     "Qualcuno di speciale forse?",
     "Hai in mente una persona in particolare, vero?",
     "Di chi pensi di parlare?"
  ]]
]],

["tutti", 2, [
 ["*", [
     "vai a tutti"
  ]]
]],
["nessuno", 2, [
 ["*", [
     "vai a tutti"
  ]]
]],
["nessuno", 2, [
 ["*", [
     "vai a tutti"
  ]]
]],

["sempre", 1, [
 ["*", [
     "Ti viene in mente un esempio specifico?",
     "Quando ?",
     "A quale incidente stai pensando?",
     "Davvero, sempre?"
  ]]
]],

["uguale", 10, [
 ["*", [
     "In quale modo ?",
     "Che somiglianza vedi?",
     "Cosa ti suggerisce questa somiglianza?",
     "Quali altri collegamenti vedi?",
     "Cosa pensi che significhi quella somiglianza?",
     "Qual è il collegamento, secondo te?",
     "Potrebbe davvero esserci qualche connessione?",
     "Come ?"
  ]]
]],

["mi piace", 10, [
 ["* @essere come *", [
     "vai allo stesso modo"
  ]]
]],

["diverso", 0, [
 ["*", [
    "In che modo è diverso?",
    "Che differenze vedi?",
    "Cosa ti suggerisce questa differenza?",
    "Quali altre distinzioni vedi?",
    "Cosa pensi che significhi disparità?",
    "Potrebbe esserci qualche collegamento, secondo te?",
    "Come?"
  ]]
]]
];

var elizaPostTransforms = [
/ vecchio vecchio/g, " vecchio",
/\berano (non)? io\b/g, "era $1 io",
/\bsono (non)? io\b/g, "sono $1 io",
/Lo sono (sempre)? io\b/, "sono $1 io",
/\bche il tuo (proprio)? (\w+)( ora)? \?/, "hai i tuoi $ 1 $ 2 ?",
/\bHo (\w+)/, "Ho $1",
/Prima hai detto il tuo (proprio)? (\w+)( ora)?\./, "Prima hai parlato dei tuoi $ 2."
];