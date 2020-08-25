import React, { Fragment } from "react";
import {
  FEMALogo,
  RedCrossLogo,
  SalvationArmyLogo,
} from "./imageImports";

// emailSize/websiteSize = smaller (to fit longer text in card else leave empty)
const resources = [
  {
    image: FEMALogo,
    alt: "Federal Emergency Management Agency logo",
    name: "FEMA - Greater LA Area",
    phone: "1-800-621-3362",
    email: "AskIA@fema.dhs.gov",
    website: "http://www.fema.gov",
    emailSize: "",
    websiteSize: "",
  },
  {
    image: RedCrossLogo,
    alt: "American Red Cross logo",
    name: "American Red Cross - LA",
    phone: "1-800-733-2767",
    email: "",
    website: "http://www.recross.org",
    emailSize: "",
    websiteSize: "",
  },
  {
    image: SalvationArmyLogo,
    alt: "Salvation Army logo",
    name: "Salvation Army - Greater LA",
    phone: "1-844-458-4673",
    email: "",
    website: "http://www.salvationarmyusa.org",
    emailSize: "smaller",
    websiteSize: "smaller",
  },
];

const ResourceCard = () => {
  return (
    <Fragment>
      {resources.map((value, index) => {
        return (
          <div className="resource-card" key={index}>
            <img src={value.image} className="resource-logo" alt={value.alt} />
            <h4 className="resource-name">{value.name}</h4>
            {value.phone ? (
              <p className="resource-phone">
                Phone:
                <span className="resource-highlight">{value.phone}</span>
              </p>
            ) : (
              <></>
            )}

            {value.email ? (
              <p
                className={
                  value.emailSize === "smaller"
                    ? "resource-email smaller"
                    : "resource-email"
                }
              >
                Email:
                <span className="resource-highlight">{value.email}</span>
              </p>
            ) : (
              <></>
            )}
            <a
              href={value.website}
              target="_blank"
              rel="noopener noreferrer"
              className={
                value.websiteSize === "smaller"
                  ? "resource-highlight website smaller"
                  : "resource-highlight website"
              }
            >
              {value.website}
            </a>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ResourceCard;
