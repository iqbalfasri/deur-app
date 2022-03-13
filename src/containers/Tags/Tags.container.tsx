import { TagComponent } from "../../components";
import { TagContainerProps } from "./types";

const TagsContainer = ({
  isLoadingData,
  data,
  activeTag,
  onChangeTag,
}: TagContainerProps) => {
  return (
    <>
      {isLoadingData ? (
        <span>Loading...</span>
      ) : data.length > 0 ? (
        data.map((tag, index) => {
          return (
            <TagComponent
              key={index}
              active={activeTag === tag}
              label={tag}
              onClick={() => onChangeTag && onChangeTag(tag)}
            />
          );
        })
      ) : null}
    </>
  );
};

export default TagsContainer;
