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
            if (board.getPiece(Square.at(location.row + i, location.col + i)) != undefined){
                if (board.getPiece(Square.at(location.row + i, location.col + i)).player === this.player){break}
            }
            moves.push(Square.at(location.row + i, location.col + i))
            if (board.getPiece(Square.at(location.row + i, location.col + i)) != undefined){
                if (board.getPiece(Square.at(location.row + i, location.col + i)).player != this.player){break}
            }
        }
        // down and right moves
        for (let i = 1; (i <= location.row) && (i <= 7 - location.col); i++){
            if (board.getPiece(Square.at(location.row - i, location.col + i)) != undefined){
                if (board.getPiece(Square.at(location.row - i, location.col + i)).player === this.player){break}
            }
            moves.push(Square.at(location.row - i, location.col +i))
            if (board.getPiece(Square.at(location.row - i, location.col + i)) != undefined){
                if (board.getPiece(Square.at(location.row - i, location.col + i)).player != this.player){break}
            }
        }
        // down and left moves
        for (let i = 1; (i <= location.row) && (i <= location.col); i++){
            if (board.getPiece(Square.at(location.row - i, location.col - i)) != undefined){
                if (board.getPiece(Square.at(location.row - i, location.col - i)).player === this.player){break}
            }
            moves.push(Square.at(location.row - i, location.col - i))
            if (board.getPiece(Square.at(location.row - i, location.col - i)) != undefined){
                if (board.getPiece(Square.at(location.row - i, location.col - i)).player != this.player){break}
            }
        }
        // up and left moves
        for (let i = 1; (i <= 7 - location.row) && (i <= location.col); i++){
            if (board.getPiece(Square.at(location.row + i, location.col - i)) != undefined){
                if (board.getPiece(Square.at(location.row + i, location.col - i)).player === this.player){break}
            }
            moves.push(Square.at(location.row + i, location.col - i))
            if (board.getPiece(Square.at(location.row + i, location.col - i)) != undefined){
                if (board.getPiece(Square.at(location.row + i, location.col - i)).player != this.player){break}
            }
        }
        return moves
    }
}
