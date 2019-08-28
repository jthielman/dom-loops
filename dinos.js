console.log('🦕💨');


const dinosaurs = [
    {
      dinoType: 't-rex',
      name: 'wrex',
      emoji: '🦖'
    },
    {
      dinoType: 'stegosaurus',
      name: 'steve',
      emoji: '🦕'
    },
    {
      dinoType: 'velociraptor',
      name: 'Ted',
      emoji: '🦘'
    }
  ];
  
const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}


const dinoPrinter = (dinoArr) => {
    for (let i = 0; i < dinoArr.length; i++) {
        const stringToPrint = `
        <div class="dino-card">
            <h3>${dinoArr[i].dinoType}</h3>
            <p>${dinoArr[i].name}</p>
            <h1>${dinoArr[i].emoji}</h1>
        </div>
        `
        printToDom(stringToPrint, 'dino-div')
    }
}

dinoPrinter(dinosaurs);