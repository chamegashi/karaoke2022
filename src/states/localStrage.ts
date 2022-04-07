import { useState } from "react";

export const musicDataState = () => {
  const [strageData] = useState("");
  const [loading] = useState(false);

  return { strageData, loading };
};
