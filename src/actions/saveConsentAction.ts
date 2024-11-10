"use server";

import type { Consent, TypedFormData } from "@/custom-types/";
import getConsentByEmail from "@/lib/api/getConsentByEmail";
import patchConsent from "@/lib/api/patchConsent";
import postConsent from "@/lib/api/postConsent";

export type ConsentActionState = {
  status?: string;
};

async function saveConsentAction(data: FormData) {
  const dataTyped = data as TypedFormData<Consent>;
  const name = dataTyped.get("name");
  const email = dataTyped.get("email");
  const consents = dataTyped.getAll("consents");
  const currentConsent = (email ? await getConsentByEmail(email) : [])[0];

  if (!name || !email || !consents) {
    return;
  }

  const newConsent = {
    name,
    email,
    consents,
  };

  if (currentConsent) {
    return await patchConsent(newConsent, currentConsent.id);
  }

  return await postConsent(newConsent);
}

export default saveConsentAction;
