import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    searchValue: '',
    images: [],
    isLoading: false,
    error: null,
  }

  handleSearchSubmit = (value) => {
    this.setState({
      searchValue: value,
    })
  }
  
  render() {
    return (
      <Searchbar onSubmit={this.handleSearchSubmit} />
    )
  }
}

