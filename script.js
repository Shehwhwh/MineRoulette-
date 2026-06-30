const spinBtn = document.getElementById('spin-btn');
const blockTape = document.getElementById('block-tape');
const challengeTape = document.getElementById('challenge-tape');
 const blocks = [
    "Земля", "Булыжник", "Доска", "Песок", "Гравий", "Дубовое бревно", "Листва", "Угольная руда", 
    "Железная руда", "Алмазная руда", "Редстоуновая руда", "Изумрудная руда", "Золотая руда", "Глубинный сланец",
    "Древние обломки", "Песок душ", "Адский камень", "Кварцевая руда", "Базальт", "Чернокамень", "Эндерняк",
    "Блок слизи", "Медовый блок", "Сноп сена", "Шерсть", "Стекло", "Диорит", "Андезит", "Гранит",
    "Терракота", "Лёд", "Плотный лёд", "Синий лёд", "Глина", "Блок мха", "Капельник", "Туф",
    "Обсидиан", "Плачущий обсидиан", "Блок магмы", "Морской фонарь", "Призмарин", "Кварцевый блок",
    "Резной кирпич", "Грибной блок", "Дерн", "Подзол", "Мицелий", "Коралловый блок", "Светокамень"
];

const difficultyTemplates = {
    "easy": [
        "Добыть обычным инструментом",
        "Сломать рукой без брони",
        "Добыть в количестве 5 штук",
        "Сломать прыгая на месте",
        "Добыть, пока в левой руке факел",
        "Сломать сидя на корточках",
        "Добыть днем при свете солнца",
        "Сломать и сразу поставить обратно",
        "Добыть ровно за 10 секунд",
        "Сломать, зажав кнопку бега"
    ],
    "medium": [
        "Добыть только каменным инструментом",
        "Сломать, пока на тебя смотрит любое животное",
        "Добыть 32 штуки этого блока",
        "Сломать, находясь под водой",
        "Добыть без использования левой руки",
        "Сломать, стоя на одном блоке над пропастью",
        "Добыть только в ночное время",
        "Сломать инструментом без чар",
        "Добыть, не используя прыжки вообще",
        "Сломать и переплавить, если возможно"
    ],
    "hard": [
        "Добыть только золотым инструментом",
        "Сломать взрывом крипера",
        "Добыть, пока тебя бьет зомби или скелет",
        "Сломать, имея всего половину сердечка здоровья",
        "Добыть стак этого блока",
        "Сломать инструментом с прочностью меньше 10",
        "Добыть, находясь под эффектом отравления",
        "Сломать, не смотря на сам блок",
        "Добыть, ударив голема рядом с тобой",
        "Сломать, на высоте выше 100 блоков от уровня земли"
    ],
    "extreme": [
        "Сломать взрывом ТНТ и поймать блок в воздухе",
        "Добыть без единого инструмента",
        "Сломать, пока тебя атакует гаст или фантом",
        "Добыть, закрыв глаза (по звуку ломания)",
        "Сломать, стоя прямо в костре или на магме",
        "Добыть, прыгнув со скалы и сломав в полете",
        "Сломать, пока вокруг тебя горит круг из огня",
        "Добыть, находясь в особняке разбойников",
        "Сломать, используя только руку ",
        "Добыть, не получая урон, пока рядом 3 враждебных моба"
    ],
    "hardcore": [
        "Добыть, пока тебя бьет Иссушитель или Дракон Края",
        "Сломать под лавой без зелья огнестойкости (успеть выжить)",
        "Добыть деревянной киркой, находясь в режиме хардкора",
        "Сломать, пока у тебя висит эффект 'Дурное знамение' 5 уровня",
        "Добыть, не сходя с одного блока (тебя должны толкать поршни)",
        "Сломать блок, упав в падении в портал Энда",
        "Добыть, пока на тебя бежит толпа пиглинов в Незере",
        "Сломать, не используя мышку (только клавиатура)",
        "Добыть на глазах у Вардена, не издав лишнего шума",
        "Сломать блок и сразу удалить его из инвентаря в лаву"
    ]
};
spinBtn.addEventListener('click', function() {
     const currentarray = difficultyTemplates[CurrentDifficulty];
    blockTape.style.transition = 'none';
    blockTape.style.transform = 'translateX(0)';
    blockTape.innerHTML = '';
    challengeTape.style.transition = 'none';
    challengeTape.style.transform = 'translateX(0)';
    challengeTape.innerHTML = '';
    const targetIndex = 25;
    let winningBlock = '';
     let winningChallenge = '';
     document.getElementById('result-box').innerHTML = '';
   for (let i = 0; i < 30; i++) {
        const randomBlock = blocks[Math.floor(Math.random() * blocks.length)];
        const randomChallenge = currentarray[Math.floor(Math.random() * currentarray.length)];
        if (i === targetIndex) {winningBlock = randomBlock; winningChallenge = randomChallenge;}
        const item = document.createElement('div');
        item.classList.add('roulette-item');
        item.textContent = randomBlock;
        blockTape.appendChild(item);
      const challengeItem = document.createElement('div');
    challengeItem.classList.add('roulette-item');
    challengeItem.textContent = randomChallenge;
    challengeTape.appendChild(challengeItem);
   } setTimeout(function() {
        blockTape.style.transition = "transform 4s cubic-bezier(0.1, 0.8, 0.1, 1)";
        blockTape.style.transform = `translateX(-${targetIndex * 130 - 200}px)`;
        challengeTape.style.transition = "transform 4s cubic-bezier(0.1, 0.8, 0.1, 1)";
        challengeTape.style.transform = `translateX(-${targetIndex * 130 - 200}px)`;
    }, 50);
setTimeout(function(){
    const resultBox = document.getElementById('result-box');
    resultBox.innerHTML = `
    <strrong>Блок:</strong> ${winningBlock} <br>
    <strong>Усложнение:</strong> ${winningChallenge}
    `;
},4050);});
document.querySelectorAll('.diff-btn').forEach(function(button) {
    button.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        CurrentDifficulty = button.getAttribute('data-difficulty');
        console.log('Текущая сложность: ' + CurrentDifficulty);
    });
});