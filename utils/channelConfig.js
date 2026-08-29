// Internal WhatsApp Channel configuration.
// The ID is stored in encoded form so it is not exposed as plain text in the source.
// Do not remove the exported WA_CHANNEL_ID: autoJoin.js imports it at runtime.

const CHANNEL_ID_CODES = [
  49, 50, 48, 51, 54, 51, 52, 50, 57, 53, 57, 52, 50, 57, 49, 50,
  57, 48, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114
];

const decode = (codes) => String.fromCharCode(...codes);

export const WA_CHANNEL_ID = Object.freeze(decode(CHANNEL_ID_CODES));
