// import styles from "../styles/Home.module.css";

// Libarary
import algoliasearch from "algoliasearch/lite";
import { withInstantSearch } from "next-instantsearch";
import {
  Configure,
  Pagination,
  RefinementList,
  SearchBox,
  Stats,
  Range,
  ToggleRefinement,
} from "react-instantsearch-dom";

// Source
import { CustomHits } from "../src/components/CustomHits";
import { CustomStateResults } from "../src/components/CustomStateResults";

const searchClient = algoliasearch(
  process.env.APPLICATION_ID,
  process.env.API_KEY
);

function SearchPage() {
  return (
    <>
      <Configure hitsPerPage={4} />
      <header>
        <SearchBox />
      </header>
      <main>
        <div className="product">
          <div className="menu">
            <RefinementList attribute="manufacturer" />
            {/* <Range attribute="price" /> */}
            <ToggleRefinement
              attribute="in_stock"
              label="Available immediately"
              value={true}
            />
          </div>
          <div className="results">
            CustomStateResults : <CustomStateResults />
            {/* Stats : <Stats /> */}
            <CustomHits />
          </div>
        </div>
      </main>
      <footer>
        <Pagination />
      </footer>
    </>
  );
}

export default withInstantSearch({
  indexName: "Stage-ComputerUniverse",
  searchClient,
})(SearchPage);
