export type RowField = {
  model: string;
  label: string;
  type: string;
};

export type RowSection = {
  type: "row";
  fields: RowField[];
};

export type FullSection = {
  type: "full";
  model: string;
  label: string;
  typeInput: string;
};

export type TextareaSection = {
  type: "textarea";
  model: string;
  label: string;
  rows?: number;
};

export type FormSection = RowSection | FullSection | TextareaSection;
