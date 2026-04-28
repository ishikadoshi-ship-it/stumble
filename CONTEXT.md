# Stumble — Session Context

> Hand-off doc for the next Claude session. Read this top-to-bottom before touching the code; assume the new session has zero memory of prior conversations.

---

## 1. App overview

Stumble is a location-based discovery app (Android-first, Expo / React Native) for Gen Z users in Indian metros — 18–28 year olds who pick cafes, restaurants, and bars by aesthetic and vibe rather than star ratings. Unlike Zomato, the feed surfaces indie / aesthetic / trending spots filtered by mood and spend tier, not chains and sponsored results. The PRD and feature list live in [Stumble_PRD_v1.pdf](Stumble_PRD_v1.pdf) and [FEATURES.md](FEATURES.md).

---

## 2. Current file structure

### Routes (`app/`)
| File | Purpose |
|---|---|
| `app/_layout.tsx` | Root layout. Loads Google Fonts (Playfair Display + DM Sans), forces dark `ThemeProvider`, sets `Stack` content background to `#0A0A0A`. Returns a black `<View>` while fonts load. |
| `app/modal.tsx` | Default Expo Router modal. Untouched from scaffold; styled dark via the root layout's `contentStyle`. |
| `app/(tabs)/_layout.tsx` | Bottom tab navigator. 5 icon-only tabs: Home, Explore, Map, Saved, Profile. Active icon = `#FF2D78`, inactive = `#3A3A3A`. No labels, no indicator bar, thin `#1E1E1E` top border on the bar. |
| `app/(tabs)/index.tsx` | Home / Discovery Feed. Renders `STUMBLE` wordmark, italic tagline, two `FilterChips` rows (Vibe / Spend), and a vertical `FlatList` of `PlaceCard`s filtered by selected vibes + spend. Empty state shows "No matches / try fewer filters". |
| `app/(tabs)/explore.tsx` | Placeholder, uses `<PlaceholderScreen>`. Subtitle: "dig deeper. find your next obsession." |
| `app/(tabs)/map.tsx` | Placeholder, "see the city in vibes, not pins." |
| `app/(tabs)/saved.tsx` | Placeholder, "your wishlist of vibes-to-be." |
| `app/(tabs)/profile.tsx` | Placeholder, "you, but make it editorial." |

### Components (`components/`)
| File | Purpose |
|---|---|
| `themed-text.tsx` | Sole text primitive. Variants: `default`, `defaultSemiBold`, `title`, `wordmark` (tracked serif), `serifLarge` (screen titles), `sectionHeader` (tiny dim tracked caps), `subtitle`, `tagline`, `muted`, `link`. |
| `place-card.tsx` | Full-bleed image card, 4:5 aspect, 12-px radius. Bottom-anchored serif name, neighborhood under it, vibe-tag pills above the name, `LinearGradient` from transparent → near-black. Pink `₹/₹₹/₹₹₹` text-only badge top-right. |
| `filter-chips.tsx` | Horizontal scrollable row of pills. Unselected: `#1A1A1A` fill, `#444` border, `#888` uppercase tracked text. Selected: pink-tinted bg (`#FF2D781A`), 1.5-px `#FF2D78` border, white text. |
| `placeholder-screen.tsx` | Shared layout for the 4 not-yet-built tabs. Serif title, italic muted subtitle, "COMING SOON" centred. |
| `themed-view.tsx`, `haptic-tab.tsx`, `external-link.tsx`, `hello-wave.tsx`, `parallax-scroll-view.tsx`, `ui/` | Scaffold leftovers. Only `themed-view` and `haptic-tab` are imported in current code; the rest are dead and can be deleted later. |

### Data + theme (`constants/`)
| File | Purpose |
|---|---|
| `places.ts` | `Place` type, `Spend` union, `PLACES` array of 6 hardcoded Mumbai cafes/bars (Blue Tokai, Soft Serve Society, Bonobo, Kala Ghoda Cafe, Subko, Doolally) using Unsplash images. Also exports `VIBE_EMOJI` and `SPEND_SYMBOL` maps — `SPEND_SYMBOL` is in active use; `VIBE_EMOJI` is currently unused (was used in v2 design, dropped in v3). |
| `theme.ts` | `Stumble` palette + `Fonts` map. **Single source of truth for design tokens** — anything visual must read from here, not from hardcoded strings. |

### Hooks
| File | Purpose |
|---|---|
| `hooks/use-color-scheme.ts` (+ `.web.ts`) | Wraps RN `useColorScheme`. Dead in practice — theme is hard-locked dark. |
| `hooks/use-theme-color.ts` | Pulls a key from `Colors` (light/dark). Largely unused after the dark-only pivot. |

### Other
| File | Purpose |
|---|---|
| `FEATURES.md` | The MVP / V1 / nice-to-have feature checklist. Keep in sync as features ship. |
| `Stumble_PRD_v1.pdf` | Original product spec (vibe categories, target user, data sourcing strategy, out-of-scope items). |
| `app.json`, `tsconfig.json`, `eslint.config.js` | Standard Expo/TS configs, untouched. |

---

## 3. Tech stack

Expo SDK 54 (React Native 0.81, React 19). Versions are exact ranges from `package.json`:

### Runtime deps
- `expo` `~54.0.33`
- `expo-router` `~6.0.23` (file-based routing)
- `expo-font` `~14.0.11`, `expo-image` `~3.0.11`, `expo-linear-gradient` `~15.0.8`, `expo-haptics` `~15.0.8`, `expo-status-bar` `~3.0.9`, `expo-splash-screen` `~31.0.13`, `expo-system-ui` `~6.0.9`, `expo-constants` `~18.0.13`, `expo-linking` `~8.0.11`, `expo-symbols` `~1.0.8`, `expo-web-browser` `~15.0.10`
- `react` `19.1.0`, `react-dom` `19.1.0`, `react-native` `0.81.5`, `react-native-web` `~0.21.0`
- `react-native-reanimated` `~4.1.1`, `react-native-worklets` `0.5.1`, `react-native-gesture-handler` `~2.28.0`, `react-native-screens` `~4.16.0`, `react-native-safe-area-context` `~5.6.0`
- `@react-navigation/native` `^7.1.8`, `@react-navigation/bottom-tabs` `^7.4.0`, `@react-navigation/elements` `^2.6.3`
- `@expo/vector-icons` `^15.0.3` (Ionicons used for tab bar)
- `@expo-google-fonts/dm-sans` `^0.4.2` *(active)*
- `@expo-google-fonts/playfair-display` `^0.4.2` *(active)*
- `@expo-google-fonts/inter` `^0.4.2` *(installed but unused after v3 pivot)*
- `@expo-google-fonts/permanent-marker` `^0.4.0` *(installed but unused after v3 pivot)*

### Dev deps
- `typescript` `~5.9.2`
- `eslint` `^9.25.0`, `eslint-config-expo` `~10.0.0`
- `@types/react` `~19.1.0`

### Tools the user has installed locally (Mac)
- Homebrew, GitHub CLI (`gh`), Android SDK at `~/Library/Android/sdk`, AVD called `Pixel_7` (API 34).

---

## 4. What's been built so far

### Shipped to `main`
- ✅ **Scaffold** — `create-expo-app` default template with TypeScript + Expo Router. Default home/explore tabs replaced.
- ✅ **MVP #1: Discovery Feed** *(merged in PR #1, commit `c201644`)* — vertical `FlatList` of place cards; data from hardcoded `PLACES` array. Tap-to-detail not wired yet.

### On `feat/ishika2`, **not yet committed/PRed**
- ✅ **MVP #2: Vibe Filter** — multi-select Vibe and Spend chips above the feed; AND between the two filters, OR within each. Empty state when nothing matches.
- ✅ **Editorial UI redesign (v3)** — full theme/typography overhaul. See section 5.
- ✅ **5-tab bottom nav** + 3 new placeholder screens (map, saved, profile).
- ✅ **`PlaceholderScreen`** shared component for not-yet-built tabs.

### Working on emulator + physical phone
- Discovery Feed renders 6 cards. Filters narrow the list correctly. All 5 tabs navigate. Fonts load. No runtime errors observed in last clean Metro bundle.

### Not built
- ❌ **MVP #3: Place Detail Page** — tapping a card does nothing. Requires a new dynamic route like `app/place/[id].tsx`.
- ❌ **Filter persistence across sessions** — explicit scope cut from the Vibe Filter PR; needs `@react-native-async-storage/async-storage`.
- ❌ **Map View, Save / Wishlist, Reviews + Photos, Trending Badge** — all V1 must-haves still TODO.
- ❌ **Real data source** — currently a 6-place hardcoded array. PRD calls for Google Places API + manual curation + user submissions.

---

## 5. Current UI state — design system

Editorial, high-fashion dark. Think i-D magazine on black. Nothing should ever be neon, playful, or default-Android-flavoured.

### Colours (`constants/theme.ts` → `Stumble`)
| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0A0A0A` | Every screen background, tab bar bg |
| `surface` | `#111111` | Card fill before image, modal bg |
| `surfaceAlt` | `#1A1A1A` | Filter chip bg (unselected) |
| `accent` | `#FF2D78` | Active filter border, selected tab icon, ₹ badge text, all CTAs and focus states |
| `accentTint` | `#FF2D781A` | Selected filter chip background tint |
| `text` | `#F5F5F5` | Primary text |
| `textMuted` | `#666666` | Tagline, neighborhood, secondary labels |
| `textDim` | `#444444` | Section header labels |
| `border` | `#222222` | Card / generic divider |
| `navBorder` | `#1E1E1E` | Top border of bottom nav |
| `inactive` | `#3A3A3A` | Inactive tab icons |

### Typography
| Variant | Font | Use |
|---|---|---|
| `wordmark` | `PlayfairDisplay_700Bold`, 32px, letter-spacing 4.8 | "STUMBLE" home header |
| `serifLarge` | `PlayfairDisplay_700Bold`, 26px | Placeholder screen titles ("Explore", "Map") |
| `title` | `PlayfairDisplay_700Bold`, 24px | Reserved for screen-level headings |
| Card name | `PlayfairDisplay_700Bold`, 28px | Place names overlaid on cards |
| `default` / `defaultSemiBold` | `DMSans_400Regular` / `DMSans_700Bold`, 14px | Body text |
| `sectionHeader` | `DMSans_500Medium`, 10px, tracking 2.4, uppercase, `textDim` | "VIBE" / "SPEND" labels |
| Filter chip text | `DMSans_500Medium`, 11px, tracking 1.2, uppercase | All chip labels |
| `subtitle` / `tagline` | `DMSans_400Regular` italic, 13px, `textMuted` | Italic taglines |
| `muted` | `DMSans_400Regular`, 12px, `textMuted` | Neighborhood, secondary captions |

### Component rules
- **No emojis in UI.** They were used in v2 and were explicitly removed in v3.
- **Filter chips:** always uppercase, tracked, tight padding. Selected state = pink border + 10% pink tint background, never a fully filled colour.
- **Place cards:** 4:5 image, 12-px corner radius, no glow / no shadow. Name overlaid bottom-left on a dark gradient. Spend symbol is **just text in pink** in the top-right — no pill, no circle.
- **Tab bar:** icons only, no labels, no underline indicator. Active = pink, inactive = `#3A3A3A`.
- **CTAs / focus states:** always `accent` (pink). No defaults from React Navigation or Android leaking through.

---

## 6. Known bugs / unresolved issues

1. **`expo` SDK packages slightly out of date** — Metro warned: `expo@54.0.33 → ~54.0.34`, `expo-linking@8.0.11 → ~8.0.12`, `expo-web-browser@15.0.10 → ~15.0.11`. Not blocking; run `npx expo install --fix` when convenient.
2. **`@expo-google-fonts/inter` and `@expo-google-fonts/permanent-marker` are dead deps.** Installed during v1/v2 design rounds and kept in `package.json` after the v3 pivot. Safe to remove via `npm uninstall`.
3. **`VIBE_EMOJI` map in `constants/places.ts` is unused** after the v3 emoji-strip. Keep or drop — it's <10 lines.
4. **`hello-wave.tsx`, `parallax-scroll-view.tsx`, `external-link.tsx`, `components/ui/` are dead** post-redesign. No imports remain.
5. **Fast Refresh doesn't always reload Expo Go on the Android emulator.** Workaround: `adb shell am force-stop host.exp.exponent && adb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:8081" host.exp.exponent`. Requires `adb reverse tcp:8081 tcp:8081` first if 8081 isn't already reversed.
6. **`npm install` postinstall ordering bug** — `unrs-resolver` calls `napi-postinstall` before its bin is on PATH. The whole `node_modules` was installed with `npm install --ignore-scripts` to work around this. If a fresh clone fails the same way, repeat the workaround.
7. **`feat/ishika2` is ahead of `origin` by multiple commits' worth of uncommitted work** — Vibe Filter + entire UI redesign are sitting as `M` lines in `git status`, never committed. Next session should commit + PR before doing anything else.

---

## 7. What to do next — priority order

1. **Commit + PR the current branch.** `feat/ishika2` has Vibe Filter + the full editorial redesign uncommitted. Two reasonable framings:
   - **(a)** Single PR titled `feat: vibe filter + editorial redesign (MVP #2)` — simpler, what the user has been doing.
   - **(b)** Two PRs (Vibe Filter first, redesign second) — cleaner history, but requires reverting then layering. **Recommend (a)** unless the user asks otherwise.
   Use `feat:` prefix, body with What / Why / How-to-test bullets, then `gh pr merge --squash --delete-branch=false`, then `git checkout main && git pull`.
2. **Build MVP #3: Place Detail Page.** Create `app/place/[id].tsx` (Expo Router dynamic route). Make `PlaceCard` `<Pressable>` and `router.push(\`/place/${place.id}\`)` on tap. Detail screen: hero image, serif name, neighborhood, vibe tag pills, spend symbol, big saveable Save button. Use the existing design tokens — no new colours/fonts.
3. **Filter persistence.** Add `@react-native-async-storage/async-storage`, persist `selectedVibes` + `selectedSpends` from `app/(tabs)/index.tsx` so they survive app reload. Was explicitly cut from the Vibe Filter PR.
4. **Cleanup PR.** Delete `hello-wave.tsx`, `parallax-scroll-view.tsx`, `external-link.tsx`, `components/ui/`, the unused font deps, and `VIBE_EMOJI`. Run `npx expo install --fix` for the version drift.
5. Then start picking off V1 must-haves from `FEATURES.md`: Map View → Save / Wishlist → Reviews + Photos.

---

## 8. Important decisions made

- **Why dark-only theme.** The user explicitly asked for a dark editorial aesthetic. We deleted light-mode tokens rather than maintaining a light/dark fork — `Colors.light` and `Colors.dark` both alias the same dark object so existing code paths don't crash, but visually there is one theme.
- **Why hot pink `#FF2D78` over electric lime `#C8FF00`.** Lime was the v2 accent ("bold, maximalist") and the user pivoted away from it as feeling too aggressive / generic. Pink reads more editorial / fashion / Vogue-coded, which matches the new direction. Lime is **forbidden** from reappearing.
- **Why Playfair Display + DM Sans (not Permanent Marker / Inter).** Marker fonts were explicitly rejected in the v3 brief as "not handwritten anything". Playfair gives editorial weight; DM Sans is the modern, unobtrusive sans in the same magazine vocabulary. Don't substitute Inter for body — DM Sans was specifically requested.
- **Why hardcoded `PLACES` array instead of Google Places API.** Scope discipline. The PRD names Google Places as the long-term data source, but MVP #1 was about shipping a working feed shape, not data plumbing. Replace later, behind a clean module boundary.
- **Why MVP #2 was Vibe Filter, not Place Detail.** Filter directly serves the product's "one thing" (find places that match my vibe) and is purely a `.filter()` over existing data; Detail needs a new route, navigation, and a Save button (3 unrelated concerns). Filter first = smaller PR, smaller surface area.
- **Why `npm install --ignore-scripts`.** The `unrs-resolver` package's postinstall calls `napi-postinstall` before npm has linked its bin. Skipping postinstall scripts dodged it; the only thing skipped was a non-essential native-binding sanity check, and the app runs fine. Documented in section 6 so a fresh clone hits the same workaround.
- **Why one `PlaceholderScreen` component for 4 tabs.** Avoids 4 near-identical files and keeps the design system enforced in one place — change the title font once, all four placeholders update.
- **Why `feat/<firstname-lowercase>` branch convention.** Set early in the session and applied to all 5 teammate branches. Git is case-sensitive, so the branch is `feat/ishika2`, not `feat/Ishika2`, even though the user sometimes capitalises it in chat.

---

## Quick start for the next session

```bash
cd ~/Desktop/stumble::/stumble
git status                                  # expect: on feat/ishika2, dirty working tree
~/Library/Android/sdk/emulator/emulator -avd Pixel_7 &
~/Library/Android/sdk/platform-tools/adb reverse tcp:8081 tcp:8081
./node_modules/.bin/expo start --android
```
If Metro errors on missing modules, re-run `npm install --ignore-scripts` (see section 6 #6).
