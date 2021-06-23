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

// material UI
import { makeStyles, Grid, Typography } from "@material-ui/core";

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
        <Grid className="product" container>
          <Grid className="menu" lg={2} item>
            <RefinementList attribute="manufacturer" />
            {/* <Range attribute="price" /> */}
            <ToggleRefinement
              attribute="in_stock"
              label="Available immediately"
              value={true}
            />
          </Grid>
          <Grid className="results" lg={10} item>
            CustomStateResults : <CustomStateResults />
            {/* Stats : <Stats /> */}
            <CustomHits />
          </Grid>
        </Grid>
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
