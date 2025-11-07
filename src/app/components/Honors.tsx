import React, { Fragment } from "react";
import type { Honor } from "@/types/resume";

type HonorsProps = {
  honors?: Honor[];
};

export default function Honors({ honors = [] }: HonorsProps) {
  const hnrs = honors.map((data, key) => {
    return (
      <Fragment key={key}>
        <dt className="pt-2.5">{data.honor}</dt>
        <dd className="pb-2.5">{data.date}</dd>
      </Fragment>
    );
  });

  return (
    <div>
      <dl className="flex flex-col items-center">
        {hnrs}
      </dl>
    </div>
  );
}
