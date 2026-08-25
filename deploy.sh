#!/usr/bin/env bash
# Publish the portfolio to GitHub Pages (local build + push → automatic deployment).
#
# Usage:
#   ./deploy.sh
#   ./deploy.sh "Update talks"
#   ./deploy.sh --skip-build
#
#   --skip-build skips the local build and pushes directly (not recommended).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

SKIP_BUILD=false
COMMIT_MSG=""

for arg in "$@"; do
  case "$arg" in
    --skip-build)
      SKIP_BUILD=true
      ;;
    -h|--help)
      echo "Usage: ./deploy.sh [commit message] [--skip-build]"
      exit 0
      ;;
    *)
      if [[ -z "$COMMIT_MSG" ]]; then
        COMMIT_MSG="$arg"
      fi
      ;;
  esac
done

if [[ -z "$COMMIT_MSG" ]]; then
  COMMIT_MSG="Update site ($(date +%Y-%m-%d))"
fi

echo "▶ Aftab Portfolio — deployment"
echo "  Directory : $SCRIPT_DIR"
echo ""

# ── Dependencies ──────────────────────────────────────────────────────────────
if [[ ! -d node_modules ]]; then
  echo "▶ Installing dependencies (npm install)…"
  npm install
else
  echo "▶ Checking dependencies (npm ci)…"
  npm ci
fi

echo ""

# ── Build ────────────────────────────────────────────────────────────────────
if [[ "$SKIP_BUILD" == true ]]; then
  echo "⚠ Build skipped (--skip-build)"
else
  echo "▶ Building site (npm run build)…"
  npm run build
  echo "✓ Build successful"
fi

echo ""

# ── Git ───────────────────────────────────────────────────────────────────────
if [[ -z "$(git status --porcelain)" ]]; then
  echo "ℹ No changes detected — nothing to publish."
  exit 0
fi

echo "▶ Changes detected:"
git status --short
echo ""

BRANCH="$(git branch --show-current)"

if [[ "$BRANCH" != "main" ]]; then
  echo "✗ Error: you are on branch « $BRANCH »."
  echo "  Switch to main before publishing:"
  echo "  git checkout main"
  exit 1
fi

echo "▶ Commit: $COMMIT_MSG"

git add -A
git commit -m "$COMMIT_MSG"

echo ""

echo "▶ Pushing to origin/main…"

git push origin main

echo ""

# ── Deployment tracking ──────────────────────────────────────────────────────
REPO_URL="https://github.com/Aftab201/Aftab201.github.io"
SITE_URL="https://aftab201.github.io"

echo "✓ Code pushed — GitHub Actions will deploy the site."
echo ""
echo "  Site    : $SITE_URL"
echo "  Actions : $REPO_URL/actions"
echo ""

if command -v gh >/dev/null 2>&1; then
  echo "▶ Following deployment (Ctrl+C to exit)…"

  if gh run watch --repo Aftab201/Aftab201.github.io 2>/dev/null; then
    echo ""
    echo "✓ Deployment completed → $SITE_URL"
  else
    echo "  (Run « gh auth login » to follow the deployment live.)"
  fi
else
  echo "  Tip: install GitHub CLI (gh) to follow the deployment live."
fi