import React from "react";
import axios from "axios";
import Result from "../components/Result";

class InfiniteResults extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      journals: [],
      hasMore: true,
      offset: 0,
      limit: 20
    };
    window.onscroll = () => {
      const {
        loadJournals,
        state: { error, loading, hasMore }
      } = this;
      if (error || loading || !hasMore) return;
      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
        document.documentElement.clientHeight
      ) {
        // call some loading method
        loadJournals();
      }
    };
  }

  componentWillMount() {
    this.loadJournals();
  }

  loadJournals = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;
      axios
        .get(
          `http://127.0.0.1:8000/infinite-api/?limit=${limit}&offset=${offset}`
        )
        .then(res => {
          const newJournals = res.data.journals;
          const hasMore = res.data.has_more;
          this.setState({
            hasMore,
            loading: false,
            journals: [...this.state.journals, ...newJournals],
            offset: offset + limit
          });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  };

  render() {
    const { error, hasMore, loading, journals } = this.state;
    return (
      <div style={{ overflowY: "scroll", flex: 1 }}>
        <h1>Infinite journals</h1>
        <p>Scroll down to load more</p>
        <hr />
        {journals.map(j => {
          return <Result journal={j} key={j.id} />;
        })}
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {!hasMore && <div>No more results</div>}
      </div>
    );
  }
}

export default InfiniteResults;
