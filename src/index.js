
var _ = require('lodash');

_.mixin({

    isBlank: require('underscore.string/isBlank'),
    numberFormat: require('underscore.string/numberFormat'),

    isUrl: function (s) {
        return /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(s);
    },


    updateQueryString: function (link, key, value) {
        var url = new URL(link);
        var params = url.searchParams;
        params.set(key, value);
        url.search = params.toString();
        return url.toString();
    },

    toKb: function (num, suffix, decimal) {

        if (this.isNumber(suffix)) {
            decimal = suffix;
            suffix = undefined;
        }

        if (isNaN(num) || num == null) return '';
        var sizes = ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"];
        var k = 1000, dm = decimal || 2;

        if (num < k) return num;

        var i = suffix ? this.indexOf(sizes, suffix) : Math.floor(Math.log(num) / Math.log(k));
        //return parseFloat((num / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        return this.numberFormat((num / Math.pow(k, i)), dm) + sizes[i];

    },

    ago: function (time) {

        if (!time) return;

        var templates = {
            prefix: "",
            suffix: " ago",
            seconds: "%d seconds",
            minute: "a minute",
            minutes: "%d minutes",
            hour: "an hour",
            hours: "%d hours",
            day: "a day",
            days: "%d days",
            month: "a month",
            months: "%d months",
            year: "a year",
            years: "%d years"
        };
        var template = function (t, n) {
            return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
        };

        // if (this.isString(time)) {
        //     time = time.replace(/\.\d+/, ""); // remove milliseconds
        //     time = time.replace(/-/, "/").replace(/-/, "/");
        //     time = time.replace(/T/, " ").replace(/Z/, " UTC");
        //     time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
        // }

        time = (!isNaN(time) || /^\d+$/.test(time)) ?
            parseInt(time) : time
                .trim()
                .replace(/\.\d+/, '') // remove milliseconds
                .replace(/-/, '/').replace(/-/, '/')                
                .replace(/T/, ' ')
                .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
                .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400

        time = new Date(time);

        var now = new Date();
        var seconds = ((now.getTime() - time) * .001) >> 0;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var years = days / 365;

        return templates.prefix + (
            seconds < 45 && template('seconds', seconds) ||
            seconds < 90 && template('minute', 1) ||
            minutes < 45 && template('minutes', minutes) ||
            minutes < 90 && template('hour', 1) ||
            hours < 24 && template('hours', hours) ||
            hours < 42 && template('day', 1) ||
            days < 30 && template('days', days) ||
            days < 45 && template('month', 1) ||
            days < 365 && template('months', days / 30) ||
            years < 1.5 && template('year', 1) ||
            template('years', years)
        ) + templates.suffix;
    },

    t: function (t) {

        var d = Date.now ? Date.now() : new Date().getTime();

        if (!t) return d;

        if (this.isNumber(t)) return d + t;

        var regex = /^(?:\-?\d+\.?\d*|\d*\.?\d+)(y|d|h|m|s)$/i;

        if (regex.test(t)) {

            var num = parseInt(t.replace(/^(\-?\d+\.?\d*|\d*\.?\d+)(?:y|d|h|m|s)$/i, "$1")) * 1000;
            var s = t.replace(regex, '$1').toLowerCase();

            switch (s) {
                
                case 'y': return d + num * 31104000; // 60 * 60 * 24 * 30 * 12                
                case 'd': return d + num * 86400;  // 60 * 60 * 24
                case 'h': return d + num * 3600;  // 60 * 60
                case 'm': return d + num * 60;  // 60
                case 's': return d + num;
                default: new Error("unknown exception of 'set operation'");
            }
        }


    }


});

module.exports = _;