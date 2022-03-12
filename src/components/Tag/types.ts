export interface TagComponentProps
  extends React.ComponentPropsWithoutRef<"button"> {
  active?: boolean;
  label: string;
}
