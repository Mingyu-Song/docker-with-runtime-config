/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  publicRuntimeConfig: {
    hihi: process.env.NEXT_PUBLIC_HIHI,
  },
};
