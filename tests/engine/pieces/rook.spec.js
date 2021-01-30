import 'chai/register-should';
import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Rook', () => {
    
    let board;
    beforeEach(() => board = new Board());

    it('be able to move anywhere up, down, left, or right', () => {
        const rook = new Rook(Player.WHITE);
        board.setPiece(Square.at(3, 4), rook);
        
        const moves = rook.getAvailableMoves(board);
        
        moves.should.have.length(14);
    });
});
