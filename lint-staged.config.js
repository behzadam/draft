module.exports = {
  '*.{ts,tsx}': [
    'pnpm lint',
    'pnpm format:check',
    "bash -c 'pnpm types:check'"
  ]
};
