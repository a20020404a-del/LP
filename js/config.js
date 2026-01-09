/**
 * =============================================
 * SHIOYA BURGER - 設定ファイル
 * =============================================
 *
 * このファイルでLPの内容を簡単に編集できます。
 * 各項目を変更して保存するだけでサイトに反映されます。
 *
 * 編集方法:
 * 1. このファイル (js/config.js) を開く
 * 2. 下記の設定値を変更
 * 3. 保存してブラウザをリロード
 */

const SITE_CONFIG = {

    // =============================================
    // 店舗基本情報
    // =============================================
    shop: {
        name: "SHIOYA BURGER",
        nameJa: "しおやバーガー",
        tagline: "塩谷町の牛肉100%ハンバーガー専門店",
        description: "栃木県塩谷町から届ける、牛肉100%の本格ハンバーガー",
        catchphrase: "地元で愛される、手作りバーガー",
    },

    // =============================================
    // 連絡先・住所
    // =============================================
    contact: {
        phone: "0287-41-6101",
        phoneDisplay: "0287-41-6101",
        postalCode: "329-2441",
        address: "栃木県塩谷郡塩谷町大字風見2733-1",
        parking: "100台以上（無料）",
    },

    // =============================================
    // 営業時間
    // =============================================
    hours: {
        weekday: "11:00 - 17:00",
        weekend: "10:00 - 18:00",
        holiday: "水曜日",
    },

    // =============================================
    // SNSリンク（URLを入力してください）
    // 使わないものは空欄 "" にしてください
    // =============================================
    social: {
        instagram: "https://www.instagram.com/shioyaburger/",  // ← InstagramのURL
        facebook: "",                                           // ← FacebookのURL
        twitter: "",                                            // ← Twitter(X)のURL
        line: "https://line.me/R/ti/p/@shioyaburger",          // ← LINE公式アカウントのURL
        tiktok: "",                                             // ← TikTokのURL
        youtube: "",                                            // ← YouTubeのURL
    },

    // =============================================
    // Google Maps 埋め込み設定
    //
    // 取得方法:
    // 1. Google Mapsで店舗を検索
    // 2. 「共有」→「地図を埋め込む」をクリック
    // 3. 「HTMLをコピー」のsrc="..."の中身をコピー
    // =============================================
    map: {
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.5!2d139.855!3d36.745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ0JzQyLjAiTiAxMznCsDUxJzE4LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890",
        // ↑ ここにGoogle Mapsの埋め込みURLを貼り付け
    },

    // =============================================
    // メニュー
    // 画像URLと価格を変更できます
    // =============================================
    menu: [
        {
            name: "しおやバーガー",
            description: "当店自慢の定番バーガー。牛肉100%パティに新鮮野菜と自家製ソース。",
            price: 1580,
            image: "https://readdy.ai/api/search-image?query=gourmet%20hamburger%20with%20lettuce%20tomato%20onion%20beef%20patty%20sesame%20bun%20professional%20food%20photography%20white%20background&width=600&height=600&seq=1",
            badge: "人気No.1",
            badgeType: "popular", // popular, special, season
        },
        {
            name: "しおやチーズバーガー",
            description: "とろけるチェダーチーズをたっぷりトッピング。チーズ好きにはたまらない一品。",
            price: 1780,
            image: "https://readdy.ai/api/search-image?query=gourmet%20cheeseburger%20melted%20cheese%20beef%20patty%20lettuce%20tomato%20professional%20food%20photography%20white%20background&width=600&height=600&seq=2",
            badge: "",
            badgeType: "",
        },
        {
            name: "男体山トリプルバーガー",
            description: "圧巻の3段パティ！男体山のような迫力満点のボリュームバーガー。",
            price: 2980,
            image: "https://readdy.ai/api/search-image?query=triple%20stack%20hamburger%20three%20beef%20patties%20cheese%20bacon%20professional%20food%20photography%20white%20background&width=600&height=600&seq=3",
            badge: "限定",
            badgeType: "special",
        },
        {
            name: "イチゴ削り",
            description: "栃木県産いちごを使った季節限定デザート。ふわふわの氷に甘酸っぱいいちごシロップ。",
            price: 680,
            image: "https://readdy.ai/api/search-image?query=japanese%20shaved%20ice%20strawberry%20kakigori%20dessert%20professional%20food%20photography%20white%20background&width=600&height=600&seq=4",
            badge: "季節限定",
            badgeType: "season",
        },
    ],

    // =============================================
    // ギャラリー画像
    // 画像URLと説明を変更できます
    // =============================================
    gallery: [
        {
            image: "https://readdy.ai/api/search-image?query=cozy%20burger%20restaurant%20interior%20wooden%20decor%20warm%20ambient%20lighting%20japanese%20countryside%20style&width=800&height=600&seq=g1",
            caption: "店内の様子",
            size: "large", // large, tall, normal
        },
        {
            image: "https://readdy.ai/api/search-image?query=chef%20grilling%20burger%20patty%20flames%20professional%20kitchen&width=600&height=600&seq=g2",
            caption: "調理風景",
            size: "normal",
        },
        {
            image: "https://readdy.ai/api/search-image?query=fresh%20vegetables%20lettuce%20tomato%20onion%20kitchen%20prep&width=600&height=600&seq=g3",
            caption: "新鮮野菜",
            size: "normal",
        },
        {
            image: "https://readdy.ai/api/search-image?query=artisan%20burger%20buns%20bakery%20fresh%20bread&width=600&height=600&seq=g4",
            caption: "特製バンズ",
            size: "normal",
        },
        {
            image: "https://readdy.ai/api/search-image?query=japanese%20countryside%20view%20mountains%20nature%20tochigi%20shioya&width=600&height=800&seq=g5",
            caption: "塩谷町の風景",
            size: "tall",
        },
        {
            image: "https://readdy.ai/api/search-image?query=happy%20customers%20eating%20burgers%20restaurant%20enjoyment&width=600&height=600&seq=g6",
            caption: "お客様の笑顔",
            size: "normal",
        },
    ],

    // =============================================
    // ヒーロー背景画像（スライドショー用）
    // 4枚まで設定可能
    // =============================================
    heroImages: [
        "https://readdy.ai/api/search-image?query=rustic%20burger%20restaurant%20interior%20warm%20lighting%20wooden%20tables%20cozy%20atmosphere%20professional%20photography&width=1920&height=1080&seq=hero1",
        "https://readdy.ai/api/search-image?query=delicious%20gourmet%20burger%20close%20up%20juicy%20beef%20patty%20melted%20cheese%20fresh%20vegetables%20professional%20food%20photography&width=1920&height=1080&seq=hero2",
        "https://readdy.ai/api/search-image?query=chef%20cooking%20burger%20grill%20flames%20professional%20kitchen%20dramatic%20lighting&width=1920&height=1080&seq=hero3",
        "https://readdy.ai/api/search-image?query=japanese%20countryside%20restaurant%20beautiful%20nature%20mountains%20tochigi%20scenic&width=1920&height=1080&seq=hero4",
    ],

    // =============================================
    // こだわりポイント
    // =============================================
    commitments: [
        {
            icon: "🥩",
            title: "牛肉100%、つなぎなし",
            description: "厳選した牛肉のみを使用。つなぎを一切使わない、肉本来の旨味を堪能できるパティ。",
        },
        {
            icon: "🍞",
            title: "峰屋の特製バンズ",
            description: "地元のパン屋「峰屋」と共同開発した、ふんわりもっちりの特製バンズ。",
        },
        {
            icon: "🥬",
            title: "地元の新鮮野菜",
            description: "塩谷町近郊の農家から毎朝届く、新鮮なレタス、トマト、玉ねぎを使用。",
        },
        {
            icon: "🍯",
            title: "自家製ハニーマスタード",
            description: "秘伝のレシピで作る自家製ハニーマスタードソースが味の決め手。",
        },
    ],

    // =============================================
    // ご来店案内
    // =============================================
    visitNotice: [
        "混雑時はお待ちいただく場合がございます",
        "ご予約は承っておりません（先着順）",
        "お子様連れのお客様も大歓迎です",
        "アレルギーをお持ちの方は事前にお申し付けください",
    ],

    // =============================================
    // フッター
    // =============================================
    footer: {
        copyright: "2024 SHIOYA BURGER",
        privacyPolicy: "#",
        terms: "#",
    },
};

// 設定を適用する関数（自動実行）
document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
});

function applyConfig() {
    const config = SITE_CONFIG;

    // 店舗名
    document.querySelectorAll('.logo, .footer-logo h3').forEach(el => {
        el.textContent = config.shop.name;
    });

    // 電話番号リンク
    document.querySelectorAll('a[href^="tel:"]').forEach(el => {
        el.href = `tel:${config.contact.phone}`;
        if (el.querySelector('span') || el.textContent.includes('-')) {
            el.textContent = config.contact.phoneDisplay;
        }
    });

    // Google Maps
    const mapIframe = document.querySelector('.access-map iframe');
    if (mapIframe && config.map.embedUrl) {
        mapIframe.src = config.map.embedUrl;
    }

    // SNSリンク更新
    updateSocialLinks(config.social);

    // LINE友だち追加ボタン
    const lineBtn = document.querySelector('.line-add-btn');
    if (lineBtn) {
        if (config.social.line) {
            lineBtn.href = config.social.line;
            lineBtn.style.display = 'inline-flex';
        } else {
            lineBtn.style.display = 'none';
        }
    }

    // Instagramボタン
    const instagramBtn = document.querySelector('.instagram-btn');
    if (instagramBtn) {
        if (config.social.instagram) {
            instagramBtn.href = config.social.instagram;
            instagramBtn.style.display = 'inline-flex';
        } else {
            instagramBtn.style.display = 'none';
        }
    }
}

function updateSocialLinks(social) {
    const socialContainer = document.querySelector('.footer-social');
    if (!socialContainer) return;

    // 既存のリンクを更新
    const instagramLink = socialContainer.querySelector('a[aria-label="Instagram"]');
    const facebookLink = socialContainer.querySelector('a[aria-label="Facebook"]');
    const twitterLink = socialContainer.querySelector('a[aria-label="Twitter"]');

    if (instagramLink) {
        if (social.instagram) {
            instagramLink.href = social.instagram;
            instagramLink.style.display = '';
        } else {
            instagramLink.style.display = 'none';
        }
    }

    if (facebookLink) {
        if (social.facebook) {
            facebookLink.href = social.facebook;
            facebookLink.style.display = '';
        } else {
            facebookLink.style.display = 'none';
        }
    }

    if (twitterLink) {
        if (social.twitter) {
            twitterLink.href = social.twitter;
            twitterLink.style.display = '';
        } else {
            twitterLink.style.display = 'none';
        }
    }

    // LINEリンクを追加（存在しない場合）
    if (social.line && !socialContainer.querySelector('a[aria-label="LINE"]')) {
        const lineLink = document.createElement('a');
        lineLink.href = social.line;
        lineLink.setAttribute('aria-label', 'LINE');
        lineLink.className = 'animate-hover-rotate';
        lineLink.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
        `;
        socialContainer.appendChild(lineLink);
    }
}

// グローバルに設定を公開
window.SITE_CONFIG = SITE_CONFIG;
