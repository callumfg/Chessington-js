import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        if(location.row + 2 <= 7){
            if (location.col + 1 <= 7){
                moves.push(Square.at(location.row + 2, location.col + 1))
            } if (location.col - 1 >= 0){
                moves.push(Square.at(location.row + 2, location.col - 1))
            }
        }
        if(location.row + 1 <= 7){
            if (location.col + 2 <= 7){
                moves.push(Square.at(location.row + 1, location.col + 2))
            } if (location.col - 1 >= 0){
                moves.push(Square.at(location.row + 1, location.col - 2))
            }
        }
        if(location.row - 2 >= 0){
            if (location.col + 1 <= 7){
                moves.push(Square.at(location.row - 2, location.col + 1))
            } if (location.col - 1 >= 0){
                moves.push(Square.at(location.row - 2, location.col - 1))
            }
        }
        if(location.row - 1 >= 0){
            if (location.col + 2 <= 7){
                moves.push(Square.at(location.row - 1, location.col + 2))
            } if (location.col - 1 >= 0){
                moves.push(Square.at(location.row - 1, location.col - 2))
            }
        }
        return moves
    }
}
