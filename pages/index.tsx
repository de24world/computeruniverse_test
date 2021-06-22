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
  ToggleRefinement
} from "react-instantsearch-dom";

// material UI
import { makeStyles, Grid, Typography } from "@material-ui/core";

// Source
import { CustomHits } from "../src/components/CustomHits";

const searchClient = algoliasearch(
  process.env.APPLICATION_ID,
  process.env.API_KEY
);

function IndexPage() {
  return (
    <>
      <Configure hitsPerPage={4} />
      <header>
        <SearchBox />
      </header>
      <main>
        <Grid className="product" container >
          <Grid  className="menu" lg={2}>
            RefinementList - menu
            <RefinementList attribute="categoryname" />
            {/* <Range attribute={hit.price} /> */}
            <ToggleRefinement
              attribute="in_stock"
              label="Available immediately"
              value={true}
            />
            {/* in_stock */}
          </Grid>
          <Grid className="results" lg={10}>
            <Stats />
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
})(IndexPage);
