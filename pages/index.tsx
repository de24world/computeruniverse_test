import algoliasearch from "algoliasearch/lite";
import { withInstantSearch } from "next-instantsearch";
import {
  Configure,
  Highlight,
  Hits,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";

const HitComponent = ({ hit }) => {
  console.log(hit, "this is hit");

  return (
    <div className="hit">
      <div>
        <div className="hit-picture">
          <img src={`https://img.computerunivers.net${hit.image_url}`} />
        </div>
      </div>
      <div className="hit-content">
        <div>
          <Highlight attribute="name" hit={hit} /> <br />
          <span> - ${hit.price}</span> <br />
          <span> - {hit.ratings_average} stars</span> <br />
        </div>
        <div className="hit-type">
          {/* <Highlight attribute="type" hit={hit} /> */}
        </div>
        <div className="hit-description">
          {/* <Highlight attribute="description" hit={hit} /> */}
        </div>
      </div>
    </div>
  );
};

function IndexPage() {
  return (
    <>
      <Configure hitsPerPage={12} />
      <header>
        <SearchBox />
      </header>
      <main>
        <div className="menu">
          <RefinementList attribute="categories" />
        </div>
        <div className="results">
          <Hits hitComponent={HitComponent} />
        </div>
      </main>
      <footer>
        <Pagination />
      </footer>
    </>
  );
}

const searchClient = algoliasearch(
  process.env.APPLICATION_ID,
  process.env.API_KEY
);

export default withInstantSearch({
  indexName: "Stage-ComputerUniverse",
  searchClient,
})(IndexPage);
