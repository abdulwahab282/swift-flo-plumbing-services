import { services } from "@/data/services";

export type ContactField = "name" | "phone" | "email" | "service" | "message";

export type ContactValues = Record<ContactField, string>;

export type ContactState =
  | { status: "idle" }
  | {
      status: "error";
      errors: Partial<Record<ContactField, string>>;
      values: ContactValues;
    }
  | {
      status: "success";
      delivered: boolean;
      values: ContactValues;
    };

function readValues(formData: FormData): ContactValues {
  return {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

export function validateContact(formData: FormData):
  | { ok: true; values: ContactValues }
  | {
      ok: false;
      errors: Partial<Record<ContactField, string>>;
      values: ContactValues;
    } {
  const values = readValues(formData);
  const errors: Partial<Record<ContactField, string>> = {};
  const serviceNames = services.map((service) => service.name);

  if (values.name.length < 2) {
    errors.name = "Enter your name.";
  } else if (values.name.length > 80) {
    errors.name = "Use 80 characters or fewer.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 7) {
    errors.phone = "Enter a phone number we can use to follow up.";
  } else if (values.phone.length > 30) {
    errors.phone = "That phone number is too long.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  } else if (values.email.length > 120) {
    errors.email = "Use 120 characters or fewer.";
  }

  if (!serviceNames.includes(values.service)) {
    errors.service = "Choose a service.";
  }

  if (values.message.length < 10) {
    errors.message = "Add a short description of the plumbing service you need.";
  } else if (values.message.length > 2000) {
    errors.message = "Use 2,000 characters or fewer.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, values };
  }

  return { ok: true, values };
}
