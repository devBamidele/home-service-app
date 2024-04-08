// config.ts
let PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;
let MASTER_URL = process.env.EXPO_PUBLIC_CONTENT_API as string;

export { PUBLISHABLE_KEY, MASTER_URL };