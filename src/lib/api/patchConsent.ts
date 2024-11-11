import type { Consent } from "@/custom-types/";
import { API_DOMAIN } from "@/lib/constants";

async function patchConsent(consent: Consent, id: number) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "PATCH",
    headers,
    body: JSON.stringify(consent),
  };

  try {
    const response = await fetch(
      `${API_DOMAIN}/consents/${id}`,
      requestOptions,
    );

    if (!response.ok) {
      throw new Error("Failed to post a consents");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default patchConsent;
