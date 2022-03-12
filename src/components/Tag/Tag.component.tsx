import classNames from "classnames";
import { TagComponentProps } from "./types";

const TagComponent = ({ label, active, ...rest }: TagComponentProps) => {
  return (
    <button
      className={classNames(
        "block bg-slate-100 px-4 py-2 mr-2 font-base rounded-md min-w-[150px]",
        {
          "bg-slate-500 text-white": active,
        }
      )}
      {...rest}
    >
      {label}
    </button>
  );
};

export default TagComponent;
