import React from "react";

// Next
import Link from "next/link";

// Source
import HeadInfo from "../src/components/HeadInfo";

function IndexPage(): JSX.Element {
  return (
    <>
      <HeadInfo
        title="Computeruniverse Test"
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />

      <div>
        <h3>Acceptance criteria: </h3>
        <p>1. Display the products in the Style from the screen</p>
        <p>2. Displays on Mobile ( 320 px– 768px) 1 Product</p>
        <p>3. Displays on Tablet (768px – 960px) 3 Products</p>
        <p>4. Displays on Desktop 4 Products</p>
        <p>
          Displays the Current Search Value in a Headline above the Products Has
          a Filter Bar on the Left side with the following filters:
        </p>
        <span> a.Price b.Manufacturer c.Available immediately</span>
      </div>

      <div>
        <Link href="/search" passHref>
          <button>
            <a>Move to search Page</a>
          </button>
        </Link>
      </div>
    </>
  );
}

export default IndexPage;
