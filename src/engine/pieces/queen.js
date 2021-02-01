import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Queen extends Piece {
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
        // upwards moves
        for (let i = 1; i <= 7 - location.row; i++){
            if (board.getPiece(Square.at(location.row + i, location.col)) != undefined){
                if (board.getPiece(Square.at(location.row + i, location.col)).player === this.player){break}
            }
            moves.push(Square.at(location.row + i, location.col))
            if (board.getPiece(Square.at(location.row + i, location.col)) != undefined){
                 if (board.getPiece(Square.at(location.row + i, location.col)).player != this.player){break}
            }
           
        };
        // moves right
        for (let i = 1; i <= 7 - location.col; i++){
            if (board.getPiece(Square.at(location.row, location.col + i)) != undefined){
                if (board.getPiece(Square.at(location.row, location.col + i)).player === this.player){break}
            }
            moves.push(Square.at(location.row, location.col + i))
            if (board.getPiece(Square.at(location.row, location.col + i)) != undefined){
                if (board.getPiece(Square.at(location.row, location.col + i)).player != this.player){break}
            }
        };
        // moves down
        for (let i = 1; i <= location.row; i++){
            if (board.getPiece(Square.at(location.row - i, location.col)) != undefined){
                if (board.getPiece(Square.at(location.row - i, location.col)).player === this.player){break}
            }
            moves.push(Square.at(location.row - i, location.col))
            if (board.getPiece(Square.at(location.row - i, location.col)) != undefined){
                if (board.getPiece(Square.at(location.row - i, location.col)).player != this.player){break}
           }
        };
        // moves left
        for (let i = 1; i <= location.col; i++){
            if (board.getPiece(Square.at(location.row, location.col - i)) != undefined){
                if (board.getPiece(Square.at(location.row, location.col - i)).player === this.player){break}
            }
            moves.push(Square.at(location.row, location.col - i))
            if (board.getPiece(Square.at(location.row, location.col - i)) != undefined){
                if (board.getPiece(Square.at(location.row, location.col - i)).player != this.player){break}
            }
        }
        return moves
    }
}
