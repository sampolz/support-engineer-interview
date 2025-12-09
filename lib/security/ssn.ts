import crypto from "crypto";

const SSN_SECRET = process.env.SSN_SECRET || "dev-ssn-secret-change-me";

export function hashSSN(ssn: string): string {
  return crypto.createHmac("sha256", SSN_SECRET).update(ssn).digest("hex");
}
