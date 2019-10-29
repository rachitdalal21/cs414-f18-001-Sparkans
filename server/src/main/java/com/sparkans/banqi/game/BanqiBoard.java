package com.sparkans.banqi.game;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/* 
 * Need to make a lot of changes
 * This is just an outline containing all the methods to create legal moves and Banqi Piece.
 */

public class BanqiBoard {

	private BanqiPiece[][] board;

	// initialize the board to 8x4 array
	public BanqiBoard() {
		if (this.board == null) {
			this.board = new BanqiPiece[8][4];
		}
	}
	
	// initialize the board to standard Banqi opening state
		public void initialize() {
		
		}

	// Helper Method to store row and column indexes as Key-Value Pair.
	private Map<String, Integer> parsePosition(String position) {
		Map<String, Integer> parsedPositions = new HashMap<>();
		int column = 0;
		char col = position.charAt(0);
		int row = Integer.parseInt(String.valueOf(position.charAt(1))) - 1;
		column = col - 'a';
		parsedPositions.put("row", row);
		parsedPositions.put("column", column);
		return parsedPositions;
	}
	
	/*
	 * Column and Row coordinates are separated from the given position. 
	 * Banqi Piece present in the board in the given position is returned.
	 * If the passed position is not within the Banqi board boundaries, 
	 * an IllegalPositionException is thrown.
	 */
	public BanqiPiece getPiece(String position) throws IllegalPositionException {

		Pattern regex = Pattern.compile("[a-d][1-8]");
		Matcher matcher = regex.matcher(position);
		if (!matcher.matches()) {
			throw new IllegalPositionException("Illegal Position. Position should be between a1 through d8");
		}

		int row = parsePosition(position).get("row");
		int column = parsePosition(position).get("column");

		return board[row][column];
	}
	
	/*
	 * Places the passed BanqiPiece in the given position on Banqi board.
	 */
	public boolean placePiece(BanqiPiece piece, String position) {

		int row = parsePosition(position).get("row");
		int column = parsePosition(position).get("column");

		BanqiPiece existingPiece;

		try {
			existingPiece = getPiece(position);

			if (null == existingPiece) {
				piece.setPosition(position);
				board[row][column] = piece;
				return true;
			} 
			else {
				if (existingPiece.color.equals(piece.color)) {
					return false;
				} else {
					piece.setPosition(position);
					board[row][column] = piece;
					return true;
				}
			}
		} catch (IllegalPositionException e) {
			return false;
		}
	}
	
	/* A given move is compared against the list of legal moves and the piece is moved accordingly.
	 * An IllegalMoveException is thrown in case of an illegal move.
	 */
	public void move(String fromPosition, String toPosition) throws IllegalMoveException {

		try {
			BanqiPiece sourcePiece = getPiece(fromPosition);
			BanqiPiece destinationPiece = getPiece(toPosition);

			if (sourcePiece == null) 
				throw new IllegalMoveException("No piece present at the source");
			
			if (!faceUp(sourcePiece)) 
				throw new IllegalMoveException("No move allowed for a face-down piece");
			
			if (!faceUp(destinationPiece) && (!sourcePiece.toString().equals("RCa") || !sourcePiece.toString().equals("WCa"))) 
				throw new IllegalMoveException("Cannot capture a face-down piece");
			
			int sourceRow = sourcePiece.row;
			int sourceColumn = sourcePiece.column;
			if (sourcePiece.legalMoves().contains(toPosition)) {
				if (placePiece(sourcePiece, toPosition)) {
					board[sourceRow][sourceColumn] = null;
				}
			} 
			else
				throw new IllegalMoveException("Illegal Move.");
		} catch (IllegalPositionException e) {
			throw new IllegalMoveException("Illegal Move due to invalid position. " + e.getMessage());
		}
	}

	private boolean faceUp(BanqiPiece piece) {
		return false;
	}
	
}
