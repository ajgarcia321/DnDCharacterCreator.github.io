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

  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event
      .dataTransfer
      .clearData();
  }

  rolls = []
})

<div class='ability-scores'>
  <span id='${roll1}'
    draggable='true'
    ondragstart='onDragStart(event);'>
      draggable
  </span>

  <span
    ondragover='onDragOver(event);'
    ondrop='onDrop(event);'>
      dropzone
  </span>
</div>
