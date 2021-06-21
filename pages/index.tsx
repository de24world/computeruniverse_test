// import styles from "../styles/Home.module.css";

// Libarary
import algoliasearch from "algoliasearch/lite";
import { withInstantSearch } from "next-instantsearch";
import {
  Configure,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";

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
        <div className="">
          <div className="menu">
            RefinementList - menu
            <RefinementList attribute="categories" />
          </div>
          <div className="results  ">
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
})(IndexPage);
