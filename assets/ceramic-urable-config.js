/* Heritage Auto Care — ceramic coating enquiry config.
 *
 * Direct Urable integration (no Cloudflare Worker).
 *
 * WARNING — PUBLIC FILE. Anything in here is visible to everyone who opens the
 * page or the repo. ONLY put a customer-WRITE Urable key here, never a payment,
 * admin, or full-access key. Rotate it if it is ever misused. A leaked write key
 * lets strangers create records in your Urable account.
 *
 * Fill in the four values below, then deploy. Nothing else in the page needs editing.
 */
window.URABLE_CONFIG = {
  // Urable customers endpoint (create customer / lead).
  endpoint: "https://app.urable.com/api/v1/customers",

  // Auth header Urable expects for the write key. Confirm the exact header name
  // and value format in your Urable API settings/docs. Common forms:
  //   name "Authorization", value "Bearer YOUR_WRITE_KEY"
  //   name "x-api-key",      value "YOUR_WRITE_KEY"
  authHeaderName: "Authorization",
  authHeaderValue: "Bearer urb_live_45f2d46f35cbbe81053f1c9bbb31094e95fde57b24d4e3a5",

  // Where the lead came from (written to the customer record).
  origin: "Website - Google Ads - Ceramic Coating"
};
