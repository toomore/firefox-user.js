user_pref("browser.display.use_document_fonts", 0);
user_pref("font.cjk_pref_fallback_order", "zh-tw,ja,ko");
user_pref("font.internaluseonly.changed", true);
user_pref("font.language.group", "zh-TW");
user_pref("font.name-list.cursive.zh-CN", "jf-openhuninn-1.1");
user_pref("font.name-list.cursive.zh-HK", "jf-openhuninn-1.1");
user_pref("font.name-list.cursive.zh-TW", "jf-openhuninn-1.1");
user_pref("font.name-list.sans-serif.zh-CN", "jf-openhuninn-1.1, Arial, PingFang SC, STHeiti, Heiti SC");
user_pref("font.name-list.sans-serif.zh-HK", "jf-openhuninn-1.1, Arial, PingFang TC, Heiti TC, LiHei Pro");
user_pref("font.name-list.sans-serif.zh-TW", "jf-openhuninn-1.1, Arial, PingFang TC, Heiti TC, LiHei Pro");
user_pref("font.name-list.serif.zh-CN", "jf-openhuninn-1.1, Times New Roman, Songti SC, STSong, Heiti SC");
user_pref("font.name-list.serif.zh-HK", "jf-openhuninn-1.1, Times New Roman, Songti TC, LiSong Pro, Heiti TC");
user_pref("font.name-list.serif.zh-TW", "jf-openhuninn-1.1, Times New Roman, Songti TC, LiSong Pro, Heiti TC");
user_pref("font.name.cursive.x-unicode", "jf-openhuninn-1.1");
user_pref("font.name.cursive.x-western", "jf-openhuninn-1.1");
user_pref("font.name.cursive.zh-CN", "jf-openhuninn-1.1");
user_pref("font.name.cursive.zh-HK", "jf-openhuninn-1.1");
user_pref("font.name.cursive.zh-TW", "jf-openhuninn-1.1");
user_pref("font.name.sans-serif.ja", "Hiragino Maru Gothic ProN");
user_pref("font.name.sans-serif.x-unicode", "jf-openhuninn-1.1");
user_pref("font.name.sans-serif.x-western", "jf-openhuninn-1.1");
user_pref("font.name.sans-serif.zh-CN", "jf-openhuninn-1.1");
user_pref("font.name.sans-serif.zh-HK", "jf-openhuninn-1.1");
user_pref("font.name.sans-serif.zh-TW", "jf-openhuninn-1.1");
user_pref("font.name.serif.x-unicode", "jf-openhuninn-1.1");
user_pref("font.name.serif.x-western", "jf-openhuninn-1.1");
user_pref("font.name.serif.zh-CN", "jf-openhuninn-1.1");
user_pref("font.name.serif.zh-HK", "jf-openhuninn-1.1");
user_pref("font.name.serif.zh-TW", "jf-openhuninn-1.1");
user_pref("font.preload-names-list", "jf-openhuninn-1.1,Hiragino Kaku Gothic ProN,Hiragino Mincho ProN,STSong");
user_pref("network.dnsCacheExpiration", 0);
user_pref("network.dnsCacheExpirationGracePeriod", 0);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.use_corelocation", false); // [MAC]

/* 0000: disable about:config warning
 * FF71-72: chrome://global/content/config.xul
 * FF73+: chrome://global/content/config.xhtml ***/
user_pref("general.warnOnAboutConfig", false); // XUL/XHTML version
user_pref("browser.aboutConfig.showWarning", false); // HTML version [FF71+]

/* 0602: disable DNS prefetching
 * [1] https://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
 * [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [HIDDEN PREF ESR] [DEFAULT: true FF70+]
/* 0603: disable predictor / prefetching ***/
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+]
/* 0605: disable link-mouseover opening connection to linked server
 * [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
 * [2] https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links/ ***/
user_pref("network.http.speculative-parallel-limit", 0);
/* 0606: disable "Hyperlink Auditing" (click tracking) and enforce same host in case
 * [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ ***/
user_pref("browser.send_pings", false); // [DEFAULT: false]
user_pref("browser.send_pings.require_same_host", true);

/* 0701: disable IPv6
 * IPv6 can be abused, especially regarding MAC addresses. They also do not play nice
 * with VPNs. That's even assuming your ISP and/or router and/or website can handle it.
 * Firefox telemetry (April 2019) shows only 5% of all connections are IPv6
 * [NOTE] This is just an application level fallback. Disabling IPv6 is best done at an
 * OS/network level, and/or configured properly in VPN setups. If you are not masking your IP,
 * then this won't make much difference. If you are masking your IP, then it can only help.
 * [TEST] https://ipleak.org/
 * [1] https://github.com/ghacksuserjs/ghacks-user.js/issues/437#issuecomment-403740626
 * [2] https://www.internetsociety.org/tag/ipv6-security/ (see Myths 2,4,5,6) ***/
user_pref("network.dns.disableIPv6", true);

/* 1003: disable memory cache
 * capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes ***/
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.memory.capacity", 0); // [HIDDEN PREF ESR]
/* 1006: disable permissions manager from writing to disk [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 ***/
user_pref("permissions.memory_only", true); // [HIDDEN PREF]
/* 1007: disable media cache from writing to disk in Private Browsing
 * [NOTE] MSE (Media Source Extensions) are already stored in-memory in PB ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);

/* 1201: require safe negotiation
 * Blocks connections to servers that don't support RFC 5746 [2] as they're potentially
 * vulnerable to a MiTM attack [3]. A server *without* RFC 5746 can be safe from the attack
 * if it disables renegotiations but the problem is that the browser can't know that.
 * Setting this pref to true is the only way for the browser to ensure there will be
 * no unsafe renegotiations on the channel between the browser and the server.
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://tools.ietf.org/html/rfc5746
 * [3] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555 ***/
user_pref("security.ssl.require_safe_negotiation", true);
/* 1204: disable SSL session tracking [FF36+]
 * SSL Session IDs are unique, last up to 24hrs in Firefox, and can be used for tracking
 * [SETUP-PERF] Relax this if you have FPI enabled (see 4000) *AND* you understand the
 * consequences. FPI isolates these, but it was designed with the Tor protocol in mind,
 * and the Tor Browser has extra protection, including enhanced sanitizing per Identity.
 * [1] https://tools.ietf.org/html/rfc5077
 * [2] https://bugzilla.mozilla.org/967977
 * [3] https://arxiv.org/abs/1810.07304 ***/
user_pref("security.ssl.disable_session_identifiers", true); // [HIDDEN PREF]

/* 1206: disable TLS1.3 0-RTT (round-trip time) [FF51+]
 * [1] https://github.com/tlswg/tls13-spec/issues/1001
 * [2] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/ ***/
user_pref("security.tls.enable_0rtt_data", false);

/* 1404: disable rendering of SVG OpenType fonts
 * [1] https://wiki.mozilla.org/SVGOpenTypeFonts - iSECPartnersReport recommends to disable this ***/
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
/* 1408: disable graphite
 * Graphite has had many critical security issues in the past, see [1]
 * [1] https://www.mozilla.org/security/advisories/mfsa2017-15/#CVE-2017-7778
 * [2] https://en.wikipedia.org/wiki/Graphite_(SIL) ***/
user_pref("gfx.font_rendering.graphite.enabled", false);

/* 2701: disable 3rd-party cookies and site-data [SETUP-WEB]
 * 0=Accept cookies and site data, 1=(Block) All third-party cookies, 2=(Block) All cookies,
 * 3=(Block) Cookies from unvisited websites, 4=(Block) Cross-site and social media trackers (FF63+) (default FF69+)
 * [NOTE] You can set exceptions under site permissions or use an extension
 * [NOTE] Enforcing category to custom ensures ETP related prefs are always honored
 * [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Cookies ***/
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");
/* 2702: set third-party cookies (i.e ALL) (if enabled, see 2701) to session-only
   and (FF58+) set third-party non-secure (i.e HTTP) cookies to session-only
   [NOTE] .sessionOnly overrides .nonsecureSessionOnly except when .sessionOnly=false and
   .nonsecureSessionOnly=true. This allows you to keep HTTPS cookies, but session-only HTTP ones
 * [1] https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/ ***/
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // [FF58+]
/* 2730: disable offline cache ***/
user_pref("browser.cache.offline.enable", false);

/* 2803: set what items to clear on shutdown (if 2802 is true) [SETUP-CHROME]
 * [NOTE] If 'history' is true, downloads will also be cleared regardless of the value
 * but if 'history' is false, downloads can still be cleared independently
 * However, this may not always be the case. The interface combines and syncs these
 * prefs when set from there, and the sanitize code may change at any time
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes>Settings ***/
user_pref("privacy.clearOnShutdown.cache", true);
//user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true); // see note above
user_pref("privacy.clearOnShutdown.formdata", true); // Form & Search History
//user_pref("privacy.clearOnShutdown.history", true); // Browsing & Download History
user_pref("privacy.clearOnShutdown.offlineApps", true); // Offline Website Data
//user_pref("privacy.clearOnShutdown.sessions", true); // Active Logins
//user_pref("privacy.clearOnShutdown.siteSettings", false); // Site Preferences

/* 4001: enable First Party Isolation [FF51+]
 * [SETUP-WEB] May break cross-domain logins and site functionality until perfected
 * [1] https://bugzilla.mozilla.org/1260931
 * [2] https://bugzilla.mozilla.org/1299996 [META] ***/
user_pref("privacy.firstparty.isolate", true);
/* 4002: enforce FPI restriction for window.opener [FF54+]
 * [NOTE] Setting this to false may reduce the breakage in 4001
 * FF65+ blocks postMessage with targetOrigin "*" if originAttributes don't match. But
 * to reduce breakage it ignores the 1st-party domain (FPD) originAttribute, see [2],[3]
 * The 2nd pref removes that limitation and will only allow communication if FPDs also match.
 * [1] https://bugzilla.mozilla.org/1319773#c22
 * [2] https://bugzilla.mozilla.org/1492607
 * [3] https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage ***/
   // user_pref("privacy.firstparty.isolate.restrict_opener_access", true); // [DEFAULT: true]
   // user_pref("privacy.firstparty.isolate.block_post_message", true); // [HIDDEN PREF ESR]
/* 4003: enable site partitioning (FF78+)
 * [1] https://bugzilla.mozilla.org/1590107 [META] */
user_pref("privacy.partition.network_state", true);

user_pref("network.dnsCacheExpiration", 0);
user_pref("network.dnsCacheExpirationGracePeriod", 0);
user_pref("network.dnsCacheEntries", 50);
