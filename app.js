$( () => {
    // class Character  {
    //     constructor(race, profession, age) {
    //         this.race = race;
    //         this.profession = profession;
    //         this.ability = ability;
    //     }}
    /////////////////////////////////////
    // Guide Text Box
    /////////////////////////////////////
    const $openBtn = $('#openGuide');
    const $guide = $('#guide');
    const $closeBtn = $('#close');

    const openGuide = () => {
        $guide.css('display', 'block');
    }

    const closeGuide = () => {
        $guide.css('display', 'none');
    }

    $openBtn.on('click', openGuide);
    $closeBtn.on('click', closeGuide);

    /////////////////////////////////////
    // Race
    /////////////////////////////////////
    const racesArray = ["dragonborn", 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling']
    let currentRaceIndex = 0
    let highestRace = $('.race-images').children().length -1
    // $.ajax({
    //     url: genURL,
    //     success: (data)=>{
    // let currentRaceIndex = 0
    // let highestRace = $('.race-images').children().length -1
    $('#next-race').on('click', () => {
        $('.race-images').children().eq(currentRaceIndex).css('display', 'none');
        // console.log(currentRaceIndex);
        if (currentRaceIndex < highestRace) {
            currentRaceIndex++
        } else {
            currentRaceIndex = 0
        }
        $('.race-images').children().eq(currentRaceIndex).css('display', 'block');
        // console.log(data);
    })

    $('#previous-race').on('click', () => {
        $('.race-images').children().eq(currentRaceIndex).css('display', 'none');
        console.log(currentRaceIndex);

        if (currentRaceIndex > 0) {
            currentRaceIndex--
        } else {
            currentRaceIndex = highestRace
        }

        $('.race-images').children().eq(currentRaceIndex).css('display', 'block');
        // console.log(data);
    })

    $('#select-race').on('click', () => {
        $.ajax({
            url: 'https://www.dnd5eapi.co/api/races/'+ racesArray[currentRaceIndex],
            success: (data)=>{
                console.log(currentRaceIndex);
                console.log(data);
            },
            error: ()=>{
                console.log('bad request');
            }
        })
    });

    /////////////////////////////////////
    // Class
    /////////////////////////////////////
    const classesArray = ["barbarian", 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']

    let currentClassIndex = 0
    let highestClass = $('.class-images').children().length -1
            $('#next-class').on('click', () => {
                $('.class-images').children().eq(currentClassIndex).css('display', 'none');

                if (currentClassIndex < highestClass) {
                    currentClassIndex++
                } else {
                    currentClassIndex = 0
                }

                $('.class-images').children().eq(currentClassIndex).css('display', 'block');
            })

            $('#previous-class').on('click', () => {
                $('.class-images').children().eq(currentClassIndex).css('display', 'none');

                if (currentClassIndex > 0) {
                    currentClassIndex--
                } else {
                    currentClassIndex = highestClass
                }

                $('.class-images').children().eq(currentClassIndex).css('display', 'block');
            })

            $('#select-class').on('click', () => {
                $.ajax({
                    url: 'https://www.dnd5eapi.co/api/classes/'+ classesArray[currentClassIndex],
                    success: (data)=>{
                        $(".class-images").hide();
                        $(".class-images").html(data)
                    },
                    error: ()=>{
                        console.log('bad request');
                    }

                })
            });
    /////////////////////////////////////
    // Ability Scores
    /////////////////////////////////////
    let rolls = []
    $('#stat-roll').on('click', () => {
        rolls = []
        for (let i = 1; i <= 6; i++) {
            let statRoll = Math.floor(Math.random() * 16) + 3
            rolls.push(statRoll)
        }
        function sortRolls(a, b) {
            return b - a;
        }
        rolls.sort(sortRolls);
        console.log(rolls);
        // $('ul[0]').childNode.empty()
        $("#str").append(rolls[0])
        $("#dex").append(rolls[1])
        $("#con").append(rolls[2])
        $("#int").append(rolls[3])
        $("#wis").append(rolls[4])
        $("#cha").append(rolls[5])
        rolls = []
    })
})
