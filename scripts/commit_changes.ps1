# Commit changes script (PowerShell)
# Run this script in the project root (my-link-hy) to stage and commit all changes.
# Make sure git is installed and the repository is initialized.

# Stage all modified/added files
git add -A

# Commit with a descriptive message
$commitMessage = "chore: fix Firestore security rules and add link management UI"
# If you want to provide a custom message, edit the line above.

git commit -m $commitMessage

# Optional: push to remote (if remote is configured)
# git push origin main
