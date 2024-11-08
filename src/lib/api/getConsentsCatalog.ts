import { ConsentCatalog } from "@/custom-types/";
import { API_DOMAIN } from "@/lib/constants";

async function getConsentsCatalog(): Promise<ConsentCatalog> {
  const response = await fetch(`${API_DOMAIN}/consents-catalog`);

  if (!response.ok) {
    throw new Error("Failed to get consents catalog");
  }

  return response.json();
}

export default getConsentsCatalog;
