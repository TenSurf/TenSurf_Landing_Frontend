export const BackendUrls: Record<string, string> = {
  // account
  check_authentication: '/check_authentication/',
  login: '/account/login/',
  send_code: '/account/send_verification_code/',
  verify_code: '/account/verify_code/',
  register_form: '/account/complete_registration/',
  profile: '/account/get_my_profile/',
  edit_profile: '/account/edit_my_profile/',
  change_password: '/account/change_password/',
  send_forgot_pass_code: '/account/send_forgot_pass_code/',
  verify_forgot_pass_code: '/account/verify_forgot_pass_code/',
  news_letter: '/newsletter/register/',
  contact_us: '/contact-us/',

  // financial
  billing: '/financial/payment/billing/',
  transaction: '/financial/payment/update_transaction/',
  plans: '/financial/payment/plans/',
  payment: '/financial/payment/payment_link/'
};
