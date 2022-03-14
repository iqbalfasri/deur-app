import { Meta, Story } from "@storybook/react/types-6-0";

import Table from "./Table.component";
import { TableComponentProps } from "./types";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

const Template: Story<TableComponentProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});

const mockColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];
const mockData = [
  {
    name: "Name 01",
    email: "name01@gmail.com",
  },
  {
    name: "Name 02",
    email: "name02@gmail.com",
  },
];

Default.args = {
  columns: mockColumn,
  data: mockData,
};
