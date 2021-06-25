import React from "react";

// Libarary
import algoliasearch from "algoliasearch/lite";
import { withInstantSearch } from "next-instantsearch";
import {
  Configure,
  Pagination,
  RefinementList,
  SearchBox,
  Highlight,
  Hits,
  Stats,
  Range,
  ToggleRefinement,
} from "react-instantsearch-dom";

// Next
import Image from "next/image";

// Source
import HitList from "../src/components/List/HitList";

const Page = () => (
  <>
    <Configure hitsPerPage={4} />
    <header>
      <SearchBox />
    </header>
    <main>
      <div className="product">
        <div className="menu">
          <RefinementList attribute="manufacturer" />
          <ToggleRefinement
            attribute="in_stock"
            label="Available immediately"
            value={true}
          />
        </div>

        <div className="results">
          {/* <Hits hitComponent={HitComponent} /> */}
          <Hits hitComponent={HitList} />
        </div>
      </div>
    </main>
    <footer>
      <Pagination />
    </footer>
  </>
);

const searchClient = algoliasearch(
  "testingWYUM3QGL0M",
  "298a84786d04a76fc9edccfbd203bb8e"
);

export default withInstantSearch({
  indexName: "Stage-ComputerUniverse",
  searchClient,
})(Page);
