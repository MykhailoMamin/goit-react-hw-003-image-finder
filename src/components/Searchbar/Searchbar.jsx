import { Component }  from "react";

export class Searchbar extends Component {
    state = {
        value: "",
    }

    handleChange = evt => {
        this.setState({
            value: evt.target.value,
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const { onSubmit } = this.props;
        
        onSubmit(this.state.value)
        this.setState({
            value: '',
        })
    }
    
    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>
                    <input type="text" name="search" autoComplete="off" autoFocus placeholder="Search images and photos" onChange={this.handleChange} value={this.state.value} />
                </form>
            </header>
        )
    }
}