import { connectStateResults } from "react-instantsearch-dom";

const StateResults = ({ searchResults }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;
  //   console.log(searchResults, "searchResults???");

  return (
    <>
      <div hidden={!hasResults}>
        There are {nbHits} results with
        {searchResults && searchResults.query ? (
          <span> "{searchResults.query}"</span>
        ) : (
          ""
        )}
      </div>
      <div hidden={hasResults}>There is no results</div>
    </>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
