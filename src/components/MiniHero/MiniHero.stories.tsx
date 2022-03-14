import { Meta, Story } from "@storybook/react/types-6-0";

import MiniHeroComponent from "./MiniHero.component";
import { MiniHeroComponentProps } from "./types";

export default {
  title: "Components/Mini Hero ",
  component: MiniHeroComponent,
} as Meta;

const Template: Story<MiniHeroComponentProps> = (args) => (
  <MiniHeroComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Hallo",
  description: "Description",
};
