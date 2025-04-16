/*!jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license*/ !(function (
  e,
  t
) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (ie, e) {
  'use strict';
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement('script');
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[i.call(e)] || 'object'
      : typeof e;
  }
  var t = '3.7.0',
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && 'length' in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: 'jQuery' + (t + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== i.call(e)) &&
          (!(t = r(e)) ||
            ('function' ==
              typeof (n = ue.call(t, 'constructor') && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) return e.textContent;
          if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += ce.text(t);
        return n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, 'string' == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || 'HTML');
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    'function' == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = '[\\x20\\t\\r\\n\\f]',
    ve = new RegExp('^' + ge + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ge + '+$', 'g');
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? '\0' === e
        ? '\ufffd'
        : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
      : '\\' + e;
  }
  ce.escapeSelector = function (e) {
    return (e + '').replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      t =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        ge +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      p =
        '\\[' +
        ge +
        '*(' +
        t +
        ')(?:' +
        ge +
        '*([*^$|!~]?=)' +
        ge +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        t +
        '))|)' +
        ge +
        '*\\]',
      g =
        ':(' +
        t +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        p +
        ')*)|.*)\\)|)',
      v = new RegExp(ge + '+', 'g'),
      y = new RegExp('^' + ge + '*,' + ge + '*'),
      m = new RegExp('^' + ge + '*([>+~]|' + ge + ')' + ge + '*'),
      x = new RegExp(ge + '|>'),
      j = new RegExp(g),
      A = new RegExp('^' + t + '$'),
      D = {
        ID: new RegExp('^#(' + t + ')'),
        CLASS: new RegExp('^\\.(' + t + ')'),
        TAG: new RegExp('^(' + t + '|[*])'),
        ATTR: new RegExp('^' + p),
        PSEUDO: new RegExp('^' + g),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            ge +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            ge +
            '*(?:([+-]|)' +
            ge +
            '*(\\d+)|))' +
            ge +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + f + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            ge +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            ge +
            '*((?:-\\d)?\\d*)' +
            ge +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp('\\\\[\\da-fA-F]{1,6}' + ge + '?|\\\\([^\\r\\n\\f])', 'g'),
      P = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      R = function () {
        V();
      },
      M = J(
        function (e) {
          return !0 === e.disabled && fe(e, 'fieldset');
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + ' '] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && z(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute('id'))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute('id', (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + Q(l[o]);
            c = l.join(',');
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute('id');
          }
        }
      }
      return re(t.replace(ve, '$1'), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, 'input') && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, 'input') || fe(e, 'button')) && e.type === t;
      };
    }
    function X(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && M(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function U(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function z(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener('unload', R),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, '*');
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(':scope');
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(':has(*,:jqfake)'), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute('id') === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ('undefined' != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    'undefined' != typeof e.getAttributeNode &&
                    e.getAttributeNode('id');
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ('undefined' != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return 'undefined' != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ('undefined' != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll('[selected]').length ||
                d.push('\\[' + ge + '*(?:value|' + f + ')'),
              e.querySelectorAll('[id~=' + S + '-]').length || d.push('~='),
              e.querySelectorAll('a#' + S + '+*').length || d.push('.#.+[+~]'),
              e.querySelectorAll(':checked').length || d.push(':checked'),
              (t = T.createElement('input')).setAttribute('type', 'hidden'),
              e.appendChild(t).setAttribute('name', 'D'),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(':disabled').length &&
                d.push(':enabled', ':disabled'),
              (t = T.createElement('input')).setAttribute('name', ''),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push('\\[' + ge + '*name' + ge + '*=' + ge + '*(?:\'\'|"")');
          }),
          le.cssHas || d.push(':has'),
          (d = d.length && new RegExp(d.join('|'))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + ' '] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(O, P)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + ge + ')' + e + '(' + ge + '|$)')) &&
                s(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute &&
                        e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace(v, ' ') + ' ').indexOf(i)
                      : '|=' === r &&
                        (t === i || t.slice(0, i.length + 1) === i + '-'));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = 'nth' !== d.slice(0, 3),
              y = 'last' !== d.slice(-4),
              m = 'of-type' === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? 'nextSibling' : 'previousSibling',
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = 'only' === d && !s && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, '$1'));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || '') || I.error('unsupported lang: ' + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: X(!1),
          disabled: X(!0),
          checked: function (e) {
            return (
              (fe(e, 'input') && !!e.checked) ||
              (fe(e, 'option') && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, 'input') && 'button' === e.type) || fe(e, 'button');
          },
          text: function (e) {
            var t;
            return (
              fe(e, 'input') &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: U(function () {
            return [0];
          }),
          last: U(function (e, t) {
            return [t - 1];
          }),
          eq: U(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: U(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: U(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: U(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: U(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + ' '];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(ve, ' ') }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && 'parentNode' === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || '*', n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace(ve, '$1'),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + ' '];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = '0',
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG('*', i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = 'function' == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          'ID' === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && z(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && z(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split('').sort(l).join('') === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement('fieldset'));
      })),
      (ce.find = I),
      (ce.expr[':'] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          'string' == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), 'string' == typeof e)) {
      if (
        !(r =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return d(e, 'parentNode', n);
        },
        next: function (e) {
          return A(e, 'nextSibling');
        },
        prev: function (e) {
          return A(e, 'previousSibling');
        },
        nextAll: function (e) {
          return d(e, 'nextSibling');
        },
        prevAll: function (e) {
          return d(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return d(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return d(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, 'template') && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && 'string' !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              ce.Callbacks('memory'),
              ce.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              ce.Callbacks('once memory'),
              ce.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              ce.Callbacks('once memory'),
              ce.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + 'With'](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError('Thenable self-resolution');
                        (t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          'pending' === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener('DOMContentLoaded', P),
      ie.removeEventListener('load', P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)['catch'](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    'complete' === C.readyState ||
    ('loading' !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener('DOMContentLoaded', P),
        ie.addEventListener('load', P));
  var R = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === x(n))
        for (s in ((i = !0), n)) R(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    M = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(M, 'ms-').replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    X = new B(),
    U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    z = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(z, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : U.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        X.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return X.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return X.access(e, t, n);
    },
    removeData: function (e, t) {
      X.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = X.get(o)), 1 === o.nodeType && !_.get(o, 'hasDataAttrs'))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf('data-') &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof n
          ? this.each(function () {
              X.set(this, n);
            })
          : R(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = X.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  X.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks('once memory').add(function () {
              _.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--)
          (n = _.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp('^(?:([+-])=|)(' + G + ')([a-z%]*)$', 'i'),
    Q = ['Top', 'Right', 'Bottom', 'Left'],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = { composed: !0 };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && K(e) && 'none' === ce.css(e, 'display'))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ('px' !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((l[c] = _.get(r, 'display') || null),
              l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === u && (u = 'block'),
                  (ne[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), _.set(r, 'display', n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement('div'))),
    (be = C.createElement('input')).setAttribute('type', 'radio'),
    be.setAttribute('checked', 'checked'),
    be.setAttribute('name', 't'),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = '<textarea>x</textarea>'),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = '<option></option>'),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], 'globalEval', !t || _.get(t[n], 'globalEval'));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))),
            (s = (Te.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), 'script')), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || '') && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return 'undefined' != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || '').match(D) || ['']).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(D) || ['']).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, 'events') || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, 'input') && He(t, 'click', !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, 'input') && He(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, 'input') &&
              _.get(t, 'click')) ||
            fe(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each({ focus: 'focusin', blur: 'focusout' }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, 'handle'),
            n = ce.event.fix(e);
          (n.type = 'focusin' === e.type ? 'focus' : 'blur'),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n);
        } else ce.event.simulate(i, e.target, ce.event.fix(e));
      }
      (ce.event.special[r] = {
        setup: function () {
          var e;
          if ((He(this, r, !0), !C.documentMode)) return !1;
          (e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1);
        },
        trigger: function () {
          return He(this, r), !0;
        },
        teardown: function () {
          var e;
          if (!C.documentMode) return !1;
          (e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i));
        },
        _default: function (e) {
          return _.get(e.target, r);
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i);
            n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1;
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i));
          },
        });
    }),
    ce.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Me(e, t) {
    return (
      (fe(e, 'table') &&
        fe(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        ce(e).children('tbody')[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function We(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      X.hasData(e) && ((o = X.access(e)), (a = ce.extend({}, o)), X.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && 'string' == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, 'script'), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, 'script'))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || '') &&
              !_.access(u, 'globalEval') &&
              ce.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    l
                  )
                : m(u.textContent.replace(Re, ''), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, 'script')).length && Ee(a, !f && Se(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[X.expando] && (n[X.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return R(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Me(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Me(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return R(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var _e = new RegExp('^(' + G + ')(?!px)[a-z%]+$', 'i'),
    Xe = /^--/,
    Ue = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    ze = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join('|'), 'i');
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Xe.test(t),
      u = e.style;
    return (
      (n = n || Ue(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, '$1') || void 0),
        '' !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement('div'),
      l = C.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (le.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement('table')),
              (t = C.createElement('tr')),
              (n = C.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ['Webkit', 'Moz', 'ms'],
    Je = C.createElement('div').style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    nt = { letterSpacing: '0', fontWeight: '400' };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function it(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ('content' === n && (u -= ce.css(e, 'padding' + Q[a], !0, i)),
            'margin' !== n &&
              (u -= ce.css(e, 'border' + Q[a] + 'Width', !0, i)))
          : ((u += ce.css(e, 'padding' + Q[a], !0, i)),
            'padding' !== n
              ? (u += ce.css(e, 'border' + Q[a] + 'Width', !0, i))
              : (s += ce.css(e, 'border' + Q[a] + 'Width', !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Ue(e),
      i =
        (!le.boxSizingReliable() || n) &&
        'border-box' === ce.css(e, 'boxSizing', !1, r),
      o = i,
      a = Ge(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === ce.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === ce.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? '' : 'px')),
            le.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        Xe.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        'normal' === i && t in nt && (i = nt[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(['height', 'width'], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : ze(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ue(e),
            o = !le.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === ce.css(e, 'boxSizing', !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              ze(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    ce.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      (ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        'margin' !== i && (ce.cssHooks[i + o].set = rt);
    }),
    ce.fn.extend({
      css: function (e, t) {
        return R(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ue(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = Q[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          { specialEasing: {}, easing: ce.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ['*'])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, 'display')),
            'none' === (c = ce.css(e, 'display')) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, 'display')),
                  re([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === ce.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = _.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, 'fxshow'), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, 'finish')) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt('show'),
        slideUp: gt('hide'),
        slideToggle: gt('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement('input')),
    (ct = C.createElement('select').appendChild(C.createElement('option'))),
    (lt.type = 'checkbox'),
    (le.checkOn = '' !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement('input')).value = 't'),
    (lt.type = 'radio'),
    (le.radioValue = 't' === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return R(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && 'radio' === t && fe(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(' ');
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function kt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return R(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && ' ' + Tt(r) + ' '))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ');
                (a = Tt(n)), r !== a && this.setAttribute('class', a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && ' ' + Tt(r) + ' '))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(' ' + i + ' '))
                      n = n.replace(' ' + i + ' ', ' ');
                  }
                  (a = Tt(n)), r !== a && this.setAttribute('class', a);
                }
              })
            : this
          : this.attr('class', '');
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = 'string' === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : 'boolean' == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && 'boolean' !== a) ||
                  ((r = Ct(this)) && _.set(this, '__className__', r),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      r || !1 === t ? '' : _.get(this, '__className__') || ''
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (' ' + Tt(Ct(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(St, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, 'value');
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, 'optgroup'))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(['radio', 'checkbox'], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    });
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        ce.error(
          'Invalid XML: ' +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join('\n')
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, 'type') ? e.type : e,
        h = ue.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, 'object' == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, 'events') || Object.create(null))[e.type] &&
              _.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              r,
              i
            );
      });
    else if (r || 'object' !== x(e)) i(n, e);
    else for (t in e) Pt(n + '[' + t + ']', e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join('&');
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, 'elements');
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(':disabled') &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, '\r\n') };
                })
              : { name: t.name, value: n.replace(Lt, '\r\n') };
          })
          .get();
      },
    });
  var Rt = /%20/g,
    Mt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    Xt = '*/'.concat('*'),
    Ut = C.createElement('a');
  function zt(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Ut.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Xt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': ce.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: zt(Bt),
      ajaxTransport: zt(_t),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + '').replace(
            $t,
            Et.protocol + '//'
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(D) || ['']),
          null == v.crossDomain)
        ) {
          r = C.createElement('a');
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ut.protocol + '//' + Ut.host != r.protocol + '//' + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            'string' != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Mt, '')),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (v.data = v.data.replace(Rt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || 'string' == typeof v.data) &&
              ((f += (At.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, '$1')),
              (o = (At.test(f) ? '&' : '?') + '_=' + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader('If-None-Match', ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader(
          'Accept',
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ('*' !== v.dataTypes[0] ? ', ' + Xt + '; q=0.01' : '')
            : v.accepts['*']
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = 'abort'),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort('timeout');
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ('*' === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ce.inArray('script', v.dataTypes) &&
              ce.inArray('json', v.dataTypes) < 0 &&
              (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (ce.etag[f] = u)),
                204 === e || 'HEAD' === v.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger('ajaxComplete', [T, v]),
              --ce.active || ce.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, 'script');
      },
    }),
    ce.each(['get', 'post'], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ce.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && 'withCredentials' in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    ce.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + '_' + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Zt.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || ce.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script'
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce('<div>').append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, 'position'),
          c = ce(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = ce.css(e, 'top')),
          (u = ce.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === ce.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === ce.css(e, 'position')
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, 'borderTopWidth', !0)),
              (i.left += ce.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, 'marginTop', !0),
            left: t.left - i.left - ce.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === ce.css(e, 'position')) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, i) {
        var o = 'pageYOffset' === i;
        ce.fn[t] = function (e) {
          return R(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ce.each(['top', 'left'], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + 'px' : t;
      });
    }),
    ce.each({ Height: 'height', Width: 'width' }, function (a, s) {
      ce.each(
        { padding: 'inner' + a, content: s, '': 'outer' + a },
        function (r, o) {
          ce.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border');
            return R(
              this,
              function (e, t, n) {
                var r;
                return y(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + a],
                      r['scroll' + a],
                      e.body['offset' + a],
                      r['offset' + a],
                      r['client' + a]
                    ))
                  : void 0 === n
                  ? ce.css(e, t, i)
                  : ce.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    ce.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    ce.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? '' : (e + '').replace(en, '$1');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    'undefined' == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});
(function (t) {
  function z() {
    for (var a = 0; a < g.length; a++) g[a][0](g[a][1]);
    g = [];
    m = !1;
  }
  function n(a, b) {
    g.push([a, b]);
    m || ((m = !0), A(z, 0));
  }
  function B(a, b) {
    function c(a) {
      p(b, a);
    }
    function h(a) {
      k(b, a);
    }
    try {
      a(c, h);
    } catch (d) {
      h(d);
    }
  }
  function u(a) {
    var b = a.owner,
      c = b.state_,
      b = b.data_,
      h = a[c];
    a = a.then;
    if ('function' === typeof h) {
      c = l;
      try {
        b = h(b);
      } catch (d) {
        k(a, d);
      }
    }
    v(a, b) || (c === l && p(a, b), c === q && k(a, b));
  }
  function v(a, b) {
    var c;
    try {
      if (a === b)
        throw new TypeError(
          'A promises callback cannot return that same promise.'
        );
      if (b && ('function' === typeof b || 'object' === typeof b)) {
        var h = b.then;
        if ('function' === typeof h)
          return (
            h.call(
              b,
              function (d) {
                c || ((c = !0), b !== d ? p(a, d) : w(a, d));
              },
              function (b) {
                c || ((c = !0), k(a, b));
              }
            ),
            !0
          );
      }
    } catch (d) {
      return c || k(a, d), !0;
    }
    return !1;
  }
  function p(a, b) {
    (a !== b && v(a, b)) || w(a, b);
  }
  function w(a, b) {
    a.state_ === r && ((a.state_ = x), (a.data_ = b), n(C, a));
  }
  function k(a, b) {
    a.state_ === r && ((a.state_ = x), (a.data_ = b), n(D, a));
  }
  function y(a) {
    var b = a.then_;
    a.then_ = void 0;
    for (a = 0; a < b.length; a++) u(b[a]);
  }
  function C(a) {
    a.state_ = l;
    y(a);
  }
  function D(a) {
    a.state_ = q;
    y(a);
  }
  function e(a) {
    if ('function' !== typeof a)
      throw new TypeError('Promise constructor takes a function argument');
    if (!1 === this instanceof e)
      throw new TypeError(
        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
      );
    this.then_ = [];
    B(a, this);
  }
  var f = t.Promise,
    s =
      f &&
      'resolve' in f &&
      'reject' in f &&
      'all' in f &&
      'race' in f &&
      (function () {
        var a;
        new f(function (b) {
          a = b;
        });
        return 'function' === typeof a;
      })();
  'undefined' !== typeof exports && exports
    ? ((exports.Promise = s ? f : e), (exports.Polyfill = e))
    : 'function' == typeof define && define.amd
    ? define(function () {
        return s ? f : e;
      })
    : s || (t.Promise = e);
  var r = 'pending',
    x = 'sealed',
    l = 'fulfilled',
    q = 'rejected',
    E = function () {},
    A = 'undefined' !== typeof setImmediate ? setImmediate : setTimeout,
    g = [],
    m;
  e.prototype = {
    constructor: e,
    state_: r,
    then_: null,
    data_: void 0,
    then: function (a, b) {
      var c = {
        owner: this,
        then: new this.constructor(E),
        fulfilled: a,
        rejected: b,
      };
      this.state_ === l || this.state_ === q ? n(u, c) : this.then_.push(c);
      return c.then;
    },
    catch: function (a) {
      return this.then(null, a);
    },
  };
  e.all = function (a) {
    if ('[object Array]' !== Object.prototype.toString.call(a))
      throw new TypeError('You must pass an array to Promise.all().');
    return new this(function (b, c) {
      function h(a) {
        e++;
        return function (c) {
          d[a] = c;
          --e || b(d);
        };
      }
      for (var d = [], e = 0, f = 0, g; f < a.length; f++)
        (g = a[f]) && 'function' === typeof g.then
          ? g.then(h(f), c)
          : (d[f] = g);
      e || b(d);
    });
  };
  e.race = function (a) {
    if ('[object Array]' !== Object.prototype.toString.call(a))
      throw new TypeError('You must pass an array to Promise.race().');
    return new this(function (b, c) {
      for (var e = 0, d; e < a.length; e++)
        (d = a[e]) && 'function' === typeof d.then ? d.then(b, c) : b(d);
    });
  };
  e.resolve = function (a) {
    return a && 'object' === typeof a && a.constructor === this
      ? a
      : new this(function (b) {
          b(a);
        });
  };
  e.reject = function (a) {
    return new this(function (b, c) {
      c(a);
    });
  };
})(
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : this
);
var FUNC_ERROR_TEXT = 'Expected a function',
  NAN = NaN,
  symbolTag = '[object Symbol]',
  reTrim = /^\s+|\s+$/g,
  reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
  reIsBinary = /^0b[01]+$/i,
  reIsOctal = /^0o[0-7]+$/i,
  freeParseInt = parseInt,
  freeGlobal =
    'object' == typeof global && global && global.Object === Object && global,
  freeSelf = 'object' == typeof self && self && self.Object === Object && self,
  root = freeGlobal || freeSelf || Function('return this')(),
  objectProto = Object.prototype,
  objectToString = objectProto.toString,
  nativeMax = Math.max,
  nativeMin = Math.min,
  now = function () {
    return root.Date.now();
  };
function debounce(t, e, n) {
  var r,
    i,
    o,
    a,
    u,
    f,
    c = 0,
    l = !1,
    b = !1,
    s = !0;
  if ('function' != typeof t) throw new TypeError(FUNC_ERROR_TEXT);
  function v(e) {
    var n = r,
      o = i;
    return (r = i = void 0), (c = e), (a = t.apply(o, n));
  }
  function m(t) {
    var n = t - f;
    return void 0 === f || n >= e || n < 0 || (b && t - c >= o);
  }
  function y() {
    var t = now();
    if (m(t)) return j(t);
    u = setTimeout(
      y,
      (function (t) {
        var n = e - (t - f);
        return b ? nativeMin(n, o - (t - c)) : n;
      })(t)
    );
  }
  function j(t) {
    return (u = void 0), s && r ? v(t) : ((r = i = void 0), a);
  }
  function g() {
    var t = now(),
      n = m(t);
    if (((r = arguments), (i = this), (f = t), n)) {
      if (void 0 === u)
        return (function (t) {
          return (c = t), (u = setTimeout(y, e)), l ? v(t) : a;
        })(f);
      if (b) return (u = setTimeout(y, e)), v(f);
    }
    return void 0 === u && (u = setTimeout(y, e)), a;
  }
  return (
    (e = toNumber(e) || 0),
    isObject(n) &&
      ((l = !!n.leading),
      (o = (b = 'maxWait' in n) ? nativeMax(toNumber(n.maxWait) || 0, e) : o),
      (s = 'trailing' in n ? !!n.trailing : s)),
    (g.cancel = function () {
      void 0 !== u && clearTimeout(u), (c = 0), (r = f = i = u = void 0);
    }),
    (g.flush = function () {
      return void 0 === u ? a : j(now());
    }),
    g
  );
}
function throttle(t, e, n) {
  var r = !0,
    i = !0;
  if ('function' != typeof t) throw new TypeError(FUNC_ERROR_TEXT);
  return (
    isObject(n) &&
      ((r = 'leading' in n ? !!n.leading : r),
      (i = 'trailing' in n ? !!n.trailing : i)),
    debounce(t, e, { leading: r, maxWait: e, trailing: i })
  );
}
function isObject(t) {
  var e = typeof t;
  return !!t && ('object' == e || 'function' == e);
}
function isObjectLike(t) {
  return !!t && 'object' == typeof t;
}
function isSymbol(t) {
  return (
    'symbol' == typeof t ||
    (isObjectLike(t) && objectToString.call(t) == symbolTag)
  );
}
function toNumber(t) {
  if ('number' == typeof t) return t;
  if (isSymbol(t)) return NAN;
  if (isObject(t)) {
    var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
    t = isObject(e) ? e + '' : e;
  }
  if ('string' != typeof t) return 0 === t ? t : +t;
  t = t.replace(reTrim, '');
  var n = reIsBinary.test(t);
  return n || reIsOctal.test(t)
    ? freeParseInt(t.slice(2), n ? 2 : 8)
    : reIsBadHex.test(t)
    ? NAN
    : +t;
}
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]*\.)*[a-zA-Z\-0-9]+\.[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase().trim());
}
function handleFAQComponentClick(e) {
  const relatedFAQ = e.target.closest('.question-wrapper');
  if (relatedFAQ) {
    relatedFAQ.classList.toggle('active');
  }
}
function makeElementDraggable(el) {
  if (!el) return;
  el.style.cursor = 'grab';
  let pos = { top: 0, left: 0, x: 0, y: 0 };
  const mouseDownHandler = function (e) {
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
    pos = {
      left: el.scrollLeft,
      top: el.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };
  const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    el.scrollTop = pos.top - dy;
    el.scrollLeft = pos.left - dx;
  };
  const mouseUpHandler = function () {
    el.style.cursor = 'grab';
    el.style.removeProperty('user-select');
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };
  el.addEventListener('mousedown', mouseDownHandler);
}
function forceRedraw() {
  const dummyElement = document.body;
  dummyElement.offsetHeight;
}
function isElementVisible(el) {
  const scroll = window.scrollY || window.scrollY;
  const offsetFromBottom = 80;
  const boundsTop = el.getBoundingClientRect().top + scroll + offsetFromBottom;
  const viewport = { top: scroll, bottom: scroll + window.innerHeight };
  const bounds = { top: boundsTop, bottom: boundsTop + el.clientHeight };
  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
}
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }
  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log('Async: Copying to clipboard was successful!');
    },
    function (err) {
      console.error('Async: Could not copy text: ', err);
    }
  );
}
function encodeHTMLEntities(text) {
  return $('<textarea/>').text(text).html();
}
function delayProgress(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
function scrollToElement(
  element,
  duration = 300,
  distanceFromTopOverride = null,
  additionalOffset = null
) {
  const isUserScrollingDown = element.offsetTop > window.scrollY;
  const headerNavHeight = determineHeaderNavHeight(isUserScrollingDown);
  const distanceFromTop =
    distanceFromTopOverride !== null
      ? distanceFromTopOverride
      : window.innerWidth >= 768
      ? 36
      : 20;
  const startingY = window.scrollY;
  const elementY =
    additionalOffset !== null
      ? element.offsetTop - headerNavHeight - distanceFromTop - additionalOffset
      : element.offsetTop - headerNavHeight - distanceFromTop;
  let diff = elementY - startingY;
  let start;
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = Math.min(time / duration, 1);
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}
function determineHeaderNavHeight(isUserScrollingDown) {
  const headerNavDesktop = document.querySelector('#header-nav-desktop');
  const headerNavMobile = document.querySelector('#header-nav-mobile');
  const progressBar = document.querySelector('.progress-bar');
  if (!headerNavDesktop || !headerNavMobile) {
    return 0;
  }
  const progressBarOffset = progressBar ? progressBar.offsetHeight : 0;
  return window.innerWidth >= 1025
    ? headerNavDesktop.offsetHeight + progressBarOffset
    : isUserScrollingDown
    ? progressBarOffset
    : headerNavMobile.offsetHeight + progressBarOffset;
}
function sendGAEvent(eventDetails) {
  const isUserOnProd = instanceEnv
    ? instanceEnv === 'live'
    : window.location.hostname === 'www.acorns.com';
  if (isUserOnProd) {
    if (typeof ga === 'undefined') {
      window.setTimeout(() => {
        sendGAEvent(eventDetails);
      }, 500);
    } else {
      ga && ga('send', 'event', eventDetails);
    }
  } else {
    console.log('GA would have sent an event with these details:');
    console.log(eventDetails);
  }
}
const platformIsMobile = !!/iPhone|iPod|iPad|Android/i.test(
  navigator.userAgent
);
const screenNamesForUrlPaths = {
  '/': 'mainAcorns',
  '/invest/': 'investAcorns',
  '/later/': 'laterAcorns',
  '/spend/': 'spendAcorns',
  '/early/': 'earlyAcorns',
  '/earn/': 'earnAcorns',
  '/invite/': 'inviteAcorns',
  '/pricing/': 'pricingAcorns',
  '/money-basics/': 'moneyBasicsAcorns',
};
function getScreenNameForCurrentPage() {
  const currentPath = window.location.pathname;
  return screenNamesForUrlPaths[currentPath] ?? currentPath;
}
function extractMatches(string, regex) {
  const matches = string.match(regex);
  return {
    firstMatch: matches && matches.length >= 2 && matches[1],
    secondMatch: matches && matches.length >= 3 && matches[2],
  };
}
function getDestinationForTrackedElement(el) {
  const onClick = el.getAttribute('data-onclick');
  if (el.href) {
    return el.href;
  } else if (onClick) {
    const onClickString = onClick.toString();
    return `onclick behavior of: ` + onClickString;
  }
}
function getCtaTitleForTrackedElement(el) {
  return el.dataset.trackCtaTitle
    ? el.dataset.trackCtaTitle.trim()
    : el.textContent.trim();
}
function runFunctionOnlyOnClickNotDrag(el, callbackIfClicked) {
  const minimumPixelChangeForDrag = 6;
  let startX;
  let startY;
  el.addEventListener('mousedown', function (e) {
    startX = e.pageX;
    startY = e.pageY;
  });
  el.addEventListener('mouseup', function (e) {
    const diffX = Math.abs(e.pageX - startX);
    const diffY = Math.abs(e.pageY - startY);
    if (
      diffX < minimumPixelChangeForDrag &&
      diffY < minimumPixelChangeForDrag
    ) {
      callbackIfClicked();
    }
  });
}
function runPostTrackBehaviorForTrackedElement(el) {
  const onClick = el.getAttribute('data-onclick');
  if (el.href) {
    const isReferralsPage = document.querySelector('.view-referrals_page');
    const isAffiliateLandingPage = document.querySelector(
      '.view-affiliate_landing_pages_1673507752693'
    );
    const isStickyActionButton = el.classList.contains('sticky-action-cta');
    const doesNotContainReferralCode = !el.href.includes('referral_code');
    const isInvalidDueToInvalidEmail = el.classList.contains(
      'invalid-due-to-invalid-email'
    );
    if (
      isStickyActionButton &&
      ((isReferralsPage && doesNotContainReferralCode) ||
        (isAffiliateLandingPage && isInvalidDueToInvalidEmail))
    )
      return;
    el.target === '_blank'
      ? window.open(el.href, '_blank')
      : (window.location.href = el.href);
  } else if (onClick) {
    eval(onClick);
  }
}
function sendTrackEvent(el) {
  try {
    rudderanalytics.track(
      'Button Tapped',
      {
        screen: getScreenNameForCurrentPage(),
        object_name: el.dataset.trackId,
        cta_title: getCtaTitleForTrackedElement(el),
        destination: getDestinationForTrackedElement(el),
        platform: platformIsMobile ? 'mobile' : 'desktop',
      },
      runPostTrackBehaviorForTrackedElement(el)
    );
  } catch {
    runPostTrackBehaviorForTrackedElement(el);
  }
}
function trackElement(el) {
  el.addEventListener('click', (e) => {
    e.preventDefault();
  });
  const onClick = el.getAttribute('onclick');
  if (onClick) {
    el.setAttribute('data-onclick', onClick);
    el.removeAttribute('onclick');
  }
  runFunctionOnlyOnClickNotDrag(el, () => sendTrackEvent(el));
}
const trackedElements = [];
const pollIntervalInMilliseconds = 1000;
const lengthOfTimeToPoll = 5000;
function pollForNewElementsToTrack() {
  const elementsToTrack = document.querySelectorAll('*[data-track-id]');
  elementsToTrack.forEach((el) => {
    if (!trackedElements.includes(el)) {
      trackElement(el);
      trackedElements.push(el);
    }
  });
}
pollForNewElementsToTrack();
const trackElementsIntervalId = window.setInterval(
  pollForNewElementsToTrack,
  pollIntervalInMilliseconds
);
window.setTimeout(() => {
  window.clearInterval(trackElementsIntervalId);
}, lengthOfTimeToPoll);
!(function (t, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define(n)
    : ((t = t || self).LazyLoad = n());
})(this, function () {
  'use strict';
  function t() {
    return (t =
      Object.assign ||
      function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n];
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  var n = 'undefined' != typeof window,
    e =
      (n && !('onscroll' in window)) ||
      ('undefined' != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = n && 'IntersectionObserver' in window,
    o = n && 'classList' in document.createElement('p'),
    r = n && window.devicePixelRatio > 1,
    a = {
      elements_selector: '.lazy',
      container: e || n ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: 'src',
      data_srcset: 'srcset',
      data_sizes: 'sizes',
      data_bg: 'bg',
      data_bg_hidpi: 'bg-hidpi',
      data_bg_multi: 'bg-multi',
      data_bg_multi_hidpi: 'bg-multi-hidpi',
      data_poster: 'poster',
      class_applied: 'applied',
      class_loading: 'loading',
      class_loaded: 'loaded',
      class_error: 'error',
      class_entered: 'entered',
      class_exited: 'exited',
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
    },
    c = function (n) {
      return t({}, a, n);
    },
    s = function (t, n) {
      var e,
        i = 'LazyLoad::Initialized',
        o = new t(n);
      try {
        e = new CustomEvent(i, { detail: { instance: o } });
      } catch (t) {
        (e = document.createEvent('CustomEvent')).initCustomEvent(i, !1, !1, {
          instance: o,
        });
      }
      window.dispatchEvent(e);
    },
    l = 'loading',
    u = 'loaded',
    d = 'applied',
    f = 'error',
    _ = 'native',
    g = 'data-',
    v = 'll-status',
    p = function (t, n) {
      return t.getAttribute(g + n);
    },
    b = function (t) {
      return p(t, v);
    },
    h = function (t, n) {
      return (function (t, n, e) {
        var i = 'data-ll-status';
        null !== e ? t.setAttribute(i, e) : t.removeAttribute(i);
      })(t, 0, n);
    },
    m = function (t) {
      return h(t, null);
    },
    E = function (t) {
      return null === b(t);
    },
    y = function (t) {
      return b(t) === _;
    },
    A = [l, u, d, f],
    I = function (t, n, e, i) {
      t && (void 0 === i ? (void 0 === e ? t(n) : t(n, e)) : t(n, e, i));
    },
    L = function (t, n) {
      o ? t.classList.add(n) : (t.className += (t.className ? ' ' : '') + n);
    },
    w = function (t, n) {
      o
        ? t.classList.remove(n)
        : (t.className = t.className
            .replace(new RegExp('(^|\\s+)' + n + '(\\s+|$)'), ' ')
            .replace(/^\s+/, '')
            .replace(/\s+$/, ''));
    },
    k = function (t) {
      return t.llTempImage;
    },
    O = function (t, n) {
      if (n) {
        var e = n._observer;
        e && e.unobserve(t);
      }
    },
    x = function (t, n) {
      t && (t.loadingCount += n);
    },
    z = function (t, n) {
      t && (t.toLoadCount = n);
    },
    C = function (t) {
      for (var n, e = [], i = 0; (n = t.children[i]); i += 1)
        'SOURCE' === n.tagName && e.push(n);
      return e;
    },
    N = function (t, n, e) {
      e && t.setAttribute(n, e);
    },
    M = function (t, n) {
      t.removeAttribute(n);
    },
    R = function (t) {
      return !!t.llOriginalAttrs;
    },
    G = function (t) {
      if (!R(t)) {
        var n = {};
        (n.src = t.getAttribute('src')),
          (n.srcset = t.getAttribute('srcset')),
          (n.sizes = t.getAttribute('sizes')),
          (t.llOriginalAttrs = n);
      }
    },
    T = function (t) {
      if (R(t)) {
        var n = t.llOriginalAttrs;
        N(t, 'src', n.src), N(t, 'srcset', n.srcset), N(t, 'sizes', n.sizes);
      }
    },
    j = function (t, n) {
      N(t, 'sizes', p(t, n.data_sizes)),
        N(t, 'srcset', p(t, n.data_srcset)),
        N(t, 'src', p(t, n.data_src));
    },
    D = function (t) {
      M(t, 'src'), M(t, 'srcset'), M(t, 'sizes');
    },
    F = function (t, n) {
      var e = t.parentNode;
      e && 'PICTURE' === e.tagName && C(e).forEach(n);
    },
    P = {
      IMG: function (t, n) {
        F(t, function (t) {
          G(t), j(t, n);
        }),
          G(t),
          j(t, n);
      },
      IFRAME: function (t, n) {
        N(t, 'src', p(t, n.data_src));
      },
      VIDEO: function (t, n) {
        !(function (t, e) {
          C(t).forEach(function (t) {
            N(t, 'src', p(t, n.data_src));
          });
        })(t),
          N(t, 'poster', p(t, n.data_poster)),
          N(t, 'src', p(t, n.data_src)),
          t.load();
      },
    },
    S = function (t, n) {
      var e = P[t.tagName];
      e && e(t, n);
    },
    V = function (t, n, e) {
      x(e, 1), L(t, n.class_loading), h(t, l), I(n.callback_loading, t, e);
    },
    U = ['IMG', 'IFRAME', 'VIDEO'],
    $ = function (t, n) {
      !n ||
        (function (t) {
          return t.loadingCount > 0;
        })(n) ||
        (function (t) {
          return t.toLoadCount > 0;
        })(n) ||
        I(t.callback_finish, n);
    },
    q = function (t, n, e) {
      t.addEventListener(n, e), (t.llEvLisnrs[n] = e);
    },
    H = function (t, n, e) {
      t.removeEventListener(n, e);
    },
    B = function (t) {
      return !!t.llEvLisnrs;
    },
    J = function (t) {
      if (B(t)) {
        var n = t.llEvLisnrs;
        for (var e in n) {
          var i = n[e];
          H(t, e, i);
        }
        delete t.llEvLisnrs;
      }
    },
    K = function (t, n, e) {
      !(function (t) {
        delete t.llTempImage;
      })(t),
        x(e, -1),
        (function (t) {
          t && (t.toLoadCount -= 1);
        })(e),
        w(t, n.class_loading),
        n.unobserve_completed && O(t, e);
    },
    Q = function (t, n, e) {
      var i = k(t) || t;
      B(i) ||
        (function (t, n, e) {
          B(t) || (t.llEvLisnrs = {});
          var i = 'VIDEO' === t.tagName ? 'loadeddata' : 'load';
          q(t, i, n), q(t, 'error', e);
        })(
          i,
          function (o) {
            !(function (t, n, e, i) {
              var o = y(n);
              K(n, e, i),
                L(n, e.class_loaded),
                h(n, u),
                I(e.callback_loaded, n, i),
                o || $(e, i);
            })(0, t, n, e),
              J(i);
          },
          function (o) {
            !(function (t, n, e, i) {
              var o = y(n);
              K(n, e, i),
                L(n, e.class_error),
                h(n, f),
                I(e.callback_error, n, i),
                o || $(e, i);
            })(0, t, n, e),
              J(i);
          }
        );
    },
    W = function (t, n, e) {
      !(function (t) {
        t.llTempImage = document.createElement('IMG');
      })(t),
        Q(t, n, e),
        (function (t, n, e) {
          var i = p(t, n.data_bg),
            o = p(t, n.data_bg_hidpi),
            a = r && o ? o : i;
          a &&
            ((t.style.backgroundImage = 'url("'.concat(a, '")')),
            k(t).setAttribute('src', a),
            V(t, n, e));
        })(t, n, e),
        (function (t, n, e) {
          var i = p(t, n.data_bg_multi),
            o = p(t, n.data_bg_multi_hidpi),
            a = r && o ? o : i;
          a &&
            ((t.style.backgroundImage = a),
            (function (t, n, e) {
              L(t, n.class_applied),
                h(t, d),
                n.unobserve_completed && O(t, n),
                I(n.callback_applied, t, e);
            })(t, n, e));
        })(t, n, e);
    },
    X = function (t, n, e) {
      !(function (t) {
        return U.indexOf(t.tagName) > -1;
      })(t)
        ? W(t, n, e)
        : (function (t, n, e) {
            Q(t, n, e), S(t, n), V(t, n, e);
          })(t, n, e);
    },
    Y = ['IMG', 'IFRAME'],
    Z = function (t) {
      return t.use_native && 'loading' in HTMLImageElement.prototype;
    },
    tt = function (t, n, e) {
      t.forEach(function (t) {
        return (function (t) {
          return t.isIntersecting || t.intersectionRatio > 0;
        })(t)
          ? (function (t, n, e, i) {
              h(t, 'entered'),
                L(t, e.class_entered),
                w(t, e.class_exited),
                (function (t, n, e) {
                  n.unobserve_entered && O(t, e);
                })(t, e, i),
                I(e.callback_enter, t, n, i),
                (function (t) {
                  return A.indexOf(b(t)) >= 0;
                })(t) || X(t, e, i);
            })(t.target, t, n, e)
          : (function (t, n, e, i) {
              E(t) ||
                (L(t, e.class_exited),
                (function (t, n, e, i) {
                  e.cancel_on_exit &&
                    (function (t) {
                      return b(t) === l;
                    })(t) &&
                    'IMG' === t.tagName &&
                    (J(t),
                    (function (t) {
                      F(t, function (t) {
                        D(t);
                      }),
                        D(t);
                    })(t),
                    (function (t) {
                      F(t, function (t) {
                        T(t);
                      }),
                        T(t);
                    })(t),
                    w(t, e.class_loading),
                    x(i, -1),
                    m(t),
                    I(e.callback_cancel, t, n, i));
                })(t, n, e, i),
                I(e.callback_exit, t, n, i));
            })(t.target, t, n, e);
      });
    },
    nt = function (t) {
      return Array.prototype.slice.call(t);
    },
    et = function (t) {
      return t.container.querySelectorAll(t.elements_selector);
    },
    it = function (t) {
      return (function (t) {
        return b(t) === f;
      })(t);
    },
    ot = function (t, n) {
      return (function (t) {
        return nt(t).filter(E);
      })(t || et(n));
    },
    rt = function (t, e) {
      var o = c(t);
      (this._settings = o),
        (this.loadingCount = 0),
        (function (t, n) {
          i &&
            !Z(t) &&
            (n._observer = new IntersectionObserver(
              function (e) {
                tt(e, t, n);
              },
              (function (t) {
                return {
                  root: t.container === document ? null : t.container,
                  rootMargin: t.thresholds || t.threshold + 'px',
                };
              })(t)
            ));
        })(o, this),
        (function (t, e) {
          n &&
            window.addEventListener('online', function () {
              !(function (t, n) {
                var e;
                ((e = et(t)), nt(e).filter(it)).forEach(function (n) {
                  w(n, t.class_error), m(n);
                }),
                  n.update();
              })(t, e);
            });
        })(o, this),
        this.update(e);
    };
  return (
    (rt.prototype = {
      update: function (t) {
        var n,
          o,
          r = this._settings,
          a = ot(t, r);
        z(this, a.length),
          !e && i
            ? Z(r)
              ? (function (t, n, e) {
                  t.forEach(function (t) {
                    -1 !== Y.indexOf(t.tagName) &&
                      (t.setAttribute('loading', 'lazy'),
                      (function (t, n, e) {
                        Q(t, n, e), S(t, n), h(t, _);
                      })(t, n, e));
                  }),
                    z(e, 0);
                })(a, r, this)
              : ((o = a),
                (function (t) {
                  t.disconnect();
                })((n = this._observer)),
                (function (t, n) {
                  n.forEach(function (n) {
                    t.observe(n);
                  });
                })(n, o))
            : this.loadAll(a);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          et(this._settings).forEach(function (t) {
            delete t.llOriginalAttrs;
          }),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (t) {
        var n = this,
          e = this._settings;
        ot(t, e).forEach(function (t) {
          O(t, n), X(t, e, n);
        });
      },
    }),
    (rt.load = function (t, n) {
      var e = c(n);
      X(t, e);
    }),
    (rt.resetStatus = function (t) {
      m(t);
    }),
    n &&
      (function (t, n) {
        if (n)
          if (n.length) for (var e, i = 0; (e = n[i]); i += 1) s(t, e);
          else s(t, n);
      })(rt, window.lazyLoadOptions),
    rt
  );
});
function initializeLazyLoad() {
  if (typeof lazyLoadInstance === 'undefined') {
    var lazyLoadInstance = new LazyLoad();
  }
}
function removeAppleItunesAppMetatag() {
  const appleItunesAppMetatag = document.querySelector(
    "[name='apple-itunes-app']"
  );
  if (appleItunesAppMetatag) {
    appleItunesAppMetatag.remove();
  }
}
function swapLearnHubAdjustLinks() {
  const isLearnPage = window.location.pathname.includes('/learn/');
  if (!isLearnPage) return;
  const isCompoundInterestCalculatorPage = !!document.querySelector(
    '#learn-hub-articles.compound-interest-calculator-template:not(.investment-calculator-template)'
  );
  const isInvestmentCalculatorPage = !!document.querySelector(
    '#learn-hub-articles.investment-calculator-template'
  );
  const adjustLinkPath = isCompoundInterestCalculatorPage
    ? '7lk2u14_arni50f'
    : isInvestmentCalculatorPage
    ? '10lvroer_10immvza'
    : '5e1n4sg_pu31hev';
  const ctasToModify = document.querySelectorAll(`
    #header-nav-desktop .header-nav-right .a5-cta,
    #header-nav-mobile .header-action-cta,
    .sticky-action-button-container .sticky-action-cta,
    .investment-calculator-template .injected-cta-cta
  `);
  ctasToModify.forEach((cta) => {
    if (!cta.href) return;
    cta.href = cta.href.replace(
      /adjust.com\/(.*)\?fallback/i,
      `adjust.com/${adjustLinkPath}?fallback`
    );
  });
}
function renderHomepagePressCarouselIfNeeded() {
  if (!document.querySelector('#press-slider')) return;
  $('#press-slider').slick({
    nextArrow:
      '<div class="arrow arrow-right"><img src="https://sqy7rm.media.zestyio.com/carousel_arrow.svg" class="arrows"></div>',
    prevArrow:
      '<div class="arrow arrow-left"><img src="https://sqy7rm.media.zestyio.com/carousel_arrow.svg" class="arrows"></div>',
    autoplay: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    speed: 750,
    pauseOnHover: false,
    pauseOnFocus: true,
    cssEase: 'ease-in',
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          autoplay: true,
          slidesToShow: 3,
          arrows: false,
          centerPadding: '9%',
          centerMode: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          autoplay: true,
          slidesToShow: 3,
          arrows: false,
          centerPadding: '7%',
          centerMode: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          arrows: false,
          centerPadding: '11%',
          centerMode: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          centerPadding: '24%',
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          centerPadding: '20%',
          centerMode: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          centerPadding: '18%',
          centerMode: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          centerPadding: '16%',
          centerMode: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          centerPadding: '15.5%',
          centerMode: true,
        },
      },
      {
        breakpoint: 325,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          centerPadding: '15%',
          centerMode: true,
        },
      },
    ],
  });
}
function applyGoHenryFooterSupportCtaOverrides() {
  const isGoHenryPage = !!document.querySelector('.gohenry-page');
  if (!isGoHenryPage || !goHenryFooterSupportCtaLinksToOverride) return;
  const ctaToModify = document.querySelector('.footer-cta');
  if (!ctaToModify) return;
  ctaToModify.href = goHenryFooterSupportCtaLinksToOverride;
}
removeAppleItunesAppMetatag();
window.addEventListener('DOMContentLoaded', initializeLazyLoad);
window.addEventListener('DOMContentLoaded', swapLearnHubAdjustLinks);
window.addEventListener(
  'DOMContentLoaded',
  renderHomepagePressCarouselIfNeeded
);
window.addEventListener(
  'DOMContentLoaded',
  applyGoHenryFooterSupportCtaOverrides
);
function oneTrustChangesScript() {
  var yourPrivacyChoicesLink;
  var divInsideModalOneTrust;
  var textTitleModalOneTrustElement;
  var toggleDivOptOut;
  const oneTrustModalTitleLabel = 'Your Privacy Choices';
  const oneTrustAnchorClickListener = () => {
    divInsideModalOneTrust = document.getElementById('ot-pc-desc');
    if (divInsideModalOneTrust) {
      divInsideModalOneTrust.innerHTML =
        'This site employs cookies and similar technologies that facilitate sharing of personal information (e.g., IP address, device/advertising ID, usage activity) with third-party advertising services to help them target the advertising you see online based on your activity on this site and other online services. See our <a href="https://www.acorns.com/privacy" class="privacy-notice-link" rel="noopener" target="_blank" aria-label="More information about your privacy, opens in a new tab" tabindex="0">Privacy Policy</a> for details. You may opt-out of such sharing by Acorns by selecting “Yes” below and clicking “Confirm”. Your request to opt-out will apply only to the device and browser from which you submit the request.';
    }
    textTitleModalOneTrustElement = document.getElementById('ot-pc-title');
    if (textTitleModalOneTrustElement) {
      textTitleModalOneTrustElement.innerText = oneTrustModalTitleLabel;
    }
    toggleDivOptOut = document.getElementsByClassName('ot-tgl')?.item(0);
    if (toggleDivOptOut) {
      const htmlToggleDiv = toggleDivOptOut.outerHTML;
      if (htmlToggleDiv && !htmlToggleDiv.includes('Yes')) {
        const leftText = document.createElement('span');
        leftText.id = 'leftNoToggleText';
        const leftTextNode = document.createTextNode('No');
        leftText.appendChild(leftTextNode);
        toggleDivOptOut.insertBefore(leftText, toggleDivOptOut.firstChild);
        const rightText = document.createElement('span');
        rightText.id = 'rightNoToggleText';
        const rightTextNode = document.createTextNode('Yes');
        rightText.appendChild(rightTextNode);
        toggleDivOptOut.appendChild(rightText);
        toggleDivOptOut.id = 'toogleClassOptOut';
      }
    }
  };
  const intervalToWaitForOneTrustAnchorToBeRendered = setInterval(() => {
    yourPrivacyChoicesLink = document.getElementById('ot-sdk-btn-new-style');
    if (yourPrivacyChoicesLink) {
      yourPrivacyChoicesLink.addEventListener(
        'click',
        oneTrustAnchorClickListener
      );
      clearInterval(intervalToWaitForOneTrustAnchorToBeRendered);
    }
  }, 2000);
}
if (document.getElementsByClassName('closing-row-links')) {
  oneTrustChangesScript();
}
var headerNav;
var headerNavItems;
var headerNavSubitems;
function setUpDesktopHeaderNav() {
  headerNav = document.querySelector('#header-nav-desktop');
  headerNavItems = document.querySelectorAll(
    '#header-nav-desktop .header-nav-item'
  );
  headerNavSubitems = document.querySelectorAll(
    '#header-nav-desktop .header-nav-submenu-container'
  );
  if (!headerNav || !headerNavItems || !headerNavSubitems) return;
  headerNav.addEventListener('mouseleave', (e) =>
    handleNavMouseLeave(e, headerNav)
  );
  headerNavItems.forEach((navItem) => {
    navItem.addEventListener('mouseenter', (e) =>
      handleNavItemMouseEnter(e, navItem)
    );
    navItem.addEventListener('mouseleave', (e) =>
      handleNavItemMouseLeave(e, navItem)
    );
  });
  headerNavSubitems.forEach((navSubitem) => {
    navSubitem.addEventListener('mouseenter', (e) =>
      handleNavSubitemMouseEnter(e, navSubitem)
    );
    navSubitem.addEventListener('mouseleave', (e) =>
      handleNavSubitemMouseLeave(e, navSubitem)
    );
  });
}
function handleNavMouseLeave(e, nav) {
  nav.classList.remove('active');
}
function handleNavItemMouseEnter(e, item) {
  item.classList.add('active');
  if (!item.closest('.header-nav-right')) {
    headerNav.classList.add('active');
  }
}
function handleNavItemMouseLeave(e, item) {
  item.classList.remove('active');
  if (!e.relatedTarget || !e.relatedTarget.closest('#header-nav-desktop')) {
    headerNav.classList.remove('active');
  } else {
    window.setTimeout(() => {
      if (!document.querySelector('.header-nav-item.active')) {
        headerNav.classList.remove('active');
      }
    }, 300);
  }
}
function handleNavSubitemMouseEnter(e, subitem) {
  subitem.classList.add('active');
}
function handleNavSubitemMouseLeave(e, subitem) {
  subitem.classList.remove('active');
}
var headerNavMobile;
var headerNavMobileToggleWrapper;
var headerNavMobileItems;
function setUpMobileHeaderNav() {
  headerNavMobile = document.querySelector('#header-nav-mobile');
  headerNavMobileToggleWrapper = document.querySelector(
    '.mobile-nav-toggle-wrapper'
  );
  headerNavMobileItems = document.querySelectorAll(
    '#header-nav-mobile .nav-item-with-children'
  );
  if (
    !headerNavMobile ||
    !headerNavMobileToggleWrapper ||
    !headerNavMobileItems
  )
    return;
  headerNavMobileToggleWrapper.addEventListener('click', () => {
    headerNavMobile && headerNavMobile.classList.toggle('nav-opened');
  });
  headerNavMobileItems.forEach((item) => {
    item.addEventListener('click', (e) =>
      toggleMobileNavItemActiveClass(e, item)
    );
  });
  initializeHideMobileNavOnScrollUp();
}
function toggleMobileNavItemActiveClass(e, item) {
  var currentlyActiveItem = document.querySelector(
    '#header-nav-mobile .nav-item-with-children.active'
  );
  if (currentlyActiveItem && currentlyActiveItem !== item) {
    currentlyActiveItem.classList.remove('active');
    var currentlyActiveItemSubitems = currentlyActiveItem.querySelectorAll(
      '.header-nav-submenu-container, .kids-item'
    );
    currentlyActiveItemSubitems.forEach((subitem) => {
      subitem.style = 'opacity: 0; transition-delay: 0ms;';
    });
  }
  item.classList.toggle('active');
  var subitems = item.querySelectorAll(
    '.header-nav-submenu-container, .kids-item'
  );
  if (item.classList.contains('active')) {
    subitems.forEach((subitem, i) => {
      var delayBeforeStart = 200;
      var transitionDelay = i ? delayBeforeStart + i * 160 : delayBeforeStart;
      subitem.style =
        'opacity: 1; transition-delay: ' + transitionDelay + 'ms;';
    });
  } else if (e.target && e.target.closest('.nav-item-with-children-title')) {
    subitems.forEach((subitem) => {
      subitem.style = 'opacity: 0; transition-delay: 0ms;';
    });
  }
}
function initializeHideMobileNavOnScrollUp() {
  let lastScrollTop = 0;
  let hasRun = false;
  window.addEventListener(
    'scroll',
    function () {
      const isMobileNavOpen =
        !!headerNavMobile.classList.contains('nav-opened');
      const isPricingPopUpActive = !!document.querySelector(
        '.info-pop-up-container.visible'
      );
      const documentBody = document && document.body;
      if (isMobileNavOpen || !documentBody) return;
      let st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        if (!hasRun) {
          headerNavMobile &&
            headerNavMobile.classList.remove('scroll-up-transition');
          documentBody.classList.remove('scroll-up-transition');
          headerNavMobile &&
            headerNavMobile.classList.remove('scroll-up-no-transition');
          headerNavMobile && headerNavMobile.classList.remove('scroll-up');
          hasRun = true;
        }
      } else {
        if (hasRun) {
          headerNavMobile.classList.remove('scroll-up-transition');
          documentBody.classList.remove('scroll-up-transition');
          headerNavMobile.classList.remove('scroll-up-no-transition');
          if (isPricingPopUpActive) return;
          headerNavMobile.classList.add('scroll-up');
          if (st <= 60) {
            headerNavMobile.classList.add('scroll-up-no-transition');
          } else {
            window.setTimeout(function () {
              headerNavMobile.classList.add('scroll-up-transition');
              documentBody.classList.add('scroll-up-transition');
            }, 1);
          }
          hasRun = false;
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
}
var headerStickyBanner;
var mobileHeaderStickyBanner;
var bodyElement;
function setUpHeaderStickyBanner() {
  headerStickyBanner = document.querySelector('.header-sticky-banner');
  mobileHeaderStickyBanner = document.querySelector(
    '.mobile-header-sticky-banner'
  );
  bodyElement = document.querySelector('body');
  if (!headerStickyBanner || !mobileHeaderStickyBanner || !bodyElement) return;
  updateBodyPaddingForStickyBanner();
  window.addEventListener('load', updateBodyPaddingForStickyBanner);
  window.addEventListener('resize', updateBodyPaddingForStickyBanner);
}
function updateBodyPaddingForStickyBanner() {
  var paddingToAdd =
    window.innerWidth >= 1025
      ? headerStickyBanner && headerStickyBanner.getBoundingClientRect().height
      : mobileHeaderStickyBanner &&
        mobileHeaderStickyBanner.getBoundingClientRect().height;
  if (paddingToAdd) {
    bodyElement.style.paddingTop = paddingToAdd + 'px';
  }
}
window.addEventListener('DOMContentLoaded', setUpDesktopHeaderNav);
window.addEventListener('DOMContentLoaded', setUpMobileHeaderNav);
window.addEventListener('DOMContentLoaded', setUpHeaderStickyBanner);
function initializeEnvoyBottomSliderNav() {
  hideCurrentPageFromNavigation();
  makeBottomSliderNavDraggable();
}
function hideCurrentPageFromNavigation() {
  const currentPath = window.location.pathname;
  const featuredPages = document.querySelectorAll(
    '.envoy-bottom-slider-nav .featured-page-clickable-area'
  );
  featuredPages.forEach((item) => {
    const itemLink = item.href;
    const itemURL = new URL(itemLink);
    const itemPath = itemURL.pathname;
    if (!itemPath) return;
    if (
      currentPath === itemPath ||
      currentPath === itemPath.slice(0, -1) + '-paid/'
    ) {
      const itemWrapper = item.closest('.featured-page-wrapper');
      itemWrapper.parentNode.removeChild(itemWrapper);
    }
  });
}
function makeBottomSliderNavDraggable() {
  const bottomSliderNavMainContent = document.querySelector(
    '.bottom-slider-nav-main-content-wrapper'
  );
  if (bottomSliderNavMainContent) {
    makeElementDraggable(bottomSliderNavMainContent);
  }
}
function handleFAQClick(e) {
  const relatedFAQ = e.target.closest('.question-wrapper');
  if (relatedFAQ) {
    relatedFAQ.classList.toggle('active');
  }
}
function rotateTextAsUserScrolls(selector, widthDesktop, widthMobile) {
  const componentHeadline = document.querySelector(selector);
  const scrollForPxChange = 1;
  if (!componentHeadline) return;
  const totalWidthOfPageCopy =
    window.innerWidth >= 1025 ? widthDesktop : widthMobile;
  const throttledRotateTextOnScroll = throttle(
    () =>
      updateRotatedTextPosition(
        componentHeadline,
        scrollForPxChange,
        totalWidthOfPageCopy
      ),
    16
  );
  updateRotatedTextPosition(
    componentHeadline,
    scrollForPxChange,
    totalWidthOfPageCopy
  );
  window.addEventListener('scroll', throttledRotateTextOnScroll);
}
function updateRotatedTextPosition(
  component,
  scrollForPxChange,
  totalWidthOfPageCopy
) {
  const currentScroll = window.scrollY;
  const finalPosition =
    -1 * (window.scrollY % (totalWidthOfPageCopy / 2)) * scrollForPxChange;
  component.style.transform = 'translateX(' + finalPosition + 'px)';
}
function initializeCountupScripting() {
  const highlightedTextComponentOnPage = document.querySelector(
    '.highlighted-text-component'
  );
  const countUpIsLoaded = typeof CountUp !== 'undefined';
  if (highlightedTextComponentOnPage && countUpIsLoaded) {
    countUpOnceVisible('count-up-dollars-copy', { prefix: '$' });
  }
}
function countUpOnceVisible(id, options = {}) {
  const el = document.getElementById(id);
  if (isElementVisible(el)) {
    countUpElement(id, options);
  } else {
    window.addEventListener('scroll', () => {
      countUpIfVisible(id, options);
    });
  }
}
function countUpIfVisible(id, options) {
  const el = document.getElementById(id);
  if (isElementVisible(el) && !el.classList.contains('visible')) {
    el.classList.add('visible');
    window.setTimeout(() => {
      countUpElement(id, options);
    }, 250);
  }
}
function countUpElement(id, options) {
  const el = document.getElementById(id);
  if (el) {
    const elCount = parseInt(el.dataset.count);
    const elCountupInstance = new CountUp(id, 0, elCount, 0, 2, options);
    if (!elCountupInstance.error) {
      elCountupInstance.start();
    } else {
      el.textContent = elCount;
    }
  }
}
window.addEventListener('DOMContentLoaded', initializeEnvoyBottomSliderNav);
window.addEventListener('DOMContentLoaded', initializeCountupScripting);
function initializeGoHenryCardDesignsCarousel() {
  const isCarouselActive = document.querySelector(
    '.card-designs-carousel-component'
  );
  if (!isCarouselActive) return;
  $('.card-designs-carousel-component .card-designs-carousel').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: true,
    draggable: true,
    infinite: true,
    speed: 750,
    focusOnSelect: true,
  });
}
function hideCurrentPageFromGoHenryFourColumnCards() {
  const currentPath = window.location.pathname;
  const fourColumnCards = document.querySelectorAll(
    '.four-column-cards-component .card-wrapper'
  );
  fourColumnCards.forEach((card) => {
    const cardCta = card.querySelector('.card-cta');
    if (!cardCta) return;
    const cardLink = cardCta.href;
    const cardURL = new URL(cardLink);
    const cardPath = cardURL.pathname;
    if (!cardPath) return;
    if (currentPath === cardPath) {
      card.parentNode.removeChild(card);
    }
  });
}
function overridePricingLinksWhenGoHenryPricingModuleActive() {
  const pricingModule = document.querySelector('#gh-pricing-module');
  if (!pricingModule) return;
  const pricingLinks = document.querySelectorAll('.pricing-link');
  pricingLinks.forEach((link) => {
    link.href = '#gh-pricing-module';
    link.addEventListener('click', () => {
      headerNavMobile && headerNavMobile.classList.remove('nav-opened');
    });
  });
}
window.addEventListener(
  'DOMContentLoaded',
  initializeGoHenryCardDesignsCarousel
);
window.addEventListener(
  'DOMContentLoaded',
  hideCurrentPageFromGoHenryFourColumnCards
);
window.addEventListener(
  'DOMContentLoaded',
  overridePricingLinksWhenGoHenryPricingModuleActive
);
function initializeCompoundInterestCalculator() {
  if (!document.querySelector('.compound-interest-calculator')) return;
  setHighchartsDefaults();
  setUpCompoundInterestCalculator();
  formatCurrencyInputsOnChange();
  toggleSocialShareDropdownOnClick();
}
function setHighchartsDefaults() {
  if (typeof Highcharts === 'undefined') return;
  Highcharts.setOptions({
    lang: {
      thousandsSep: ',',
      numericSymbols: [null, 'M', 'G', 'T', 'P', 'E'],
    },
  });
}
function setUpCompoundInterestCalculator() {
  renderCompoundInterestCalculator();
  addCompoundInterestCtaClickHandling();
  setUpDragHandlingForYearsToGrowSlider();
  addClickHandlingForAnnualReturnInput();
}
function renderCompoundInterestCalculator() {
  const inputValues = fetchChartInputs();
  const chartArrays = calculateChartArrays(inputValues);
  drawCalculatorChart(chartArrays[0], chartArrays[1], chartArrays[2]);
  updateFutureBalance(chartArrays[0], chartArrays[1]);
}
function addCompoundInterestCtaClickHandling() {
  const calculatorSubmit = document.querySelector('#calculator-submit');
  if (calculatorSubmit) {
    calculatorSubmit.addEventListener(
      'click',
      renderCompoundInterestCalculator
    );
  }
}
function updateFutureBalance(investedArray, returnsArray) {
  const futureBalanceWrapper = document.querySelector(
    '.future-balance-wrapper'
  );
  const finalInvested = investedArray[investedArray.length - 1];
  const finalReturns = returnsArray[returnsArray.length - 1];
  const finalAmount = finalInvested + finalReturns;
  if (futureBalanceWrapper) {
    futureBalanceWrapper.innerText = '$' + finalAmount.toLocaleString('en-US');
  }
}
function fetchChartInputs() {
  const initialValueEl = document.querySelector('#initial-deposit');
  const contributionsEl = document.querySelector('#contributions');
  const yearsToGrowEl = document.querySelector('#years-to-grow');
  const annualReturnEl = document.querySelector('#annual-return');
  const contributionFrequencyEl = document.querySelector(
    'input[name="contribution-frequency"]:checked'
  );
  if (
    !initialValueEl ||
    !contributionsEl ||
    !yearsToGrowEl ||
    !annualReturnEl ||
    !contributionFrequencyEl
  )
    return;
  const initialValue = parseInt(
    stripNonNumbers(initialValueEl.value || initialValueEl.placeholder)
  );
  const contributionAmount = parseInt(
    stripNonNumbers(contributionsEl.value || contributionsEl.placeholder)
  );
  const yearsToGrow = parseInt(
    yearsToGrowEl.value || yearsToGrowEl.placeholder
  );
  const annualReturn = parseInt(
    stripNonNumbers(annualReturnEl.value || annualReturnEl.placeholder)
  );
  const contributionFrequencyValue = contributionFrequencyEl.value || 'annual';
  const contributionFrequency = determineContributionFrequency(
    contributionFrequencyValue
  );
  return {
    initialValue,
    contributionAmount,
    contributionFrequency,
    yearsToGrow,
    annualReturn,
  };
}
function calculateChartArrays(inputValues) {
  const {
    initialValue,
    contributionAmount,
    contributionFrequency,
    yearsToGrow,
    annualReturn,
  } = inputValues;
  let currentYear = new Date().getFullYear();
  const invested = [initialValue];
  const years = [currentYear];
  const annualContribution = contributionAmount * contributionFrequency;
  for (let i = 1; i <= yearsToGrow; i++) {
    const totalInvested = initialValue + annualContribution * i;
    years.push(currentYear + i);
    invested.push(totalInvested);
  }
  const returns = calculateReturnsArray(inputValues);
  return [invested, returns, years];
}
function determineContributionFrequency(contributionFrequencyValue) {
  if (contributionFrequencyValue === 'annual') {
    return 1;
  } else if (contributionFrequencyValue === 'monthly') {
    return 12;
  } else if (contributionFrequencyValue === 'weekly') {
    return 52;
  } else if (contributionFrequencyValue === 'daily') {
    return 365;
  }
}
function calculateReturnsArray(inputValues) {
  const {
    initialValue: P,
    contributionAmount: PMT,
    contributionFrequency: n,
    yearsToGrow: t,
    annualReturn,
  } = inputValues;
  let r = annualReturn / 100,
    totalContributions = P + PMT * t,
    fvOfPrincipal = P,
    fvOfContributions = 0,
    totalReturn,
    totalInvestment,
    combined,
    rData = [];
  for (i = 0; i < n * t; i++) {
    fvOfPrincipal = fvOfPrincipal * (1 + r / n);
    fvOfContributions = fvOfContributions * (1 + r / n) + PMT;
    combined = fvOfPrincipal + fvOfContributions;
    totalInvestment = PMT * (i + 1) + P;
    totalReturn = Math.round(combined - totalInvestment);
    rData.push(totalReturn);
  }
  rData.unshift(0);
  rData = rData.filter((element, index) => {
    return index % n === 0;
  });
  return rData;
}
function drawCalculatorChart(
  investedArray,
  returnsArray,
  yearsArray,
  yearLabelInterval
) {
  Highcharts.chart('calculator-chart', {
    chart: {
      type: 'column',
      styledMode: true,
      spacingBottom: 0,
      spacingRight: 0,
      spacingLeft: 0,
      animation: false,
    },
    title: { text: null },
    plotOptions: {
      column: { stacking: 'normal' },
      series: { groupPadding: 0.1 },
    },
    legend: {
      align: 'center',
      symbolPadding: 16,
      verticalAlign: 'top',
      reversed: true,
      margin: 16,
      itemDistance: 32,
    },
    xAxis: {
      labels: { style: { whiteSpace: 'nowrap' }, y: 30 },
      categories: yearsArray,
      tickInterval: yearLabelInterval,
    },
    yAxis: {
      title: false,
      labels: {
        overflow: 'allow',
        formatter: function () {
          return '$' + Highcharts.numberFormat(this.value, 0, '.', ',');
        },
        x: -20,
      },
      tickAmount: 5,
    },
    credits: { enabled: false },
    tooltip: { shadow: false, padding: 10, shared: true, valuePrefix: '$' },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 500 },
          chartOptions: {
            xAxis: { labels: { y: 22 }, tickInterval: 5 },
            yAxis: { labels: { x: -12 } },
          },
        },
      ],
    },
  });
}
function setUpDragHandlingForYearsToGrowSlider() {
  $('.years-to-grow-icon-wrapper').draggable({
    grid: [6 * (50 / 65), 0],
    containment: '.years-to-grow-draggable-expanded-area',
    drag: handleDragForYearsToGrowSlider,
  });
}
function handleDragForYearsToGrowSlider(e, ui) {
  if (!ui || !ui.position) return;
  const gridAmount = 6 * (50 / 65);
  const stepsFromLeft = ui.position.left / gridAmount;
  updateYearsToGrowAmount(stepsFromLeft + 1);
  updateSliderProgress(stepsFromLeft + 1);
}
function updateYearsToGrowAmount(years) {
  const yearsToGrow = document.querySelector('#years-to-grow');
  yearsToGrow.value = parseInt(years);
  yearsToGrow.style.width = yearsToGrow.value.length + 'ch';
  yearsToGrow.classList.add('active');
}
function updateSliderProgress(currentStep) {
  const sliderProgress = document.querySelector('.slider-progress');
  sliderProgress.style.width = `calc((${currentStep} / 65) * 100%)`;
}
function addClickHandlingForAnnualReturnInput() {
  const annualReturnWrapper = document.querySelector('.annual-return-wrapper');
  const annualReturn = document.querySelector('#annual-return');
  annualReturnWrapper.addEventListener('click', () => {
    annualReturn.focus();
  });
}
function formatNumberWithCommas(number) {
  return number
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    .slice(0, -3);
}
function stripNonNumbers(string) {
  return string.replace(/[a-zA-Z$.,]/g, '');
}
function formatCurrencyInputsOnChange() {
  const currencyInputs = document.querySelectorAll('.currency-input');
  currencyInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      input.value = formatNumberWithCommas(
        parseInt(stripNonNumbers(e.target.value))
      );
    });
  });
}
function toggleSocialShareDropdownOnClick() {
  window.addEventListener('click', (e) => {
    const socialShareDropdownWrapper = document.querySelector(
      '.social-share-dropdown-wrapper'
    );
    if (!socialShareDropdownWrapper) return;
    const wasToggleClicked = e.target.closest('.social-share-toggle');
    const wasDropdownClicked = e.target.closest('.social-share-dropdown');
    const wasDropdownCloseButtonClicked = e.target.closest(
      '.dropdown-close-wrapper'
    );
    if (wasToggleClicked) {
      socialShareDropdownWrapper.classList.toggle('dropdown-active');
    } else {
      if (wasDropdownClicked && !wasDropdownCloseButtonClicked) {
        handleSocialShareDropdownClick(e);
        return;
      }
      socialShareDropdownWrapper.classList.remove('dropdown-active');
    }
  });
}
function handleSocialShareDropdownClick(e) {
  if (!e || !e.target) return;
  const wasCopyLinkClicked = e.target.closest('.social-share-copy-link');
  const wasTwitterClicked = e.target.closest('.social-share-twitter');
  const wasFacebookClicked = e.target.closest('.social-share-facebook');
  if (wasCopyLinkClicked) {
    handleSocialShareDropdownItemClick('copy');
  } else if (wasTwitterClicked) {
    handleSocialShareDropdownItemClick('twitter');
  } else if (wasFacebookClicked) {
    handleSocialShareDropdownItemClick('facebook');
  }
}
function handleSocialShareDropdownItemClick(itemClicked) {
  if (!itemClicked) return;
  const urlToShare = window.location.href;
  const shareCopy = document.querySelector(
    '#learn-hub-calculator.investment-calculator'
  )
    ? 'Investing for goals is a journey with unique twists and turns. Try the Acorns investment calculator to find the right path for you.'
    : 'Use the Acorns compound interest calculator to see how your money could potentially grow over time with the power of compounding.';
  if (itemClicked === 'copy') {
    copyTextToClipboard(urlToShare);
    setSocialShareToggleToCopiedState();
  } else if (itemClicked === 'twitter' || itemClicked === 'facebook') {
    const twitterUrl = `https://www.twitter.com/share?url=${urlToShare}&text=${shareCopy}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;
    const url = itemClicked === 'twitter' ? twitterUrl : facebookUrl;
    window.open(url, '_blank');
  }
}
function setSocialShareToggleToCopiedState() {
  const toggle = document.querySelector('.social-share-toggle');
  if (!toggle) return;
  toggle.classList.add('user-copied-link');
  window.setTimeout(() => {
    toggle.classList.remove('user-copied-link');
  }, 3000);
}
window.addEventListener(
  'DOMContentLoaded',
  initializeCompoundInterestCalculator
);
function initializeInvestmentCalculator() {
  if (!document.querySelector('.investment-calculator')) return;
  setHighchartsDefaults();
  setUpInvestmentCalculator();
  formatCurrencyInputsOnChange();
  toggleSocialShareDropdownOnClick();
}
function setUpInvestmentCalculator() {
  renderInvestmentCalculator();
  addInvestmentCtaClickHandling();
  setUpDragHandlingForYearsToGrowSlider();
  addClickHandlingForAnnualReturnInput();
}
function renderInvestmentCalculator(updateGoalStatus = false) {
  const inputValues = fetchChartInputs();
  const chartArrays = calculateChartArrays(inputValues);
  drawCalculatorChart(chartArrays[0], chartArrays[1], chartArrays[2]);
  updateFutureBalance(chartArrays[0], chartArrays[1]);
  if (updateGoalStatus) {
    updateGoalStatusCopy(chartArrays[0], chartArrays[1]);
  }
}
function addInvestmentCtaClickHandling() {
  const calculatorSubmit = document.querySelector('#calculator-submit');
  if (calculatorSubmit) {
    calculatorSubmit.addEventListener('click', () => {
      renderInvestmentCalculator(true);
    });
  }
}
function updateGoalStatusCopy(investedArray, returnsArray) {
  const investmentGoal = document.querySelector('#investment-goal');
  const goalStatusCopy = document.querySelector('.goal-status-copy');
  if (!investmentGoal || !goalStatusCopy) return;
  const goalAmount = parseInt(
    stripNonNumbers(investmentGoal.value || investmentGoal.placeholder)
  );
  const finalInvested = investedArray[investedArray.length - 1];
  const finalReturns = returnsArray[returnsArray.length - 1];
  const finalAmount = finalInvested + finalReturns;
  const wasGoalMet = finalAmount >= goalAmount;
  if (wasGoalMet) {
    goalStatusCopy.classList.add('success');
    goalStatusCopy.classList.remove('goal-not-met');
    const formattedGoalAmount = '$' + goalAmount.toLocaleString('en-US');
    goalStatusCopy.innerText = `You're on track to exceed your goal of ${formattedGoalAmount}!`;
  } else {
    goalStatusCopy.classList.add('goal-not-met');
    goalStatusCopy.classList.remove('success');
    const shortfallAmount = goalAmount - finalAmount;
    const formattedShortfallAmount =
      '$' + shortfallAmount.toLocaleString('en-US');
    goalStatusCopy.innerText = `You're off track from your investment goal, anticipated to be short ${formattedShortfallAmount}`;
  }
  goalStatusCopy.classList.add('visible');
  scrollUserToGoalStatus();
}
function scrollUserToGoalStatus() {
  const targetEl = document.querySelector(
    '#learn-hub-calculator .chart-heading'
  );
  if (!targetEl) return;
  const offset =
    window.innerWidth >= 1025
      ? -84
      : window.innerWidth >= 768
      ? -150
      : window.innerWidth >= 360
      ? -143
      : -164;
  scrollToElement(targetEl, undefined, null, offset);
}
window.addEventListener('DOMContentLoaded', initializeInvestmentCalculator);
function initializeEnvoyEsgPage() {
  if (!document.body.classList.contains('view-envoy_esg')) return;
  jQuery(document).ready(function ($) {
    lottie.loadAnimation({
      container: document.querySelector('#lottie-globe-section'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/esg-lottie-animation.json',
    });
  });
  window.addEventListener('load', () => {
    window.setTimeout(addLockScrollHandlingToWhatIsEsg, 3000);
  });
}
function addLockScrollHandlingToWhatIsEsg() {
  const sidebar = document.querySelector('.what-is-esg-sidebar');
  const container = document.querySelector('.what-is-esg-content-wrapper');
  const whatIsEsgFinalItem = document.querySelector('.what-is-esg-item-3');
  if (!sidebar || !container || !whatIsEsgFinalItem) return;
  function updateSidebarLocking() {
    const sidebarDistanceFromTop = container.offsetTop;
    const paddingFromTop = 92 + 100;
    const currentHeight = window.innerHeight;
    const posToStartLock = sidebarDistanceFromTop - paddingFromTop;
    const posToEndLock =
      container.offsetTop +
      container.offsetHeight -
      whatIsEsgFinalItem.offsetHeight -
      paddingFromTop;
    const currentScroll = window.scrollY;
    const isDesktop = window.innerWidth >= 1025;
    if (currentScroll >= posToStartLock && isDesktop) {
      if (currentScroll < posToEndLock) {
        sidebar.style.position = 'fixed';
        sidebar.style.top = paddingFromTop + 'px';
        sidebar.style.bottom = '';
      } else {
        const positionFromBottom =
          whatIsEsgFinalItem.offsetHeight - sidebar.offsetHeight;
        sidebar.style.position = 'absolute';
        sidebar.style.top = '';
        sidebar.style.bottom = positionFromBottom + 'px';
      }
    } else {
      sidebar.style.position = '';
      sidebar.style.top = '';
      sidebar.style.bottom = '';
    }
  }
  const throttledUpdateSidebarLocking = throttle(updateSidebarLocking, 16);
  updateSidebarLocking();
  window.addEventListener('scroll', throttledUpdateSidebarLocking);
}
window.addEventListener('DOMContentLoaded', initializeEnvoyEsgPage);
function initializeBitcoinEtfPage() {
  if (!document.body.classList.contains('view-bitcoin_etf')) return;
  makePortfolioSelectorDraggable();
  setupBitcoinLearnMoreProgressBar();
  $(document).ready(initializePortfolioSelectorCarousels);
  window.addEventListener('resize', setupBitcoinLearnMoreProgressBar);
}
function makePortfolioSelectorDraggable() {
  const portfolioSelector = document.querySelector(
    '.portfolio-segment-carousel .carousel-container'
  );
  portfolioSelector && makeElementDraggable(portfolioSelector);
}
function initializePortfolioSelectorCarousels() {
  initializePortfolioSelectorCarousel();
  initializePortfolioSelectorCarouselNav();
  initializePortfolioSelectorCarouselNavMobileImage();
}
function initializePortfolioSelectorCarousel() {
  $('.portfolio-selector-carousel-wrapper').slick({
    asNavFor:
      '.portfolio-selector-nav-wrapper, .portfolio-selector-nav-mobile-image-wrapper',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    draggable: false,
    speed: 0,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: { adaptiveHeight: true } }],
  });
}
function initializePortfolioSelectorCarouselNav() {
  $('.portfolio-selector-nav-wrapper').slick({
    asNavFor:
      '.portfolio-selector-carousel-wrapper, .portfolio-selector-nav-mobile-image-wrapper',
    slidesToShow: 0,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });
}
function initializePortfolioSelectorCarouselNavMobileImage() {
  $('.portfolio-selector-nav-mobile-image-wrapper').slick({
    asNavFor:
      '.portfolio-selector-nav-wrapper, .portfolio-selector-carousel-wrapper',
    slidesToShow: 1,
    arrows: false,
    draggable: false,
    speed: 0,
    dots: false,
    focusOnSelect: false,
  });
}
function setupBitcoinLearnMoreProgressBar() {
  const activeCarousel = document.querySelector(
    '.portfolio-segment-carousel.active'
  );
  if (!activeCarousel) return;
  const carouselWrapper = activeCarousel.querySelector('.carousel-wrapper');
  const carouselContainer = activeCarousel.querySelector('.carousel-container');
  const carouselProgressBar = activeCarousel.querySelector(
    '.carousel-progress-bar'
  );
  const carouselActiveProgress = activeCarousel.querySelector(
    '.carousel-active-progress'
  );
  const windowWidth = window.innerWidth;
  const visibleWidthOfCarousel = windowWidth > 1200 ? 1068 : windowWidth * 0.89;
  const carouselTotalWidth = carouselWrapper.getBoundingClientRect().width;
  const carouselMargin =
    windowWidth > 1200 ? window.innerWidth - 1068 : windowWidth * 0.055 * 2;
  const carouselActualWidth = carouselTotalWidth - carouselMargin;
  const activeProgressPercentage = visibleWidthOfCarousel / carouselActualWidth;
  const activeProgressWidth = activeProgressPercentage * visibleWidthOfCarousel;
  carouselActiveProgress.style.width = activeProgressWidth + 'px';
  const scrollableWidth = carouselActualWidth - visibleWidthOfCarousel;
  function updateProgressBar(e) {
    const carouselWrapperLeftScroll =
      -1 * carouselWrapper.getBoundingClientRect().left;
    let percentageScrolled =
      1 - (scrollableWidth - carouselWrapperLeftScroll) / scrollableWidth;
    const scrollbarDistanceFromLeft =
      (visibleWidthOfCarousel - activeProgressWidth) * percentageScrolled;
    carouselActiveProgress.style.left = scrollbarDistanceFromLeft + 'px';
  }
  carouselContainer.addEventListener('scroll', (e) => updateProgressBar(e));
}
window.addEventListener('DOMContentLoaded', initializeBitcoinEtfPage);
function initializeEnvoyHomePage() {
  if (!document.body.classList.contains('view-envoy_home')) return;
  replaceFloatingActionButtonCtaLinkAndCopy();
  displayFloatingActionButtonOnceUpdated();
  $(document).ready(addHeroSubsectionAnimationTriggering);
  window.addEventListener('load', initializeHeroSubsectionCarousels);
  initializePressQuoteCarousel();
  rotateTextAsUserScrolls(
    '.rotating-text-component .rotating-headline',
    8757,
    2745
  );
}
function addHeroSubsectionAnimationTriggering() {
  function checkTriggerPosition() {
    const heroSubsectionWrapper = document.querySelector(
      '.hero-subsection-wrapper'
    );
    const spacer = document.querySelector('.hero-subsection-section .spacer');
    if (!heroSubsectionWrapper || !spacer) return;
    const additionalScrollOffset = window.innerHeight * 0.25;
    const triggerPos =
      window.scrollY +
      spacer.getBoundingClientRect().y +
      additionalScrollOffset;
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    if (currentScroll >= triggerPos - windowHeight) {
      if (!heroSubsectionWrapper.classList.contains('transition-engaged')) {
        handleHeroSubsectionAnimation();
      }
    } else {
      if (heroSubsectionWrapper.classList.contains('transition-engaged')) {
        handleHeroSubsectionAnimation(true);
      }
    }
  }
  const throttledCheckTriggerPosition = throttle(checkTriggerPosition, 50);
  window.addEventListener('scroll', throttledCheckTriggerPosition);
}
async function handleHeroSubsectionAnimation(isReverse = false) {
  const heroSubsectionWrapper = document.querySelector(
    '.hero-subsection-wrapper'
  );
  const bubble = document.querySelector('.hero-subsection-section .bubble');
  const bubbleCounterScale = document.querySelector(
    '.hero-subsection-section .bubble-counter-scale'
  );
  if (!heroSubsectionWrapper || !bubble || !bubbleCounterScale) return;
  heroSubsectionWrapper.classList.toggle('transition-engaged');
  const initialDelayMs = isReverse ? 0 : 450;
  const startingScale = 1;
  const endingScale = 4;
  const scaleDifference = endingScale - startingScale;
  const frames = 64;
  const frameDuration = 16;
  await delayProgress(initialDelayMs);
  for (let i = 0; i <= frames; i++) {
    const progress = i / frames;
    const bubbleScale = !isReverse
      ? startingScale + progress * scaleDifference
      : endingScale - progress * scaleDifference;
    const inverse = 1 / bubbleScale;
    bubble.style.transform = `translate(-50%, -50%) scale(${bubbleScale}, ${bubbleScale})`;
    bubbleCounterScale.style.transform = `translate(-50%, -50%) scale(${inverse}, ${inverse})`;
    await delayProgress(frameDuration);
  }
}
function initializeHeroSubsectionCarousels() {
  initializeHeroSubsectionCarousel();
  initializeMobileHeroSubsectionCarousel();
  initializeHeroSubsectionCarouselNav();
}
function initializeHeroSubsectionCarousel() {
  $('.subsection-carousel-wrapper').slick({
    asNavFor: '.subsection-carousel-nav-wrapper',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    draggable: false,
    speed: 0,
    focusOnSelect: true,
  });
}
function initializeMobileHeroSubsectionCarousel() {
  $('.mobile-subsection-carousel-content-wrapper').slick({
    asNavFor: '.subsection-carousel-nav-wrapper',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    draggable: false,
    speed: 0,
    focusOnSelect: true,
  });
}
function initializeHeroSubsectionCarouselNav() {
  $('.subsection-carousel-nav-wrapper').slick({
    asNavFor:
      '.subsection-carousel-wrapper, .mobile-subsection-carousel-content-wrapper',
    slidesToShow: 0,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });
}
function initializePressQuoteCarousel() {
  $('#press-quote-carousel-section .press-quote-carousel').slick({
    appendArrows: '#press-quote-carousel-section .press-quote-nav',
    slidesToShow: 1,
    arrows: true,
    prevArrow:
      "<img class='press-quote-arrow arrow-left' src='https://sqy7rm.media.zestyio.com/Env-Home-Press-Carousel-Arrow-Left.svg' alt='Left Arrow' />",
    nextArrow:
      "<img class='press-quote-arrow arrow-right' src='https://sqy7rm.media.zestyio.com/Env-Home-Press-Carousel-Arrow-Right.svg' alt='Right Arrow' />",
    dots: false,
    draggable: false,
    fade: true,
    infinite: true,
    focusOnSelect: true,
    adaptiveHeight: true,
  });
}
function initializeHomepageHeroCarousel() {
  initializeEarlyRebrandSlideHandling();
  $('.homepage-hero-carousel').slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow:
      "<div class='mobile-hero-carousel-click-box click-box-left'><img class='hero-carousel-arrow arrow-left' src='https://sqy7rm.media.zestyio.com/Hp-Hero-Carousel-Arrow-Left-Purp.svg' alt='Left Arrow' /></div>",
    nextArrow:
      "<div class='mobile-hero-carousel-click-box click-box-right'><img class='hero-carousel-arrow arrow-right' src='https://sqy7rm.media.zestyio.com/Hp-Hero-Carousel-Arrow-Right-Purp.svg' alt='Right Arrow' /></div>",
    dots: true,
    draggable: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    responsive: [{ breakpoint: 1440, settings: { fade: false } }],
  });
}
function initializeEarlyRebrandSlideHandling() {
  const isEarlyRebrandActive = !!document.querySelector(
    '.carousel-slide.early-rebrand'
  );
  if (!isEarlyRebrandActive) return;
  const homepageHeroCarousel = document.querySelector(
    '.homepage-hero-carousel'
  );
  const isEarlyRebrandFirstSlide = document.querySelector(
    '.carousel-slide.early-rebrand:first-child'
  );
  if (isEarlyRebrandFirstSlide) {
    homepageHeroCarousel.classList.add('early-rebrand-slide-active');
  }
  $('.homepage-hero-carousel').on('afterChange', (slick, currentSlide) => {
    const isCurrentSlideEarlyRebrand = document.querySelector(
      '.carousel-slide.early-rebrand.slick-active'
    );
    isCurrentSlideEarlyRebrand
      ? homepageHeroCarousel.classList.add('early-rebrand-slide-active')
      : homepageHeroCarousel.classList.remove('early-rebrand-slide-active');
  });
}
function loadHomepageHeroCarousel() {
  if (
    typeof window.$ !== 'function' ||
    typeof window.$.fn.slick !== 'function' ||
    window.$('.homepage-hero-carousel').length === 0
  ) {
    const isCarouselInactive = !!document.querySelector('.envoy-hero-wrapper');
    if (isCarouselInactive) return;
    setTimeout(loadHomepageHeroCarousel, 10);
  } else {
    initializeHomepageHeroCarousel();
  }
}
if (window.location.pathname === '/') {
  loadHomepageHeroCarousel();
}
window.addEventListener('DOMContentLoaded', initializeEnvoyHomePage);
function initializeEnvoyInvestingPage() {
  if (
    !document.body.classList.contains('view-envoy_investing') &&
    !document.body.classList.contains('view-envoy_investing_paid_media')
  )
    return;
  $(document).ready(initializeCustomPortfolioCarousels);
  rotateTextAsUserScrolls(
    '#rotating-text-component-1 .rotating-headline',
    7646,
    2384
  );
  rotateTextAsUserScrolls(
    '#custom-portfolios-rotating .rotating-headline',
    7494,
    2331
  );
  if (document.body.classList.contains('view-envoy_investing_paid_media')) {
    replaceClosingSignUpCtaContent();
    replaceFloatingActionButtonCtaLinkAndCopy();
    replaceFloatingActionButtonCopyElements();
    displayFloatingActionButtonOnceUpdated();
  }
}
function initializeCustomPortfolioCarousels() {
  initializeCustomPortfolioCarousel();
  initializeCustomPortfolioCarouselNav();
}
function initializeCustomPortfolioCarousel() {
  $('.custom-portfolios-carousel .carousel-wrapper').slick({
    asNavFor: '.custom-portfolios-carousel .carousel-nav',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    draggable: false,
    speed: 750,
    fade: true,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: 'unslick' }],
  });
}
function initializeCustomPortfolioCarouselNav() {
  $('.custom-portfolios-carousel .carousel-nav').slick({
    asNavFor: '.custom-portfolios-carousel .carousel-wrapper',
    slidesToShow: 0,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: 'unslick' }],
  });
}
function replaceClosingSignUpCtaContent() {
  const ctaCopyOverride = closingSignUpCtaCopyOverride;
  const ctaLinksToOverride = closingSignUpCtaLinksToOverride;
  if (!ctaCopyOverride && !ctaLinksToOverride) return;
  const closingSignUpCtas = document.querySelectorAll(`
    .envoy-closing-sign-up .a5-cta
  `);
  closingSignUpCtas.forEach((cta) => {
    if (ctaCopyOverride) {
      cta.innerText = ctaCopyOverride;
    }
    if (ctaLinksToOverride) {
      cta.setAttribute('href', ctaLinksToOverride);
    }
  });
}
window.addEventListener('DOMContentLoaded', initializeEnvoyInvestingPage);
function initializeMocPage() {
  if (!document.body.classList.contains('view-mighty_oak_card')) return;
  const isSoldOut = !!document.querySelector('#moc.sold-out');
  if (isSoldOut) {
    handleMocSoldOutView();
    return;
  }
  replaceFloatingActionButtonCtaLinkAndCopy();
  replaceFloatingActionButtonCopyElements();
  replaceFloatingActionButtonIcon();
  displayFloatingActionButtonOnceUpdated();
  $(document).ready(initializeMocDigitalBankingCarousels);
  $(document).ready(initializeMocCardCarousel);
  $(document).ready(initializeMocPressQuoteModule);
  $(document).ready(initializeMocVideoCarousel);
  window.addEventListener('load', setUpMocTicker);
  $(document).ready(() => {
    addMocScrollRevealHandling(
      ['#image-left-content-right-component-1 .image-wrapper'],
      { origin: 'left', distance: '60px' }
    );
  });
  rotateTextAsUserScrolls(
    '.rotating-text-component .rotating-headline',
    9012,
    2803
  );
}
function handleMocSoldOutView() {
  const fabContainer = document.querySelector(
    '.sticky-action-button-container'
  );
  fabContainer && fabContainer.classList.add('sold-out-view');
  displayFloatingActionButtonOnceUpdated();
}
function initializeMocDigitalBankingCarousels() {
  initializeMocDigitalBankingCarousel();
  initializeMocDigitalBankingCarouselNav();
}
function initializeMocDigitalBankingCarousel() {
  $('.all-digital-banking .carousel-wrapper').slick({
    asNavFor: '.all-digital-banking .nav-carousel-wrapper',
    slidesToShow: 1,
    arrows: true,
    prevArrow:
      "<img class='digital-banking-arrow arrow-left' src='https://sqy7rm.media.zestyio.com/Digital-Banking-Left.svg' alt='Left Arrow' />",
    nextArrow:
      "<img class='digital-banking-arrow arrow-right' src='https://sqy7rm.media.zestyio.com/Digital-Banking-Right.svg' alt='Right Arrow' />",
    dots: false,
    draggable: false,
    infinite: true,
    speed: 0,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: { fade: true } }],
  });
}
function initializeMocDigitalBankingCarouselNav() {
  const bankingItemWrapper = document.querySelectorAll(
    '.banking-item-wrapper:not(.slick-cloned)'
  );
  $('.all-digital-banking .nav-carousel-wrapper').slick({
    asNavFor: '.all-digital-banking .carousel-wrapper',
    slidesToShow: bankingItemWrapper.length,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 767, settings: { slidesToShow: 1, fade: true } },
    ],
  });
}
function initializeMocCardCarousel() {
  $('#moc-card-carousel-module .card-carousel-wrapper').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    draggable: true,
    infinite: false,
    fade: true,
    speed: 750,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: { fade: true } }],
  });
}
function initializeMocPressQuoteModule() {
  $('#moc-press-quote-module .press-carousel-wrapper').slick({
    autoplay: true,
    speed: 750,
    slidesToShow: 2,
    arrows: true,
    prevArrow:
      "<img class='digital-banking-arrow arrow-left' src='https://sqy7rm.media.zestyio.com/Digital-Banking-Left.svg' alt='Left Arrow' />",
    nextArrow:
      "<img class='digital-banking-arrow arrow-right' src='https://sqy7rm.media.zestyio.com/Digital-Banking-Right.svg' alt='Right Arrow' />",
    dots: false,
    draggable: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: { slidesToShow: 1 } }],
  });
}
function initializeMocVideoCarousel() {
  $('#video-carousel-section').slick({
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    dots: true,
    draggable: true,
    infinite: true,
    fade: true,
    speed: 750,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: { fade: true } }],
  });
}
function setUpMocTicker() {
  renderMocTickerContent();
  initializeMocTicker();
}
function renderMocTickerContent() {
  const mocTicker = document.querySelector('#moc-ticker');
  const tickerContent = mocTicker && mocTicker.dataset.tickerContent;
  if (!tickerContent) return;
  const tickerItems = tickerContent.split(',');
  tickerItems.forEach((item) => {
    const itemCopy = item.trim();
    if (!itemCopy) return;
    mocTicker.innerHTML += `
      <li class="ticker-item">
        <span class="item-copy envoy-tagline solid-slate">${itemCopy}</span>
        <span class="item-separator">&#8226;</span>
      </li>
    `;
  });
}
function initializeMocTicker() {
  $('#moc-ticker').webTicker({ startEmpty: false, hoverpause: false });
}
function addMocScrollRevealHandling(selectorArray = [], options) {
  if (!selectorArray.length) return;
  const isDesktop = window.innerWidth >= 1025;
  const defaultOptions = {
    delay: isDesktop ? 450 : 300,
    distance: '20px',
    origin: 'bottom',
    easing: 'cubic-bezier(.645, .045, .355, 1)',
    viewOffset: { bottom: isDesktop ? 120 : 0 },
  };
  let selectors = '';
  selectorArray.forEach((selector, i) => {
    i === selectorArray.length - 1
      ? (selectors += selector)
      : (selectors += selector + ',');
  });
  ScrollReveal().reveal(selectors, { ...defaultOptions, ...options });
}
window.addEventListener('DOMContentLoaded', initializeMocPage);
function initializeEnvoyBankingPage() {
  if (
    !document.body.classList.contains('view-envoy_banking') &&
    !document.body.classList.contains('view-envoy_banking_paid_media')
  )
    return;
  $(document).ready(initializeDigitalBankingCarousels);
  rotateTextAsUserScrolls(
    '.rotating-text-component .rotating-headline',
    7646,
    2385
  );
  animateCrossedOutStrokeOnceInView();
}
function initializeDigitalBankingCarousels() {
  initializeDigitalBankingCarousel();
  initializeDigitalBankingCarouselNav();
}
function initializeDigitalBankingCarousel() {
  $('.all-digital-banking .carousel-wrapper').slick({
    asNavFor: '.all-digital-banking .nav-carousel-wrapper',
    slidesToShow: 1,
    arrows: true,
    prevArrow:
      "<img class='digital-banking-arrow arrow-left' src='https://sqy7rm.media.zestyio.com/Digital-Banking-Left.svg' alt='Left Arrow' />",
    nextArrow:
      "<img class='digital-banking-arrow arrow-right' src='https://sqy7rm.media.zestyio.com/Digital-Banking-Right.svg' alt='Right Arrow' />",
    dots: false,
    draggable: false,
    infinite: true,
    speed: 0,
    focusOnSelect: true,
    responsive: [{ breakpoint: 767, settings: { fade: true } }],
  });
}
function initializeDigitalBankingCarouselNav() {
  const bankingItemWrapper = document.querySelectorAll(
    '.banking-item-wrapper:not(.slick-cloned)'
  );
  $('.all-digital-banking .nav-carousel-wrapper').slick({
    asNavFor: '.all-digital-banking .carousel-wrapper',
    slidesToShow: bankingItemWrapper.length,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 767, settings: { slidesToShow: 1, fade: true } },
    ],
  });
}
function animateCrossedOutStrokeOnceInView() {
  const component = document.querySelector('.crossed-out-text-component');
  if (!component) return;
  const componentDistanceFromTop = component.offsetTop;
  const currentHeight = window.innerHeight;
  const offsetFromBottom = window.innerHeight * 0.4;
  const animateInPosition =
    componentDistanceFromTop - currentHeight + offsetFromBottom;
  window.addEventListener('scroll', () => {
    if (window.scrollY >= animateInPosition) {
      component.classList.add('component-in-view');
    }
  });
}
window.addEventListener('DOMContentLoaded', initializeEnvoyBankingPage);
function initializeChromeExtensionPage() {
  if (!document.body.classList.contains('view-chrome_extension_2024')) return;
  redirectUsersToChromeWebStoreIfNeeded();
}
function redirectUsersToChromeWebStoreIfNeeded() {
  if (!chromeExtensionWebStoreUrl) return;
  const isDesktop = window.innerWidth >= 1025;
  const isAndroid = navigator?.userAgent?.includes('android');
  if (isDesktop || (!isDesktop && isAndroid)) {
    window.location.href = chromeExtensionWebStoreUrl;
  } else {
    document.body.classList.add('user-not-redirected');
  }
}
window.addEventListener('DOMContentLoaded', initializeChromeExtensionPage);
function initializePricing2023Page() {
  if (!document.body.classList.contains('view-pricing_2023')) return;
  const throttledUpdateTierHeaderAndProductHeights = throttle(
    updateTierHeaderAndProductHeights,
    32
  );
  updateTierHeaderAndProductHeights();
  window.setTimeout(updateTierHeaderAndProductHeights, 100);
  window.addEventListener('load', updateTierHeaderAndProductHeights);
  window.addEventListener('resize', throttledUpdateTierHeaderAndProductHeights);
  setUpTierSelectorModule();
  addTierToggleHandling();
  addTierProductInfoIconHandling();
  addCloseInfoPopUpHandling();
  addTierCtaClickedEvents();
}
function updateTierHeaderAndProductHeights() {
  standardizeElementSetHeight('.tier-header');
  const finalTierProducts = document.querySelectorAll(
    '.tier:last-child .product-wrapper'
  );
  finalTierProducts.forEach((el, i) => {
    standardizeElementSetHeight(
      `.tier-products .product-wrapper:nth-child(${i + 1})`
    );
  });
}
function standardizeElementSetHeight(selector = '') {
  const tierHeaders = document.querySelectorAll(selector);
  let maximumHeight = 0;
  tierHeaders.forEach((header) => {
    header.style.minHeight = '';
    if (header.offsetHeight > maximumHeight) {
      maximumHeight = header.offsetHeight;
    }
  });
  if (maximumHeight) {
    tierHeaders.forEach((header) => {
      const isLastEl = !header.nextElementSibling;
      isLastEl
        ? (header.style.minHeight = `${maximumHeight - 24}px`)
        : (header.style.minHeight = `${maximumHeight}px`);
    });
  }
}
function setUpTierSelectorModule() {
  const isTierSelectorModuleActive = document.querySelector(
    '.tier-selector-container'
  );
  if (!isTierSelectorModuleActive) return;
  addTierSelectorOptionClickHandling();
  addTierSelectorCtaClickHandling();
  addTierSelectorResetSelectionsClickHandling();
  updateTierSelectorOptionSelectedState();
}
function addTierSelectorOptionClickHandling() {
  const tierSelectorOptions = document.querySelectorAll(
    '.tier-selector-container .selector-option'
  );
  tierSelectorOptions.forEach((option) => {
    option.addEventListener('click', () =>
      handleTierSelectorOptionClick(option)
    );
  });
}
function handleTierSelectorOptionClick(optionEl) {
  optionEl.classList.toggle('selected');
  updateTierSelectorOptionSelectedState();
  sendTierSelectorOptionSelectedEvent(optionEl);
}
function updateTierSelectorOptionSelectedState() {
  const tierSelector = document.querySelector('.tier-selector');
  if (!tierSelector) return;
  const isAtLeastOneOptionSelected = document.querySelector(
    '.tier-selector-container .selector-option.selected'
  );
  isAtLeastOneOptionSelected
    ? tierSelector.classList.remove('no-option-selected')
    : tierSelector.classList.add('no-option-selected');
}
function addTierSelectorCtaClickHandling() {
  const tierSelectorCta = document.querySelector(
    '.tier-selector-container .selector-cta'
  );
  if (!tierSelectorCta) return;
  tierSelectorCta.addEventListener('click', handleTierSelectorCtaClick);
}
function handleTierSelectorCtaClick() {
  const selectedOptions = document.querySelectorAll(
    '.tier-selector-container .selector-option.selected'
  );
  const tiersWrapper = document.querySelector('.tiers-wrapper');
  let tiers = [
    ...document.querySelectorAll('.tiers-wrapper-main-content .tier'),
  ].reverse();
  if (!tiers.length || !tiersWrapper) return;
  clearTierSelectorSelectedTier();
  for (let i = 0; i < tiers.length; i++) {
    const tier = tiers[i];
    const tierZuid = tier.dataset.tierZuid;
    let tierRequiredForSelectedOption = false;
    selectedOptions.forEach((option) => {
      const tierRequired = option.dataset.tierRequired;
      if (tierRequired === tierZuid) {
        tierRequiredForSelectedOption = true;
      }
    });
    if (tierRequiredForSelectedOption) {
      tier.classList.add('tier-selector-selected-tier');
      tiersWrapper.classList.add('tier-selector-tier-selected-state');
      handleTierToggleClick(tierZuid);
      scrollToElement(tiersWrapper);
      sendTierSelectorSubmitCtaClickedEvents(tier);
      break;
    }
  }
}
function addTierSelectorResetSelectionsClickHandling() {
  const resetSelections = document.querySelector(
    '.tier-selector-container .selector-reset-selections'
  );
  if (!resetSelections) return;
  resetSelections.addEventListener(
    'click',
    handleTierSelectorResetSelectionsClick
  );
}
function handleTierSelectorResetSelectionsClick() {
  const headlineAndSelectAllWrapper = document.querySelector(
    '.tier-selector-container .headline-and-select-all-wrapper'
  );
  const mostExpensiveTier = document.querySelector(
    '.tiers-wrapper-main-content .tier:last-child'
  );
  if (!headlineAndSelectAllWrapper || !mostExpensiveTier) return;
  sendResetSelectionsClickedEvent();
  const tierSelectorOptions = document.querySelectorAll(
    '.tier-selector-container .selector-option'
  );
  tierSelectorOptions.forEach((option) => {
    option.classList.remove('selected');
  });
  clearTierSelectorSelectedTier();
  scrollToElement(headlineAndSelectAllWrapper);
  handleTierToggleClick(mostExpensiveTier.dataset.tierZuid);
  updateTierSelectorOptionSelectedState();
}
function clearTierSelectorSelectedTier() {
  const tiersWrapper = document.querySelector('.tiers-wrapper');
  if (!tiersWrapper) return;
  const selectedTier = document.querySelector(
    '.tier.tier-selector-selected-tier'
  );
  if (selectedTier) {
    selectedTier.classList.remove('tier-selector-selected-tier');
  }
  tiersWrapper.classList.remove('tier-selector-tier-selected-state');
}
function addTierToggleHandling() {
  const tierToggles = document.querySelectorAll('.tier-toggle');
  tierToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => handleTierToggleClick(toggle));
  });
}
function handleTierToggleClick(toggleElOrTierZuid) {
  const toggleEl =
    typeof toggleElOrTierZuid === 'string'
      ? document.querySelector(
          `.tier-toggle[data-tier-zuid="${toggleElOrTierZuid}"]`
        )
      : toggleElOrTierZuid;
  const relevantTierZuid = toggleEl && toggleEl.dataset.tierZuid;
  if (!relevantTierZuid) return;
  const currentActiveItems = document.querySelectorAll(`
    .tier-toggle.tier-toggle-active-item,
    .tier.tier-toggle-active-item
  `);
  currentActiveItems.forEach((item) => {
    item.classList.remove('tier-toggle-active-item');
  });
  const newActiveItems = [
    toggleEl,
    document.querySelector(`.tier[data-tier-zuid="${relevantTierZuid}"]`),
  ];
  newActiveItems.forEach((item) => {
    item.classList.add('tier-toggle-active-item');
  });
}
function addTierProductInfoIconHandling() {
  const productInfoIcons = document.querySelectorAll('.info-icon');
  productInfoIcons.forEach((infoIcon) => {
    infoIcon.addEventListener('click', () =>
      handleTierProductInfoIconClick(infoIcon)
    );
  });
}
function handleTierProductInfoIconClick(infoIconEl) {
  const relatedProduct = infoIconEl.closest('.product-wrapper');
  if (!relatedProduct) return;
  const popUpContainer = relatedProduct.querySelector('.info-pop-up-container');
  const popUpCarousel = relatedProduct.querySelector(
    '.info-pop-up .carousel-wrapper'
  );
  if (!popUpContainer || !popUpCarousel) return;
  const selectedPopUpIsAlreadyVisible =
    popUpContainer.classList.contains('visible');
  if (selectedPopUpIsAlreadyVisible) return;
  const otherVisiblePopUp = document.querySelector(
    '.info-pop-up-container.visible'
  );
  if (otherVisiblePopUp) {
    otherVisiblePopUp.classList.remove('visible');
  }
  popUpContainer.classList.add('visible');
  forceRedraw();
  if (window.innerWidth <= 1024) {
    headerNavMobile && headerNavMobile.classList.remove('scroll-up');
    headerNavMobile && headerNavMobile.classList.remove('scroll-up-transition');
    document.body.classList.remove('scroll-up-transition');
    headerNavMobile &&
      headerNavMobile.classList.remove('scroll-up-no-transition');
  }
  if (!popUpCarousel.classList.contains('slick-initialized')) {
    $(popUpCarousel).slick({
      adaptiveHeight: false,
      autoplay: true,
      arrows: true,
      prevArrow:
        '<div class="arrow-wrapper arrow-left"><img class="stone-arrow arrows" src="https://sqy7rm.media.zestyio.com/Pricing-2023-Arrow-Stone-Left.svg" /><img class="stone-light-arrow arrows" src="https://sqy7rm.media.zestyio.com/Pricing-2023-Arrow-Stone-Light-Left.svg" /></div>',
      nextArrow:
        '<div class="arrow-wrapper arrow-right"><img class="stone-arrow arrows" src="https://sqy7rm.media.zestyio.com/Pricing-2023-Arrow-Stone-Right.svg" /><img class="stone-light-arrow arrows" src="https://sqy7rm.media.zestyio.com/Pricing-2023-Arrow-Stone-Light-Right.svg" /></div>',
      dots: true,
      draggable: true,
      infinite: true,
      slidesToShow: 1,
    });
  }
}
function addCloseInfoPopUpHandling() {
  window.addEventListener('mousedown', (e) => {
    const visiblePopUp = document.querySelector(
      '.info-pop-up-container.visible'
    );
    if (!visiblePopUp) return;
    const infoIconClicked = !!e.target.closest('.info-icon');
    const closeButtonClicked = !!e.target.closest('.close-button-wrapper');
    const clickIsOutsidePopUp = !e.target.closest('.info-pop-up');
    if (!infoIconClicked && (clickIsOutsidePopUp || closeButtonClicked)) {
      visiblePopUp.classList.remove('visible');
    }
  });
}
function sendTierSelectorOptionSelectedEvent(optionEl) {
  if (!optionEl) return;
  const isOptionSelected = optionEl.classList.contains('selected');
  const optionLabel = optionEl.dataset.optionCopy;
  if (!isOptionSelected || !optionLabel) return;
  sendGAEvent({
    eventCategory: 'Click',
    eventAction: 'Pricing Page Selector Option Selected',
    eventLabel: optionLabel,
  });
}
function sendResetSelectionsClickedEvent() {
  const isNoOptionSelected = document.querySelector(
    '.tier-selector.no-option-selected'
  );
  if (isNoOptionSelected) return;
  sendGAEvent({
    eventCategory: 'Click',
    eventAction: 'Pricing Page Reset Selections Click',
  });
}
function sendTierSelectorSubmitCtaClickedEvents(selectedTier) {
  if (!selectedTier) return;
  const selectedTierTitle = selectedTier.dataset.tierTitle || '';
  sendGAEvent({
    eventCategory: 'Click',
    eventAction: 'Pricing Page Selector Submit CTA Click',
    eventLabel: selectedTierTitle,
  });
  sendTierSelectOptionSubmittedEvents();
}
function sendTierSelectOptionSubmittedEvents() {
  const selectedOptions = document.querySelectorAll(
    '.selector-option.selected'
  );
  selectedOptions.forEach((option) => {
    const optionLabel = option.dataset.optionCopy;
    if (!optionLabel) return;
    sendGAEvent({
      eventCategory: 'Click',
      eventAction: 'Pricing Page Selector Option Submitted',
      eventLabel: optionLabel,
    });
  });
}
function addTierCtaClickedEvents() {
  const tierCtas = document.querySelectorAll('#pricing-2023 .tier .tier-cta');
  tierCtas.forEach((cta) => {
    const associatedTier = cta.closest('.tier');
    if (!associatedTier) return;
    const tierTitle = associatedTier.dataset.tierTitle;
    if (!tierTitle) return;
    cta.addEventListener('click', () => {
      sendGAEvent({
        eventCategory: 'Click',
        eventAction: 'Pricing Page Tier CTA Click',
        eventLabel: tierTitle,
      });
    });
  });
}
window.addEventListener('DOMContentLoaded', initializePricing2023Page);
function initializeLearnHubComponents() {
  if (
    !document.body.classList.contains('view-learn_hub_articles') &&
    !document.body.classList.contains('view-learn_hub_article_standalone') &&
    !document.body.classList.contains(
      'view-learn_hub_compound_interest_calculator_paid_media'
    )
  )
    return;
  addTocs();
  injectPullQuotes();
  window.addEventListener('load', setUpProgressBar);
  if (
    document.body.classList.contains(
      'view-learn_hub_articles' ||
        document.body.classList.contains(
          'view-learn_hub_compound_interest_calculator_paid_media'
        )
    )
  ) {
    replaceFloatingActionButtonCtaLinkAndCopy();
    replaceFloatingActionButtonCopyElements();
    displayFloatingActionButtonOnceUpdated();
  }
  if (document.body.classList.contains('view-learn_hub_articles')) {
    injectLearnHubQuiz();
    injectLearnHubCtas();
  }
}
let learnHubArticleSubheadlineBreakpoints = [];
let learnHubArticleActiveTocItem = null;
function addTocs() {
  const tableOfContentsWrapper = document.querySelector(
    '.table-of-contents-wrapper'
  );
  const articleSubheadlines = [
    ...document.querySelectorAll('.article-main-content-wrapper > h2'),
  ];
  if (!tableOfContentsWrapper || !articleSubheadlines.length) return;
  const tocsBodyHtml = prepareTocsBodyHtml(articleSubheadlines);
  const tocsHtml = `
    <div class="table-of-contents">
      <h4 class="table-of-contents-headline envoy-tagline solid-slate">
        Table of Contents
      </h4>
      <div class="table-of-contents-body">
        ${tocsBodyHtml}
      </div>
    </div>
  `;
  tableOfContentsWrapper.insertAdjacentHTML('beforeend', tocsHtml);
  setUpTocs(articleSubheadlines);
  tableOfContentsWrapper.removeAttribute('hidden');
}
function prepareTocsBodyHtml(subheadlines = []) {
  if (!subheadlines.length) return;
  let bodyHtml = '';
  subheadlines.forEach((subheadline) => {
    const copy = subheadline.innerText;
    bodyHtml += `
      <div class="tocs-item-wrapper solid-slate">
        <div class="bullet-point">•</div>
        <div class="tocs-item-title">
          ${copy}
        </div>
      </div>
    `;
  });
  return bodyHtml;
}
function setUpTocs(subheadlines = []) {
  const tocsItems = [...document.querySelectorAll('.tocs-item-wrapper')];
  if (!subheadlines || !tocsItems.length) return;
  setUpTocsClickHandling(subheadlines, tocsItems);
  setUpTocsScrollHandling(subheadlines, tocsItems);
}
function setUpTocsClickHandling(subheadlines, tocsItems) {
  if (
    !subheadlines.length ||
    !tocsItems.length ||
    subheadlines.length !== tocsItems.length
  )
    return;
  tocsItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      scrollToElement(subheadlines[i]);
    });
  });
}
function setUpTocsScrollHandling(subheadlines, tocsItems) {
  setlearnHubArticleSubheadlineBreakpoints(subheadlines);
  checkScrollPositionForTocs(subheadlines, tocsItems);
  window.addEventListener('load', () =>
    setlearnHubArticleSubheadlineBreakpoints(subheadlines)
  );
  window.addEventListener('load', () =>
    checkScrollPositionForTocs(subheadlines, tocsItems)
  );
  window.addEventListener('scroll', () =>
    checkScrollPositionForTocs(subheadlines, tocsItems)
  );
  window.addEventListener('resize', () =>
    setlearnHubArticleSubheadlineBreakpoints(subheadlines)
  );
}
function setlearnHubArticleSubheadlineBreakpoints(subheadlines = []) {
  if (typeof learnHubArticleSubheadlineBreakpoints === 'undefined') return;
  learnHubArticleSubheadlineBreakpoints = subheadlines.map((subheadline) => {
    return (
      window.scrollY +
      subheadline.getBoundingClientRect().top -
      window.innerHeight / 2
    );
  });
}
function checkScrollPositionForTocs(subheadlines, tocsItems) {
  if (
    typeof learnHubArticleSubheadlineBreakpoints === 'undefined' ||
    typeof learnHubArticleActiveTocItem === 'undefined'
  )
    return;
  let activeItem = determineActiveItem();
  if (activeItem !== learnHubArticleActiveTocItem) {
    removeActiveClassFromTocs(tocsItems);
    learnHubArticleActiveTocItem = activeItem;
    if (activeItem !== -1) {
      tocsItems[activeItem].classList.add('active');
    }
  }
}
function determineActiveItem() {
  return learnHubArticleSubheadlineBreakpoints.findIndex((breakpoint, i) => {
    let nextBreakpoint =
      i === learnHubArticleSubheadlineBreakpoints.length - 1
        ? 99999
        : learnHubArticleSubheadlineBreakpoints[i + 1];
    return (
      window.scrollY > breakpoint && window.scrollY <= nextBreakpoint
    );
  });
}
function removeActiveClassFromTocs(tocsItems = []) {
  tocsItems.forEach((item) => item.classList.remove('active'));
}
let learnHubArticleProgressStartPosition = 0;
let learnHubArticleProgressEndPosition = 9999;
function setUpProgressBar() {
  updateProgressBarVars();
  updateProgressBarWidth();
  const throttledUpdateProgressBarVars = throttle(updateProgressBarVars, 100);
  const throttledUpdateProgressBarWidth = throttle(updateProgressBarWidth, 16);
  window.addEventListener('resize', throttledUpdateProgressBarVars);
  window.addEventListener('scroll', throttledUpdateProgressBarWidth);
}
function updateProgressBarVars() {
  const articleMainContent = document.querySelector(
    '.article-main-content-container'
  );
  const headerNavDesktop = document.querySelector('#header-nav-desktop');
  const headerNavMobile = document.querySelector('#header-nav-mobile');
  if (
    !articleMainContent ||
    !headerNavDesktop ||
    !headerNavMobile ||
    !learnHubArticleProgressEndPosition
  )
    return;
  const headerHeight =
    window.innerWidth >= 1025
      ? headerNavDesktop.offsetHeight
      : headerNavMobile.offsetHeight;
  const distanceToBottomOfArticle =
    articleMainContent.offsetHeight + articleMainContent.offsetTop;
  learnHubArticleProgressEndPosition = distanceToBottomOfArticle - headerHeight;
}
function updateProgressBarWidth() {
  const progressBar = document.querySelector('.progress-bar');
  if (
    !progressBar ||
    !learnHubArticleProgressEndPosition ||
    typeof learnHubArticleProgressStartPosition === 'undefined'
  )
    return;
  let currentScroll = window.scrollY;
  let progressMade = currentScroll / learnHubArticleProgressEndPosition;
  if (currentScroll < learnHubArticleProgressStartPosition) {
    progressMade = 0;
  } else if (currentScroll >= learnHubArticleProgressEndPosition) {
    progressMade = 1;
  }
  progressBar.style.width = `${progressMade * 100}%`;
}
function addLearnHubSearchInputFocusHandling() {
  if (window.innerWidth >= 768) return;
  const searchInput = document.querySelectorAll(
    '.learn-hub-search-form-wrapper .search-input'
  );
  searchInput.forEach((input) => {
    input.addEventListener('focus', () => {
      const stickyActionButton = document.querySelector(
        '.sticky-action-button-container'
      );
      stickyActionButton.style.display = 'none';
    });
    input.addEventListener('focusout', () => {
      const stickyActionButton = document.querySelector(
        '.sticky-action-button-container'
      );
      stickyActionButton.style.display = 'block';
    });
  });
}
function injectPullQuotes() {
  const pullQuotes = document.querySelectorAll('.pull-quote');
  pullQuotes.forEach((quote) => preparePullQuote(quote));
}
function preparePullQuote(quote) {
  if (!quote) return;
  const quoteCopy = quote.dataset.quoteCopy;
  const quoteAuthor = quote.dataset.quoteAuthor;
  const isQuoteFromTwitter = quote.dataset.isQuoteFromTwitter;
  if (!quoteCopy) return;
  const quoteAuthorHtml =
    quoteAuthor &&
    `
    <div class="pull-quote-author solid-slate">
      - ${quoteAuthor}
    </div>
  `;
  const twitterLogoHtml =
    isQuoteFromTwitter === 'true'
      ? `
    <div class="twitter-logo-wrapper">
      <img class="twitter-logo" alt="Twitter Logo" src="https://sqy7rm.media.zestyio.com/Twitter-Logo.svg" />
    </div>
  `
      : '';
  quote.innerHTML += `
    <div class="pull-quote-wrapper">
      <div class="pull-quote-copy solid-slate">
        ${quoteCopy}
      </div>
      ${quoteAuthorHtml}
      ${twitterLogoHtml}
    </div>
  `;
}
function injectLearnHubQuiz() {
  const investingGoalsQuiz = document.querySelector(
    '.investing-goals-quiz-container'
  );
  const injectionPoint =
    learnHubArticleId === 'money-matters-2024'
      ? ['#place-investing-quiz-before-this', 'beforebegin']
      : ['.article-main-content-wrapper h2:first-of-type', 'beforebegin'];
  const injectionPointEl = document.querySelector(injectionPoint[0]);
  const shouldInjectQuiz = !learnHubRemoveInArticleCtasAndInvestingQuiz;
  if (!investingGoalsQuiz || !injectionPointEl || !shouldInjectQuiz) return;
  injectionPointEl.insertAdjacentElement(injectionPoint[1], investingGoalsQuiz);
  investingGoalsQuiz.removeAttribute('hidden');
  addInvestingQuizOptionToggleHandling();
  addInvestingQuizOptionCtaClickHandling();
}
function addInvestingQuizOptionToggleHandling() {
  const quizOptions = document.querySelectorAll('.quiz-option');
  quizOptions.forEach((option) => {
    const optionToggle = option.querySelector('.option-toggle');
    if (!optionToggle) return;
    optionToggle.addEventListener('click', () => {
      quizOptions.forEach((option) => option.classList.remove('active-option'));
      option.classList.add('active-option');
      sendAnalyticsEventForInvestingQuizOption(option);
    });
  });
}
function sendAnalyticsEventForInvestingQuizOption(optionEl) {
  if (!optionEl) return;
  const optionId = optionEl.dataset.itemId;
  if (!optionId) return;
  sendGAEvent({
    eventCategory: 'Click',
    eventAction: 'Investing Goals Quiz Tab Click',
    eventLabel: optionId,
  });
}
function addInvestingQuizOptionCtaClickHandling() {
  const quizOptions = document.querySelectorAll('.quiz-option');
  quizOptions.forEach((option) => {
    const cta = option.querySelector('.option-cta');
    const optionId = option.dataset.itemId;
    if (!cta || !optionId) return;
    cta.addEventListener('click', () => {
      sendGAEvent({
        eventCategory: 'Click',
        eventAction: 'Investing Goals Quiz CTA Click',
        eventLabel: optionId,
      });
    });
  });
}
function injectLearnHubCtas() {
  const shouldInjectCtas =
    !learnHubRemoveInArticleCtasAndInvestingQuiz &&
    learnHubArticleId !== 'money-matters-2024';
  if (!shouldInjectCtas) return;
  const headlineCopy = learnHubInjectedCtasHeadlineCopy;
  const ctaCopy = learnHubInjectedCtasCtaCopy;
  const ctaLinksTo = learnHubInjectedCtasCtaLinksTo;
  if (!headlineCopy || !ctaCopy || !ctaLinksTo) return;
  const learnHubCtaHtml = `
    <div class="injected-learn-hub-cta">
      <h3 class="injected-cta-headline solid-slate">
        ${headlineCopy}
      </h3>
      <a class="injected-cta-cta a5-cta" href="${ctaLinksTo}">
        ${ctaCopy}
      </a>
    </div>
  `;
  const injectionPoints = [['.article-main-content-wrapper', 'beforeend']];
  injectionPoints.forEach((point) => {
    const pointEl = document.querySelector(point[0]);
    if (!pointEl) return;
    pointEl.insertAdjacentHTML(point[1], learnHubCtaHtml);
  });
}
window.addEventListener('DOMContentLoaded', initializeLearnHubComponents);
window.addEventListener(
  'DOMContentLoaded',
  addLearnHubSearchInputFocusHandling
);
function initializeLearnHubLandingPage() {
  if (!document.body.classList.contains('view-learn_hub_landing')) return;
  addCategoryTogglesClickHandling();
}
function addCategoryTogglesClickHandling() {
  const topicsCategories = document.querySelector('.topics-categories');
  const categoryToggles = document.querySelectorAll('.category-toggle');
  const categoryWrappers = document.querySelectorAll('.category-wrapper');
  topicsCategories.addEventListener('click', (e) => {
    const selectedCategoryToggle =
      e && e.target && e.target.closest('.category-toggle');
    if (!selectedCategoryToggle) return;
    const selectedSlug = selectedCategoryToggle.dataset.category;
    categoryToggles.forEach((toggle) => {
      toggle.dataset.category === selectedSlug
        ? (toggle.dataset.isActive = 'true')
        : (toggle.dataset.isActive = 'false');
    });
    categoryWrappers.forEach((category) => {
      category.dataset.category === selectedSlug
        ? (category.style.display = 'block')
        : (category.style.display = 'none');
    });
  });
}
window.addEventListener('DOMContentLoaded', initializeLearnHubLandingPage);
function initializeCelebrateChevronPage() {
  if (!document.body.classList.contains('view-celebrate_chevron')) return;
  replaceFloatingActionButtonCtaLinkAndCopy();
  replaceFloatingActionButtonCopyElements();
  displayFloatingActionButtonOnceUpdated();
}
window.addEventListener('DOMContentLoaded', initializeCelebrateChevronPage);
function initializeReferralsPage() {
  if (!document.body.classList.contains('view-referrals_page')) return;
  const referralCode = parseShareableCodeFromQueryParams();
  const shouldDisplayReferralCodeInput = !referralCode;
  if (shouldDisplayReferralCodeInput) {
    showReferralCodeInput();
    addReferralCodeInputHandling();
    addReferralPageCtasClickHandling();
  }
  initializeFloatingActionButtonCtasToHeroCta();
  updateReferralPageCtasWithReferralCode(referralCode);
  window.addEventListener('load', () =>
    updateReferralPageCtasWithReferralCode(referralCode)
  );
  replaceFloatingActionButtonCtaLinkAndCopy();
  displayFloatingActionButtonOnceUpdated();
  rotateTextAsUserScrolls(
    '.rotating-text-component .rotating-headline',
    8757,
    2745
  );
}
function parseShareableCodeFromQueryParams() {
  const search = window.location.search;
  if (!search) return;
  const searchParams = new URLSearchParams(search);
  const shareableCode = searchParams.get('shareable_code');
  if (shareableCode) {
    return shareableCode;
  }
}
function showReferralCodeInput() {
  const referralCodeInputForm = document.querySelector('.code-input-form');
  if (!referralCodeInputForm) return;
  referralCodeInputForm.classList.add('input-form-visible');
}
function initializeFloatingActionButtonCtasToHeroCta() {
  const heroCta = document.querySelector('.hero-cta');
  const stickyActionCtas = document.querySelectorAll('.sticky-action-cta');
  if (!heroCta) return;
  stickyActionCtas.forEach((cta) => {
    cta.href = heroCta.href;
  });
}
function updateReferralPageCtasWithReferralCode(referralCode) {
  const ctasToUpdate = document.querySelectorAll(`
    .hero-cta,
    .value-prop-cta,
    .sticky-action-cta
  `);
  ctasToUpdate.forEach((cta) => {
    if (!cta.href) return;
    const ctaUrl = new URL(cta.href);
    const ctaParams = ctaUrl.searchParams;
    ctaParams.set('s1', 'Referrals');
    const paramsToUpdate = ['referral_code', 'code', 'shareable_code'];
    paramsToUpdate.forEach((param) => {
      referralCode
        ? ctaParams.set(param, referralCode)
        : ctaParams.delete(param);
    });
    const modifiedUrl = ctaUrl.toString();
    cta.href = modifiedUrl;
  });
}
function addReferralCodeInputHandling() {
  const referralCodeInput = document.querySelector('.referral-code-input');
  if (!referralCodeInput) return;
  referralCodeInput.addEventListener('input', (e) => {
    const value = encodeHTMLEntities(e.target.value.trim());
    updateReferralPageCtasWithReferralCode(value);
    if (value) {
      setReferralsPageErrorState(null, true);
    }
  });
}
function addReferralPageCtasClickHandling() {
  const ctasToUpdate = document.querySelectorAll(`
    .hero-cta,
    .value-prop-cta,
    .sticky-action-cta
  `);
  ctasToUpdate.forEach((cta) =>
    cta.addEventListener('click', (e) => {
      const href = e.target.href;
      if (!href) return;
      const url = new URL(href);
      const referralCode = url.searchParams.get('referral_code');
      const isMissingReferralCode = !referralCode;
      const isReferralCodeInvalid = !isReferralCodeValid(referralCode);
      if (isMissingReferralCode || isReferralCodeInvalid) {
        e.preventDefault();
        scrollUserToReferralsPageHero();
        if (isMissingReferralCode) {
          setReferralsPageErrorState('no-referral-code-error-active');
        } else if (isReferralCodeInvalid) {
          setReferralsPageErrorState('invalid-referral-code-error-active');
        }
      }
    })
  );
}
function scrollUserToReferralsPageHero() {
  const targetEl = document.querySelector('.hero-headline');
  if (!targetEl) return;
  scrollToElement(targetEl);
}
function isReferralCodeValid(referralCode) {
  if (!referralCode) return false;
  const validLength = 7;
  const disallowedCharacters = ['i', 'o', 'I', 'O', '0'];
  const isValidLength = referralCode.length === validLength;
  const isOnlyAlphaNumeric = /^[a-zA-Z0-9]*$/.test(referralCode);
  const doesNotIncludeDisallowedCharacters = !disallowedCharacters.some(
    (char) => referralCode.includes(char)
  );
  return (
    isValidLength && isOnlyAlphaNumeric && doesNotIncludeDisallowedCharacters
  );
}
function setReferralsPageErrorState(error, clearError = false) {
  const codeInputForm = document.querySelector('.code-input-form');
  if (!codeInputForm) return;
  const possibleErrors = [
    'no-referral-code-error-active',
    'invalid-referral-code-error-active',
  ];
  codeInputForm.classList.remove(...possibleErrors);
  if (clearError) {
    codeInputForm.classList.remove('error-active');
  } else if (error) {
    codeInputForm.classList.add('error-active');
    codeInputForm.classList.add(error);
  }
}
window.addEventListener('DOMContentLoaded', initializeReferralsPage);
function initializeAboutPage() {
  if (!document.body.classList.contains('view-about')) return;
  addAboutInteractionHandling();
  const groupingsOfItemsSelectors = [
    '.executive-suite .employee',
    '.brand-logo',
    '.non-board-member-or-brand-logo',
    '.board-members',
  ];
  if (window.innerWidth > 804) {
    groupingsOfItemsSelectors.forEach((group) =>
      preventAboutRowsFromHavingOnlyOneItem(group)
    );
  }
}
function addAboutInteractionHandling() {
  $('.has-bio .square').click(function () {
    $(this).parent().find('.overlay').fadeIn();
  });
  $('.has-bio .close').click(function (e) {
    $('.overlay').fadeOut();
  });
  $('.bio-modal').click(function (e) {
    if (!$(e.target).closest('.content-container').length) {
      $('.overlay').fadeOut();
    }
  });
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('.overlay').fadeOut();
    }
  });
}
function preventAboutRowsFromHavingOnlyOneItem(selectorString) {
  const items = document.querySelectorAll(selectorString);
  if (!items || items.length === 1) return;
  const ignoreLoneItemHandling =
    window.innerWidth > 1025 && selectorString.includes('executive-suite');
  if (ignoreLoneItemHandling) return;
  const itemsPerRow = 4;
  const doesRowHaveLoneItemAtEnd = items.length % itemsPerRow === 1;
  if (doesRowHaveLoneItemAtEnd) {
    items[items.length - 2].style.marginLeft = '40px';
    items[items.length - 1].style.marginRight = '40px';
  }
}
window.addEventListener('DOMContentLoaded', initializeAboutPage);
function initializeAffiliateLandingPages2023() {
  if (
    !document.body.classList.contains(
      'view-affiliate_landing_pages_1673507752693'
    )
  )
    return;
  if (heroCtaLinksTo) {
    floatingActionButtonCtaLinksToOverride = heroCtaLinksTo;
    floatingActionButtonCtaCopyOverride = floatingActionButtonCtaCopyOverride
      ? floatingActionButtonCtaCopyOverride
      : affiliate2023DefaultFABCtaCopyOverride;
    replaceFloatingActionButtonCtaLinkAndCopy();
  }
  floatingActionButtonSubtitleOverride = floatingActionButtonSubtextOverride
    ? floatingActionButtonSubtextOverride
    : affiliate2023DefaultFABSubtextOverride;
  replaceFloatingActionButtonCopyElements();
  displayFloatingActionButtonOnceUpdated();
  triggerRecurringInvestmentCarouselIfNeeded();
  initializeHeroEmailInputHandling();
  addSecondaryHeroCtaClickHandling();
}
function triggerRecurringInvestmentCarouselIfNeeded() {
  const recurringCarousel = document.querySelector(
    '.recurring-carousel-content-wrapper .carousel-container'
  );
  if (!recurringCarousel) return;
  $('.recurring-carousel-content-wrapper .carousel-container').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow:
      "<img class='recurring-carousel-arrow arrow-left' src='https://sqy7rm.media.zestyio.com/Affiliate-Recurring-Carousel-Left.svg' alt='Left Arrow' />",
    nextArrow:
      "<img class='recurring-carousel-arrow arrow-right' src='https://sqy7rm.media.zestyio.com/Affiliate-Recurring-Carousel-Right.svg' alt='Right Arrow' />",
    dots: true,
    draggable: true,
    infinite: false,
    speed: 750,
    focusOnSelect: true,
    adaptiveHeight: true,
  });
}
function addSecondaryHeroCtaClickHandling() {
  const secondaryHeroCta = document.querySelector('.hero-secondary-cta');
  if (!secondaryHeroCta) return;
  secondaryHeroCta.addEventListener('click', () => {
    const targetEl = document.querySelector(
      '.affiliate-2023-compound-interest-calculator'
    );
    if (!targetEl) return;
    scrollToElement(targetEl, undefined, 0);
  });
}
function initializeHeroEmailInputHandling() {
  const emailInput = document.querySelector('.hero-email-input');
  if (!emailInput) return;
  emailInput.addEventListener('input', (e) => handleHeroEmailInput(e));
}
function handleHeroEmailInput(e) {
  if (!e) return;
  const value = e.target.value;
  const isValidEmail = value && validateEmail(value);
  const ctasShouldBeValid = !value || isValidEmail;
  const pageCtas = document.querySelectorAll(`
    .hero-cta:not(.hero-secondary-cta),
    .body-top-cta,
    .body-bottom-cta,
    .sticky-action-cta
  `);
  updateEmailInputPageCtaValidity(pageCtas, ctasShouldBeValid);
  updatePageCtaEmailParams(pageCtas, value);
}
function updateEmailInputPageCtaValidity(pageCtas, isValid) {
  pageCtas.forEach((cta) => {
    if (isValid) {
      cta.removeEventListener('click', handleCtaIsInvalidDueToInvalidEmail);
      cta.classList.remove('invalid-due-to-invalid-email');
      showOrHideEmailInputError(false);
    } else {
      cta.addEventListener('click', handleCtaIsInvalidDueToInvalidEmail);
      cta.classList.add('invalid-due-to-invalid-email');
    }
  });
}
function handleCtaIsInvalidDueToInvalidEmail(e) {
  e.preventDefault();
  e.stopPropagation();
  const scrollTarget = document.querySelector('.hero-headline');
  scrollToElement(scrollTarget);
  showOrHideEmailInputError(true);
}
function showOrHideEmailInputError(shouldShow) {
  const emailInputWrapper = document.querySelector('.hero-email-input-wrapper');
  if (!emailInputWrapper) return;
  shouldShow
    ? emailInputWrapper.classList.add('error-active')
    : emailInputWrapper.classList.remove('error-active');
}
function updatePageCtaEmailParams(pageCtas, email = '') {
  const encodedEmail = encodeURIComponent(email);
  pageCtas.forEach((cta) => {
    if (email) {
      const href = cta.href;
      const newHref = href.includes('email=')
        ? href.replace(/email=[^&]*/, `email=${encodedEmail}`)
        : `${href}${href.includes('?') ? '&' : '?'}email=${encodedEmail}`;
      cta.href = newHref;
    } else {
      cta.href = cta.href.replace(/&?email=[^&]*/, '');
    }
  });
}
window.addEventListener(
  'DOMContentLoaded',
  initializeAffiliateLandingPages2023
);
function initializeBrandMarketingLandingPages() {
  if (!document.body.classList.contains('view-brand_marketing_landing_page'))
    return;
  if (pageCtasLinkTo) {
    floatingActionButtonCtaLinksToOverride = pageCtasLinkTo;
    replaceFloatingActionButtonCtaLinkAndCopy();
  }
  if (floatingActionButtonSubtextOverride) {
    floatingActionButtonSubtitleOverride = floatingActionButtonSubtextOverride;
    replaceFloatingActionButtonCopyElements();
  }
  displayFloatingActionButtonOnceUpdated();
  initializeBrandMarketingRotatingTextComponent();
  initializeGuessTheChangeFormIfNeeded();
}
function initializeBrandMarketingRotatingTextComponent() {
  const selector = '.rotating-text-component .rotating-headline';
  const componentHeadline = document.querySelector(selector);
  if (!componentHeadline) return;
  const isGetStarted = componentHeadline.textContent.includes('Get started');
  const widthDesktop = isGetStarted ? 7430 : 8757;
  const widthMobile = isGetStarted ? 2298 : 2744;
  rotateTextAsUserScrolls(selector, widthDesktop, widthMobile);
}
function initializeGuessTheChangeFormIfNeeded() {
  const isGuessTheChangeActive = !!document.querySelector(
    '.guess-change-active'
  );
  if (!isGuessTheChangeActive) return;
  addGuessTheChangeCheckboxToggleHandling();
  addGuessTheChangeTextInputHandling();
  addGuessTheChangeSubmitCtaHandling();
}
function addGuessTheChangeCheckboxToggleHandling() {
  const checkboxes = document.querySelectorAll(
    '.guess-change-checkbox-wrapper'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('inactive');
      updateGuessTheChangeFormValidity();
    });
  });
}
function addGuessTheChangeTextInputHandling() {
  const textInputs = document.querySelectorAll('.guess-change-required-input');
  textInputs.forEach((input) => {
    input.addEventListener('input', () => {
      updateGuessTheChangeFormValidity();
    });
  });
}
function isNumberOrDecimalKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}
function updateGuessTheChangeFormValidity() {
  const guessTheChangeForm = document.querySelector('.guess-change-form');
  if (!guessTheChangeForm) return;
  const isFormValid = !updateGuessTheChangeFormFieldsInvalidity();
  isFormValid
    ? guessTheChangeForm.classList.remove('form-invalid')
    : guessTheChangeForm.classList.add('form-invalid');
}
function updateGuessTheChangeFormFieldsInvalidity() {
  let isFormInvalid = false;
  const requiredTextInputs = document.querySelectorAll(
    '.guess-change-required-input'
  );
  requiredTextInputs.forEach((input) => {
    const inputContainer = input.closest('.guess-change-input-container');
    if (!inputContainer) return;
    if (!input.value) {
      isFormInvalid = true;
      inputContainer.classList.add('error-missing-value');
    } else {
      inputContainer.classList.remove('error-missing-value');
    }
  });
  const requiredCheckboxes = document.querySelectorAll(
    '.guess-change-checkbox-wrapper'
  );
  requiredCheckboxes.forEach((checkbox) => {
    const inputContainer = checkbox.closest('.guess-change-input-container');
    if (!inputContainer) return;
    if (checkbox.classList.contains('inactive')) {
      isFormInvalid = true;
      inputContainer.classList.add('error-missing-value');
    } else {
      inputContainer.classList.remove('error-missing-value');
    }
  });
  const emailInput = document.querySelector(
    '.guess-change-email .guess-change-text-input'
  );
  if (emailInput && emailInput.value) {
    const inputContainer = emailInput.closest('.guess-change-input-container');
    if (!inputContainer) return;
    const isEmailValid = validateEmail(emailInput.value);
    if (!isEmailValid) {
      isFormInvalid = true;
      inputContainer.classList.add('error-invalid-value');
    } else {
      inputContainer.classList.remove('error-invalid-value');
    }
  }
  const guessAmountInput = document.querySelector(
    '.guess-change-guess-amount .guess-change-text-input'
  );
  if (guessAmountInput && guessAmountInput.value) {
    const inputContainer = guessAmountInput.closest(
      '.guess-change-input-container'
    );
    if (!inputContainer) return;
    const isGuessAmountValid = !isNaN(guessAmountInput.value);
    if (!isGuessAmountValid) {
      isFormInvalid = true;
      inputContainer.classList.add('error-invalid-value');
    } else {
      inputContainer.classList.remove('error-invalid-value');
    }
  }
  return isFormInvalid;
}
function addGuessTheChangeSubmitCtaHandling() {
  const guessTheChangeForm = document.querySelector('.guess-change-form');
  const submitCta = document.querySelector('.guess-change-cta');
  if (!guessTheChangeForm || !submitCta) return;
  submitCta.addEventListener('click', () => {
    const isFormValid = !updateGuessTheChangeFormFieldsInvalidity();
    if (!isFormValid) {
      guessTheChangeForm.classList.add('user-has-attempted-to-submit-form');
      return;
    }
    submitGuessTheChangeForm();
  });
}
function submitGuessTheChangeForm() {
  const guessTheChangeForm = document.querySelector('.guess-change-form');
  const firstNameTextInput = document.querySelector(
    '.guess-change-first-name .guess-change-text-input'
  );
  const lastNameTextInput = document.querySelector(
    '.guess-change-last-name .guess-change-text-input'
  );
  const emailTextInput = document.querySelector(
    '.guess-change-email .guess-change-text-input'
  );
  const guessAmountTextInput = document.querySelector(
    '.guess-change-guess-amount .guess-change-text-input'
  );
  if (
    !guessTheChangeForm ||
    !firstNameTextInput ||
    !lastNameTextInput ||
    !emailTextInput ||
    !guessAmountTextInput
  )
    return;
  const submissionUrl =
    'https://qibchguqc3abttfuknddqdnm640wrbsx.lambda-url.us-east-1.on.aws/';
  const brazeSubscriptionGroupId = '4356239f-b669-4c2e-80b0-dc5beff67b21';
  const brazeLeadType = guessTheChangeFormBrazeLeadType ?? 'university';
  const firstName = sanitizeInput(firstNameTextInput.value);
  const lastName = sanitizeInput(lastNameTextInput.value);
  const email = sanitizeInput(emailTextInput.value);
  const guessAmount = sanitizeInput(guessAmountTextInput.value);
  const data = {
    email: email,
    subscriptionGroupId: brazeSubscriptionGroupId,
    attributes: {
      first_name: firstName,
      last_name: lastName,
      'collegeadvocacy-guessthechange': guessAmount,
      'lead-type': brazeLeadType,
    },
  };
  fetch(submissionUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      guessTheChangeForm.classList.add('form-successfully-submitted');
    })
    .catch((error) => {
      console.error(error);
    });
}
function sanitizeInput(value = '') {
  return encodeHTMLEntities(value.trim());
}
window.addEventListener(
  'DOMContentLoaded',
  initializeBrandMarketingLandingPages
);
function initializeCricketLandingPage() {
  if (!document.body.classList.contains('view-cricket_2024')) return;
  initializeCricketNewUserHandlingIfNeeded();
}
function initializeCricketNewUserHandlingIfNeeded() {
  const isCricketNewUser = !!document.querySelector(
    '#brand-marketing-page.cricket-2024 .new-user-cta-wrapper'
  );
  if (!isCricketNewUser) return;
  initializeNewUserCtaHandling();
  initializeNewUserTermsCheckboxHandling();
}
function initializeNewUserCtaHandling() {
  const newUserCta = document.querySelector('.new-user-cta');
  if (!newUserCta) return;
  newUserCta.addEventListener('click', handleNewUserCtaClick);
}
function handleNewUserCtaClick(e) {
  const isCheckboxChecked = document.querySelector(
    '.new-user-cta-wrapper.checked-state'
  );
  if (isCheckboxChecked) return;
  e.preventDefault();
  updateNewUserCtaWrapperState('error-state');
}
function initializeNewUserTermsCheckboxHandling() {
  const newUserTermsCheckbox = document.querySelector(
    '.terms-checkbox-wrapper'
  );
  if (!newUserTermsCheckbox) return;
  newUserTermsCheckbox.addEventListener(
    'click',
    handleNewUserTermsCheckboxClick
  );
}
function handleNewUserTermsCheckboxClick() {
  const isCheckboxChecked = document.querySelector(
    '.new-user-cta-wrapper.checked-state'
  );
  if (isCheckboxChecked) {
    updateNewUserCtaWrapperState('unchecked-state');
  } else {
    updateNewUserCtaWrapperState('checked-state');
  }
}
function updateNewUserCtaWrapperState(newState) {
  const newUserCtaWrapper = document.querySelector('.new-user-cta-wrapper');
  if (!newUserCtaWrapper || !newState) return;
  const possibleStates = ['unchecked-state', 'checked-state', 'error-state'];
  possibleStates.forEach((state) => {
    newUserCtaWrapper.classList.remove(state);
  });
  newUserCtaWrapper.classList.add(newState);
}
window.addEventListener('DOMContentLoaded', initializeCricketLandingPage);
let careersMeetTheTeamsWrappers;
function initializeCareersLandingPage() {
  if (!document.body.classList.contains('view-careers_2021')) return;
  initializeCareersJoinTheTeamCarousel();
  window.addEventListener('load', applyMaxHeightToBenefitsSection);
  addMeetTheTeamsClickHandling();
  careersMeetTheTeamsWrappers = document.querySelectorAll('.team-wrapper');
  $.ajax({
    url: 'https://api.ashbyhq.com/posting-api/job-board/Acorns',
    type: 'GET',
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('AJAX request for job postings failed:');
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
    success: function (responseData) {
      handleJobPostingDataCareersLanding(responseData);
    },
  });
}
function initializeCareersJoinTheTeamCarousel() {
  $('.join-the-team-carousel-wrapper .carousel-content-wrapper').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    prevArrow:
      '<div class="carousel-arrow-2021 left-arrow-2021"><img src="https://sqy7rm.media.zestyio.com/carousel_arrow.svg" class="arrows-2021"></div>',
    nextArrow:
      '<div class="carousel-arrow-2021 right-arrow-2021"><img src="https://sqy7rm.media.zestyio.com/carousel_arrow.svg" class="arrows-2021"></div>',
  });
}
function applyMaxHeightToBenefitsSection() {
  const benefitItems = document.querySelectorAll('.benefit-item');
  const numberOfBenefitItemsToShow = window.innerWidth >= 1025 ? 9 : 6;
  function getBenefitsMaxHeight(numberOfItems) {
    let outputHeight = 0;
    for (let i = 0; i < numberOfItems; i++) {
      outputHeight += benefitItems[i].getBoundingClientRect().height;
    }
    return outputHeight;
  }
  const initialMaxHeight = getBenefitsMaxHeight(numberOfBenefitItemsToShow) - 1;
  const benefitItemWrapper = document.querySelector('.benefits-items-wrapper');
  const seeMoreBenefitsCta = document.querySelector('.benefits-cta');
  if (benefitItemWrapper && initialMaxHeight) {
    benefitItemWrapper.style.maxHeight = initialMaxHeight + 'px';
    const numberOfBenefitItems = benefitItems.length;
    const finalMaxHeight = getBenefitsMaxHeight(numberOfBenefitItems);
    seeMoreBenefitsCta.addEventListener('click', () => {
      benefitItemWrapper.style.maxHeight = finalMaxHeight + 'px';
      benefitItemWrapper.style.marginBottom = '0px';
      seeMoreBenefitsCta.style.opacity = 0;
      seeMoreBenefitsCta.style.maxHeight = '0px';
      seeMoreBenefitsCta.style.pointerEvents = 'none';
    });
  } else {
    seeMoreBenefitsCta.style.display = 'none';
  }
}
function addMeetTheTeamsClickHandling() {
  const meetTheTeamsContentWrappers = document.querySelectorAll(
    '.team-content-wrapper, .team-wrapper img'
  );
  meetTheTeamsContentWrappers.forEach((team) => {
    team.addEventListener('click', (e) => handleTeamClick(e, team));
  });
}
function handleTeamClick(e, team) {
  if (!e.target.closest('.team-details-wrapper')) {
    if (team.classList.contains('team-content-wrapper')) {
      team.classList.toggle('active');
    } else {
      const siblingTeamContentWrapper = team.parentNode.querySelector(
        '.team-content-wrapper'
      );
      siblingTeamContentWrapper &&
        siblingTeamContentWrapper.classList.toggle('active');
    }
  }
}
function handleJobPostingDataCareersLanding(responseData) {
  if (!responseData || !responseData.jobs) return;
  var jobPostings = responseData.jobs;
  jobPostings = jobPostings.sort((a, b) => {
    return (
      a.department.localeCompare(b.department) || a.title.localeCompare(b.title)
    );
  });
  jobPostings.forEach((job) => {
    var jobTitle = job.title;
    var jobLink = job.jobUrl;
    var jobDepartment = job.department;
    careersAddJob(jobTitle, jobLink, jobDepartment);
  });
  careersCleanUpJobTitles();
}
function careersAddJob(title, link, department) {
  const departmentWrapper = [...careersMeetTheTeamsWrappers].filter(
    (el) =>
      el.dataset.ashbyDepartmentName &&
      el.dataset.ashbyDepartmentName.includes(department)
  );
  if (departmentWrapper.length) {
    const departmentPositionsWrapper = departmentWrapper[0].querySelector(
      '.team-positions-wrapper'
    );
    departmentPositionsWrapper.innerHTML += `
      <a href="${link}" class="team-position" target="_blank">
        <div class="position-title small-paragraph-2021 text-bold solid-slate">
          ${title}
        </div>
        <img class="position-right-arrow" src="https://sqy7rm.media.zestyio.com/Green-Arrow-Right.svg" alt="Green Right Arrow">
      </a>
    `;
  }
}
function careersCleanUpJobTitles() {
  const positions = document.querySelectorAll('.team-position');
  if (!positions.length) return;
  const positionOneLineHeight = 22;
  const twoLinePositions = [...positions].filter((position) => {
    const positionHeight = position.getBoundingClientRect().height;
    return positionHeight !== positionOneLineHeight;
  });
  twoLinePositions.forEach((position) => careersReduceWidthOfEl(position));
}
function careersReduceWidthOfEl(el) {
  var d = el.querySelector('.position-title'),
    i,
    w,
    width,
    height;
  width = d.offsetWidth;
  height = d.offsetHeight;
  for (w = width; w; w--) {
    d.style.width = w + 'px';
    if (d.offsetHeight !== height) break;
  }
  if (w < d.scrollWidth) {
    d.style.width = d.style.maxWidth = d.scrollWidth + 'px';
  } else {
    d.style.width = w + 1 + 'px';
  }
}
window.addEventListener('DOMContentLoaded', initializeCareersLandingPage);
function initializeCareersCurrentOpportunities() {
  if (!document.body.classList.contains('view-careers_current_opportunities'))
    return;
  $.ajax({
    url: 'https://api.ashbyhq.com/posting-api/job-board/Acorns',
    type: 'GET',
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('AJAX request for job postings failed:');
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
    success: function (responseData) {
      handleJobPostingDataCurrentOpportunities(responseData);
    },
  });
}
function handleJobPostingDataCurrentOpportunities(responseData) {
  if (!responseData || !responseData.jobs) return;
  var jobPostingsWrapper = document.querySelector(
    '.current-opportunities-wrapper'
  );
  var departmentToggleBody = document.querySelector('.department-toggle-body');
  var locationToggleBody = document.querySelector('.location-toggle-body');
  var addedLocations = [];
  var jobPostings = responseData.jobs;
  jobPostings = jobPostings.sort((a, b) => {
    return (
      a.department.localeCompare(b.department) || a.title.localeCompare(b.title)
    );
  });
  jobPostings.forEach((job) => {
    var department = job.department;
    var departmentEl = document.querySelector(
      `.department-wrapper[data-department="${department}"]`
    );
    if (!departmentEl) {
      departmentEl = document.createElement('div');
      renderDepartment(departmentEl, department);
      renderDepartmentToggle(departmentToggleBody, department);
    }
    var departmentJobs = departmentEl.querySelector('.department-jobs');
    var jobTitle = job.title;
    var jobLink = job.jobUrl;
    var ashbyJobLocation = job.location;
    var jobLocation = mapLocationStrings(ashbyJobLocation);
    if (!addedLocations.includes(jobLocation)) {
      renderLocationToggle(locationToggleBody, jobLocation);
      addedLocations.push(jobLocation);
    }
    var jobEl = document.createElement('div');
    renderJob(jobEl, jobLink, jobTitle, department, jobLocation);
    departmentJobs.appendChild(jobEl);
    jobPostingsWrapper.appendChild(departmentEl);
  });
  addToggleEventListeners();
}
function renderDepartment(target, department) {
  target.innerHTML += `
    <div class="department-wrapper" data-department="${department}">
      <h6 class="department-title header-5-2021 black">
        ${department}
      </h6>
      <div class="department-jobs bg-white"></div>
    </div>
  `;
}
function renderJob(target, jobLink, jobTitle, department, jobLocation) {
  target.innerHTML += `
    <a class="job-wrapper" href="${jobLink}" data-department="${department}" data-location="${jobLocation}" target="_blank">
      <p class="job-title small-paragraph-2021 black">
        ${jobTitle}
      </p>
      <div class="department-and-location-wrapper">
        <p class="job-department-title small-paragraph-2021 light-grey">
          ${department}
        </p>
        <p class="job-location small-paragraph-2021 light-grey">
          ${jobLocation}
        </p>
      </div>
    </a>
  `;
}
function renderDepartmentToggle(target, department) {
  target.innerHTML += `
    <div class="department-toggle-item opportunities-toggle-item" data-department="${department}">
      <p class="toggle-item-title solid-slate"> 
        ${department}
      </p>
      <img class="toggle-item-check hidden" src="https://sqy7rm.media.zestyio.com/Green-Check-Icon.svg" alt="Green Check mark" />
    </div>
  `;
}
function renderLocationToggle(target, jobLocation) {
  const newToggle = document.createElement('div');
  newToggle.className = 'location-toggle-item opportunities-toggle-item';
  newToggle.setAttribute('data-location', jobLocation);
  newToggle.innerHTML = `
    <p class="toggle-item-title solid-slate">
      ${jobLocation}
    </p>
    <img class="toggle-item-check hidden" src="https://sqy7rm.media.zestyio.com/Green-Check-Icon.svg" alt="Green Check mark" />
  `;
  let insertBefore = Array.from(target.children).find((child) => {
    return child.getAttribute('data-location').localeCompare(jobLocation) > 0;
  });
  if (insertBefore) {
    target.insertBefore(newToggle, insertBefore);
  } else {
    target.appendChild(newToggle);
  }
}
function showJobsByDepartmentName(department) {
  const allJobs = document.querySelectorAll('.job-wrapper');
  allJobs.forEach((job) => {
    job.classList.remove('hidden-by-department');
    if (department !== 'all' && job.dataset.department !== department) {
      job.classList.add('hidden-by-department');
    }
  });
}
function hideEmptyDepartments() {
  const allDepartments = document.querySelectorAll('.department-wrapper');
  allDepartments.forEach((department) => {
    department.classList.remove('hidden');
    if (
      !department.querySelector(
        '.job-wrapper:not(.hidden-by-department):not(.hidden-by-location)'
      )
    ) {
      department.classList.add('hidden');
    }
  });
}
function showJobsByLocationName(location) {
  const allJobs = document.querySelectorAll('.job-wrapper');
  allJobs.forEach((job) => {
    job.classList.remove('hidden-by-location');
    if (location !== 'all' && job.dataset.location !== location) {
      job.classList.add('hidden-by-location');
    }
  });
}
function addToggleEventListeners() {
  const headerToggles = document.querySelectorAll('.opportunities-toggle');
  headerToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      if (!e.target.closest('.opportunities-toggle-item')) {
        toggle.classList.toggle('active');
      }
    });
  });
  const departmentToggleWrapper = document.querySelector('.department-toggle');
  const departmentCurrentSelection = document.querySelector(
    '.department-toggle-header .toggle-current-selection'
  );
  const departmentToggles = document.querySelectorAll(
    '.department-toggle-item'
  );
  departmentToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      departmentToggleWrapper.classList.remove('active');
      const currentlyActiveToggle = document.querySelector(
        '.department-toggle-item.active'
      );
      if (currentlyActiveToggle) {
        currentlyActiveToggle.classList.remove('active');
      }
      toggle.classList.add('active');
      const toggleCopy =
        toggle.querySelector('.toggle-item-title') &&
        toggle.querySelector('.toggle-item-title').textContent.trim();
      departmentCurrentSelection.textContent = toggleCopy;
      const toggleName = toggle.dataset.department;
      showJobsByDepartmentName(toggleName);
      hideEmptyDepartments();
    });
  });
  const locationToggleWrapper = document.querySelector('.location-toggle');
  const locationCurrentSelection = document.querySelector(
    '.location-toggle-header .toggle-current-selection'
  );
  const locationToggles = document.querySelectorAll('.location-toggle-item');
  locationToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      locationToggleWrapper.classList.remove('active');
      const currentlyActiveToggle = document.querySelector(
        '.location-toggle-item.active'
      );
      if (currentlyActiveToggle) {
        currentlyActiveToggle.classList.remove('active');
      }
      toggle.classList.add('active');
      const toggleCopy =
        toggle.querySelector('.toggle-item-title') &&
        toggle.querySelector('.toggle-item-title').textContent.trim();
      locationCurrentSelection.textContent = toggleCopy;
      const toggleName = toggle.dataset.location;
      showJobsByLocationName(toggleName);
      hideEmptyDepartments();
    });
  });
}
function mapLocationStrings(ashbyLocation) {
  const locations = {
    HQ: 'Irvine, CA (Option to be remote)',
    'New York': 'New York, NY (Option to be remote)',
  };
  return locations[ashbyLocation] ? locations[ashbyLocation] : ashbyLocation;
}
window.addEventListener(
  'DOMContentLoaded',
  initializeCareersCurrentOpportunities
);
function initializeCareersFAQs() {
  if (!document.body.classList.contains('view-careers_faqs')) return;
  window.addEventListener('load', setUpCareersFAQs);
}
function setUpCareersFAQs() {
  const faqQuestionTitles = document.querySelectorAll('.question-copy');
  const tableOfContents = document.createElement('div');
  tableOfContents.setAttribute('id', 'table-of-contents');
  const tableOfContentsHeader = document.createElement('h4');
  tableOfContentsHeader.innerText = 'Table of Contents';
  tableOfContents.append(tableOfContentsHeader);
  const faqsContent = document.querySelector('.faqs-content');
  if (!faqQuestionTitles.length) {
    tableOfContents.style.display = 'none';
    faqsContent.style.marginLeft = '0';
  }
  for (let i = 0; i < faqQuestionTitles.length; i++) {
    let tocChapter = document.createElement('div');
    tocChapter.setAttribute('class', 'toc-chapter');
    let chapterNumber = document.createElement('span');
    chapterNumber.innerText = i + 1 + '.';
    tocChapter.append(chapterNumber);
    let chapterTitle = document.createElement('span');
    let chapterTitleText =
      faqQuestionTitles[i].textContent &&
      faqQuestionTitles[i].textContent.replace(/^\d*\.\s+/gi, '');
    chapterTitle.innerText = chapterTitleText;
    tocChapter.append(chapterTitle);
    tocChapter.addEventListener('click', function () {
      faqQuestionTitles[i].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    });
    let chapterSeparator = document.createElement('hr');
    tableOfContents.append(tocChapter);
    tableOfContents.append(chapterSeparator);
  }
  let tocsToggle = document.createElement('div');
  tocsToggle.classList.add('tocs-toggle');
  let tocsPlus = document.createElement('img');
  tocsPlus.classList.add('tocs-plus');
  tocsPlus.setAttribute('src', 'https://sqy7rm.media.zestyio.com/Plus.svg');
  tocsPlus.setAttribute('alt', 'Plus sign');
  tocsToggle.appendChild(tocsPlus);
  let tocsMinus = document.createElement('img');
  tocsMinus.setAttribute('src', 'https://sqy7rm.media.zestyio.com/Minus.svg');
  tocsMinus.setAttribute('alt', 'Minus Sign');
  tocsToggle.appendChild(tocsMinus);
  tableOfContents.appendChild(tocsToggle);
  addTableOfContentsToggleHandling(tableOfContents);
  const faqsContentWrapper = document.querySelector('.faqs-content-wrapper');
  window.innerWidth >= 1025
    ? faqsContentWrapper.append(tableOfContents)
    : faqsContent.parentNode.insertBefore(tableOfContents, faqsContent);
  let questionActiveBreakpoints = [].slice
    .call(faqQuestionTitles)
    .map(
      (el) =>
        window.scrollY +
        el.getBoundingClientRect().top -
        window.innerHeight / 2
    );
  if (window.innerWidth >= 1025 && faqQuestionTitles.length) {
    let currentScroll = $(window).scrollTop();
    let previousScroll = currentScroll;
    let heightOfNavbar = document
      .getElementById('header-nav-desktop')
      .getBoundingClientRect().height;
    let desiredPaddingBetweenNavbarAndFixedTocs = 64;
    let distanceFromTopOfDocumentToTocs =
      window.scrollY + tableOfContents.getBoundingClientRect().top;
    let properTocsXOffset = tableOfContents.getBoundingClientRect().left;
    let properTocsYOffset =
      heightOfNavbar + desiredPaddingBetweenNavbarAndFixedTocs;
    let breakpointForTocsPositioning =
      distanceFromTopOfDocumentToTocs -
      (heightOfNavbar + desiredPaddingBetweenNavbarAndFixedTocs);
    if (currentScroll > breakpointForTocsPositioning) {
      tableOfContents.classList.add('fixed');
      tableOfContents.setAttribute(
        'style',
        'left: ' + properTocsXOffset + 'px; top: ' + properTocsYOffset + 'px;'
      );
    }
    let heightOfTocs = tableOfContents.getBoundingClientRect().height;
    let maxVisibleTocsHeight = window.innerHeight - properTocsYOffset - 24;
    let distanceFromTopOfDocumentToFooter =
      window.scrollY +
      document.querySelector('#footer-wrapper').getBoundingClientRect().top;
    let hideTocsAfter =
      distanceFromTopOfDocumentToFooter - window.innerHeight - 100;
    let tocsQuestions = document.querySelectorAll('.toc-chapter');
    let currentActiveQuestion = null;
    let isFadedOut;
    if (heightOfTocs > maxVisibleTocsHeight) {
      let initialInlineStyles = tableOfContents.getAttribute('style') || '';
      isFadedOut = true;
      tableOfContents.classList.add('fade-out-bottom');
      tableOfContents.setAttribute(
        'style',
        initialInlineStyles + ' max-height: ' + maxVisibleTocsHeight + 'px;'
      );
    }
    function careersFaqsCheckPosition() {
      currentScroll = $(window).scrollTop();
      if (previousScroll < hideTocsAfter && currentScroll >= hideTocsAfter) {
        tableOfContents.classList.add('opacity-fade-out');
      } else if (
        currentScroll < hideTocsAfter &&
        previousScroll >= hideTocsAfter
      ) {
        tableOfContents.classList.remove('opacity-fade-out');
      } else if (
        previousScroll < breakpointForTocsPositioning &&
        currentScroll >= breakpointForTocsPositioning
      ) {
        tableOfContents.classList.add('fixed');
        tableOfContents.setAttribute(
          'style',
          'left: ' + properTocsXOffset + 'px; top: ' + properTocsYOffset + 'px;'
        );
        if (isFadedOut) {
          let currentInlineStyles = tableOfContents.getAttribute('style') || '';
          tableOfContents.setAttribute(
            'style',
            currentInlineStyles + ' max-height: ' + maxVisibleTocsHeight + 'px;'
          );
        }
      } else if (
        currentScroll < breakpointForTocsPositioning &&
        previousScroll >= breakpointForTocsPositioning
      ) {
        tableOfContents.classList.remove('fixed');
        tableOfContents.removeAttribute('style');
      }
      function removeActiveQuestions() {
        [].slice.call(tocsQuestions).forEach((chapter) => {
          chapter.classList.remove('active');
        });
      }
      let activeQuestion = questionActiveBreakpoints.findIndex(
        (questionBreakpoint, i) => {
          let nextQuestionBreakpoint =
            i === questionActiveBreakpoints.length - 1
              ? 99999
              : questionActiveBreakpoints[i + 1];
          return (
            currentScroll > questionBreakpoint &&
            currentScroll <= nextQuestionBreakpoint
          );
        }
      );
      if (activeQuestion >= -1 && currentActiveQuestion !== activeQuestion) {
        if (activeQuestion === -1) {
          removeActiveQuestions();
          currentActiveQuestion = null;
        } else {
          removeActiveQuestions();
          tocsQuestions[activeQuestion].classList.add('active');
          currentActiveQuestion = activeQuestion;
        }
      }
      previousScroll = currentScroll;
    }
    window.addEventListener('scroll', careersFaqsCheckPosition);
  }
  function addTableOfContentsToggleHandling(tableOfContents) {
    const _tocsToggle = tableOfContents.querySelector('h4');
    _tocsToggle.addEventListener('click', () => {
      if (window.innerWidth < 1025) {
        tableOfContents.classList.toggle('active');
      }
    });
  }
}
window.addEventListener('DOMContentLoaded', initializeCareersFAQs);
function iniitalizeEarnPage() {
  if (!document.body.classList.contains('view-envoy_earn')) return;
  setUpScrollingIconsHandling();
}
function setUpScrollingIconsHandling() {
  const topRow = document.querySelector(
    '.scrolling-icons-section-wrapper .top-row-wrapper'
  );
  const bottomRow = document.querySelector(
    '.scrolling-icons-section-wrapper .bottom-row-wrapper'
  );
  const mobileRow = document.querySelector(
    '.scrolling-icons-section-wrapper .mobile-row-wrapper'
  );
  addInitialScrollRowStyling(topRow, true);
  addInitialScrollRowStyling(bottomRow);
  addInitialScrollRowStyling(mobileRow, false, true);
  updateIconRowOnScroll(topRow, true);
  updateIconRowOnScroll(bottomRow);
  updateIconRowOnScroll(mobileRow, false, true);
  const throttledUpdateIconRowsOnScroll = throttle(() => {
    updateIconRowOnScroll(topRow, true);
    updateIconRowOnScroll(bottomRow);
    updateIconRowOnScroll(mobileRow, false, true);
  }, 16);
  window.addEventListener('scroll', throttledUpdateIconRowsOnScroll);
}
function updateIconRowOnScroll(row, isTopRow, isMobileRow) {
  const scroll = window.scrollY;
  const scrollForPxChange = window.innerWidth < 768 ? 8 : 1;
  const initialAmountToAdjust = Math.round(scroll / scrollForPxChange) * 1;
  const offsetForTopRow = parseInt(row.dataset.initialTransform);
  const totalWidth = parseInt(row.dataset.fullWidth);
  const amountWithOffset =
    initialAmountToAdjust + (isTopRow ? offsetForTopRow : 0);
  const mobileRowOffset = isMobileRow ? 120 : 0;
  const finalValue = amountWithOffset % (totalWidth / 3);
  row.style.transform = isTopRow
    ? `translateX(-${finalValue}px)`
    : `translateX(${finalValue - totalWidth / 3 - mobileRowOffset}px)`;
}
function addInitialScrollRowStyling(row, isTopRow, isMobileRow) {
  if (!row) return;
  const iconAndMarginWidth =
    window.innerWidth >= 1025 ? 240 : window.innerWidth >= 768 ? 200 : 120;
  const initialTransform = iconAndMarginWidth / 2;
  const rowIconCount = row.querySelectorAll('.icon-wrapper').length;
  const totalWidth = rowIconCount * iconAndMarginWidth;
  const mobileRowOffset = isMobileRow ? 120 : 0;
  row.style.width = totalWidth + 'px';
  row.style.transform = isTopRow
    ? `translateX(-${initialTransform}px)`
    : `translateX(${0 - mobileRowOffset}px)`;
  row.dataset.fullWidth = totalWidth;
  row.dataset.initialTransform = initialTransform;
}
window.addEventListener('DOMContentLoaded', iniitalizeEarnPage);
function initializeiOSSafariExtension2024Page() {
  if (!document.body.classList.contains('view-ios_safari_extension_2024'))
    return;
  showErrorModalOriOSSafariExtensionPage();
  addiOSSafariExtensionCloseButtonHandling();
  setUpScrollingIconsHandling();
  $(document).ready(initializeiOSSafariGettingStartedCarousels);
}
function showErrorModalOriOSSafariExtensionPage() {
  const isDesktop = window.innerWidth >= 1025;
  isDesktop
    ? document.body.classList.add('show-error-modal')
    : document.body.classList.add('show-safari-extension-page');
}
function initializeiOSSafariGettingStartedCarousels() {
  initializeSafariGettingStartedImageCarousel();
  initializeSafariGettingStartedCopyCarousel();
}
function initializeSafariGettingStartedImageCarousel() {
  $('.getting-started-carousel .image-carousel-wrapper').slick({
    asNavFor: '.getting-started-carousel .copy-carousel-wrapper',
    arrows: false,
    autoplay: true,
    dots: false,
    fade: true,
    slidesToShow: 1,
  });
}
function initializeSafariGettingStartedCopyCarousel() {
  $('.getting-started-carousel .copy-carousel-wrapper').slick({
    asNavFor: '.getting-started-carousel .image-carousel-wrapper',
    slidesToShow: 0,
    arrows: false,
    dots: false,
  });
}
function addiOSSafariExtensionCloseButtonHandling() {
  const closeButton = document.querySelector('.close-button-wrapper');
  if (!closeButton) return;
  closeButton.addEventListener(
    'click',
    handleiOSSafariExtensionCloseButtonClick
  );
}
function handleiOSSafariExtensionCloseButtonClick() {
  document.body.classList.remove('show-error-modal');
  document.body.classList.add('show-safari-extension-page');
}
window.addEventListener(
  'DOMContentLoaded',
  initializeiOSSafariExtension2024Page
);
function iniitalizeRoundUpsPage() {
  if (!document.body.classList.contains('view-envoy_round_ups')) return;
  initializeLinkACardCarousels();
  rotateTextAsUserScrolls(
    '.rotating-text-component .rotating-headline',
    7476,
    2492
  );
  window.addEventListener('load', addSpareChangeAnimationTriggering);
}
function initializeLinkACardCarousels() {
  initializeLinkACardCarousel();
  initializeLinkACardCarouselNav();
}
function initializeLinkACardCarousel() {
  $('.link-a-card-carousel .carousel-wrapper').slick({
    asNavFor: '.link-a-card-section .carousel-nav-wrapper',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    draggable: false,
    speed: 0,
    focusOnSelect: true,
    responsive: [{ breakpoint: 1024, settings: 'unslick' }],
  });
}
function initializeLinkACardCarouselNav() {
  $('.link-a-card-section .carousel-nav-wrapper').slick({
    asNavFor: '.link-a-card-carousel .carousel-wrapper',
    slidesToShow: 0,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [{ breakpoint: 1024, settings: 'unslick' }],
  });
}
function addSpareChangeAnimationTriggering() {
  const spacer = document.querySelector('.spare-change-section .spacer');
  const bubble = document.querySelector('.spare-change-section .bubble');
  if (!spacer || !bubble) return;
  const additionalScrollOffset = window.innerHeight * 0.25;
  const triggerPos =
    window.scrollY +
    spacer.getBoundingClientRect().y +
    additionalScrollOffset;
  function checkTriggerPosition() {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    if (currentScroll >= triggerPos - windowHeight) {
      if (!bubble.classList.contains('transition-engaged')) {
        handleSpareChangeAnimation();
      }
    } else {
      if (bubble.classList.contains('transition-engaged')) {
        handleSpareChangeAnimation(true);
      }
    }
  }
  const throttledCheckTriggerPosition = throttle(checkTriggerPosition, 16);
  window.addEventListener('scroll', throttledCheckTriggerPosition);
}
async function handleSpareChangeAnimation(isReverse = false) {
  const bubble = document.querySelector('.spare-change-section .bubble');
  const bubbleCounterScale = document.querySelector(
    '.spare-change-section .bubble-counter-scale'
  );
  if (!bubble || !bubbleCounterScale) return;
  bubble.classList.toggle('transition-engaged');
  const startingScale = 1;
  const endingScale = 16;
  const scaleDifference = endingScale - startingScale;
  const frames = 120;
  const frameDuration = 16;
  for (let i = 0; i <= frames; i++) {
    const progress = i / frames;
    const bubbleScale = !isReverse
      ? startingScale + progress * scaleDifference
      : endingScale - progress * scaleDifference;
    const inverse = 1 / bubbleScale;
    bubble.style.transform = `translate(-50%, -50%) scale(${bubbleScale}, ${bubbleScale})`;
    bubbleCounterScale.style.transform = `translate(-50%, -50%) scale(${inverse}, ${inverse})`;
    await delayProgress(frameDuration);
  }
}
window.addEventListener('DOMContentLoaded', iniitalizeRoundUpsPage);
function initializeMarkRoberPage() {
  if (!document.body.classList.contains('view-mark_rober')) return;
  if (heroCtaLinksTo) {
    floatingActionButtonCtaLinksToOverride = heroCtaLinksTo;
  }
  replaceFloatingActionButtonCtaLinkAndCopy();
  if (floatingActionButtonSubtextOverride) {
    floatingActionButtonSubtitleOverride = floatingActionButtonSubtextOverride;
  }
  replaceFloatingActionButtonCopyElements();
  displayFloatingActionButtonOnceUpdated();
  rotateTextAsUserScrolls(
    '.rotating-text-component .rotating-headline',
    8757,
    2744
  );
  if (window.location.href.includes('/carlilloyd/')) {
    updateFaqLinksToCarliLloydS2();
    fallbackToUpdateOtherCarliLloydContent();
  }
}
function updateFaqLinksToCarliLloydS2() {
  const faqLinks = document.querySelectorAll(
    '#envoy-faqs-component-1 .questions-wrapper a'
  );
  faqLinks.forEach((link) => {
    link.href = link.href.replace(
      's2=rober5',
      's2=carli_lloyd&referral_code=ETFYESTGI5'
    );
  });
}
function fallbackToUpdateOtherCarliLloydContent() {
  const pageContent = document.querySelector('#brand-marketing-page');
  if (pageContent) {
    pageContent.classList.add('carli-lloyd');
  }
  const carliLloydOnly = document.querySelectorAll('.carli-lloyd-only');
  carliLloydOnly.forEach((el) => {
    el.style.display = 'inline-block';
  });
  const videoPlayButton = document.querySelector('.video-play-button');
  if (videoPlayButton) {
    videoPlayButton.src =
      'https://sqy7rm.media.zestyio.com/Carli-Lloyd-Play-Button.png';
  }
}
window.addEventListener('DOMContentLoaded', initializeMarkRoberPage);
function initializeMrBeastPage() {
  if (!document.body.classList.contains('view-mrbeast_landing_page')) return;
  if (pageCtasLinkTo) {
    floatingActionButtonCtaLinksToOverride = pageCtasLinkTo;
    replaceFloatingActionButtonCtaLinkAndCopy();
  }
  replaceFloatingActionButtonCopyElements();
  displayFloatingActionButtonOnceUpdated();
  $(document).ready(() => {
    addMocScrollRevealHandling(
      ['#image-left-content-right-component-1 .image-wrapper'],
      { origin: 'left', distance: '60px' }
    );
  });
  rotateTextAsUserScrolls(
    '.rotating-text-component .rotating-headline',
    9012,
    2803
  );
}
window.addEventListener('DOMContentLoaded', initializeMrBeastPage);
function initializeLegalPage() {
  if (!document.body.classList.contains('view-legal_documents')) return;
  wrapLegalDocumentTables();
}
function wrapLegalDocumentTables() {
  const tables = document.querySelectorAll(
    '#legal_docs #document-container table'
  );
  tables.forEach((table) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('injected-table-wrapper');
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}
window.addEventListener('DOMContentLoaded', initializeLegalPage);
function initializeEarlyPaidPages() {
  if (!document.body.classList.contains('view-early_paid_affiliate_pages'))
    return;
  window.addEventListener('load', setUpGhTicker);
}
function setUpGhTicker() {
  renderGhTickerContent();
  initializeGhTicker();
}
function renderGhTickerContent() {
  const ghTicker = document.querySelector('#gh-ticker');
  const tickerContent = ghTicker && ghTicker.dataset.tickerContent;
  if (!tickerContent) return;
  const tickerItems = tickerContent.split(',');
  tickerItems.forEach((item) => {
    const itemCopy = item.trim();
    if (!itemCopy) return;
    ghTicker.innerHTML += `
      <li class="ticker-item">
        <span class="item-copy envoy-tagline solid-slate">${itemCopy}</span>
        <span class="item-separator">&#8226;</span>
      </li>
    `;
  });
}
function initializeGhTicker() {
  $('#gh-ticker').webTicker({ startEmpty: false, hoverpause: false });
}
window.addEventListener('DOMContentLoaded', initializeEarlyPaidPages);
function initialize404Page() {
  if (!document.querySelector('.four-oh-four')) return;
  sendGAEvent({
    eventCategory: 'Click',
    eventAction: 'Marketing Site 404 Page View',
    eventLabel: window.location.pathname,
  });
}
window.addEventListener('DOMContentLoaded', initialize404Page);
async function initializeAndFetchVariantForAmplitudeExperiment(
  experimentKey,
  utmTermPrefix,
  customUtmTermSelector
) {
  if (!experimentKey || !utmTermPrefix) return;
  await window.experiment.fetch();
  const variantObj = window.experiment.variant(experimentKey) || {};
  const variant = variantObj.key || null;
  if (variant) {
    console.log(`${experimentKey}: ${variant}`);
    const utmTerm = `${utmTermPrefix}${variant}`;
    handleAmplitudeExperimentQueryParams(utmTerm, customUtmTermSelector);
  } else {
    console.log(`${experimentKey}: inactive`);
  }
  return variant;
}
function handleAmplitudeExperimentQueryParams(utmTerm, selector) {
  if (!utmTerm) return;
  const elsToCheck = selector
    ? document.querySelectorAll(selector)
    : document.querySelectorAll('a');
  const isDefaultHandling = !selector;
  elsToCheck.forEach((el) =>
    addUtmParametersToLinks(el, utmTerm, isDefaultHandling)
  );
}
function addUtmParametersToLinks(el, utmTerm, isDefaultHandling) {
  const elHref = el.getAttribute('href');
  if (!elHref || !utmTerm) return;
  const hrefsUpdatedByDefault = ['signup.acorns.com', 'gohenry.com'];
  const shouldTrigger = hrefsUpdatedByDefault.some((href) =>
    elHref.includes(href)
  );
  if (isDefaultHandling && !shouldTrigger) return;
  const queriesToAdd = `utm_term=${utmTerm}`;
  if (elHref.includes('fallback=')) {
    el.setAttribute('href', elHref + '%26' + encodeURIComponent(queriesToAdd));
  } else {
    elHref.includes('?')
      ? el.setAttribute('href', elHref + '&' + queriesToAdd)
      : el.setAttribute('href', elHref + '?' + queriesToAdd);
  }
}
function setUpFloatingActionButton() {
  showButtonIfUserHasNotClosed();
  addCloseButtonHandling();
  setUpStickyButtonMobileScrollHandling();
}
function setUpStickyButtonMobileScrollHandling() {
  if (window.innerWidth >= 1025) return;
  let lastScrollTop = 0;
  let hasRun = false;
  const stickyActionButtonContainer = document.querySelector(
    '.sticky-action-button-container'
  );
  const stickyActionButton = document.querySelector('.sticky-action-button');
  window.addEventListener(
    'scroll',
    function () {
      if (
        stickyActionButtonContainer.classList.contains(
          'user-has-not-scrolled-on-mobile'
        )
      ) {
        window.setTimeout(() => {
          stickyActionButtonContainer.classList.remove(
            'user-has-not-scrolled-on-mobile'
          );
          injectPaddingIntoPageForFloatingActionButton();
        }, 1500);
      }
      let st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        if (!hasRun) {
          stickyActionButton && stickyActionButton.classList.add('scroll-down');
          hasRun = true;
          injectPaddingIntoPageForFloatingActionButton(50);
        }
      } else {
        if (hasRun) {
          stickyActionButton.classList.remove('scroll-down');
          hasRun = false;
          injectPaddingIntoPageForFloatingActionButton(50);
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
}
function showButtonIfUserHasNotClosed() {
  const hasUserClosedButton =
    sessionStorage.getItem('user-closed-sticky-action-button') === '1';
  if (!hasUserClosedButton) {
    const stickyActionButtonContainer = document.querySelector(
      '.sticky-action-button-container'
    );
    stickyActionButtonContainer &&
      stickyActionButtonContainer.classList.remove(
        'initially-hidden-on-mobile'
      );
    const mobileNavBodyWrapper = document.querySelector(
      '.mobile-nav-body-wrapper'
    );
    mobileNavBodyWrapper &&
      mobileNavBodyWrapper.classList.add('sticky-action-button-visible');
    if (window.innerWidth < 1025) {
      forceRedraw();
      injectPaddingIntoPageForFloatingActionButton();
    }
  }
}
function hideStickyActionButton() {
  const stickyActionButtonContainer = document.querySelector(
    '.sticky-action-button-container'
  );
  if (!stickyActionButtonContainer) return;
  stickyActionButtonContainer.style.display = 'none';
  injectPaddingIntoPageForFloatingActionButton(0, true);
  sessionStorage.setItem('user-closed-sticky-action-button', '1');
  const mobileNavBodyWrapper = document.querySelector(
    '.mobile-nav-body-wrapper'
  );
  mobileNavBodyWrapper &&
    mobileNavBodyWrapper.classList.remove('sticky-action-button-visible');
}
function addCloseButtonHandling() {
  const closeButton = document.querySelector(
    '.sticky-action-button-container .close-button'
  );
  if (!closeButton) return;
  closeButton.addEventListener('click', hideStickyActionButton);
}
function replaceFloatingActionButtonCtaLinkAndCopy() {
  const ctaCopyOverride = floatingActionButtonCtaCopyOverride;
  const ctaLinksToOverride = floatingActionButtonCtaLinksToOverride;
  if (!ctaCopyOverride && !ctaLinksToOverride) return;
  const stickyActionCtas = document.querySelectorAll(
    '.sticky-action-button-container .sticky-action-cta'
  );
  stickyActionCtas.forEach((cta) => {
    if (ctaCopyOverride) {
      cta.innerText = ctaCopyOverride;
    }
    if (ctaLinksToOverride) {
      cta.setAttribute('href', ctaLinksToOverride);
      if (document.body.classList.contains('view-learn_hub_articles')) {
        cta.setAttribute('universal', 'true');
      }
    }
  });
}
function replaceFloatingActionButtonCopyElements() {
  const titleOverride = floatingActionButtonTitleOverride;
  const subtitleOverride = floatingActionButtonSubtitleOverride;
  if (!titleOverride && !subtitleOverride) return;
  if (titleOverride) {
    const stickyActionTitle = document.querySelectorAll(
      '.sticky-action-button-container .company-name'
    );
    stickyActionTitle.forEach((title) => {
      title.innerHTML = titleOverride;
    });
  }
  if (subtitleOverride) {
    const stickyActionSubtext = document.querySelectorAll(
      '.sticky-action-button-container .sub-text'
    );
    stickyActionSubtext.forEach((subtext) => {
      subtext.innerHTML = subtitleOverride;
    });
  }
}
function replaceFloatingActionButtonIcon() {
  const iconOverride = floatingActionButtonIconOverride;
  if (!iconOverride) return;
  const stickyActionIcon = document.querySelectorAll(
    '.sticky-action-button-container .main-content-container img'
  );
  stickyActionIcon.forEach((icon) => {
    icon.src = iconOverride;
  });
}
function displayFloatingActionButtonOnceUpdated() {
  const hasUserClosedButton =
    sessionStorage.getItem('user-closed-sticky-action-button') === '1';
  if (hasUserClosedButton) return;
  const stickyActionButtonContainer = document.querySelector(
    '.sticky-action-button-container'
  );
  if (stickyActionButtonContainer) {
    stickyActionButtonContainer.style.display = 'block';
  }
}
function injectPaddingIntoPageForFloatingActionButton(
  delay = 0,
  resetPadding = false
) {
  const floatingActionButton = document.querySelector(
    '.sticky-action-button-container'
  );
  const target = document.querySelector('body');
  if (!floatingActionButton || !target) return;
  if (resetPadding || window.innerWidth >= 1025) {
    target.style.paddingBottom = '';
    return;
  }
  if (delay) {
    delay += 50;
  }
  window.setTimeout(() => {
    const floatingActionButtonHeight = floatingActionButton.offsetHeight;
    target.style.paddingBottom = floatingActionButtonHeight + 'px';
  }, delay);
}
window.addEventListener('DOMContentLoaded', setUpFloatingActionButton);
const tierSignupZuid = '7-acb9829bad-gj1qrc';
const acornsHelloDomain = 'signup.acorns.com';
const goHenryDomain = 'gohenry.com';
const tierSignupKey = 'tier-signup';
var storedQueries;
function addQueryParametersToHardCodedLinks(el) {
  let elHref = el.getAttribute('href');
  if (!elHref) return;
  const shouldTrigger =
    elHref.includes(acornsHelloDomain) ||
    elHref.includes(goHenryDomain) ||
    elHref.includes(tierSignupKey);
  if (!shouldTrigger) return;
  const promoCodeOverrideType = determineIfPromoCodeOverrideActive(elHref);
  if (!storedQueries && !promoCodeOverrideType) return;
  if (promoCodeOverrideType === 'addAndReplace') {
    const elHrefWithoutPromoCode = elHref.replace(/(\?|&)promo=[^&]*/, '');
    elHref = elHrefWithoutPromoCode;
  }
  const queriesToAdd = determineQueryParametersToAdd(
    promoCodeOverrideType,
    elHref
  );
  if (elHref.includes('fallback=')) {
    elHref.includes(tierSignupKey) || elHref.includes('%3F')
      ? el.setAttribute(
          'href',
          elHref + '%26' + encodeURIComponent(queriesToAdd)
        )
      : el.setAttribute(
          'href',
          elHref + '%3F' + encodeURIComponent(queriesToAdd)
        );
  } else {
    elHref.includes('?')
      ? el.setAttribute('href', elHref + '&' + queriesToAdd)
      : el.setAttribute('href', elHref + '?' + queriesToAdd);
  }
}
function determineQueryParametersToAdd(promoCodeOverrideType, elHref) {
  let queryParameters = '';
  if (storedQueries) {
    queryParameters = handleStoredQueries(storedQueries);
  }
  if (promoCodeOverrideType) {
    queryParameters = handlePromoCodeOverrideActive(
      queryParameters,
      promoCodeOverrideType,
      elHref
    );
  }
  return queryParameters;
}
function handleStoredQueries(storedQueries) {
  if (!storedQueries) return;
  const storedHashString = storedQueries.includes('#')
    ? storedQueries.split('#')[1]
    : '';
  const convertedPromoCodeParam =
    convertHashToPromoCodeParamIfNeeded(storedHashString);
  const queriesWithHashRemoved = storedQueries.replace(
    '#' + storedHashString,
    ''
  );
  if (queriesWithHashRemoved) {
    const hashRemovedQueryParams = new URLSearchParams(queriesWithHashRemoved);
    if (convertedPromoCodeParam) {
      hashRemovedQueryParams.delete('promo');
    }
    const queryWithoutPromoKey = hashRemovedQueryParams.toString();
    return !convertedPromoCodeParam
      ? storedQueries
      : queryWithoutPromoKey
      ? queryWithoutPromoKey + '&' + convertedPromoCodeParam
      : convertedPromoCodeParam;
  } else {
    return convertedPromoCodeParam;
  }
}
function convertHashToPromoCodeParamIfNeeded(hash) {
  if (!hash) {
    return '';
  }
  const possiblePrefixes = [
    'ref_lnk_',
    'ref_mail_',
    'ref_fb_',
    'ref_sms_',
    'ref_tw_',
    'ref_gl_',
    'ref_whats_',
    'ref_mes_',
    'ref_act_',
    'ref_pkt_',
  ];
  const prefixMatch = possiblePrefixes.find((prefix) =>
    hash.startsWith(prefix)
  );
  if (!prefixMatch) {
    return '';
  }
  const valueAfterPrefix = hash.substring(prefixMatch.length);
  return valueAfterPrefix ? 'promo=' + valueAfterPrefix : '';
}
function determineIfPromoCodeOverrideActive(elHref) {
  if (!elHref.includes(goHenryDomain)) return false;
  const addOnlySelectors = [
    '.view-early_referral_parent_to_parent',
    '.view-early_referral_teen',
    '.view-early_paid_affiliate_pages',
  ];
  const hasAddOnlySelector = addOnlySelectors.some((selector) =>
    document.querySelector(selector)
  );
  if (goHenryPromoCodeOverrideActive === '1' && goHenryPromoCodeOverride) {
    if (hasAddOnlySelector) {
      return 'addOnly';
    } else {
      return 'addAndReplace';
    }
  }
  return false;
}
function handlePromoCodeOverrideActive(queryParameters, overrideType, elHref) {
  const elHasPreexistingPromoCode = elHref.match(/(\?|&)promo=[^&]*/);
  if (elHasPreexistingPromoCode && overrideType === 'addOnly') {
    return queryParameters;
  }
  const promoCodeOverride = goHenryPromoCodeOverride;
  const promoCodeParam = 'promo=' + promoCodeOverride;
  if (!queryParameters) {
    return promoCodeParam;
  }
  const urlSearchParams = new URLSearchParams(queryParameters);
  if (
    overrideType === 'addAndReplace' ||
    (overrideType === 'addOnly' && !urlSearchParams.has('promo'))
  ) {
    urlSearchParams.set('promo', promoCodeOverride);
  }
  return urlSearchParams.toString();
}
function updateAdjustLinksToFallbackUrlsIfNeeded() {
  const shouldReplace = replaceAdjustLinksWithFallbackUrls === '1';
  if (!shouldReplace) return;
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    if (!link.href) return;
    const linkUrl = new URL(link.href);
    const linkParams = linkUrl.searchParams;
    const isAdjustLink = link.href.includes('app.adjust.com');
    const fallbackUrl = linkParams.get('fallback');
    if (!isAdjustLink || !fallbackUrl) return;
    link.href = fallbackUrl;
  });
}
function applyBabylistAdjustIdOverridesIfNeeded(queries = '') {
  if (
    !babyListAdjustIdOverrideIdValue ||
    !babyListAdjustIdOverrideParamKey ||
    !babyListAdjustIdOverrideParamValue
  )
    return;
  const isActive = isBabyListAdjustIdOverrideActive === '1';
  if (!isActive) return;
  const params = new URLSearchParams(queries);
  const shouldTrigger =
    params.get(babyListAdjustIdOverrideParamKey) ===
    babyListAdjustIdOverrideParamValue;
  if (!shouldTrigger) return;
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    if (!link.href) return;
    link.href = link.href.replace(
      /adjust.com\/(.*)\?fallback/i,
      `adjust.com/${babyListAdjustIdOverrideIdValue}?fallback`
    );
    const linkUrl = new URL(link.href);
    const linkParams = new URLSearchParams(linkUrl.search);
    const linkFallback = linkParams.get('fallback');
    if (
      link.href.includes('app.adjust.com') &&
      !link.href.includes('redirect_macos') &&
      linkFallback
    ) {
      link.href =
        link.href + '&redirect_macos=' + encodeURIComponent(linkFallback);
    }
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const isSearchStringPresent = window.location.href.indexOf('?') >= 0;
  const isHashStringPresent = window.location.hash;
  if (
    currentItemZuid !== tierSignupZuid &&
    (isSearchStringPresent || isHashStringPresent)
  ) {
    var afterSplit =
      isHashStringPresent && !isSearchStringPresent
        ? window.location.hash
        : window.location.href.split('?')[1];
    const cookieDomain =
      instanceEnv === 'live' ? '.acorns.com' : window.location.hostname;
    document.cookie =
      'queries=' +
      decodeURIComponent(afterSplit) +
      ';max-age=1209600;path=/;domain=' +
      cookieDomain +
      ';';
  }
  storedQueries = document.cookie.replace(
    /(?:(?:^|.*;\s*)queries\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
  const anchorTags = document.querySelectorAll('a');
  if (anchorTags) {
    anchorTags.forEach((tag) => addQueryParametersToHardCodedLinks(tag));
  }
  applyBabylistAdjustIdOverridesIfNeeded(storedQueries);
  updateAdjustLinksToFallbackUrlsIfNeeded();
});
