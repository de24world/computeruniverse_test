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
import HeadInfo from "../src/components/HeadInfo";
import HitList from "../src/components/List/HitList";
import { CustomStateResults } from "../src/components/CustomStateResults";
import { CustomRangeSlider } from "../src/components/CustomRangeSlider";

function Page(): JSX.Element {
  // console.log(searchClient, "searchClient in Index");

  return (
    <>
      <HeadInfo
        title="Computeruniverse Test"
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <Configure hitsPerPage={4} /> <SearchBox />
      <CustomStateResults />
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
}

const searchClient = algoliasearch(
  "testingWYUM3QGL0M",
  "298a84786d04a76fc9edccfbd203bb8e"
);

export default withInstantSearch({
  indexName: "Stage-ComputerUniverse",
  searchClient,
})(Page);
