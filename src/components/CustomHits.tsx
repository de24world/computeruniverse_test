import React, { ReactElement } from "react";

// Next
import Image from "next/image";

// material UI
import { Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

// Libarary
import { Highlight, connectHits } from "react-instantsearch-dom";

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
  console.log(hits, "this is hit");

  return (
    <div className="hit-component">
      <ul>
        <Grid container>
          {hits.map((hit) => (
            <Grid item sm={12} md={4} lg={3} key={hit.objectID}>
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
                  <Rating
                    name="ratings_average"
                    value={hit.ratings_average}
                    readOnly
                  />
                  <span> ({hit.ratings_sum}) </span>
                </div>
                <div className="hit-price">
                  <h3>{hit.price} €</h3>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </ul>
    </div>
  );
}

export const CustomHits = connectHits(Hits);
