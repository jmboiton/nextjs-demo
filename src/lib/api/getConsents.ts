import { Consent } from "@/custom-types/";
import { API_DOMAIN } from "@/lib/constants";

async function getConsents(): Promise<Consent[]> {
  const response = await fetch(`${API_DOMAIN}/consents`);

  if (!response.ok) {
    throw new Error(`Failed to get all current consents`);
  }

  return response.json();
}

export default getConsents;
