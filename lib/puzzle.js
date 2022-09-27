// todo

const hintBtn = document.getElementById("show-hint");
const hint = document.querySelector(".hint");

// Listen to the click
hintBtn.addEventListener( "click", (event) => {
  hint.classList.toggle("active");
})

// Select all the tiles
const tiles = document.querySelectorAll("tbody td");

// We create function to see if we can move or not
const tileCanMove = (tile) => {
  // We check which column the tile is located
  const tileColumn = tile.cellIndex;
  // We check which row the tile is located
  const tileRow = tile.parentElement.rowIndex;

  // obtain the info of the empty tile
  const emptyTile = document.querySelector("td.empty");

  // We check the column of the empty tile
  const emptyTileColumn = emptyTile.cellIndex;
  // We check the row of the empty tile
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  // return if we can move
  return ((tileColumn === emptyTileColumn) && (tileRow === emptyTileRow - 1)) // the tile on top of the empty tile
        || ((tileColumn === emptyTileColumn) && (tileRow === emptyTileRow + 1)) // the tile on bottom of the empty tile
        || ((tileColumn === emptyTileColumn + 1) && (tileRow === emptyTileRow)) // the tile on the right of the empty tile
    || ((tileColumn === emptyTileColumn - 1) && (tileRow === emptyTileRow)) // the tile on the left of the empty tile
}

const moveTile = (tile) => {
  const emptyTile = document.querySelector("td.empty");
  emptyTile.innerHTML = tile.innerHTML;
  emptyTile.classList.remove("empty");
  tile.classList.add("empty");
  tile.innerHTML = "";
}

const checkPlayerWon = () => {
  const tilesOrder = Array.from(document.querySelectorAll("td")).map(tile => Number.parseInt(tile.innerHTML, 10)).join();
  console.log(tilesOrder);
  if (tilesOrder === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("Congrats you win!!");
  }
}

// For each tile
tiles.forEach((tile) => {
  // We listen to a click event on the specific tile
  tile.addEventListener("click", (event) => {
    // We check if it has the empty tile as neighbour
    if (tileCanMove(tile)) {
      moveTile(tile);
      // Check if the player won
      setTimeout(() => {
        checkPlayerWon();
      }, 200);

    }
  })
})
// Swap the tile with the empty tile
