"use server";

import type { Consent, TypedFormData } from "@/custom-types/";
import postConsent from "@/lib/api/postConsent";

export type ConsentActionState = {
  status?: string;
};

async function saveConsentAction(data: FormData) {
  const dataTyped = data as TypedFormData<Consent>;
  const name = dataTyped.get("name");
  const email = dataTyped.get("email");
  const consents = dataTyped.getAll("consents");

  console.log({
    name,
    email,
    consents,
  });

  if (name && email && consents) {
    postConsent({
      name,
      email,
      consents,
    });
  }
}

export default saveConsentAction;
