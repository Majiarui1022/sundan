Array.prototype.unique = function () {//鍘绘暟缁勯噸澶�
    return this.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4").replace(/,,+/g, ",").replace(/,$/, "").split(",");
}
var Iput = {
    confg: {
        hand: "0", //0瀵瑰儚浣嶇疆1榧犳爣浣嶇疆divID婊氬姩浣嶇疆
        idIframe: "PoPx", //榛樿鍙笉鐢ㄦ敼
        idBox: "PoPy", //榛樿鍙笉鐢ㄦ敼
        content: "", //浼犺繃鏉ョ殑鍐呭
        ok: null, //寮瑰嚭妗嗕箣鍚庢墽琛岀殑鍑芥暟
        id: null, //涓嶈兘涓虹┖涓€鑸紶this瀵瑰儚鑰屼笉鏄鍍廔D
        event: window.event, //杩欎釜蹇呭啓涓€鑸负e灏卞彲浠ヤ簡
        top: 0, //椤堕儴鍋忕Щ浣嶇疆
        left: 0, //宸﹂儴鍋忕Щ浣嶇疆
        bodyHeight: 0, //鍦ㄨposition:absolute鍏冪礌涓嬪緱鍒癏TML鐪熷疄楂樺害
        bodyWidth: 0,
        width: 0,
        soll: null,
        pop: null //鎸囧畾ID鐐瑰嚮鏃朵笉鍏抽棴
    },
    get: function (obj) { return document.getElementById(obj); },
    lft: function (e) {
        var l = 0;
        while (e) { l += e.offsetLeft; e = e.offsetParent; }
        return l
    },
    ltp: function (e) {
        var t = 0;
        while (e) { t += e.offsetTop; e = e.offsetParent; }
        return t
    },
    clear: function () {
        Iput.confg.hand = "0"; Iput.confg.ok = null; Iput.confg.top = 0; Iput.confg.left = 0; Iput.confg.bodyHeight = 0; Iput.confg.bodyWidth = 0; Iput.confg.width = 0; Iput.confg.pop = null;
    },
    stopBubble: function (e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();    //w3c
        } else {
            window.event.cancelBubble = true; //IE
        }
    },
    pop: function () {
        var $a = document.getElementsByTagName("body").item(0);
        var $c = document.createElement("iframe");
        var $b = document.createElement("div");
        $c.setAttribute('id', Iput.confg.idIframe);
        $c.setAttribute("src", "about:blank");
        $c.style.zindex = '100';
        $c.frameBorder = "0";
        $c.style.width = "0px";
        $c.style.height = "0px";
        $c.style.position = 'absolute';
        $b.setAttribute('id', Iput.confg.idBox);
        $b.setAttribute('align', 'left');
        $b.style.position = 'absolute';
        $b.style.background = 'transparent';
        $b.style.zIndex = '20000';
        if ($a) {
            if (Iput.get(Iput.confg.idIframe)) {
                Iput.colse();
            }
            $a.appendChild($c);
            if ($c) {
                $c.ownerDocument.body.appendChild($b);
            }
            Iput.get(Iput.confg.idBox).innerHTML = Iput.confg.content;
            Iput.drice(Iput.confg.event);
        }

        if (!document.all) {
            window.document.addEventListener("click", Iput.hide, false);
        }
        else {
            window.document.attachEvent("onclick", Iput.hide);
        }
    },
    drice: function (e) {
        var bodyHith = Iput.confg.bodyHeight == 0 ? document.body.scrollHeight : Iput.confg.bodyHeight;
        var bodywidth = Iput.confg.bodyWidth == 0 ? document.body.scrollWidth : Iput.confg.bodyWidth;
        if (!e) e = window.event;
        var top = 0, left = 0;
        var a = Iput.get(Iput.confg.idBox);
        var b = Iput.get(Iput.confg.idIframe);
        var c = Iput.confg.id.offsetHeight;
        var d = Iput.confg.id.offsetWidth;
        var w = 0;
        var st = 0;
        var sl = 0;
        if (Iput.confg.soll != null) {
            st = document.getElementById(Iput.confg.soll).scrollTop;
            sl = document.getElementById(Iput.confg.soll).scrollLeft;
        }
        if (Iput.get(Iput.confg.idIframe)) {
            if (Iput.confg.hand == "1") {
                top = Iput.confg.top + document.body.scrollTop + document.documentElement.scrollTop + e.clientY;
                left = Iput.confg.left + e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                if (a.offsetHeight + top > bodyHith) { top = top - a.offsetHeight + Iput.get(Iput.confg.idBox).firstChild.offsetHeight; }
                if (a.offsetWidth + left > bodywidth) { left = left - a.offsetWidth + Iput.get(Iput.confg.idBox).firstChild.offsetWidth; }
                a.style.top = top - st + "px";
                b.style.top = top - st + "px";
                a.style.left = left - sl + "px";
                b.style.left = left - sl + "px";
            }
            else if (Iput.confg.hand == "0") {
                w = Iput.confg.id.offsetWidth + "px";
                a.style.width = w;
                b.style.width = w;
                height = c;
                top = Iput.confg.top + Iput.ltp(Iput.confg.id);
                left = Iput.confg.left + Iput.lft(Iput.confg.id);
                if (a.firstChild.offsetHeight + top + c > bodyHith) { top = top - a.firstChild.offsetHeight - c; }
                if (a.firstChild.offsetWidth + left > bodywidth) { left = left - a.firstChild.offsetWidth + d; }
                b.style.top = top - st + "px";
                a.style.top = top - st + height + "px";
                b.style.left = left - sl + "px";
                a.style.left = left - sl + "px";
            }
            else {
                height = c;
                top = Iput.confg.top - Iput.get(Iput.confg.hand).scrollTop + Iput.ltp(Iput.confg.id);
                left = Iput.confg.left - Iput.get(Iput.confg.hand).scrollLeft + Iput.lft(Iput.confg.id);

                if (a.offsetHeight + top > bodyHith) { top = top - a.offsetHeight - c; }
                if (a.offsetWidth + left > bodywidth) { left = left - a.offsetWidth - d; }

                b.style.top = top - st + height + "px";
                a.style.top = top - st + height + "px";
                b.style.left = left - sl + "px";
                a.style.left = left - sl + "px";
            }
        }
    },
    show: function () {
        var config = arguments[0]; var that = Iput.confg;
        Iput.clear();
        for (var i in that) { if (config[i] != undefined) { that[i] = config[i]; } };
        Iput.pop();
        if (Iput.confg.ok != null) {
            Iput.action(Iput.confg.ok());
        }
    },
    colse: function () {
        if (Iput.get(Iput.confg.idIframe)) {
            document.body.removeChild(Iput.get(Iput.confg.idBox));
            document.body.removeChild(Iput.get(Iput.confg.idIframe));
        }
        if (Iput.get(Iput.confg.pop)) {
            Iput.get(Iput.confg.pop).style.display = "none";
        }
    },
    $colse: function () { Iput.colse(); },
    hide: function (e) {//鐐瑰嚮浠讳綍澶勫叧闂眰
        e = window.event || e;
        var srcElement = e.srcElement || e.target;
        if (Iput.confg.event == undefined) {//杈撳叆鏃剁敤,鑸湪娌′紶鍏put.confg.event璇峰喌涓嬩娇鐢�
            Iput.colse();
        }
        else {
            var a = Iput.confg.event.srcElement || Iput.confg.event.target;
            var b = Iput.get(Iput.confg.pop);
            if (a != srcElement) { Iput.colse(); }
            if (b != null) {
                if (b != srcElement && a != srcElement) { Iput.colse(); }
            }
        }
        if (Iput.get(Iput.confg.idIframe)) {
            Iput.get(Iput.confg.idIframe).onclick = function (e) { Iput.stopBubble(e); };
            Iput.get(Iput.confg.idBox).onclick = function (e) { Iput.stopBubble(e); };
        }
        if (Iput.get(Iput.confg.pop)) {
            Iput.get(Iput.confg.pop).onclick = function (e) { Iput.stopBubble(e); };
        }

    },
    action: function (obj) {
        eval(obj);
    },
    cookie: {
        Set: function (name, val) {
            var Days = 30;                          //姝� cookie 灏嗚淇濆瓨 30 澶�
            var exp = new Date();                  //new Date("December 31, 9998");
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(val) + ";expires=" + exp.toGMTString() + "; path=/";
        },
        Get: function (name) {
            var start = document.cookie.indexOf(name);
            var end = document.cookie.indexOf(";", start);
            return start == -1 ? null : unescape(document.cookie.substring(start + name.length + 1, (end > start ? end : document.cookie.length)));
        },
        Del: function (name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = this.GetCookie(name);
            if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    },
    ischeck: function (bol) {
        var objs = form1.getElementsByTagName("input");
        if (bol) {
            for (var i = 0; i < objs.length; i++) { if (objs[i].type.toLowerCase() == "checkbox") { objs[i].checked = true; } }
        }
        else {
            for (var i = 0; i < objs.length; i++) { if (objs[i].type.toLowerCase() == "checkbox") { objs[i].checked = false; } }
        }
    },
    contains: function (star, end, isIgnoreCase) {
        if (isIgnoreCase) {
            star = star.toLowerCase();
            end = end.toLowerCase();
        }
        var startChar = end.substring(0, 1);
        var strLen = end.length;
        for (var j = 0; j < star.length - strLen + 1; j++) {
            if (star.charAt(j) == startChar)//濡傛灉鍖归厤璧峰瀛楃,寮€濮嬫煡鎵�
            {
                if (star.substring(j, j + strLen) == end)//濡傛灉浠巎寮€濮嬬殑瀛楃涓巗tr鍖归厤锛岄偅ok
                {
                    return true;
                }
            }
        }
        return false;
    },
    gData: function (name, value) {
        var top = window.top, cache = top['_CACHE'] || {};
        top['_CACHE'] = cache;
        return value ? cache[name] = value : cache[name];
    },
    rData: function (name) {
        var cache = window.top['_CACHE'];
        if (cache && cache[name]) delete cache[name];
    }
}