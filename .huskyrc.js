module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'npm run format:check',
    'pre-push': 'npm run format:write && git add . && git reset',
  },
};
