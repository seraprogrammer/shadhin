const _0x2f3adf = _0x24a0;
(function (_0x2cf211, _0x104363) {
  const _0x37d95c = _0x24a0,
    _0x2e15c6 = _0x2cf211();
  while (!![]) {
    try {
      const _0x3a2eb8 =
        -parseInt(_0x37d95c(0x1bd)) / (0x30c * -0x8 + 0x1c44 + 0x1 * -0x3e3) +
        -parseInt(_0x37d95c(0x1c5)) / (-0x3 * 0x149 + 0x1ab0 + -0x16d3 * 0x1) +
        parseInt(_0x37d95c(0x245)) / (-0x91 * -0x13 + -0x1c30 + 0x1170) +
        parseInt(_0x37d95c(0x26a)) / (0x37 * 0xac + -0x1575 + -0x529 * 0x3) +
        (-parseInt(_0x37d95c(0x1fb)) /
          (-0x22d6 + 0x17 * 0x87 + -0x1 * -0x16ba)) *
          (-parseInt(_0x37d95c(0x21d)) / (-0x1494 + 0xcf4 + 0x59 * 0x16)) +
        (parseInt(_0x37d95c(0x1d9)) / (0x1 * 0x1091 + 0x653 + -0x16dd)) *
          (-parseInt(_0x37d95c(0x24c)) / (-0xb * 0x20b + -0x1ea7 + 0x3528)) +
        parseInt(_0x37d95c(0x21b)) / (-0x1215 + 0x14e * -0x10 + -0x1b2 * -0x17);
      if (_0x3a2eb8 === _0x104363) break;
      else _0x2e15c6['push'](_0x2e15c6['shift']());
    } catch (_0x276714) {
      _0x2e15c6['push'](_0x2e15c6['shift']());
    }
  }
})(_0x17f5, 0x5376c * -0x1 + 0x36de8 + 0x55179);
class Lexer {
  constructor(_0x4b725d) {
    const _0x1dc6f2 = _0x24a0;
    (this[_0x1dc6f2(0x1e2)] = _0x4b725d),
      (this[_0x1dc6f2(0x1d3)] = []),
      (this[_0x1dc6f2(0x232)] = -0x4c * -0x5 + 0x443 * -0x1 + 0x2c7 * 0x1);
  }
  [_0x2f3adf(0x204)]() {
    const _0xaa4d7b = _0x2f3adf,
      _0x242f27 = {
        szuEr: function (_0x245997, _0x2b4484) {
          return _0x245997 !== _0x2b4484;
        },
        wLjPQ: _0xaa4d7b(0x195),
        hwmzw: function (_0x5e3be7, _0x1acd66, _0x11350c) {
          return _0x5e3be7(_0x1acd66, _0x11350c);
        },
        WsGNF: _0xaa4d7b(0x1a1),
        CwcfJ: function (_0x1f3f23, _0x2672ae) {
          return _0x1f3f23 === _0x2672ae;
        },
        SksMp: _0xaa4d7b(0x218),
        CuznW: _0xaa4d7b(0x1f3),
      },
      _0x689554 = { যোগ: '+', বিয়োগ: '-', গুণ: '*', ভাগ: '/' },
      _0x4d4433 = /[০-৯]+|যোগ|বিয়োগ|গুণ|ভাগ|\(|\)/g;
    let _0xfc00ce;
    while (
      _0x242f27[_0xaa4d7b(0x1e8)](
        (_0xfc00ce = _0x4d4433[_0xaa4d7b(0x23d)](this[_0xaa4d7b(0x1e2)])),
        null
      )
    ) {
      const _0x46ee80 = _0xfc00ce[-0x611 + 0x1 * -0x21b3 + 0x14 * 0x1fd];
      if (_0x689554[_0x46ee80])
        this[_0xaa4d7b(0x1d3)][_0xaa4d7b(0x1cb)]({
          type: _0x242f27[_0xaa4d7b(0x1ac)],
          value: _0x689554[_0x46ee80],
        });
      else {
        if (/^[০-৯]+$/[_0xaa4d7b(0x1b4)](_0x46ee80)) {
          const _0x249c24 = _0x242f27[_0xaa4d7b(0x203)](
            parseInt,
            _0x46ee80[_0xaa4d7b(0x1ab)](/[০-৯]/g, _0x14fa58 =>
              _0xaa4d7b(0x1af)[_0xaa4d7b(0x20f)](_0x14fa58)
            ),
            -0x21c7 * 0x1 + -0x2127 + 0x42f8
          );
          this[_0xaa4d7b(0x1d3)][_0xaa4d7b(0x1cb)]({
            type: _0x242f27[_0xaa4d7b(0x1b1)],
            value: _0x249c24,
          });
        } else {
          if (_0x242f27[_0xaa4d7b(0x1ae)](_0x46ee80, '('))
            this[_0xaa4d7b(0x1d3)][_0xaa4d7b(0x1cb)]({
              type: _0x242f27[_0xaa4d7b(0x1e9)],
            });
          else
            _0x242f27[_0xaa4d7b(0x1ae)](_0x46ee80, ')') &&
              this[_0xaa4d7b(0x1d3)][_0xaa4d7b(0x1cb)]({
                type: _0x242f27[_0xaa4d7b(0x1a0)],
              });
        }
      }
    }
    return this[_0xaa4d7b(0x1d3)];
  }
}
class Parser {
  constructor(_0x1ec790) {
    const _0x51245b = _0x2f3adf;
    (this[_0x51245b(0x1d3)] = _0x1ec790),
      (this[_0x51245b(0x232)] = 0x115f + 0x153 * 0x1 + -0x12b2);
  }
  [_0x2f3adf(0x244)]() {
    const _0x445079 = _0x2f3adf;
    return this[_0x445079(0x19d)]();
  }
  [_0x2f3adf(0x19d)]() {
    const _0x2bdd6d = _0x2f3adf,
      _0x2c8874 = {
        ekqtT: _0x2bdd6d(0x195),
        vOObm: _0x2bdd6d(0x19f) + _0x2bdd6d(0x1c9),
      };
    let _0x200cba = this[_0x2bdd6d(0x1b3)]();
    while (
      this[_0x2bdd6d(0x22a)](_0x2c8874[_0x2bdd6d(0x229)], '+') ||
      this[_0x2bdd6d(0x22a)](_0x2c8874[_0x2bdd6d(0x229)], '-')
    ) {
      const _0x1e1fbf = this[_0x2bdd6d(0x201)]()[_0x2bdd6d(0x243)],
        _0x29213e = this[_0x2bdd6d(0x1b3)]();
      _0x200cba = {
        type: _0x2c8874[_0x2bdd6d(0x233)],
        operator: _0x1e1fbf,
        left: _0x200cba,
        right: _0x29213e,
      };
    }
    return _0x200cba;
  }
  [_0x2f3adf(0x1b3)]() {
    const _0x21a3c8 = _0x2f3adf,
      _0x5b18b5 = {
        RDZAA: _0x21a3c8(0x195),
        RdFnz: _0x21a3c8(0x19f) + _0x21a3c8(0x1c9),
      };
    let _0x31f9af = this[_0x21a3c8(0x1f1)]();
    while (
      this[_0x21a3c8(0x22a)](_0x5b18b5[_0x21a3c8(0x239)], '*') ||
      this[_0x21a3c8(0x22a)](_0x5b18b5[_0x21a3c8(0x239)], '/')
    ) {
      const _0x2e29ed = this[_0x21a3c8(0x201)]()[_0x21a3c8(0x243)],
        _0x945fba = this[_0x21a3c8(0x1f1)]();
      _0x31f9af = {
        type: _0x5b18b5[_0x21a3c8(0x265)],
        operator: _0x2e29ed,
        left: _0x31f9af,
        right: _0x945fba,
      };
    }
    return _0x31f9af;
  }
  [_0x2f3adf(0x1f1)]() {
    const _0x2e957d = _0x2f3adf,
      _0x58f3d8 = {
        DEKss: _0x2e957d(0x1a1),
        oPtXA: _0x2e957d(0x247),
        TjVmA: _0x2e957d(0x218),
        KkXBT: _0x2e957d(0x1f3),
        gVTmU: _0x2e957d(0x1f7) + _0x2e957d(0x1a9) + _0x2e957d(0x1d8),
        zPDae: _0x2e957d(0x20c),
      };
    if (this[_0x2e957d(0x22a)](_0x58f3d8[_0x2e957d(0x213)]))
      return {
        type: _0x58f3d8[_0x2e957d(0x1bf)],
        value: this[_0x2e957d(0x201)]()[_0x2e957d(0x243)],
      };
    if (this[_0x2e957d(0x22a)](_0x58f3d8[_0x2e957d(0x209)])) {
      const _0x2f3fdf = this[_0x2e957d(0x19d)]();
      return (
        this[_0x2e957d(0x240)](
          _0x58f3d8[_0x2e957d(0x1ca)],
          _0x58f3d8[_0x2e957d(0x1a6)]
        ),
        _0x2f3fdf
      );
    }
    throw new Error(
      _0x2e957d(0x1dd) +
        _0x2e957d(0x214) +
        (this[_0x2e957d(0x1df)]()
          ? this[_0x2e957d(0x1df)]()[_0x2e957d(0x1e6)]
          : _0x58f3d8[_0x2e957d(0x1dc)])
    );
  }
  [_0x2f3adf(0x22a)](..._0x31adaa) {
    const _0x2ae47b = _0x2f3adf;
    for (let _0x217866 of _0x31adaa) {
      if (this[_0x2ae47b(0x18c)](_0x217866))
        return this[_0x2ae47b(0x18e)](), !![];
    }
    return ![];
  }
  [_0x2f3adf(0x18c)](_0x4382d5) {
    const _0x4e010c = _0x2f3adf,
      _0x32600e = {
        rkRfM: function (_0x1a58d1, _0x7697b7) {
          return _0x1a58d1 === _0x7697b7;
        },
      };
    if (this[_0x4e010c(0x252)]()) return ![];
    return _0x32600e[_0x4e010c(0x20e)](
      this[_0x4e010c(0x1df)]()[_0x4e010c(0x1e6)],
      _0x4382d5
    );
  }
  [_0x2f3adf(0x18e)]() {
    const _0x1f8334 = _0x2f3adf;
    if (!this[_0x1f8334(0x252)]()) this[_0x1f8334(0x232)]++;
    return this[_0x1f8334(0x201)]();
  }
  [_0x2f3adf(0x252)]() {
    const _0x236ff0 = _0x2f3adf,
      _0x45b666 = {
        lbAgD: function (_0x6bb8f8, _0x2f6181) {
          return _0x6bb8f8 >= _0x2f6181;
        },
      };
    return _0x45b666[_0x236ff0(0x250)](
      this[_0x236ff0(0x232)],
      this[_0x236ff0(0x1d3)][_0x236ff0(0x1e4)]
    );
  }
  [_0x2f3adf(0x1df)]() {
    const _0x5aca8d = _0x2f3adf;
    return this[_0x5aca8d(0x1d3)][this[_0x5aca8d(0x232)]];
  }
  [_0x2f3adf(0x201)]() {
    const _0x4a7ed2 = _0x2f3adf,
      _0x3b77eb = {
        DwVUf: function (_0x15e3e0, _0x471463) {
          return _0x15e3e0 - _0x471463;
        },
      };
    return this[_0x4a7ed2(0x1d3)][
      _0x3b77eb[_0x4a7ed2(0x189)](
        this[_0x4a7ed2(0x232)],
        -0x98 * -0x13 + 0x10d * -0x23 + -0x44 * -0x60
      )
    ];
  }
  [_0x2f3adf(0x240)](_0x4558f9, _0x39b7b5) {
    const _0x1934dd = _0x2f3adf;
    if (this[_0x1934dd(0x18c)](_0x4558f9)) return this[_0x1934dd(0x18e)]();
    throw new Error(_0x39b7b5);
  }
}
class Interpreter {
  [_0x2f3adf(0x268)](_0x20591e) {
    const _0x27d37e = _0x2f3adf,
      _0x5766c7 = { AdwgY: _0x27d37e(0x1b9) + _0x27d37e(0x231) };
    if (!_0x20591e) throw new Error(_0x5766c7[_0x27d37e(0x246)]);
    return this[_0x27d37e(0x23f)](_0x20591e);
  }
  [_0x2f3adf(0x23f)](_0x479ffc) {
    const _0x373515 = _0x2f3adf,
      _0x59909c = {
        JxwTf: _0x373515(0x1d6) + _0x373515(0x19e),
        nTTbf: _0x373515(0x247),
        uWIPT: _0x373515(0x19f) + _0x373515(0x1c9),
      };
    if (!_0x479ffc) throw new Error(_0x59909c[_0x373515(0x196)]);
    switch (_0x479ffc[_0x373515(0x1e6)]) {
      case _0x59909c[_0x373515(0x1fa)]:
        return _0x479ffc[_0x373515(0x243)];
      case _0x59909c[_0x373515(0x25e)]:
        const _0x282137 = this[_0x373515(0x23f)](_0x479ffc[_0x373515(0x25d)]),
          _0x15cb9c = this[_0x373515(0x23f)](_0x479ffc[_0x373515(0x259)]);
        return this[_0x373515(0x255) + _0x373515(0x262)](
          _0x479ffc[_0x373515(0x23a)],
          _0x282137,
          _0x15cb9c
        );
      default:
        throw new Error(
          _0x373515(0x1aa) + _0x373515(0x19a) + _0x479ffc[_0x373515(0x1e6)]
        );
    }
  }
  [_0x2f3adf(0x255) + _0x2f3adf(0x262)](_0x4ab4cc, _0x451ff8, _0x5c1d06) {
    const _0x41a6d5 = _0x2f3adf,
      _0x51ab11 = {
        LVYwy: function (_0x48f278, _0x2e0281) {
          return _0x48f278 + _0x2e0281;
        },
        ZDGTi: function (_0x1aea44, _0x4f3468) {
          return _0x1aea44 - _0x4f3468;
        },
        kjgXj: function (_0x39a8c9, _0x2dbce7) {
          return _0x39a8c9 * _0x2dbce7;
        },
        BodPE: function (_0x3eff4e, _0x2a297e) {
          return _0x3eff4e / _0x2a297e;
        },
      };
    switch (_0x4ab4cc) {
      case '+':
        return _0x51ab11[_0x41a6d5(0x260)](_0x451ff8, _0x5c1d06);
      case '-':
        return _0x51ab11[_0x41a6d5(0x23b)](_0x451ff8, _0x5c1d06);
      case '*':
        return _0x51ab11[_0x41a6d5(0x269)](_0x451ff8, _0x5c1d06);
      case '/':
        return _0x51ab11[_0x41a6d5(0x1c7)](_0x451ff8, _0x5c1d06);
      default:
        throw new Error(_0x41a6d5(0x1ef) + _0x41a6d5(0x1a4) + _0x4ab4cc);
    }
  }
}
function convertToBanglaDigits(_0xfb1b6a) {
  const _0x3a8b29 = _0x2f3adf;
  return _0xfb1b6a[_0x3a8b29(0x1d1)]()[_0x3a8b29(0x1ab)](
    /\d/g,
    _0x590884 => _0x3a8b29(0x1af)[_0x590884]
  );
}
function evaluateBanglaExpression(_0x83940) {
  const _0x525e7 = _0x2f3adf,
    _0x4c0df4 = {
      rrLIH: _0x525e7(0x220),
      lpWQw: _0x525e7(0x191),
      ftckg: function (_0x2a0f03, _0x570fbd) {
        return _0x2a0f03(_0x570fbd);
      },
      rjgVW: _0x525e7(0x22e),
    };
  try {
    const _0x3f6b0a = new Lexer(_0x83940),
      _0x324a26 = _0x3f6b0a[_0x525e7(0x204)]();
    console[_0x525e7(0x208)](_0x4c0df4[_0x525e7(0x1de)], _0x324a26);
    const _0x595bd4 = new Parser(_0x324a26),
      _0x156e90 = _0x595bd4[_0x525e7(0x244)]();
    console[_0x525e7(0x208)](
      _0x4c0df4[_0x525e7(0x216)],
      JSON[_0x525e7(0x1e3)](
        _0x156e90,
        null,
        0xc * 0x31c + 0x853 + 0x2da1 * -0x1
      )
    );
    const _0x2984b1 = new Interpreter(),
      _0x342d3f = _0x2984b1[_0x525e7(0x268)](_0x156e90),
      _0x2a07a7 = _0x4c0df4[_0x525e7(0x1f0)](convertToBanglaDigits, _0x342d3f);
    return console[_0x525e7(0x208)](_0x2a07a7), _0x2a07a7;
  } catch (_0x306a83) {
    return (
      console[_0x525e7(0x1e1)](
        _0x4c0df4[_0x525e7(0x1a8)],
        _0x306a83[_0x525e7(0x210)]
      ),
      _0x525e7(0x1c3) + _0x306a83[_0x525e7(0x210)]
    );
  }
}
function highlightKeywords(_0x4b68f) {
  const _0x2cd64b = _0x2f3adf,
    _0x4c4793 = {
      kfXHO: _0x2cd64b(0x1ad),
      FdSck: _0x2cd64b(0x1cd),
      TMqnC: _0x2cd64b(0x18f),
      AbYFY: _0x2cd64b(0x1a5),
      UrctC: _0x2cd64b(0x1c1),
    },
    _0x4950ff = [
      _0x4c4793[_0x2cd64b(0x1a7)],
      _0x4c4793[_0x2cd64b(0x22d)],
      _0x4c4793[_0x2cd64b(0x25a)],
      _0x4c4793[_0x2cd64b(0x223)],
      _0x4c4793[_0x2cd64b(0x253)],
    ];
  return (
    _0x4950ff[_0x2cd64b(0x21c)](_0x8d3ae => {
      const _0x3b17cc = _0x2cd64b,
        _0x3435c2 = new RegExp(_0x8d3ae, 'g');
      _0x4b68f = _0x4b68f[_0x3b17cc(0x1ab)](
        _0x3435c2,
        _0xf9ae0b =>
          _0x3b17cc(0x241) +
          _0x3b17cc(0x237) +
          _0x3b17cc(0x1ce) +
          _0xf9ae0b +
          _0x3b17cc(0x22b)
      );
    }),
    _0x4b68f
  );
}
function _0x17f5() {
  const _0x503681 = [
    '\x20\x20\x20\x20\x20\x20\x20\x20</',
    '166059lhKyec',
    'ul>\x0a\x20\x20\x20\x20\x20\x20',
    'oPtXA',
    'ById',
    'পরিষ্কার',
    'toLocaleSt',
    'Error:\x20',
    'e\x20-\x20Show\x20c',
    '510732PdvIml',
    'trim',
    'BodPE',
    '>Evaluate\x20',
    'ession',
    'KkXBT',
    'push',
    'e\x22>help\x20-\x20',
    'বিয়োগ',
    'ht-red\x22>',
    '\x20Clear\x20the',
    'ble\x20comman',
    'toString',
    'ou\x20are\x20the',
    'tokens',
    'selectNode',
    'nal-respon',
    'Node\x20is\x20un',
    'ssage</li>',
    'ression.',
    '244006ZCKzHi',
    'xucDy',
    'ring',
    'zPDae',
    'Unexpected',
    'rrLIH',
    'peek',
    'keydown',
    'error',
    'input',
    'stringify',
    'length',
    'terminal-r',
    'type',
    'createRang',
    'szuEr',
    'SksMp',
    '</li>\x0a\x20\x20\x20\x20',
    'removeAllR',
    'is\x20help\x20me',
    'terminal-o',
    'rminal-res',
    'Unknown\x20op',
    'ftckg',
    'factor',
    '\x20\x20\x20\x20\x20\x20\x20<li',
    'RPAREN',
    'Enter',
    'scrollTop',
    'VMLqQ',
    'Expect\x20\x27)\x27',
    'stener',
    'XQnNY',
    'nTTbf',
    '459055vewjKi',
    'insertAdja',
    '\x20\x20<li\x20clas',
    '=\x22terminal',
    '\x20terminal<',
    'e\x22>clear\x20-',
    'previous',
    'help',
    'hwmzw',
    'lex',
    'key',
    'াধীন:~$\x20',
    'focus',
    'log',
    'TjVmA',
    '\x20\x20\x20\x20\x20<p\x20cl',
    'terminal-i',
    'EOF',
    '<p\x20class=\x22',
    'rkRfM',
    'indexOf',
    'message',
    'ss=\x22termin',
    'esponse\x22>',
    'DEKss',
    '\x20token:\x20',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'lpWQw',
    'urrent\x20use',
    'LPAREN',
    'beforeend',
    'whoami',
    '1068219EdTWzI',
    'forEach',
    '30CJufGg',
    'innerHTML',
    'l-response',
    'Tokens:',
    'EDduI',
    'centHTML',
    'AbYFY',
    'getElement',
    'li>\x0a\x20\x20\x20\x20\x20\x20',
    'irIwh',
    'CmtPu',
    'nput',
    'ekqtT',
    'match',
    '</span>',
    '\x22>whoami\x20-',
    'FdSck',
    'Error:',
    'pression</',
    'preventDef',
    'efined.',
    'current',
    'vOObm',
    '-response\x22',
    'r</li>\x0a\x20\x20\x20',
    '/li>\x0a\x20\x20\x20\x20\x20',
    's=\x22highlig',
    'Qhkcp',
    'RDZAA',
    'operator',
    'ZDGTi',
    'scrollHeig',
    'exec',
    'ass=\x22termi',
    'evaluate',
    'consume',
    '<span\x20clas',
    '\x20<li\x20class',
    'value',
    'parse',
    '377061ewVtuS',
    'AdwgY',
    'Literal',
    'UJwDp',
    '</p>',
    '\x20\x20<ul\x20clas',
    'DOMContent',
    '56eELlNh',
    'FrObJ',
    'DuUNi',
    'ds:</p>\x0a\x20\x20',
    'lbAgD',
    'al-respons',
    'isAtEnd',
    'UrctC',
    'Display\x20th',
    'applyOpera',
    'terminal-p',
    'collapse',
    'Loaded',
    'right',
    'TMqnC',
    'Bengali\x20ex',
    'ministrato',
    'left',
    'uWIPT',
    'rompt\x22>স্ব',
    'LVYwy',
    'addEventLi',
    'tor',
    'r.</p>',
    '\x20class=\x22te',
    'RdFnz',
    'sc\x20list-in',
    'urrent\x20dat',
    'interpret',
    'kjgXj',
    '773644FjmIJK',
    'ponse\x22>dat',
    'JxJZu',
    '\x20system\x20ad',
    'date',
    'DwVUf',
    'addRange',
    'getSelecti',
    'check',
    '\x20\x20\x20\x20\x20\x20',
    'advance',
    'গুণ',
    'e\x20and\x20time',
    'AST:',
    'Contents',
    '\x20Display\x20c',
    'dCZCj',
    'OPERATOR',
    'JxwTf',
    '\x20\x20\x20<li\x20cla',
    'side\x22>\x0a\x20\x20\x20',
    'se\x22>Availa',
    'de\x20type:\x20',
    'ault',
    'XlwZl',
    'expression',
    'defined.',
    'BinaryExpr',
    'CuznW',
    'NUMBER',
    'fXjgB',
    'toLowerCas',
    'erator:\x20',
    'ভাগ',
    'gVTmU',
    'kfXHO',
    'rjgVW',
    '\x20after\x20exp',
    'Unknown\x20no',
    'replace',
    'wLjPQ',
    'যোগ',
    'CwcfJ',
    '০১২৩৪৫৬৭৮৯',
    'utput',
    'WsGNF',
    's=\x22list-di',
    'term',
    'test',
    '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'esponse\x22>Y',
    'innerText',
    'anges',
    'AST\x20is\x20und',
    's=\x22termina',
    'WOGWV',
  ];
  _0x17f5 = function () {
    return _0x503681;
  };
  return _0x17f5();
}
function _0x24a0(_0x878151, _0x43d91b) {
  const _0x298ab9 = _0x17f5();
  return (
    (_0x24a0 = function (_0x5e09d9, _0x27cb64) {
      _0x5e09d9 = _0x5e09d9 - (0x112b + -0x1b92 + 0xbed);
      let _0x53b77c = _0x298ab9[_0x5e09d9];
      return _0x53b77c;
    }),
    _0x24a0(_0x878151, _0x43d91b)
  );
}
document[_0x2f3adf(0x261) + _0x2f3adf(0x1f8)](
  _0x2f3adf(0x24b) + _0x2f3adf(0x258),
  function () {
    const _0x3c14af = _0x2f3adf,
      _0x3e05cd = {
        XQnNY: _0x3c14af(0x202),
        FrObJ: _0x3c14af(0x188),
        Qhkcp: _0x3c14af(0x21a),
        JxJZu: _0x3c14af(0x1c1),
        CmtPu: function (_0x35f9fc, _0x42e2e7) {
          return _0x35f9fc(_0x42e2e7);
        },
        EDduI: _0x3c14af(0x219),
        UJwDp: function (_0x11f31f, _0x58346b) {
          return _0x11f31f === _0x58346b;
        },
        VMLqQ: _0x3c14af(0x1f4),
        irIwh: function (_0x24f95a, _0x41ce81) {
          return _0x24f95a(_0x41ce81);
        },
        xucDy: function (_0x5ec8f2, _0x208652) {
          return _0x5ec8f2(_0x208652);
        },
        DuUNi: function (_0x7a625f, _0x102481) {
          return _0x7a625f(_0x102481);
        },
        XlwZl: _0x3c14af(0x1ed) + _0x3c14af(0x1b0),
        WOGWV: _0x3c14af(0x20b) + _0x3c14af(0x228),
        dCZCj: _0x3c14af(0x1e0),
        fXjgB: _0x3c14af(0x1e2),
      },
      _0x14f062 = document[_0x3c14af(0x224) + _0x3c14af(0x1c0)](
        _0x3e05cd[_0x3c14af(0x19c)]
      ),
      _0x4f8341 = document[_0x3c14af(0x224) + _0x3c14af(0x1c0)](
        _0x3e05cd[_0x3c14af(0x1bb)]
      );
    _0x4f8341[_0x3c14af(0x207)]();
    function _0x6af7cb(_0x4a0e4d) {
      const _0x87a416 = _0x3c14af,
        _0x2a9e98 = _0x4a0e4d[_0x87a416(0x1c6)]()[_0x87a416(0x1a3) + 'e']();
      let _0x7a3f1a = '';
      switch (_0x2a9e98) {
        case _0x3e05cd[_0x87a416(0x1f9)]:
          _0x7a3f1a =
            _0x87a416(0x215) +
            _0x87a416(0x20a) +
            _0x87a416(0x23e) +
            _0x87a416(0x1d5) +
            _0x87a416(0x199) +
            _0x87a416(0x1d0) +
            _0x87a416(0x24f) +
            _0x87a416(0x1b5) +
            _0x87a416(0x24a) +
            _0x87a416(0x1b2) +
            _0x87a416(0x266) +
            _0x87a416(0x198) +
            _0x87a416(0x1b5) +
            _0x87a416(0x197) +
            _0x87a416(0x211) +
            _0x87a416(0x251) +
            _0x87a416(0x1cc) +
            _0x87a416(0x254) +
            _0x87a416(0x1ec) +
            _0x87a416(0x1d7) +
            _0x87a416(0x215) +
            _0x87a416(0x1f2) +
            _0x87a416(0x264) +
            _0x87a416(0x1ee) +
            _0x87a416(0x26b) +
            _0x87a416(0x1c4) +
            _0x87a416(0x267) +
            _0x87a416(0x190) +
            _0x87a416(0x1ea) +
            _0x87a416(0x1b5) +
            _0x87a416(0x1fd) +
            _0x87a416(0x1ba) +
            _0x87a416(0x21f) +
            _0x87a416(0x22c) +
            _0x87a416(0x193) +
            _0x87a416(0x217) +
            _0x87a416(0x235) +
            _0x87a416(0x1b5) +
            _0x87a416(0x197) +
            _0x87a416(0x211) +
            _0x87a416(0x251) +
            _0x87a416(0x200) +
            _0x87a416(0x1cf) +
            _0x87a416(0x1ff) +
            _0x87a416(0x236) +
            _0x87a416(0x1b5) +
            _0x87a416(0x242) +
            _0x87a416(0x1fe) +
            _0x87a416(0x234) +
            _0x87a416(0x1c8) +
            _0x87a416(0x25b) +
            _0x87a416(0x22f) +
            _0x87a416(0x225) +
            _0x87a416(0x1bc) +
            _0x87a416(0x1be) +
            _0x87a416(0x18d);
          break;
        case _0x3e05cd[_0x87a416(0x24d)]:
          _0x7a3f1a =
            _0x87a416(0x20d) +
            _0x87a416(0x1e5) +
            _0x87a416(0x212) +
            new Date()[_0x87a416(0x1c2) + _0x87a416(0x1db)]() +
            _0x87a416(0x249);
          break;
        case _0x3e05cd[_0x87a416(0x238)]:
          _0x7a3f1a =
            _0x87a416(0x20d) +
            _0x87a416(0x1e5) +
            _0x87a416(0x1b6) +
            _0x87a416(0x1d2) +
            _0x87a416(0x187) +
            _0x87a416(0x25c) +
            _0x87a416(0x263);
          break;
        case _0x3e05cd[_0x87a416(0x186)]:
          (_0x14f062[_0x87a416(0x21e)] = ''),
            (_0x4f8341[_0x87a416(0x21e)] = '');
          return;
        default:
          _0x7a3f1a =
            _0x87a416(0x20d) +
            _0x87a416(0x1e5) +
            _0x87a416(0x212) +
            _0x3e05cd[_0x87a416(0x227)](evaluateBanglaExpression, _0x2a9e98) +
            _0x87a416(0x249);
      }
      _0x14f062[_0x87a416(0x1fc) + _0x87a416(0x222)](
        _0x3e05cd[_0x87a416(0x221)],
        _0x7a3f1a
      ),
        (_0x14f062[_0x87a416(0x1f5)] = _0x14f062[_0x87a416(0x23c) + 'ht']),
        (_0x4f8341[_0x87a416(0x21e)] = '');
    }
    _0x4f8341[_0x3c14af(0x261) + _0x3c14af(0x1f8)](
      _0x3e05cd[_0x3c14af(0x194)],
      function (_0x25c3f7) {
        const _0x3bfda7 = _0x3c14af;
        if (
          _0x3e05cd[_0x3bfda7(0x248)](
            _0x25c3f7[_0x3bfda7(0x205)],
            _0x3e05cd[_0x3bfda7(0x1f6)]
          )
        ) {
          _0x25c3f7[_0x3bfda7(0x230) + _0x3bfda7(0x19b)]();
          const _0x3889e4 = _0x4f8341[_0x3bfda7(0x1b7)],
            _0xdb3132 = _0x3e05cd[_0x3bfda7(0x226)](
              highlightKeywords,
              _0x3889e4
            );
          _0x14f062[_0x3bfda7(0x1fc) + _0x3bfda7(0x222)](
            _0x3e05cd[_0x3bfda7(0x221)],
            _0x3bfda7(0x20d) +
              _0x3bfda7(0x256) +
              _0x3bfda7(0x25f) +
              _0x3bfda7(0x206) +
              _0xdb3132 +
              _0x3bfda7(0x249)
          ),
            _0x3e05cd[_0x3bfda7(0x1da)](_0x6af7cb, _0x3889e4);
        }
      }
    ),
      _0x4f8341[_0x3c14af(0x261) + _0x3c14af(0x1f8)](
        _0x3e05cd[_0x3c14af(0x1a2)],
        function () {
          const _0x120ec8 = _0x3c14af,
            _0x2e8408 = _0x4f8341[_0x120ec8(0x1b7)],
            _0x471816 = _0x3e05cd[_0x120ec8(0x24e)](
              highlightKeywords,
              _0x2e8408
            );
          _0x4f8341[_0x120ec8(0x21e)] = _0x471816;
          const _0x12a0ce = document[_0x120ec8(0x1e7) + 'e'](),
            _0x589911 = window[_0x120ec8(0x18b) + 'on']();
          _0x12a0ce[_0x120ec8(0x1d4) + _0x120ec8(0x192)](_0x4f8341),
            _0x12a0ce[_0x120ec8(0x257)](![]),
            _0x589911[_0x120ec8(0x1eb) + _0x120ec8(0x1b8)](),
            _0x589911[_0x120ec8(0x18a)](_0x12a0ce);
        }
      );
  }
);
