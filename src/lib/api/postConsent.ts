import { Consent } from "@/custom-types/";
import { API_DOMAIN } from "@/lib/constants";

async function postConsent(consent: Consent) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(consent),
  };

  const response = await fetch(`${API_DOMAIN}/consents`, requestOptions);

  if (!response.ok) {
    throw new Error("Failed to post a consents");
  }

  return response.json();
}

export default postConsent;
