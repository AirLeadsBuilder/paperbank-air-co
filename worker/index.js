// Paperbark Air Co. demo: static assets only. The quote form is a non-functional demo (no backend).
export default {
  async fetch(req, env) {
    return env.ASSETS.fetch(req);
  },
};
