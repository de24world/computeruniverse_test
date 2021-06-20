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
// import styles from '../styles/Home.module.css'

interface hitIData {
  hit: indexIData;
}

interface indexIData {
  image_url: string;
  ratings_average: number;
  ratings_sum: number;
  price: number;
}

const searchClient = algoliasearch(
  process.env.APPLICATION_ID,
  process.env.API_KEY
);

const HitComponent = ({ hit }: hitIData) => {
  console.log(hit, "this is hit");

  return (
    <div className="hit flex">
      <div className="hit-picture">
        <img src={`https://img.computerunivers.net${hit.image_url}`} />
      </div>
      <div className="hit-content">
        <div className="hit-name">
          <Highlight attribute="name" hit={hit} />
        </div>
        <div className="hit-rating">
          <span> {hit.ratings_average} stars</span>
          <span> ({hit.ratings_sum}) </span>
        </div>
        <div className="hit-price">
          <h3> {hit.price} €</h3>
        </div>
      </div>
      {/* <div className="hit-manufacturer">
        <Highlight attribute="manufacturerslug" hit={hit} />
      </div> */}
      {/* <div className="hit-description">
        <Highlight attribute="description" hit={hit} />
      </div> */}
    </div>
  );
};

function IndexPage() {
  return (
    <>
      <Configure hitsPerPage={4} />
      <header>
        <SearchBox />
      </header>
      <main>
        <div className="grid grid-cols-2 gap-4">
          <div className="menu">
            RefinementList - menu
            <RefinementList attribute="categories" />
          </div>
          <div className="results">
            <Hits hitComponent={HitComponent} />
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
