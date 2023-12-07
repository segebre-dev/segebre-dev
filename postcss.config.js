/**
 * Required for using native CSS nesting in CSS modules
 * The file and packages referenced below can be removed once the "Native CSS nesting support for css modules" issue is resolved
 * Reference: https://github.com/vercel/next.js/issues/55053
 * 
 * Solution suggested by samir9saeedi 
 * Reference: https://github.com/vercel/next.js/issues/55053#issuecomment-1733946183
 * 
 * Based on Next.js documentation for "Customizing Plugins"
 * Reference: https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins
 */
module.exports = {
  "plugins": [
    "postcss-nesting",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ]
  ]
}
