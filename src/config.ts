const env = import.meta.env;
export const contact = {
  name: 'icerao',
  email: env.PUBLIC_CONTACT_EMAIL || 'raolh2004@gmail.com',
  formEndpoint: env.PUBLIC_FORM_ENDPOINT || '',
  web3formsKey: env.PUBLIC_WEB3FORMS_KEY || '',
};
