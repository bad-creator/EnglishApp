export interface Word {
  id: number;
  english: string;
  russian: string;
  correctAnswers: number;
  past: string;
  past_participle: string;
}

// Исходный набор слов
const initialWords: Word[] = [
  { "id": 1, "english": "be", "past": "was/were", "past_participle": "been", "russian": "быть", "correctAnswers": 0 },
  { "id": 2, "english": "become", "past": "became", "past_participle": "become", "russian": "становиться", "correctAnswers": 0 },
  { "id": 3, "english": "begin", "past": "began", "past_participle": "begun", "russian": "начинать", "correctAnswers": 0 },
  { "id": 4, "english": "break", "past": "broke", "past_participle": "broken", "russian": "ломать", "correctAnswers": 0 },
  { "id": 5, "english": "bring", "past": "brought", "past_participle": "brought", "russian": "приносить", "correctAnswers": 0 },
  { "id": 6, "english": "build", "past": "built", "past_participle": "built", "russian": "строить", "correctAnswers": 0 },
  { "id": 7, "english": "buy", "past": "bought", "past_participle": "bought", "russian": "покупать", "correctAnswers": 0 },
  { "id": 8, "english": "catch", "past": "caught", "past_participle": "caught", "russian": "ловить", "correctAnswers": 0 },
  { "id": 9, "english": "choose", "past": "chose", "past_participle": "chosen", "russian": "выбирать", "correctAnswers": 0 },
  { "id": 10, "english": "come", "past": "came", "past_participle": "come", "russian": "приходить", "correctAnswers": 0 },
  { "id": 11, "english": "cost", "past": "cost", "past_participle": "cost", "russian": "стоить", "correctAnswers": 0 },
  { "id": 12, "english": "cut", "past": "cut", "past_participle": "cut", "russian": "резать", "correctAnswers": 0 },
  { "id": 13, "english": "do", "past": "did", "past_participle": "done", "russian": "делать", "correctAnswers": 0 },
  { "id": 14, "english": "draw", "past": "drew", "past_participle": "drawn", "russian": "рисовать", "correctAnswers": 0 },
  { "id": 15, "english": "drink", "past": "drank", "past_participle": "drunk", "russian": "пить", "correctAnswers": 0 },
  { "id": 16, "english": "drive", "past": "drove", "past_participle": "driven", "russian": "водить (машину)", "correctAnswers": 0 },
  { "id": 17, "english": "eat", "past": "ate", "past_participle": "eaten", "russian": "есть (пищу)", "correctAnswers": 0 },
  { "id": 18, "english": "fall", "past": "fell", "past_participle": "fallen", "russian": "падать", "correctAnswers": 0 },
  { "id": 19, "english": "feel", "past": "felt", "past_participle": "felt", "russian": "чувствовать", "correctAnswers": 0 },
  { "id": 20, "english": "fight", "past": "fought", "past_participle": "fought", "russian": "сражаться", "correctAnswers": 0 },
  { "id": 21, "english": "find", "past": "found", "past_participle": "found", "russian": "находить", "correctAnswers": 0 },
  { "id": 22, "english": "fly", "past": "flew", "past_participle": "flown", "russian": "летать", "correctAnswers": 0 },
  { "id": 23, "english": "forget", "past": "forgot", "past_participle": "forgotten", "russian": "забывать", "correctAnswers": 0 },
  { "id": 24, "english": "get", "past": "got", "past_participle": "got/gotten", "russian": "получать", "correctAnswers": 0 },
  { "id": 25, "english": "give", "past": "gave", "past_participle": "given", "russian": "давать", "correctAnswers": 0 },
  { "id": 26, "english": "go", "past": "went", "past_participle": "gone", "russian": "идти", "correctAnswers": 0 },
  { "id": 27, "english": "grow", "past": "grew", "past_participle": "grown", "russian": "расти", "correctAnswers": 0 },
  { "id": 28, "english": "have", "past": "had", "past_participle": "had", "russian": "иметь", "correctAnswers": 0 },
  { "id": 29, "english": "hear", "past": "heard", "past_participle": "heard", "russian": "слышать", "correctAnswers": 0 },
  { "id": 30, "english": "hide", "past": "hid", "past_participle": "hidden", "russian": "прятать", "correctAnswers": 0 },
  { "id": 31, "english": "hit", "past": "hit", "past_participle": "hit", "russian": "ударять", "correctAnswers": 0 },
  { "id": 32, "english": "hold", "past": "held", "past_participle": "held", "russian": "держать", "correctAnswers": 0 },
  { "id": 33, "english": "hurt", "past": "hurt", "past_participle": "hurt", "russian": "ранить", "correctAnswers": 0 },
  { "id": 34, "english": "keep", "past": "kept", "past_participle": "kept", "russian": "хранить", "correctAnswers": 0 },
  { "id": 35, "english": "know", "past": "knew", "past_participle": "known", "russian": "знать", "correctAnswers": 0 },
  { "id": 36, "english": "lead", "past": "led", "past_participle": "led", "russian": "вести", "correctAnswers": 0 },
  { "id": 37, "english": "learn", "past": "learned/learnt", "past_participle": "learned/learnt", "russian": "учиться", "correctAnswers": 0 },
  { "id": 38, "english": "leave", "past": "left", "past_participle": "left", "russian": "оставлять", "correctAnswers": 0 },
  { "id": 39, "english": "lend", "past": "lent", "past_participle": "lent", "russian": "давать взаймы", "correctAnswers": 0 },
  { "id": 40, "english": "let", "past": "let", "past_participle": "let", "russian": "позволять", "correctAnswers": 0 },
  { "id": 41, "english": "lie", "past": "lay", "past_participle": "lain", "russian": "лежать", "correctAnswers": 0 },
  { "id": 42, "english": "lose", "past": "lost", "past_participle": "lost", "russian": "терять", "correctAnswers": 0 },
  { "id": 43, "english": "make", "past": "made", "past_participle": "made", "russian": "делать", "correctAnswers": 0 },
  { "id": 44, "english": "mean", "past": "meant", "past_participle": "meant", "russian": "означать", "correctAnswers": 0 },
  { "id": 45, "english": "meet", "past": "met", "past_participle": "met", "russian": "встречать", "correctAnswers": 0 },
  { "id": 46, "english": "pay", "past": "paid", "past_participle": "paid", "russian": "платить", "correctAnswers": 0 },
  { "id": 47, "english": "put", "past": "put", "past_participle": "put", "russian": "класть", "correctAnswers": 0 },
  { "id": 48, "english": "read", "past": "read", "past_participle": "read", "russian": "читать", "correctAnswers": 0 },
  { "id": 49, "english": "ride", "past": "rode", "past_participle": "ridden", "russian": "ездить верхом", "correctAnswers": 0 },
  { "id": 50, "english": "ring", "past": "rang", "past_participle": "rung", "russian": "звонить", "correctAnswers": 0 },
  { "id": 51, "english": "rise", "past": "rose", "past_participle": "risen", "russian": "подниматься", "correctAnswers": 0 },
  { "id": 52, "english": "run", "past": "ran", "past_participle": "run", "russian": "бежать", "correctAnswers": 0 },
  { "id": 53, "english": "say", "past": "said", "past_participle": "said", "russian": "говорить", "correctAnswers": 0 },
  { "id": 54, "english": "see", "past": "saw", "past_participle": "seen", "russian": "видеть", "correctAnswers": 0 },
  { "id": 55, "english": "sell", "past": "sold", "past_participle": "sold", "russian": "продавать", "correctAnswers": 0 },
  { "id": 56, "english": "send", "past": "sent", "past_participle": "sent", "russian": "посылать", "correctAnswers": 0 },
  { "id": 57, "english": "set", "past": "set", "past_participle": "set", "russian": "устанавливать", "correctAnswers": 0 },
  { "id": 58, "english": "shake", "past": "shook", "past_participle": "shaken", "russian": "трясти", "correctAnswers": 0 },
  { "id": 59, "english": "shine", "past": "shone", "past_participle": "shone", "russian": "светить", "correctAnswers": 0 },
  { "id": 60, "english": "shoot", "past": "shot", "past_participle": "shot", "russian": "стрелять", "correctAnswers": 0 },
  { "id": 61, "english": "show", "past": "showed", "past_participle": "shown", "russian": "показывать", "correctAnswers": 0 },
  { "id": 62, "english": "shut", "past": "shut", "past_participle": "shut", "russian": "закрывать", "correctAnswers": 0 },
  { "id": 63, "english": "sing", "past": "sang", "past_participle": "sung", "russian": "петь", "correctAnswers": 0 },
  { "id": 64, "english": "sit", "past": "sat", "past_participle": "sat", "russian": "сидеть", "correctAnswers": 0 },
  { "id": 65, "english": "sleep", "past": "slept", "past_participle": "slept", "russian": "спать", "correctAnswers": 0 },
  { "id": 66, "english": "speak", "past": "spoke", "past_participle": "spoken", "russian": "говорить", "correctAnswers": 0 },
  { "id": 67, "english": "spend", "past": "spent", "past_participle": "spent", "russian": "тратить", "correctAnswers": 0 },
  { "id": 68, "english": "stand", "past": "stood", "past_participle": "stood", "russian": "стоять", "correctAnswers": 0 },
  { "id": 69, "english": "steal", "past": "stole", "past_participle": "stolen", "russian": "украсть", "correctAnswers": 0 },
  { "id": 70, "english": "swim", "past": "swam", "past_participle": "swum", "russian": "плавать", "correctAnswers": 0 },
  { "id": 71, "english": "take", "past": "took", "past_participle": "taken", "russian": "брать", "correctAnswers": 0 },
  { "id": 72, "english": "teach", "past": "taught", "past_participle": "taught", "russian": "учить (кого-то)", "correctAnswers": 0 },
  { "id": 73, "english": "tell", "past": "told", "past_participle": "told", "russian": "рассказывать", "correctAnswers": 0 },
  { "id": 74, "english": "think", "past": "thought", "past_participle": "thought", "russian": "думать", "correctAnswers": 0 },
  { "id": 75, "english": "throw", "past": "threw", "past_participle": "thrown", "russian": "бросать", "correctAnswers": 0 },
  { "id": 76, "english": "understand", "past": "understood", "past_participle": "understood", "russian": "понимать", "correctAnswers": 0 },
  { "id": 77, "english": "wake", "past": "woke", "past_participle": "woken", "russian": "просыпаться", "correctAnswers": 0 },
  { "id": 78, "english": "wear", "past": "wore", "past_participle": "worn", "russian": "носить (одежду)", "correctAnswers": 0 },
  { "id": 79, "english": "win", "past": "won", "past_participle": "won", "russian": "выигрывать", "correctAnswers": 0 },
  { "id": 80, "english": "write", "past": "wrote", "past_participle": "written", "russian": "писать", "correctAnswers": 0 },
  { "id": 81, "english": "arise", "past": "arose", "past_participle": "arisen", "russian": "возникать", "correctAnswers": 0 },
  { "id": 82, "english": "bear", "past": "bore", "past_participle": "born/borne", "russian": "нести/рожать", "correctAnswers": 0 },
  { "id": 83, "english": "beat", "past": "beat", "past_participle": "beaten", "russian": "бить", "correctAnswers": 0 },
  { "id": 84, "english": "bend", "past": "bent", "past_participle": "bent", "russian": "гнуть", "correctAnswers": 0 },
  { "id": 85, "english": "bet", "past": "bet", "past_participle": "bet", "russian": "ставить (на кон)", "correctAnswers": 0 },
  { "id": 86, "english": "bind", "past": "bound", "past_participle": "bound", "russian": "связывать", "correctAnswers": 0 },
  { "id": 87, "english": "bite", "past": "bit", "past_participle": "bitten", "russian": "кусать", "correctAnswers": 0 },
  { "id": 88, "english": "bleed", "past": "bled", "past_participle": "bled", "russian": "кровоточить", "correctAnswers": 0 },
  { "id": 89, "english": "blow", "past": "blew", "past_participle": "blown", "russian": "дуть", "correctAnswers": 0 },
  { "id": 90, "english": "breed", "past": "bred", "past_participle": "bred", "russian": "разводить", "correctAnswers": 0 },
  { "id": 91, "english": "burn", "past": "burned/burnt", "past_participle": "burned/burnt", "russian": "гореть", "correctAnswers": 0 },
  { "id": 92, "english": "burst", "past": "burst", "past_participle": "burst", "russian": "лопаться", "correctAnswers": 0 },
  { "id": 93, "english": "cast", "past": "cast", "past_participle": "cast", "russian": "бросать (в ролях)", "correctAnswers": 0 },
  { "id": 94, "english": "cling", "past": "clung", "past_participle": "clung", "russian": "цепляться", "correctAnswers": 0 },
  { "id": 95, "english": "creep", "past": "crept", "past_participle": "crept", "russian": "ползать", "correctAnswers": 0 },
  { "id": 96, "english": "deal", "past": "dealt", "past_participle": "dealt", "russian": "иметь дело", "correctAnswers": 0 },
  { "id": 97, "english": "dig", "past": "dug", "past_participle": "dug", "russian": "копать", "correctAnswers": 0 },
  { "id": 98, "english": "dive", "past": "dove/dived", "past_participle": "dived", "russian": "нырять", "correctAnswers": 0 },
  { "id": 99, "english": "dream", "past": "dreamed/dreamt", "past_participle": "dreamed/dreamt", "russian": "мечтать", "correctAnswers": 0 },
  { "id": 100, "english": "feed", "past": "fed", "past_participle": "fed", "russian": "кормить", "correctAnswers": 0 },
  { "id": 101, "english": "flee", "past": "fled", "past_participle": "fled", "russian": "бежать (от)", "correctAnswers": 0 },
  { "id": 102, "english": "fling", "past": "flung", "past_participle": "flung", "russian": "швырять", "correctAnswers": 0 },
  { "id": 103, "english": "forbid", "past": "forbade", "past_participle": "forbidden", "russian": "запрещать", "correctAnswers": 0 },
  { "id": 104, "english": "forgive", "past": "forgave", "past_participle": "forgiven", "russian": "прощать", "correctAnswers": 0 },
  { "id": 105, "english": "freeze", "past": "froze", "past_participle": "frozen", "russian": "замерзать", "correctAnswers": 0 },
  { "id": 106, "english": "grind", "past": "ground", "past_participle": "ground", "russian": "молоть", "correctAnswers": 0 },
  { "id": 107, "english": "hang", "past": "hung", "past_participle": "hung", "russian": "вешать", "correctAnswers": 0 },
  { "id": 108, "english": "kneel", "past": "knelt/kneeled", "past_participle": "knelt/kneeled", "russian": "становиться на колени", "correctAnswers": 0 },
  { "id": 109, "english": "knit", "past": "knit/knitted", "past_participle": "knit/knitted", "russian": "вязать", "correctAnswers": 0 },
  { "id": 110, "english": "lay", "past": "laid", "past_participle": "laid", "russian": "класть", "correctAnswers": 0 },
  { "id": 111, "english": "lean", "past": "leaned/leant", "past_participle": "leaned/leant", "russian": "наклоняться", "correctAnswers": 0 },
  { "id": 112, "english": "leap", "past": "leaped/leapt", "past_participle": "leaped/leapt", "russian": "прыгать", "correctAnswers": 0 },
  { "id": 113, "english": "light", "past": "lit/lighted", "past_participle": "lit/lighted", "russian": "зажигать", "correctAnswers": 0 },
  { "id": 114, "english": "mistake", "past": "mistook", "past_participle": "mistaken", "russian": "ошибаться", "correctAnswers": 0 },
  { "id": 115, "english": "overcome", "past": "overcame", "past_participle": "overcome", "russian": "преодолевать", "correctAnswers": 0 },
  { "id": 116, "english": "prove", "past": "proved", "past_participle": "proven/proved", "russian": "доказывать", "correctAnswers": 0 },
  { "id": 117, "english": "quit", "past": "quit", "past_participle": "quit", "russian": "бросать", "correctAnswers": 0 },
  { "id": 118, "english": "rid", "past": "rid", "past_participle": "rid", "russian": "избавляться", "correctAnswers": 0 },
  { "id": 119, "english": "seek", "past": "sought", "past_participle": "sought", "russian": "искать", "correctAnswers": 0 },
  { "id": 120, "english": "sew", "past": "sewed", "past_participle": "sewn/sewed", "russian": "шить", "correctAnswers": 0 },
  { "id": 121, "english": "shed", "past": "shed", "past_participle": "shed", "russian": "сбрасывать", "correctAnswers": 0 },
  { "id": 122, "english": "shrink", "past": "shrank", "past_participle": "shrunk", "russian": "сжиматься", "correctAnswers": 0 },
  { "id": 123, "english": "sink", "past": "sank", "past_participle": "sunk", "russian": "тонуть", "correctAnswers": 0 },
  { "id": 124, "english": "slide", "past": "slid", "past_participle": "slid", "russian": "скользить", "correctAnswers": 0 },
  { "id": 125, "english": "sow", "past": "sowed", "past_participle": "sown/sowed", "russian": "сеять", "correctAnswers": 0 },
  { "id": 126, "english": "speed", "past": "sped", "past_participle": "sped", "russian": "ускоряться", "correctAnswers": 0 },
  { "id": 127, "english": "spell", "past": "spelled/spelt", "past_participle": "spelled/spelt", "russian": "писать по буквам", "correctAnswers": 0 },
  { "id": 128, "english": "spill", "past": "spilled/spilt", "past_participle": "spilled/spilt", "russian": "проливать", "correctAnswers": 0 },
  { "id": 129, "english": "spin", "past": "spun", "past_participle": "spun", "russian": "крутить", "correctAnswers": 0 },
  { "id": 130, "english": "spit", "past": "spat", "past_participle": "spat", "russian": "плеваться", "correctAnswers": 0 },
  { "id": 131, "english": "split", "past": "split", "past_participle": "split", "russian": "разделять", "correctAnswers": 0 },
  { "id": 132, "english": "spoil", "past": "spoiled/spoilt", "past_participle": "spoiled/spoilt", "russian": "портить", "correctAnswers": 0 },
  { "id": 133, "english": "spread", "past": "spread", "past_participle": "spread", "russian": "распространять", "correctAnswers": 0 },
  { "id": 134, "english": "spring", "past": "sprang", "past_participle": "sprung", "russian": "прыгать", "correctAnswers": 0 },
  { "id": 135, "english": "stick", "past": "stuck", "past_participle": "stuck", "russian": "прилипать", "correctAnswers": 0 },
  { "id": 136, "english": "sting", "past": "stung", "past_participle": "stung", "russian": "жалить", "correctAnswers": 0 },
  { "id": 137, "english": "stink", "past": "stank", "past_participle": "stunk", "russian": "вонять", "correctAnswers": 0 },
  { "id": 138, "english": "strike", "past": "struck", "past_participle": "struck", "russian": "ударять", "correctAnswers": 0 },
  { "id": 139, "english": "strive", "past": "strove", "past_participle": "striven", "russian": "стремиться", "correctAnswers": 0 },
  { "id": 140, "english": "swear", "past": "swore", "past_participle": "sworn", "russian": "клясться", "correctAnswers": 0 },
  { "id": 141, "english": "sweep", "past": "swept", "past_participle": "swept", "russian": "мести", "correctAnswers": 0 },
  { "id": 142, "english": "swing", "past": "swung", "past_participle": "swung", "russian": "качаться", "correctAnswers": 0 },
  { "id": 143, "english": "tear", "past": "tore", "past_participle": "torn", "russian": "рвать", "correctAnswers": 0 },
  { "id": 144, "english": "thrive", "past": "thrived/throve", "past_participle": "thrived", "russian": "процветать", "correctAnswers": 0 },
  { "id": 145, "english": "tread", "past": "trod", "past_participle": "trodden", "russian": "ступать", "correctAnswers": 0 },
  { "id": 146, "english": "undergo", "past": "underwent", "past_participle": "undergone", "russian": "подвергаться", "correctAnswers": 0 },
  { "id": 147, "english": "undertake", "past": "undertook", "past_participle": "undertaken", "russian": "предпринимать", "correctAnswers": 0 },
  { "id": 148, "english": "upset", "past": "upset", "past_participle": "upset", "russian": "расстраивать", "correctAnswers": 0 },
  { "id": 149, "english": "weave", "past": "wove", "past_participle": "woven", "russian": "ткать", "correctAnswers": 0 },
  { "id": 150, "english": "weep", "past": "wept", "past_participle": "wept", "russian": "плакать", "correctAnswers": 0 },
  { "id": 151, "english": "wet", "past": "wet/wetted", "past_participle": "wet/wetted", "russian": "мочить", "correctAnswers": 0 },
  { "id": 152, "english": "wind", "past": "wound", "past_participle": "wound", "russian": "наматывать", "correctAnswers": 0 },
  { "id": 153, "english": "withdraw", "past": "withdrew", "past_participle": "withdrawn", "russian": "отступать", "correctAnswers": 0 },
  { "id": 154, "english": "wring", "past": "wrung", "past_participle": "wrung", "russian": "выжимать", "correctAnswers": 0 },
  { "id": 155, "english": "abide", "past": "abode/abided", "past_participle": "abode/abided", "russian": "соблюдать", "correctAnswers": 0 },
  { "id": 156, "english": "awake", "past": "awoke", "past_participle": "awoken", "russian": "пробуждаться", "correctAnswers": 0 },
  { "id": 157, "english": "befall", "past": "befell", "past_participle": "befallen", "russian": "случаться", "correctAnswers": 0 },
  { "id": 158, "english": "beget", "past": "begot", "past_participle": "begotten", "russian": "порождать", "correctAnswers": 0 },
  { "id": 159, "english": "beseech", "past": "besought", "past_participle": "besought", "russian": "умолять", "correctAnswers": 0 },
  { "id": 160, "english": "bid", "past": "bade/bid", "past_participle": "bidden/bid", "russian": "предлагать", "correctAnswers": 0 },
  { "id": 161, "english": "broadcast", "past": "broadcast", "past_participle": "broadcast", "russian": "транслировать", "correctAnswers": 0 },
  { "id": 162, "english": "bust", "past": "bust/busted", "past_participle": "bust/busted", "russian": "ломать", "correctAnswers": 0 },
  { "id": 163, "english": "chide", "past": "chid/chided", "past_participle": "chid/chidden", "russian": "бранить", "correctAnswers": 0 },
  { "id": 164, "english": "cleave", "past": "cleft/cleaved", "past_participle": "cleft/cleaved", "russian": "раскалывать", "correctAnswers": 0 },
  { "id": 165, "english": "cling", "past": "clung", "past_participle": "clung", "russian": "цепляться", "correctAnswers": 0 },
  { "id": 166, "english": "dwell", "past": "dwelt/dwelled", "past_participle": "dwelt/dwelled", "russian": "жить", "correctAnswers": 0 },
  { "id": 167, "english": "fit", "past": "fit/fitted", "past_participle": "fit/fitted", "russian": "подходить", "correctAnswers": 0 },
  { "id": 168, "english": "forecast", "past": "forecast", "past_participle": "forecast", "russian": "предсказывать", "correctAnswers": 0 },
  { "id": 169, "english": "forsake", "past": "forsook", "past_participle": "forsaken", "russian": "покидать", "correctAnswers": 0 },
  { "id": 170, "english": "gild", "past": "gilded/gilt", "past_participle": "gilded/gilt", "russian": "золотить", "correctAnswers": 0 },
  { "id": 171, "english": "gird", "past": "girt/girded", "past_participle": "girt/girded", "russian": "опоясывать", "correctAnswers": 0 },
  { "id": 172, "english": "hew", "past": "hewed", "past_participle": "hewn/hewed", "russian": "рубить", "correctAnswers": 0 },
  { "id": 173, "english": "hoist", "past": "hoisted/hoist", "past_participle": "hoisted/hoist", "russian": "поднимать", "correctAnswers": 0 },
  { "id": 174, "english": "inlay", "past": "inlaid", "past_participle": "inlaid", "russian": "инкрустировать", "correctAnswers": 0 },
  { "id": 175, "english": "input", "past": "input/inputted", "past_participle": "input/inputted", "russian": "вводить", "correctAnswers": 0 },
  { "id": 176, "english": "inset", "past": "inset", "past_participle": "inset", "russian": "вставлять", "correctAnswers": 0 },
  { "id": 177, "english": "interweave", "past": "interwove", "past_participle": "interwoven", "russian": "переплетать", "correctAnswers": 0 },
  { "id": 178, "english": "offset", "past": "offset", "past_participle": "offset", "russian": "смещать", "correctAnswers": 0 },
  { "id": 179, "english": "outrun", "past": "outran", "past_participle": "outrun", "russian": "обогнать", "correctAnswers": 0 },
  { "id": 180, "english": "overdo", "past": "overdid", "past_participle": "overdone", "russian": "переусердствовать", "correctAnswers": 0 },
  { "id": 181, "english": "overhear", "past": "overheard", "past_participle": "overheard", "russian": "подслушать", "correctAnswers": 0 },
  { "id": 182, "english": "overload", "past": "overloaded", "past_participle": "overloaded", "russian": "перегружать", "correctAnswers": 0 },
  { "id": 183, "english": "override", "past": "overrode", "past_participle": "overridden", "russian": "отменять", "correctAnswers": 0 },
  { "id": 184, "english": "oversee", "past": "oversaw", "past_participle": "overseen", "russian": "надзирать", "correctAnswers": 0 },
  { "id": 185, "english": "oversleep", "past": "overslept", "past_participle": "overslept", "russian": "проспать", "correctAnswers": 0 },
  { "id": 186, "english": "overtake", "past": "overtook", "past_participle": "overtaken", "russian": "обгонять", "correctAnswers": 0 },
  { "id": 187, "english": "partake", "past": "partook", "past_participle": "partaken", "russian": "принимать участие", "correctAnswers": 0 },
  { "id": 188, "english": "plead", "past": "pled/pleaded", "past_participle": "pled/pleaded", "russian": "умолять", "correctAnswers": 0 },
  { "id": 189, "english": "preset", "past": "preset", "past_participle": "preset", "russian": "предустанавливать", "correctAnswers": 0 },
  { "id": 190, "english": "rebuild", "past": "rebuilt", "past_participle": "rebuilt", "russian": "перестраивать", "correctAnswers": 0 },
  { "id": 191, "english": "redo", "past": "redid", "past_participle": "redone", "russian": "переделывать", "correctAnswers": 0 },
  { "id": 192, "english": "remake", "past": "remade", "past_participle": "remade", "russian": "переделывать", "correctAnswers": 0 },
  { "id": 193, "english": "rend", "past": "rent", "past_participle": "rent", "russian": "разрывать", "correctAnswers": 0 },
  { "id": 194, "english": "repay", "past": "repaid", "past_participle": "repaid", "russian": "возвращать (долг)", "correctAnswers": 0 },
  { "id": 195, "english": "rerun", "past": "reran", "past_participle": "rerun", "russian": "перезапускать", "correctAnswers": 0 },
  { "id": 196, "english": "reset", "past": "reset", "past_participle": "reset", "russian": "сбрасывать", "correctAnswers": 0 },
  { "id": 197, "english": "retell", "past": "retold", "past_participle": "retold", "russian": "пересказывать", "correctAnswers": 0 },
  { "id": 198, "english": "rewind", "past": "rewound", "past_participle": "rewound", "russian": "перематывать", "correctAnswers": 0 },
  { "id": 199, "english": "rewrite", "past": "rewrote", "past_participle": "rewritten", "russian": "переписывать", "correctAnswers": 0 },
  { "id": 200, "english": "unbend", "past": "unbent", "past_participle": "unbent", "russian": "разгибать", "correctAnswers": 0 },
];

// Функция для загрузки слов из localStorage или использования начального набора
export const loadWords = (): Word[] => {
  if (typeof window === 'undefined') return initialWords;
  
  const storedWords = localStorage.getItem('words');
  if (storedWords) {
    return JSON.parse(storedWords);
  }
  
  // Если в localStorage ничего нет, сохраняем и возвращаем начальный набор
  localStorage.setItem('words', JSON.stringify(initialWords));
  return initialWords;
};

// Функция для сохранения слов в localStorage
export const saveWords = (words: Word[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('words', JSON.stringify(words));
  }
};

// Функция для получения случайного слова из активных слов
export const getRandomWord = (words: Word[]): Word | null => {
  // Отфильтруем слова, которые еще не были выучены (имеют менее 3 правильных ответов)
  const activeWords = words.filter(word => word.correctAnswers < 3);
  
  if (activeWords.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * activeWords.length);
  return activeWords[randomIndex];
};

// Функция для генерации вариантов ответов
export const generateOptions = (word: Word, words: Word[]): string[] => {
  const options = [word.russian];
  const otherWords = words.filter(w => w.id !== word.id);
  
  // Перемешиваем массив и берем 3 первых слова для вариантов ответов
  const shuffledWords = [...otherWords].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < 3 && i < shuffledWords.length; i++) {
    options.push(shuffledWords[i].russian);
  }
  
  // Перемешиваем варианты ответов
  return options.sort(() => Math.random() - 0.5);
};

// Функция для обновления состояния слова после ответа
export const updateWordState = (words: Word[], wordId: number, isCorrect: boolean): Word[] => {
  return words.map(word => {
    if (word.id === wordId) {
      return {
        ...word,
        correctAnswers: isCorrect ? word.correctAnswers + 1 : 0
      };
    }
    return word;
  });
}; 