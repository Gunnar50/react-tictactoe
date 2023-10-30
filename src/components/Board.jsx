import React from "react";
import Tile from "./Tile";

const BORDER_CLASSES = [
	"border-right border-bottom",
	"border-right border-bottom",
	"border-bottom",
	"border-right border-bottom",
	"border-right border-bottom",
	"border-bottom",
	"border-right",
	"border-right",
	"",
];

function Board({ tiles, onTileClick }) {
	return (
		<div className="board">
			{tiles.map((tile, index) => (
				<Tile
					key={index}
					value={tile}
					onClick={() => onTileClick(index)}
					className={BORDER_CLASSES[index]}
				/>
			))}
			<div className="strike strike-diagonal-2"></div>
		</div>
	);
}

export default Board;
