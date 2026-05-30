export const WHATSAPP_NUMBER = "917999999877";

export function buildQuoteMessage(input: {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}) {
  const lines = [
    "*New Enquiry — Marigaiss India*",
    "",
    input.name ? `*Name:* ${input.name}` : null,
    input.email ? `*Email:* ${input.email}` : null,
    input.phone ? `*Phone:* ${input.phone}` : null,
    input.service ? `*Service of interest:* ${input.service}` : null,
    "",
    input.message ? `*Message:*\n${input.message}` : null,
    "",
    "— Sent from marigaissindia.com",
  ].filter(Boolean);
  return lines.join("\n");
}

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function whatsappQuoteUrl(prefilledMessage?: string) {
  const msg =
    prefilledMessage ??
    buildQuoteMessage({
      message: "Hi Marigaiss team, I'd like to request a quote.",
    });
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}