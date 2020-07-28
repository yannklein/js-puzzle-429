/////////////
// Example
/////////////

// 1. Select two element: button, hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  // 3. Change the DOM, display the hint
  hint.classList.add("active");
});

/////////////
// Live code
/////////////

const emptyTile = (clickedTile) => {
  const empty = document.querySelector(".empty");
  const emptyRow = empty.parentElement.rowIndex;
  const emptyCell = empty.cellIndex;

  const clickedRow = clickedTile.parentElement.rowIndex;
  const clickedCell = clickedTile.cellIndex;

  const distance = Math.abs(emptyRow - clickedRow) + Math.abs(emptyCell - clickedCell);
  if (distance === 1) {
    return true;
  }
  return false;
};

const swapeTiles = (clickedTile) => {
  const empty = document.querySelector(".empty");
  // add number to empty tile innerText
  empty.innerText = clickedTile.innerText;
  // remove innerText from clicked tiles
  clickedTile.innerText = "";
  // add empty class to clicked tile
  clickedTile.classList.add("empty");
  // remove empty class from emtpy tile
  empty.classList.remove("empty");
}

// Moe's nice solution :)

// const checkWin = (tiles) => {
//   let counter = 0;
//   let result = true;
//   tiles.forEach((tile) => {
//     counter += 1;
//     // if the counter is diff from innerText => return false
//     // console.log(counter, Number.parseInt(tile.innerText, 10));
//     if (counter !== Number.parseInt(tile.innerText, 10) && counter !== 16) {
//       result = false;
//     }
//   });
//   return result;
// }

const checkWin = (ties) => {
  const orderArray = [];
  tiles.forEach((tile) => {
    orderArray.push(tile.innerText);
  });
  return orderArray.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
}

// 1. select element all the tiles
const tiles = document.querySelectorAll("table td");
// 2. iterate the array (for each tile )
tiles.forEach((tile) =>{
  // 3. listen for click
  tile.addEventListener('click', (event) =>{
    // 4. check if there is an empty tile around
    if (emptyTile(event.currentTarget)) {
      // 5. yes-switch the empty tile
      swapeTiles(event.currentTarget);
      // 6. check if complete
      if(checkWin(tiles)) {
        alert("You win!! Muhahahaha");
      }
    }
  });
});










