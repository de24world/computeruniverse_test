import React from "react";

// Next
import Image from "next/image";

// material UI

// Libarary
import { Highlight, connectHits, RatingMenu } from "react-instantsearch-dom";

interface hitIData {
  hit: hitObjectData;
}

interface hitObjectData {
  objectID: number;
  image_url: string;
  ratings_average: number;
  ratings_sum: number;
  price: number;
}

function HitList({ hit }: hitIData): JSX.Element {
  //   console.log(hit, "this is hit");

  return (
    <div className="hitList">
      <Image
        className="hit-picture"
        src={`https://img.computerunivers.net${hit.image_url}`}
        alt="picture"
        width={150}
        height={200}
      />
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-ratings">
        {hit.ratings_average}({hit.ratings_sum})
      </div>
      <div className="hit-price">
        <h6 color="primary">{hit.price} €</h6>
      </div>
    </div>
  );
}

export default HitList;
