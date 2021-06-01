import React from "react";
import { StudentType } from "utils/types";

export const StudentCard = ({
  firstName,
  city,
  company,
  email,
  grades,
  pic,
  lastName,
  skill,
}: StudentType) => {
  return (
    <div>
      <img src={pic} alt={`${firstName} ${lastName} profile`} loading="lazy" />
      <div>
        <div></div>
      </div>
    </div>
  );
};
