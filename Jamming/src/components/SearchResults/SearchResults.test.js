import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults component', () => {
  const mockSearchResults = [
    {
      id: '1',
      name: 'Track 1',
      artist: 'Artist 1',
      album: 'Album 1'
    },
    {
      id: '2',
      name: 'Track 2',
      artist: 'Artist 2',
      album: 'Album 2'
    }
  ];

  it('renders a list of tracks', () => {
    const wrapper = shallow(<SearchResults searchResults={mockSearchResults} />);
    expect(wrapper.find('.Track')).toHaveLength(mockSearchResults.length);
  });

  it('renders a button with a + sign for each track', () => {
    const wrapper = shallow(<SearchResults searchResults={mockSearchResults} />);
    expect(wrapper.find('.Track-action').at(0).text()).toEqual('+');
    expect(wrapper.find('.Track-action').at(1).text()).toEqual('+');
  });

  it('calls the onAdd prop when a track is added', () => {
    const mockOnAdd = jest.fn();
    const wrapper = shallow(<SearchResults searchResults={mockSearchResults} onAdd={mockOnAdd} />);
    wrapper.find('.Track-action').at(0).simulate('click');
    expect(mockOnAdd).toHaveBeenCalledWith(mockSearchResults[0]);
  });
});