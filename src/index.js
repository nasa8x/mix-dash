var _ = require('lodash'),
    Big = require('big.js');

var units = {
    'BTC': new Big(1),
    'mBTC': new Big(0.001),
    'μBTC': new Big(0.000001),
    'bit': new Big(0.000001),
    'Satoshi': new Big(0.00000001),
    'sat': new Big(0.00000001)
    // 'BTC': [1e8, 8],
    // 'mBTC': [1e5, 5],
    // 'uBTC': [1e2, 2],
    // 'bits': [1e2, 2],
    // 'satoshis': [1, 0]
};

_.mixin({

    isNullOrUndefined: function (s) {
        return s === undefined || s === null;
    },
    // isEmpty: function (s) {
    //     return this.isNullOrUndefined(s) ? true : /^[\s\xa0]*$/.test(s);
    // },
    isNullOrWhiteSpace: function (s) {
        return this.isEmpty(s);
    },
    setNullwhenEmpty: function (s) {
        return this.isEmpty(s) ? null : null;
    },

    isUrl: function (s) {
        return this.isEmpty(s) ? false : s.match(/((http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi);
    },
    isLink: function (s) {
        return this.isUrl(s);
    },
    isCrawl: function (s) {
        return this.isEmpty(s) ? false : s.match(/facebook|facebookexternalhit|googlebot|google|bingbot|pinterest|yandexbot|ahrefsbot|msnbot|linkedin|linkedinbot|exabot|baidu|baiduspider|crawler|compspybot|yesupbot|paperlibot|tweetmemebot|semrushbot|gigabot|voilabot|adsbot-google|botlink|alkalinebot|araybot|undrip bot|borg-bot|boxseabot|yodaobot|admedia bot|ezooms.bot|confuzzledbot|coolbot|internet cruiser robot|yolinkbot|diibot|musobot|dragonbot|elfinbot|wikiobot|twitterbot|contextad bot|hambot|iajabot|news bot|irobot|socialradarbot|ko_yappo_robot|skimbot|psbot|rixbot|seznambot|careerbot|simbot|solbot|mail.ru_bot|spiderbot|blekkobot|bitlybot|techbot|void-bot|vwbot_k|diffbot|friendfeedbot|archive.org_bot|woriobot|crystalsemanticsbot|wepbot|spbot|tweetedtimes bot|mj12bot|who.is bot|psbot|robot|jbot|bbot|bot/ig);
    },
    isMobile: function (ua) {
        return this.isEmpty(ua) ? false : /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));

    },
    format: function (s) {
        var args = Array.prototype.slice.call(arguments, 1);
        return s.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    },

    randomDate: function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    },

    updateQueryString: function (url, key, value) {

        if (!url) return url;
        var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
            hash;

        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + "=" + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    },

    toKb: function (num, suffix, decimal) {

        if (this.isNumber(suffix)) {
            decimal = suffix;
            suffix = undefined;
        }

        if (isNaN(num) || num == null) return '';
        var sizes = ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"];
        var k = 1000, dm = decimal || 2;
        var i = suffix ? this.indexOf(sizes, suffix) : Math.floor(Math.log(num) / Math.log(k));
        //return parseFloat((num / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        return this.numberFormat((num / Math.pow(k, i)), dm) + sizes[i];

    },
    
    toHHMMSS: function (seconds) {
        var _a = new Date(seconds * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
        return _a.replace(/^00:/, '');
    },

    slug: function (s) {
        return s.toString().toLowerCase().trim()
            .replace(/&/g, '-')         // Replace & with 'and'
            .replace(/[\s\W-]+/g, '-')      // Replace spaces, non-word characters and dashes with a single dash (-)
            .replace(/-$/, ''); // Remove last floating dash if exists
    },

    numberFormat: function (number, padding) {
        if (this.isNullOrUndefined(number))
            return 0;

        if (isNaN(number) || number == null) return '';

        number = parseFloat(number).toFixed(~~padding);

        var parts = number.split('.'),
            fnums = parts[0],
            decimals = parts[1] ? '.' + parts[1] : '';

        return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + decimals;

    },

    randomString: function (length, chars) {

        var mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
        return result;
    },


    absoluteUrl: function (base, relative) {

        if (this.isEmpty(relative) ||
            this.isEmpty(base) ||
            relative.match(/^(http:)|^(https:)|^(\/\/)|^(#)|^(javascript:)|^(mailto:)|^(ftp:)|^(file:)|^(data:)/ig))
            return relative;

        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); // remove current file name (or empty string)
        // (omit if "base" is the current folder without trailing slash)
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    },

    mirror: function (obj, map) {
        return this.reduce(obj, function (result, value, key) {
            key = map[key] || key;
            result[key] = value;
            return result;
        }, {});
    },
    toUnit: function (from, fromUnit, toUnit, representation) {
        let fromFactor = units[fromUnit];
        if (fromFactor === undefined) {
            throw new Error(`'${fromUnit}' is not a bitcoin unit`);
        }
        let toFactor = units[toUnit];
        if (toFactor === undefined) {
            throw new Error(`'${toUnit}' is not a bitcoin unit`);
        }

        if (Number.isNaN(from)) {
            if (!representation || representation === 'Number') {
                return from;
            } else if (representation === 'Big') {
                return new Big(from); // throws BigError
            } else if (representation === 'String') {
                return from.toString();
            }
            throw new Error(`'${representation}' is not a valid representation`);
        }

        let result = new Big(from).times(fromFactor).div(toFactor);

        if (!representation || representation === 'Number') {
            return Number(result);
        } else if (representation === 'Big') {
            return result;
        } else if (representation === 'String') {
            return result.toString();
        }

        throw new Error(`'${representation}' is not a valid representation`);
    },
    toBTC: function (val) {
        return this.toUnit(val, 'sat', 'BTC');
    },
    toSAT: function (val) {
        return this.toUnit(val, 'BTC', 'sat');
    },
    // Vue use
    install: function (Vue) {
        Vue.prototype._ = this;
        Vue._ = this;
    },
});

module.exports = _;