import 'chai/register-should';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {
    let board;
    beforeEach(() => board = new Board());

    it('be able to move diagonally in any direction', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(2, 6), bishop);
        
        const moves = bishop.getAvailableMoves(board);
        
        moves.should.have.length(9);
    });

});
