import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        if (location.row - 1 === -1 && location.col - 1 === -1){
           return [Square.at(location.row + 1, location.col), 
            Square.at(location.row + 1, location.col + 1),
            Square.at(location.row, location.col + 1)] 
        } else if (location.row - 1 === -1 && location.col + 1 === 8){
            return [Square.at(location.row + 1, location.col),
                Square.at(location.row , location.col - 1),
                Square.at(location.row + 1, location.col - 1)]
        }else if (location.row + 1 === 8 && location.col - 1 === -1){
            return [Square.at(location.row, location.col + 1),
                Square.at(location.row - 1, location.col + 1),
                Square.at(location.row - 1, location.col)]
        }else if (location.row + 1 === 8 && location.col + 1 === 8){
            return [Square.at(location.row - 1, location.col),
                Square.at(location.row - 1, location.col - 1),
                Square.at(location.row , location.col - 1)]
        }else if (location.row - 1 === -1){
            return [Square.at(location.row + 1, location.col),
                Square.at(location.row + 1, location.col + 1),
                Square.at(location.row, location.col + 1),
                Square.at(location.row , location.col - 1),
                Square.at(location.row + 1, location.col - 1)]
        } else if (location.row + 1 === 8){
            return [Square.at(location.row, location.col + 1),
                Square.at(location.row - 1, location.col + 1),
                Square.at(location.row - 1, location.col),
                Square.at(location.row - 1, location.col - 1),
                Square.at(location.row , location.col - 1)]
        } else if (location.col - 1 === -1){
            return [Square.at(location.row + 1, location.col), 
                Square.at(location.row + 1, location.col + 1),
                Square.at(location.row, location.col + 1),
                Square.at(location.row - 1, location.col + 1),
                Square.at(location.row - 1, location.col)]
        } else if (location.col + 1 === 8){
            return [Square.at(location.row + 1, location.col),
                Square.at(location.row - 1, location.col),
                Square.at(location.row - 1, location.col - 1),
                Square.at(location.row , location.col - 1),
                Square.at(location.row + 1, location.col - 1)]
        } else {
            return [Square.at(location.row + 1, location.col), 
                Square.at(location.row + 1, location.col + 1),
                Square.at(location.row, location.col + 1),
                Square.at(location.row - 1, location.col + 1),
                Square.at(location.row - 1, location.col),
                Square.at(location.row - 1, location.col - 1),
                Square.at(location.row , location.col - 1),
                Square.at(location.row + 1, location.col - 1)]
        }
        
    }
}
