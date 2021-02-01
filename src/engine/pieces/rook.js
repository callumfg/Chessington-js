import Board from '../board';
import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        console.log('getting rook moves')
        let location = board.findPiece(this);
        let moves = [];
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
