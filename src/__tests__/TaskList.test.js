// TaskList.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import TaskList from '../components/TaskList';
import { render, fireEvent, screen } from '@testing-library/react';

describe('TaskList', () => {
  it('rendert korrekt mit leeren Aufgaben', () => {
    const tree = renderer.create(<TaskList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
