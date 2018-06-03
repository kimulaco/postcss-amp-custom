const postcss = require('postcss');
const AmpCustom = require('amp-custom');

module.exports = postcss.plugin('postcss-amp-custom', (option) => {
    let ampCustom = new AmpCustom();

    option = Object.assign({
        enableByteLimit: false
    }, option);

    return (root, result) => {
        return new Promise((resolve, reject) => {
            let style = ampCustom.optimize(root.toString());

            if (
                option.enableByteLimit &&
                ampCustom.isOverMaxByte(style)
            ) {
                return reject(new Error('AMP stylesheet exceeds the 50,000 btyes limit.'));
            }

            result.root = postcss.parse(style);

            resolve();
        });
    };
});
