// ===== UI CREATION FUNCTIONS =====

function createMainContainer() {
    let container = document.createElement("div");
    container.className = "main-container";
    $('.body').append(container);
    return container;
}

function createHeader() {
    let header = document.createElement("div");
    header.className = "header";

    let title = document.createElement("h1");
    title.textContent = "Быки и коровы";
    header.append(title);

    let subtitle = document.createElement("div");
    subtitle.className = "subtitle";
    subtitle.textContent = "Bulls and Cows";
    header.append(subtitle);

    return header;
}

function createRules() {
    let section = document.createElement("div");
    section.className = "rules-section";

    // Russian rules
    let rusBox = document.createElement("div");
    rusBox.className = "rules-box";
    rusBox.innerHTML = `
        <h3>Правила игры</h3>
        <p>
            Вам загадано слово. Ваша задача отгадать его.
            За каждый ход вы предлагаете свое слово, а компьютер говорит,
            сколько в нем <span class="highlight-bull">быков</span> и <span class="highlight-cow">коров</span>.
        </p>
        <p style="margin-top: 8px;">
            <span class="highlight-cow">Коровы</span> — буква есть в слове, но не на своем месте.<br>
            <span class="highlight-bull">Быки</span> — буква стоит на своем месте.
        </p>
    `;
    section.append(rusBox);

    // English rules
    let engBox = document.createElement("div");
    engBox.className = "rules-box";
    engBox.innerHTML = `
        <h3>Rules of the game</h3>
        <p>
            You are given a word. Your task is to guess it.
            Each move you offer your word, and the computer tells you
            how many <span class="highlight-bull">bulls</span> and <span class="highlight-cow">cows</span> there are.
        </p>
        <p style="margin-top: 8px;">
            <span class="highlight-cow">Cows</span> — letter is in the word, but in the wrong position.<br>
            <span class="highlight-bull">Bulls</span> — letter is in the right position.
        </p>
    `;
    section.append(engBox);

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
    langGroup.append(langLabel);

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
    rusOption.append(rusInput, rusLabel);
    langRadios.append(rusOption);

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
    engOption.append(engInput, engLabel);
    langRadios.append(engOption);

    langGroup.append(langRadios);
    row.append(langGroup);

    // Word length
    let lengthGroup = document.createElement("div");
    lengthGroup.className = "settings-group";
    let lengthLabel = document.createElement("label");
    lengthLabel.textContent = "Букв / Letters";
    lengthGroup.append(lengthLabel);

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
    fourOption.append(fourInput, fourLabel);
    lengthRadios.append(fourOption);

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
    fiveOption.append(fiveInput, fiveLabel);
    lengthRadios.append(fiveOption);

    lengthGroup.append(lengthRadios);
    row.append(lengthGroup);

    section.append(row);
    return section;
}

function createPlayButton() {
    let wrapper = document.createElement("div");
    wrapper.className = "play-btn-wrapper";

    let button = document.createElement("input");
    button.type = "button";
    button.id = "playButton";
    button.value = "Играть! / Play!";

    wrapper.append(button);
    return wrapper;
}

function createFooter() {
    let footer = document.createElement("div");
    footer.className = "footer";
    footer.textContent = "© 2024 Bulls and Cows • Classic word guessing game";
    return footer;
}

// ===== MAIN =====

$(document).ready(function() {
    let container = createMainContainer();

    container.append(createHeader());
    container.append(createRules());
    container.append(createSettings());
    container.append(createPlayButton());
    container.append(createFooter());

    // Play button handler
    $('#playButton').click(function() {
        let n = document.querySelector('input[name="count"]:checked').value;
        let lang = document.querySelector('input[name="language"]:checked').value;
        window.location.href = 'Game.html?length=' + n + '&lang=' + lang;
    });
});