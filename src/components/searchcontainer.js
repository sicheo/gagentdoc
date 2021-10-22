import React from 'react';

const Result = ({ results }) => {
    return (
        results.map((r, i) => (<div key={i}>
            <a href={r.link}>{r.fragment} </a>
        </div>))
    );
}

const Search = (props) => {
    const {
        searchQuery,
        onChange,
        search
    } = props;

    return <div>
        <input
            type="text"
            value={searchQuery}
            onChange={onChange}
        />
        <button onClick={search}>Search</button>
    </div>;
}

export class Searchcontainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            results: []
        }

        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearchQueryChange(e) {
        this.setState({ searchQuery: e.target.value });
    }

    onSearch() {
        // Simulate call to server
        // TODO insert call to server
        setTimeout(() => {
            this.setState({
                results: [
                    { fragment: "this is fragment 1", link:"pagelink1" },
                    { fragment: "this is fragment 2", link: "pagelink2"},
                    { fragment: "this is fragment 3", link: "pagelink3"},
                    { fragment: "this is fragment 4", link: "pagelink4"},
                    { fragment: "this is fragment 5", link: "pagelink5"}
                ]
            });
        }, 1000)
    }

    render() {
        const { results, searchQuery } = this.state;

        return <div className="classSaerchContainer">
            <Search
                searchQuery={searchQuery}
                onChange={this.onSearchQueryChange}
                search={this.onSearch}
            />
            <div className="classMaintitle">
                <Result results={results} />
            </div>
        </div>;
    }
}