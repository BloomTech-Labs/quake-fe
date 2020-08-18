import React from 'react'
import About from './About'
import renderer from 'react-test-renderer'

describe('About Snapshot', () => {
let aboutComponent = renderer.create(<About/>)

  it('renders matching snapshot', () => {
    expect(aboutComponent.toJSON()).toMatchSnapshot();
  })
})