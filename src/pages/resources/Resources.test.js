import React from 'react'
import Resources from './Resources'
import renderer from 'react-test-renderer'

describe('resources Snapshot', () => {
let resourceComponent = renderer.create(<Resources/>)

  it('renders matching snapshot', () => {
    expect(resourceComponent.toJSON()).toMatchSnapshot();
  })
})