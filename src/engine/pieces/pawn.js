import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Board from '../../../src/engine/board';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        
        let location = board.findPiece(this)
        let moves = []

        if (this.player === Player.WHITE){
            if (location.row === 7){
                return moves
            } else if (location.row != 1){
            moves.push(Square.at(location.row + 1, location.col))
            } else {
                moves.push(Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col))
            } if (board.getPiece(Square.at(location.row + 1, location.col +1)) != undefined){
                moves.push(Square.at(location.row +1, location.col +1))
            } if (board.getPiece(Square.at(location.row + 1, location.col -1)) != undefined){
                moves.push(Square.at(location.row +1, location.col -1))
            }
        } else {
            if (location.row === 0){
                return moves
            } else if (location.row != 6){
            moves.push(Square.at(location.row - 1, location.col))
        } else {
            moves.push(Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col))
        } if (board.getPiece(Square.at(location.row - 1, location.col +1)) != undefined){
            moves.push(Square.at(location.row - 1, location.col +1))
        } if (board.getPiece(Square.at(location.row - 1, location.col - 1)) != undefined){
            moves.push(Square.at(location.row - 1, location.col - 1))
        }
        }
        return moves
    }
}
