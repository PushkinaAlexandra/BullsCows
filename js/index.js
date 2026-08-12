
function createNames(){
    let textPart = document.createElement("div");
    textPart.className = "textPart";
    let nameGame = document.createElement("div");
    nameGame.className = "nameGame";
    let rusNameGame = document.createElement("p");
    rusNameGame.className = "rusNameGame";
    rusNameGame.append("Быки и коровы");
    nameGame.append(rusNameGame);
    let engNameGame = document.createElement("p");
    engNameGame.className = "engNameGame";
    engNameGame.append("Bulls and cows");
    nameGame.append(engNameGame);
    textPart.append(nameGame);
    $('.body').append(textPart);
}

function createRusRules(){
    let rusRules = document.createElement("div");
    rusRules.className = "rules";
    rusRules.id = "rusRules";
    let headRusRules = document.createElement("p");
    headRusRules.className = "headRusRules";
    headRusRules.append("Правила игры:");
    rusRules.append(headRusRules);
    let mainRusRules = document.createElement("p");
    mainRusRules.className = "mainRusRules";
    mainRusRules.append("Вам загадано имя существительное в именительном падеже в единственном числе. Ваша задача отгадать его. За каждый ход вы предлагаете свое слово, а компьютер говорит количество в Вашем слове коров и быков.");
    rusRules.append(mainRusRules);
    let cowsRusRules = document.createElement("p");
    cowsRusRules.className = "cowsRusRules";
    cowsRusRules.append("Коровы (cows) - буква есть в слове, но стоит не на своём месте.");
    rusRules.append(cowsRusRules);
    let bullsRusRules = document.createElement("p");
    bullsRusRules.className = "bullsRusRules";
    bullsRusRules.append("Быки (bulls) - буква стоит на своём месте.");
    rusRules.append(bullsRusRules);
    $('.rulesPart').append(rusRules);
}

function createEngRules(){
    let engRules = document.createElement("div");
    engRules.className = "rules";
    engRules.id = "engRules";
    engRules.style.height = "" + ($('.rules')[0].offsetHeight + 20) + "px"
    let headEngRules = document.createElement("p");
    headEngRules.className = "headEngRules";
    headEngRules.append("Rules of the game:");
    engRules.append(headEngRules);
    let mainEngRules = document.createElement("p");
    mainEngRules.className = "mainEngRules";
    mainEngRules.append("You are given a noun. You task is to guess it. Each move is you variant of the word and computer answer about bulls and cows.");
    engRules.append(mainEngRules);
    let cowsEngRules = document.createElement("p");
    cowsEngRules.className = "cowsEngRules";
    cowsEngRules.append("Cows - word includes letter, but in wrong position.");
    engRules.append(cowsEngRules);
    let bullsEngRules = document.createElement("p");
    bullsEngRules.className = "bullsEngRules";
    bullsEngRules.append("Bulls - letter on right position.");
    engRules.append(bullsEngRules);
    $('.rulesPart').append(engRules);
}

function languageQuest(){
    let formLangQuest = document.createElement("form");
    formLangQuest.className = "form";
    formLangQuest.id = "formLangQuest";
    let langQuest = document.createElement("fieldset");
    langQuest.className = "quest";
    langQuest.id = "langQuest";
    let legendLang = document.createElement("legend");
    legendLang.className = "legendLang";
    legendLang.append("Выберите язык (Choose language):");
    let inputFirstQuest = document.createElement("input");
    inputFirstQuest.type = "radio";
    inputFirstQuest.id = "contactChoice1";
    inputFirstQuest.name = "language";
    inputFirstQuest.value = "rus";
    let labelFirstQuest = document.createElement("label");
    labelFirstQuest.for = "contactChoice1";
    labelFirstQuest.append("Русский (Russian)")
    let inputSecondQuest = document.createElement("input");
    inputSecondQuest.type = "radio";
    inputSecondQuest.id = "contactChoice2";
    inputSecondQuest.name = "language";
    inputSecondQuest.value = "eng";
    let labelSecondQuest = document.createElement("label");
    labelSecondQuest.for = "contactChoice2";
    labelSecondQuest.append("Английский (English)")
    let divRusLang = document.createElement("div");
    divRusLang.append(inputFirstQuest)
    divRusLang.append(labelFirstQuest)
    let divEngLang = document.createElement("div");
    divEngLang.append(inputSecondQuest)
    divEngLang.append(labelSecondQuest)
    langQuest.append(legendLang);
    langQuest.append(divRusLang)
    langQuest.append(divEngLang)
    formLangQuest.append(langQuest)
    $('#choosePart').append(formLangQuest);
}

function countQuest(){
    let formCountQuest = document.createElement("form");
    formCountQuest.className = "form";
    formCountQuest.id = "formCountQuest";
    let countQuest = document.createElement("fieldset");
    countQuest.className = "quest";
    countQuest.id = "countQuest";
    let legendCount = document.createElement("legend");
    legendCount.className = "legendCount";
    legendCount.append("Выберите количество букв (Choose count of letters):");
    let inputFirstQuest = document.createElement("input");
    inputFirstQuest.type = "radio";
    inputFirstQuest.id = "contactChoice1";
    inputFirstQuest.name = "count";
    inputFirstQuest.value = 4;
    let labelFirstQuest = document.createElement("label");
    labelFirstQuest.for = "contactChoice1";
    labelFirstQuest.append("4")
    let inputSecondQuest = document.createElement("input");
    inputSecondQuest.type = "radio";
    inputSecondQuest.id = "contactChoice2";
    inputSecondQuest.name = "count";
    inputSecondQuest.value = 5;
    let labelSecondQuest = document.createElement("label");
    labelSecondQuest.for = "contactChoice2";
    labelSecondQuest.append("5")
    let divFour = document.createElement("div");
    divFour.append(inputFirstQuest)
    divFour.append(labelFirstQuest)
    let divFive = document.createElement("div");
    divFive.append(inputSecondQuest)
    divFive.append(labelSecondQuest)
    countQuest.append(legendCount);
    countQuest.append(divFour)
    countQuest.append(divFive)
    formCountQuest.append(countQuest)
    $('#choosePart').append(formCountQuest);
}

function createChoosePart(){
    let choosePart = document.createElement("div");
    choosePart.className = "rules";
    choosePart.id = "choosePart";
    $('.rulesPart').append(choosePart);
    languageQuest();
    countQuest();
    let play = document.createElement("input");
    play.id = "playButton";
    play.type = "button";
    play.value = "Play!";
    play.name = "play";
    $('#choosePart').append(play);
}

$(document).ready ( function() {
    createNames();
    let rules = document.createElement("div");
    rules.className = "rulesPart";
    $('.body').append(rules);
    createRusRules();
    createChoosePart();
    createEngRules();
    $('#playButton').click( function(){
        let n = document.querySelector('input[name="count"]:checked').value;
        let lang = document.querySelector('input[name="language"]:checked').value;
        document.location.href = 'Game.html?length=' + n + '&lang=' + lang;
    })
//    $('#rusRules')[0].style.left = 0;
//    $('#engRules')[0].style.right = 0;
//    $('#choosePart')[0].style.left = "" + ($('#rusRules')[0].offsetWidth + ) + "px";
    $('.rulesPart')[0].style.width = "" + ($('.textPart')[0].offsetWidth) + "px";
});