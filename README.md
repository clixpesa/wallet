# Clixpesa MVP Monorepo

## 🔦 About

This monorepo houses clixpesa apps, packages and configs

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [Expo SDK](https://expo.dev)
- [Next.js](https://nextjs.org)
- [Expo Router](https://docs.expo.dev/router/introduction/)

## Development

### Development scripts

- Web: `yarn web`
- iOS: `yarn ios`
- Android: `yarn android`

### EAS dev builds

In the apps/mobile folder you can use EAS and a few helpful scripts:

- `yarn eas:build:dev:simulator:android` for android
- `yarn eas:build:dev:simulator:ios` for ios

Add `--local` to build locally.

### Storybook

- `storybook` (Web Storybook)
- `storybook-rn` (Native Storybook)

### Storybook scripts

- Storybook Web: `yarn storybook:web`
- Storybook iOS: `yarn storybook:ios`
- Storybook Android: `yarn storybook:android`
- Publish to Chromatic: `yarn chromatic` (Need to set your token first in `storybook/package.json -> scripts -> chromatic`)

### Code generation script

- Component: `yarn gen component`
- Screen: `yarn gen screen`

## 🗂 Folder layout

The main apps are:

- `apps`
  - `mobile` (Native)
  - `web(next)` (Web)
- `packages` Shared packages across apps
  - `ui` Includes your custom UI kit that will be optimized by Tamagui
  - `app` You'll be importing most files from `app/`
    - `provider` All providers that wrap the app, sometimes forked by platform.

Note that the main entry point for the Expo app is at `apps/mobile/app/(tabs)/index.tsx`. This is because folders in parenthesis are flattened and Expo Router finds the first index.tsx file. For more on how Expo Router works, [check out their docs](https://docs.expo.dev/router/create-pages/).

## Layouts

### Web

We've decided not to move to app dir just yet, but since layouts are crucial to most apps, we use [per-page layouts](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#per-page-layouts).

You can define these layouts anywhere but we've been keeping them in `layout.web.tsx` files in the `features` directory as needed. You can then use them like so:

```tsx
import { CreateScreen } from 'app/features/myfeat/screen'
import { MyLayout } from 'app/features/myfeat/layout.web'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>My Page</title>
      </Head>
      <MyPageScreen />
    </>
  )
}

// add the layout
Page.getLayout = (page) => <MyLayout>{page}</MyLayout>

export default Page
```

### Native

#### React Native Setup Expo

The simplest way to run a native project. A iOS or Android physical device is needed

- [Expo CLI Setup](https://docs.expo.dev/get-started/installation/)

#### Emulator Setup Expo

- [Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS](https://docs.expo.dev/workflow/ios-simulator/)

## Native Builds

Native builds are needed if you're using custom native code in your project.

More documentation on adding your own native code can be found here in Expo's docs: [Adding Custom Native Code](https://docs.expo.dev/workflow/customizing/#adding-custom-native-code-with-development-builds)

To run a [native build](https://docs.expo.dev/develop/development-builds/introduction) of your application, which we recommend:

- `npx expo install expo-dev-client`
- in `apps/mobile/package.json` update script `"start": "TAMAGUI_ENV=dev expo start --dev-client"`
- `yarn ios` or `yarn android`

### Protecting Pages on Web

We use middlewares to protect routes on the web. See `apps/web/middleware.ts`.

### Protecting Screens on Native

We use a hook to check for auth and then redirect the user to auth pages, and also not let the authenticated users see auth pages. See `apps/mobile/app/provider/auth/AuthProvider.native.ts`.

## Environment Convention

For simplicities sake we recommend one `.env` file on your local machine for your entire project, in the root directory.

Each app in apps can use `with-env` to load the `.env` file.

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `ui` for how this works.

## Adding new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/mobile
yarn add react-native-reanimated
cd ..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

## Deploying to Vercel

- Root: `apps/web`
- Build command: leave default setting
- Output dir: leave default setting
