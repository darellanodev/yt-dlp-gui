import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'
import React from 'react'

describe('App component', () => {
  it('renders the main title', () => {
    render(<App />)
    expect(screen.getByText('Configure the parameters')).toBeInTheDocument()
  })

  it('renders the media type fieldset', () => {
    render(<App />)
    expect(screen.getByText('Media type')).toBeInTheDocument()
    expect(screen.getByLabelText('Video')).toBeInTheDocument()
    expect(screen.getByLabelText('Audio')).toBeInTheDocument()
  })

  it('renders the single and the playlist process options', () => {
    render(<App />)
    expect(screen.getByText('Select the type of process')).toBeInTheDocument()
    expect(screen.getByLabelText('Single')).toBeInTheDocument()
    expect(screen.getByLabelText('Playlist')).toBeInTheDocument()
  })
})
