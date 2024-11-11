"use server";

import { redirect } from "next/navigation";

import type { ConsentName } from "@/custom-types/";
import getConsentByEmail from "@/lib/api/getConsentByEmail";
import patchConsent from "@/lib/api/patchConsent";
import postConsent from "@/lib/api/postConsent";
import { formSchema, FormSchemaData } from "@/lib/formSchema";

export type ConsentActionState = {
  status?: string;
};

async function saveConsentAction({ name, email, consents }: FormSchemaData) {
  const validation = formSchema.safeParse({
    name,
    email,
    consents,
  });

  if (!validation.success) {
    return { success: false, errors: validation.error.flatten().fieldErrors };
  }

  const currentConsent = (email ? await getConsentByEmail(email) : [])[0];

  const newConsent = {
    name: validation.data.name,
    email: validation.data.email,
    consents: validation.data.consents as ConsentName[],
  };

  if (currentConsent) {
    await patchConsent(newConsent, currentConsent.id);
  } else {
    await postConsent(newConsent);
  }

  redirect("/consents");
}

export default saveConsentAction;
