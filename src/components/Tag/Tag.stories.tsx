import { Meta, Story } from "@storybook/react/types-6-0";

import Tag from "./Tag.component";
import { TagComponentProps } from "./types";

export default {
  title: "Components/Tag",
  component: Tag,
} as Meta;

const Template: Story<TagComponentProps> = ({ active, ...args }) => (
  <Tag active={active} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Music Video",
  active: false,
};
