import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <div className="ui icon input">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
                placeholder="Search on Youtube"
              />
              <i className="cicular search link icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
