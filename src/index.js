
var _ = require('lodash');

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
        return this.isEmpty(s) ? false : /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(s);
    },
    isLink: function (s) {
        return this.isUrl(s);
    },
    isCrawl: function (s) {

        if(this.isEmpty(s)) return false;

        var patterns = ["tumblr","douban","weibo","bitlybot","Dogpile","Discordbot","Flipboard","DuckDuckGo","Bingpreview","TelegramBot","LinkedInBot","linkedin","XING","Twitterbot","ahrefsbot",".*Java.*outbrain"," YLT","^b0t$","^bluefish ","^Calypso v\\\/","^COMODO DCV","^DangDang","^DavClnt","^FDM ","^git\\\/","^Goose\\\/","^Grabber","^HTTPClient\\\/","^Java\\\/","^Jeode\\\/","^Jetty\\\/","^Mail\\\/","^Mget","^Microsoft URL Control","^NG\\\/[0-9\\.]","^NING\\\/","^PHP\\\/[0-9]","^RMA\\\/","^Ruby|Ruby\\\/[0-9]","^VSE\\\/[0-9]","^WordPress\\.com","^XRL\\\/[0-9]","^ZmEu","008\\\/","13TABS","192\\.comAgent","2ip\\.ru","404enemy","7Siters","80legs","a\\.pr-cy\\.ru","a3logics\\.in","A6-Indexer","Abonti","Aboundex","aboutthedomain","Accoona-AI-Agent","acoon","acrylicapps\\.com\\\/pulp","Acunetix","AdAuth\\\/","adbeat","AddThis","ADmantX","AdminLabs","adressendeutschland","adscanner","Adstxtaggregator","adstxt-worker","adstxt\\.com","agentslug","AHC","aihit","aiohttp\\\/","Airmail","akka-http\\\/","akula\\\/","alertra","alexa site audit","Alibaba\\.Security\\.Heimdall","Alligator","allloadin","AllSubmitter","alyze\\.info","amagit","^Amazon Simple Notification Service Agent$","Anarchie","AndroidDownloadManager","Anemone","AngleSharp","annotate_google","Ant\\.com","Anturis Agent","AnyEvent-HTTP\\\/","Apache Droid","Apache OpenOffice","Apache-HttpAsyncClient","Apache-HttpClient","ApacheBench","Apexoo","APIs-Google","AportWorm\\\/","AppBeat\\\/","AppEngine-Google","AppleSyndication","AppStoreScraperZ","Aprc\\\/[0-9]","Arachmo","arachnode","Arachnophilia","aria2","Arukereso","asafaweb","AskQuickly","Ask Jeeves","ASPSeek","Asterias","Astute","asynchttp","Attach","autocite","AutomaticWPTester","Autonomy","axios\\\/","AWS Security Scanner","B-l-i-t-z-B-O-T","Backlink-Ceck","backlink-check","BacklinkHttpStatus","BackStreet","BackWeb","Bad-Neighborhood","Badass","baidu\\.com","Bandit","basicstate","BatchFTP","Battleztar Bazinga","baypup\\\/","BazQux","BBBike","BCKLINKS","BDFetch","BegunAdvertising","Bidtellect","BigBozz","Bigfoot","biglotron","BingLocalSearch","BingPreview","binlar","biNu image cacher","Bitacle","biz_Directory","Black Hole","Blackboard Safeassign","BlackWidow","BlockNote\\.Net","Bloglines","Bloglovin","BlogPulseLive","BlogSearch","Blogtrottr","BlowFish","boitho\\.com-dc","BPImageWalker","Braintree-Webhooks","Branch Metrics API","Branch-Passthrough","Brandprotect","BrandVerity","Brandwatch","Brodie\\\/","Browsershots","BUbiNG","Buck\\\/","Buddy","BuiltWith","Bullseye","BunnySlippers","Burf Search","Butterfly\\\/","BuzzSumo","CAAM\\\/[0-9]","CakePHP","Calculon","Canary%20Mail","CaretNail","catexplorador","CC Metadata Scaper","Cegbfeieh","censys","Cerberian Drtrs","CERT\\.at-Statistics-Survey","cg-eye","changedetection","ChangesMeter","Charlotte","CheckHost","checkprivacy","CherryPicker","ChinaClaw","Chirp\\\/","chkme\\.com","Chlooe","Chromaxa","CirrusExplorer","CISPA Vulnerability Notification","Citoid","CJNetworkQuality","Clarsentia","clips\\.ua\\.ac\\.be","Cloud mapping","CloudEndure","CloudFlare-AlwaysOnline","Cloudinary","cmcm\\.com","coccoc","cognitiveseo","colly -","CommaFeed","Commons-HttpClient","commonscan","contactbigdatafr","contentkingapp","convera","CookieReports","copyright sheriff","CopyRightCheck","Copyscape","cortex\\\/","Cosmos4j\\.feedback","Covario-IDS","Craw\\\/","Crescent","Crowsnest","Criteo","CSHttp","CSSCheck","curb","Curious George","curl","cuwhois\\\/","cybo\\.com","DAP\\\/NetHTTP","DareBoost","DatabaseDriverMysqli","DataCha0s","Datafeedwatch","Datanyze","DataparkSearch","dataprovider","DataXu","Daum(oa)?[ \\\/][0-9]","dBpoweramp","ddline","deeris","Demon","DeuSu","developers\\.google\\.com\\\/\\+\\\/web\\\/snippet\\\/","Devil","Digg","Digincore","DigitalPebble","Dirbuster","Discourse Forum Onebox","Disqus\\\/","Dispatch\\\/","DittoSpyder","dlvr","DMBrowser","DNSPod-reporting","docoloc","Dolphin http client","DomainAppender","Donuts Content Explorer","dotMailer content retrieval","dotSemantic","downforeveryoneorjustme","Download Wonder","downnotifier","DowntimeDetector","Drip","drupact","Drupal \\(\\+http:\\\/\\\/drupal\\.org\\\/\\)","DTS Agent","dubaiindex","DuplexWeb-Google","EARTHCOM","Easy-Thumb","EasyDL","Ebingbong","ec2linkfinder","eCairn-Grabber","eCatch","ECCP","eContext\\\/","Ecxi","EirGrabber","ElectricMonk","elefent","EMail Exractor","EMail Wolf","EmailWolf","Embarcadero","Embed PHP Library","Embedly","endo\\\/","europarchive\\.org","evc-batch","EventMachine HttpClient","Everwall Link Expander","Evidon","Evrinid","ExactSearch","ExaleadCloudview","Excel\\\/","exif","Exploratodo","Express WebPictures","Extreme Picture Finder","EyeNetIE","ezooms","facebookexternalhit","facebookexternalua","facebookplatform","fairshare","Faraday v","fasthttp","Faveeo","Favicon downloader","faviconkit","faviconarchive","FavOrg","Feed Wrangler","Feedable\\\/","Feedbin","FeedBooster","FeedBucket","FeedBunch\\\/","FeedBurner","feeder","Feedly","FeedshowOnline","Feedspot","Feedwind\\\/","FeedZcollector","feeltiptop","Fetch API","Fetch\\\/[0-9]","Fever\\\/[0-9]","FHscan","Fimap","findlink","findthatfile","FlashGet","FlipboardBrowserProxy","FlipboardProxy","FlipboardRSS","Flock\\\/","fluffy","Flunky","flynxapp","forensiq","FoundSeoTool","http:\\\/\\\/www.neomo.de\\\/","free thumbnails","Freeuploader","Funnelback","G-i-g-a-b-o-t","g00g1e\\.net","ganarvisitas","geek-tools","Genieo","GentleSource","GetCode","Getintent","GetLinkInfo","getprismatic","GetRight","getroot","GetURLInfo\\\/","GetWeb","Geziyor","Ghost Inspector","GigablastOpenSource","GIS-LABS","github-camo","github\\.com","Go [\\d\\.]* package http","Go http package","Go-Ahead-Got-It","Go-http-client","Go!Zilla","gobyus","gofetch","GomezAgent","gooblog","Goodzer\\\/","Google AppsViewer","Google Desktop","Google favicon","Google Keyword Suggestion","Google Keyword Tool","Google Page Speed Insights","Google PP Default","Google Search Console","Google Web Preview","Google-Adwords","Google-Apps-Script","Google-Calendar-Importer","Google-HotelAdsVerifier","Google-HTTP-Java-Client","Google-Publisher-Plugin","Google-Read-Aloud","Google-SearchByImage","Google-Site-Verification","Google-Structured-Data-Testing-Tool","Google-Youtube-Links","google-xrawler","GoogleDocs","GoogleHC\\\/","GoogleProducer","GoogleSites","Google-Transparency-Report","Gookey","GoScraper","GoSpotCheck","gosquared-thumbnailer","Gotit","GoZilla","grabify","GrabNet","Grafula","Grammarly","GrapeFX","GreatNews","Gregarius","GRequests","grokkit","grouphigh","grub-client","gSOAP\\\/","GT::WWW","GTmetrix","GuzzleHttp","gvfs\\\/","HAA(A)?RTLAND http client","Haansoft","hackney\\\/","Hadi Agent","HappyApps-WebCheck","Hatena","Havij","HaxerMen","HeadlessChrome","HEADMasterSEO","HeartRails_Capture","help@dataminr\\.com","heritrix","historious","hkedcity","hledejLevne\\.cz","Hloader","HMView","Holmes","HonesoSearchEngine","HootSuite Image proxy","Hootsuite-WebFeed","hosterstats","HostTracker","ht:\\\/\\\/check","htdig","HTMLparser","htmlyse","HTTP Banner Detection","HTTP_Compression_Test","http_request2","http_requester","http-get","HTTP-Header-Abfrage","http-kit","http-request\\\/","HTTP-Tiny","HTTP::Lite","http\\.rb\\\/","http_get","HttpComponents","httphr","HTTPMon","HTTPie","httpRequest","httpscheck","httpssites_power","httpunit","HttpUrlConnection","httrack","huaweisymantec","HubSpot ","Humanlinks","i2kconnect\\\/","Iblog","ichiro","Id-search","IdeelaborPlagiaat","IDG Twitter Links Resolver","IDwhois\\\/","Iframely","igdeSpyder","IlTrovatore","Image Fetch","Image Sucker","ImageEngine\\\/","ImageVisu\\\/","Imagga","imagineeasy","imgsizer","InAGist","inbound\\.li parser","InDesign%20CC","Indy Library","InetURL","infegy","infohelfer","InfoTekies","InfoWizards Reciprocal Link","inpwrd\\.com","instabid","Instapaper","Integrity","integromedb","Intelliseek","InterGET","internet_archive","Internet Ninja","InternetSeer","internetVista monitor","internetwache","intraVnews","IODC","IOI","iplabel","ips-agent","IPS\\\/[0-9]","IPWorks HTTP\\\/S Component","iqdb\\\/","Iria","Irokez","isitup\\.org","iskanie","isUp\\.li","iThemes Sync\\\/","IZaBEE","iZSearch","JAHHO","janforman","Jaunt\\\/","Jbrofuzz","Jersey\\\/","JetCar","Jigsaw","Jobboerse","JobFeed discovery","Jobg8 URL Monitor","jobo","Jobrapido","Jobsearch1\\.5","JoinVision Generic","JolokiaPwn","Joomla","Jorgee","JS-Kit","JustView","Kaspersky Lab CFR link resolver","Kelny\\\/","Kerrigan\\\/","KeyCDN","Keyword Density","Keywords Research","khttp\\\/","KickFire","KimonoLabs\\\/","Kml-Google","knows\\.is","KOCMOHABT","kouio","kubectl","kube-probe","kulturarw3","KumKie","L\\.webis","Larbin","Lavf\\\/","LeechFTP","LeechGet","letsencrypt","Lftp","LibVLC","LibWeb","Libwhisker","libwww","Licorne","Liferea\\\/","Lightspeedsystems","Lighthouse","Likse","Link Valet","link_thumbnailer","LinkAlarm\\\/","linkCheck","linkdex","LinkExaminer","linkfluence","linkpeek","LinkPreviewGenerator","LinkScan","LinksManager","LinkTiger","LinkWalker","Lipperhey","Litemage_walker","livedoor ScreenShot","LoadImpactRload","localsearch-web","LongURL API","looid\\.com","looksystems\\.net","ltx71","lua-resty-http","lwp-request","lwp-trivial","LWP::Simple","lycos","LYT\\.SR","mabontland","Mag-Net","MagpieRSS","Mail\\.Ru","MailChimp","Majestic12","makecontact\\\/","Mandrill","MapperCmd","marketinggrader","MarkMonitor","MarkWatch","Mass Downloader","masscan\\\/","Mata Hari","Mediametric","Mediapartners-Google","mediawords","MegaIndex\\.ru","MeltwaterNews","Melvil Rawi","MemGator","Metaspinner","MetaURI","MFC_Tear_Sample","Microsearch","Microsoft Office ","Microsoft Outlook","Microsoft Windows Network Diagnostics","Microsoft-WebDAV-MiniRedir","Microsoft Data Access","MIDown tool","MIIxpc","Mindjet","Miniature\\.io","Miniflux","Mister PiX","mixdata dot com","mixed-content-scan","Mixmax-LinkPreview","mixnode","Mnogosearch","mogimogi","Mojeek","Mojolicious \\(Perl\\)","Monit\\\/","monitis","Monitority\\\/","montastic","MonTools","Moreover","Morfeus Fucking Scanner","Morning Paper","MovableType","mowser","Mrcgiguy","MS Web Services Client Protocol","MSFrontPage","mShots","MuckRack\\\/","muhstik-scan","MVAClient","MxToolbox\\\/","nagios","Najdi\\.si","Name Intelligence","Nameprotect","Navroad","NearSite","Needle","Nessus","Net Vampire","NetAnts","NETCRAFT","NetLyzer","NetMechanic","NetNewsWire","Netpursual","netresearch","NetShelter ContentScan","Netsparker","NetTrack","Netvibes","NetZIP","Neustar WPM","NeutrinoAPI","NewRelicPinger","NewsBlur .*Finder","NewsGator","newsme","newspaper\\\/","NetSystemsResearch","Nexgate Ruby Client","NG-Search","Nibbler","NICErsPRO","Nikto","nineconnections","NLNZ_IAHarvester","Nmap Scripting Engine","node-superagent","node-urllib","node\\.io","Nodemeter","NodePing","nominet\\.org\\.uk","nominet\\.uk","Norton-Safeweb","Notifixious","notifyninja","NotionEmbedder","nuhk","nutch","Nuzzel","nWormFeedFinder","nyawc\\\/","Nymesis","NYU","Ocelli\\\/","Octopus","oegp","Offline Explorer","Offline Navigator","OgScrper","og-scraper","okhttp","omgili","OMSC","Online Domain Tools","OpenCalaisSemanticProxy","Openfind","OpenLinkProfiler","Openstat\\\/","OpenVAS","OPPO A33","Optimizer","Orbiter","OrgProbe\\\/","orion-semantics","Outlook-Express","Outlook-iOS","ow\\.ly","Owler","ownCloud News","OxfordCloudService","Page Valet","page_verifier","page scorer","page2rss","PageGrabber","PagePeeker","PageScorer","Pagespeed\\\/","Panopta","panscient","Papa Foto","parsijoo","Pavuk","PayPal IPN","pcBrowser","Pcore-HTTP","Pearltrees","PECL::HTTP","peerindex","Peew","PeoplePal","Perlu -","PhantomJS Screenshoter","PhantomJS\\\/","Photon\\\/","phpservermon","Pi-Monster","Picscout","Picsearch","PictureFinder","Pimonster","ping\\.blo\\.gs","Pingability","PingAdmin\\.Ru","Pingdom","Pingoscope","PingSpot","pinterest\\.com","Pixray","Pizilla","Plagger\\\/","Ploetz \\+ Zeller","Plukkie","plumanalytics","PocketImageCache","PocketParser","Pockey","POE-Component-Client-HTTP","Polymail\\\/","Pompos","Porkbun","Port Monitor","postano","PostmanRuntime","PostPost","postrank","PowerPoint\\\/","Priceonomics Analysis Engine","PrintFriendly","PritTorrent","Prlog","probethenet","Project 25499","prospectb2b","Protopage","ProWebWalker","proximic","PRTG Network Monitor","pshtt, https scanning","PTST ","PTST\\\/[0-9]+","Pulsepoint XT3 web scraper","Pump","Python-httplib2","python-requests","Python-urllib","Qirina Hurdler","QQDownload","QrafterPro","Qseero","Qualidator","QueryN Metasearch","queuedriver","Quora Link Preview","Qwantify","Radian6","RankActive","RankFlex","RankSonicSiteAuditor","Re-re Studio","ReactorNetty","Readability","RealDownload","RealPlayer%20Downloader","RebelMouse","Recorder","RecurPost\\\/","redback\\\/","ReederForMac","Reeder\\\/","ReGet","RepoMonkey","request\\.js","reqwest\\\/","ResponseCodeTest","RestSharp","Riddler","Rival IQ","Robosourcer","Robozilla","ROI Hunter","RPT-HTTPClient","RSSOwl","safe-agent-scanner","SalesIntelligent","Saleslift","Sendsay\\.Ru","SauceNAO","SBIder","scalaj-http","scan\\.lol","ScanAlert","Scoop","scooter","ScoutJet","ScoutURLMonitor","ScrapeBox Page Scanner","SimpleScraper","Scrapy","Screaming","ScreenShotService","Scrubby","Scrutiny\\\/","search\\.thunderstone","Search37","searchenginepromotionhelp","Searchestate","SearchExpress","SearchSight","Seeker","semanticdiscovery","semanticjuice","Semiocast HTTP client","Semrush","sentry\\\/","SEO Browser","Seo Servis","seo-nastroj\\.cz","seo4ajax","Seobility","SEOCentro","SeoCheck","SEOkicks","Seomoz","SEOprofiler","SEOsearch","seoscanners","seositecheckup","SEOstats","servernfo","sexsearcher","Seznam","Shelob","Shodan","Shoppimon","ShopWiki","ShortLinkTranslate","shrinktheweb","Sideqik","SimplePie","SimplyFast","Siphon","SISTRIX","Site-Shot\\\/","Site Sucker","Site24x7","SiteBar","Sitebeam","Sitebulb\\\/","SiteCondor","SiteExplorer","SiteGuardian","Siteimprove","SiteIndexed","Sitemap(s)? Generator","SitemapGenerator","SiteMonitor","Siteshooter B0t","SiteSnagger","SiteSucker","SiteTruth","Sitevigil","sitexy\\.com","SkypeUriPreview","Slack\\\/","slider\\.com","slurp","SlySearch","SmartDownload","SMRF URL Expander","SMUrlExpander","Snake","Snappy","SnapSearch","Snarfer\\\/","SniffRSS","sniptracker","Snoopy","SnowHaze Search","sogou web","SortSite","Sottopop","sovereign\\.ai","SpaceBison","SpamExperts","Spammen","Spanner","spaziodati","SPDYCheck","Specificfeeds","speedy","SPEng","Spinn3r","spray-can","Sprinklr ","spyonweb","sqlmap","Sqlworm","Sqworm","SSL Labs","ssl-tools","StackRambler","Statastico\\\/","StatusCake","Steeler","Stratagems Kumo","Stroke\\.cz","StudioFACA","StumbleUpon","suchen","Sucuri","summify","SuperHTTP","Surphace Scout","Suzuran","SwiteScraper","Symfony BrowserKit","Symfony2 BrowserKit","SynHttpClient-Built","Sysomos","sysscan","Szukacz","T0PHackTeam","tAkeOut","Tarantula\\\/","Taringa UGC","TarmotGezgin","Teleport","Telesoft","Telesphoreo","Telesphorep","Tenon\\.io","teoma","terrainformatica","Test Certificate Info","testuri","Tetrahedron","TextRazor Downloader","The Drop Reaper","The Expert HTML Source Viewer","The Knowledge AI","The Intraformant","theinternetrules","TheNomad","Thinklab","Thumbshots","ThumbSniper","Thumbor","timewe\\.net","TinEye","Tiny Tiny RSS","TLSProbe\\\/","Toata","topster","touche\\.com","Traackr\\.com","tracemyfile","Trackuity","TrapitAgent","Trendiction","Trendsmap","trendspottr","truwoGPS","TryJsoup","TulipChain","Turingos","Turnitin","tweetedtimes","Tweetminster","Tweezler\\\/","twibble","Twice","Twikle","Twingly","Twisted PageGetter","Typhoeus","ubermetrics-technologies","uclassify","UdmSearch","unchaos","unirest-java","UniversalFeedParser","Unshorten\\.It","Untiny","UnwindFetchor","updated","updown\\.io daemon","Upflow","Uptimia","Urlcheckr","URL Verifier","URLitor","urlresolver","Urlstat","URLTester","UrlTrends Ranking Updater","URLy Warning","URLy\\.Warning","Vacuum","Vagabondo","VB Project","vBSEO","VCI","via ggpht\\.com GoogleImageProxy","VidibleScraper","Virusdie","visionutils","vkShare","VoidEYE","Voil","voltron","voyager\\\/","VSAgent\\\/","VSB-TUO\\\/","Vulnbusters Meter","VYU2","w3af\\.org","W3C_Unicorn","W3C-checklink","W3C-mobileOK","WAC-OFU","Wallpapers\\\/[0-9]+","WallpapersHD","wangling","Wappalyzer","WatchMouse","WbSrch\\\/","WDT\\.io","web-capture\\.net","Web-sniffer","Web Auto","Web Collage","Web Enhancer","Web Fetch","Web Fuck","Web Pix","Web Sauger","Web spyder","Web Sucker","Webalta","Webauskunft","WebAuto","WebCapture","WebClient\\\/","webcollage","WebCookies","WebCopier","WebCorp","WebDataStats","WebDoc","WebEnhancer","WebFetch","WebFuck","WebGazer","WebGo IS","WebImageCollector","WebImages","WebIndex","webkit2png","WebLeacher","webmastercoffee","webmon ","WebPix","WebReaper","WebSauger","webscreenie","Webshag","Webshot","Website Quester","websitepulse agent","WebsiteQuester","Websnapr","WebSniffer","Webster","WebStripper","WebSucker","Webthumb\\\/","WebThumbnail","WebWhacker","WebZIP","WeLikeLinks","WEPA","WeSEE","wf84","Wfuzz\\\/","wget","WhatsApp","WhatsMyIP","WhatWeb","WhereGoes\\?","Whibse","WhoRunsCoinHive","Whynder Magnet","Windows-RSS-Platform","WinPodder","wkhtmlto","wmtips","Woko","woorankreview","Word\\\/","WordPress\\\/","worldping-api","WordupinfoSearch","wotbox","WP Engine Install Performance API","wpif","wprecon\\.com survey","WPScan","wscheck","Wtrace","WWW-Collector-E","WWW-Mechanize","WWW::Document","WWW::Mechanize","www\\.monitor\\.us","WWWOFFLE","x09Mozilla","x22Mozilla","XaxisSemanticsClassifier","Xenu Link Sleuth","XING-contenttabreceiver","xpymep([0-9]?)\\.exe","Y!J-(ASR|BSC)","Y\\!J-BRW","Yaanb","yacy","Yahoo Link Preview","YahooCacheSystem","YahooYSMcm","YandeG","Yandex(?!Search)","yanga","yeti","Yo-yo","Yoleo Consumer","yoogliFetchAgent","YottaaMonitor","Your-Website-Sucks","yourls\\.org","YoYs\\.net","YP\\.PL","Zabbix","Zade","Zao","Zauba","Zemanta Aggregator","Zend_Http_Client","Zend\\\\Http\\\\Client","Zermelo","Zeus ","zgrab","ZnajdzFoto","ZnHTTP","Zombie\\.js","Zoom\\.Mac","ZyBorg","[a-z0-9\\-_]*(bot|crawl|archiver|transcoder|spider|uptime|validator|fetcher|cron|checker|reader|extractor|monitoring|analyzer)"];

        var regex = new RegExp(patterns.join('|').trim(), 'i');

        return regex.test(s);


        //return this.isEmpty(s) ? false : s.match(/facebook|facebookexternalhit|quora|googlebot|google|bingbot|pinterest|tumblr|skype|yandexbot|ahrefsbot|msnbot|linkedin|linkedinbot|exabot|baidu|baiduspider|crawler|compspybot|yesupbot|paperlibot|tweetmemebot|semrushbot|gigabot|voilabot|adsbot-google|botlink|alkalinebot|araybot|undrip bot|borg-bot|boxseabot|yodaobot|admedia bot|ezooms.bot|confuzzledbot|coolbot|internet cruiser robot|yolinkbot|diibot|musobot|dragonbot|elfinbot|wikiobot|twitterbot|contextad bot|hambot|iajabot|news bot|irobot|socialradarbot|ko_yappo_robot|skimbot|psbot|rixbot|seznambot|careerbot|simbot|solbot|mail.ru_bot|spiderbot|blekkobot|bitlybot|techbot|void-bot|vwbot_k|diffbot|friendfeedbot|archive.org_bot|woriobot|crystalsemanticsbot|wepbot|spbot|tweetedtimes bot|mj12bot|who.is bot|psbot|robot|jbot|bbot|bot/ig);
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

        if (num < k) return num;

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

        if (padding)
            number = parseFloat(number).toFixed(~~padding);

        var parts = number.toString().split('.'),
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

        var stack = base.split('/'),
            url = relative.split('/');
        if (url[0] == '') {
            var matches = base.match(/^(https?:)?\/\/[^/]+/i);
            var domain = matches && matches[0];
            stack = [domain];
        }
        else {
            stack.pop();
        }

        for (var i = 0; i < url.length; i++) {
            if (url[i] == "." || url[i] == '')
                continue;
            if (url[i] == "..")
                stack.pop();
            else
                stack.push(url[i]);
        }
        return stack.join("/");
    },

    getHostName: function (url) {
        var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
            return match[2];
        } else {
            return null;
        }
    },


    // insiteLink: function (html, baseURL) {
    //     str = str.replace(/href="(.*?)"/g, (m, $1) => 'href="' + baseURL + encodeURIComponent($1) + '"');
    // },

    nofollow: function (html, whiteList) {
        var whiteList = whiteList || ['([^/]+\.)?morioh.com'];
        var str = '(<a\s*(?!.*\brel=)[^>]*)(href="https?://)((?!(?:' + whiteList.join('|') + '))[^"]+)"((?!.*\brel=)[^>]*)(?:[^>]*)>';

        return html.replace(new RegExp(str, 'igm'), '$1$2$3"$4 rel="nofollow">');
    },

    // const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>     s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))
    // objectID: function (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) {

    //     s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))
    // },

    getHashTags: function (inputText) {
        var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
        var matches = [];
        var match;

        while ((match = regex.exec(inputText))) {
            matches.push(match[1]);
        }

        return matches;
    },


    mirror: function (obj, map) {
        return this.reduce(obj, function (result, value, key) {
            key = map[key] || key;
            result[key] = value;
            return result;
        }, {});
    },

    toUnit: function (amount, from, to) {

        var UNITS = {
            'BTC': [1e8, 8],
            'btc': [1e8, 8],
            'mBTC': [1e5, 5],
            'uBTC': [1e2, 2],
            'bits': [1e2, 2],
            'satoshis': [1, 0],
            'sat': [1, 0]
        };

        if (!UNITS[from]) {
            throw new Error(`'${from}' is not a bitcoin unit`);
        }

        if (!UNITS[to]) {
            throw new Error(`'${to}' is not a bitcoin unit`);
        }

        if (Number.isNaN(amount)) {
            throw new Error(`'${amount}' is not a valid exchange`);
        }

        var val = parseInt((amount * UNITS[from][0]).toFixed());
        var result = val / UNITS[to][0];
        return parseFloat(result.toFixed(UNITS[to][1]));
    },

    toBTC: function (val) {
        return this.toUnit(val, 'sat', 'BTC');
    },
    toSAT: function (val) {
        return this.toUnit(val, 'BTC', 'sat');
    },

    hashCode: function (str) {
        var hash = 0;
        if (str.length == 0) return hash;
        for (var i = 0; i < str.length; i++) {
            var ch = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + ch;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    },

    nano: function (str) {

        var integer = this.hashCode(str);
        var binary = 62;
        var stack = [];
        var num;
        var result = '';
        var sign = integer < 0 ? '-' : '';
        var t = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        integer = Math.abs(integer);

        while (integer >= binary) {
            num = integer % binary;
            integer = Math.floor(integer / binary);
            stack.push(t[num]);
        }

        if (integer > 0) {
            stack.push(t[integer]);
        }

        for (var i = stack.length - 1; i >= 0; i--) {
            result += stack[i];
        }

        return (sign + result).replace('-', 'Z');
    },

    tiny: function (str) {
        return this.nano(str);
    },

    now: function () {
        return Math.floor(new Date().getTime() / 1000);
    },

    // Vue use
    install: function (Vue) {
        Vue.prototype._ = this;
        Vue._ = this;
    },
});

module.exports = _;