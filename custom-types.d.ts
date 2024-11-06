export type ConsentName = "newsletter" | "ads" | "statistics";

export type Consent = {
  id: number;
  name: ConsentName;
  label: string;
};

export type User = {
  name: string;
  email: string;
  consents: Consent["name"][];
};
