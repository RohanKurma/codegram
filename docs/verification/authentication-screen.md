# Authentication screen verification

## Implementation

- Welcome screen: `src/features/auth/welcome-screen.tsx`, presented by the root index route outside tab navigation.
- Uses NativeWind 4.2.7, Expo LinearGradient, Expo Image, and SVG brand/provider marks on the existing Expo 58 starter.
- Reference: first Welcome phone in `design/ChatGPT Image Nov 13, 2026, 03_19_55 PM-1.png`.
- Mountain image extracted from unobstructed artwork; UI and logos are live components, not a screenshot overlay. Original high-resolution artwork is unavailable.
- Buttons accept an asynchronous `onSignIn(provider)` adapter, lock while pending, and display a retryable failure. The route has no Clerk adapter configured yet, so pressing a provider reports unavailable sign-in. No fake session or navigation success is used.
- Legal links open a dismissible dialog explaining the documents are not yet published. Replace these with real documents before connecting public account creation.

## Screenshot comparison

Browser mobile emulation was used because no emulator window, Android SDK in the standard location, or adb executable was available. This is not native simulator verification. The host is Windows, so no local iOS Simulator is available.

Iterations:

1. Initial render exposed NativeWind media/class color-scheme initialization and SVG web attribute errors; fixed configuration and decorative icon props.
2. Compared welcome typography, centered brand, provider-button dimensions/placement, paragraph wrapping, and legal footer with the reference. Adjusted title/body/footer sizes and the background fade.
3. Removed the hard landscape edge and checked the compact 375×667 viewport. Scaled hero content so both provider buttons remain visible; the legal footer is reachable by scrolling on shorter screens.
4. Captured the final 390×904 render and checked a fresh browser console: no warnings/errors.

Local evidence (ignored build artifacts):

- `.artifacts/auth/reference.png`
- `.artifacts/auth/welcome-390x904.png`
- `.artifacts/auth/welcome-375x667.png`

The result approximates the supplied screen. It is not a verified pixel-identical native match: the supplied board includes an iPhone frame/system chrome, a small raster photo, and platform-specific typography. Do not draw fake system chrome into the app to match those pixels.

## Checks

- TypeScript: `npx.cmd tsc --noEmit`.
- ESLint: `npm.cmd run lint`.
- Cross-platform production JavaScript bundles: `npx.cmd expo export --platform all --output-dir .artifacts/export --no-bytecode --max-workers 2` passed for iOS, Android, and web. This validates bundling, not a signed native build or native module runtime behavior.
- Browser: Google button renders an accessible unavailable-state alert; Terms dialog opens/closes; compact viewport keeps both provider buttons visible; final 390×904 console is clear.
- Fixed the starter's existing web tab ref typing and hydration-hook lint issue so repository typecheck/lint can pass.

## Next native verification

Run `npm.cmd start` (or `npm.cmd run android` with a configured Android emulator), capture the same screen on a native device, and compare typography, safe areas, gradients, SVGs, and button placement. Verify the exact NativeWind/Expo pairing at runtime; successful web renders and native bundles alone do not prove it. Capture results before describing native verification as complete.

Avoid running a development Metro server and a separate production export concurrently against the same cache; this session observed transient module-ID errors until Metro was restarted with `--clear`.
