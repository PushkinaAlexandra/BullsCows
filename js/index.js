// ===== UI CREATION FUNCTIONS =====

function createMainContainer() {
    let container = document.querySelector('.main-container');
    if (!container) {
        container = document.createElement("div");
        container.className = "main-container";
        document.body.insertBefore(container, document.querySelector('.main-footer'));
    }
    return container;
}

function createHeader() {
    let header = document.createElement("div");
    header.className = "header";

    let title = document.createElement("h1");
    title.textContent = "Быки и коровы";
    header.appendChild(title);

    let subtitle = document.createElement("div");
    subtitle.className = "subtitle";
    subtitle.textContent = "Bulls and Cows";
    header.appendChild(subtitle);

    return header;
}

function createRules() {
    let section = document.createElement("div");
    section.className = "rules-section";

    // Russian rules
    let rusBox = document.createElement("div");
    rusBox.className = "rules-box";

    let rusTitle = document.createElement("h3");
    rusTitle.textContent = "Правила игры";
    rusBox.appendChild(rusTitle);

    let rusText1 = document.createElement("p");
    rusText1.innerHTML = `
        Вам загадано слово. Ваша задача отгадать его.
        За каждый ход вы предлагаете свое слово, а компьютер говорит,
        сколько в нем <span class="highlight-bull">быков</span> и <span class="highlight-cow">коров</span>.
    `;
    rusBox.appendChild(rusText1);

    let rusText2 = document.createElement("p");
    rusText2.style.marginTop = "8px";
    rusText2.innerHTML = `
        <span class="highlight-cow">Коровы</span> — буква есть в слове, но не на своем месте.<br>
        <span class="highlight-bull">Быки</span> — буква стоит на своем месте.
    `;
    rusBox.appendChild(rusText2);

    section.appendChild(rusBox);

    // English rules
    let engBox = document.createElement("div");
    engBox.className = "rules-box";

    let engTitle = document.createElement("h3");
    engTitle.textContent = "Rules of the game";
    engBox.appendChild(engTitle);

    let engText1 = document.createElement("p");
    engText1.innerHTML = `
        You are given a word. Your task is to guess it.
        Each move you offer your word, and the computer tells you
        how many <span class="highlight-bull">bulls</span> and <span class="highlight-cow">cows</span> there are.
    `;
    engBox.appendChild(engText1);

    let engText2 = document.createElement("p");
    engText2.style.marginTop = "8px";
    engText2.innerHTML = `
        <span class="highlight-cow">Cows</span> — letter is in the word, but in the wrong position.<br>
        <span class="highlight-bull">Bulls</span> — letter is in the right position.
    `;
    engBox.appendChild(engText2);

    section.appendChild(engBox);

    return section;
}

function createSettings() {
    let section = document.createElement("div");
    section.className = "settings-section";

    let row = document.createElement("div");
    row.className = "settings-row";

    // Language
    let langGroup = document.createElement("div");
    langGroup.className = "settings-group";

    let langLabel = document.createElement("label");
    langLabel.textContent = "Язык / Language";
    langGroup.appendChild(langLabel);

    let langRadios = document.createElement("div");
    langRadios.className = "radio-group";

    // Russian
    let rusOption = document.createElement("label");
    rusOption.className = "radio-option";
    let rusInput = document.createElement("input");
    rusInput.type = "radio";
    rusInput.name = "language";
    rusInput.value = "rus";
    rusInput.checked = true;
    let rusLabel = document.createElement("span");
    rusLabel.className = "radio-label";
    rusLabel.textContent = "Русский";
    rusOption.appendChild(rusInput);
    rusOption.appendChild(rusLabel);
    langRadios.appendChild(rusOption);

    // English
    let engOption = document.createElement("label");
    engOption.className = "radio-option";
    let engInput = document.createElement("input");
    engInput.type = "radio";
    engInput.name = "language";
    engInput.value = "eng";
    let engLabel = document.createElement("span");
    engLabel.className = "radio-label";
    engLabel.textContent = "English";
    engOption.appendChild(engInput);
    engOption.appendChild(engLabel);
    langRadios.appendChild(engOption);

    langGroup.appendChild(langRadios);
    row.appendChild(langGroup);

    // Word length
    let lengthGroup = document.createElement("div");
    lengthGroup.className = "settings-group";

    let lengthLabel = document.createElement("label");
    lengthLabel.textContent = "Букв / Letters";
    lengthGroup.appendChild(lengthLabel);

    let lengthRadios = document.createElement("div");
    lengthRadios.className = "radio-group";

    // 4 letters
    let fourOption = document.createElement("label");
    fourOption.className = "radio-option";
    let fourInput = document.createElement("input");
    fourInput.type = "radio";
    fourInput.name = "count";
    fourInput.value = "4";
    fourInput.checked = true;
    let fourLabel = document.createElement("span");
    fourLabel.className = "radio-label";
    fourLabel.textContent = "4";
    fourOption.appendChild(fourInput);
    fourOption.appendChild(fourLabel);
    lengthRadios.appendChild(fourOption);

    // 5 letters
    let fiveOption = document.createElement("label");
    fiveOption.className = "radio-option";
    let fiveInput = document.createElement("input");
    fiveInput.type = "radio";
    fiveInput.name = "count";
    fiveInput.value = "5";
    let fiveLabel = document.createElement("span");
    fiveLabel.className = "radio-label";
    fiveLabel.textContent = "5";
    fiveOption.appendChild(fiveInput);
    fiveOption.appendChild(fiveLabel);
    lengthRadios.appendChild(fiveOption);

    lengthGroup.appendChild(lengthRadios);
    row.appendChild(lengthGroup);

    section.appendChild(row);
    return section;
}

function createPlayButton() {
    let wrapper = document.createElement("div");
    wrapper.className = "play-btn-wrapper";

    let button = document.createElement("input");
    button.type = "button";
    button.id = "playButton";
    button.value = "Играть! / Play!";

    wrapper.appendChild(button);
    return wrapper;
}

// ===== MAIN =====

$(document).ready(function() {
    console.log("Index page loaded!");

    let container = createMainContainer();

    container.appendChild(createHeader());
    container.appendChild(createRules());
    container.appendChild(createSettings());
    container.appendChild(createPlayButton());

    // Play button handler
    $('#playButton').click(function() {
        let n = document.querySelector('input[name="count"]:checked');
        let lang = document.querySelector('input[name="language"]:checked');

        if (!n || !lang) {
            alert('Please select language and word length!');
            return;
        }

        window.location.href = 'Game.html?length=' + n.value + '&lang=' + lang.value;
    });

    console.log("Page rendered successfully!");
});