import adapter from '@sveltejs/adapter-node';
import { sveltePreprocess } from 'svelte-preprocess'; // Nytt!
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(), // Nytt!
  kit: {
      adapter: adapter()
  }
};
export default config;
