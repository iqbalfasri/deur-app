import React from "react";

import { SearchBarComponentProps } from "./types";

const SearchBarComponent = ({ ...rest }: SearchBarComponentProps) => {
  return <input {...rest} className="px-4 py-2 border border-slate-400 rounded-md" />;
};

export default React.memo(SearchBarComponent);
