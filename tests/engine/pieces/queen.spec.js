import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {
    
    let board;
    beforeEach(() => board = new Board());

    it('be able to move in any direction', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(3, 2), queen);
        
        const moves = queen.getAvailableMoves(board);
        
        moves.should.have.length(25);
    });
});
