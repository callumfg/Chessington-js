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
            moves.push(Square.at(location.row + i, location.col))
           
            // if (Board.getPiece(Square.at(location.row + i, location.col)) != 'undefined'  )
        };
        // moves right
        for (let i = 1; i <= 7 - location.col; i++){
            moves.push(Square.at(location.row, location.col + i))
        };
        // moves down
        for (let i = 1; i <= location.row; i++){
            moves.push(Square.at(location.row - i, location.col))
        };
        // moves left
        for (let i = 1; i <= location.col; i++){
            moves.push(Square.at(location.row, location.col - i))
        }
        return moves
    }
}
