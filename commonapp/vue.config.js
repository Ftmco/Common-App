module.exports = {
    devServer: {
        port: 8034
    },
    transpileDependencies: [
        'vuetify'
    ],
    pwa: {
        name: 'Servant',
        shortName: "Servant",
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        icons: [{
                src: "public/icons/icon-48x48.png",
                sizes: "48x48",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-72x72.png",
                sizes: "72x72",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-96x96.png",
                sizes: "96x96",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-128x128.png",
                sizes: "128x128",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-144x144.png",
                sizes: "144x144",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-152x152.png",
                sizes: "152x152",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-384x384.png",
                sizes: "384x384",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "public/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable any"
            }
        ]
    }
}