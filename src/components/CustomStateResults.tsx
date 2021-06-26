import { connectStateResults } from "react-instantsearch-dom";

interface searchResultsProps {
  searchResults: searchResultsIData;
}

interface searchResultsIData {
  nbHits: number;
  query: string;
}

const StateResults = ({ searchResults }: searchResultsProps) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;
  // console.log(searchResults, "searchResults???");

  return (
    <>
      <div hidden={!hasResults}>
        There are {nbHits} results with
        {searchResults && searchResults.query ? (
          <span> &quot;{searchResults.query}&ldquo;</span>
        ) : (
          ""
        )}
      </div>
      <div hidden={hasResults}>There is no results</div>
    </>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
