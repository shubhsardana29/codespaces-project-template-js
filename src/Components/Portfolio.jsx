/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Solana balance fetcher",
    description:
      "A universal balance fetcher tool(assuming the entire universe is on Solana). It is a simple but powerful app that fetches the balance of any account on Solana!.",
    url: "https://github.com/shubhsardana29/solana-balance-fetcher",
  },
  {
    title: "Taskly",
    description: "a flutter application that manages todo list using Hive.",
    url: "https://github.com/shubhsardana29/intro-flutter/tree/main/project2-taskly/taskly",
  },
  {
    title: "dapp using Flutter",
    description:
      "Built my first mobile dapp – Hello World Dapp!. Made use of Truffle, Ganache , web3dart library..",
    url: "https://github.com/shubhsardana29/flutter_dapp_1",
  },
  {
    title: "Paginate-NFTs.",
    description:
      "Contributed to a project that Paginate and search for token IDs within a NFT collection, fetches and generate it.",
    url: "https://paginate-nfts-67fcb6.spheron.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
