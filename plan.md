# Codegram — UI/UX design prompt

Copy everything below the divider into ChatGPT to request the designs. This is a design brief, not a request to implement the application.

---

Act as a senior mobile product designer and UX architect. Design **Codegram**, a modern Instagram-style social app for iOS and Android. Turn the following requirements into a cohesive visual design system, complete screen designs, and a connected prototype specification.

I want designs I can use to build the app, with clear layout, interactions, realistic content, and all important states. Do not write application code. Do not ask me to repeat decisions already provided here. Make reasonable design choices for unspecified visual details and label them as proposals. Preserve the agreed product scope.

## 1. Product and audience

Codegram lets people share image/video posts, discover accounts, follow each other, interact with posts, and privately message mutual follows.

This first release is a polished portfolio and learning project, distributed as native development builds. The experience should feel credible and ready to demonstrate with real content. No specific community or age group has been established. The name Codegram does not imply a developer-only network, code editor, or code-sharing product.

The main success journey is: sign in → choose a username → discover people → follow someone → see their posts in Home → like or comment → exchange messages after following each other.

## 2. Platform and navigation constraints

- Native mobile app for both iOS and Android, built with Expo/React Native, Expo Router, and NativeWind.
- Clerk provides Google/Apple authentication; Convex provides application data, media storage, and live updates. These services should not appear as technical concepts in the product UI.
- Exactly four main tabs, in this order: **Home, Messages, Explore, Profile**.
- Use platform-native bottom tabs with conventional icons, labels, selected states, and an unread badge on Messages. Respect platform behavior and safe areas. Do not add a center Create tab or a fifth tab.
- Create a post using a plus button in the Home header.
- Detail screens and forms open through stack navigation or appropriate native sheets. Explain back, close, keyboard, and dismissal behavior.
- The signed-out and onboarding screens sit outside the main tabs.

## 3. Visual direction

Design a clean, minimal, contemporary, media-first experience with strong typography, deliberate spacing, restrained borders, and clear hierarchy. Give Codegram its own identity while retaining familiar social interaction patterns.

- Support system light and dark appearance with equally intentional palettes.
- Starting direction: neutral surfaces, a restrained blue accent, and native-feeling typography. You may refine these as a clearly labeled design proposal.
- Let photography and video carry most of the visual interest. Avoid excessive gradients, decorative glass panels, bulky cards, or ornamental dashboard elements.
- Prefer a consistent icon family, readable text, comfortable touch targets, and polished loading/empty/error states.
- Use realistic sample names, captions, biographies, photos, and conversations. Keep sample users and relationships consistent between screens.
- Show one coherent recommended visual direction, rather than mixing several unrelated styles.

## 4. Required screens and behavior

### A. Welcome and sign-in

Design a branded welcome screen with **Continue with Google** and **Continue with Apple**. No email/password form, password reset, or extra authentication methods.

Include signing-in progress, cancellation, and recoverable authentication failure. Preserve provider branding requirements in the button treatment. Show how returning users proceed directly to Home after their session is restored.

### B. First-time onboarding

Require a unique username before entering the app. Prefill display name/avatar when the provider supplies them; missing provider details must still produce a usable screen. Avatar and bio are optional.

Show username validation, checking, available, already taken, and submission states. Planning defaults: username is 3–20 lowercase letters, numbers, or underscores; display name is 1–50 characters. Avoid making optional profile completion feel mandatory.

### C. Home

Show the current user's posts and followed accounts' posts, newest first. No recommended-post mixing, stories row, reels section, or activity-notification button.

Each post includes avatar, display name/username, author navigation, timestamp, ordered media carousel, pagination indicator, like toggle/count, comment entry/count, and caption. Include an overflow menu for the author's delete action. Do not add bookmarks, reposts, or sharing controls as functional features.

Videos play on tap, only one video plays at a time, and playback pauses when scrolled/swiped away or when the app leaves the foreground. Show a recognizable video affordance and sound/playback controls without obscuring content.

Show populated feed, initial loading, loading more, recoverable error, and an empty state that directs a new user to Explore.

### D. Create post

Home's plus button opens the device media library. Use the native picker rather than inventing a custom gallery or camera experience.

A post supports **1–5 ordered images/videos in one mixed carousel**, with an optional caption. Limits: images up to 10 MB each; videos up to 25 MB and 30 seconds each. Caption planning default: 2,200 characters maximum.

Design the selected-media preview, reorder/remove controls, add-more action, caption field, and Publish button. Explain a discoverable reorder interaction, including an alternative to drag gestures.

Include selection cancellation, library permission denial, unsupported media, oversized/overlength media, upload progress, publish progress, partial upload failure, retry, and discard confirmation. Keep selected media and caption in the open composer after a recoverable failure. Only show a post in feeds once the entire upload and publication succeeds. No persistent drafts, filters, crop editor, camera capture, or post-publication editing.

### E. Post detail and comments

Open a post from Home, Explore, or a profile. Show the media, caption, likes, and a paginated flat comment list with a keyboard-safe input. Comments have an author, text, and timestamp. Planning default: comments are 1–1,000 characters.

Users can delete their own comments and posts with an appropriate confirmation. Include empty comments, submitting, failed submission/retry, deletion, and unavailable-post states. No comment threads, comment likes, or editing.

### F. Explore and people search

Show a recent-post grid with consistent thumbnails. Indicate video and carousel posts without autoplaying them in the grid. Tapping a tile opens post detail.

Include a search field for usernames and display names. Search results are people, not caption/hashtag results. Show empty search, suggested accounts, searching, results, no results, and error states. Explain how clearing search returns to the discovery grid.

### G. Profile and edit profile

Design both own and other-user profiles with avatar, display name, username, bio, post/follower/following counts, and a post grid. Counts open follower/following lists where applicable.

Own profile includes Edit profile and access to Settings. Other profiles show Follow/Following and a Message action. Following is immediate; there are no follow requests or private accounts. All profiles/posts are visible to signed-in users.

Only mutual follows can message. Show a clear explanation when messaging is unavailable, without prompting a user to send a message that the backend will reject.

Edit profile supports avatar replacement, username, display name, and optional bio. Bio planning default: 160 characters maximum. Include save progress, duplicate username, validation, recoverable errors, and unsaved-change dismissal. Show zero-post and unavailable-user states.

### H. Messages inbox and conversation

Inbox rows show the other person's avatar/name, latest message preview, timestamp, and unread indicator/count. Provide a new-conversation action that searches/selects eligible mutual follows; profile Message is another entry point. Include an empty inbox and no eligible contacts state.

Conversations are **one-to-one and text-only**. Design message bubbles, timestamps/grouping, paginated older history, keyboard-safe composer, sending, failed-send/retry, and unread behavior. Planning default: messages are 1–2,000 characters. Retrying must visually represent the same message, not a new duplicate bubble.

If either person unfollows, preserve the history but make the conversation read-only. Explain this with a calm inline notice. Restore the composer when mutual following resumes.

Mark messages read when the conversation is open and active; use unread badges in the inbox/tab. Do not display recipient read receipts, online presence, typing indicators, push-notification settings, attachment buttons, group chat, or message edit/delete controls.

### I. Settings and account deletion

Keep Settings minimal: sign out and delete account, with useful confirmation and progress states. Appearance follows the device; no extra preference screens are required.

Account deletion removes the account and owned posts, comments, media, and authored messages. Other participants may retain their own messages in an unavailable conversation. Show accurate confirmation copy, deletion-in-progress, completion, and recoverable failure/support guidance without promising instant completion across services.

Show unavailable-user treatment in retained conversations without exposing deleted profile details. Do not add blocking/reporting, billing, account tiers, or an admin panel.

## 5. Cross-screen UX requirements

- Design for small phones, safe areas, system back navigation, long names/captions, large text, and on-screen keyboards.
- Meet WCAG AA contrast where applicable; use comfortable touch targets, accessible labels, visible focus where relevant, and cues beyond color alone. Respect reduced-motion preferences.
- Communicate slow networks, offline writes, and service-limit failures clearly. No offline posting/messaging queue is included. Preserve currently typed input after recoverable errors.
- Show loading and failure at the smallest useful scope. Never replace a whole usable screen with a spinner for a single failed action.
- Explain optimistic like/follow feedback and rollback if the action fails.
- Define consistent destructive-action confirmation, toast/banner usage, input validation, and unavailable-content patterns.
- Do not invent extra capabilities to fill a screen. Suggestions beyond this scope must be separated as optional future ideas and excluded from v1 mockups.

## 6. Requested design deliverables

Please produce the following in order:

1. **Design concept:** A short description of the recommended visual identity, hierarchy, and interaction principles.
2. **Information architecture:** A screen map with the four tabs, authentication/onboarding, detail routes, forms, and sheets.
3. **Core user flows:** Sign-in/onboarding; discovery/following/Home; media selection/publishing; post interactions/deletion; mutual-follow messaging/unfollow; profile editing/account deletion.
4. **Design system:** Exact light/dark color tokens, typography scale, spacing scale, radii, icon sizes, touch targets, component states, and motion guidance. Keep values practical for NativeWind and native components.
5. **Screen designs:** High-fidelity mockups for every required screen using one consistent phone frame, plus an Android adaptation of the main navigation and key forms. Identify each screen with a stable name. Show representative light and dark designs, then specify how the remaining screens adapt.
6. **State coverage:** A compact screen/state matrix covering empty, loading, validation, success, disabled, permission denial, network failure, unavailable content, upload retry, and read-only chat where applicable.
7. **Prototype connections:** List the tap targets, destinations, sheet/modal behavior, scrolling, keyboard interactions, transitions, and state changes needed to connect the screens into a demo.
8. **Developer handoff:** Component inventory, layout measurements, reusable variants, image/video treatment, and platform differences. Clearly distinguish native system UI from custom UI.

For each primary screen, describe the header, content hierarchy, main actions, navigation, and important state variants. Include concise user-facing microcopy for the key empty/error/destructive states.

If you can generate visual designs, render them rather than only describing them. If you cannot create editable design files or images in this session, say so clearly and provide detailed annotated screen specifications plus self-contained visual-generation prompts grouped by flow. Do not claim to have created a Figma file or connected prototype unless you actually have.

If the complete design set is too large for one response, start with the design system and a coherent first set: Welcome, Username onboarding, Home, Explore, Own profile, Inbox, and Conversation. Then continue through creation, details, settings, and all important state variants using the same established system. Keep the full deliverable inventory visible so nothing is silently omitted.
