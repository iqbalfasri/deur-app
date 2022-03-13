export interface TagContainerProps {
  isLoadingData?: boolean;
  data: any[];
  activeTag?: string;
  onChangeTag?(tag?: string): void;
}
