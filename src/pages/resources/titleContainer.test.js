import React from 'react';
import * as rtl from '@testing-library/react'
import TitleContainer from './titleContainer';

it('should render title with jump link to top', () => {
  rtl.render(<TitleContainer />)
})

it('should add class large-title if passed in prop', () => {
  rtl.render(<TitleContainer size='large-title' />)
  const firstDiv = document.querySelector('.title-container')
  expect(firstDiv.classList.contains('large-title')).toBe(true)
})