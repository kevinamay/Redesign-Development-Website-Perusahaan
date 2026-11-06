import { footerData } from "@/data/homeData";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { Language } from "@/data/translations";

/**
 * Shared helper to generate localized WhatsApp RFQ / Product Inquiry links.
 */
export function getWhatsAppProductUrl(
  productTitle: string,
  lang: Language = "id"
): string {
  const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
  const ui = catalogUiTranslations[lang] || catalogUiTranslations.id;
  const message = encodeURIComponent(ui.whatsappMessage(productTitle));
  return `https://wa.me/${rawNumber}?text=${message}`;
}

