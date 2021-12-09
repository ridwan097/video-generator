import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  handleTextChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    let state = this.state;
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={state.term}
              onChange={this.handleTextChange}
              placeholder='Enter a search term...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
