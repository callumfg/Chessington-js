import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board());
    const knight = new Knight(Player.WHITE);
    
    let testCases = [{row: 0, col: 0, result: 2}]

    testCases.forEach(testCase => {
    it('should be able to do its knight thing', () => {
        
        board.setPiece(Square.at(testCase.row, testCase.col), knight);
        
        const moves = knight.getAvailableMoves(board);
        
        moves.should.have.length(testCase.result);
    });
})
});
