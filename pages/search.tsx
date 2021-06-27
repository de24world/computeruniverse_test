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
  RangeInput,
} from "react-instantsearch-dom";

// Next
import Image from "next/image";

// Source
import HeadInfo from "../src/components/HeadInfo";
import HitList from "../src/components/List/HitList";
import { CustomStateResults } from "../src/components/CustomStateResults";
import { CustomRangeSlider } from "../src/components/CustomRangeSlider";

function SearchPage(): JSX.Element {
  // console.log(<CustomRangeSlider />, "CustomRangeSlider in Index");

  return (
    <>
      <div className="header">
        <HeadInfo
          title="Computeruniverse Test"
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <Configure hitsPerPage={4} /> <SearchBox />
        <CustomStateResults />
      </div>

      <main>
        <div className="product">
          <div className="sidebar container">
            <RefinementList
              attribute="manufacturer"
              showMore
              showMoreLimit={30}
            />
            <ToggleRefinement
              attribute="in_stock"
              label="Available immediately"
              value={true}
            />
            <CustomRangeSlider
              attribute="price"
              defaultRefinement={{
                min: 1,
                max: 9860,
              }}
              min={0}
              max={9999}
            />
            {/* <RangeInput attribute="price" /> */}
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
})(SearchPage);
