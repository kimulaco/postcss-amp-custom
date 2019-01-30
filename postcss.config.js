module.exports = () => ({
    plugins: [
        require('./postcss-amp-custom')({
            enableByteLimit: true
        })
    ]
});
