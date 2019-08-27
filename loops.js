// loop through the rainbow and print out the colors to the page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const ew = ['black', 'gray', 'red'];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++){
        const color = `<p style='color: ${colorArr[i]}'>${colorArr[i]}</p>`; // usually this is terrible practice (the styling, not the html)
        printToDom(color, 'rainbow');
    }
}


printRainbow(colors);
printRainbow(ew);

const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

  const printNames = (nameArr) => {
      for (let i = 0; i < nameArr.length; i++) {
          const name = `<p>${nameArr[i].first} ${nameArr[i].last}</p>`;
          printToDom(name, 'names');
      }
  }

  printNames(instructors);
