name: CI

on: [push]

jobs:
  summary:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-node@v1
    - name: npm install, summary, and push
      run: |
        npm ci
        npm run summary
        git push