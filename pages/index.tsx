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
  ToggleRefinement,
} from "react-instantsearch-dom";

// Next
import Image from "next/image";

// Source
import HitList from "../src/components/List/HitList";
import { CustomStateResults } from "../src/components/CustomStateResults";
import { CustomRangeSlider } from "../src/components/CustomRangeSlider";

const Page = () => (
  <>
    <Configure hitsPerPage={4} />
    <header>
      <SearchBox />
      <CustomStateResults />
    </header>
    <main>
      <div className="product">
        <div className="menu">
          <RefinementList attribute="manufacturer" />
          <ToggleRefinement
            attribute="in_stock"
            label="Available immediately"
            value={false}
          />
          {/* test
          <CustomRangeSlider attribute="price" /> */}
        </div>

        <div className="results">
          {/* <Hits hitComponent={HitComponent} /> */}
          <Hits hitComponent={HitList} />
        </div>
      </div>
    </main>
    <footer>
      <div className="pagination">
        <Pagination />
      </div>
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
