import { Consent } from "@/custom-types/";
import { API_DOMAIN } from "@/lib/constants";

async function getConsentByEmail(email: string): Promise<Consent> {
  const response = await fetch(`${API_DOMAIN}/consents?email=${email}`);

  if (!response.ok) {
    throw new Error(`Failed to get consent for email: ${email}`);
  }

  return response.json();
}

export default getConsentByEmail;
