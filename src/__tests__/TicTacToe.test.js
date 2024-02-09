// TicTacToe.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TicTacToe from '../components/TicTacToe'; // Stellen Sie sicher, dass der Pfad korrekt ist

describe('TicTacToe Component', () => {
    test('allows player X to start a game by clicking the first square', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole('button'); // Alle Schaltflächen abrufen
        fireEvent.click(squares[0]); // Klicken auf das erste Spielfeld
        expect(squares[0]).toHaveTextContent('X'); // Überprüfen, ob das erste Feld ein X enthält
      });   
});
