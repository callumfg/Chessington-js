import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        // up and right moves
        for (let i = 1; (i <= 7 - location.row) && (i <= 7 - location.col); i++ ){
            moves.push(Square.at(location.row + i, location.col + i))
        }
        // down and right moves
        for (let i = 1; (i <= location.row) && (i <= 7 - location.col); i++){
            moves.push(Square.at(location.row - i, location.col +i))
        }
        // down and left moves
        for (let i = 1; (i <= location.row) && (i <= location.col); i++){
            moves.push(Square.at(location.row - i, location.col - i))
        }
        // up and left moves
        for (let i = 1; (i <= 7 - location.row) && (i <= location.col); i++){
            moves.push(Square.at(location.row + i, location.col - i))
        }
        return moves
    }
}
