import React from "react";

function HowReviewsWork() {
  return (
    <div className=" flex flex-col gap-2">
      <h1 className="text-xl font-bold">Field Review Task Checklist</h1>
      <p>Duration: approx 4-5 days (2-3 days on site + travel time)</p>
      <p>
        Tasks: meet the project leaders, visit the planting areas and nursery
        (if applicable), monitor general conditions and community involvement.
      </p>
      <br />
      <ul>
        <li>
          <h2 className="text-xl font-bold">Before Arrival</h2>
          <p>
            Reviewers get an overview of the project and the field review
            documents. These documents contain, among others, some specific
            information for each project like: number of species planted, type
            of project, planting method, etc. Reviewers need to clearly
            understand the project approach as well as the data indicators
            before visiting the project site.
          </p>
          <br />
          <p>
            Plant-for-the-Planet's Restoration Project Evaluator supports and
            accompanies the entire process of planning and logistic.
          </p>
        </li>
        <br />
        <li>
          <h2 className="text-xl font-bold">On the Field Site</h2>
          <p>
            The reviewer will travel to the project site, meet the project
            leaders and explain the review objectives. After this, the reviewing
            process starts.
          </p>
          <br />
          <p>
            During the visit, the reviewer will talk with the project leaders to
            understand the biological and social aspects of the project, visit
            planting areas and carry out the field verification: take pictures,
            note species, check the area, and fill the field review sheets.
          </p>
        </li>
        <br />
        <li>
          <h2 className="text-xl font-bold">After Return</h2>
          <p>
            The reviewer finalizes the report within one week after return and
            sends it to the Restoration Project Evaluator at
            Plant-for-the-Planet. In case there are any doubts, the coordinator
            might contact the reviewer for clarification.
          </p>
          <br />
          <p>
            The reviewer's report is then submitted to our Project Review Board
            which decides which projects pass the standards, based on the report
          </p>
        </li>
      </ul>
    </div>
  );
}

export default HowReviewsWork;
