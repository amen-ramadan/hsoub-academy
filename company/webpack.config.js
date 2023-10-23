const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/js/index.js",

    output: {
        // هذا الامر معناه ان المسار العام لانتاج ملفات المشروع هو الجذر
        publicPath: '/',
        path: path.resolve(__dirname, "build"),
        filename: "js/bundle.js",
        // هذان السطران لجعل الملفات اكثر ترتيبا في مجلد build
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },


    //هذا الكود من موقع ستاك اوفر فلو من اجل جعل الموقع يعمل في حالة build  
    //أي ليس في حالة التطوير وقد ظهر لي خطأ بعدم القدرة على تشغيل الملفات بسبب الحجم
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,

                use: [
                    {
                        loader: "file-loader",

                        options: {
                            // هنا سيحفظ اسم الصورة واللاحقة الخاصة بها
                            name: "[name].[ext]",
                            // هنا اسم الملف الذي ستحفظ به الصور
                            outputPath: "images",
                        },
                    },
                ],
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                        }
                    },
                ],
            },
            {

                test: /\.html$/i,

                loader: 'html-loader',

            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
        ],
    },
    // هذا الجزء الخاص بتشغيل الموقع على السيرفر وايضا قمنا بتثبيت حزمة webpack dev server
    devServer: {

        static: {
            directory: path.join(__dirname, " build"),
        },

        // من اجل اجبار السيرفر على اعادة التحميل عند كل تغيير
        watchFiles: path.join(__dirname, 'src'),

        compress: true, // هذا السطر لضغط الملفات وقمنا بتعليقه
        port: 9000,
        open: true,
        devMiddleware: {
            writeToDisk: true, // اكتب لنا الملفات اثناء تعديلها ..ليظهر هذا الامر الملف  build
            stats: "errors-only", //  هذا السطر ليلغي الرسائل الزائدة في التيرمينال او موجه الاوامر وهي الرسائل الخاصة بعمليات  نجاح المهمات ويعرض لنا رسائل الاخطاء فقط واعني  كل هذا في حالة المشاهدة   
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/projects.html",
            filename: "projects.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/projects-details.html",
            filename: "projects-details.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/blog.html",
            filename: "blog.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/blog-details.html",
            filename: "blog-details.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/add-blog.html",
            filename: "add-blog.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/contact.html",
            filename: "contact.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css", // اسم الملف النهائي الذي تريده والذي ينتج من ترجمة ملف ال scssفي src
        }),
    ],
};
