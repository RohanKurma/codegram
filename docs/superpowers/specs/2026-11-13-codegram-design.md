# Codegram v1 specification

## Intent and agreed scope

Build a polished portfolio/learning social app for iOS and Android, shared through development builds. No fixed deadline. Prefer free service tiers; do not promise unlimited storage, bandwidth, or builds.

- Keep Expo 58, Expo Router native tabs, NativeWind, Clerk authentication, and Convex backend/database. Validate stable NativeWind with Expo 58 first; discuss alternatives if it fails.
- Google and Apple authentication. Require a unique username on first sign-in; prefill display name/avatar where available.
- Four tabs, in order: Home, Messages, Explore, Profile. Clean minimal UI with system light/dark appearance.
- Home shows own posts and followed users' posts newest first. Empty Home directs users to Explore.
- A plus button on Home opens the device library. A post has an optional caption and up to five ordered images/videos. Image limit: 10 MB each. Video limits: 25 MB and 30 seconds each.
- Videos start on tap, pause off-screen, and only one plays at a time.
- Follow/unfollow is immediate. Profiles/posts are public within the signed-in app. Direct media URLs may be opened without signing in; this is accepted.
- Like/unlike posts, flat comments, delete own posts/comments. No caption editing, comment likes, or replies.
- Explore shows recent posts in a grid and searches usernames/display names.
- Live one-to-one text messaging requires mutual following. Losing mutual following makes history read-only; restoring it permits sending again. Include unread badges, no push notifications.
- View/edit profiles, sign out, delete account with cleanup of owned content.

## Architecture

Clerk owns identities and sessions. Convex owns app profiles and all social data; authenticated functions enforce access and ownership. Use Convex storage for media and generated typed APIs for client/backend communication. No separate REST server or video service.

Core records: users, posts, ordered media attachments, follows, likes, comments, conversations, conversation participants/read positions, messages, upload sessions, deletion jobs. Auth identity maps to exactly one app user. Clients never choose the acting user ID.

## Assumptions/defaults carried into planning

- English only, basic screen-reader support, no offline writes. Preserve an open composer on recoverable failures; no persisted drafts.
- Editable username, display name, avatar, optional bio. App profile data is authoritative after initial provider prefill.
- No typing indicators, presence, visible read receipts, message editing/deletion, monetization, stories, reels, bookmarks, hashtags, algorithmic recommendations, blocking, reporting, or admin dashboard.
- Account deletion removes authored messages; another participant can retain their own messages in an unavailable conversation.
- Convex stores original compatible media, without transcoding. Unsupported formats show an actionable error.
- Operational visibility uses redacted error logs, Convex/Clerk/EAS dashboards, and a documented manual verification checklist.
- Automated tests focus on backend authorization, state transitions, validation, retry behavior, and meaningful component behavior.

## Risks requiring verification

- Stable NativeWind compatibility with Expo 58 / React Native 0.88.1 is unproven in this workspace.
- Google/Apple credentials, Apple developer access, device availability, and EAS configuration are not verified.
- Free-tier capacity may constrain video usage; no paid upgrade is implicitly authorized.
- Video codecs and duration metadata vary across devices; client-side duration validation is not a hardened abuse boundary.
- Cleanup spans two services and requires retries, not an assumed cross-service transaction.

## References checked November 13, 2026

- https://docs.expo.dev/versions/v58.0.0/sdk/router/native-tabs/
- https://www.nativewind.dev/docs/getting-started/installation
- https://clerk.com/docs/expo/getting-started/quickstart
- https://docs.convex.dev/auth/clerk
- https://docs.convex.dev/file-storage/overview
