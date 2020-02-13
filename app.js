$( () => {
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
    $('#next-race').on('click', () => {
        $('.race-images').children().eq(currentRaceIndex).css('display', 'none');
        if (currentRaceIndex < highestRace) {
            currentRaceIndex++
        } else {
            currentRaceIndex = 0
        }
        $('.race-images').children().eq(currentRaceIndex).css('display', 'block');
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
    })

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

    /////////////////////////////////////
    // Ability Scores
    /////////////////////////////////////

    let rolls = []
    $('#stat-roll').on('click', () => {
        rolls = []
        $("#str").children().remove()
        $("#dex").children().remove()
        $("#con").children().remove()
        $("#int").children().remove()
        $("#wis").children().remove()
        $("#cha").children().remove()
        for (let i = 1; i <= 6; i++) {
            let statRoll = Math.floor(Math.random() * 16) + 3
            rolls.push(statRoll)
        }
        $("#str").append(`<p>${rolls[0]}</p>`)
        $("#dex").append(`<p>${rolls[1]}</p>`)
        $("#con").append(`<p>${rolls[2]}</p>`)
        $("#int").append(`<p>${rolls[3]}</p>`)
        $("#wis").append(`<p>${rolls[4]}</p>`)
        $("#cha").append(`<p>${rolls[5]}</p>`)
    })
    /////////////////////////////////////
    // Display Info (Race)
    /////////////////////////////////////
    const $openRace = $('#openRace');
    const $race = $('#race');
    const $closeRace = $('#closeRace');
    const $raceInfo = $('#race-info')

    const openRace = () => {
        $.ajax({
            url: 'https://www.dnd5eapi.co/api/races/'+ racesArray[currentRaceIndex],
            success: (data)=>{
                $raceInfo.children().remove()
                $raceInfo.append(`<h4>${data.name}</h4>`)
                $raceInfo.append(`<p><b>Speed: </b>${data.speed}</p>`)
                for (let a = 0; a < data.ability_bonuses.length; a++) {
                    $raceInfo.append(`<p><b>${data.ability_bonuses[a].name}:</b> +${data.ability_bonuses[a].bonus}</p>`)
                }
                for (let b = 0; b < data.traits.length; b++) {
                    $raceInfo.append(`<p><b>Trait: </b>${data.traits[b].name}</p>`)
                }
                $raceInfo.append(`<p><b>Alignment: </b>${data.alignment}</p>`)
                $raceInfo.append(`<p><b>Age: </b>${data.age}</p>`)
                $raceInfo.append(`<p><b>Size: </b>${data.size_description}</p>`)
                $raceInfo.append(`<p><b>Language: </b>${data.language_desc}</p>`)
                for (let c = 0; c < data.subraces.length; c++) {
                    $raceInfo.append(`<p><b>Subraces: </b>${data.subraces[c].name}</p>`)
                }
            },
            error: ()=>{
                console.log('bad request');
            }
        })
        $race.css('display', 'block');
    }

    const closeRace = () => {
        $race.css('display', 'none');
    }

    $openRace.on('click', openRace);
    $closeRace.on('click', closeRace);

    /////////////////////////////////////
    // Display Info (Class)
    /////////////////////////////////////

    const $openClass = $('#openClass');
    const $class = $('#class');
    const $closeClass = $('#closeClass');
    const $classInfo = $('#class-info')

    const openClass = () => {
        $.ajax({
            url: 'https://www.dnd5eapi.co/api/classes/'+ classesArray[currentClassIndex],
            success: (data)=> {
                $classInfo.children().remove()
                $classInfo.append(`<h4>${data.name}</h4>`)
                $classInfo.append(`<p><b>Hit Die: </b>d${data.hit_die}</p>`)
                for (let i = 0; i <= data.proficiency_choices[0].from.length; i++) {
                    $classInfo.append(`<p>${data.proficiency_choices[0].from[i].name}</p>`)
                }
            },
            error: ()=>{
                console.log('bad request');
            }
        })
        $class.css('display', 'block');
    }

    const closeClass = () => {
        $class.css('display', 'none');
}

    $openClass.on('click', openClass);
    $closeClass.on('click', closeClass);
})
