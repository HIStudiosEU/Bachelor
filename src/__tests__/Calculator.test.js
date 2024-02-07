import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator'

test('Calculator handles addition correctly', () => {
  // Render Calculator-Komponente
  const { getByText, getByTestId } = render(<Calculator />);

  // Klicke auf die Tasten 2, +, 3 und =
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));

  // Überprüfe, ob die Eingabe und das Ergebnis korrekt sind
  expect(getByTestId('input-display')).toHaveTextContent('2+3');
  expect(getByTestId('result-display')).toHaveTextContent('5');
});

// Füge weitere Tests hinzu, um andere Rechenoperationen und Randfälle zu überprüfen.
