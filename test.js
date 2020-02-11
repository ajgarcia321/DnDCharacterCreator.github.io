let rolls = []
// function roll() {Math.floor(Math.random() * 18) + 3  }
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
  $(".ability-scores").append(rolls)

  rolls = []
})
