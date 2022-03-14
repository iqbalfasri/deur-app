import { Meta, Story } from "@storybook/react/types-6-0";

import SearchBar from "./SearchBar.component";
import { SearchBarComponentProps } from "./types";

export default {
  title: "Components/Search Bar",
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarComponentProps> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Masukan text..."
};
