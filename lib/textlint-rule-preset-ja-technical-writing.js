// LICENSE : MIT
"use strict";
var jtfRules = require("textlint-rule-preset-jtf-style").rules;
module.exports = {
    rules: {
        "max-comma": require("textlint-rule-max-comma"),
        "max-ten": require("textlint-rule-max-ten"),
        "max-kanji-continuous-len": require("textlint-rule-max-kanji-continuous-len"),
        "no-mix-dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu"),
        "arabic-kanji-numbers": jtfRules["2.2.2.算用数字と漢数字の使い分け"],
        "no-double-negative-ja": require("textlint-rule-no-double-negative-ja"),
        "no-dropping-the-ra": require("textlint-rule-no-dropping-the-ra"),
        "no-nfd": require("textlint-rule-no-nfd"),
        "no-hankaku-kana": require("textlint-rule-no-hankaku-kana"),
        "no-invalid-control-character": require("@textlint-rule/textlint-rule-no-invalid-control-character"),
        "ja-no-successive-word": require("textlint-rule-ja-no-successive-word"),
        "ja-no-abusage": require("textlint-rule-ja-no-abusage"),
        "ja-no-redundant-expression": require("textlint-rule-ja-no-redundant-expression")
    },

    rulesConfig: {
        // # コンマは1文中に4つまで
        // https://github.com/azu/textlint-rule-max-comma
        "max-comma": {
            max: 4
        },
        // # 読点は1文中に4つまで
        // https://github.com/azu/textlint-rule-max-ten
        "max-ten": {
            max: 4
        },
        // # 連続できる最大の漢字長は6文字まで
        // 漢字が連続していると読みにくさにつながります。
        // https://github.com/azu/textlint-rule-max-kanji-continuous-len
        "max-kanji-continuous-len": {
            max: 8
        },
        // # 漢数字と算用数字を使い分けます
        // 数量を表現し、数を数えられるものは算用数字を使用します。
        // 任意の数に置き換えても通用する語句がこれに該当します。
        // 序数詞（「第～回」「～番目」「～回目」）も算用数字を使います。
        // 慣用的表現、熟語、概数、固有名詞、副詞など、漢数字を使用することが一般的な語句では漢数字を使います。
        // https://github.com/azu/textlint-rule-preset-JTF-style
        // https://www.jtf.jp/jp/style_guide/styleguide_top.html
        "arabic-kanji-numbers": true,
        // # 「ですます調」、「である調」を統一します
        // 見出しは自動
        // 本文はですます調
        // 箇条書きはである調
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        "no-mix-dearu-desumasu": {
            "preferInHeader": "",
            "preferInBody": "である",
            "preferInList": "である",
            "strict": false
        },
        // # 二重否定は使用しない
        // https://github.com/azu/textlint-rule-no-double-negative-ja
        "no-double-negative-ja": true,
        // # ら抜き言葉を使用しない
        // https://github.com/azu/textlint-rule-no-dropping-the-ra
        "no-dropping-the-ra": true,
        // # UTF8-MAC 濁点を使用しない
        // 文章中にUTF8-MAC 濁点は不要です。
        // https://github.com/azu/textlint-rule-no-nfd
        "no-nfd": true,
        // # 不必要な制御文字を使用しない
        // 改行やタブ以外の一般的な文章にはでてこない不自然な制御文字が入るのを防止します。
        // https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
        "no-invalid-control-character": true,
        // # 半角カナを使用しない
        // https://github.com/azu/textlint-rule-no-hankaku-kana
        "no-hankaku-kana": true,
        // # 同一の単語を間違えて連続しているのをチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
        "ja-no-successive-word": true,
        // # よくある日本語の誤用をチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
        "ja-no-abusage": true,
        // # 冗長な表現をチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression
        "ja-no-redundant-expression": true
    }
};
