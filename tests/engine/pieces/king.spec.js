import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    describe('king', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('should have 8 possible moves if not at the edge of the board', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(3, 4), king);
            
            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(8);
        });

        it('should have 5 possible moves if at the side of the board', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(0, 4), king);
            
            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(5);
        });

        it('should have 3 possible moves if in a corner', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(7, 7), king);
            
            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(3);
        });

        it('can move 1 square in any direction', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(3, 4), king);
            
            const moves = king.getAvailableMoves(board);
            
            moves.should.deep.include.members([Square.at(4, 4), Square.at(4, 5), Square.at(3, 5), Square.at(2, 5), Square.at(2, 4), Square.at(2, 3), Square.at(3, 3), Square.at(4, 3)]);
        });

    });

    // describe('king', () => {

    //     let board;
    //     beforeEach(() => board = new Board());    
        
    //     it('can move up or down', () => {
    //         const king = new King(Player.WHITE);
    //         board.setPiece(Square.at(3, 4), king);
            
    //         const moves = king.getAvailableMoves(board);
            
    //         moves.should.deep.include([Square.at(3, 5), Square.at(3, 3)]);
    //     });

    // });

});

