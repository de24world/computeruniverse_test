import React, { ReactElement } from "react";

// Next
import Image from "next/image";

// Libarary
import { Highlight, connectHits, RatingMenu } from "react-instantsearch-dom";

interface hitsIData {
  hits: hitObjectData[];
}

interface hitObjectData {
  objectID: number;
  image_url: string;
  ratings_average: number;
  ratings_sum: number;
  price: number;
}

function Hits({ hits }: hitsIData): ReactElement {
  // console.log(hits, "this is hit");

  return (
    <div className="hit-component">
      {hits.map((hit) => (
        <div key={hit.objectID}>
          <Image
            src={`https://img.computerunivers.net${hit.image_url}`}
            alt="picture"
            width={150}
            height={200}
          />
          <div className="hit-content">
            <div className="hit-name">
              <Highlight attribute="name" hit={hit} />
            </div>
            <div className="hit-ratings">
              {/* <Rating
                  name="ratings_average"
                  value={hit.ratings_average}
                  readOnly
                /> */}
              {hit.ratings_average}({hit.ratings_sum})
              <RatingMenu
                attribute="ratings_average"
                // defaultRefinement={{ min: 2 }}
                // min={0}
                max={5.0}
                translations={{
                  ratingLabel: "",
                }}
              />
            </div>
            <div className="hit-price">{hit.price} €</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const CustomHits = connectHits(Hits);
