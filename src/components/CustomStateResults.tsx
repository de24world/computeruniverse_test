import { connectStateResults } from "react-instantsearch-dom";

const StateResults = ({ searchResults }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;
  //   console.log(searchResults, "searchResults???");
  //   console.log(hasResults, "hasResults is true or false");
  //   console.log(nbHits, "nbHits is result of search count number");

  //   function searchValue() {
  //     if (searchResults.query === !null) return <>{searchResults.query}</>;
  //   }

  return (
    <>
      <div hidden={!hasResults}>
        There are {nbHits} results with
        {searchResults && searchResults.query ? (
          <span> "{searchResults.query}"</span>
        ) : (
          ""
        )}
        {/* {searchResults.query === !"" && <p>{searchResults.query}</p>} */}
      </div>
      <div hidden={hasResults}>There is no results</div>
    </>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
