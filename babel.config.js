module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'IE >= 11'
          ]
        },
        exclude: [
          'transform-for-of',
          'transform-typeof-symbol'
        ],
        loose: true,
        modules: false
      }
    ]
  ],
  plugins: [
    '@babel/transform-object-assign',
    [
      '@babel/transform-for-of',
      {
        assumeArray: true
      }
    ]
  ]
};
