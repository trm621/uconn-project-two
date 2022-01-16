const dayjs = require("dayjs");

function today() {
  return dayjs().format('MM-DD-YYYY');
}

function format_date(date) {
      return `${dayjs(date).format('MM-DD-YYYY hh:mm:ss')}`;
    };

function format_url(url) {
      return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')[0]
        .split('?')[0];
    }

function format_plural(word, amount) {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    };

  module.exports = { format_date, format_url, format_plural, today }