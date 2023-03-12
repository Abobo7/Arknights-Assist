(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("frida-il2cpp-bridge");

const e = {
  'Version': '2.0.1',
  'IsBiliChannel': true, //是否是b服
  'Proxy': false, //启用besthttp代理
  'ProxyAddress': 'http://192.168.2.5:11240',
  'ShowEnemyHp': false, //显示敌人血量
  'PP': false, //添加额外后处理
  'ShowBattleTimeInfo': false, //战斗中显示时间
  'SpeedLevel3': false, //战斗中三倍速
  'SpeedLevel16': false, //战斗中十六倍速
  'EnableTAS': false, //启用TAS和敌人信息面板
  'LogToAdb': true,
  'LogTag': 'ArknightsHook',
  'Il2CppHookDelay': 5000,
  'FindFontDelay': 10000,
  'GlobalFont': 'Novecentowide-Normal',
  'KeyBinding': { //按键绑定
      'TAS': {
          'Normal': 'C',
          'SingleFrame': 'Alpha1',
          'DoubleFrame': 'Alpha2',
          'PlayingOnDown': 'F',
          'PlayingOnUp': 'R',
          'CONTROL': 'X',
      },
      'EnemyHud': {
          'ShowInfo': 'Z'
      },
      'BattleSpeedLevel': {
          'THREE': 'Alpha3',
          'FOUR': 'Alpha4'
      }
  }
}, t = "G1szNm0gICAgX19fICAgIF9fICAgICAgICAgICAgICBfICAgICAgIF9fICAgIF9fICAgICAgG1ttChtbMzZtICAgLyAgIHwgIC8gL19fX19fX19fX19fICAoXylfX18gXy8gL18gIC8gL19fX19fXxtbbQobWzE7MzZtICAvIC98IHwgLyAvL18vIF9fXy8gX18gXC8gLyBfXyBgLyBfXyBcLyBfXy8gX19fLxtbbQobWzE7MzZtIC8gX19fIHwvICw8IC8gLyAgLyAvIC8gLyAvIC9fLyAvIC8gLyAvIC9fKF9fICApIBtbbQobWzE7MzRtL18vICB8Xy9fL3xfL18vICAvXy8gL18vXy9cX18sIC9fLyAvXy9cX18vX19fXy8gIBtbbQobWzM0bSAgICAgICAgICAgICAgICAgICAgICAgICAvX19fXy8gICAgICAgICAgICAgICAgICAbW20KG1sxOzMwbS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0bW20KG1sxOzMybUFya25pZ2h0cyBBc3Npc3QgU2NyaXB0IFYyLjAuMRtbbSAbWzQ7MzJtKEZvciBBcmtuaWdodHMgdjEuOS44MSB8IHRlc3RlZCBvbiBGcmlkYSB2MTYuMC4xMSkbW20KG1sxOzMzbUF1dGhvcmVkIGJ5IENoYW9tZW5nQ0ZYG1tt";

var o, n, i, a, l, m, s, r;

function d(e, t, n) {
  for (let i = 0; i < e.length; i++) try {
    e[i](), o.logWell(`${t[i]}() is done.`, n);
  } catch (e) {
    o.logError(`An error occurred while calling ${t[i]}(): ` + e.toString(), n);
  }
}

!function(t) {
  function o(e = (new Date).getTime(), t = "YY-MM-DD hh:mm:ss") {
    let o = new Date(e), n = o.getFullYear(), i = o.getMonth() + 1, a = o.getDate(), l = o.getHours(), m = o.getMinutes(), s = o.getSeconds(), r = Array.apply(null, Array(10)).map((function(e, t, o) {
      return "0" + t;
    }));
    return t.replace(/YY/g, n.toString()).replace(/MM/g, r[i] || i).replace(/DD/g, r[a] || a).replace(/hh/g, r[l] || l).replace(/mm/g, r[m] || m).replace(/ss/g, r[s] || s);
  }
  function n(t) {
    console.log(t), e.LogToAdb && Java.use("android.util.Log").d(e.LogTag, t);
  }
  function i() {
    return "[1;30m[" + o((new Date).getTime(), "hh:mm:ss") + "] -[m ";
  }
  function a(e = undefined) {
    return null == e ? "" : `[1;35m${e} -[m `;
  }
  t.formatDate = o, t.log = function(e, t = undefined) {
    n(i() + a(t) + e);
  }, t.logDebug = function(e, t = undefined) {
    n(i() + a(t) + `[33;47m${e}[m`);
  }, t.logNormal = function(e, t = undefined) {
    n(i() + a(t) + `[1;34m${e}[m`);
  }, t.logWell = function(e, t = undefined) {
    n(i() + a(t) + `[1;32m${e}[m`);
  }, t.logWarning = function(e, t = undefined) {
    n(i() + a(t) + `[1;33m${e}[m`);
  }, t.logError = function(e, t = undefined) {
    n(i() + a(t) + `[1;31m${e}[m`);
  };
}(o || (o = {})), function(e) {
  e.instantiate = function(e, ...t) {
    let o = e.new();
    return o.method(".ctor").invoke(...t), o;
  }, e.instantiateOverload = function(e, t, ...o) {
    let n = e.new();
    return n.method(".ctor").overload(...t).invoke(...o), n;
  }, e.readCSharpString = function(e) {
    return e.isNull() ? "null" : new Il2Cpp.String(e).content;
  }, e.getFunctionByAddress = function(e, t) {
    let n = new NativePointer(e.base.add(t).toString());
    return o.log("[1;32m[√] Hook function[m [33m[" + t.toString() + "][m [1;32mat[m [1;30m" + n.toString() + "[m"), 
    n;
  }, e.getModuleByName = function(e) {
    let t = Process.getModuleByName(e);
    return o.log("[1;32m[√] Find module[m [33m[" + e + "][m [1;32mat[m [1;30m" + t.base.toString() + "[m"), 
    t;
  }, e.loadModuleByPath = function(e) {
    let t = Module.load(e);
    return o.log("[1;32m[√] Load module[m [33m[" + e + "][m [1;32mat[m [1;30m" + t.base.toString() + "[m"), 
    t;
  }, e.getEnumName = function(e, t) {
    const o = Il2Cpp.Image.corlib.class("System.Enum").method("ToObject");
    return new Il2Cpp.String(o.overload("System.Type", "System.Int32").invoke(t.type.object, e).method("ToString").invoke()).content;
  }, e.getTypeString = function(e) {
    return e.method("GetType").invoke().method("ToString").invoke().content;
  }, e.traceClassByName = function(e, t = (e => "Update" != e.name), n = !0, i = Il2Cpp.Domain.assembly("Assembly-CSharp").image) {
    let a = i.class(e);
    Il2Cpp.trace().classes(a).filterMethods(t).and().attach(n ? "detailed" : "full"), 
    o.log("[1;36m[-] 跟踪类:[m [1;33m" + e + "[m");
  }, e.traceClass = function(e, t = (e => "Update" != e.name), n = !0) {
    Il2Cpp.trace().classes(e).filterMethods(t).and().attach(n ? "detailed" : "full"), 
    o.log("[1;36m[-] 跟踪类:[m [1;33m" + e.name + "[m");
  }, e.traceFunc = function(e, t, o = !0, n = Il2Cpp.Domain.assembly("Assembly-CSharp").image) {
    let i = n.class(e), a = Il2Cpp.trace();
    t.forEach((e => {
      a.methods(i.method(e)).and().attach(o ? "detailed" : "full");
    }));
  }, e.dumpso = function(e) {
    let t = Il2Cpp.applicationDataPath + "/" + e.base.toString() + "_" + e.size.toString() + "_" + e.name, n = new File(t, "wb");
    Memory.protect(e.base, e.size, "rwx"), n.write(e.base.readByteArray(e.size)), n.flush(), 
    n.close(), o.log("[1;36m[" + e.name + "] 已导出到路径:[m [1;34m" + t + "[m");
  };
}(n || (n = {})), function(e) {
  e.readFile = function(e) {
    return Il2Cpp.Image.corlib.class("System.IO.File").method("ReadAllText").overload("System.String").invoke(Il2Cpp.String.from(e));
  }, e.writeFile = function(e, t) {
    return Il2Cpp.Image.corlib.class("System.IO.File").method("WriteAllText").overload("System.String", "System.String").invoke(Il2Cpp.String.from(e), Il2Cpp.String.from(t));
  }, e.isFileExists = function(e) {
    return Il2Cpp.Image.corlib.class("System.IO.File").method("Exists").invoke(Il2Cpp.String.from(e));
  };
}(i || (i = {})), function(e) {
  function t(e) {
    return [ e.field("x").value, e.field("y").value ];
  }
  function i(e) {
    return [ e.field("x").value, e.field("y").value, e.field("z").value ];
  }
  e.objToString = function(e) {
    return e.isNull() ? "null" : e.method("ToString").invoke().content;
  }, e.saveAllObjectsInSence = function() {
    let e = Il2Cpp.Domain.assembly("UnityEngine.CoreModule").image;
    !function(t) {
      let i = t.box().method("GetRootGameObjects").overload().invoke(), a = t.box().method("get_name").invoke().content + "\n";
      function l(t, o, i = 0) {
        for (let e = 0; e < 6 * i; e++) o += " ";
        o += "└──" + t.method("get_name").invoke().content + " (";
        let a = t.method("GetComponents").invoke(e.class("UnityEngine.Component").type.object);
        for (let e = 0; e < a.length; e++) o += (0 == e ? "" : ", ") + n.getTypeString(a.get(e));
        o += ")\n";
        let m = t.method("get_childCount").invoke();
        for (let e = 0; e < m; e++) o = l(t.method("GetChild").invoke(e), o, i + 1);
        return o;
      }
      for (let e = 0; e < i.length; e++) a = l(i.get(e).method("get_transform").invoke(), a);
      let m = Il2Cpp.applicationDataPath + "/" + o.formatDate((new Date).getTime(), "hh-mm-ss") + ".txt", s = new File(m, "w");
      s.write(a), s.flush(), s.close();
    }(e.class("UnityEngine.SceneManagement.SceneManager").method("GetActiveScene").invoke());
  }, e.getFields = function(e) {
    let t = e.class.fields;
    o.log(`find ${t.length} fields.`), t.forEach((t => {
      let n = t.name;
      try {
        let t = e.field(n).value;
        o.log(`[1;34m${n}[m - [1;36m${t}[m`);
      } catch {
        o.log(`[33mError in ${n}[m`);
      }
    }));
  }, e.vector2ToTuple = t, e.vector3ToTuple = i, e.logRectTransform = function(e) {
    let n = e.method("GetComponent").invoke(Il2Cpp.Domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.RectTransform").type.object), a = n.method("get_sizeDelta").invoke(), l = n.method("get_anchorMax").invoke(), m = n.method("get_anchorMin").invoke(), s = n.method("get_anchoredPosition").invoke(), r = n.method("get_localScale").invoke();
    o.log(`[1;34mRectTransform in[m [1;36m${e.toString()}[m[1;34m:[m\n[1;34msizeDelta[m - [1;36m(${t(a)})[m\n[1;34manchorMax[m - [1;36m(${t(l)})[m\n[1;34manchorMin[m - [1;36m(${t(m)})[m\n[1;34manchoredPosition[m - [1;36m(${t(s)})[m\n[1;34mlocalScale[m - [1;36m(${i(r)})[m`);
  }, e.getTransformPath = function(e) {
    let t = e.method("get_transform").invoke(), o = "";
    do {
      o = "/" + t.method("get_name").invoke().content + o, t = t.method("get_parent").invoke();
    } while (!t.isNull());
    return o;
  };
}(a || (a = {})), function(e) {
  function t(e) {
    let t = [];
    for (var o = 0; o < e.length; o += 2) t.push(parseInt(e.substring(o, 2), 16));
    return t;
  }
  e.hexStringTobytes = t, e.hexStringToPtr = function(e) {
    var o = t(e);
    let n = Il2Cpp.alloc(o.length);
    return n.writeByteArray(o), n;
  };
}(l || (l = {})), function(e) {
  e.getAppSignature = function() {
    let e = Java.use("com.unity3d.player.UnityPlayer").currentActivity.value, t = e.getPackageManager().getPackageInfo(e.getPackageName(), Java.use("android.content.pm.PackageManager").GET_SIGNATURES.value).signatures.value[0], o = Java.use("java.security.MessageDigest").getInstance("MD5").digest(t.toByteArray());
    return Array.prototype.map.call(o, (e => ("00" + e.toString(16)).slice(-2))).join("");
  };
}(m || (m = {})), function(t) {
  function n() {
    Java.use("java.lang.reflect.Field").isAnnotationPresent.implementation = function(e) {
      return ("com.gsc.base.annotations.RequestParam" != e.getName() || "sdk_ver" != this.getName()) && this.isAnnotationPresent(e);
    };
    Java.use("com.http.lib.request.Request").a.overload("okhttp3.Response", "w7").implementation = function(e, t) {
      return !0;
    };
  }
  function i() {
    Java.use("com.hg.sdk.MTPProxyApplication").onProxyCreate.implementation = () => {};
    Java.use("com.hg.sdk.MTPDetection").onUserLogin.implementation = (e, t, o, n) => {};
  }
  function a() {
    Java.use("com.base.trackingdata.Track").init.implementation = (e, t, o, n, i, a, l, m, s, r, d, c) => {};
  }
  function l() {
    Java.use("com.gsc.cashier_h5.mvp.b").a.overload("java.lang.String", "com.gsc.base.model.OrderReqModel", "com.gsc.base.model.UserInfoModel").implementation = function(e, t, o) {
      let n = this.a.overload("java.lang.String", "com.gsc.base.model.OrderReqModel", "com.gsc.base.model.UserInfoModel").apply(this, arguments);
      return n.put("sdk_ver", "5.6.2"), n;
    };
    Java.use("com.gsc.minor_anti_pay.MinorAntiPayActivity").b.overload("com.gsc.minor_anti_pay.model.AntiPayResModel").implementation = function(e) {
      this.b.overload("com.gsc.minor_anti_pay.model.AntiPayResModel").call(this);
    };
  }
  t.main = function() {
    o.logNormal("[JavaHook] Starting java layer hook..."), d(e.IsBiliChannel ? [ i, n, a, l ] : [ i ], e.IsBiliChannel ? [ "ACESDKHook", "biliGameSDKHook", "biliTrackHook", "biliPaymentHook" ] : [ "ACESDKHook" ], "[JavaHook]");
  };
}(s || (s = {})), function(t) {
  let l, s, r, c, g, v, h, p, u, k, f, y, S, C, _, I, b, A, T, U, x, F, P, E, D, O, w, L, B, N, H, M, G, j, R, z, $, X, J, K, V, W, q, Y = null, Z = null, Q = !1;
  function ee() {
    l = Il2Cpp.Domain.assembly("UnityEngine.CoreModule").image, s = Il2Cpp.Domain.assembly("Assembly-CSharp").image, 
    r = Il2Cpp.Domain.assembly("Assembly-CSharp-firstpass").image, c = Il2Cpp.Domain.assembly("ThirdPartyAssembly").image, 
    g = Il2Cpp.Domain.assembly("UnityEngine.UI").image, v = Il2Cpp.Domain.assembly("UnityEngine.UIModule").image, 
    h = Il2Cpp.Domain.assembly("UnityEngine.Physics2DModule").image, p = Il2Cpp.Image.corlib, 
    u = l.class("UnityEngine.Vector3"), k = l.class("UnityEngine.Vector2"), f = l.class("UnityEngine.Color"), 
    y = l.class("UnityEngine.Input"), S = l.class("UnityEngine.KeyCode"), C = y.method("GetKeyDown"), 
    _ = y.method("GetKeyUp"), I = y.method("GetKey"), b = l.class("UnityEngine.Input"), 
    A = l.class("UnityEngine.Camera"), T = h.class("UnityEngine.Physics2D"), U = l.class("UnityEngine.Mathf"), 
    x = s.class("Torappu.Battle.Enemy"), F = l.class("UnityEngine.GameObject"), P = s.class("Torappu.DataConvertUtil"), 
    E = s.class("Torappu.FormatUtil"), D = s.class("Torappu.CharacterUtil"), O = s.class("Torappu.AudioManager"), 
    w = O.method("PlaySoundFx");
    const e = O.nested("FXCategory").field("FX_UI").value;
    N = () => {
      w.invoke(Il2Cpp.String.from("Audio/Sound_Beta_2/General/g_ui/g_ui_btn_n"), 1, 0, !1, e, !1, ptr(0));
    }, H = () => {
      w.invoke(Il2Cpp.String.from("Audio/Sound_beta_2/General/g_ui/g_ui_pageentrance"), 1, 0, !1, e, !1, ptr(0));
    }, M = S.field("C").value, G = S.field("Alpha1").value, j = S.field("Alpha2").value, 
    R = S.field("F").value, z = S.field("R").value, $ = S.field("X").value, X = S.field("Z").value, 
    J = S.field("Alpha3").value, K = S.field("Alpha4").value;
  }
  function te() {
    B = Il2Cpp.applicationDataPath + "/accountData.cfx.json", i.isFileExists(B) || i.writeFile(B, '{"ShowHp":false,"Proxy":{"enable":false,"address":"http://x.x.x.x:port"},"Channel":{},"Game":{}}'), 
    L = JSON.parse(i.readFile(B).content);
  }
  function oe() {
    L = JSON.parse(i.readFile(B).content);
  }
  function ne() {
    i.writeFile(B, JSON.stringify(L));
  }
  function ie() {
    if (e.Proxy || L.Proxy.enable) {
      let t = e.Proxy ? e.ProxyAddress : L.Proxy.address, i = n.instantiateOverload(Il2Cpp.Domain.assembly("System").image.class("System.Uri"), [ "System.String" ], Il2Cpp.String.from(t)), a = n.instantiateOverload(c.class("BestHTTP.HTTPProxy"), [ "System.Uri", "BestHTTP.Authentication.Credentials", "System.Boolean", "System.Boolean", "System.Boolean" ], i, ptr(0), !0, !0, !1);
      c.class("BestHTTP.HTTPManager").method("set_Proxy").invoke(a), o.logWell(`Global proxy has been set to: [1;36m${t}[m`, "[Il2CppHook]>[NetworkHook]"), 
      s.class("Torappu.Network.Certificate.CertificateHandlerFactory").nested("BouncyCastleCertVerifyer").method("IsValid").implementation = function(e, t) {
        return "ak.hypergryph.com" != e.method("get_Host").invoke().content;
      };
    }
  }
  function ae() {
    s.class("Torappu.NativeUtil").method("LoadApplicationSign").implementation = function() {
      return Il2Cpp.String.from("4502A02A00395DEC05A4134AD593224D");
    };
  }
  function le() {
    const e = l.class("UnityEngine.Application").method("CallLogCallback"), t = l.class("UnityEngine.LogType");
    Interceptor.attach(n.getFunctionByAddress(Il2Cpp.module, e.relativeVirtualAddress), {
      onEnter: e => {
        let i = n.getEnumName(e[3].toInt32(), t), a = "m";
        switch (i) {
         case "Error":
          a = "31m";
          break;

         case "Assert":
          a = "36m";
          break;

         case "Warning":
          a = "33m";
          break;

         case "Log":
          a = "34m";
          break;

         case "Exception":
          a = "31;43m";
        }
        o.log("[1;" + a + "<" + i + "> from Unity:\n" + n.readCSharpString(e[1])?.replace(/<\/*color.*?>/g, "") + "[m\n    [1;30m" + n.readCSharpString(e[2])?.replace(/\n/g, "\n    ") + "[m");
      }
    });
  }
  function me() {
    if (setTimeout((() => {
      let t = l.class("UnityEngine.Resources").method("FindObjectsOfTypeAll").invoke(Il2Cpp.Domain.assembly("UnityEngine.TextRenderingModule").image.class("UnityEngine.Font").type.object);
      for (let n = 0; n < t.length; n++) {
        let i = t.get(n);
        i.toString() == e.GlobalFont + " (UnityEngine.Font)" && (V = i, o.logWell(`Using Font: [1;36m${V.toString()}[m`, "[Il2CppHook]>[UIBaseHook]"));
      }
    }), e.FindFontDelay), e.ShowEnemyHp || L.ShowHp) try {
      !function() {
        let e = s.class("Torappu.UI.UITextSlider").nested("TextMode").field("A_SLASH_B");
        s.class("Torappu.Battle.UI.UIUnitHUD").method("Awake").implementation = function() {
          this.method("Awake").invoke();
          let t = this.field("_hpSlider").value, o = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("Text(Clone)"));
          o.method("get_transform").invoke().method("SetParent").invoke(t.method("get_transform").invoke());
          let i = o.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object), a = o.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
          a.method("set_anchoredPosition3D").invoke(n.instantiate(u, 155, -15, 0).unbox()), 
          a.method("set_localScale").invoke(u.method("get_one").invoke()), a.method("set_sizeDelta").invoke(n.instantiate(k, 400, 20).unbox()), 
          i.method("set_font").invoke(V), i.method("set_fontSize").invoke(16), i.field("m_Color").value = n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 1, 0, 0, 1).unbox(), 
          t.field("_text").value = i, t.field("_textMode").value = e.value;
        }, s.class("Torappu.Battle.UI.UIUnitHUD").method("Attach").implementation = function(e) {
          this.field("_hpSlider").value.field("_text").value.method("get_gameObject").invoke().method("SetActive").invoke(e.class.type != s.class("Torappu.Battle.Character").type && e.class.type != s.class("Torappu.Battle.Token").type), 
          this.method("Attach").invoke(e);
        };
      }(), o.logWell("EnemyHpSliderHook() is done.", "[Il2CppHook]");
    } catch (e) {
      o.logError("An error occurred while calling EnemyHpSliderHook(): " + e.toString(), "[Il2CppHook]");
    }
  }
  function se() {
    var e = "-1", t = "-1";
    let i = null;
    const a = s.class("Torappu.UI.Login.LoginViewController");
    let l = a.nestedClasses;
    for (let e = 0; e < l.length; e++) {
      const t = l[e];
      if (t.name.includes("<DoSDKLogin>c__AnonStorey")) {
        i = t.method("<>m__0");
        break;
      }
    }
    let m = null, r = s.class("Torappu.SDK.U8ExternalTools").nestedClasses;
    for (let e = 0; e < r.length; e++) {
      const t = r[e];
      if (t.name.includes("<SendSDKAuthRequest>c__AnonStorey")) {
        m = t.method("<>m__0");
        break;
      }
    }
    let d = a.method("_UpdateSDKIdAndLogin"), c = a.method("_LoginServiceSuccess");
    const g = s.class("Torappu.Network.Networker");
    let v = g.method("_PostWithProperNetworkUtil");
    Interceptor.attach(n.getFunctionByAddress(Il2Cpp.module, v.relativeVirtualAddress), {
      onEnter: e => {
        let n = new Il2Cpp.String(e[1]).content;
        o.logNormal(`Post Url: [1;36m${n}[m`, "[NetworkHook]"), "-1" == t || n.includes("as.hypergryph.com") || n.includes("/account/login") || (L.Game[t].seqnum = g.method("get_instance").invoke().field("m_seqNum").value + 1, 
        ne());
      }
    }), i && (i.implementation = function(t) {
      var o = JSON.parse(t.content);
      e = o.uid, oe(), e in L.Channel ? L.Channel[e].accessToken = o.access_token : L.Channel[e] = {
        accessToken: o.access_token,
        gameUid: "-1"
      }, ne(), this.method(i?.name).invoke(t);
    }), m && (m.implementation = function(n) {
      var i = n.field("responseCode").value;
      if (o.logNormal(`SDK Login with status ${i}.`, "[LoginHook]"), oe(), 400 == i && "-1" != L.Channel[e].gameUid && L.Channel[e].gameUid in L.Game) t = L.Channel[e].gameUid, 
      n.field("responseCode").value = 200, n.field("text").value = Il2Cpp.String.from(`{"result":0,"error":"","uid":"${t}","channelUid":${e},"token":"token","isGuest":0,"extension":"{\\"nickName\\":\\"doctor\\"}"}`), 
      n.field("isError").value = !1, n.field("error").value = ptr(0); else if (!n.field("isError").value) {
        var a = JSON.parse(n.field("text").value.content);
        e = a.channelUid.toString(), t = a.uid, L.Channel[e].gameUid = t, ne();
      }
      this.method(m?.name).invoke(n);
    });
    const h = s.class("Torappu.LoginResponse");
    d.implementation = function(e, o) {
      if (oe(), "token" == o.content) {
        this.method("_UpdateSDKUID").invoke(e);
        var i = n.instantiate(h);
        i.field("result").value = 0, i.field("uid").value = Il2Cpp.String.from(t), i.field("secret").value = Il2Cpp.String.from(L.Game[t].secret), 
        i.field("serviceLicenseVersion").value = 0;
        var a = g.method("get_instance").invoke(), l = L.Game[t].seqnum;
        a.field("m_seqNum").value = l, a.field("m_latestSucceedSeqNum").value = l, a.field("m_lastSeqNumFailed").value = 0, 
        this.method("_LoginServiceSuccess").invoke(i);
      } else this.method("_UpdateSDKIdAndLogin").invoke(e, o);
    }, c.implementation = function(e) {
      var t = e.field("uid").value.content;
      oe(), t in L.Game ? L.Game[e.field("uid").value.content].secret = e.field("secret").value.content : L.Game[e.field("uid").value.content] = {
        secret: e.field("secret").value.content,
        seqnum: 0
      }, ne(), this.method("_LoginServiceSuccess").invoke(e);
    };
  }
  function re() {
    if (!e.EnableTAS) return;
    let t, i;
    !function(e) {
      e[e.Ctor = 0] = "Ctor", e[e.Playing = 1] = "Playing", e[e.NotPlaying = 2] = "NotPlaying";
    }(t || (t = {})), function(e) {
      e[e.Normal = 0] = "Normal", e[e.SingleFrame = 1] = "SingleFrame", e[e.DoubleFrame = 2] = "DoubleFrame", 
      e[e.PlayingOnDown = 3] = "PlayingOnDown", e[e.PlayingOnUp = 4] = "PlayingOnUp";
    }(i || (i = {}));
    t.NotPlaying;
    var a = i.Normal;
    const m = s.class("Torappu.Battle.BattleController"), r = s.class("Torappu.Battle.UI.UIController"), d = m.method("get_fixedPlayTime"), c = m.method("get_fixedFrameCnt"), v = m.method("Awake"), h = r.method("Awake");
    var p, f, y, S, I, b;
    Interceptor.attach(n.getFunctionByAddress(Il2Cpp.module, v.relativeVirtualAddress), {
      onEnter: e => {
        Y = new Il2Cpp.Object(e[0]), S = Y.method("set_speedLevel"), I = Y.method("set_timeScale"), 
        f = Y.method("get_isPlaying"), b = Y.method("_OnSpeedLevelChanged");
      }
    });
    var A = null, T = null;
    Interceptor.attach(n.getFunctionByAddress(Il2Cpp.module, h.relativeVirtualAddress), {
      onEnter: i => {
        if (Z = new Il2Cpp.Object(i[0]), p = Z.method("get_isPaused"), y = Z.method("SetPaused"), 
        t.Ctor, e.PP && function() {
          const e = Il2Cpp.Domain.assembly("Unity.Postprocessing.Runtime").image;
          let t = l.class("UnityEngine.GameObject").method("FindObjectOfType").inflate(e.class("UnityEngine.Rendering.PostProcessing.PostProcessVolume")).invoke();
          if (!t.isNull()) {
            o.logNormal("Found PostProcessVolume.", "[Il2CppHook]>[PPHook]");
            let n = t.method("get_profile").invoke(), i = n.field("settings").value;
            for (let s = 0; s < i.method("get_Count").invoke(); s++) o.logNormal(i.method("get_Item").invoke(s).toString() + " has existed.", "[Il2CppHook]>[PPHook]");
            function a(t) {
              return n.method("HasSettings").inflate(e.class(t)).invoke() ? n.method("GetSetting").inflate(e.class(t)).invoke() : n.method("AddSettings").inflate(e.class(t)).invoke();
            }
            let m = a("UnityEngine.Rendering.PostProcessing.HGMobileBloom");
            m.field("intensity").value.method("Override").invoke(5), m.field("threshold").value.method("Override").invoke(.6);
          }
        }(), q.CreateEnemyHud(Z), e.ShowBattleTimeInfo) {
          let e = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("TimeShower (Clone)")), t = Z.method("get_groupStatic").invoke();
          e.method("get_transform").invoke().method("SetParent").invoke(t);
          let o = e.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object), i = e.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
          i.method("set_anchoredPosition3D").invoke(n.instantiate(u, -550, 480, 0).unbox()), 
          i.method("set_localScale").invoke(u.method("get_one").invoke()), i.method("set_sizeDelta").invoke(n.instantiate(k, 400, 50).unbox()), 
          o.method("set_font").invoke(V), o.method("set_fontSize").invoke(30), (A = o.method("set_text")).invoke(Il2Cpp.String.from("战斗时间轴: 0.000s"));
          let a = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("FrameShower (Clone)"));
          a.method("get_transform").invoke().method("SetParent").invoke(t);
          let m = a.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object), s = a.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
          s.method("set_anchoredPosition3D").invoke(n.instantiate(u, -550, 430, 0).unbox()), 
          s.method("set_localScale").invoke(u.method("get_one").invoke()), s.method("set_sizeDelta").invoke(n.instantiate(k, 400, 50).unbox()), 
          m.method("set_font").invoke(V), m.method("set_fontSize").invoke(30), (T = m.method("set_text")).invoke(Il2Cpp.String.from("Tick计数: 0 tick"));
        }
      }
    });
    const U = m.method("OnDestroy");
    Interceptor.attach(n.getFunctionByAddress(Il2Cpp.module, U.relativeVirtualAddress), {
      onLeave: e => {
        Y = null, t.NotPlaying;
      }
    });
    const x = m.method("StartGame");
    Interceptor.attach(n.getFunctionByAddress(Il2Cpp.module, x.relativeVirtualAddress), {
      onLeave: e => {
        switch (t.Playing, a) {
         case i.SingleFrame:
         case i.DoubleFrame:
         case i.PlayingOnDown:
          y.invoke(!0, !1, !1), N();
        }
      }
    });
    const F = s.class("Torappu.Battle.SpeedLevel"), P = m.method("Update");
    var E = 0;
    Interceptor.attach(n.getFunctionByAddress(Il2Cpp.module, P.relativeVirtualAddress), {
      onLeave: t => {
        C.invoke(M) ? a = i.Normal : C.invoke(G) ? (a = i.SingleFrame, y.invoke(!0, !1, !1), 
        N()) : C.invoke(j) ? (a = i.DoubleFrame, E = 0, y.invoke(!0, !1, !1), N()) : C.invoke(R) ? (a = i.PlayingOnDown, 
        y.invoke(!0, !1, !1), N()) : C.invoke(z) && (a = i.PlayingOnUp, y.invoke(!1, !1, !1));
        let o = null != Y && f.invoke();
        if (o) {
          switch (a) {
           case i.SingleFrame:
            p.invoke() || (y.invoke(!0, !1, !1), N());
            break;

           case i.DoubleFrame:
            p.invoke() || (E > 0 ? (E = 0, y.invoke(!0, !1, !1), N()) : E++);
          }
          e.ShowBattleTimeInfo && (A?.invoke(Il2Cpp.String.from("战斗时间轴: " + d.invoke().box().method("AsFloat").invoke().toFixed(3).toString() + "s")), 
          T?.invoke(Il2Cpp.String.from("Tick计数: " + c.invoke().toString() + " tick")));
        }
        if (C.invoke($) && o) switch (a) {
         case i.Normal:
          let e = !p.invoke();
          y.invoke(e, !1, !1), e && N();
          break;

         case i.SingleFrame:
         case i.DoubleFrame:
         case i.PlayingOnDown:
          y.invoke(!1, !1, !1);
          break;

         case i.PlayingOnUp:
          y.invoke(!0, !1, !1), N();
        }
        if (_.invoke($) && o) switch (a) {
         case i.PlayingOnDown:
          y.invoke(!0, !1, !1), N();
          break;

         case i.PlayingOnUp:
          y.invoke(!1, !1, !1);
        }
        C.invoke(J) && e.SpeedLevel3 && S.invoke(F.field("SUPER_FAST").value), C.invoke(K) && e.SpeedLevel16 && (I.invoke(16), 
        b.invoke(F.field("SUPER_FAST").value)), o && !p.invoke() && Q && (Q = !1), q.UpdateEnemyClick(Y?.method("get_scheduler").invoke()), 
        q.UpdateEnemyHud();
      }
    });
  }
  !function(e) {
    e[e.TranIn = 0] = "TranIn", e[e.On = 1] = "On", e[e.TranOut = 2] = "TranOut", e[e.Off = 3] = "Off";
  }(W || (W = {})), function(e) {
    let t, o, i, m, r, d, c, h, p = (new Date).getTime();
    const y = 300, S = 3e3, C = 1;
    let _ = W.Off;
    function T(e) {
      let t = e.method("get_cursor").invoke().method("get_route").invoke(), o = t.field("m_data").value.field("motionMode").value, n = Y?.method("get_factory").invoke(), i = Y?.method("get_scheduler").invoke(), a = n?.method("CreatePreviewCursor").invoke(o), l = i?.method("TakeSnapshot").invoke();
      a?.method("Spawn").invoke(t, l, ptr(0));
    }
    function U() {
      if (t.isNull() || !t.method("get_alive").invoke()) c.method("set_text").invoke(Il2Cpp.String.from("敌人已死亡")), 
      h.method("set_text").invoke(ptr(0)); else {
        let e = t.method("get_attackAbilityCasted").invoke(), o = "无", n = "无";
        if (!e.isNull()) {
          o = e.method("get_searchName").invoke().content;
          let t = e.method("get_castTargets").invoke().method("ToArray").invoke();
          if (t.length > 0) {
            let e = Array(t.length);
            for (let o = 0; o < t.length; o++) {
              let n = t.get(o).field("obj").value;
              s.class("Torappu.Battle.Character").type.object.method("IsAssignableFrom").invoke(n.class.type.object) ? e[o] = D.method("GetCharName").invoke(n.method("get_characterId").invoke()).content : e[o] = n.method("get_id").invoke().content;
            }
            n = e.join("  ");
          }
        }
        let i = a.vector2ToTuple(t.method("get_footMapPosition").invoke()), l = t.method("get_blocker").invoke();
        c.method("set_text").invoke(Il2Cpp.String.from(`攻击 <color=#D63A00>${t.method("get_atk").invoke().box().method("AsFloat").invoke().toFixed(2)}</color>\n防御 <color=#D63A00>${t.method("get_def").invoke().box().method("AsFloat").invoke().toFixed(2)}</color>\n法抗 <color=#D63A00>${t.method("get_magicResistance").invoke().box().method("AsFloat").invoke().toFixed(2)}</color>\n阻挡 <color=#66CCFF>${t.method("get_blockVolume").invoke()}</color>\n剩余距离 <color=#66CCFF>${t.method("get_distToExit").invoke().toFixed(3)}</color>\n阻挡干员 <color=#00B035>${l.isNull() ? "无阻挡" : D.method("GetCharName").invoke(l.method("get_characterId").invoke()).content}</color>\n坐标 <color=#66CCFF>(${i[0].toFixed(2)}, ${i[1].toFixed(2)})</color>\n当前技能 <color=#FF4000>${o}</color>\n技能目标 <color=#FF4000>${n}</color>`)), 
        h.method("set_text").invoke(Il2Cpp.String.from(`移速 <color=#66CCFF>${t.method("get_moveSpeed").invoke().toFixed(3)}</color>\n攻速 <color=#66CCFF>${(100 * t.method("get_baseAttackTime").invoke().box().method("AsFloat").invoke() / t.method("get_attackSpeed").invoke().box().method("AsFloat").invoke()).toFixed(3)}</color>\n重量 <color=#66CCFF>${t.method("get_massLevel").invoke()}</color>\n目标点 <color=#66CCFF>${t.method("get_lifePointReduce").invoke()}</color>`));
      }
    }
    function x(e) {
      H(), null == t || t.isNull() || e.method("get_instanceUid").invoke() == t.method("get_instanceUid").invoke() || (Q = !1), 
      t = e;
      let o = e.method("get_data").invoke(), n = o.field("key").value;
      if (r.method("set_text").invoke(n), m.method("set_text").invoke(o.field("name").value), 
      d.method("set_text").invoke(E.method("FormatRichTextFromData").invoke(o.field("description").value)), 
      _ == W.Off) _ = W.TranIn, p = (new Date).getTime(), i.method("SetActive").invoke(!0); else if (_ == W.TranOut) {
        _ = W.TranIn;
        let e = (new Date).getTime();
        p = 2 * e - y - p;
      } else _ == W.On && (p = (new Date).getTime());
      Q || (T(e), Q = !0);
    }
    e.ShowEnemyRoute = T, e.CreateEnemyHud = function(e) {
      i = n.instantiate(F, Il2Cpp.String.from("EnemyInfoPanel(Clone)")), i.method("get_transform").invoke().method("SetParent").invoke(e.method("get_groupStatic").invoke());
      let t = i.method("AddComponent").invoke(g.class("UnityEngine.UI.Image").type.object);
      o = i.method("AddComponent").invoke(v.class("UnityEngine.CanvasGroup").type.object);
      let a = i.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
      a.method("set_localScale").invoke(u.method("get_one").invoke()), a.method("set_anchorMin").invoke(k.method("get_one").invoke()), 
      a.method("set_anchorMax").invoke(k.method("get_one").invoke()), a.method("set_anchoredPosition3D").invoke(n.instantiate(u, -280, -300, 0).unbox()), 
      a.method("set_sizeDelta").invoke(n.instantiate(k, 720, 250).unbox()), t.method("set_color").invoke(n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 0, 0, 0, .6).unbox()), 
      o.method("set_blocksRaycasts").invoke(!1), o.method("set_alpha").invoke(0);
      let s = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("EnemyImage"));
      s.method("get_transform").invoke().method("SetParent").invoke(i.method("get_transform").invoke());
      let p = s.method("AddComponent").invoke(g.class("UnityEngine.UI.Image").type.object), y = s.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
      y.method("set_localScale").invoke(u.method("get_one").invoke()), y.method("set_anchoredPosition3D").invoke(n.instantiate(u, -55, 0, 0).unbox()), 
      y.method("set_sizeDelta").invoke(n.instantiate(k, 1, 250).unbox()), p.method("set_color").invoke(n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 0, 0, 0, .5).unbox());
      let S = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("EnemyName"));
      S.method("get_transform").invoke().method("SetParent").invoke(i.method("get_transform").invoke()), 
      m = S.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object);
      let C = S.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
      C.method("set_localScale").invoke(u.method("get_one").invoke()), C.method("set_anchoredPosition3D").invoke(n.instantiate(u, 95, 90, 0).unbox()), 
      C.method("set_sizeDelta").invoke(n.instantiate(k, 260, 45).unbox()), m.method("set_font").invoke(V), 
      m.method("set_fontSize").invoke(36), m.method("set_text").invoke(Il2Cpp.String.from("敌人名字")), 
      m.field("m_Color").value = n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], .8, .2, 0, 1).unbox();
      let I = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("EnemyID"));
      I.method("get_transform").invoke().method("SetParent").invoke(i.method("get_transform").invoke()), 
      r = I.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object);
      let b = I.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
      b.method("set_localScale").invoke(u.method("get_one").invoke()), b.method("set_anchoredPosition3D").invoke(n.instantiate(u, 95, 60, 0).unbox()), 
      b.method("set_sizeDelta").invoke(n.instantiate(k, 260, 20).unbox()), r.method("set_font").invoke(V), 
      r.method("set_fontSize").invoke(16), r.method("set_text").invoke(Il2Cpp.String.from("enemy_1xxx_xxxxx_2")), 
      r.field("m_Color").value = n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], .2, .2, .2, 1).unbox();
      let A = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("EnemyDes"));
      A.method("get_transform").invoke().method("SetParent").invoke(i.method("get_transform").invoke()), 
      d = A.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object);
      let T = A.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
      T.method("set_localScale").invoke(u.method("get_one").invoke()), T.method("set_anchoredPosition3D").invoke(n.instantiate(u, 120, -30, 0).unbox()), 
      T.method("set_sizeDelta").invoke(n.instantiate(k, 310, 130).unbox()), d.method("set_font").invoke(V), 
      d.method("set_fontSize").invoke(16), d.method("set_text").invoke(Il2Cpp.String.from("敌人描述")), 
      d.field("m_Color").value = n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 1, 1, 1, 1).unbox();
      let U = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("EnemyBlackboard"));
      U.method("get_transform").invoke().method("SetParent").invoke(i.method("get_transform").invoke()), 
      c = U.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object);
      let x = U.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
      x.method("set_localScale").invoke(u.method("get_one").invoke()), x.method("set_anchoredPosition3D").invoke(n.instantiate(u, -220, 0, 0).unbox()), 
      x.method("set_sizeDelta").invoke(n.instantiate(k, 230, 220).unbox()), c.method("set_font").invoke(V), 
      c.method("set_fontSize").invoke(18), c.method("set_text").invoke(Il2Cpp.String.from("攻击 <color=#D63A00>6756</color>\n防御 <color=#D63A00>233</color>\n法抗 <color=#D63A00>222</color>\n阻挡 <color=#66CCFF>222</color>\n消耗目标数量 <color=#66CCFF>2</color>\n阻挡干员 <color=#00B035>干员名字</color>\n当前目标 <color=#66CCFF>单位名字</color>\n坐标 <color=#66CCFF>(2.342,4.211)</color>")), 
      c.field("m_Color").value = n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 1, 1, 1, 1).unbox();
      let P = n.instantiate(l.class("UnityEngine.GameObject"), Il2Cpp.String.from("EnemyBlackboard2"));
      P.method("get_transform").invoke().method("SetParent").invoke(i.method("get_transform").invoke()), 
      h = P.method("AddComponent").invoke(g.class("UnityEngine.UI.Text").type.object);
      let E = P.method("GetComponent").invoke(l.class("UnityEngine.RectTransform").type.object);
      E.method("set_localScale").invoke(u.method("get_one").invoke()), E.method("set_anchoredPosition3D").invoke(n.instantiate(u, -120, 0, 0).unbox()), 
      E.method("set_sizeDelta").invoke(n.instantiate(k, 120, 220).unbox()), h.method("set_font").invoke(V), 
      h.method("set_fontSize").invoke(18), h.method("set_text").invoke(Il2Cpp.String.from("移速 <color=#66CCFF>3.0</color>\n攻速 <color=#66CCFF>222</color>\n重量 <color=#66CCFF>7</color>\n失衡免疫 <color=#66CCFF>是</color>")), 
      h.field("m_Color").value = n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 1, 1, 1, 1).unbox(), 
      i.method("SetActive").invoke(!1), _ = W.Off;
    }, e.UpdateEnemyHudData = U, e.UpdateEnemyHud = function() {
      let e = (new Date).getTime();
      switch (_) {
       case W.TranIn:
        e - p >= y ? (_ = W.On, o.method("set_alpha").invoke(C)) : o.method("set_alpha").invoke(C * (e - p) / y), 
        U();
        break;

       case W.On:
        e - p >= S && (_ = W.TranOut, p = (new Date).getTime()), U();
        break;

       case W.TranOut:
        e - p >= y ? (_ = W.Off, o.method("set_alpha").invoke(0), i.method("SetActive").invoke(!1)) : o.method("set_alpha").invoke(C * (1 - (e - p) / y)), 
        U();
      }
    }, e.SetEnemyHud = x;
    let P = !1, O = -1;
    e.UpdateEnemyClick = function(e) {
      if (b.method("get_touchCount").invoke() > 0) {
        let o = b.method("GetTouch").invoke(0);
        if ("Began" == o.field("m_Phase").value.toString() && I.invoke(X)) {
          let i = a.vector2ToTuple(o.field("m_Position").value), l = A.method("get_main").invoke().method("ScreenPointToRay").invoke(n.instantiate(u, i[0], i[1], 0).unbox()).box(), m = a.vector3ToTuple(l.method("get_origin").invoke()), s = a.vector3ToTuple(l.method("get_direction").invoke());
          function r(e, t, o) {
            let n = (o - m[2]) / s[2];
            return (m[0] + s[0] * n - e) ** 2 + (m[1] + s[1] * n - t) ** 2;
          }
          let d = e.field("m_managedFinalEnemies").value, c = Number.MAX_VALUE, g = null;
          for (let v = 0; v < d.method("get_Count").invoke(); v++) {
            let h = d.method("get_Item").invoke(v), k = a.vector3ToTuple(h.method("get_transform").invoke().method("get_position").invoke()), S = r(k[0], k[1], k[2]);
            S < .25 && S < c && (g = h);
          }
          null != g && (O = o.field("m_FingerId").value, P && (t.isNull() || (t.method("set_color").invoke(t.method("get_defaultBodyColor").invoke()), 
          P = !1)), x(g), t.method("set_color").invoke(n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 0, 1, 1, 1).unbox()), 
          P = !0);
        } else if ("Stationary" != o.field("m_Phase").value.toString() && "Moved" != o.field("m_Phase").value.toString() || o.field("m_FingerId").value != O || t.isNull()) P && (t.isNull() || (t.method("set_color").invoke(t.method("get_defaultBodyColor").invoke()), 
        P = !1, O = -1)); else {
          if (_ == W.Off) _ = W.TranIn, p = (new Date).getTime(); else if (_ == W.TranOut) {
            _ = W.TranIn;
            let C = (new Date).getTime();
            p = 2 * C - y - p;
          } else _ == W.On && (p = (new Date).getTime());
          t.method("set_color").invoke(n.instantiateOverload(f, [ "System.Single", "System.Single", "System.Single", "System.Single" ], 0, 1, 1, 1).unbox()), 
          P = !0;
        }
      }
    };
  }(q || (q = {})), t.main = function() {
    o.logNormal("[Il2CppHook] Starting il2cpp layer hook..."), o.log("[1;36m应用包名:[m [1;34m" + Il2Cpp.applicationIdentifier + "[m"), 
    o.log("[1;36m版本:[m [1;34m" + Il2Cpp.applicationVersion + "[m"), o.log("[1;36m路径:[m [1;34m" + Il2Cpp.applicationDataPath + "[m"), 
    o.log("[1;36mUnity版本:[m [1;34m" + Il2Cpp.unityVersion + "[m"), o.log("[1;36mPid:[m [1;34m" + Process.id.toString() + "[m"), 
    o.log("[1;36mAPK签名:[m [1;34m" + m.getAppSignature() + "[m"), d([ ee, te, ie, le, ae, se, re ], [ "initHook", "initAccountData", "NetworkHook", "LogHook", "MiscHook", "LoginHook", "TASHook" ], "[Il2CppHook]"), 
    o.logNormal("[Il2CppHook] Starting UIBaseHook()..."), me();
  };
}(r || (r = {})), console.log("[1;36m==========Programme started!==========[m"), 
console.log(Buffer.from(t, "base64").toString()), Java.perform(s.main), setTimeout((() => Il2Cpp.perform(r.main)), e.Il2CppHookDelay);

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":5,"frida-il2cpp-bridge":33}],2:[function(require,module,exports){
"use strict";

exports.byteLength = u, exports.toByteArray = i, exports.fromByteArray = d;

for (var r = [], t = [], e = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o) r[o] = n[o], 
t[n.charCodeAt(o)] = o;

function h(r) {
  var t = r.length;
  if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var e = r.indexOf("=");
  return -1 === e && (e = t), [ e, e === t ? 0 : 4 - e % 4 ];
}

function u(r) {
  var t = h(r), e = t[0], n = t[1];
  return 3 * (e + n) / 4 - n;
}

function c(r, t, e) {
  return 3 * (t + e) / 4 - e;
}

function i(r) {
  var n, o, a = h(r), u = a[0], i = a[1], f = new e(c(r, u, i)), A = 0, d = i > 0 ? u - 4 : u;
  for (o = 0; o < d; o += 4) n = t[r.charCodeAt(o)] << 18 | t[r.charCodeAt(o + 1)] << 12 | t[r.charCodeAt(o + 2)] << 6 | t[r.charCodeAt(o + 3)], 
  f[A++] = n >> 16 & 255, f[A++] = n >> 8 & 255, f[A++] = 255 & n;
  return 2 === i && (n = t[r.charCodeAt(o)] << 2 | t[r.charCodeAt(o + 1)] >> 4, f[A++] = 255 & n), 
  1 === i && (n = t[r.charCodeAt(o)] << 10 | t[r.charCodeAt(o + 1)] << 4 | t[r.charCodeAt(o + 2)] >> 2, 
  f[A++] = n >> 8 & 255, f[A++] = 255 & n), f;
}

function f(t) {
  return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
}

function A(r, t, e) {
  for (var n, o = [], a = t; a < e; a += 3) n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (255 & r[a + 2]), 
  o.push(f(n));
  return o.join("");
}

function d(t) {
  for (var e, n = t.length, o = n % 3, a = [], h = 16383, u = 0, c = n - o; u < c; u += h) a.push(A(t, u, u + h > c ? c : u + h));
  return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], 
  a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("");
}

t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;

},{}],3:[function(require,module,exports){
"use strict";

function e(e, r, t) {
  var o = t.get;
  if (!o) throw new TypeError("Getter property descriptor expected");
  t.get = function() {
    var e = o.call(this);
    return Object.defineProperty(this, r, {
      configurable: t.configurable,
      enumerable: t.enumerable,
      writable: !1,
      value: e
    }), e;
  };
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.cache = e;

},{}],4:[function(require,module,exports){
"use strict";

exports.__esModule = !0, exports.distance = exports.closest = void 0;

var r = new Uint32Array(65536), t = function(t, e) {
  for (var o = t.length, a = e.length, n = 1 << o - 1, h = -1, c = 0, f = o, l = o; l--; ) r[t.charCodeAt(l)] |= 1 << l;
  for (l = 0; l < a; l++) {
    var v = r[e.charCodeAt(l)], i = v | c;
    (c |= ~((v |= (v & h) + h ^ h) | h)) & n && f++, (h &= v) & n && f--, h = h << 1 | ~(i | (c = c << 1 | 1)), 
    c &= i;
  }
  for (l = o; l--; ) r[t.charCodeAt(l)] = 0;
  return f;
}, e = function(t, e) {
  for (var o = e.length, a = t.length, n = [], h = [], c = Math.ceil(o / 32), f = Math.ceil(a / 32), l = 0; l < c; l++) h[l] = -1, 
  n[l] = 0;
  for (var v = 0; v < f - 1; v++) {
    for (var i = 0, s = -1, d = 32 * v, g = Math.min(32, a) + d, u = d; u < g; u++) r[t.charCodeAt(u)] |= 1 << u;
    for (l = 0; l < o; l++) {
      var A = r[e.charCodeAt(l)], C = h[l / 32 | 0] >>> l & 1, p = A | i, x = s & (b = ((A | (U = n[l / 32 | 0] >>> l & 1)) & s) + s ^ s | A | U);
      (j = i | ~(b | s)) >>> 31 ^ C && (h[l / 32 | 0] ^= 1 << l), x >>> 31 ^ U && (n[l / 32 | 0] ^= 1 << l), 
      s = (x = x << 1 | U) | ~(p | (j = j << 1 | C)), i = j & p;
    }
    for (u = d; u < g; u++) r[t.charCodeAt(u)] = 0;
  }
  var M = 0, m = -1, _ = 32 * v, w = Math.min(32, a - _) + _;
  for (u = _; u < w; u++) r[t.charCodeAt(u)] |= 1 << u;
  var y = a;
  for (l = 0; l < o; l++) {
    var U, b, j;
    A = r[e.charCodeAt(l)], C = h[l / 32 | 0] >>> l & 1, p = A | M;
    y += (j = M | ~((b = ((A | (U = n[l / 32 | 0] >>> l & 1)) & m) + m ^ m | A | U) | m)) >>> a - 1 & 1, 
    y -= (x = m & b) >>> a - 1 & 1, j >>> 31 ^ C && (h[l / 32 | 0] ^= 1 << l), x >>> 31 ^ U && (n[l / 32 | 0] ^= 1 << l), 
    m = (x = x << 1 | U) | ~(p | (j = j << 1 | C)), M = j & p;
  }
  for (u = _; u < w; u++) r[t.charCodeAt(u)] = 0;
  return y;
}, o = function(r, o) {
  if (r.length < o.length) {
    var a = o;
    o = r, r = a;
  }
  return 0 === o.length ? r.length : r.length <= 32 ? t(r, o) : e(r, o);
};

exports.distance = o;

var a = function(r, t) {
  for (var e = 1 / 0, a = 0, n = 0; n < t.length; n++) {
    var h = o(r, t[n]);
    h < e && (e = h, a = n);
  }
  return t[a];
};

exports.closest = a;

},{}],5:[function(require,module,exports){
(function (global){(function (){
global.TYPED_ARRAY_SUPPORT = !0, module.exports = require("buffer/");

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"buffer/":6}],6:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
"use strict";

var t = require("base64-js"), r = require("ieee754"), e = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

exports.Buffer = f, exports.SlowBuffer = d, exports.INSPECT_MAX_BYTES = 50;

var n = 2147483647;

function i() {
  try {
    var t = new Uint8Array(1), r = {
      foo: function() {
        return 42;
      }
    };
    return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(t, r), 
    42 === t.foo();
  } catch (t) {
    return !1;
  }
}

function o(t) {
  if (t > n) throw new RangeError('The value "' + t + '" is invalid for option "size"');
  var r = new Uint8Array(t);
  return Object.setPrototypeOf(r, f.prototype), r;
}

function f(t, r, e) {
  if ("number" == typeof t) {
    if ("string" == typeof r) throw new TypeError('The "string" argument must be of type string. Received type number');
    return a(t);
  }
  return u(t, r, e);
}

function u(t, r, e) {
  if ("string" == typeof t) return p(t, r);
  if (ArrayBuffer.isView(t)) return l(t);
  if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
  if (Z(t, ArrayBuffer) || t && Z(t.buffer, ArrayBuffer)) return y(t, r, e);
  if ("undefined" != typeof SharedArrayBuffer && (Z(t, SharedArrayBuffer) || t && Z(t.buffer, SharedArrayBuffer))) return y(t, r, e);
  if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
  var n = t.valueOf && t.valueOf();
  if (null != n && n !== t) return f.from(n, r, e);
  var i = g(t);
  if (i) return i;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return f.from(t[Symbol.toPrimitive]("string"), r, e);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
}

function s(t) {
  if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
  if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
}

function h(t, r, e) {
  return s(t), t <= 0 ? o(t) : void 0 !== r ? "string" == typeof e ? o(t).fill(r, e) : o(t).fill(r) : o(t);
}

function a(t) {
  return s(t), o(t < 0 ? 0 : 0 | w(t));
}

function p(t, r) {
  if ("string" == typeof r && "" !== r || (r = "utf8"), !f.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
  var e = 0 | v(t, r), n = o(e), i = n.write(t, r);
  return i !== e && (n = n.slice(0, i)), n;
}

function c(t) {
  for (var r = t.length < 0 ? 0 : 0 | w(t.length), e = o(r), n = 0; n < r; n += 1) e[n] = 255 & t[n];
  return e;
}

function l(t) {
  if (Z(t, Uint8Array)) {
    var r = new Uint8Array(t);
    return y(r.buffer, r.byteOffset, r.byteLength);
  }
  return c(t);
}

function y(t, r, e) {
  if (r < 0 || t.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < r + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
  var n;
  return n = void 0 === r && void 0 === e ? new Uint8Array(t) : void 0 === e ? new Uint8Array(t, r) : new Uint8Array(t, r, e), 
  Object.setPrototypeOf(n, f.prototype), n;
}

function g(t) {
  if (f.isBuffer(t)) {
    var r = 0 | w(t.length), e = o(r);
    return 0 === e.length || t.copy(e, 0, 0, r), e;
  }
  return void 0 !== t.length ? "number" != typeof t.length || $(t.length) ? o(0) : c(t) : "Buffer" === t.type && Array.isArray(t.data) ? c(t.data) : void 0;
}

function w(t) {
  if (t >= n) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
  return 0 | t;
}

function d(t) {
  return +t != t && (t = 0), f.alloc(+t);
}

function v(t, r) {
  if (f.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || Z(t, ArrayBuffer)) return t.byteLength;
  if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
  var e = t.length, n = arguments.length > 2 && !0 === arguments[2];
  if (!n && 0 === e) return 0;
  for (var i = !1; ;) switch (r) {
   case "ascii":
   case "latin1":
   case "binary":
    return e;

   case "utf8":
   case "utf-8":
    return q(t).length;

   case "ucs2":
   case "ucs-2":
   case "utf16le":
   case "utf-16le":
    return 2 * e;

   case "hex":
    return e >>> 1;

   case "base64":
    return X(t).length;

   default:
    if (i) return n ? -1 : q(t).length;
    r = ("" + r).toLowerCase(), i = !0;
  }
}

function b(t, r, e) {
  var n = !1;
  if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
  if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
  if ((e >>>= 0) <= (r >>>= 0)) return "";
  for (t || (t = "utf8"); ;) switch (t) {
   case "hex":
    return k(this, r, e);

   case "utf8":
   case "utf-8":
    return O(this, r, e);

   case "ascii":
    return C(this, r, e);

   case "latin1":
   case "binary":
    return P(this, r, e);

   case "base64":
    return S(this, r, e);

   case "ucs2":
   case "ucs-2":
   case "utf16le":
   case "utf-16le":
    return M(this, r, e);

   default:
    if (n) throw new TypeError("Unknown encoding: " + t);
    t = (t + "").toLowerCase(), n = !0;
  }
}

function m(t, r, e) {
  var n = t[r];
  t[r] = t[e], t[e] = n;
}

function E(t, r, e, n, i) {
  if (0 === t.length) return -1;
  if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), 
  $(e = +e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
    if (i) return -1;
    e = t.length - 1;
  } else if (e < 0) {
    if (!i) return -1;
    e = 0;
  }
  if ("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r)) return 0 === r.length ? -1 : B(t, r, e, n, i);
  if ("number" == typeof r) return r &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : B(t, [ r ], e, n, i);
  throw new TypeError("val must be string, number or Buffer");
}

function B(t, r, e, n, i) {
  var o, f = 1, u = t.length, s = r.length;
  if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
    if (t.length < 2 || r.length < 2) return -1;
    f = 2, u /= 2, s /= 2, e /= 2;
  }
  function h(t, r) {
    return 1 === f ? t[r] : t.readUInt16BE(r * f);
  }
  if (i) {
    var a = -1;
    for (o = e; o < u; o++) if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
      if (-1 === a && (a = o), o - a + 1 === s) return a * f;
    } else -1 !== a && (o -= o - a), a = -1;
  } else for (e + s > u && (e = u - s), o = e; o >= 0; o--) {
    for (var p = !0, c = 0; c < s; c++) if (h(t, o + c) !== h(r, c)) {
      p = !1;
      break;
    }
    if (p) return o;
  }
  return -1;
}

function A(t, r, e, n) {
  e = Number(e) || 0;
  var i = t.length - e;
  n ? (n = Number(n)) > i && (n = i) : n = i;
  var o = r.length;
  n > o / 2 && (n = o / 2);
  for (var f = 0; f < n; ++f) {
    var u = parseInt(r.substr(2 * f, 2), 16);
    if ($(u)) return f;
    t[e + f] = u;
  }
  return f;
}

function U(t, r, e, n) {
  return J(q(r, t.length - e), t, e, n);
}

function T(t, r, e, n) {
  return J(V(r), t, e, n);
}

function I(t, r, e, n) {
  return J(X(r), t, e, n);
}

function L(t, r, e, n) {
  return J(W(r, t.length - e), t, e, n);
}

function S(r, e, n) {
  return 0 === e && n === r.length ? t.fromByteArray(r) : t.fromByteArray(r.slice(e, n));
}

function O(t, r, e) {
  e = Math.min(t.length, e);
  for (var n = [], i = r; i < e; ) {
    var o, f, u, s, h = t[i], a = null, p = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
    if (i + p <= e) switch (p) {
     case 1:
      h < 128 && (a = h);
      break;

     case 2:
      128 == (192 & (o = t[i + 1])) && (s = (31 & h) << 6 | 63 & o) > 127 && (a = s);
      break;

     case 3:
      o = t[i + 1], f = t[i + 2], 128 == (192 & o) && 128 == (192 & f) && (s = (15 & h) << 12 | (63 & o) << 6 | 63 & f) > 2047 && (s < 55296 || s > 57343) && (a = s);
      break;

     case 4:
      o = t[i + 1], f = t[i + 2], u = t[i + 3], 128 == (192 & o) && 128 == (192 & f) && 128 == (192 & u) && (s = (15 & h) << 18 | (63 & o) << 12 | (63 & f) << 6 | 63 & u) > 65535 && s < 1114112 && (a = s);
    }
    null === a ? (a = 65533, p = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), 
    a = 56320 | 1023 & a), n.push(a), i += p;
  }
  return x(n);
}

exports.kMaxLength = n, f.TYPED_ARRAY_SUPPORT = i(), f.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
Object.defineProperty(f.prototype, "parent", {
  enumerable: !0,
  get: function() {
    if (f.isBuffer(this)) return this.buffer;
  }
}), Object.defineProperty(f.prototype, "offset", {
  enumerable: !0,
  get: function() {
    if (f.isBuffer(this)) return this.byteOffset;
  }
}), f.poolSize = 8192, f.from = function(t, r, e) {
  return u(t, r, e);
}, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array), 
f.alloc = function(t, r, e) {
  return h(t, r, e);
}, f.allocUnsafe = function(t) {
  return a(t);
}, f.allocUnsafeSlow = function(t) {
  return a(t);
}, f.isBuffer = function(t) {
  return null != t && !0 === t._isBuffer && t !== f.prototype;
}, f.compare = function(t, r) {
  if (Z(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), Z(r, Uint8Array) && (r = f.from(r, r.offset, r.byteLength)), 
  !f.isBuffer(t) || !f.isBuffer(r)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t === r) return 0;
  for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i) if (t[i] !== r[i]) {
    e = t[i], n = r[i];
    break;
  }
  return e < n ? -1 : n < e ? 1 : 0;
}, f.isEncoding = function(t) {
  switch (String(t).toLowerCase()) {
   case "hex":
   case "utf8":
   case "utf-8":
   case "ascii":
   case "latin1":
   case "binary":
   case "base64":
   case "ucs2":
   case "ucs-2":
   case "utf16le":
   case "utf-16le":
    return !0;

   default:
    return !1;
  }
}, f.concat = function(t, r) {
  if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === t.length) return f.alloc(0);
  var e;
  if (void 0 === r) for (r = 0, e = 0; e < t.length; ++e) r += t[e].length;
  var n = f.allocUnsafe(r), i = 0;
  for (e = 0; e < t.length; ++e) {
    var o = t[e];
    if (Z(o, Uint8Array)) i + o.length > n.length ? f.from(o).copy(n, i) : Uint8Array.prototype.set.call(n, o, i); else {
      if (!f.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
      o.copy(n, i);
    }
    i += o.length;
  }
  return n;
}, f.byteLength = v, f.prototype._isBuffer = !0, f.prototype.swap16 = function() {
  var t = this.length;
  if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var r = 0; r < t; r += 2) m(this, r, r + 1);
  return this;
}, f.prototype.swap32 = function() {
  var t = this.length;
  if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var r = 0; r < t; r += 4) m(this, r, r + 3), m(this, r + 1, r + 2);
  return this;
}, f.prototype.swap64 = function() {
  var t = this.length;
  if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var r = 0; r < t; r += 8) m(this, r, r + 7), m(this, r + 1, r + 6), m(this, r + 2, r + 5), 
  m(this, r + 3, r + 4);
  return this;
}, f.prototype.toString = function() {
  var t = this.length;
  return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : b.apply(this, arguments);
}, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(t) {
  if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
  return this === t || 0 === f.compare(this, t);
}, f.prototype.inspect = function() {
  var t = "", r = exports.INSPECT_MAX_BYTES;
  return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), 
  "<Buffer " + t + ">";
}, e && (f.prototype[e] = f.prototype.inspect), f.prototype.compare = function(t, r, e, n, i) {
  if (Z(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
  if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), 
  void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
  if (n >= i && r >= e) return 0;
  if (n >= i) return -1;
  if (r >= e) return 1;
  if (this === t) return 0;
  for (var o = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), s = Math.min(o, u), h = this.slice(n, i), a = t.slice(r, e), p = 0; p < s; ++p) if (h[p] !== a[p]) {
    o = h[p], u = a[p];
    break;
  }
  return o < u ? -1 : u < o ? 1 : 0;
}, f.prototype.includes = function(t, r, e) {
  return -1 !== this.indexOf(t, r, e);
}, f.prototype.indexOf = function(t, r, e) {
  return E(this, t, r, e, !0);
}, f.prototype.lastIndexOf = function(t, r, e) {
  return E(this, t, r, e, !1);
}, f.prototype.write = function(t, r, e, n) {
  if (void 0 === r) n = "utf8", e = this.length, r = 0; else if (void 0 === e && "string" == typeof r) n = r, 
  e = this.length, r = 0; else {
    if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    r >>>= 0, isFinite(e) ? (e >>>= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0);
  }
  var i = this.length - r;
  if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  n || (n = "utf8");
  for (var o = !1; ;) switch (n) {
   case "hex":
    return A(this, t, r, e);

   case "utf8":
   case "utf-8":
    return U(this, t, r, e);

   case "ascii":
   case "latin1":
   case "binary":
    return T(this, t, r, e);

   case "base64":
    return I(this, t, r, e);

   case "ucs2":
   case "ucs-2":
   case "utf16le":
   case "utf-16le":
    return L(this, t, r, e);

   default:
    if (o) throw new TypeError("Unknown encoding: " + n);
    n = ("" + n).toLowerCase(), o = !0;
  }
}, f.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

var R = 4096;

function x(t) {
  var r = t.length;
  if (r <= R) return String.fromCharCode.apply(String, t);
  for (var e = "", n = 0; n < r; ) e += String.fromCharCode.apply(String, t.slice(n, n += R));
  return e;
}

function C(t, r, e) {
  var n = "";
  e = Math.min(t.length, e);
  for (var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]);
  return n;
}

function P(t, r, e) {
  var n = "";
  e = Math.min(t.length, e);
  for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
  return n;
}

function k(t, r, e) {
  var n = t.length;
  (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
  for (var i = "", o = r; o < e; ++o) i += G[t[o]];
  return i;
}

function M(t, r, e) {
  for (var n = t.slice(r, e), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
  return i;
}

function j(t, r, e) {
  if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + r > e) throw new RangeError("Trying to access beyond buffer length");
}

function _(t, r, e, n, i, o) {
  if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r > i || r < o) throw new RangeError('"value" argument is out of bounds');
  if (e + n > t.length) throw new RangeError("Index out of range");
}

function z(t, r, e, n, i, o) {
  if (e + n > t.length) throw new RangeError("Index out of range");
  if (e < 0) throw new RangeError("Index out of range");
}

function D(t, e, n, i, o) {
  return e = +e, n >>>= 0, o || z(t, e, n, 4, 34028234663852886e22, -34028234663852886e22), 
  r.write(t, e, n, i, 23, 4), n + 4;
}

function F(t, e, n, i, o) {
  return e = +e, n >>>= 0, o || z(t, e, n, 8, 17976931348623157e292, -17976931348623157e292), 
  r.write(t, e, n, i, 52, 8), n + 8;
}

f.prototype.slice = function(t, r) {
  var e = this.length;
  (t = ~~t) < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e), (r = void 0 === r ? e : ~~r) < 0 ? (r += e) < 0 && (r = 0) : r > e && (r = e), 
  r < t && (r = t);
  var n = this.subarray(t, r);
  return Object.setPrototypeOf(n, f.prototype), n;
}, f.prototype.readUintLE = f.prototype.readUIntLE = function(t, r, e) {
  t >>>= 0, r >>>= 0, e || j(t, r, this.length);
  for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); ) n += this[t + o] * i;
  return n;
}, f.prototype.readUintBE = f.prototype.readUIntBE = function(t, r, e) {
  t >>>= 0, r >>>= 0, e || j(t, r, this.length);
  for (var n = this[t + --r], i = 1; r > 0 && (i *= 256); ) n += this[t + --r] * i;
  return n;
}, f.prototype.readUint8 = f.prototype.readUInt8 = function(t, r) {
  return t >>>= 0, r || j(t, 1, this.length), this[t];
}, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(t, r) {
  return t >>>= 0, r || j(t, 2, this.length), this[t] | this[t + 1] << 8;
}, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(t, r) {
  return t >>>= 0, r || j(t, 2, this.length), this[t] << 8 | this[t + 1];
}, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(t, r) {
  return t >>>= 0, r || j(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(t, r) {
  return t >>>= 0, r || j(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, f.prototype.readIntLE = function(t, r, e) {
  t >>>= 0, r >>>= 0, e || j(t, r, this.length);
  for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); ) n += this[t + o] * i;
  return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
}, f.prototype.readIntBE = function(t, r, e) {
  t >>>= 0, r >>>= 0, e || j(t, r, this.length);
  for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256); ) o += this[t + --n] * i;
  return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
}, f.prototype.readInt8 = function(t, r) {
  return t >>>= 0, r || j(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, f.prototype.readInt16LE = function(t, r) {
  t >>>= 0, r || j(t, 2, this.length);
  var e = this[t] | this[t + 1] << 8;
  return 32768 & e ? 4294901760 | e : e;
}, f.prototype.readInt16BE = function(t, r) {
  t >>>= 0, r || j(t, 2, this.length);
  var e = this[t + 1] | this[t] << 8;
  return 32768 & e ? 4294901760 | e : e;
}, f.prototype.readInt32LE = function(t, r) {
  return t >>>= 0, r || j(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, f.prototype.readInt32BE = function(t, r) {
  return t >>>= 0, r || j(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, f.prototype.readFloatLE = function(t, e) {
  return t >>>= 0, e || j(t, 4, this.length), r.read(this, t, !0, 23, 4);
}, f.prototype.readFloatBE = function(t, e) {
  return t >>>= 0, e || j(t, 4, this.length), r.read(this, t, !1, 23, 4);
}, f.prototype.readDoubleLE = function(t, e) {
  return t >>>= 0, e || j(t, 8, this.length), r.read(this, t, !0, 52, 8);
}, f.prototype.readDoubleBE = function(t, e) {
  return t >>>= 0, e || j(t, 8, this.length), r.read(this, t, !1, 52, 8);
}, f.prototype.writeUintLE = f.prototype.writeUIntLE = function(t, r, e, n) {
  (t = +t, r >>>= 0, e >>>= 0, n) || _(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
  var i = 1, o = 0;
  for (this[r] = 255 & t; ++o < e && (i *= 256); ) this[r + o] = t / i & 255;
  return r + e;
}, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(t, r, e, n) {
  (t = +t, r >>>= 0, e >>>= 0, n) || _(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
  var i = e - 1, o = 1;
  for (this[r + i] = 255 & t; --i >= 0 && (o *= 256); ) this[r + i] = t / o & 255;
  return r + e;
}, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 1, 255, 0), this[r] = 255 & t, r + 1;
}, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 2, 65535, 0), this[r] = 255 & t, this[r + 1] = t >>> 8, 
  r + 2;
}, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = 255 & t, 
  r + 2;
}, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, 
  this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t, r + 4;
}, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, 
  this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, r + 4;
}, f.prototype.writeIntLE = function(t, r, e, n) {
  if (t = +t, r >>>= 0, !n) {
    var i = Math.pow(2, 8 * e - 1);
    _(this, t, r, e, i - 1, -i);
  }
  var o = 0, f = 1, u = 0;
  for (this[r] = 255 & t; ++o < e && (f *= 256); ) t < 0 && 0 === u && 0 !== this[r + o - 1] && (u = 1), 
  this[r + o] = (t / f >> 0) - u & 255;
  return r + e;
}, f.prototype.writeIntBE = function(t, r, e, n) {
  if (t = +t, r >>>= 0, !n) {
    var i = Math.pow(2, 8 * e - 1);
    _(this, t, r, e, i - 1, -i);
  }
  var o = e - 1, f = 1, u = 0;
  for (this[r + o] = 255 & t; --o >= 0 && (f *= 256); ) t < 0 && 0 === u && 0 !== this[r + o + 1] && (u = 1), 
  this[r + o] = (t / f >> 0) - u & 255;
  return r + e;
}, f.prototype.writeInt8 = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), 
  this[r] = 255 & t, r + 1;
}, f.prototype.writeInt16LE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 2, 32767, -32768), this[r] = 255 & t, 
  this[r + 1] = t >>> 8, r + 2;
}, f.prototype.writeInt16BE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, 
  this[r + 1] = 255 & t, r + 2;
}, f.prototype.writeInt32LE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 4, 2147483647, -2147483648), this[r] = 255 & t, 
  this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
}, f.prototype.writeInt32BE = function(t, r, e) {
  return t = +t, r >>>= 0, e || _(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
  this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, 
  r + 4;
}, f.prototype.writeFloatLE = function(t, r, e) {
  return D(this, t, r, !0, e);
}, f.prototype.writeFloatBE = function(t, r, e) {
  return D(this, t, r, !1, e);
}, f.prototype.writeDoubleLE = function(t, r, e) {
  return F(this, t, r, !0, e);
}, f.prototype.writeDoubleBE = function(t, r, e) {
  return F(this, t, r, !1, e);
}, f.prototype.copy = function(t, r, e, n) {
  if (!f.isBuffer(t)) throw new TypeError("argument should be a Buffer");
  if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), 
  r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
  if (0 === t.length || 0 === this.length) return 0;
  if (r < 0) throw new RangeError("targetStart out of bounds");
  if (e < 0 || e >= this.length) throw new RangeError("Index out of range");
  if (n < 0) throw new RangeError("sourceEnd out of bounds");
  n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
  var i = n - e;
  return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(r, e, n) : Uint8Array.prototype.set.call(t, this.subarray(e, n), r), 
  i;
}, f.prototype.fill = function(t, r, e, n) {
  if ("string" == typeof t) {
    if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, 
    e = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
    if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
    if (1 === t.length) {
      var i = t.charCodeAt(0);
      ("utf8" === n && i < 128 || "latin1" === n) && (t = i);
    }
  } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
  if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
  if (e <= r) return this;
  var o;
  if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t) for (o = r; o < e; ++o) this[o] = t; else {
    var u = f.isBuffer(t) ? t : f.from(t, n), s = u.length;
    if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
    for (o = 0; o < e - r; ++o) this[o + r] = u[o % s];
  }
  return this;
};

var N = /[^+/0-9A-Za-z-_]/g;

function Y(t) {
  if ((t = (t = t.split("=")[0]).trim().replace(N, "")).length < 2) return "";
  for (;t.length % 4 != 0; ) t += "=";
  return t;
}

function q(t, r) {
  var e;
  r = r || 1 / 0;
  for (var n = t.length, i = null, o = [], f = 0; f < n; ++f) {
    if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
      if (!i) {
        if (e > 56319) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        if (f + 1 === n) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = e;
        continue;
      }
      if (e < 56320) {
        (r -= 3) > -1 && o.push(239, 191, 189), i = e;
        continue;
      }
      e = 65536 + (i - 55296 << 10 | e - 56320);
    } else i && (r -= 3) > -1 && o.push(239, 191, 189);
    if (i = null, e < 128) {
      if ((r -= 1) < 0) break;
      o.push(e);
    } else if (e < 2048) {
      if ((r -= 2) < 0) break;
      o.push(e >> 6 | 192, 63 & e | 128);
    } else if (e < 65536) {
      if ((r -= 3) < 0) break;
      o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128);
    } else {
      if (!(e < 1114112)) throw new Error("Invalid code point");
      if ((r -= 4) < 0) break;
      o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128);
    }
  }
  return o;
}

function V(t) {
  for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
  return r;
}

function W(t, r) {
  for (var e, n, i, o = [], f = 0; f < t.length && !((r -= 2) < 0); ++f) n = (e = t.charCodeAt(f)) >> 8, 
  i = e % 256, o.push(i), o.push(n);
  return o;
}

function X(r) {
  return t.toByteArray(Y(r));
}

function J(t, r, e, n) {
  for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) r[i + e] = t[i];
  return i;
}

function Z(t, r) {
  return t instanceof r || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === r.name;
}

function $(t) {
  return t != t;
}

var G = function() {
  for (var t = "0123456789abcdef", r = new Array(256), e = 0; e < 16; ++e) for (var n = 16 * e, i = 0; i < 16; ++i) r[n + i] = t[e] + t[i];
  return r;
}();

},{"base64-js":2,"ieee754":38}],7:[function(require,module,exports){
"use strict";

var t = this && this.__decorate || function(t, e, n, i) {
  var r, _ = arguments.length, s = _ < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (_ < 3 ? r(s) : _ > 3 ? r(e, n, s) : r(e, n)) || s);
  return _ > 3 && s && Object.defineProperty(e, n, s), s;
}, e = this && this.__importDefault || function(t) {
  return t && t.__esModule ? t : {
    default: t
  };
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const n = require("decorator-cache-getter"), i = e(require("versioning")), r = require("../utils/console");

class _ {
  constructor() {}
  static get _alloc() {
    return this.r("il2cpp_alloc", "pointer", [ "size_t" ]);
  }
  static get _arrayGetElements() {
    return this.r("il2cpp_array_get_elements", "pointer", [ "pointer" ]);
  }
  static get _arrayGetLength() {
    return this.r("il2cpp_array_length", "uint32", [ "pointer" ]);
  }
  static get _arrayNew() {
    return this.r("il2cpp_array_new", "pointer", [ "pointer", "uint32" ]);
  }
  static get _assemblyGetImage() {
    return this.r("il2cpp_assembly_get_image", "pointer", [ "pointer" ]);
  }
  static get _classForEach() {
    return this.r("il2cpp_class_for_each", "void", [ "pointer", "pointer" ]);
  }
  static get _classFromName() {
    return this.r("il2cpp_class_from_name", "pointer", [ "pointer", "pointer", "pointer" ]);
  }
  static get _classFromSystemType() {
    return this.r("il2cpp_class_from_system_type", "pointer", [ "pointer" ]);
  }
  static get _classFromType() {
    return this.r("il2cpp_class_from_type", "pointer", [ "pointer" ]);
  }
  static get _classGetActualInstanceSize() {
    return this.r("il2cpp_class_get_actual_instance_size", "int32", [ "pointer" ]);
  }
  static get _classGetArrayClass() {
    return this.r("il2cpp_array_class_get", "pointer", [ "pointer", "uint32" ]);
  }
  static get _classGetArrayElementSize() {
    return this.r("il2cpp_class_array_element_size", "int", [ "pointer" ]);
  }
  static get _classGetAssemblyName() {
    return this.r("il2cpp_class_get_assemblyname", "pointer", [ "pointer" ]);
  }
  static get _classGetBaseType() {
    return this.r("il2cpp_class_enum_basetype", "pointer", [ "pointer" ]);
  }
  static get _classGetDeclaringType() {
    return this.r("il2cpp_class_get_declaring_type", "pointer", [ "pointer" ]);
  }
  static get _classGetElementClass() {
    return this.r("il2cpp_class_get_element_class", "pointer", [ "pointer" ]);
  }
  static get _classGetFieldFromName() {
    return this.r("il2cpp_class_get_field_from_name", "pointer", [ "pointer", "pointer" ]);
  }
  static get _classGetFields() {
    return this.r("il2cpp_class_get_fields", "pointer", [ "pointer", "pointer" ]);
  }
  static get _classGetFlags() {
    return this.r("il2cpp_class_get_flags", "int", [ "pointer" ]);
  }
  static get _classGetImage() {
    return this.r("il2cpp_class_get_image", "pointer", [ "pointer" ]);
  }
  static get _classGetInstanceSize() {
    return this.r("il2cpp_class_instance_size", "int32", [ "pointer" ]);
  }
  static get _classGetInterfaces() {
    return this.r("il2cpp_class_get_interfaces", "pointer", [ "pointer", "pointer" ]);
  }
  static get _classGetMethodFromName() {
    return this.r("il2cpp_class_get_method_from_name", "pointer", [ "pointer", "pointer", "int" ]);
  }
  static get _classGetMethods() {
    return this.r("il2cpp_class_get_methods", "pointer", [ "pointer", "pointer" ]);
  }
  static get _classGetName() {
    return this.r("il2cpp_class_get_name", "pointer", [ "pointer" ]);
  }
  static get _classGetNamespace() {
    return this.r("il2cpp_class_get_namespace", "pointer", [ "pointer" ]);
  }
  static get _classGetNestedClasses() {
    return this.r("il2cpp_class_get_nested_types", "pointer", [ "pointer", "pointer" ]);
  }
  static get _classGetParent() {
    return this.r("il2cpp_class_get_parent", "pointer", [ "pointer" ]);
  }
  static get _classGetRank() {
    return this.r("il2cpp_class_get_rank", "int", [ "pointer" ]);
  }
  static get _classGetStaticFieldData() {
    return this.r("il2cpp_class_get_static_field_data", "pointer", [ "pointer" ]);
  }
  static get _classGetValueSize() {
    return this.r("il2cpp_class_value_size", "int32", [ "pointer", "pointer" ]);
  }
  static get _classGetType() {
    return this.r("il2cpp_class_get_type", "pointer", [ "pointer" ]);
  }
  static get _classHasReferences() {
    return this.r("il2cpp_class_has_references", "bool", [ "pointer" ]);
  }
  static get _classInit() {
    return this.r("il2cpp_runtime_class_init", "void", [ "pointer" ]);
  }
  static get _classIsAbstract() {
    return this.r("il2cpp_class_is_abstract", "bool", [ "pointer" ]);
  }
  static get _classIsAssignableFrom() {
    return this.r("il2cpp_class_is_assignable_from", "bool", [ "pointer", "pointer" ]);
  }
  static get _classIsBlittable() {
    return this.r("il2cpp_class_is_blittable", "bool", [ "pointer" ]);
  }
  static get _classIsEnum() {
    return this.r("il2cpp_class_is_enum", "bool", [ "pointer" ]);
  }
  static get _classIsGeneric() {
    return this.r("il2cpp_class_is_generic", "bool", [ "pointer" ]);
  }
  static get _classIsInflated() {
    return this.r("il2cpp_class_is_inflated", "bool", [ "pointer" ]);
  }
  static get _classIsInterface() {
    return this.r("il2cpp_class_is_interface", "bool", [ "pointer" ]);
  }
  static get _classIsSubclassOf() {
    return this.r("il2cpp_class_is_subclass_of", "bool", [ "pointer", "pointer", "bool" ]);
  }
  static get _classIsValueType() {
    return this.r("il2cpp_class_is_valuetype", "bool", [ "pointer" ]);
  }
  static get _domainAssemblyOpen() {
    return this.r("il2cpp_domain_assembly_open", "pointer", [ "pointer", "pointer" ]);
  }
  static get _domainGet() {
    return this.r("il2cpp_domain_get", "pointer", []);
  }
  static get _domainGetAssemblies() {
    return this.r("il2cpp_domain_get_assemblies", "pointer", [ "pointer", "pointer" ]);
  }
  static get _fieldGetModifier() {
    return this.r("il2cpp_field_get_modifier", "pointer", [ "pointer" ]);
  }
  static get _fieldGetClass() {
    return this.r("il2cpp_field_get_parent", "pointer", [ "pointer" ]);
  }
  static get _fieldGetFlags() {
    return this.r("il2cpp_field_get_flags", "int", [ "pointer" ]);
  }
  static get _fieldGetName() {
    return this.r("il2cpp_field_get_name", "pointer", [ "pointer" ]);
  }
  static get _fieldGetOffset() {
    return this.r("il2cpp_field_get_offset", "int32", [ "pointer" ]);
  }
  static get _fieldGetStaticValue() {
    return this.r("il2cpp_field_static_get_value", "void", [ "pointer", "pointer" ]);
  }
  static get _fieldGetType() {
    return this.r("il2cpp_field_get_type", "pointer", [ "pointer" ]);
  }
  static get _fieldIsLiteral() {
    return this.r("il2cpp_field_is_literal", "bool", [ "pointer" ]);
  }
  static get _fieldIsStatic() {
    return this.r("il2cpp_field_is_static", "bool", [ "pointer" ]);
  }
  static get _fieldIsThreadStatic() {
    return this.r("il2cpp_field_is_thread_static", "bool", [ "pointer" ]);
  }
  static get _fieldSetStaticValue() {
    return this.r("il2cpp_field_static_set_value", "void", [ "pointer", "pointer" ]);
  }
  static get _free() {
    return this.r("il2cpp_free", "void", [ "pointer" ]);
  }
  static get _gcCollect() {
    return this.r("il2cpp_gc_collect", "void", [ "int" ]);
  }
  static get _gcCollectALittle() {
    return this.r("il2cpp_gc_collect_a_little", "void", []);
  }
  static get _gcDisable() {
    return this.r("il2cpp_gc_disable", "void", []);
  }
  static get _gcEnable() {
    return this.r("il2cpp_gc_enable", "void", []);
  }
  static get _gcGetHeapSize() {
    return this.r("il2cpp_gc_get_heap_size", "int64", []);
  }
  static get _gcGetMaxTimeSlice() {
    return this.r("il2cpp_gc_get_max_time_slice_ns", "int64", []);
  }
  static get _gcGetUsedSize() {
    return this.r("il2cpp_gc_get_used_size", "int64", []);
  }
  static get _gcHandleGetTarget() {
    return this.r("il2cpp_gchandle_get_target", "pointer", [ "uint32" ]);
  }
  static get _gcHandleFree() {
    return this.r("il2cpp_gchandle_free", "void", [ "uint32" ]);
  }
  static get _gcHandleNew() {
    return this.r("il2cpp_gchandle_new", "uint32", [ "pointer", "bool" ]);
  }
  static get _gcHandleNewWeakRef() {
    return this.r("il2cpp_gchandle_new_weakref", "uint32", [ "pointer", "bool" ]);
  }
  static get _gcIsDisabled() {
    return this.r("il2cpp_gc_is_disabled", "bool", []);
  }
  static get _gcIsIncremental() {
    return this.r("il2cpp_gc_is_incremental", "bool", []);
  }
  static get _gcSetMaxTimeSlice() {
    return this.r("il2cpp_gc_set_max_time_slice_ns", "void", [ "int64" ]);
  }
  static get _gcStartIncrementalCollection() {
    return this.r("il2cpp_gc_start_incremental_collection", "void", []);
  }
  static get _gcStartWorld() {
    return this.r("il2cpp_start_gc_world", "void", []);
  }
  static get _gcStopWorld() {
    return this.r("il2cpp_stop_gc_world", "void", []);
  }
  static get _getCorlib() {
    return this.r("il2cpp_get_corlib", "pointer", []);
  }
  static get _imageGetAssembly() {
    return this.r("il2cpp_image_get_assembly", "pointer", [ "pointer" ]);
  }
  static get _imageGetClass() {
    return this.r("il2cpp_image_get_class", "pointer", [ "pointer", "uint" ]);
  }
  static get _imageGetClassCount() {
    return this.r("il2cpp_image_get_class_count", "uint32", [ "pointer" ]);
  }
  static get _imageGetName() {
    return this.r("il2cpp_image_get_name", "pointer", [ "pointer" ]);
  }
  static get _init() {
    return this.r("il2cpp_init", "void", []);
  }
  static get _livenessAllocateStruct() {
    return this.r("il2cpp_unity_liveness_allocate_struct", "pointer", [ "pointer", "int", "pointer", "pointer", "pointer" ]);
  }
  static get _livenessCalculationBegin() {
    return this.r("il2cpp_unity_liveness_calculation_begin", "pointer", [ "pointer", "int", "pointer", "pointer", "pointer", "pointer" ]);
  }
  static get _livenessCalculationEnd() {
    return this.r("il2cpp_unity_liveness_calculation_end", "void", [ "pointer" ]);
  }
  static get _livenessCalculationFromStatics() {
    return this.r("il2cpp_unity_liveness_calculation_from_statics", "void", [ "pointer" ]);
  }
  static get _livenessFinalize() {
    return this.r("il2cpp_unity_liveness_finalize", "void", [ "pointer" ]);
  }
  static get _livenessFreeStruct() {
    return this.r("il2cpp_unity_liveness_free_struct", "void", [ "pointer" ]);
  }
  static get _memorySnapshotCapture() {
    return this.r("il2cpp_capture_memory_snapshot", "pointer", []);
  }
  static get _memorySnapshotFree() {
    return this.r("il2cpp_free_captured_memory_snapshot", "void", [ "pointer" ]);
  }
  static get _memorySnapshotGetClasses() {
    return this.r("il2cpp_memory_snapshot_get_classes", "pointer", [ "pointer", "pointer" ]);
  }
  static get _memorySnapshotGetGCHandles() {
    return this.r("il2cpp_memory_snapshot_get_gc_handles", [ "uint32", "pointer" ], [ "pointer" ]);
  }
  static get _memorySnapshotGetRuntimeInformation() {
    return this.r("il2cpp_memory_snapshot_get_information", [ "uint32", "uint32", "uint32", "uint32", "uint32", "uint32" ], [ "pointer" ]);
  }
  static get _methodGetModifier() {
    return this.r("il2cpp_method_get_modifier", "pointer", [ "pointer" ]);
  }
  static get _methodGetClass() {
    return this.r("il2cpp_method_get_class", "pointer", [ "pointer" ]);
  }
  static get _methodGetFlags() {
    return this.r("il2cpp_method_get_flags", "uint32", [ "pointer", "pointer" ]);
  }
  static get _methodGetFromReflection() {
    return this.r("il2cpp_method_get_from_reflection", "pointer", [ "pointer" ]);
  }
  static get _methodGetName() {
    return this.r("il2cpp_method_get_name", "pointer", [ "pointer" ]);
  }
  static get _methodGetObject() {
    return this.r("il2cpp_method_get_object", "pointer", [ "pointer", "pointer" ]);
  }
  static get _methodGetParameterCount() {
    return this.r("il2cpp_method_get_param_count", "uint8", [ "pointer" ]);
  }
  static get _methodGetParameterName() {
    return this.r("il2cpp_method_get_param_name", "pointer", [ "pointer", "uint32" ]);
  }
  static get _methodGetParameters() {
    return this.r("il2cpp_method_get_parameters", "pointer", [ "pointer", "pointer" ]);
  }
  static get _methodGetParameterType() {
    return this.r("il2cpp_method_get_param", "pointer", [ "pointer", "uint32" ]);
  }
  static get _methodGetPointer() {
    return this.r("il2cpp_method_get_pointer", "pointer", [ "pointer" ]);
  }
  static get _methodGetReturnType() {
    return this.r("il2cpp_method_get_return_type", "pointer", [ "pointer" ]);
  }
  static get _methodIsExternal() {
    return this.r("il2cpp_method_is_external", "bool", [ "pointer" ]);
  }
  static get _methodIsGeneric() {
    return this.r("il2cpp_method_is_generic", "bool", [ "pointer" ]);
  }
  static get _methodIsInflated() {
    return this.r("il2cpp_method_is_inflated", "bool", [ "pointer" ]);
  }
  static get _methodIsInstance() {
    return this.r("il2cpp_method_is_instance", "bool", [ "pointer" ]);
  }
  static get _methodIsSynchronized() {
    return this.r("il2cpp_method_is_synchronized", "bool", [ "pointer" ]);
  }
  static get _monitorEnter() {
    return this.r("il2cpp_monitor_enter", "void", [ "pointer" ]);
  }
  static get _monitorExit() {
    return this.r("il2cpp_monitor_exit", "void", [ "pointer" ]);
  }
  static get _monitorPulse() {
    return this.r("il2cpp_monitor_pulse", "void", [ "pointer" ]);
  }
  static get _monitorPulseAll() {
    return this.r("il2cpp_monitor_pulse_all", "void", [ "pointer" ]);
  }
  static get _monitorTryEnter() {
    return this.r("il2cpp_monitor_try_enter", "bool", [ "pointer", "uint32" ]);
  }
  static get _monitorTryWait() {
    return this.r("il2cpp_monitor_try_wait", "bool", [ "pointer", "uint32" ]);
  }
  static get _monitorWait() {
    return this.r("il2cpp_monitor_wait", "void", [ "pointer" ]);
  }
  static get _objectGetClass() {
    return this.r("il2cpp_object_get_class", "pointer", [ "pointer" ]);
  }
  static get _objectGetVirtualMethod() {
    return this.r("il2cpp_object_get_virtual_method", "pointer", [ "pointer", "pointer" ]);
  }
  static get _objectInit() {
    return this.r("il2cpp_runtime_object_init_exception", "void", [ "pointer", "pointer" ]);
  }
  static get _objectNew() {
    return this.r("il2cpp_object_new", "pointer", [ "pointer" ]);
  }
  static get _objectGetSize() {
    return this.r("il2cpp_object_get_size", "uint32", [ "pointer" ]);
  }
  static get _objectUnbox() {
    return this.r("il2cpp_object_unbox", "pointer", [ "pointer" ]);
  }
  static get _resolveInternalCall() {
    return this.r("il2cpp_resolve_icall", "pointer", [ "pointer" ]);
  }
  static get _stringChars() {
    return this.r("il2cpp_string_chars", "pointer", [ "pointer" ]);
  }
  static get _stringLength() {
    return this.r("il2cpp_string_length", "int32", [ "pointer" ]);
  }
  static get _stringNew() {
    return this.r("il2cpp_string_new", "pointer", [ "pointer" ]);
  }
  static get _stringSetLength() {
    return this.r("il2cpp_string_set_length", "void", [ "pointer", "int32" ]);
  }
  static get _valueBox() {
    return this.r("il2cpp_value_box", "pointer", [ "pointer", "pointer" ]);
  }
  static get _threadAttach() {
    return this.r("il2cpp_thread_attach", "pointer", [ "pointer" ]);
  }
  static get _threadCurrent() {
    return this.r("il2cpp_thread_current", "pointer", []);
  }
  static get _threadGetAllAttachedThreads() {
    return this.r("il2cpp_thread_get_all_attached_threads", "pointer", [ "pointer" ]);
  }
  static get _threadIsVm() {
    return this.r("il2cpp_is_vm_thread", "bool", [ "pointer" ]);
  }
  static get _threadDetach() {
    return this.r("il2cpp_thread_detach", "void", [ "pointer" ]);
  }
  static get _typeGetName() {
    return this.r("il2cpp_type_get_name", "pointer", [ "pointer" ]);
  }
  static get _typeGetObject() {
    return this.r("il2cpp_type_get_object", "pointer", [ "pointer" ]);
  }
  static get _typeGetTypeEnum() {
    return this.r("il2cpp_type_get_type", "int", [ "pointer" ]);
  }
  static get _typeIsByReference() {
    return this.r("il2cpp_type_is_byref", "bool", [ "pointer" ]);
  }
  static get _typeIsPrimitive() {
    return this.r("il2cpp_type_is_primitive", "bool", [ "pointer" ]);
  }
  static get cModule() {
    (i.default.lt(Il2Cpp.unityVersion, "5.3.0") || i.default.gte(Il2Cpp.unityVersion, "2022.2.0")) && (0, 
    r.warn)(`current Unity version ${Il2Cpp.unityVersion} is not supported, expect breakage`);
    const t = new CModule("#include <stdint.h>\n\n#define OFFSET_OF(name, type)     int16_t name (char * p,                  type e)    {        for (int16_t i = 0; i < 512; i++) if (* ((type *) p + i) == e) return i;        return -1;    }\n\nOFFSET_OF (offset_of_int32, int32_t)\nOFFSET_OF (offset_of_pointer, void *)\n            "), e = new NativeFunction(t.offset_of_int32, "int16", [ "pointer", "int32" ]), n = new NativeFunction(t.offset_of_pointer, "int16", [ "pointer", "pointer" ]), _ = Il2Cpp.Image.corlib.class("System.String"), s = Il2Cpp.Image.corlib.class("System.DateTime"), a = Il2Cpp.Image.corlib.class("System.Reflection.Module");
    s.initialize(), a.initialize();
    const l = (s.tryField("daysmonth") ?? s.tryField("DaysToMonth365") ?? s.field("s_daysToMonth365")).value, c = a.field("FilterTypeName").value, p = c.field("method_ptr").value, o = c.field("method").value, u = `#include <stdint.h>\n#include <string.h>\n\n\ntypedef struct _Il2CppObject Il2CppObject;\ntypedef enum _Il2CppTypeEnum Il2CppTypeEnum;\ntypedef struct _Il2CppReflectionMethod Il2CppReflectionMethod;\ntypedef struct _Il2CppManagedMemorySnapshot Il2CppManagedMemorySnapshot;\ntypedef struct _Il2CppMetadataType Il2CppMetadataType;\n\n\nstruct _Il2CppObject\n{\n    void * class;\n    void * monitor;\n};\n\nenum _Il2CppTypeEnum\n{\n    IL2CPP_TYPE_END = 0x00,\n    IL2CPP_TYPE_VOID = 0x01,\n    IL2CPP_TYPE_BOOLEAN = 0x02,\n    IL2CPP_TYPE_CHAR = 0x03,\n    IL2CPP_TYPE_I1 = 0x04,\n    IL2CPP_TYPE_U1 = 0x05,\n    IL2CPP_TYPE_I2 = 0x06,\n    IL2CPP_TYPE_U2 = 0x07,\n    IL2CPP_TYPE_I4 = 0x08,\n    IL2CPP_TYPE_U4 = 0x09,\n    IL2CPP_TYPE_I8 = 0x0a,\n    IL2CPP_TYPE_U8 = 0x0b,\n    IL2CPP_TYPE_R4 = 0x0c,\n    IL2CPP_TYPE_R8 = 0x0d,\n    IL2CPP_TYPE_STRING = 0x0e,\n    IL2CPP_TYPE_PTR = 0x0f,\n    IL2CPP_TYPE_BYREF = 0x10,\n    IL2CPP_TYPE_VALUETYPE = 0x11,\n    IL2CPP_TYPE_CLASS = 0x12,\n    IL2CPP_TYPE_VAR = 0x13,\n    IL2CPP_TYPE_ARRAY = 0x14,\n    IL2CPP_TYPE_GENERICINST = 0x15,\n    IL2CPP_TYPE_TYPEDBYREF = 0x16,\n    IL2CPP_TYPE_I = 0x18,\n    IL2CPP_TYPE_U = 0x19,\n    IL2CPP_TYPE_FNPTR = 0x1b,\n    IL2CPP_TYPE_OBJECT = 0x1c,\n    IL2CPP_TYPE_SZARRAY = 0x1d,\n    IL2CPP_TYPE_MVAR = 0x1e,\n    IL2CPP_TYPE_CMOD_REQD = 0x1f,\n    IL2CPP_TYPE_CMOD_OPT = 0x20,\n    IL2CPP_TYPE_INTERNAL = 0x21,\n    IL2CPP_TYPE_MODIFIER = 0x40,\n    IL2CPP_TYPE_SENTINEL = 0x41,\n    IL2CPP_TYPE_PINNED = 0x45,\n    IL2CPP_TYPE_ENUM = 0x55\n};\n\nstruct _Il2CppReflectionMethod\n{\n    Il2CppObject object;\n    void * method;\n    void * name;\n    void * reftype;\n};\n\nstruct _Il2CppManagedMemorySnapshot\n{\n    struct Il2CppManagedHeap\n    {\n        uint32_t section_count;\n        void * sections;\n    } heap;\n    struct Il2CppStacks\n    {\n        uint32_t stack_count;\n        void * stacks;\n    } stacks;\n    struct Il2CppMetadataSnapshot\n    {\n        uint32_t type_count;\n        Il2CppMetadataType * types;\n    } metadata_snapshot;\n    struct Il2CppGCHandles\n    {\n        uint32_t tracked_object_count;\n        Il2CppObject ** pointers_to_objects;\n    } gc_handles;\n    struct Il2CppRuntimeInformation\n    {\n        uint32_t pointer_size;\n        uint32_t object_header_size;\n        uint32_t array_header_size;\n        uint32_t array_bounds_offset_in_header;\n        uint32_t array_size_offset_in_header;\n        uint32_t allocation_granularity;\n    } runtime_information;\n    void * additional_user_information;\n};\n\nstruct _Il2CppMetadataType\n{\n    uint32_t flags;\n    void * fields;\n    uint32_t field_count;\n    uint32_t statics_size;\n    uint8_t * statics;\n    uint32_t base_or_element_type_index;\n    char * name;\n    const char * assembly_name;\n    uint64_t type_info_address;\n    uint32_t size;\n};\n\n\n#define THREAD_STATIC_FIELD_OFFSET -1;\n\n#define FIELD_ATTRIBUTE_FIELD_ACCESS_MASK 0x0007\n#define FIELD_ATTRIBUTE_COMPILER_CONTROLLED 0x0000\n#define FIELD_ATTRIBUTE_PRIVATE 0x0001\n#define FIELD_ATTRIBUTE_FAM_AND_ASSEM 0x0002\n#define FIELD_ATTRIBUTE_ASSEMBLY 0x0003\n#define FIELD_ATTRIBUTE_FAMILY 0x0004\n#define FIELD_ATTRIBUTE_FAM_OR_ASSEM 0x0005\n#define FIELD_ATTRIBUTE_PUBLIC 0x0006\n\n#define FIELD_ATTRIBUTE_STATIC 0x0010\n#define FIELD_ATTRIBUTE_LITERAL 0x0040\n\n#define METHOD_ATTRIBUTE_MEMBER_ACCESS_MASK 0x0007\n#define METHOD_ATTRIBUTE_COMPILER_CONTROLLED 0x0000\n#define METHOD_ATTRIBUTE_PRIVATE 0x0001\n#define METHOD_ATTRIBUTE_FAM_AND_ASSEM 0x0002\n#define METHOD_ATTRIBUTE_ASSEMBLY 0x0003\n#define METHOD_ATTRIBUTE_FAMILY 0x0004\n#define METHOD_ATTRIBUTE_FAM_OR_ASSEM 0x0005\n#define METHOD_ATTRIBUTE_PUBLIC 0x0006\n\n#define METHOD_ATTRIBUTE_STATIC 0x0010\n#define METHOD_IMPL_ATTRIBUTE_INTERNAL_CALL 0x1000\n#define METHOD_IMPL_ATTRIBUTE_SYNCHRONIZED 0x0020\n\n\nstatic const char * (*il2cpp_class_get_name) (void *) = (void *) ${this._classGetName};\nstatic int (*il2cpp_field_get_flags) (void *) = (void *) ${this._fieldGetFlags};\nstatic size_t (*il2cpp_field_get_offset) (void *) = (void *) ${this._fieldGetOffset};\nstatic uint32_t (*il2cpp_method_get_flags) (void *, uint32_t *) = (void *) ${this._methodGetFlags};\nstatic char * (*il2cpp_type_get_name) (void *) = (void *) ${this._typeGetName};\nstatic Il2CppTypeEnum (*il2cpp_type_get_type_enum) (void *) = (void *) ${this._typeGetTypeEnum};\nstatic void (*il2cpp_free) (void * pointer) = (void *) ${this._free};\n\n\nvoid\nil2cpp_string_set_length (int32_t * string,\n                          int32_t length)\n{\n    *(string + ${e(Il2Cpp.String.from("vfsfitvnm"), 9)}) = length;\n}\n\nvoid *\nil2cpp_array_get_elements (int32_t * array)\n{ \n    return array + ${e(l, 31) - 1};\n}\n\nuint8_t\nil2cpp_type_is_byref (void * type)\n{   \n    char * name;\n    char last_char;\n\n    name = il2cpp_type_get_name (type);\n    last_char = name[strlen (name) - 1];\n\n    il2cpp_free (name);\n    return last_char == '&';\n}\n\nuint8_t\nil2cpp_type_is_primitive (void * type)\n{\n    Il2CppTypeEnum type_enum;\n\n    type_enum = il2cpp_type_get_type_enum (type);\n\n    return ((type_enum >= IL2CPP_TYPE_BOOLEAN && \n        type_enum <= IL2CPP_TYPE_R8) || \n        type_enum == IL2CPP_TYPE_I || \n        type_enum == IL2CPP_TYPE_U\n    );\n}\n\nint32_t\nil2cpp_class_get_actual_instance_size (int32_t * class)\n{\n    return *(class + ${e(_, _.instanceSize - 2)});\n}\n\nuint8_t\nil2cpp_class_get_rank (void * class)\n{\n    uint8_t rank;\n    const char * name;\n    \n    rank = 0;\n    name = il2cpp_class_get_name (class);\n\n    for (uint16_t i = strlen (name) - 1; i > 0; i--)\n    {\n        char c = name[i];\n\n        if (c == ']') rank++;\n        else if (c == '[' || rank == 0) break;\n        else if (c == ',') rank++;\n        else break;\n    }\n\n    return rank;\n}\n\nconst char *\nil2cpp_field_get_modifier (void * field)\n{   \n    int flags;\n\n    flags = il2cpp_field_get_flags (field);\n\n    switch (flags & FIELD_ATTRIBUTE_FIELD_ACCESS_MASK) {\n        case FIELD_ATTRIBUTE_PRIVATE:\n            return "private";\n        case FIELD_ATTRIBUTE_FAM_AND_ASSEM:\n            return "private protected";\n        case FIELD_ATTRIBUTE_ASSEMBLY:\n            return "internal";\n        case FIELD_ATTRIBUTE_FAMILY:\n            return "protected";\n        case FIELD_ATTRIBUTE_FAM_OR_ASSEM:\n            return "protected internal";\n        case FIELD_ATTRIBUTE_PUBLIC:\n            return "public";\n    }\n\n    return "";\n}\n\nuint8_t\nil2cpp_field_is_literal (void * field)\n{\n    return (il2cpp_field_get_flags (field) & FIELD_ATTRIBUTE_LITERAL) != 0;\n}\n\nuint8_t\nil2cpp_field_is_static (void * field)\n{\n    return (il2cpp_field_get_flags (field) & FIELD_ATTRIBUTE_STATIC) != 0;\n}\n\nuint8_t\nil2cpp_field_is_thread_static (void * field)\n{\n    return il2cpp_field_get_offset (field) == THREAD_STATIC_FIELD_OFFSET;\n}\n\nconst char *\nil2cpp_method_get_modifier (void * method)\n{\n    uint32_t flags;\n\n    flags = il2cpp_method_get_flags (method, NULL);\n\n    switch (flags & METHOD_ATTRIBUTE_MEMBER_ACCESS_MASK) {\n        case METHOD_ATTRIBUTE_PRIVATE:\n            return "private";\n        case METHOD_ATTRIBUTE_FAM_AND_ASSEM:\n            return "private protected";\n        case METHOD_ATTRIBUTE_ASSEMBLY:\n            return "internal";\n        case METHOD_ATTRIBUTE_FAMILY:\n            return "protected";\n        case METHOD_ATTRIBUTE_FAM_OR_ASSEM:\n            return "protected internal";\n        case METHOD_ATTRIBUTE_PUBLIC:\n            return "public";\n    }\n\n    return "";\n}\n\nvoid *\nil2cpp_method_get_from_reflection (const Il2CppReflectionMethod * method)\n{\n    return method->method;\n}\n\nvoid *\nil2cpp_method_get_pointer (void ** method)\n{\n    return * (method + ${n(o, p)});\n}\n\nuint8_t\nil2cpp_method_is_external (void * method)\n{\n    uint32_t implementation_flags;\n\n    il2cpp_method_get_flags (method, &implementation_flags);\n\n    return (implementation_flags & METHOD_IMPL_ATTRIBUTE_INTERNAL_CALL) != 0;\n}\n\nuint8_t\nil2cpp_method_is_synchronized (void * method)\n{\n    uint32_t implementation_flags;\n\n    il2cpp_method_get_flags (method, &implementation_flags);\n\n    return (implementation_flags & METHOD_IMPL_ATTRIBUTE_SYNCHRONIZED) != 0;\n}\n\nuintptr_t\nil2cpp_memory_snapshot_get_classes (const Il2CppManagedMemorySnapshot * snapshot,\n                                    Il2CppMetadataType ** iter)\n{\n    const int zero;\n    const void * null;\n\n    if (iter != NULL && snapshot->metadata_snapshot.type_count > zero)\n    {\n        if (*iter == null)\n        {\n            *iter = snapshot->metadata_snapshot.types;\n            return (uintptr_t) (*iter)->type_info_address;\n        }\n        else\n        {\n            Il2CppMetadataType * metadata_type = *iter + 1;\n\n            if (metadata_type < snapshot->metadata_snapshot.types + snapshot->metadata_snapshot.type_count)\n            {\n                *iter = metadata_type;\n                return (uintptr_t) (*iter)->type_info_address;\n            }\n        }\n    }\n    return 0;\n}\n\nstruct Il2CppGCHandles\nil2cpp_memory_snapshot_get_gc_handles (const Il2CppManagedMemorySnapshot * snapshot)\n{\n    return snapshot->gc_handles;\n}\n\nstruct Il2CppRuntimeInformation\nil2cpp_memory_snapshot_get_information (const Il2CppManagedMemorySnapshot * snapshot)\n{\n    return snapshot->runtime_information;\n}\n        `;
    return t.dispose(), new CModule(u);
  }
  static r(t, e, n) {
    const i = Il2Cpp.module.findExportByName(t) ?? this.cModule[t];
    return null == i && (0, r.raise)(`cannot resolve export ${t}`), new NativeFunction(i, e, n);
  }
}

t([ n.cache ], _, "_alloc", null), t([ n.cache ], _, "_arrayGetElements", null), 
t([ n.cache ], _, "_arrayGetLength", null), t([ n.cache ], _, "_arrayNew", null), 
t([ n.cache ], _, "_assemblyGetImage", null), t([ n.cache ], _, "_classForEach", null), 
t([ n.cache ], _, "_classFromName", null), t([ n.cache ], _, "_classFromSystemType", null), 
t([ n.cache ], _, "_classFromType", null), t([ n.cache ], _, "_classGetActualInstanceSize", null), 
t([ n.cache ], _, "_classGetArrayClass", null), t([ n.cache ], _, "_classGetArrayElementSize", null), 
t([ n.cache ], _, "_classGetAssemblyName", null), t([ n.cache ], _, "_classGetBaseType", null), 
t([ n.cache ], _, "_classGetDeclaringType", null), t([ n.cache ], _, "_classGetElementClass", null), 
t([ n.cache ], _, "_classGetFieldFromName", null), t([ n.cache ], _, "_classGetFields", null), 
t([ n.cache ], _, "_classGetFlags", null), t([ n.cache ], _, "_classGetImage", null), 
t([ n.cache ], _, "_classGetInstanceSize", null), t([ n.cache ], _, "_classGetInterfaces", null), 
t([ n.cache ], _, "_classGetMethodFromName", null), t([ n.cache ], _, "_classGetMethods", null), 
t([ n.cache ], _, "_classGetName", null), t([ n.cache ], _, "_classGetNamespace", null), 
t([ n.cache ], _, "_classGetNestedClasses", null), t([ n.cache ], _, "_classGetParent", null), 
t([ n.cache ], _, "_classGetRank", null), t([ n.cache ], _, "_classGetStaticFieldData", null), 
t([ n.cache ], _, "_classGetValueSize", null), t([ n.cache ], _, "_classGetType", null), 
t([ n.cache ], _, "_classHasReferences", null), t([ n.cache ], _, "_classInit", null), 
t([ n.cache ], _, "_classIsAbstract", null), t([ n.cache ], _, "_classIsAssignableFrom", null), 
t([ n.cache ], _, "_classIsBlittable", null), t([ n.cache ], _, "_classIsEnum", null), 
t([ n.cache ], _, "_classIsGeneric", null), t([ n.cache ], _, "_classIsInflated", null), 
t([ n.cache ], _, "_classIsInterface", null), t([ n.cache ], _, "_classIsSubclassOf", null), 
t([ n.cache ], _, "_classIsValueType", null), t([ n.cache ], _, "_domainAssemblyOpen", null), 
t([ n.cache ], _, "_domainGet", null), t([ n.cache ], _, "_domainGetAssemblies", null), 
t([ n.cache ], _, "_fieldGetModifier", null), t([ n.cache ], _, "_fieldGetClass", null), 
t([ n.cache ], _, "_fieldGetFlags", null), t([ n.cache ], _, "_fieldGetName", null), 
t([ n.cache ], _, "_fieldGetOffset", null), t([ n.cache ], _, "_fieldGetStaticValue", null), 
t([ n.cache ], _, "_fieldGetType", null), t([ n.cache ], _, "_fieldIsLiteral", null), 
t([ n.cache ], _, "_fieldIsStatic", null), t([ n.cache ], _, "_fieldIsThreadStatic", null), 
t([ n.cache ], _, "_fieldSetStaticValue", null), t([ n.cache ], _, "_free", null), 
t([ n.cache ], _, "_gcCollect", null), t([ n.cache ], _, "_gcCollectALittle", null), 
t([ n.cache ], _, "_gcDisable", null), t([ n.cache ], _, "_gcEnable", null), t([ n.cache ], _, "_gcGetHeapSize", null), 
t([ n.cache ], _, "_gcGetMaxTimeSlice", null), t([ n.cache ], _, "_gcGetUsedSize", null), 
t([ n.cache ], _, "_gcHandleGetTarget", null), t([ n.cache ], _, "_gcHandleFree", null), 
t([ n.cache ], _, "_gcHandleNew", null), t([ n.cache ], _, "_gcHandleNewWeakRef", null), 
t([ n.cache ], _, "_gcIsDisabled", null), t([ n.cache ], _, "_gcIsIncremental", null), 
t([ n.cache ], _, "_gcSetMaxTimeSlice", null), t([ n.cache ], _, "_gcStartIncrementalCollection", null), 
t([ n.cache ], _, "_gcStartWorld", null), t([ n.cache ], _, "_gcStopWorld", null), 
t([ n.cache ], _, "_getCorlib", null), t([ n.cache ], _, "_imageGetAssembly", null), 
t([ n.cache ], _, "_imageGetClass", null), t([ n.cache ], _, "_imageGetClassCount", null), 
t([ n.cache ], _, "_imageGetName", null), t([ n.cache ], _, "_init", null), t([ n.cache ], _, "_livenessAllocateStruct", null), 
t([ n.cache ], _, "_livenessCalculationBegin", null), t([ n.cache ], _, "_livenessCalculationEnd", null), 
t([ n.cache ], _, "_livenessCalculationFromStatics", null), t([ n.cache ], _, "_livenessFinalize", null), 
t([ n.cache ], _, "_livenessFreeStruct", null), t([ n.cache ], _, "_memorySnapshotCapture", null), 
t([ n.cache ], _, "_memorySnapshotFree", null), t([ n.cache ], _, "_memorySnapshotGetClasses", null), 
t([ n.cache ], _, "_memorySnapshotGetGCHandles", null), t([ n.cache ], _, "_memorySnapshotGetRuntimeInformation", null), 
t([ n.cache ], _, "_methodGetModifier", null), t([ n.cache ], _, "_methodGetClass", null), 
t([ n.cache ], _, "_methodGetFlags", null), t([ n.cache ], _, "_methodGetFromReflection", null), 
t([ n.cache ], _, "_methodGetName", null), t([ n.cache ], _, "_methodGetObject", null), 
t([ n.cache ], _, "_methodGetParameterCount", null), t([ n.cache ], _, "_methodGetParameterName", null), 
t([ n.cache ], _, "_methodGetParameters", null), t([ n.cache ], _, "_methodGetParameterType", null), 
t([ n.cache ], _, "_methodGetPointer", null), t([ n.cache ], _, "_methodGetReturnType", null), 
t([ n.cache ], _, "_methodIsExternal", null), t([ n.cache ], _, "_methodIsGeneric", null), 
t([ n.cache ], _, "_methodIsInflated", null), t([ n.cache ], _, "_methodIsInstance", null), 
t([ n.cache ], _, "_methodIsSynchronized", null), t([ n.cache ], _, "_monitorEnter", null), 
t([ n.cache ], _, "_monitorExit", null), t([ n.cache ], _, "_monitorPulse", null), 
t([ n.cache ], _, "_monitorPulseAll", null), t([ n.cache ], _, "_monitorTryEnter", null), 
t([ n.cache ], _, "_monitorTryWait", null), t([ n.cache ], _, "_monitorWait", null), 
t([ n.cache ], _, "_objectGetClass", null), t([ n.cache ], _, "_objectGetVirtualMethod", null), 
t([ n.cache ], _, "_objectInit", null), t([ n.cache ], _, "_objectNew", null), t([ n.cache ], _, "_objectGetSize", null), 
t([ n.cache ], _, "_objectUnbox", null), t([ n.cache ], _, "_resolveInternalCall", null), 
t([ n.cache ], _, "_stringChars", null), t([ n.cache ], _, "_stringLength", null), 
t([ n.cache ], _, "_stringNew", null), t([ n.cache ], _, "_stringSetLength", null), 
t([ n.cache ], _, "_valueBox", null), t([ n.cache ], _, "_threadAttach", null), 
t([ n.cache ], _, "_threadCurrent", null), t([ n.cache ], _, "_threadGetAllAttachedThreads", null), 
t([ n.cache ], _, "_threadIsVm", null), t([ n.cache ], _, "_threadDetach", null), 
t([ n.cache ], _, "_typeGetName", null), t([ n.cache ], _, "_typeGetObject", null), 
t([ n.cache ], _, "_typeGetTypeEnum", null), t([ n.cache ], _, "_typeIsByReference", null), 
t([ n.cache ], _, "_typeIsPrimitive", null), t([ n.cache ], _, "cModule", null), 
Il2Cpp.Api = _;

},{"../utils/console":34,"decorator-cache-getter":3,"versioning":41}],8:[function(require,module,exports){
(function (setImmediate){(function (){
"use strict";

var e = this && this.__decorate || function(e, t, n, i) {
  var r, a = arguments.length, l = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, n, i); else for (var o = e.length - 1; o >= 0; o--) (r = e[o]) && (l = (a < 3 ? r(l) : a > 3 ? r(t, n, l) : r(t, n)) || l);
  return a > 3 && l && Object.defineProperty(t, n, l), l;
}, t = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const n = require("decorator-cache-getter"), i = t(require("versioning")), r = require("../utils/console"), a = require("../utils/native-wait");

class l {
  constructor() {}
  static get moduleName() {
    switch (Process.platform) {
     case "linux":
      try {
        Java.androidVersion;
        return "libil2cpp.so";
      } catch (e) {
        return "GameAssembly.so";
      }

     case "windows":
      return "GameAssembly.dll";

     case "darwin":
      try {
        return "UnityFramework";
      } catch (e) {
        return "GameAssembly.dylib";
      }
    }
    (0, r.raise)(`${Process.platform} is not supported yet`);
  }
  static get applicationDataPath() {
    const e = this.internalCall("UnityEngine.Application::get_persistentDataPath", "pointer", []);
    return new Il2Cpp.String(e()).content;
  }
  static get applicationIdentifier() {
    const e = this.internalCall("UnityEngine.Application::get_identifier", "pointer", []) ?? this.internalCall("UnityEngine.Application::get_bundleIdentifier", "pointer", []);
    return e ? new Il2Cpp.String(e()).content : null;
  }
  static get applicationVersion() {
    const e = this.internalCall("UnityEngine.Application::get_version", "pointer", []);
    return e ? new Il2Cpp.String(e()).content : null;
  }
  static get attachedThreads() {
    null == Il2Cpp.currentThread && (0, r.raise)("only Il2Cpp threads can invoke Il2Cpp.attachedThreads");
    const e = [], t = Memory.alloc(Process.pointerSize), n = Il2Cpp.Api._threadGetAllAttachedThreads(t), i = t.readInt();
    for (let t = 0; t < i; t++) e.push(new Il2Cpp.Thread(n.add(t * Process.pointerSize).readPointer()));
    return e;
  }
  static get currentThread() {
    const e = Il2Cpp.Api._threadCurrent();
    return e.isNull() ? null : new Il2Cpp.Thread(e);
  }
  static get module() {
    return Process.getModuleByName(this.moduleName);
  }
  static get unityVersion() {
    const e = this.internalCall("UnityEngine.Application::get_unityVersion", "pointer", []);
    return null == e && (0, r.raise)("couldn't determine the Unity version, please specify it manually"), 
    new Il2Cpp.String(e()).content;
  }
  static get unityVersionIsBelow201830() {
    return i.default.lt(this.unityVersion, "2018.3.0");
  }
  static alloc(e = Process.pointerSize) {
    return Il2Cpp.Api._alloc(e);
  }
  static dump(e, t) {
    e = e ?? `${Il2Cpp.applicationIdentifier ?? "unknown"}_${Il2Cpp.applicationVersion ?? "unknown"}.cs`;
    const n = `${t ?? Il2Cpp.applicationDataPath}/${e}`, i = new File(n, "w");
    for (const e of Il2Cpp.Domain.assemblies) {
      (0, r.inform)(`dumping ${e.name}...`);
      for (const t of e.image.classes) i.write(`${t}\n\n`);
    }
    i.flush(), i.close(), (0, r.ok)(`dump saved to ${n}`);
  }
  static free(e) {
    return Il2Cpp.Api._free(e);
  }
  static async initialize() {
    if ("darwin" == Process.platform) {
      let e = Process.findModuleByAddress(Module.findExportByName(null, "il2cpp_init") ?? NULL)?.name;
      null == e && (e = await (0, a.forModule)("UnityFramework", "GameAssembly.dylib")), 
      Reflect.defineProperty(Il2Cpp, "moduleName", {
        value: e
      });
    } else await (0, a.forModule)(this.moduleName);
    Il2Cpp.Api._getCorlib().isNull() && await new Promise((e => {
      const t = Interceptor.attach(Il2Cpp.Api._init, {
        onLeave() {
          t.detach(), setImmediate(e);
        }
      });
    }));
  }
  static installExceptionListener(e = "current") {
    const t = Process.getCurrentThreadId();
    return Interceptor.attach(Il2Cpp.module.getExportByName("__cxa_throw"), (function(n) {
      "current" == e && this.threadId != t || (0, r.inform)(new Il2Cpp.Object(n[0].readPointer()));
    }));
  }
  static internalCall(e, t, n) {
    const i = Il2Cpp.Api._resolveInternalCall(Memory.allocUtf8String(e));
    return i.isNull() ? null : new NativeFunction(i, t, n);
  }
  static scheduleOnInitializerThread(e) {
    return new Promise((t => {
      const n = Interceptor.attach(Il2Cpp.Api._threadCurrent, (() => {
        const i = Il2Cpp.currentThread?.id;
        if (null != i && i == Il2Cpp.attachedThreads[0].id) {
          n.detach();
          const i = e();
          setImmediate((() => t(i)));
        }
      }));
    }));
  }
  static async perform(e) {
    await this.initialize();
    let t = this.currentThread;
    const n = null == t;
    null == t && (t = Il2Cpp.Domain.attach());
    try {
      const t = e();
      return t instanceof Promise ? await t : t;
    } catch (e) {
      throw globalThis.console.log(e), e;
    } finally {
      n && t.detach();
    }
  }
  static trace() {
    return new Il2Cpp.Tracer;
  }
}

e([ n.cache ], l, "applicationDataPath", null), e([ n.cache ], l, "applicationIdentifier", null), 
e([ n.cache ], l, "applicationVersion", null), e([ n.cache ], l, "module", null), 
e([ n.cache ], l, "unityVersion", null), e([ n.cache ], l, "unityVersionIsBelow201830", null), 
Reflect.set(globalThis, "Il2Cpp", l);

}).call(this)}).call(this,require("timers").setImmediate)

},{"../utils/console":34,"../utils/native-wait":36,"decorator-cache-getter":3,"timers":40,"versioning":41}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

class s {
  constructor() {}
  static Is(s) {
    return e => e instanceof Il2Cpp.Class ? s.isAssignableFrom(e) : s.isAssignableFrom(e.class);
  }
  static IsExactly(s) {
    return e => e instanceof Il2Cpp.Class ? e.equals(s) : e.class.equals(s);
  }
}

Il2Cpp.Filtering = s;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("./base"), require("./api"), require("./filtering"), require("./runtime"), 
require("./tracer"), require("./structs/array"), require("./structs/assembly"), 
require("./structs/class"), require("./structs/domain"), require("./structs/field"), 
require("./structs/gc"), require("./structs/gc-handle"), require("./structs/image"), 
require("./structs/memory-snapshot"), require("./structs/method"), require("./structs/object"), 
require("./structs/parameter"), require("./structs/pointer"), require("./structs/reference"), 
require("./structs/string"), require("./structs/thread"), require("./structs/type"), 
require("./structs/type-enum"), require("./structs/value-type");

},{"./api":7,"./base":8,"./filtering":9,"./runtime":11,"./structs/array":12,"./structs/assembly":13,"./structs/class":14,"./structs/domain":15,"./structs/field":16,"./structs/gc":18,"./structs/gc-handle":17,"./structs/image":19,"./structs/memory-snapshot":20,"./structs/method":21,"./structs/object":22,"./structs/parameter":23,"./structs/pointer":24,"./structs/reference":25,"./structs/string":26,"./structs/thread":27,"./structs/type":29,"./structs/type-enum":28,"./structs/value-type":30,"./tracer":31}],11:[function(require,module,exports){
"use strict";

var t = this && this.__decorate || function(t, e, r, o) {
  var i, n = arguments.length, a = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
  return n > 3 && a && Object.defineProperty(e, r, a), a;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = require("decorator-cache-getter");

class r {
  constructor() {}
  static get allocationGranularity() {
    return this.information[5];
  }
  static get arrayHeaderSize() {
    return this.information[2];
  }
  static get information() {
    const t = Il2Cpp.MemorySnapshot.capture();
    try {
      return Il2Cpp.Api._memorySnapshotGetRuntimeInformation(t);
    } finally {
      Il2Cpp.Api._memorySnapshotFree(t);
    }
  }
  static get pointerSize() {
    return this.information[0];
  }
  static get objectHeaderSize() {
    return this.information[1];
  }
}

t([ e.cache ], r, "information", null), Il2Cpp.Runtime = r;

},{"decorator-cache-getter":3}],12:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, r, n) {
  var l, s = arguments.length, i = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (l = e[a]) && (i = (s < 3 ? l(i) : s > 3 ? l(t, r, i) : l(t, r)) || i);
  return s > 3 && i && Object.defineProperty(t, r, i), i;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), r = require("../../utils/console"), n = require("../../utils/native-struct");

class l extends n.NativeStruct {
  static from(e, t) {
    const r = "number" == typeof t ? t : t.length, n = new Il2Cpp.Array(Il2Cpp.Api._arrayNew(e, r));
    return Array.isArray(t) && n.elements.write(t), n;
  }
  get elements() {
    return new Il2Cpp.Pointer(Il2Cpp.Api._arrayGetElements(this), this.elementType);
  }
  get elementSize() {
    return this.elementType.class.arrayElementSize;
  }
  get elementType() {
    return this.object.class.type.class.baseType;
  }
  get length() {
    return Il2Cpp.Api._arrayGetLength(this);
  }
  get object() {
    return new Il2Cpp.Object(this);
  }
  get(e) {
    return (e < 0 || e >= this.length) && (0, r.raise)(`cannot get element at index ${e}: array length is ${this.length}`), 
    this.elements.get(e);
  }
  set(e, t) {
    (e < 0 || e >= this.length) && (0, r.raise)(`cannot get element at index ${e}: array length is ${this.length}`), 
    this.elements.set(e, t);
  }
  toString() {
    return this.isNull() ? "null" : `[${this.elements.read(this.length, 0)}]`;
  }
  * [Symbol.iterator]() {
    for (let e = 0; e < this.length; e++) yield this.elements.get(e);
  }
}

e([ t.cache ], l.prototype, "elements", null), e([ t.cache ], l.prototype, "elementSize", null), 
e([ t.cache ], l.prototype, "elementType", null), e([ t.cache ], l.prototype, "length", null), 
e([ t.cache ], l.prototype, "object", null), Il2Cpp.Array = l;

},{"../../utils/console":34,"../../utils/native-struct":35,"decorator-cache-getter":3}],13:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, r, l) {
  var c, o = arguments.length, a = o < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, r) : l;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, l); else for (var n = e.length - 1; n >= 0; n--) (c = e[n]) && (a = (o < 3 ? c(a) : o > 3 ? c(t, r, a) : c(t, r)) || a);
  return o > 3 && a && Object.defineProperty(t, r, a), a;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), r = require("../../utils/native-struct"), l = require("../../utils/utils");

let c = class extends r.NonNullNativeStruct {
  get image() {
    return new Il2Cpp.Image(Il2Cpp.Api._assemblyGetImage(this));
  }
  get name() {
    return this.image.name.replace(".dll", "");
  }
  get object() {
    return Il2Cpp.Image.corlib.class("System.Reflection.Assembly").method("Load").invoke(Il2Cpp.String.from(this.name));
  }
};

e([ t.cache ], c.prototype, "image", null), e([ t.cache ], c.prototype, "name", null), 
e([ t.cache ], c.prototype, "object", null), c = e([ l.cacheInstances ], c), Il2Cpp.Assembly = c;

},{"../../utils/native-struct":35,"../../utils/utils":37,"decorator-cache-getter":3}],14:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, s, l) {
  var r, a = arguments.length, n = a < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, s) : l;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, s, l); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (n = (a < 3 ? r(n) : a > 3 ? r(t, s, n) : r(t, s)) || n);
  return a > 3 && n && Object.defineProperty(t, s, n), n;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), s = require("../../utils/console"), l = require("../../utils/native-struct"), r = require("../../utils/utils");

let a = class extends l.NonNullNativeStruct {
  get actualInstanceSize() {
    return Il2Cpp.Api._classGetActualInstanceSize(this);
  }
  get arrayClass() {
    return new Il2Cpp.Class(Il2Cpp.Api._classGetArrayClass(this, 1));
  }
  get arrayElementSize() {
    return Il2Cpp.Api._classGetArrayElementSize(this);
  }
  get assemblyName() {
    return Il2Cpp.Api._classGetAssemblyName(this).readUtf8String();
  }
  get declaringClass() {
    const e = Il2Cpp.Api._classGetDeclaringType(this);
    return e.isNull() ? null : new Il2Cpp.Class(e);
  }
  get baseType() {
    const e = Il2Cpp.Api._classGetBaseType(this);
    return e.isNull() ? null : new Il2Cpp.Type(e);
  }
  get elementClass() {
    const e = Il2Cpp.Api._classGetElementClass(this);
    return e.isNull() ? null : new Il2Cpp.Class(e);
  }
  get fields() {
    return Array.from((0, r.nativeIterator)(this, Il2Cpp.Api._classGetFields, Il2Cpp.Field));
  }
  get flags() {
    return Il2Cpp.Api._classGetFlags(this);
  }
  get genericParameterCount() {
    return this.isGeneric ? this.type.object.method("GetGenericArguments").invoke().length : 0;
  }
  get hasReferences() {
    return !!Il2Cpp.Api._classHasReferences(this);
  }
  get hasStaticConstructor() {
    const e = this.tryMethod(".cctor");
    return null != e && !e.virtualAddress.isNull();
  }
  get image() {
    return new Il2Cpp.Image(Il2Cpp.Api._classGetImage(this));
  }
  get instanceSize() {
    return Il2Cpp.Api._classGetInstanceSize(this);
  }
  get isAbstract() {
    return !!Il2Cpp.Api._classIsAbstract(this);
  }
  get isBlittable() {
    return !!Il2Cpp.Api._classIsBlittable(this);
  }
  get isEnum() {
    return !!Il2Cpp.Api._classIsEnum(this);
  }
  get isGeneric() {
    return !!Il2Cpp.Api._classIsGeneric(this);
  }
  get isInflated() {
    return !!Il2Cpp.Api._classIsInflated(this);
  }
  get isInterface() {
    return !!Il2Cpp.Api._classIsInterface(this);
  }
  get isValueType() {
    return !!Il2Cpp.Api._classIsValueType(this);
  }
  get interfaces() {
    return Array.from((0, r.nativeIterator)(this, Il2Cpp.Api._classGetInterfaces, Il2Cpp.Class));
  }
  get methods() {
    return Array.from((0, r.nativeIterator)(this, Il2Cpp.Api._classGetMethods, Il2Cpp.Method));
  }
  get name() {
    return Il2Cpp.Api._classGetName(this).readUtf8String();
  }
  get namespace() {
    return Il2Cpp.Api._classGetNamespace(this).readUtf8String();
  }
  get nestedClasses() {
    return Array.from((0, r.nativeIterator)(this, Il2Cpp.Api._classGetNestedClasses, Il2Cpp.Class));
  }
  get parent() {
    const e = Il2Cpp.Api._classGetParent(this);
    return e.isNull() ? null : new Il2Cpp.Class(e);
  }
  get rank() {
    return Il2Cpp.Api._classGetRank(this);
  }
  get staticFieldsData() {
    return Il2Cpp.Api._classGetStaticFieldData(this);
  }
  get valueSize() {
    return Il2Cpp.Api._classGetValueSize(this, NULL);
  }
  get type() {
    return new Il2Cpp.Type(Il2Cpp.Api._classGetType(this));
  }
  alloc() {
    return new Il2Cpp.Object(Il2Cpp.Api._objectNew(this));
  }
  field(e) {
    return this.tryField(e);
  }
  inflate(...e) {
    this.isGeneric || (0, s.raise)(`cannot inflate class ${this.type.name}: it has no generic parameters`), 
    this.genericParameterCount != e.length && (0, s.raise)(`cannot inflate class ${this.type.name}: it needs ${this.genericParameterCount} generic parameter(s), not ${e.length}`);
    const t = e.map((e => e.type.object)), l = Il2Cpp.Array.from(Il2Cpp.Image.corlib.class("System.Type"), t), r = this.type.object.method("MakeGenericType", 1).invoke(l);
    return new Il2Cpp.Class(Il2Cpp.Api._classFromSystemType(r));
  }
  initialize() {
    Il2Cpp.Api._classInit(this);
  }
  isAssignableFrom(e) {
    return !!Il2Cpp.Api._classIsAssignableFrom(this, e);
  }
  isSubclassOf(e, t) {
    return !!Il2Cpp.Api._classIsSubclassOf(this, e, +t);
  }
  method(e, t = -1) {
    return this.tryMethod(e, t);
  }
  nested(e) {
    return this.tryNested(e);
  }
  new() {
    const e = this.alloc(), t = Memory.alloc(Process.pointerSize);
    Il2Cpp.Api._objectInit(e, t);
    const l = t.readPointer();
    return l.isNull() || (0, s.raise)(new Il2Cpp.Object(l).toString()), e;
  }
  tryField(e) {
    const t = Il2Cpp.Api._classGetFieldFromName(this, Memory.allocUtf8String(e));
    return t.isNull() ? null : new Il2Cpp.Field(t);
  }
  tryMethod(e, t = -1) {
    const s = Il2Cpp.Api._classGetMethodFromName(this, Memory.allocUtf8String(e), t);
    return s.isNull() ? null : new Il2Cpp.Method(s);
  }
  tryNested(e) {
    return this.nestedClasses.find((t => t.name == e));
  }
  toString() {
    const e = [ this.parent ].concat(this.interfaces);
    return `// ${this.assemblyName}\n${this.isEnum ? "enum" : this.isValueType ? "struct" : this.isInterface ? "interface" : "class"} ${this.type.name}${e ? ` : ${e.map((e => e?.type.name)).join(", ")}` : ""}\n{\n    ${this.fields.join("\n    ")}\n    ${this.methods.join("\n    ")}\n}`;
  }
  static enumerate(e) {
    const t = new NativeCallback((function(t, s) {
      e(new Il2Cpp.Class(t));
    }), "void", [ "pointer", "pointer" ]);
    return Il2Cpp.Api._classForEach(t, NULL);
  }
};

e([ t.cache ], a.prototype, "actualInstanceSize", null), e([ t.cache ], a.prototype, "arrayClass", null), 
e([ t.cache ], a.prototype, "arrayElementSize", null), e([ t.cache ], a.prototype, "assemblyName", null), 
e([ t.cache ], a.prototype, "declaringClass", null), e([ t.cache ], a.prototype, "baseType", null), 
e([ t.cache ], a.prototype, "elementClass", null), e([ t.cache ], a.prototype, "fields", null), 
e([ t.cache ], a.prototype, "flags", null), e([ t.cache ], a.prototype, "genericParameterCount", null), 
e([ t.cache ], a.prototype, "hasReferences", null), e([ t.cache ], a.prototype, "hasStaticConstructor", null), 
e([ t.cache ], a.prototype, "image", null), e([ t.cache ], a.prototype, "instanceSize", null), 
e([ t.cache ], a.prototype, "isAbstract", null), e([ t.cache ], a.prototype, "isBlittable", null), 
e([ t.cache ], a.prototype, "isEnum", null), e([ t.cache ], a.prototype, "isGeneric", null), 
e([ t.cache ], a.prototype, "isInflated", null), e([ t.cache ], a.prototype, "isInterface", null), 
e([ t.cache ], a.prototype, "isValueType", null), e([ t.cache ], a.prototype, "interfaces", null), 
e([ t.cache ], a.prototype, "methods", null), e([ t.cache ], a.prototype, "name", null), 
e([ t.cache ], a.prototype, "namespace", null), e([ t.cache ], a.prototype, "nestedClasses", null), 
e([ t.cache ], a.prototype, "parent", null), e([ t.cache ], a.prototype, "rank", null), 
e([ t.cache ], a.prototype, "staticFieldsData", null), e([ t.cache ], a.prototype, "valueSize", null), 
e([ t.cache ], a.prototype, "type", null), e([ (0, r.levenshtein)("fields") ], a.prototype, "field", null), 
e([ (0, r.levenshtein)("methods") ], a.prototype, "method", null), e([ (0, r.levenshtein)("nestedClasses") ], a.prototype, "nested", null), 
a = e([ r.cacheInstances ], a), Il2Cpp.Class = a;

},{"../../utils/console":34,"../../utils/native-struct":35,"../../utils/utils":37,"decorator-cache-getter":3}],15:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, s, r) {
  var l, n = arguments.length, o = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, s) : r;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, s, r); else for (var i = e.length - 1; i >= 0; i--) (l = e[i]) && (o = (n < 3 ? l(o) : n > 3 ? l(t, s, o) : l(t, s)) || o);
  return n > 3 && o && Object.defineProperty(t, s, o), o;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), s = require("../../utils/utils");

class r {
  constructor() {}
  static get assemblies() {
    const e = Memory.alloc(Process.pointerSize), t = Il2Cpp.Api._domainGetAssemblies(this, e), s = e.readInt(), r = new Array(s);
    for (let e = 0; e < s; e++) r[e] = new Il2Cpp.Assembly(t.add(e * Process.pointerSize).readPointer());
    if (0 == s) for (const e of this.object.method("GetAssemblies").overload().invoke()) {
      const t = e.method("GetSimpleName").invoke().content;
      null != t && r.push(this.assembly(t));
    }
    return r;
  }
  static get handle() {
    return Il2Cpp.Api._domainGet();
  }
  static get object() {
    return Il2Cpp.Image.corlib.class("System.AppDomain").method("get_CurrentDomain").invoke();
  }
  static assembly(e) {
    return this.tryAssembly(e);
  }
  static attach() {
    return new Il2Cpp.Thread(Il2Cpp.Api._threadAttach(this));
  }
  static tryAssembly(e) {
    const t = Il2Cpp.Api._domainAssemblyOpen(this, Memory.allocUtf8String(e));
    return t.isNull() ? null : new Il2Cpp.Assembly(t);
  }
}

e([ t.cache ], r, "assemblies", null), e([ t.cache ], r, "handle", null), e([ t.cache ], r, "object", null), 
e([ (0, s.levenshtein)("assemblies") ], r, "assembly", null), Il2Cpp.Domain = r;

},{"../../utils/utils":37,"decorator-cache-getter":3}],16:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, i, r) {
  var l, s = arguments.length, a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, r); else for (var p = e.length - 1; p >= 0; p--) (l = e[p]) && (a = (s < 3 ? l(a) : s > 3 ? l(t, i, a) : l(t, i)) || a);
  return s > 3 && a && Object.defineProperty(t, i, a), a;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), i = require("../../utils/console"), r = require("../../utils/native-struct"), l = require("../utils");

class s extends r.NonNullNativeStruct {
  get class() {
    return new Il2Cpp.Class(Il2Cpp.Api._fieldGetClass(this));
  }
  get flags() {
    return Il2Cpp.Api._fieldGetFlags(this);
  }
  get isLiteral() {
    return !!Il2Cpp.Api._fieldIsLiteral(this);
  }
  get isStatic() {
    return !!Il2Cpp.Api._fieldIsStatic(this);
  }
  get isThreadStatic() {
    return !!Il2Cpp.Api._fieldIsThreadStatic(this);
  }
  get modifier() {
    return Il2Cpp.Api._fieldGetModifier(this).readUtf8String();
  }
  get name() {
    return Il2Cpp.Api._fieldGetName(this).readUtf8String();
  }
  get offset() {
    return Il2Cpp.Api._fieldGetOffset(this);
  }
  get type() {
    return new Il2Cpp.Type(Il2Cpp.Api._fieldGetType(this));
  }
  get value() {
    const e = Memory.alloc(Process.pointerSize);
    return Il2Cpp.Api._fieldGetStaticValue(this.handle, e), (0, l.read)(e, this.type);
  }
  set value(e) {
    (this.isThreadStatic || this.isLiteral) && (0, i.raise)(`cannot modify the value of field ${this.name}: is thread static or literal`);
    const t = Memory.alloc(Process.pointerSize);
    (0, l.write)(t, e, this.type), Il2Cpp.Api._fieldSetStaticValue(this.handle, t);
  }
  toString() {
    return `${this.isThreadStatic ? "[ThreadStatic] " : ""}${this.isStatic ? "static " : ""}${this.type.name} ${this.name}${this.isLiteral ? ` = ${this.type.class.isEnum ? (0, 
    l.read)(this.value.handle, this.type.class.baseType) : this.value}` : ""};${this.isThreadStatic || this.isLiteral ? "" : ` // 0x${this.offset.toString(16)}`}`;
  }
  withHolder(e) {
    let t = e.handle.add(this.offset);
    return e instanceof Il2Cpp.ValueType && (t = t.sub(Il2Cpp.Runtime.objectHeaderSize)), 
    new Proxy(this, {
      get: (e, i) => "value" == i ? (0, l.read)(t, e.type) : Reflect.get(e, i),
      set: (e, i, r) => "value" == i ? ((0, l.write)(t, r, e.type), !0) : Reflect.set(e, i, r)
    });
  }
}

e([ t.cache ], s.prototype, "class", null), e([ t.cache ], s.prototype, "flags", null), 
e([ t.cache ], s.prototype, "isLiteral", null), e([ t.cache ], s.prototype, "isStatic", null), 
e([ t.cache ], s.prototype, "isThreadStatic", null), e([ t.cache ], s.prototype, "name", null), 
e([ t.cache ], s.prototype, "offset", null), e([ t.cache ], s.prototype, "type", null), 
Reflect.set(Il2Cpp, "Field", s);

},{"../../utils/console":34,"../../utils/native-struct":35,"../utils":32,"decorator-cache-getter":3}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

class e {
  handle;
  constructor(e) {
    this.handle = e;
  }
  get target() {
    const e = Il2Cpp.Api._gcHandleGetTarget(this.handle);
    return e.isNull() ? null : new Il2Cpp.Object(e);
  }
  free() {
    return Il2Cpp.Api._gcHandleFree(this.handle);
  }
}

Il2Cpp.GC.Handle = e;

},{}],18:[function(require,module,exports){
"use strict";

var e = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = e(require("versioning"));

class i {
  constructor() {}
  static get heapSize() {
    return Il2Cpp.Api._gcGetHeapSize();
  }
  static get isEnabled() {
    return !Il2Cpp.Api._gcIsDisabled();
  }
  static get isIncremental() {
    return !!Il2Cpp.Api._gcIsIncremental();
  }
  static get maxTimeSlice() {
    return Il2Cpp.Api._gcGetMaxTimeSlice();
  }
  static get usedHeapSize() {
    return Il2Cpp.Api._gcGetUsedSize();
  }
  static set isEnabled(e) {
    e ? Il2Cpp.Api._gcEnable() : Il2Cpp.Api._gcDisable();
  }
  static set maxTimeSlice(e) {
    Il2Cpp.Api._gcSetMaxTimeSlice(e);
  }
  static choose(e) {
    const i = [], l = new NativeCallback(((e, t, l) => {
      for (let l = 0; l < t; l++) i.push(new Il2Cpp.Object(e.add(l * Process.pointerSize).readPointer()));
    }), "void", [ "pointer", "int", "pointer" ]);
    if (t.default.gte(Il2Cpp.unityVersion, "2021.2.0")) {
      const t = new NativeCallback(((e, t) => e.isNull() || 0 != t.compare(0) ? Il2Cpp.alloc(t) : (Il2Cpp.free(e), 
      NULL)), "pointer", [ "pointer", "size_t", "pointer" ]), i = Il2Cpp.Api._livenessAllocateStruct(e.handle, 0, l, NULL, t);
      Il2Cpp.Api._livenessCalculationFromStatics(i), Il2Cpp.Api._livenessFinalize(i), 
      Il2Cpp.Api._livenessFreeStruct(i);
    } else {
      const t = new NativeCallback((() => {}), "void", []), i = Il2Cpp.Api._livenessCalculationBegin(e.handle, 0, l, NULL, t, t);
      Il2Cpp.Api._livenessCalculationFromStatics(i), Il2Cpp.Api._livenessCalculationEnd(i);
    }
    return i;
  }
  static collect(e) {
    Il2Cpp.Api._gcCollect(e < 0 ? 0 : e > 2 ? 2 : e);
  }
  static collectALittle() {
    Il2Cpp.Api._gcCollectALittle();
  }
  static startWorld() {
    return Il2Cpp.Api._gcStartWorld();
  }
  static startIncrementalCollection() {
    return Il2Cpp.Api._gcStartIncrementalCollection();
  }
  static stopWorld() {
    return Il2Cpp.Api._gcStopWorld();
  }
}

Reflect.set(Il2Cpp, "GC", i);

},{"versioning":41}],19:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, s, l) {
  var r, a = arguments.length, n = a < 3 ? t : null === l ? l = Object.getOwnPropertyDescriptor(t, s) : l;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, s, l); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (n = (a < 3 ? r(n) : a > 3 ? r(t, s, n) : r(t, s)) || n);
  return a > 3 && n && Object.defineProperty(t, s, n), n;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), s = require("../../utils/native-struct"), l = require("../../utils/utils");

let r = class extends s.NonNullNativeStruct {
  static get corlib() {
    return new Il2Cpp.Image(Il2Cpp.Api._getCorlib());
  }
  get assembly() {
    return new Il2Cpp.Assembly(Il2Cpp.Api._imageGetAssembly(this));
  }
  get classCount() {
    return Il2Cpp.Api._imageGetClassCount(this);
  }
  get classes() {
    if (Il2Cpp.unityVersionIsBelow201830) {
      const e = this.assembly.object.method("GetTypes").invoke(!1);
      return Array.from(e).map((e => new Il2Cpp.Class(Il2Cpp.Api._classFromSystemType(e))));
    }
    return Array.from(Array(this.classCount), ((e, t) => new Il2Cpp.Class(Il2Cpp.Api._imageGetClass(this, t))));
  }
  get name() {
    return Il2Cpp.Api._imageGetName(this).readUtf8String();
  }
  class(e) {
    return this.tryClass(e);
  }
  tryClass(e) {
    const t = e.lastIndexOf("."), s = Memory.allocUtf8String(-1 == t ? "" : e.slice(0, t)), l = Memory.allocUtf8String(e.slice(t + 1)), r = Il2Cpp.Api._classFromName(this, s, l);
    return r.isNull() ? null : new Il2Cpp.Class(r);
  }
};

e([ t.cache ], r.prototype, "assembly", null), e([ t.cache ], r.prototype, "classCount", null), 
e([ t.cache ], r.prototype, "classes", null), e([ t.cache ], r.prototype, "name", null), 
e([ (0, l.levenshtein)("classes", (e => e.namespace ? `${e.namespace}.${e.name}` : e.name)) ], r.prototype, "class", null), 
e([ t.cache ], r, "corlib", null), r = e([ l.cacheInstances ], r), Il2Cpp.Image = r;

},{"../../utils/native-struct":35,"../../utils/utils":37,"decorator-cache-getter":3}],20:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, r, o) {
  var s, p = arguments.length, c = p < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, o); else for (var l = e.length - 1; l >= 0; l--) (s = e[l]) && (c = (p < 3 ? s(c) : p > 3 ? s(t, r, c) : s(t, r)) || c);
  return p > 3 && c && Object.defineProperty(t, r, c), c;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), r = require("../../utils/native-struct"), o = require("../../utils/utils");

class s extends r.NonNullNativeStruct {
  static capture() {
    return new Il2Cpp.MemorySnapshot;
  }
  constructor(e = Il2Cpp.Api._memorySnapshotCapture()) {
    super(e);
  }
  get classes() {
    return Array.from((0, o.nativeIterator)(this, Il2Cpp.Api._memorySnapshotGetClasses, Il2Cpp.Class));
  }
  get objects() {
    const e = [], [t, r] = Il2Cpp.Api._memorySnapshotGetGCHandles(this);
    for (let o = 0; o < t; o++) e.push(new Il2Cpp.Object(r.add(o * Process.pointerSize).readPointer()));
    return e;
  }
  free() {
    Il2Cpp.Api._memorySnapshotFree(this);
  }
}

e([ t.cache ], s.prototype, "classes", null), e([ t.cache ], s.prototype, "objects", null), 
Il2Cpp.MemorySnapshot = s;

},{"../../utils/native-struct":35,"../../utils/utils":37,"decorator-cache-getter":3}],21:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, r, a) {
  var i, n = arguments.length, s = n < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, r) : a;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, a); else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (s = (n < 3 ? i(s) : n > 3 ? i(t, r, s) : i(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), r = require("../../utils/console"), a = require("../../utils/native-struct"), i = require("../../utils/utils"), n = require("../utils");

class s extends a.NonNullNativeStruct {
  get class() {
    return new Il2Cpp.Class(Il2Cpp.Api._methodGetClass(this));
  }
  get flags() {
    return Il2Cpp.Api._methodGetFlags(this, NULL);
  }
  get implementationFlags() {
    const e = Memory.alloc(Process.pointerSize);
    return Il2Cpp.Api._methodGetFlags(this, e), e.readU32();
  }
  get fridaSignature() {
    const e = [];
    for (const t of this.parameters) e.push(t.type.fridaAlias);
    return this.isStatic && !Il2Cpp.unityVersionIsBelow201830 || e.unshift("pointer"), 
    this.isInflated && e.push("pointer"), e;
  }
  get genericParameterCount() {
    return this.isGeneric ? this.object.method("GetGenericArguments").invoke().length : 0;
  }
  get isExternal() {
    return !!Il2Cpp.Api._methodIsExternal(this);
  }
  get isGeneric() {
    return !!Il2Cpp.Api._methodIsGeneric(this);
  }
  get isInflated() {
    return !!Il2Cpp.Api._methodIsInflated(this);
  }
  get isStatic() {
    return !Il2Cpp.Api._methodIsInstance(this);
  }
  get isSynchronized() {
    return !!Il2Cpp.Api._methodIsSynchronized(this);
  }
  get modifier() {
    return Il2Cpp.Api._methodGetModifier(this).readUtf8String();
  }
  get name() {
    return Il2Cpp.Api._methodGetName(this).readUtf8String();
  }
  get nativeFunction() {
    return new NativeFunction(this.virtualAddress, this.returnType.fridaAlias, this.fridaSignature);
  }
  get object() {
    return new Il2Cpp.Object(Il2Cpp.Api._methodGetObject(this, NULL));
  }
  get parameterCount() {
    return Il2Cpp.Api._methodGetParameterCount(this);
  }
  get parameters() {
    return Array.from(Array(this.parameterCount), ((e, t) => {
      const r = Il2Cpp.Api._methodGetParameterName(this, t).readUtf8String(), a = Il2Cpp.Api._methodGetParameterType(this, t);
      return new Il2Cpp.Parameter(r, t, new Il2Cpp.Type(a));
    }));
  }
  get relativeVirtualAddress() {
    return this.virtualAddress.sub(Il2Cpp.module.base);
  }
  get returnType() {
    return new Il2Cpp.Type(Il2Cpp.Api._methodGetReturnType(this));
  }
  get virtualAddress() {
    return Il2Cpp.Api._methodGetPointer(this);
  }
  set implementation(e) {
    const t = +!this.isStatic | +Il2Cpp.unityVersionIsBelow201830, a = (...r) => {
      const a = this.parameters.map(((e, a) => (0, n.fromFridaValue)(r[a + t], e.type)));
      return (0, n.toFridaValue)(e.call(this.isStatic ? this.class : new Il2Cpp.Object(r[0]), ...a));
    };
    try {
      Interceptor.replace(this.virtualAddress, new NativeCallback(a, this.returnType.fridaAlias, this.fridaSignature));
    } catch (e) {
      switch (e.message) {
       case "access violation accessing 0x0":
        (0, r.raise)(`cannot implement method ${this.name}: it has a NULL virtual address`);

       case `unable to intercept function at ${this.virtualAddress}; please file a bug`:
        (0, r.warn)(`cannot implement method ${this.name}: it may be a thunk`);
        break;

       case "already replaced this function":
        (0, r.warn)(`cannot implement method ${this.name}: already replaced by a thunk`);
        break;

       default:
        throw e;
      }
    }
  }
  inflate(...e) {
    this.isGeneric || (0, r.raise)(`cannot inflate method ${this.name}: it has no generic parameters`), 
    this.genericParameterCount != e.length && (0, r.raise)(`cannot inflate method ${this.name}: it needs ${this.genericParameterCount} generic parameter(s), not ${e.length}`);
    const t = e.map((e => e.type.object)), a = Il2Cpp.Array.from(Il2Cpp.Image.corlib.class("System.Type"), t), i = this.object.method("MakeGenericMethod", 1).invoke(a);
    return new Il2Cpp.Method(Il2Cpp.Api._methodGetFromReflection(i));
  }
  invoke(...e) {
    return this.isStatic || (0, r.raise)(`cannot invoke a non-static method ${this.name}: must be invoked throught a Il2Cpp.Object, not a Il2Cpp.Class`), 
    this.invokeRaw(NULL, ...e);
  }
  invokeRaw(e, ...t) {
    const a = t.map(n.toFridaValue);
    this.isStatic && !Il2Cpp.unityVersionIsBelow201830 || a.unshift(e), this.isInflated && a.push(this.handle);
    try {
      const e = this.nativeFunction(...a);
      return (0, n.fromFridaValue)(e, this.returnType);
    } catch (e) {
      switch (null == e && (0, r.raise)("an unexpected native function exception occurred, this is due to parameter types mismatch"), 
      e.message) {
       case "bad argument count":
        (0, r.raise)(`cannot invoke method ${this.name}: it needs ${this.parameterCount} parameter(s), not ${t.length}`);

       case "expected a pointer":
       case "expected number":
       case "expected array with fields":
        (0, r.raise)(`cannot invoke method ${this.name}: parameter types mismatch`);
      }
      throw e;
    }
  }
  overload(...e) {
    const t = this.tryOverload(...e);
    if (null != t) return t;
    (0, r.raise)(`cannot find overloaded method ${this.name}(${e})`);
  }
  parameter(e) {
    return this.tryParameter(e);
  }
  revert() {
    Interceptor.revert(this.virtualAddress), Interceptor.flush();
  }
  tryOverload(...e) {
    return this.class.methods.find((t => t.name == this.name && t.parameterCount == e.length && t.parameters.every(((t, r) => t.type.name == e[r]))));
  }
  tryParameter(e) {
    return this.parameters.find((t => t.name == e));
  }
  toString() {
    return `${this.isStatic ? "static " : ""}${this.returnType.name} ${this.name}(${this.parameters.join(", ")});${this.virtualAddress.isNull() ? "" : ` // 0x${this.relativeVirtualAddress.toString(16).padStart(8, "0")}`}`;
  }
  withHolder(e) {
    return new Proxy(this, {
      get(t, r) {
        switch (r) {
         case "invoke":
          return t.invokeRaw.bind(t, e.handle);

         case "inflate":
         case "overload":
         case "tryOverload":
          return function(...a) {
            return t[r](...a)?.withHolder(e);
          };
        }
        return Reflect.get(t, r);
      }
    });
  }
}

e([ t.cache ], s.prototype, "class", null), e([ t.cache ], s.prototype, "flags", null), 
e([ t.cache ], s.prototype, "implementationFlags", null), e([ t.cache ], s.prototype, "fridaSignature", null), 
e([ t.cache ], s.prototype, "genericParameterCount", null), e([ t.cache ], s.prototype, "isExternal", null), 
e([ t.cache ], s.prototype, "isGeneric", null), e([ t.cache ], s.prototype, "isInflated", null), 
e([ t.cache ], s.prototype, "isStatic", null), e([ t.cache ], s.prototype, "isSynchronized", null), 
e([ t.cache ], s.prototype, "name", null), e([ t.cache ], s.prototype, "nativeFunction", null), 
e([ t.cache ], s.prototype, "object", null), e([ t.cache ], s.prototype, "parameterCount", null), 
e([ t.cache ], s.prototype, "parameters", null), e([ t.cache ], s.prototype, "relativeVirtualAddress", null), 
e([ t.cache ], s.prototype, "returnType", null), e([ t.cache ], s.prototype, "virtualAddress", null), 
e([ (0, i.levenshtein)("parameters") ], s.prototype, "parameter", null), Reflect.set(Il2Cpp, "Method", s);

},{"../../utils/console":34,"../../utils/native-struct":35,"../../utils/utils":37,"../utils":32,"decorator-cache-getter":3}],22:[function(require,module,exports){
"use strict";

var t = this && this.__decorate || function(t, e, r, i) {
  var l, p = arguments.length, s = p < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var n = t.length - 1; n >= 0; n--) (l = t[n]) && (s = (p < 3 ? l(s) : p > 3 ? l(e, r, s) : l(e, r)) || s);
  return p > 3 && s && Object.defineProperty(e, r, s), s;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = require("decorator-cache-getter"), r = require("../../utils/native-struct");

class i extends r.NativeStruct {
  get class() {
    return new Il2Cpp.Class(Il2Cpp.Api._objectGetClass(this));
  }
  get size() {
    return Il2Cpp.Api._objectGetSize(this);
  }
  enter() {
    return Il2Cpp.Api._monitorEnter(this);
  }
  exit() {
    return Il2Cpp.Api._monitorExit(this);
  }
  field(t) {
    return this.class.field(t).withHolder(this);
  }
  method(t, e = -1) {
    return this.class.method(t, e).withHolder(this);
  }
  pulse() {
    return Il2Cpp.Api._monitorPulse(this);
  }
  pulseAll() {
    return Il2Cpp.Api._monitorPulseAll(this);
  }
  ref(t) {
    return new Il2Cpp.GC.Handle(Il2Cpp.Api._gcHandleNew(this, +t));
  }
  virtualMethod(t) {
    return new Il2Cpp.Method(Il2Cpp.Api._objectGetVirtualMethod(this, t)).withHolder(this);
  }
  tryEnter(t) {
    return !!Il2Cpp.Api._monitorTryEnter(this, t);
  }
  tryField(t) {
    return this.class.tryField(t)?.withHolder(this);
  }
  tryMethod(t, e = -1) {
    return this.class.tryMethod(t, e)?.withHolder(this);
  }
  tryWait(t) {
    return !!Il2Cpp.Api._monitorTryWait(this, t);
  }
  toString() {
    return this.isNull() ? "null" : this.method("ToString").invoke().content ?? "null";
  }
  unbox() {
    return new Il2Cpp.ValueType(Il2Cpp.Api._objectUnbox(this), this.class.type);
  }
  wait() {
    return Il2Cpp.Api._monitorWait(this);
  }
  weakRef(t) {
    return new Il2Cpp.GC.Handle(Il2Cpp.Api._gcHandleNewWeakRef(this, +t));
  }
}

t([ e.cache ], i.prototype, "class", null), t([ e.cache ], i.prototype, "size", null), 
Il2Cpp.Object = i;

},{"../../utils/native-struct":35,"decorator-cache-getter":3}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

class t {
  name;
  position;
  type;
  constructor(t, e, s) {
    this.name = t, this.position = e, this.type = s;
  }
  toString() {
    return `${this.type.name} ${this.name}`;
  }
}

Il2Cpp.Parameter = t;

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("../utils"), e = require("../../utils/native-struct");

class r extends e.NativeStruct {
  type;
  constructor(t, e) {
    super(t), this.type = e;
  }
  get(e) {
    return (0, t.read)(this.handle.add(e * this.type.class.arrayElementSize), this.type);
  }
  read(t, e = 0) {
    const r = new Array(t);
    for (let s = 0; s < t; s++) r[s] = this.get(s + e);
    return r;
  }
  set(e, r) {
    (0, t.write)(this.handle.add(e * this.type.class.arrayElementSize), r, this.type);
  }
  toString() {
    return this.handle.toString();
  }
  write(t, e = 0) {
    for (let r = 0; r < t.length; r++) this.set(r + e, t[r]);
  }
}

Il2Cpp.Pointer = r;

},{"../../utils/native-struct":35,"../utils":32}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = require("../utils"), t = require("../../utils/native-struct"), r = require("../../utils/console");

class n extends t.NativeStruct {
  type;
  constructor(e, t) {
    super(e), this.type = t;
  }
  get value() {
    return (0, e.read)(this.handle, this.type);
  }
  set value(t) {
    (0, e.write)(this.handle, t, this.type);
  }
  toString() {
    return this.isNull() ? "null" : `->${this.value}`;
  }
  static to(e, t) {
    const n = Memory.alloc(Process.pointerSize);
    switch (typeof e) {
     case "boolean":
      return new Il2Cpp.Reference(n.writeS8(+e), Il2Cpp.Image.corlib.class("System.Boolean").type);

     case "number":
      switch (t?.typeEnum) {
       case 5:
        return new Il2Cpp.Reference(n.writeU8(e), t);

       case 4:
        return new Il2Cpp.Reference(n.writeS8(e), t);

       case 3:
       case 7:
        return new Il2Cpp.Reference(n.writeU16(e), t);

       case 6:
        return new Il2Cpp.Reference(n.writeS16(e), t);

       case 9:
        return new Il2Cpp.Reference(n.writeU32(e), t);

       case 8:
        return new Il2Cpp.Reference(n.writeS32(e), t);

       case 11:
        return new Il2Cpp.Reference(n.writeU64(e), t);

       case 10:
        return new Il2Cpp.Reference(n.writeS64(e), t);

       case 12:
        return new Il2Cpp.Reference(n.writeFloat(e), t);

       case 13:
        return new Il2Cpp.Reference(n.writeDouble(e), t);
      }

     case "object":
      if (e instanceof Il2Cpp.ValueType || e instanceof Il2Cpp.Pointer) return new Il2Cpp.Reference(n.writePointer(e), e.type);
      if (e instanceof Il2Cpp.Object) return new Il2Cpp.Reference(n.writePointer(e), e.class.type);
      if (e instanceof Il2Cpp.String || e instanceof Il2Cpp.Array) return new Il2Cpp.Reference(n.writePointer(e), e.object.class.type);
      if (e instanceof NativePointer) switch (t?.typeEnum) {
       case 25:
       case 24:
        return new Il2Cpp.Reference(n.writePointer(e), t);
      } else {
        if (e instanceof Int64) return new Il2Cpp.Reference(n.writeS64(e), Il2Cpp.Image.corlib.class("System.Int64").type);
        if (e instanceof UInt64) return new Il2Cpp.Reference(n.writeU64(e), Il2Cpp.Image.corlib.class("System.UInt64").type);
      }

     default:
      (0, r.raise)(`don't know how to create a reference to ${e} using type ${t?.name}`);
    }
  }
}

Il2Cpp.Reference = n;

},{"../../utils/console":34,"../../utils/native-struct":35,"../utils":32}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("../../utils/native-struct");

class e extends t.NativeStruct {
  get content() {
    return Il2Cpp.Api._stringChars(this).readUtf16String(this.length);
  }
  set content(t) {
    Il2Cpp.Api._stringChars(this).writeUtf16String(t ?? ""), Il2Cpp.Api._stringSetLength(this, t?.length ?? 0);
  }
  get length() {
    return Il2Cpp.Api._stringLength(this);
  }
  get object() {
    return new Il2Cpp.Object(this);
  }
  toString() {
    return this.isNull() ? "null" : `"${this.content}"`;
  }
  static from(t) {
    return new Il2Cpp.String(Il2Cpp.Api._stringNew(Memory.allocUtf8String(t || "")));
  }
}

Il2Cpp.String = e;

},{"../../utils/native-struct":35}],27:[function(require,module,exports){
(function (setImmediate){(function (){
"use strict";

var t = this && this.__decorate || function(t, e, r, n) {
  var i, o = arguments.length, a = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, r, a) : i(e, r)) || a);
  return o > 3 && a && Object.defineProperty(e, r, a), a;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = require("decorator-cache-getter"), r = require("../../utils/console"), n = require("../../utils/native-struct");

class i extends n.NativeStruct {
  static get idOffset() {
    const t = ptr(Il2Cpp.currentThread.internal.field("thread_id").value.toString()), e = Process.getCurrentThreadId();
    for (let r = 0; r < 1024; r++) {
      if (t.add(r).readS32() == e) return r;
    }
    (0, r.raise)("couldn't determine the offset for a native thread id value");
  }
  get id() {
    return ptr(this.internal.field("thread_id").value.toString()).add(Il2Cpp.Thread.idOffset).readS32();
  }
  get internal() {
    const t = this.object.tryField("internal_thread")?.value;
    return t || this.object;
  }
  get isFinalizer() {
    return !Il2Cpp.Api._threadIsVm(this);
  }
  get object() {
    return new Il2Cpp.Object(this);
  }
  get staticData() {
    return this.internal.field("static_data").value;
  }
  get synchronizationContext() {
    const t = this.object.tryMethod("GetMutableExecutionContext") || this.object.method("get_ExecutionContext");
    let e = t.invoke().tryMethod("get_SynchronizationContext")?.invoke();
    if (null == e) {
      const t = Il2Cpp.Image.corlib.class("System.Threading.SynchronizationContext");
      for (let r = 0; r < 16; r++) try {
        const n = new Il2Cpp.Object(this.staticData.add(Process.pointerSize * r).readPointer().readPointer());
        if (n.class.isSubclassOf(t, !1)) {
          e = n;
          break;
        }
      } catch (t) {}
    }
    return null == e && (0, r.raise)("couldn't retrieve the SynchronizationContext for this thread."), 
    e;
  }
  detach() {
    return Il2Cpp.Api._threadDetach(this);
  }
  schedule(t, e = 0) {
    const r = this.id, n = Il2Cpp.Image.corlib.class("Mono.Runtime").method("GetDisplayName"), i = Il2Cpp.Image.corlib.class("System.Threading.SendOrPostCallback").alloc();
    i.method(".ctor").invoke(NULL, n.handle);
    const o = this.synchronizationContext.method("Post");
    return new Promise((a => {
      const c = Interceptor.attach(n.virtualAddress, (function() {
        if (this.threadId == r) {
          c.detach();
          const e = t();
          setImmediate((() => a(e)));
        }
      }));
      setTimeout((() => o.invoke(i, NULL)), e);
    }));
  }
}

t([ e.cache ], i.prototype, "internal", null), t([ e.cache ], i.prototype, "object", null), 
t([ e.cache ], i.prototype, "staticData", null), t([ e.cache ], i.prototype, "synchronizationContext", null), 
t([ e.cache ], i, "idOffset", null), Il2Cpp.Thread = i;

}).call(this)}).call(this,require("timers").setImmediate)

},{"../../utils/console":34,"../../utils/native-struct":35,"decorator-cache-getter":3,"timers":40}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

},{}],29:[function(require,module,exports){
"use strict";

var e = this && this.__decorate || function(e, t, r, c) {
  var n, s = arguments.length, i = s < 3 ? t : null === c ? c = Object.getOwnPropertyDescriptor(t, r) : c;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, c); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (i = (s < 3 ? n(i) : s > 3 ? n(t, r, i) : n(t, r)) || i);
  return s > 3 && i && Object.defineProperty(t, r, i), i;
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("decorator-cache-getter"), r = require("../../utils/native-struct");

class c extends r.NonNullNativeStruct {
  get class() {
    return new Il2Cpp.Class(Il2Cpp.Api._classFromType(this));
  }
  get fridaAlias() {
    if (this.isByReference) return "pointer";
    switch (this.typeEnum) {
     case 1:
      return "void";

     case 2:
      return "bool";

     case 3:
      return "uchar";

     case 4:
      return "int8";

     case 5:
      return "uint8";

     case 6:
      return "int16";

     case 7:
      return "uint16";

     case 8:
      return "int32";

     case 9:
      return "uint32";

     case 10:
      return "int64";

     case 11:
      return "uint64";

     case 12:
      return "float";

     case 13:
      return "double";

     case 17:
      return n(this);

     case 24:
     case 25:
     case 15:
     case 14:
     case 29:
     case 20:
     default:
      return "pointer";

     case 18:
     case 28:
     case 21:
      return this.class.isValueType ? n(this) : "pointer";
    }
  }
  get isByReference() {
    return !!Il2Cpp.Api._typeIsByReference(this);
  }
  get isPrimitive() {
    return !!Il2Cpp.Api._typeIsPrimitive(this);
  }
  get name() {
    const e = Il2Cpp.Api._typeGetName(this);
    try {
      return e.readUtf8String();
    } finally {
      Il2Cpp.free(e);
    }
  }
  get object() {
    return new Il2Cpp.Object(Il2Cpp.Api._typeGetObject(this));
  }
  get typeEnum() {
    return Il2Cpp.Api._typeGetTypeEnum(this);
  }
  toString() {
    return this.name;
  }
}

function n(e) {
  const t = e.class.fields.filter((e => !e.isStatic));
  return 0 == t.length ? [ "char" ] : t.map((e => e.type.fridaAlias));
}

e([ t.cache ], c.prototype, "class", null), e([ t.cache ], c.prototype, "fridaAlias", null), 
e([ t.cache ], c.prototype, "isByReference", null), e([ t.cache ], c.prototype, "isPrimitive", null), 
e([ t.cache ], c.prototype, "name", null), e([ t.cache ], c.prototype, "object", null), 
e([ t.cache ], c.prototype, "typeEnum", null), Reflect.set(Il2Cpp, "Type", c);

},{"../../utils/native-struct":35,"decorator-cache-getter":3}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const t = require("../../utils/native-struct");

class e extends t.NativeStruct {
  type;
  constructor(t, e) {
    super(t), this.type = e;
  }
  box() {
    return new Il2Cpp.Object(Il2Cpp.Api._valueBox(this.type.class, this));
  }
  field(t) {
    return this.type.class.field(t).withHolder(this);
  }
  toString() {
    return this.isNull() ? "null" : this.box().toString();
  }
}

Il2Cpp.ValueType = e;

},{"../../utils/native-struct":35}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const s = require("../utils/console"), e = require("./utils");

class t {
  targets=[];
  #s;
  #e;
  #t;
  #i;
  #r;
  #a;
  #l;
  domain() {
    return this;
  }
  assemblies(...s) {
    return this.#s = s, this;
  }
  classes(...s) {
    return this.#e = s, this;
  }
  methods(...s) {
    return this.#t = s, this;
  }
  filterAssemblies(s) {
    return this.#i = s, this;
  }
  filterClasses(s) {
    return this.#r = s, this;
  }
  filterMethods(s) {
    return this.#a = s, this;
  }
  filterParameters(s) {
    return this.#l = s, this;
  }
  and() {
    const s = s => {
      if (null != this.#l) {
        for (const e of s.parameters) if (this.#l(e)) {
          this.targets.push(s);
          break;
        }
      } else this.targets.push(s);
    }, e = e => {
      for (const t of e) s(t);
    }, t = t => {
      if (null != this.#a) for (const e of t.methods) this.#a(e) && s(e); else e(t.methods);
    }, i = s => {
      for (const e of s) t(e);
    }, r = s => {
      if (null != this.#r) for (const e of s.image.classes) this.#r(e) && t(e); else i(s.image.classes);
    }, a = s => {
      for (const e of s) r(e);
    };
    return this.#t ? e(this.#t) : this.#e ? i(this.#e) : this.#s ? a(this.#s) : (s => {
      if (null != this.#i) for (const e of s.assemblies) this.#i(e) && r(e); else a(s.assemblies);
    })(Il2Cpp.Domain), this.#s = void 0, this.#e = void 0, this.#t = void 0, this.#i = void 0, 
    this.#r = void 0, this.#a = void 0, this.#l = void 0, this;
  }
  attach(t = "full") {
    let i = 0;
    for (const r of this.targets) {
      if (r.virtualAddress.isNull()) continue;
      const a = `[2m0x${r.relativeVirtualAddress.toString(16).padStart(8, "0")}[0m`, l = `${r.class.type.name}.[1m${r.name}[0m`;
      if ("detailed" == t) {
        const t = +!r.isStatic | +Il2Cpp.unityVersionIsBelow201830, o = (...o) => {
          const m = r.isStatic ? void 0 : new Il2Cpp.Parameter("this", -1, r.class.type), n = m ? [ m ].concat(r.parameters) : r.parameters;
          (0, s.inform)(`${a} ${"│ ".repeat(i++)}┌─[35m${l}[0m(${n.map((s => `[32m${s.name}[0m = [31m${(0, 
          e.fromFridaValue)(o[s.position + t], s.type)}[0m`)).join(", ")});`);
          const h = r.nativeFunction(...o);
          return (0, s.inform)(`${a} ${"│ ".repeat(--i)}└─[33m${l}[0m${null == h ? "" : ` = [36m${(0, 
          e.fromFridaValue)(h, r.returnType)}`}[0m;`), h;
        };
        try {
          r.revert();
          const s = new NativeCallback(o, r.returnType.fridaAlias, r.fridaSignature);
          Interceptor.replace(r.virtualAddress, s);
        } catch (s) {}
      } else try {
        Interceptor.attach(r.virtualAddress, {
          onEnter: () => (0, s.inform)(`${a} ${"│ ".repeat(i++)}┌─[35m${l}[0m`),
          onLeave: () => (0, s.inform)(`${a} ${"│ ".repeat(--i)}└─[33m${l}[0m${0 == i ? "\n" : ""}`)
        });
      } catch (s) {}
    }
  }
}

Il2Cpp.Tracer = t;

},{"../utils/console":34,"./utils":32}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.toFridaValue = exports.fromFridaValue = exports.write = exports.read = void 0;

const e = require("../utils/console"), r = require("../utils/native-struct");

function a(r, a) {
  switch (a.typeEnum) {
   case 2:
    return !!r.readS8();

   case 4:
    return r.readS8();

   case 5:
    return r.readU8();

   case 6:
    return r.readS16();

   case 7:
   case 3:
    return r.readU16();

   case 8:
    return r.readS32();

   case 9:
    return r.readU32();

   case 10:
    return r.readS64();

   case 11:
    return r.readU64();

   case 12:
    return r.readFloat();

   case 13:
    return r.readDouble();

   case 24:
   case 25:
    return r.readPointer();

   case 15:
    return new Il2Cpp.Pointer(r.readPointer(), a.class.baseType);

   case 17:
    return new Il2Cpp.ValueType(r, a);

   case 28:
   case 18:
    return new Il2Cpp.Object(r.readPointer());

   case 21:
    return a.class.isValueType ? new Il2Cpp.ValueType(r, a) : new Il2Cpp.Object(r.readPointer());

   case 14:
    return new Il2Cpp.String(r.readPointer());

   case 29:
   case 20:
    return new Il2Cpp.Array(r.readPointer());
  }
  (0, e.raise)(`read: "${a.name}" (${a.typeEnum}) has not been handled yet. Please file an issue!`);
}

function t(r, a, t) {
  switch (t.typeEnum) {
   case 2:
    return r.writeS8(+a);

   case 4:
    return r.writeS8(a);

   case 5:
    return r.writeU8(a);

   case 6:
    return r.writeS16(a);

   case 7:
   case 3:
    return r.writeU16(a);

   case 8:
    return r.writeS32(a);

   case 9:
    return r.writeU32(a);

   case 10:
    return r.writeS64(a);

   case 11:
    return r.writeU64(a);

   case 12:
    return r.writeFloat(a);

   case 13:
    return r.writeDouble(a);

   case 24:
   case 25:
   case 15:
   case 17:
   case 14:
   case 28:
   case 18:
   case 29:
   case 20:
   case 21:
    return a instanceof Il2Cpp.ValueType ? (Memory.copy(r, a.handle, t.class.valueSize), 
    r) : r.writePointer(a);
  }
  (0, e.raise)(`write: "${t.name}" (${t.typeEnum}) has not been handled yet. Please file an issue!`);
}

function s(e, r) {
  if (Array.isArray(e)) return i(r, e);
  if (!(e instanceof NativePointer)) return 2 == r.typeEnum ? !!e : e;
  if (r.isByReference) return new Il2Cpp.Reference(e, r);
  switch (r.typeEnum) {
   case 15:
    return new Il2Cpp.Pointer(e, r.class.baseType);

   case 14:
    return new Il2Cpp.String(e);

   case 18:
   case 21:
   case 28:
    return new Il2Cpp.Object(e);

   case 29:
   case 20:
    return new Il2Cpp.Array(e);

   default:
    return e;
  }
}

function n(e) {
  return "boolean" == typeof e ? +e : e instanceof Il2Cpp.ValueType ? c(e) : e;
}

function c(e) {
  const a = e.type.class.fields.filter((e => !e.isStatic));
  return 0 == a.length ? [ e.handle.readU8() ] : a.map((r => r.withHolder(e).value)).map((e => e instanceof Il2Cpp.ValueType ? c(e) : e instanceof r.NativeStruct ? e.handle : "boolean" == typeof e ? +e : e));
}

function i(r, a) {
  const t = Memory.alloc(r.class.valueSize);
  a = a.flat(1 / 0);
  const s = function e(r, a = 0) {
    const t = [];
    for (const s of r.class.fields) if (!s.isStatic) {
      const r = a + s.offset - Il2Cpp.Runtime.objectHeaderSize;
      17 == s.type.typeEnum || 21 == s.type.typeEnum && s.type.class.isValueType ? t.push(...e(s.type, r)) : t.push([ s.type.typeEnum, r ]);
    }
    return 0 == t.length && t.push([ 5, 0 ]), t;
  }(r);
  for (let r = 0; r < a.length; r++) {
    const n = a[r], [c, i] = s[r], u = t.add(i);
    switch (c) {
     case 2:
     case 4:
      u.writeS8(n);
      break;

     case 5:
      u.writeU8(n);
      break;

     case 6:
      u.writeS16(n);
      break;

     case 7:
     case 3:
      u.writeU16(n);
      break;

     case 8:
      u.writeS32(n);
      break;

     case 9:
      u.writeU32(n);
      break;

     case 10:
      u.writeS64(n);
      break;

     case 11:
      u.writeU64(n);
      break;

     case 12:
      u.writeFloat(n);
      break;

     case 13:
      u.writeDouble(n);
      break;

     case 24:
     case 25:
     case 15:
     case 29:
     case 20:
     case 14:
     case 28:
     case 18:
     case 21:
      u.writePointer(n);
      break;

     default:
      (0, e.warn)(`arrayToValueType: defaulting ${c} to pointer`), u.writePointer(n);
    }
  }
  return new Il2Cpp.ValueType(t, r);
}

exports.read = a, exports.write = t, exports.fromFridaValue = s, exports.toFridaValue = n;

},{"../utils/console":34,"../utils/native-struct":35}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("./il2cpp");

},{"./il2cpp":10}],34:[function(require,module,exports){
"use strict";

function o(o) {
  throw `[0m[38;5;9mil2cpp[0m: ${o}`;
}

function e(o) {
  globalThis.console.log(`[38;5;11mil2cpp[0m: ${o}`);
}

function s(o) {
  globalThis.console.log(`[38;5;10mil2cpp[0m: ${o}`);
}

function r(o) {
  globalThis.console.log(`[38;5;12mil2cpp[0m: ${o}`);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.inform = exports.ok = exports.warn = exports.raise = void 0, exports.raise = o, 
exports.warn = e, exports.ok = s, exports.inform = r;

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.NonNullNativeStruct = exports.NativeStruct = void 0;

class t {
  handle;
  constructor(t) {
    t instanceof NativePointer ? this.handle = t : this.handle = t.handle;
  }
  equals(t) {
    return this.handle.equals(t.handle);
  }
  isNull() {
    return this.handle.isNull();
  }
}

exports.NativeStruct = t;

class e extends t {
  constructor(t) {
    if (super(t), t.isNull()) throw new Error(`Handle for "${this.constructor.name}" cannot be NULL.`);
  }
}

exports.NonNullNativeStruct = e;

},{}],36:[function(require,module,exports){
(function (setImmediate){(function (){
"use strict";

var e = this && this.__decorate || function(e, t, r, n) {
  var o, s = arguments.length, i = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
  return s > 3 && i && Object.defineProperty(t, r, i), i;
}, t = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.forModule = void 0;

const r = require("decorator-cache-getter"), n = t(require("versioning"));

class o {
  stringEncoding;
  address;
  constructor(e, t, r) {
    this.stringEncoding = r, this.address = Module.findExportByName(e, t) ?? NULL;
  }
  static get targets() {
    const [e, ...t] = function() {
      switch (Process.platform) {
       case "linux":
        try {
          return n.default.gte(Java.androidVersion, "12") ? [ null, [ "__loader_dlopen", "utf8" ] ] : [ "libdl.so", [ "dlopen", "utf8" ], [ "android_dlopen_ext", "utf8" ] ];
        } catch (e) {
          return [ null, [ "dlopen", "utf8" ] ];
        }

       case "darwin":
        return [ "libdyld.dylib", [ "dlopen", "utf8" ] ];

       case "windows":
        const e = "LoadLibrary";
        return [ "kernel32.dll", [ `${e}W`, "utf16" ], [ `${e}ExW`, "utf16" ], [ `${e}A`, "ansi" ], [ `${e}ExA`, "ansi" ] ];
      }
    }();
    return t.map((([t, r]) => new o(e, t, r))).filter((e => !e.address.isNull()));
  }
  readString(e) {
    switch (this.stringEncoding) {
     case "utf8":
      return e.readUtf8String();

     case "utf16":
      return e.readUtf16String();

     case "ansi":
      return e.readAnsiString();
    }
  }
}

function s(...e) {
  return new Promise((t => {
    for (const r of e) {
      if (null != Process.findModuleByName(r)) return void t(r);
    }
    const r = o.targets.map((n => Interceptor.attach(n.address, {
      onEnter(e) {
        this.modulePath = n.readString(e[0]) ?? "";
      },
      onLeave(n) {
        if (!n.isNull()) for (const n of e) this.modulePath.endsWith(n) && (setImmediate((() => r.forEach((e => e.detach())))), 
        t(n));
      }
    })));
  }));
}

e([ r.cache ], o, "targets", null), exports.forModule = s;

}).call(this)}).call(this,require("timers").setImmediate)

},{"decorator-cache-getter":3,"timers":40,"versioning":41}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.levenshtein = exports.cacheInstances = exports.nativeIterator = void 0;

const e = require("fastest-levenshtein"), t = require("./console");

function* n(e, t, n) {
  const s = Memory.alloc(Process.pointerSize);
  let o;
  for (;!(o = t(e, s)).isNull(); ) yield new n(o);
}

function s(e) {
  const t = new Map;
  return new Proxy(e, {
    construct(e, n) {
      const s = n[0].toUInt32();
      return t.has(s) || t.set(s, new e(n[0])), t.get(s);
    }
  });
}

function o(n, s = (e => e.name)) {
  return function(o, r, c) {
    const i = c.value;
    c.value = function(o, ...c) {
      const a = i.call(this, o, ...c);
      if (null != a) return a;
      const u = (0, e.closest)(o, this[n].map(s));
      (0, t.raise)(`couldn't find ${r} ${o} in ${this.name}${u ? `, did you mean ${u}?` : ""}`);
    };
  };
}

exports.nativeIterator = n, exports.cacheInstances = s, exports.levenshtein = o;

},{"./console":34,"fastest-levenshtein":4}],38:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function(a, o, t, r, h) {
  var M, p, w = 8 * h - r - 1, f = (1 << w) - 1, e = f >> 1, i = -7, N = t ? h - 1 : 0, n = t ? -1 : 1, s = a[o + N];
  for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], 
  N += n, i -= 8) ;
  for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, 
  i -= 8) ;
  if (0 === M) M = 1 - e; else {
    if (M === f) return p ? NaN : 1 / 0 * (s ? -1 : 1);
    p += Math.pow(2, r), M -= e;
  }
  return (s ? -1 : 1) * p * Math.pow(2, M - r);
}, exports.write = function(a, o, t, r, h, M) {
  var p, w, f, e = 8 * M - h - 1, i = (1 << e) - 1, N = i >> 1, n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0, s = r ? 0 : M - 1, u = r ? 1 : -1, l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;
  for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), 
  o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, 
  f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), 
  p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, 
  s += u, w /= 256, h -= 8) ;
  for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8) ;
  a[t + s - u] |= 128 * l;
};

},{}],39:[function(require,module,exports){
var t, e, n = module.exports = {};

function r() {
  throw new Error("setTimeout has not been defined");
}

function o() {
  throw new Error("clearTimeout has not been defined");
}

function i(e) {
  if (t === setTimeout) return setTimeout(e, 0);
  if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
  try {
    return t(e, 0);
  } catch (n) {
    try {
      return t.call(null, e, 0);
    } catch (n) {
      return t.call(this, e, 0);
    }
  }
}

function u(t) {
  if (e === clearTimeout) return clearTimeout(t);
  if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
  try {
    return e(t);
  } catch (n) {
    try {
      return e.call(null, t);
    } catch (n) {
      return e.call(this, t);
    }
  }
}

!function() {
  try {
    t = "function" == typeof setTimeout ? setTimeout : r;
  } catch (e) {
    t = r;
  }
  try {
    e = "function" == typeof clearTimeout ? clearTimeout : o;
  } catch (t) {
    e = o;
  }
}();

var c, s = [], l = !1, a = -1;

function f() {
  l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h());
}

function h() {
  if (!l) {
    var t = i(f);
    l = !0;
    for (var e = s.length; e; ) {
      for (c = s, s = []; ++a < e; ) c && c[a].run();
      a = -1, e = s.length;
    }
    c = null, l = !1, u(t);
  }
}

function m(t, e) {
  this.fun = t, this.array = e;
}

function p() {}

n.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  s.push(new m(t, e)), 1 !== s.length || l || i(h);
}, m.prototype.run = function() {
  this.fun.apply(null, this.array);
}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, 
n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, 
n.listeners = function(t) {
  return [];
}, n.binding = function(t) {
  throw new Error("process.binding is not supported");
}, n.cwd = function() {
  return "/";
}, n.chdir = function(t) {
  throw new Error("process.chdir is not supported");
}, n.umask = function() {
  return 0;
};

},{}],40:[function(require,module,exports){
(function (setImmediate,clearImmediate){(function (){
var e = require("process/browser.js").nextTick, t = Function.prototype.apply, o = Array.prototype.slice, i = {}, n = 0;

function r(e, t) {
  this._id = e, this._clearFn = t;
}

exports.setTimeout = function() {
  return new r(t.call(setTimeout, window, arguments), clearTimeout);
}, exports.setInterval = function() {
  return new r(t.call(setInterval, window, arguments), clearInterval);
}, exports.clearTimeout = exports.clearInterval = function(e) {
  e.close();
}, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
  this._clearFn.call(window, this._id);
}, exports.enroll = function(e, t) {
  clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
}, exports.unenroll = function(e) {
  clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
}, exports._unrefActive = exports.active = function(e) {
  clearTimeout(e._idleTimeoutId);
  var t = e._idleTimeout;
  t >= 0 && (e._idleTimeoutId = setTimeout((function() {
    e._onTimeout && e._onTimeout();
  }), t));
}, exports.setImmediate = "function" == typeof setImmediate ? setImmediate : function(t) {
  var r = n++, l = !(arguments.length < 2) && o.call(arguments, 1);
  return i[r] = !0, e((function() {
    i[r] && (l ? t.apply(null, l) : t.call(null), exports.clearImmediate(r));
  })), r;
}, exports.clearImmediate = "function" == typeof clearImmediate ? clearImmediate : function(e) {
  delete i[e];
};

}).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)

},{"process/browser.js":39,"timers":40}],41:[function(require,module,exports){
var t = ".", n = function(t) {
  this._version = String(t);
};

function r(n, r, i) {
  if ((n = String(n)) === (r = String(r))) return 0;
  for (var e = n.split(t), o = r.split(t), u = Math[i ? "max" : "min"](e.length, o.length), s = 0; s < u; s++) {
    if (e[s] = void 0 === e[s] ? 0 : parseInt(e[s], 10), o[s] = void 0 === o[s] ? 0 : parseInt(o[s], 10), 
    e[s] > o[s]) return 1;
    if (e[s] < o[s]) return -1;
  }
  return 0;
}

n.compare = function(t, n) {
  return r(t, n, !0);
}, n.eq = function(t, n, i) {
  return 0 === r(t, n, i);
}, n.gt = function(t, n) {
  return r(t, n, !0) > 0;
}, n.gte = function(t, n) {
  return r(t, n, !0) >= 0;
}, n.lt = function(t, n) {
  return r(t, n, !0) < 0;
}, n.lte = function(t, n) {
  return r(t, n, !0) <= 0;
}, n.prototype = {
  eq: function(t) {
    return n.eq(this._version, t);
  },
  gt: function(t) {
    return n.gt(this._version, t);
  },
  gte: function(t) {
    return n.gte(this._version, t);
  },
  lt: function(t) {
    return n.lt(this._version, t);
  },
  lte: function(t) {
    return n.lte(this._version, t);
  },
  valueOf: function() {
    return parseFloat(this._version.split(t).slice(0, 2).join(t), 10);
  },
  toString: function(n) {
    return void 0 === n ? this._version : this._version.split(t).slice(0, n).join(t);
  }
}, module.exports = n;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhZ2VudC9tYWluLnRzIiwibm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWNvcmF0b3ItY2FjaGUtZ2V0dGVyL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmFzdGVzdC1sZXZlbnNodGVpbi9tb2QuanMiLCJub2RlX21vZHVsZXMvZnJpZGEtYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWJ1ZmZlci9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvYXBpLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvYmFzZS5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL2ZpbHRlcmluZy5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvcnVudGltZS5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvZnJpZGEtaWwyY3BwLWJyaWRnZS9kaXN0L2lsMmNwcC9zdHJ1Y3RzL2Fzc2VtYmx5LmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvc3RydWN0cy9jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvZG9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvc3RydWN0cy9maWVsZC5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvZ2MtaGFuZGxlLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvc3RydWN0cy9nYy5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvaW1hZ2UuanMiLCJub2RlX21vZHVsZXMvZnJpZGEtaWwyY3BwLWJyaWRnZS9kaXN0L2lsMmNwcC9zdHJ1Y3RzL21lbW9yeS1zbmFwc2hvdC5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvc3RydWN0cy9vYmplY3QuanMiLCJub2RlX21vZHVsZXMvZnJpZGEtaWwyY3BwLWJyaWRnZS9kaXN0L2lsMmNwcC9zdHJ1Y3RzL3BhcmFtZXRlci5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvcG9pbnRlci5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvcmVmZXJlbmNlLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvc3RydWN0cy9zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvZnJpZGEtaWwyY3BwLWJyaWRnZS9kaXN0L2lsMmNwcC9zdHJ1Y3RzL3RocmVhZC5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaWwyY3BwL3N0cnVjdHMvdHlwZS1lbnVtLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvc3RydWN0cy90eXBlLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvc3RydWN0cy92YWx1ZS10eXBlLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvdHJhY2VyLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC9pbDJjcHAvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvZnJpZGEtaWwyY3BwLWJyaWRnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC91dGlscy9jb25zb2xlLmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC91dGlscy9uYXRpdmUtc3RydWN0LmpzIiwibm9kZV9tb2R1bGVzL2ZyaWRhLWlsMmNwcC1icmlkZ2UvZGlzdC91dGlscy9uYXRpdmUtd2FpdC5qcyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvdXRpbHMvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy92ZXJzaW9uaW5nL3ZlcnNpb25pbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQ0FBLFFBQUE7O0FBRUEsTUFBTSxJQUFVO0VBQ1osU0FBVztFQUNYLGdCQUFpQjtFQUNqQixRQUFTO0VBQ1QsY0FBZ0I7RUFDaEIsY0FBZTtFQUNmLEtBQU07RUFDTixxQkFBc0I7RUFDdEIsY0FBZTtFQUNmLGVBQWdCO0VBQ2hCLFlBQWE7RUFDYixXQUFZO0VBQ1osUUFBVTtFQUNWLGlCQUFtQjtFQUNuQixlQUFpQjtFQUNqQixZQUFjO0VBQ2QsWUFBYztJQUNWLEtBQU87TUFDSCxRQUFVO01BQ1YsYUFBZTtNQUNmLGFBQWU7TUFDZixlQUFpQjtNQUNqQixhQUFlO01BQ2YsU0FBVzs7SUFFZixVQUFZ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzl0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiJ9
