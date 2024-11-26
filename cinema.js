(function () {
  'use strict';

  Lampa.Platform.tv();
  (function () {
    var _0x1209b3 = function () {
      var _0x21b0d5 = true;
      return function (_0x2454ad, _0x5ded99) {
        var _0x54bf91 = _0x21b0d5 ? function () {
          if (_0x5ded99) {
            var _0x2786aa = _0x5ded99.apply(_0x2454ad, arguments);
            _0x5ded99 = null;
            return _0x2786aa;
          }
        } : function () {};
        _0x21b0d5 = false;
        return _0x54bf91;
      };
    }();
    var _0x3c7144 = function () {
      var _0x135fb9 = true;
      return function (_0x376e24, _0x265f07) {
        var _0x10718d = _0x135fb9 ? function () {
          if (_0x265f07) {
            var _0x1ccde0 = _0x265f07.apply(_0x376e24, arguments);
            _0x265f07 = null;
            return _0x1ccde0;
          }
        } : function () {};
        _0x135fb9 = false;
        return _0x10718d;
      };
    }();
    'use strict';
    var _0x3caf4d = Lampa.Reguest;
    function _0xf3da2c(_0x4f5135) {
      var _0x284069 = new _0x3caf4d();
      var _0xe97847 = new Lampa.Scroll({
        'mask': true,
        'over': true
      });
      var _0x7b0bcb = new Lampa.Explorer(_0x4f5135);
      var _0xeda6bc = new Lampa.Filter(_0x4f5135);
      var _0x6617b0 = {};
      var _0x2b576b;
      var _0x180be6;
      var _0xa4f4c3;
      var _0x264ec8;
      var _0x23e8e0;
      var _0x2d60cc = [];
      var _0x3b3e35 = 0x0;
      var _0x226b52;
      var _0x5329df = 0x0;
      var _0x4db9cc;
      var _0x4b2512;
      var _0x408fb9;
      var _0x1b135f = {};
      var _0x32fe83 = {
        'season': Lampa.Lang.translate("torrent_serial_season"),
        'voice': Lampa.Lang.translate("torrent_parser_voice"),
        'source': Lampa.Lang.translate("settings_rest_source")
      };
      var _0x26be41 = {
        'season': [],
        'voice': []
      };
      var _0x21a640 = ["eneyida", "seasonvar", 'lostfilmhd', 'kinotochka', "kinopub", "kinoprofi", "kinokrad", "kinobase", 'filmix', "redheadsound", "animevost", "animego", "animedia", "animebesst", "anilibria", "rezka", "kodik", 'remux'];
      function _0x497edb(_0x59aefb) {
        _0x59aefb = _0x59aefb + '';
        if (_0x59aefb.indexOf("account_email") == -0x1) {
          var _0x343f2c = Lampa.Storage.get("account_email");
          if (_0x343f2c) {
            _0x59aefb = Lampa.Utils.addUrlComponent(_0x59aefb, "account_email=" + encodeURIComponent(_0x343f2c));
          }
        }
        return _0x59aefb;
      }
      function _0x10293e(_0x125a48) {
        var _0x543ea8 = _0x125a48.balanser;
        var _0x17075a = _0x125a48.name.split(" ")[0x0];
        return (_0x543ea8 || _0x17075a).toLowerCase();
      }
      this.initialize = function () {
        var _0x17b7b6 = this;
        this.loading(true);
        _0xeda6bc.onSearch = function (_0x92f266) {
          Lampa.Activity.replace({
            'search': _0x92f266,
            'clarification': true
          });
        };
        _0xeda6bc.onBack = function () {
          _0x17b7b6.start();
        };
        _0xeda6bc.render().find(".selector").on("hover:enter", function () {
          clearInterval(_0x23e8e0);
        });
        _0xeda6bc.render().find(".filter--search").appendTo(_0xeda6bc.render().find(".torrent-filter"));
        _0xeda6bc.onSelect = function (_0x10b5aa, _0x53eac6, _0x20cbd7) {
          if (_0x10b5aa == "filter") {
            if (_0x53eac6.reset) {
              _0x17b7b6.replaceChoice({
                'season': 0x0,
                'voice': 0x0,
                'voice_url': '',
                'voice_name': ''
              });
              setTimeout(function () {
                Lampa.Select.close();
                Lampa.Activity.replace();
              }, 0xa);
            } else {
              var _0x5ab2c4 = _0x26be41[_0x53eac6.stype][_0x20cbd7.index].url;
              var _0x138ec3 = _0x17b7b6.getChoice();
              if (_0x53eac6.stype == 'voice') {
                _0x138ec3.voice_name = _0x26be41.voice[_0x20cbd7.index].title;
                _0x138ec3.voice_url = _0x5ab2c4;
              }
              _0x138ec3[_0x53eac6.stype] = _0x20cbd7.index;
              _0x17b7b6.saveChoice(_0x138ec3);
              _0x17b7b6.reset();
              _0x17b7b6.request(_0x5ab2c4);
              setTimeout(Lampa.Select.close, 0xa);
            }
          } else if (_0x10b5aa == "sort") {
            Lampa.Select.close();
            _0x4f5135.lampac_custom_select = _0x53eac6.source;
            _0x17b7b6.changeBalanser(_0x53eac6.source);
          }
        };
        if (_0xeda6bc.addButtonBack) {
          _0xeda6bc.addButtonBack();
        }
        _0xeda6bc.render().find(".filter--sort span").text(Lampa.Lang.translate("lampac_balanser"));
        _0xe97847.body().addClass("torrent-list");
        _0x7b0bcb.appendFiles(_0xe97847.render());
        _0x7b0bcb.appendHead(_0xeda6bc.render());
        _0xe97847.minus(_0x7b0bcb.render().find(".explorer__files-head"));
        _0xe97847.body().append(Lampa.Template.get("lampac_content_loading"));
        Lampa.Controller.enable("content");
        this.loading(false);
        this.externalids().then(function () {
          return _0x17b7b6.createSource();
        }).then(function (_0x534ba6) {
          if (!_0x21a640.find(function (_0x3d0413) {
            return _0xa4f4c3.slice(0x0, _0x3d0413.length) == _0x3d0413;
          })) {
            _0xeda6bc.render().find(".filter--search").addClass('hide');
          }
          _0x17b7b6.search();
        })['catch'](function (_0x29a077) {
          _0x17b7b6.noConnectToServer(_0x29a077);
        });
      };
      this.rch = function (_0x3eafec) {
        var _0x2ef433 = this;
        var _0x453f20 = function _0x2b7f5a() {
          if (_0x4b2512) {
            _0x4b2512.stop();
            _0x4b2512 = null;
          }
          _0x4b2512 = new signalR.HubConnectionBuilder().withUrl(_0x3eafec.ws).build();
          _0x4b2512.on('RchClient', function (_0x19ee88, _0x1269df, _0x4b0585) {
            var _0x27b12d = $("head meta[name=\"referrer\"]").attr('content');
            function _0x58ea4d(_0x41f62a) {
              $("head meta[name=\"referrer\"]").attr('content', _0x27b12d);
              if (Lampa.Arrays.isObject(_0x41f62a) || Lampa.Arrays.isArray(_0x41f62a)) {
                _0x41f62a = JSON.stringify(_0x41f62a);
              }
              _0x284069.silent(_0x3eafec.result, false, false, {
                'id': _0x19ee88,
                'value': _0x41f62a
              }, {
                'dataType': "text"
              });
            }
            $("head meta[name=\"referrer\"]").attr('content', "origin");
            var _0x60427 = _0x1269df.indexOf('cdnmovies') >= 0x0 ? {
              'Origin': 'https://cdnmovies.net',
              'Referer': 'https://cdnmovies.net/'
            } : {};
            _0x284069.native(_0x1269df, _0x58ea4d, function () {
              _0x58ea4d('');
            }, _0x4b0585, {
              'dataType': "text",
              'timeout': 10000,
              'headers': _0x60427
            });
          });
          _0x4b2512.start().then(function () {
            _0x4b2512.invoke('Registry', "rch").then(function () {
              _0x2ef433.find();
            });
          })["catch"](function (_0x1676f9) {
            return console.error(_0x1676f9.toString());
          });
          _0x408fb9 = setTimeout(function () {
            _0x4b2512.stop();
          }, 0x3e8 * _0x3eafec.keepalive);
        };
        if (typeof signalR == 'undefined') {
          Lampa.Utils.putScript(['https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/6.0.1/signalr.js'], function () {}, false, function () {
            _0x453f20();
          }, true);
        } else {
          _0x453f20();
        }
      };
      this.externalids = function () {
        return new Promise(function (_0x298193, _0x471882) {
          if (!_0x4f5135.movie.imdb_id || !_0x4f5135.movie.kinopoisk_id) {
            var _0x4faa23 = [];
            _0x4faa23.push("id=" + _0x4f5135.movie.id);
            _0x4faa23.push("serial=" + (_0x4f5135.movie.name ? 0x1 : 0x0));
            if (_0x4f5135.movie.imdb_id) {
              _0x4faa23.push("imdb_id=" + (_0x4f5135.movie.imdb_id || ''));
            }
            if (_0x4f5135.movie.kinopoisk_id) {
              _0x4faa23.push("kinopoisk_id=" + (_0x4f5135.movie.kinopoisk_id || ''));
            }
            var _0x8dfce5 = "http://185.87.48.42:2601/externalids?" + _0x4faa23.join('&');
            _0x284069.timeout(0x2710);
            _0x284069.silent(_0x497edb(_0x8dfce5), function (_0x5c4e90) {
              for (var _0x1665ec in _0x5c4e90) {
                _0x4f5135.movie[_0x1665ec] = _0x5c4e90[_0x1665ec];
              }
              _0x298193();
            }, function () {
              _0x298193();
            });
          } else {
            _0x298193();
          }
        });
      };
      this.updateBalanser = function (_0x4c0917) {
        var _0x5b3e8e = Lampa.Storage.cache("online_last_balanser", 0xbb8, {});
        _0x5b3e8e[_0x4f5135.movie.id] = _0x4c0917;
        Lampa.Storage.set("online_last_balanser", _0x5b3e8e);
      };
      this.changeBalanser = function (_0x43a8c4) {
        this.updateBalanser(_0x43a8c4);
        Lampa.Storage.set("online_balanser", _0x43a8c4);
        var _0x1505ba = this.getChoice(_0x43a8c4);
        var _0x13449a = this.getChoice();
        if (_0x13449a.voice_name) {
          _0x1505ba.voice_name = _0x13449a.voice_name;
        }
        this.saveChoice(_0x1505ba, _0x43a8c4);
        Lampa.Activity.replace();
      };
      this.requestParams = function (_0xda1649) {
        var _0x80fadd = [];
        var _0xc448c4 = _0x4f5135.movie.source || "tmdb";
        _0x80fadd.push("id=" + _0x4f5135.movie.id);
        if (_0x4f5135.movie.imdb_id) {
          _0x80fadd.push("imdb_id=" + (_0x4f5135.movie.imdb_id || ''));
        }
        if (_0x4f5135.movie.kinopoisk_id) {
          _0x80fadd.push("kinopoisk_id=" + (_0x4f5135.movie.kinopoisk_id || ''));
        }
        _0x80fadd.push("title=" + encodeURIComponent(_0x4f5135.clarification ? _0x4f5135.search : _0x4f5135.movie.title || _0x4f5135.movie.name));
        _0x80fadd.push("original_title=" + encodeURIComponent(_0x4f5135.movie.original_title || _0x4f5135.movie.original_name));
        _0x80fadd.push("serial=" + (_0x4f5135.movie.name ? 0x1 : 0x0));
        _0x80fadd.push("original_language=" + (_0x4f5135.movie.original_language || ''));
        _0x80fadd.push('year=' + ((_0x4f5135.movie.release_date || _0x4f5135.movie.first_air_date || '0000') + '').slice(0x0, 0x4));
        _0x80fadd.push('source=' + _0xc448c4);
        _0x80fadd.push("clarification=" + (_0x4f5135.clarification ? 0x1 : 0x0));
        if (Lampa.Storage.get("account_email", '')) {
          _0x80fadd.push("cub_id=" + Lampa.Utils.hash(Lampa.Storage.get("account_email", '')));
        }
        return _0xda1649 + (_0xda1649.indexOf('?') >= 0x0 ? '&' : '?') + _0x80fadd.join('&');
      };
      this.getLastChoiceBalanser = function () {
        var _0x5f34b2 = Lampa.Storage.cache('online_last_balanser', 0xbb8, {});
        return _0x5f34b2[_0x4f5135.movie.id] ? _0x5f34b2[_0x4f5135.movie.id] : Lampa.Storage.get('online_balanser', _0x1b135f.length ? _0x1b135f[0x0] : '');
      };
      this.startSource = function (_0x19d553) {
        return new Promise(function (_0x536805, _0x491556) {
          _0x19d553.forEach(function (_0x50bee3) {
            var _0x14fd85 = _0x10293e(_0x50bee3);
            _0x6617b0[_0x14fd85] = {
              'url': _0x50bee3.url,
              'name': _0x50bee3.name,
              'show': typeof _0x50bee3.show == "undefined" ? true : _0x50bee3.show
            };
          });
          _0x1b135f = Lampa.Arrays.getKeys(_0x6617b0);
          if (_0x1b135f.length) {
            var _0x26d830 = Lampa.Storage.cache("online_last_balanser", 0xbb8, {});
            if (_0x26d830[_0x4f5135.movie.id]) {
              _0xa4f4c3 = _0x26d830[_0x4f5135.movie.id];
            } else {
              _0xa4f4c3 = Lampa.Storage.get("online_balanser", _0x1b135f[0x0]);
            }
            if (!_0x6617b0[_0xa4f4c3]) {
              _0xa4f4c3 = _0x1b135f[0x0];
            }
            if (!_0x6617b0[_0xa4f4c3].show && !_0x4f5135.lampac_custom_select) {
              _0xa4f4c3 = _0x1b135f[0x0];
            }
            _0x180be6 = _0x6617b0[_0xa4f4c3].url;
            _0x536805(_0x19d553);
          } else {
            _0x491556();
          }
        });
      };
      this.lifeSource = function () {
        var _0x25740f = this;
        return new Promise(function (_0x511944, _0x2c21eb) {
          var _0x45ea09 = _0x25740f.requestParams("http://185.87.48.42:2601/lifeevents");
          var _0x124695 = false;
          var _0x4140d5 = function _0x240ec1(_0xef244a, _0x3157f8) {
            if (_0xef244a.accsdb) {
              return _0x2c21eb(_0xef244a);
            }
            var _0x2e3c4a = _0x25740f.getLastChoiceBalanser();
            if (!_0x124695) {
              var _0x1dfea8 = _0xef244a.online.filter(function (_0x4d5e43) {
                return _0x3157f8 ? _0x4d5e43.show : _0x4d5e43.show && _0x4d5e43.name.toLowerCase() == _0x2e3c4a;
              });
              if (_0x1dfea8.length) {
                _0x124695 = true;
                _0x511944(_0xef244a.online.filter(function (_0x487c38) {
                  return _0x487c38.show;
                }));
              } else if (_0x3157f8) {
                _0x2c21eb();
              }
            }
          };
          var _0x422001 = function _0x1fefdb(_0x39cb94) {
            _0x284069.timeout(0xbb8);
            _0x284069.silent(_0x497edb(_0x45ea09), function (_0x40c4e0) {
              _0x5329df++;
              _0x1b135f = [];
              _0x6617b0 = {};
              _0x40c4e0.online.forEach(function (_0x2a14bf) {
                var _0x2fb81b = _0x10293e(_0x2a14bf);
                _0x6617b0[_0x2fb81b] = {
                  'url': _0x2a14bf.url,
                  'name': _0x2a14bf.name,
                  'show': typeof _0x2a14bf.show == 'undefined' ? true : _0x2a14bf.show
                };
              });
              _0x1b135f = Lampa.Arrays.getKeys(_0x6617b0);
              _0xeda6bc.set("sort", _0x1b135f.map(function (_0x18d8e5) {
                return {
                  'title': _0x6617b0[_0x18d8e5].name,
                  'source': _0x18d8e5,
                  'selected': _0x18d8e5 == _0xa4f4c3,
                  'ghost': !_0x6617b0[_0x18d8e5].show
                };
              }));
              _0xeda6bc.chosen("sort", [_0x6617b0[_0xa4f4c3] ? _0x6617b0[_0xa4f4c3].name : _0xa4f4c3]);
              _0x4140d5(_0x40c4e0);
              var _0x1b3138 = _0x25740f.getLastChoiceBalanser();
              if (_0x5329df > 0xf || _0x40c4e0.ready) {
                _0xeda6bc.render().find(".lampac-balanser-loader").remove();
                _0x4140d5(_0x40c4e0, true);
              } else if (!_0x124695 && _0x6617b0[_0x1b3138] && _0x6617b0[_0x1b3138].show) {
                _0x4140d5(_0x40c4e0, true);
                _0x4db9cc = setTimeout(_0x1fefdb, 0x3e8);
              } else {
                _0x4db9cc = setTimeout(_0x1fefdb, 0x3e8);
              }
            }, function () {
              _0x5329df++;
              if (_0x5329df > 0xf) {
                _0x2c21eb();
              } else {
                _0x4db9cc = setTimeout(_0x1fefdb, 0x3e8);
              }
            });
          };
          _0x422001();
        });
      };
      this.createSource = function () {
        var _0x5d3319 = this;
        return new Promise(function (_0x5c34ea, _0x22d793) {
          var _0x57cff9 = _0x5d3319.requestParams("http://185.87.48.42:2601/lite/events?life=true");
          _0x284069.timeout(0x3a98);
          _0x284069.silent(_0x497edb(_0x57cff9), function (_0x19c346) {
            if (_0x19c346.accsdb) {
              return _0x22d793(_0x19c346);
            }
            if (_0x19c346.life) {
              _0xeda6bc.render().find(".filter--sort").append("<span class=\"lampac-balanser-loader\" style=\"width: 1.2em; height: 1.2em; margin-top: 0; background: url(./img/loader.svg) no-repeat 50% 50%; background-size: contain; margin-left: 0.5em\"></span>");
              _0x5d3319.lifeSource().then(_0x5d3319.startSource).then(_0x5c34ea)["catch"](_0x22d793);
            } else {
              _0x5d3319.startSource(_0x19c346).then(_0x5c34ea)['catch'](_0x22d793);
            }
          }, _0x22d793);
        });
      };
      this.create = function () {
        return this.render();
      };
      this.search = function () {
        this.filter({
          'source': _0x1b135f
        }, this.getChoice());
        this.find();
      };
      this.find = function () {
        this.request(this.requestParams(_0x180be6));
      };
      this.request = function (_0x461f81) {
        _0x3b3e35++;
        if (_0x3b3e35 < 0xa) {
          _0x284069.native(_0x497edb(_0x461f81), this.parse.bind(this), this.doesNotAnswer.bind(this), false, {
            'dataType': "text"
          });
          clearTimeout(_0x226b52);
          _0x226b52 = setTimeout(function () {
            _0x3b3e35 = 0x0;
          }, 0xfa0);
        } else {
          this.empty();
        }
      };
      this.parseJsonDate = function (_0x54de47, _0x596beb) {
        try {
          var _0x55ef5b = $("<div>" + _0x54de47 + "</div>");
          var _0x20cb58 = [];
          _0x55ef5b.find(_0x596beb).each(function () {
            var _0x33173d = $(this);
            var _0x4b36c5 = JSON.parse(_0x33173d.attr("data-json"));
            var _0x18c8f0 = _0x33173d.attr('s');
            var _0xad253f = _0x33173d.attr('e');
            var _0x554068 = _0x33173d.text();
            if (!_0x4f5135.movie.name) {
              if (_0x554068.match(/\d+p/i)) {
                if (!_0x4b36c5.quality) {
                  _0x4b36c5.quality = {};
                  _0x4b36c5.quality[_0x554068] = _0x4b36c5.url;
                }
                _0x554068 = _0x4f5135.movie.title;
              }
              if (_0x554068 == "По умолчанию") {
                _0x554068 = _0x4f5135.movie.title;
              }
            }
            if (_0xad253f) {
              _0x4b36c5.episode = parseInt(_0xad253f);
            }
            if (_0x18c8f0) {
              _0x4b36c5.season = parseInt(_0x18c8f0);
            }
            if (_0x554068) {
              _0x4b36c5.text = _0x554068;
            }
            _0x4b36c5.active = _0x33173d.hasClass("active");
            _0x20cb58.push(_0x4b36c5);
          });
          return _0x20cb58;
        } catch (_0x33674c) {
          return [];
        }
      };
      this.getFileUrl = function (_0xf3bd37, _0x60002e) {
        if (_0xf3bd37.method == "play") {
          _0x60002e(_0xf3bd37, {});
        } else {
          Lampa.Loading.start(function () {
            Lampa.Loading.stop();
            Lampa.Controller.toggle("content");
            _0x284069.clear();
          });
          _0x284069.native(_0x497edb(_0xf3bd37.url), function (_0x2b1880) {
            Lampa.Loading.stop();
            _0x60002e(_0x2b1880, _0x2b1880);
          }, function () {
            Lampa.Loading.stop();
            _0x60002e(false, {});
          });
        }
      };
      this.toPlayElement = function (_0xcf55bc) {
        var _0x102615 = {
          'title': _0xcf55bc.title,
          'url': _0xcf55bc.url,
          'quality': _0xcf55bc.qualitys,
          'timeline': _0xcf55bc.timeline,
          'subtitles': _0xcf55bc.subtitles,
          'callback': _0xcf55bc.mark
        };
        return _0x102615;
      };
      this.appendAPN = function (_0x2e041d) {
        if ('lampac'.indexOf("pwa") == 0x0 && "https://apn.watch/".length && _0x2e041d.url && typeof _0x2e041d.url == "string" && _0x2e041d.url.indexOf("https://apn.watch/") == -0x1) {
          _0x2e041d.url_reserve = "https://apn.watch/" + _0x2e041d.url;
        }
      };
      this.setDefaultQuality = function (_0x51e9ce) {
        if (Lampa.Arrays.getKeys(_0x51e9ce.quality).length) {
          for (var _0x328c3a in _0x51e9ce.quality) {
            if (parseInt(_0x328c3a) == Lampa.Storage.field("video_quality_default")) {
              _0x51e9ce.url = _0x51e9ce.quality[_0x328c3a];
              this.appendAPN(_0x51e9ce);
              break;
            }
          }
        }
      };
      this.display = function (_0x55dbc8) {
        var _0x21bd2b = this;
        this.draw(_0x55dbc8, {
          'onEnter': function _0x2bdd3a(_0x55a055, _0x489b6b) {
            _0x21bd2b.getFileUrl(_0x55a055, function (_0x5a9020, _0x42066d) {
              if (_0x5a9020 && _0x5a9020.url) {
                var _0x460432 = [];
                var _0x1ad712 = _0x21bd2b.toPlayElement(_0x55a055);
                _0x1ad712.url = _0x5a9020.url;
                _0x1ad712.quality = _0x42066d.quality || _0x55a055.qualitys;
                _0x1ad712.subtitles = _0x5a9020.subtitles;
                _0x21bd2b.appendAPN(_0x1ad712);
                _0x21bd2b.setDefaultQuality(_0x1ad712);
                if (_0x55a055.season) {
                  _0x55dbc8.forEach(function (_0x531a23) {
                    var _0x5b534c = _0x21bd2b.toPlayElement(_0x531a23);
                    if (_0x531a23 == _0x55a055) {
                      _0x5b534c.url = _0x5a9020.url;
                    } else if (_0x531a23.method == "call") {
                      if (Lampa.Platform.is("android") && Lampa.Storage.field("player") == "android") {
                        _0x5b534c.url = _0x531a23.stream;
                      } else {
                        _0x5b534c.url = function (_0xeb6443) {
                          _0x21bd2b.getFileUrl(_0x531a23, function (_0x36fb4b, _0x3be9c2) {
                            if (_0x36fb4b.url) {
                              _0x5b534c.url = _0x36fb4b.url;
                              _0x5b534c.quality = _0x3be9c2.quality || _0x531a23.qualitys;
                              _0x5b534c.subtitles = _0x36fb4b.subtitles;
                              _0x21bd2b.appendAPN(_0x5b534c);
                              _0x21bd2b.setDefaultQuality(_0x5b534c);
                              _0x531a23.mark();
                            } else {
                              _0x5b534c.url = '';
                              Lampa.Noty.show(Lampa.Lang.translate("lampac_nolink"));
                            }
                            _0xeb6443();
                          }, function () {
                            _0x5b534c.url = '';
                            _0xeb6443();
                          });
                        };
                      }
                    } else {
                      _0x5b534c.url = _0x531a23.url;
                    }
                    _0x21bd2b.appendAPN(_0x5b534c);
                    _0x21bd2b.setDefaultQuality(_0x5b534c);
                    _0x460432.push(_0x5b534c);
                  });
                } else {
                  _0x460432.push(_0x1ad712);
                }
                if (_0x460432.length > 0x1) {
                  _0x1ad712.playlist = _0x460432;
                }
                if (_0x1ad712.url) {
                  Lampa.Player.play(_0x1ad712);
                  Lampa.Player.playlist(_0x460432);
                  _0x55a055.mark();
                  _0x21bd2b.updateBalanser(_0xa4f4c3);
                } else {
                  Lampa.Noty.show(Lampa.Lang.translate('lampac_nolink'));
                }
              } else {
                Lampa.Noty.show(Lampa.Lang.translate("lampac_nolink"));
              }
            }, true);
          },
          'onContextMenu': function _0x1dc089(_0x4f00bc, _0x56b138, _0x28946e, _0x427d8c) {
            _0x21bd2b.getFileUrl(_0x4f00bc, function (_0xe3a3a7) {
              _0x427d8c({
                'file': _0xe3a3a7.url,
                'quality': _0x4f00bc.qualitys
              });
            }, true);
          }
        });
        this.filter({
          'season': _0x26be41.season.map(function (_0x3e7979) {
            return _0x3e7979.title;
          }),
          'voice': _0x26be41.voice.map(function (_0xfc2bdb) {
            return _0xfc2bdb.title;
          })
        }, this.getChoice());
      };
      this.parse = function (_0xb8b241) {
        var _0x18677e = Lampa.Arrays.decodeJson(_0xb8b241, {});
        if (Lampa.Arrays.isObject(_0xb8b241) && _0xb8b241.rch) {
          _0x18677e = _0xb8b241;
        }
        if (_0x18677e.rch) {
          return this.rch(_0x18677e);
        }
        try {
          var _0x54cdc6 = this.parseJsonDate(_0xb8b241, ".videos__item");
          var _0x9a52a9 = this.parseJsonDate(_0xb8b241, '.videos__button');
          if (_0x54cdc6.length == 0x1 && _0x54cdc6[0x0].method == "link" && !_0x54cdc6[0x0].similar) {
            _0x26be41.season = _0x54cdc6.map(function (_0xb4b02c) {
              return {
                'title': _0xb4b02c.text,
                'url': _0xb4b02c.url
              };
            });
            this.replaceChoice({
              'season': 0x0
            });
            this.request(_0x54cdc6[0x0].url);
          } else {
            this.activity.loader(false);
            var _0x248a00 = _0x54cdc6.filter(function (_0x2e4282) {
              return _0x2e4282.method == "play" || _0x2e4282.method == 'call';
            });
            var _0x59f7b7 = _0x54cdc6.filter(function (_0x36fc56) {
              return _0x36fc56.similar;
            });
            if (_0x248a00.length) {
              if (_0x9a52a9.length) {
                _0x26be41.voice = _0x9a52a9.map(function (_0x3649d7) {
                  return {
                    'title': _0x3649d7.text,
                    'url': _0x3649d7.url
                  };
                });
                var _0x4af213 = this.getChoice(_0xa4f4c3).voice_url;
                var _0x1ff8bd = this.getChoice(_0xa4f4c3).voice_name;
                var _0x10d142 = _0x9a52a9.find(function (_0x3642e4) {
                  return _0x3642e4.url == _0x4af213;
                });
                var _0x310fe5 = _0x9a52a9.find(function (_0x473c38) {
                  return _0x473c38.text == _0x1ff8bd;
                });
                var _0x4d9842 = _0x9a52a9.find(function (_0x590a83) {
                  return _0x590a83.active;
                });
                if (_0x10d142 && !_0x10d142.active) {
                  console.log("Lampac", "go to voice", _0x10d142);
                  this.replaceChoice({
                    'voice': _0x9a52a9.indexOf(_0x10d142),
                    'voice_name': _0x10d142.text
                  });
                  this.request(_0x10d142.url);
                } else if (_0x310fe5 && !_0x310fe5.active) {
                  console.log("Lampac", "go to voice", _0x310fe5);
                  this.replaceChoice({
                    'voice': _0x9a52a9.indexOf(_0x310fe5),
                    'voice_name': _0x310fe5.text
                  });
                  this.request(_0x310fe5.url);
                } else {
                  if (_0x4d9842) {
                    this.replaceChoice({
                      'voice': _0x9a52a9.indexOf(_0x4d9842),
                      'voice_name': _0x4d9842.text
                    });
                  }
                  this.display(_0x248a00);
                }
              } else {
                this.replaceChoice({
                  'voice': 0x0,
                  'voice_url': '',
                  'voice_name': ''
                });
                this.display(_0x248a00);
              }
            } else {
              if (_0x54cdc6.length) {
                if (_0x59f7b7.length) {
                  this.similars(_0x59f7b7);
                  this.activity.loader(false);
                } else {
                  _0x26be41.season = _0x54cdc6.map(function (_0x165051) {
                    return {
                      'title': _0x165051.text,
                      'url': _0x165051.url
                    };
                  });
                  var _0x2fa7ca = this.getChoice(_0xa4f4c3).season;
                  var _0x5e0cdd = _0x26be41.season[_0x2fa7ca];
                  if (!_0x5e0cdd) {
                    _0x5e0cdd = _0x26be41.season[0x0];
                  }
                  console.log("Lampac", "go to season", _0x5e0cdd);
                  this.request(_0x5e0cdd.url);
                }
              } else {
                this.doesNotAnswer();
              }
            }
          }
        } catch (_0x3175af) {
          console.log("Lampac", "error", _0x3175af.stack);
          this.doesNotAnswer();
        }
      };
      this.similars = function (_0x27db0f) {
        var _0x3332be = this;
        _0xe97847.clear();
        _0x27db0f.forEach(function (_0x55320c) {
          _0x55320c.title = _0x55320c.text;
          _0x55320c.info = '';
          var _0x1a8d7c = [];
          var _0x4f6c25 = ((_0x55320c.start_date || _0x55320c.year || _0x4f5135.movie.release_date || _0x4f5135.movie.first_air_date || '') + '').slice(0x0, 0x4);
          if (_0x4f6c25) {
            _0x1a8d7c.push(_0x4f6c25);
          }
          if (_0x55320c.details) {
            _0x1a8d7c.push(_0x55320c.details);
          }
          var _0x20c1cc = _0x55320c.title || _0x55320c.text;
          _0x55320c.title = _0x20c1cc;
          _0x55320c.time = _0x55320c.time || '';
          _0x55320c.info = _0x1a8d7c.join("<span class=\"online-prestige-split\">●</span>");
          var _0x7de5d1 = Lampa.Template.get("lampac_prestige_folder", _0x55320c);
          _0x7de5d1.on("hover:enter", function () {
            _0x3332be.reset();
            _0x3332be.request(_0x55320c.url);
          }).on("hover:focus", function (_0x138700) {
            _0x2b576b = _0x138700.target;
            _0xe97847.update($(_0x138700.target), true);
          });
          _0xe97847.append(_0x7de5d1);
        });
        this.filter({
          'season': _0x26be41.season.map(function (_0x4ea20e) {
            return _0x4ea20e.title;
          }),
          'voice': _0x26be41.voice.map(function (_0x14aeba) {
            return _0x14aeba.title;
          })
        }, this.getChoice());
        Lampa.Controller.enable("content");
      };
      this.getChoice = function (_0x5629de) {
        var _0x50fabf = Lampa.Storage.cache("online_choice_" + (_0x5629de || _0xa4f4c3), 0xbb8, {});
        var _0x4a7fcc = _0x50fabf[_0x4f5135.movie.id] || {};
        Lampa.Arrays.extend(_0x4a7fcc, {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': '',
          'voice_id': 0x0,
          'episodes_view': {},
          'movie_view': ''
        });
        return _0x4a7fcc;
      };
      this.saveChoice = function (_0x458392, _0x1fb3ff) {
        var _0x2e8a35 = Lampa.Storage.cache("online_choice_" + (_0x1fb3ff || _0xa4f4c3), 0xbb8, {});
        _0x2e8a35[_0x4f5135.movie.id] = _0x458392;
        Lampa.Storage.set("online_choice_" + (_0x1fb3ff || _0xa4f4c3), _0x2e8a35);
        this.updateBalanser(_0x1fb3ff || _0xa4f4c3);
      };
      this.replaceChoice = function (_0x284e57, _0xdf203c) {
        var _0x525f0d = this.getChoice(_0xdf203c);
        Lampa.Arrays.extend(_0x525f0d, _0x284e57, true);
        this.saveChoice(_0x525f0d, _0xdf203c);
      };
      this.clearImages = function () {
        _0x2d60cc.forEach(function (_0x33581f) {
          _0x33581f.onerror = function () {};
          _0x33581f.onload = function () {};
          _0x33581f.src = '';
        });
        _0x2d60cc = [];
      };
      this.reset = function () {
        _0x2b576b = false;
        clearInterval(_0x23e8e0);
        _0x284069.clear();
        this.clearImages();
        _0xe97847.render().find(".empty").remove();
        _0xe97847.clear();
        _0xe97847.reset();
        _0xe97847.body().append(Lampa.Template.get("lampac_content_loading"));
      };
      this.loading = function (_0x1216e2) {
        if (_0x1216e2) {
          this.activity.loader(true);
        } else {
          this.activity.loader(false);
          this.activity.toggle();
        }
      };
      this.filter = function (_0x6be2b0, _0x5baf0b) {
        var _0x5b1491 = this;
        var _0x22a7da = [];
        var _0x158ba7 = function _0x324ae5(_0x475223, _0x5d5968) {
          var _0xd432ef = _0x5b1491.getChoice();
          var _0x5409c3 = _0x6be2b0[_0x475223];
          var _0x41c3d1 = [];
          var _0x3c2534 = _0xd432ef[_0x475223];
          _0x5409c3.forEach(function (_0x37f3c2, _0x17f4c9) {
            _0x41c3d1.push({
              'title': _0x37f3c2,
              'selected': _0x3c2534 == _0x17f4c9,
              'index': _0x17f4c9
            });
          });
          _0x22a7da.push({
            'title': _0x5d5968,
            'subtitle': _0x5409c3[_0x3c2534],
            'items': _0x41c3d1,
            'stype': _0x475223
          });
        };
        _0x6be2b0.source = _0x1b135f;
        _0x22a7da.push({
          'title': Lampa.Lang.translate("torrent_parser_reset"),
          'reset': true
        });
        this.saveChoice(_0x5baf0b);
        if (_0x6be2b0.voice && _0x6be2b0.voice.length) {
          _0x158ba7("voice", Lampa.Lang.translate("torrent_parser_voice"));
        }
        if (_0x6be2b0.season && _0x6be2b0.season.length) {
          _0x158ba7('season', Lampa.Lang.translate("torrent_serial_season"));
        }
        _0xeda6bc.set("filter", _0x22a7da);
        _0xeda6bc.set('sort', _0x1b135f.map(function (_0x4f4b88) {
          return {
            'title': _0x6617b0[_0x4f4b88].name,
            'source': _0x4f4b88,
            'selected': _0x4f4b88 == _0xa4f4c3,
            'ghost': !_0x6617b0[_0x4f4b88].show
          };
        }));
        this.selected(_0x6be2b0);
      };
      this.selected = function (_0x537c39) {
        var _0x11b8b8 = this.getChoice();
        var _0x122c1d = [];
        for (var _0x13e32e in _0x11b8b8) {
          if (_0x537c39[_0x13e32e] && _0x537c39[_0x13e32e].length) {
            if (_0x13e32e == "voice") {
              _0x122c1d.push(_0x32fe83[_0x13e32e] + ": " + _0x537c39[_0x13e32e][_0x11b8b8[_0x13e32e]]);
            } else if (_0x13e32e !== 'source') {
              if (_0x537c39.season.length >= 0x1) {
                _0x122c1d.push(_0x32fe83.season + ": " + _0x537c39[_0x13e32e][_0x11b8b8[_0x13e32e]]);
              }
            }
          }
        }
        _0xeda6bc.chosen('filter', _0x122c1d);
        _0xeda6bc.chosen("sort", [_0x6617b0[_0xa4f4c3].name]);
      };
      this.getEpisodes = function (_0x48841e, _0x452885) {
        var _0x50ebf3 = [];
        if (['cub', "tmdb"].indexOf(_0x4f5135.movie.source || 'tmdb') == -0x1) {
          return _0x452885(_0x50ebf3);
        }
        if (typeof _0x4f5135.movie.id == "number" && _0x4f5135.movie.name) {
          var _0x269c78 = 'tv/' + _0x4f5135.movie.id + '/season/' + _0x48841e + "?api_key=" + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru');
          var _0x35ff67 = Lampa.TMDB.api(_0x269c78);
          _0x284069.timeout(10000);
          _0x284069.native(_0x35ff67, function (_0x2c4860) {
            _0x50ebf3 = _0x2c4860.episodes || [];
            _0x452885(_0x50ebf3);
          }, function (_0x4dd965, _0x2ab714) {
            _0x452885(_0x50ebf3);
          });
        } else {
          _0x452885(_0x50ebf3);
        }
      };
      this.watched = function (_0x22d4d0) {
        var _0x4240c6 = Lampa.Utils.hash(_0x4f5135.movie.number_of_seasons ? _0x4f5135.movie.original_name : _0x4f5135.movie.original_title);
        var _0x2d4dc3 = Lampa.Storage.cache('online_watched_last', 0x1388, {});
        if (_0x22d4d0) {
          if (!_0x2d4dc3[_0x4240c6]) {
            _0x2d4dc3[_0x4240c6] = {};
          }
          Lampa.Arrays.extend(_0x2d4dc3[_0x4240c6], _0x22d4d0, true);
          Lampa.Storage.set("online_watched_last", _0x2d4dc3);
          this.updateWatched();
        } else {
          return _0x2d4dc3[_0x4240c6];
        }
      };
      this.updateWatched = function () {
        var _0x2b9bb3 = this.watched();
        var _0x1e8566 = _0xe97847.body().find(".online-prestige-watched .online-prestige-watched__body").empty();
        if (_0x2b9bb3) {
          var _0x24ade5 = [];
          if (_0x2b9bb3.balanser_name) {
            _0x24ade5.push(_0x2b9bb3.balanser_name);
          }
          if (_0x2b9bb3.voice_name) {
            _0x24ade5.push(_0x2b9bb3.voice_name);
          }
          if (_0x2b9bb3.season) {
            _0x24ade5.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x2b9bb3.season);
          }
          if (_0x2b9bb3.episode) {
            _0x24ade5.push(Lampa.Lang.translate("torrent_serial_episode") + " " + _0x2b9bb3.episode);
          }
          _0x24ade5.forEach(function (_0x51b1dd) {
            _0x1e8566.append("<span>" + _0x51b1dd + "</span>");
          });
        } else {
          _0x1e8566.append('<span>' + Lampa.Lang.translate("lampac_no_watch_history") + "</span>");
        }
      };
      this.draw = function (_0x1a7aee) {
        var _0x30ec58 = this;
        var _0x351160 = arguments.length > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : {};
        if (!_0x1a7aee.length) {
          return this.empty();
        }
        _0xe97847.clear();
        _0xe97847.append(Lampa.Template.get('lampac_prestige_watched', {}));
        this.updateWatched();
        this.getEpisodes(_0x1a7aee[0x0].season, function (_0x577a97) {
          var _0x53c3a0 = Lampa.Storage.cache('online_view', 0x1388, []);
          var _0x50e5b5 = !!_0x4f5135.movie.name;
          var _0x198ec4 = _0x30ec58.getChoice();
          var _0x3eadd0 = window.innerWidth > 0x1e0;
          var _0x2f6659 = false;
          var _0x34c97c = false;
          _0x1a7aee.forEach(function (_0x11fca3, _0x19591d) {
            var _0xe55c61 = _0x50e5b5 && _0x577a97.length && !_0x351160.similars ? _0x577a97.find(function (_0x1fd651) {
              return _0x1fd651.episode_number == _0x11fca3.episode;
            }) : false;
            var _0xcb1eb8 = _0x11fca3.episode || _0x19591d + 0x1;
            var _0x232123 = _0x198ec4.episodes_view[_0x11fca3.season];
            var _0x44a4c4 = _0x198ec4.voice_name || (_0x26be41.voice[0x0] ? _0x26be41.voice[0x0].title : false) || _0x11fca3.voice_name || (_0x50e5b5 ? "Неизвестно" : _0x11fca3.text) || 'Неизвестно';
            if (_0x11fca3.quality) {
              _0x11fca3.qualitys = _0x11fca3.quality;
              _0x11fca3.quality = Lampa.Arrays.getKeys(_0x11fca3.quality)[0x0];
            }
            Lampa.Arrays.extend(_0x11fca3, {
              'voice_name': _0x44a4c4,
              'info': _0x44a4c4.length > 0x3c ? _0x44a4c4.substr(0x0, 0x3c) + "..." : _0x44a4c4,
              'quality': '',
              'time': Lampa.Utils.secondsToTime((_0xe55c61 ? _0xe55c61.runtime : _0x4f5135.movie.runtime) * 0x3c, true)
            });
            var _0x456e0e = Lampa.Utils.hash(_0x11fca3.season ? [_0x11fca3.season, _0x11fca3.season > 0xa ? ':' : '', _0x11fca3.episode, _0x4f5135.movie.original_title].join('') : _0x4f5135.movie.original_title);
            var _0x3afe67 = Lampa.Utils.hash(_0x11fca3.season ? [_0x11fca3.season, _0x11fca3.season > 0xa ? ':' : '', _0x11fca3.episode, _0x4f5135.movie.original_title, _0x11fca3.voice_name].join('') : _0x4f5135.movie.original_title + _0x11fca3.voice_name);
            var _0x312b24 = {
              'hash_timeline': _0x456e0e,
              'hash_behold': _0x3afe67
            };
            var _0x4576cd = [];
            if (_0x11fca3.season) {
              _0x11fca3.translate_episode_end = _0x30ec58.getLastEpisode(_0x1a7aee);
              _0x11fca3.translate_voice = _0x11fca3.voice_name;
            }
            if (_0x11fca3.text && !_0xe55c61) {
              _0x11fca3.title = _0x11fca3.text;
            }
            _0x11fca3.timeline = Lampa.Timeline.view(_0x456e0e);
            if (_0xe55c61) {
              _0x11fca3.title = _0xe55c61.name;
              if (_0x11fca3.info.length < 0x1e && _0xe55c61.vote_average) {
                _0x4576cd.push(Lampa.Template.get("lampac_prestige_rate", {
                  'rate': parseFloat(_0xe55c61.vote_average + '').toFixed(0x1)
                }, true));
              }
              if (_0xe55c61.air_date && _0x3eadd0) {
                _0x4576cd.push(Lampa.Utils.parseTime(_0xe55c61.air_date).full);
              }
            } else if (_0x4f5135.movie.release_date && _0x3eadd0) {
              _0x4576cd.push(Lampa.Utils.parseTime(_0x4f5135.movie.release_date).full);
            }
            if (!_0x50e5b5 && _0x4f5135.movie.tagline && _0x11fca3.info.length < 0x1e) {
              _0x4576cd.push(_0x4f5135.movie.tagline);
            }
            if (_0x11fca3.info) {
              _0x4576cd.push(_0x11fca3.info);
            }
            if (_0x4576cd.length) {
              _0x11fca3.info = _0x4576cd.map(function (_0x5946c3) {
                return '<span>' + _0x5946c3 + "</span>";
              }).join("<span class=\"online-prestige-split\">●</span>");
            }
            var _0x383301 = Lampa.Template.get('lampac_prestige_full', _0x11fca3);
            var _0x32d588 = _0x383301.find('.online-prestige__loader');
            var _0x389788 = _0x383301.find(".online-prestige__img");
            if (!_0x50e5b5) {
              if (_0x198ec4.movie_view == _0x3afe67) {
                _0x2f6659 = _0x383301;
              }
            } else if (typeof _0x232123 !== "undefined" && _0x232123 == _0xcb1eb8) {
              _0x2f6659 = _0x383301;
            }
            if (_0x50e5b5 && !_0xe55c61) {
              _0x389788.append("<div class=\"online-prestige__episode-number\">" + ('0' + (_0x11fca3.episode || _0x19591d + 0x1)).slice(-0x2) + "</div>");
              _0x32d588.remove();
            } else {
              if (!_0x50e5b5 && ['cub', 'tmdb'].indexOf(_0x4f5135.movie.source || "tmdb") == -0x1) {
                _0x32d588.remove();
              } else {
                var _0x4b798e = _0x383301.find("img")[0x0];
                _0x4b798e.onerror = function () {
                  _0x4b798e.src = "./img/img_broken.svg";
                };
                _0x4b798e.onload = function () {
                  _0x389788.addClass("online-prestige__img--loaded");
                  _0x32d588.remove();
                  if (_0x50e5b5) {
                    _0x389788.append("<div class=\"online-prestige__episode-number\">" + ('0' + (_0x11fca3.episode || _0x19591d + 0x1)).slice(-0x2) + "</div>");
                  }
                };
                _0x4b798e.src = Lampa.TMDB.image("t/p/w300" + (_0xe55c61 ? _0xe55c61.still_path : _0x4f5135.movie.backdrop_path));
                _0x2d60cc.push(_0x4b798e);
              }
            }
            _0x383301.find(".online-prestige__timeline").append(Lampa.Timeline.render(_0x11fca3.timeline));
            if (_0x53c3a0.indexOf(_0x3afe67) !== -0x1) {
              _0x34c97c = _0x383301;
              _0x383301.find(".online-prestige__img").append("<div class=\"online-prestige__viewed\">" + Lampa.Template.get("icon_viewed", {}, true) + "</div>");
            }
            _0x11fca3.mark = function () {
              _0x53c3a0 = Lampa.Storage.cache("online_view", 0x1388, []);
              if (_0x53c3a0.indexOf(_0x3afe67) == -0x1) {
                _0x53c3a0.push(_0x3afe67);
                Lampa.Storage.set("online_view", _0x53c3a0);
                if (_0x383301.find(".online-prestige__viewed").length == 0x0) {
                  _0x383301.find('.online-prestige__img').append("<div class=\"online-prestige__viewed\">" + Lampa.Template.get("icon_viewed", {}, true) + "</div>");
                }
              }
              _0x198ec4 = _0x30ec58.getChoice();
              if (!_0x50e5b5) {
                _0x198ec4.movie_view = _0x3afe67;
              } else {
                _0x198ec4.episodes_view[_0x11fca3.season] = _0xcb1eb8;
              }
              _0x30ec58.saveChoice(_0x198ec4);
              var _0x4a5d32 = _0x198ec4.voice_name || _0x11fca3.voice_name || _0x11fca3.title;
              if (_0x4a5d32.length > 0x1e) {
                _0x4a5d32 = _0x4a5d32.slice(0x0, 0x1e) + '...';
              }
              _0x30ec58.watched({
                'balanser': _0xa4f4c3,
                'balanser_name': Lampa.Utils.capitalizeFirstLetter(_0x6617b0[_0xa4f4c3].name.split(" ")[0x0]),
                'voice_id': _0x198ec4.voice_id,
                'voice_name': _0x4a5d32,
                'episode': _0x11fca3.episode,
                'season': _0x11fca3.season
              });
            };
            _0x11fca3.unmark = function () {
              _0x53c3a0 = Lampa.Storage.cache("online_view", 0x1388, []);
              if (_0x53c3a0.indexOf(_0x3afe67) !== -0x1) {
                Lampa.Arrays.remove(_0x53c3a0, _0x3afe67);
                Lampa.Storage.set("online_view", _0x53c3a0);
                Lampa.Storage.remove('online_view', _0x3afe67);
                _0x383301.find(".online-prestige__viewed").remove();
              }
            };
            _0x11fca3.timeclear = function () {
              _0x11fca3.timeline.percent = 0x0;
              _0x11fca3.timeline.time = 0x0;
              _0x11fca3.timeline.duration = 0x0;
              Lampa.Timeline.update(_0x11fca3.timeline);
            };
            _0x383301.on("hover:enter", function () {
              if (_0x4f5135.movie.id) {
                Lampa.Favorite.add("history", _0x4f5135.movie, 0x64);
              }
              if (_0x351160.onEnter) {
                _0x351160.onEnter(_0x11fca3, _0x383301, _0x312b24);
              }
            }).on("hover:focus", function (_0x42469a) {
              _0x2b576b = _0x42469a.target;
              if (_0x351160.onFocus) {
                _0x351160.onFocus(_0x11fca3, _0x383301, _0x312b24);
              }
              _0xe97847.update($(_0x42469a.target), true);
            });
            if (_0x351160.onRender) {
              _0x351160.onRender(_0x11fca3, _0x383301, _0x312b24);
            }
            _0x30ec58.contextMenu({
              'html': _0x383301,
              'element': _0x11fca3,
              'onFile': function _0x28e511(_0x13de14) {
                if (_0x351160.onContextMenu) {
                  _0x351160.onContextMenu(_0x11fca3, _0x383301, _0x312b24, _0x13de14);
                }
              },
              'onClearAllMark': function _0x58aa0b() {
                _0x1a7aee.forEach(function (_0x281eef) {
                  _0x281eef.unmark();
                });
              },
              'onClearAllTime': function _0x573187() {
                _0x1a7aee.forEach(function (_0x39b0e3) {
                  _0x39b0e3.timeclear();
                });
              }
            });
            _0xe97847.append(_0x383301);
          });
          if (_0x50e5b5 && _0x577a97.length > _0x1a7aee.length && !_0x351160.similars) {
            var _0x3e13b8 = _0x577a97.slice(_0x1a7aee.length);
            _0x3e13b8.forEach(function (_0x238e81) {
              var _0x467005 = [];
              if (_0x238e81.vote_average) {
                _0x467005.push(Lampa.Template.get("lampac_prestige_rate", {
                  'rate': parseFloat(_0x238e81.vote_average + '').toFixed(0x1)
                }, true));
              }
              if (_0x238e81.air_date) {
                _0x467005.push(Lampa.Utils.parseTime(_0x238e81.air_date).full);
              }
              var _0x222411 = new Date((_0x238e81.air_date + '').replace(/-/g, '/'));
              var _0x27149c = Date.now();
              var _0x43682d = Math.round((_0x222411.getTime() - _0x27149c) / 86400000);
              var _0x3df358 = Lampa.Lang.translate("full_episode_days_left") + ": " + _0x43682d;
              var _0x5e32c7 = Lampa.Template.get('lampac_prestige_full', {
                'time': Lampa.Utils.secondsToTime((_0x238e81 ? _0x238e81.runtime : _0x4f5135.movie.runtime) * 0x3c, true),
                'info': _0x467005.length ? _0x467005.map(function (_0x2cff9b) {
                  return "<span>" + _0x2cff9b + "</span>";
                }).join("<span class=\"online-prestige-split\">●</span>") : '',
                'title': _0x238e81.name,
                'quality': _0x43682d > 0x0 ? _0x3df358 : ''
              });
              var _0xd231a5 = _0x5e32c7.find(".online-prestige__loader");
              var _0x5ca00c = _0x5e32c7.find(".online-prestige__img");
              var _0x5b4195 = _0x1a7aee[0x0] ? _0x1a7aee[0x0].season : 0x1;
              _0x5e32c7.find(".online-prestige__timeline").append(Lampa.Timeline.render(Lampa.Timeline.view(Lampa.Utils.hash([_0x5b4195, _0x238e81.episode_number, _0x4f5135.movie.original_title].join('')))));
              var _0x5d11e6 = _0x5e32c7.find("img")[0x0];
              if (_0x238e81.still_path) {
                _0x5d11e6.onerror = function () {
                  _0x5d11e6.src = "./img/img_broken.svg";
                };
                _0x5d11e6.onload = function () {
                  _0x5ca00c.addClass('online-prestige__img--loaded');
                  _0xd231a5.remove();
                  _0x5ca00c.append("<div class=\"online-prestige__episode-number\">" + ('0' + _0x238e81.episode_number).slice(-0x2) + "</div>");
                };
                _0x5d11e6.src = Lampa.TMDB.image('t/p/w300' + _0x238e81.still_path);
                _0x2d60cc.push(_0x5d11e6);
              } else {
                _0xd231a5.remove();
                _0x5ca00c.append("<div class=\"online-prestige__episode-number\">" + ('0' + _0x238e81.episode_number).slice(-0x2) + "</div>");
              }
              _0x5e32c7.on("hover:focus", function (_0x5705e7) {
                _0x2b576b = _0x5705e7.target;
                _0xe97847.update($(_0x5705e7.target), true);
              });
              _0x5e32c7.css("opacity", "0.5");
              _0xe97847.append(_0x5e32c7);
            });
          }
          if (_0x2f6659) {
            _0x2b576b = _0x2f6659[0x0];
          } else if (_0x34c97c) {
            _0x2b576b = _0x34c97c[0x0];
          }
          Lampa.Controller.enable("content");
        });
      };
      this.contextMenu = function (_0x3caa11) {
        _0x3caa11.html.on("hover:long", function () {
          function _0x431e68(_0x6980c) {
            var _0x9435cf = Lampa.Controller.enabled().name;
            var _0x4e67f3 = [];
            if (Lampa.Platform.is("webos")) {
              _0x4e67f3.push({
                'title': Lampa.Lang.translate("player_lauch") + " - Webos",
                'player': 'webos'
              });
            }
            if (Lampa.Platform.is("android")) {
              _0x4e67f3.push({
                'title': Lampa.Lang.translate('player_lauch') + " - Android",
                'player': "android"
              });
            }
            _0x4e67f3.push({
              'title': Lampa.Lang.translate("player_lauch") + " - Lampa",
              'player': "lampa"
            });
            _0x4e67f3.push({
              'title': Lampa.Lang.translate("lampac_video"),
              'separator': true
            });
            _0x4e67f3.push({
              'title': Lampa.Lang.translate("torrent_parser_label_title"),
              'mark': true
            });
            _0x4e67f3.push({
              'title': Lampa.Lang.translate('torrent_parser_label_cancel_title'),
              'unmark': true
            });
            _0x4e67f3.push({
              'title': Lampa.Lang.translate('time_reset'),
              'timeclear': true
            });
            if (_0x6980c) {
              _0x4e67f3.push({
                'title': Lampa.Lang.translate("copy_link"),
                'copylink': true
              });
            }
            _0x4e67f3.push({
              'title': Lampa.Lang.translate("more"),
              'separator': true
            });
            if (Lampa.Account.logged() && _0x3caa11.element && typeof _0x3caa11.element.season !== "undefined" && _0x3caa11.element.translate_voice) {
              _0x4e67f3.push({
                'title': Lampa.Lang.translate("lampac_voice_subscribe"),
                'subscribe': true
              });
            }
            _0x4e67f3.push({
              'title': Lampa.Lang.translate("lampac_clear_all_marks"),
              'clearallmark': true
            });
            _0x4e67f3.push({
              'title': Lampa.Lang.translate("lampac_clear_all_timecodes"),
              'timeclearall': true
            });
            Lampa.Select.show({
              'title': Lampa.Lang.translate("title_action"),
              'items': _0x4e67f3,
              'onBack': function _0x93db3a() {
                Lampa.Controller.toggle(_0x9435cf);
              },
              'onSelect': function _0x5d1f94(_0x3e7ded) {
                if (_0x3e7ded.mark) {
                  _0x3caa11.element.mark();
                }
                if (_0x3e7ded.unmark) {
                  _0x3caa11.element.unmark();
                }
                if (_0x3e7ded.timeclear) {
                  _0x3caa11.element.timeclear();
                }
                if (_0x3e7ded.clearallmark) {
                  _0x3caa11.onClearAllMark();
                }
                if (_0x3e7ded.timeclearall) {
                  _0x3caa11.onClearAllTime();
                }
                Lampa.Controller.toggle(_0x9435cf);
                if (_0x3e7ded.player) {
                  Lampa.Player.runas(_0x3e7ded.player);
                  _0x3caa11.html.trigger("hover:enter");
                }
                if (_0x3e7ded.copylink) {
                  if (_0x6980c.quality) {
                    var _0x8aa08e = [];
                    for (var _0x340c79 in _0x6980c.quality) {
                      _0x8aa08e.push({
                        'title': _0x340c79,
                        'file': _0x6980c.quality[_0x340c79]
                      });
                    }
                    Lampa.Select.show({
                      'title': Lampa.Lang.translate("settings_server_links"),
                      'items': _0x8aa08e,
                      'onBack': function _0x464878() {
                        Lampa.Controller.toggle(_0x9435cf);
                      },
                      'onSelect': function _0x4445a7(_0xe283a5) {
                        Lampa.Utils.copyTextToClipboard(_0xe283a5.file, function () {
                          Lampa.Noty.show(Lampa.Lang.translate("copy_secuses"));
                        }, function () {
                          Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
                        });
                      }
                    });
                  } else {
                    Lampa.Utils.copyTextToClipboard(_0x6980c.file, function () {
                      Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
                    }, function () {
                      Lampa.Noty.show(Lampa.Lang.translate("copy_error"));
                    });
                  }
                }
                if (_0x3e7ded.subscribe) {
                  Lampa.Account.subscribeToTranslation({
                    'card': _0x4f5135.movie,
                    'season': _0x3caa11.element.season,
                    'episode': _0x3caa11.element.translate_episode_end,
                    'voice': _0x3caa11.element.translate_voice
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate("lampac_voice_success"));
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate("lampac_voice_error"));
                  });
                }
              }
            });
          }
          _0x3caa11.onFile(_0x431e68);
        }).on("hover:focus", function () {
          if (Lampa.Helper) {
            Lampa.Helper.show('online_file', Lampa.Lang.translate('helper_online_file'), _0x3caa11.html);
          }
        });
      };
      this.empty = function () {
        var _0x429571 = Lampa.Template.get("lampac_does_not_answer", {});
        _0x429571.find(".online-empty__buttons").remove();
        _0x429571.find('.online-empty__title').text(Lampa.Lang.translate('empty_title_two'));
        _0x429571.find(".online-empty__time").text(Lampa.Lang.translate("empty_text"));
        _0xe97847.clear();
        _0xe97847.append(_0x429571);
        this.loading(false);
      };
      this.noConnectToServer = function (_0x3def97) {
        var _0x206414 = Lampa.Template.get("lampac_does_not_answer", {});
        _0x206414.find(".online-empty__buttons").remove();
        _0x206414.find(".online-empty__title").text(Lampa.Lang.translate('title_error'));
        _0x206414.find(".online-empty__time").text(_0x3def97 && _0x3def97.accsdb ? _0x3def97.msg : Lampa.Lang.translate("lampac_does_not_answer_text").replace('{balanser}', _0xa4f4c3[_0xa4f4c3].name));
        _0xe97847.clear();
        _0xe97847.append(_0x206414);
        this.loading(false);
      };
      this.doesNotAnswer = function () {
        var _0x1e01b5 = this;
        this.reset();
        var _0x5e7d13 = Lampa.Template.get("lampac_does_not_answer", {
          'balanser': _0xa4f4c3
        });
        var _0x57456b = 0x4;
        _0x5e7d13.find(".cancel").on("hover:enter", function () {
          clearInterval(_0x23e8e0);
        });
        _0x5e7d13.find(".change").on("hover:enter", function () {
          clearInterval(_0x23e8e0);
          _0xeda6bc.render().find(".filter--sort").trigger('hover:enter');
        });
        _0xe97847.clear();
        _0xe97847.append(_0x5e7d13);
        this.loading(false);
        _0x23e8e0 = setInterval(function () {
          _0x57456b--;
          _0x5e7d13.find(".timeout").text(_0x57456b);
          if (_0x57456b == 0x0) {
            clearInterval(_0x23e8e0);
            var _0x4831c6 = Lampa.Arrays.getKeys(_0x6617b0);
            var _0x46fc42 = _0x4831c6.indexOf(_0xa4f4c3);
            var _0x322845 = _0x4831c6[_0x46fc42 + 0x1];
            if (!_0x322845) {
              _0x322845 = _0x4831c6[0x0];
            }
            _0xa4f4c3 = _0x322845;
            if (Lampa.Activity.active().activity == _0x1e01b5.activity) {
              _0x1e01b5.changeBalanser(_0xa4f4c3);
            }
          }
        }, 0x3e8);
      };
      this.getLastEpisode = function (_0x5bd12a) {
        var _0x10b6f9 = 0x0;
        _0x5bd12a.forEach(function (_0x179d4c) {
          if (typeof _0x179d4c.episode !== "undefined") {
            _0x10b6f9 = Math.max(_0x10b6f9, parseInt(_0x179d4c.episode));
          }
        });
        return _0x10b6f9;
      };
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) {
          return;
        }
        if (!_0x264ec8) {
          _0x264ec8 = true;
          this.initialize();
        }
        Lampa.Background.immediately(Lampa.Utils.cardImgBackgroundBlur(_0x4f5135.movie));
        Lampa.Controller.add("content", {
          'toggle': function _0x47a185() {
            Lampa.Controller.collectionSet(_0xe97847.render(), _0x7b0bcb.render());
            Lampa.Controller.collectionFocus(_0x2b576b || false, _0xe97847.render());
          },
          'gone': function _0x23975b() {
            clearTimeout(_0x23e8e0);
          },
          'up': function _0x4fd3c8() {
            if (Navigator.canmove('up')) {
              Navigator.move('up');
            } else {
              Lampa.Controller.toggle("head");
            }
          },
          'down': function _0x22d0bb() {
            Navigator.move("down");
          },
          'right': function _0x1564c0() {
            if (Navigator.canmove("right")) {
              Navigator.move("right");
            } else {
              _0xeda6bc.show(Lampa.Lang.translate("title_filter"), "filter");
            }
          },
          'left': function _0x213a36() {
            if (Navigator.canmove("left")) {
              Navigator.move("left");
            } else {
              Lampa.Controller.toggle("menu");
            }
          },
          'back': this.back.bind(this)
        });
        Lampa.Controller.toggle("content");
      };
      this.render = function () {
        return _0x7b0bcb.render();
      };
      this.back = function () {
        Lampa.Activity.backward();
      };
      this.pause = function () {};
      this.stop = function () {};
      this.destroy = function () {
        _0x284069.clear();
        this.clearImages();
        _0x7b0bcb.destroy();
        _0xe97847.destroy();
        clearInterval(_0x23e8e0);
        clearTimeout(_0x4db9cc);
        clearTimeout(_0x408fb9);
        if (_0x4b2512) {
          _0x4b2512.stop();
          _0x4b2512 = null;
        }
      };
    }
    function _0x2904d6() {
      if (Lampa.Manifest.origin !== "bylampa") {
        Lampa.Noty.show("Ошибка доступа");
        return;
      }
      window.lampac_plugin = true;
      var _0xad7dc = {
        'type': "video",
        'version': "1.2.6",
        'name': 'Cinema',
        'description': "Плагин для просмотра онлайн сериалов и фильмов",
        'component': 'cinema',
        'onContextMenu': function _0x319820(_0x1cee76) {
          return {
            'name': Lampa.Lang.translate("lampac_watch"),
            'description': ''
          };
        },
        'onContextLauch': function _0x3fd771(_0x1e1264) {
          _0x130164();
          Lampa.Component.add('cinema', _0xf3da2c);
          Lampa.Activity.push({
            'url': '',
            'title': Lampa.Lang.translate("title_online"),
            'component': "cinema",
            'search': _0x1e1264.title,
            'search_one': _0x1e1264.title,
            'search_two': _0x1e1264.original_title,
            'movie': _0x1e1264,
            'page': 0x1
          });
        }
      };
      Lampa.Manifest.plugins = _0xad7dc;
      Lampa.Lang.add({
        'lampac_watch': {
          'ru': "Смотреть онлайн",
          'en': "Watch online",
          'uk': "Дивитися онлайн",
          'zh': "在线观看"
        },
        'lampac_video': {
          'ru': "Видео",
          'en': "Video",
          'uk': 'Відео',
          'zh': '视频'
        },
        'lampac_no_watch_history': {
          'ru': "Нет истории просмотра",
          'en': "No browsing history",
          'ua': "Немає історії перегляду",
          'zh': "没有浏览历史"
        },
        'lampac_nolink': {
          'ru': "Не удалось извлечь ссылку",
          'uk': "Неможливо отримати посилання",
          'en': "Failed to fetch link",
          'zh': "获取链接失败"
        },
        'lampac_balanser': {
          'ru': "Источник",
          'uk': "Джерело",
          'en': "Source",
          'zh': '来源'
        },
        'helper_online_file': {
          'ru': "Удерживайте клавишу \"ОК\" для вызова контекстного меню",
          'uk': "Утримуйте клавішу \"ОК\" для виклику контекстного меню",
          'en': "Hold the \"OK\" key to bring up the context menu",
          'zh': "按住“确定”键调出上下文菜单"
        },
        'title_online': {
          'ru': "Онлайн",
          'uk': 'Онлайн',
          'en': "Online",
          'zh': "在线的"
        },
        'lampac_voice_subscribe': {
          'ru': "Подписаться на перевод",
          'uk': "Підписатися на переклад",
          'en': "Subscribe to translation",
          'zh': "订阅翻译"
        },
        'lampac_voice_success': {
          'ru': "Вы успешно подписались",
          'uk': "Ви успішно підписалися",
          'en': "You have successfully subscribed",
          'zh': "您已成功订阅"
        },
        'lampac_voice_error': {
          'ru': "Возникла ошибка",
          'uk': "Виникла помилка",
          'en': "An error has occurred",
          'zh': "发生了错误"
        },
        'lampac_clear_all_marks': {
          'ru': "Очистить все метки",
          'uk': "Очистити всі мітки",
          'en': "Clear all labels",
          'zh': "清除所有标签"
        },
        'lampac_clear_all_timecodes': {
          'ru': "Очистить все тайм-коды",
          'uk': "Очистити всі тайм-коди",
          'en': "Clear all timecodes",
          'zh': "清除所有时间代码"
        },
        'lampac_change_balanser': {
          'ru': "Изменить балансер",
          'uk': "Змінити балансер",
          'en': "Change balancer",
          'zh': "更改平衡器"
        },
        'lampac_balanser_dont_work': {
          'ru': "Поиск на ({balanser}) не дал результатов",
          'uk': "Пошук на ({balanser}) не дав результатів",
          'en': "Search on ({balanser}) did not return any results",
          'zh': "搜索 ({balanser}) 未返回任何结果"
        },
        'lampac_balanser_timeout': {
          'ru': "Источник будет переключен автоматически через <span class=\"timeout\">10</span> секунд.",
          'uk': "Джерело буде автоматично переключено через <span class=\"timeout\">10</span> секунд.",
          'en': "The source will be switched automatically after <span class=\"timeout\">10</span> seconds.",
          'zh': "平衡器将在<span class=\"timeout\">10</span>秒内自动切换。"
        },
        'lampac_does_not_answer_text': {
          'ru': "Поиск на ({balanser}) не дал результатов",
          'uk': "Пошук на ({balanser}) не дав результатів",
          'en': "Search on ({balanser}) did not return any results",
          'zh': "搜索 ({balanser}) 未返回任何结果"
        }
      });
      Lampa.Template.add("lampac_css", "\n        <style>\n        @charset 'UTF-8';.online-prestige{position:relative;-webkit-border-radius:.3em;border-radius:.3em;background-color:rgba(0,0,0,0.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-prestige__body{padding:1.2em;line-height:1.3;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}@media screen and (max-width:480px){.online-prestige__body{padding:.8em 1.2em}}.online-prestige__img{position:relative;width:13em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;min-height:8.2em}.online-prestige__img>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.3em;border-radius:.3em;opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}.online-prestige__img--loaded>img{opacity:1}@media screen and (max-width:480px){.online-prestige__img{width:7em;min-height:6em}}.online-prestige__folder{padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige__folder>svg{width:4.4em !important;height:4.4em !important}.online-prestige__viewed{position:absolute;top:1em;left:1em;background:rgba(0,0,0,0.45);-webkit-border-radius:100%;border-radius:100%;padding:.25em;font-size:.76em}.online-prestige__viewed>svg{width:1.5em !important;height:1.5em !important}.online-prestige__episode-number{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2em}.online-prestige__loader{position:absolute;top:50%;left:50%;width:2em;height:2em;margin-left:-1em;margin-top:-1em;background:url(./img/loader.svg) no-repeat center center;-webkit-background-size:contain;-o-background-size:contain;background-size:contain}.online-prestige__head,.online-prestige__footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__timeline{margin:.8em 0}.online-prestige__timeline>.time-line{display:block !important}.online-prestige__title{font-size:1.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}@media screen and (max-width:480px){.online-prestige__title{font-size:1.4em}}.online-prestige__time{padding-left:2em}.online-prestige__info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__info>*{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.online-prestige__quality{padding-left:1em;white-space:nowrap}.online-prestige__scan-file{position:absolute;bottom:0;left:0;right:0}.online-prestige__scan-file .broadcast__scan{margin:0}.online-prestige .online-prestige-split{font-size:.8em;margin:0 1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige.focus::after{content:'';position:absolute;top:-0.6em;left:-0.6em;right:-0.6em;bottom:-0.6em;-webkit-border-radius:.7em;border-radius:.7em;border:solid .3em #fff;z-index:-1;pointer-events:none}.online-prestige+.online-prestige{margin-top:1.5em}.online-prestige--folder .online-prestige__footer{margin-top:.8em}.online-prestige-watched{padding:1em}.online-prestige-watched__icon>svg{width:1.5em;height:1.5em}.online-prestige-watched__body{padding-left:1em;padding-top:.1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.online-prestige-watched__body>span+span::before{content:' ● ';vertical-align:top;display:inline-block;margin:0 .5em}.online-prestige-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige-rate>svg{width:1.3em !important;height:1.3em !important}.online-prestige-rate>span{font-weight:600;font-size:1.1em;padding-left:.7em}.online-empty{line-height:1.4}.online-empty__title{font-size:1.8em;margin-bottom:.3em}.online-empty__time{font-size:1.2em;font-weight:300;margin-bottom:1.6em}.online-empty__buttons{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-empty__buttons>*+*{margin-left:1em}.online-empty__button{background:rgba(0,0,0,0.3);font-size:1.2em;padding:.5em 1.2em;-webkit-border-radius:.2em;border-radius:.2em;margin-bottom:2.4em}.online-empty__button.focus{background:#fff;color:black}.online-empty__templates .online-empty-template:nth-child(2){opacity:.5}.online-empty__templates .online-empty-template:nth-child(3){opacity:.2}.online-empty-template{background-color:rgba(255,255,255,0.3);padding:1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;border-radius:.3em}.online-empty-template>*{background:rgba(0,0,0,0.3);-webkit-border-radius:.3em;border-radius:.3em}.online-empty-template__ico{width:4em;height:4em;margin-right:2.4em}.online-empty-template__body{height:1.7em;width:70%}.online-empty-template+.online-empty-template{margin-top:1em}\n        </style>\n    ");
      $("body").append(Lampa.Template.get("lampac_css", {}, true));
      function _0x130164() {
        var _0x3f6c90 = _0x1209b3(this, function () {
          return _0x3f6c90.toString().search('(((.+)+)+)+$').toString().constructor(_0x3f6c90).search("(((.+)+)+)+$");
        });
        _0x3f6c90();
        var _0x17d62d = _0x3c7144(this, function () {
          var _0x2b0285;
          try {
            var _0x4a6466 = Function("return (function() {}.constructor(\"return this\")( ));");
            _0x2b0285 = _0x4a6466();
          } catch (_0x3a3b11) {
            _0x2b0285 = window;
          }
          var _0x4cdba9 = _0x2b0285.console = _0x2b0285.console || {};
          var _0x4eb3a8 = ["log", "warn", "info", 'error', 'exception', "table", "trace"];
          for (var _0x333f3b = 0x0; _0x333f3b < _0x4eb3a8.length; _0x333f3b++) {
            var _0x139893 = _0x3c7144.constructor.prototype.bind(_0x3c7144);
            var _0x5ac3ad = _0x4eb3a8[_0x333f3b];
            var _0x74d237 = _0x4cdba9[_0x5ac3ad] || _0x139893;
            _0x139893.__proto__ = _0x3c7144.bind(_0x3c7144);
            _0x139893.toString = _0x74d237.toString.bind(_0x74d237);
            _0x4cdba9[_0x5ac3ad] = _0x139893;
          }
        });
        _0x17d62d();
        Lampa.Template.add("lampac_prestige_full", "<div class=\"online-prestige online-prestige--full selector\">\n            <div class=\"online-prestige__img\">\n                <img alt=\"\">\n                <div class=\"online-prestige__loader\"></div>\n            </div>\n            <div class=\"online-prestige__body\">\n                <div class=\"online-prestige__head\">\n                    <div class=\"online-prestige__title\">{title}</div>\n                    <div class=\"online-prestige__time\">{time}</div>\n                </div>\n\n                <div class=\"online-prestige__timeline\"></div>\n\n                <div class=\"online-prestige__footer\">\n                    <div class=\"online-prestige__info\">{info}</div>\n                    <div class=\"online-prestige__quality\">{quality}</div>\n                </div>\n            </div>\n        </div>");
        Lampa.Template.add("lampac_content_loading", "<div class=\"online-empty\">\n            <div class=\"broadcast__scan\"><div></div></div>\n\t\t\t\n            <div class=\"online-empty__templates\">\n                <div class=\"online-empty-template selector\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n            </div>\n        </div>");
        Lampa.Template.add("lampac_does_not_answer", "<div class=\"online-empty\">\n            <div class=\"online-empty__title\">\n                #{lampac_balanser_dont_work}\n            </div>\n            <div class=\"online-empty__time\">\n                #{lampac_balanser_timeout}\n            </div>\n            <div class=\"online-empty__buttons\">\n                <div class=\"online-empty__button selector cancel\">#{cancel}</div>\n                <div class=\"online-empty__button selector change\">#{lampac_change_balanser}</div>\n            </div>\n            <div class=\"online-empty__templates\">\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n            </div>\n        </div>");
        Lampa.Template.add('lampac_prestige_rate', "<div class=\"online-prestige-rate\">\n            <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.39409 0.192139L10.99 5.30994L16.7882 6.20387L12.5475 10.4277L13.5819 15.9311L8.39409 13.2425L3.20626 15.9311L4.24065 10.4277L0 6.20387L5.79819 5.30994L8.39409 0.192139Z\" fill=\"#fff\"></path>\n            </svg>\n            <span>{rate}</span>\n        </div>");
        Lampa.Template.add("lampac_prestige_folder", "<div class=\"online-prestige online-prestige--folder selector\">\n            <div class=\"online-prestige__folder\">\n                <svg viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"></rect>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"></path>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"></rect>\n                </svg>\n            </div>\n            <div class=\"online-prestige__body\">\n                <div class=\"online-prestige__head\">\n                    <div class=\"online-prestige__title\">{title}</div>\n                    <div class=\"online-prestige__time\">{time}</div>\n                </div>\n\n                <div class=\"online-prestige__footer\">\n                    <div class=\"online-prestige__info\">{info}</div>\n                </div>\n            </div>\n        </div>");
        Lampa.Template.add("lampac_prestige_watched", "<div class=\"online-prestige online-prestige-watched selector\">\n            <div class=\"online-prestige-watched__icon\">\n                <svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"10.5\" cy=\"10.5\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M14.8477 10.5628L8.20312 14.399L8.20313 6.72656L14.8477 10.5628Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n            <div class=\"online-prestige-watched__body\">\n                \n            </div>\n        </div>");
      }
      var _0x23c8ee = "<div class=\"full-start__button selector view--online_cinema cinema--button\" data-subtitle=\"".concat('Cinema', " v").concat("1.2.6", "\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 392.697 392.697\" xml:space=\"preserve\">\n            <path d=\"M21.837,83.419l36.496,16.678L227.72,19.886c1.229-0.592,2.002-1.846,1.98-3.209c-0.021-1.365-0.834-2.592-2.082-3.145\n                L197.766,0.3c-0.903-0.4-1.933-0.4-2.837,0L21.873,77.036c-1.259,0.559-2.073,1.803-2.081,3.18\n                C19.784,81.593,20.584,82.847,21.837,83.419z\" fill=\"currentColor\"></path>\n            <path d=\"M185.689,177.261l-64.988-30.01v91.617c0,0.856-0.44,1.655-1.167,2.114c-0.406,0.257-0.869,0.386-1.333,0.386\n                c-0.368,0-0.736-0.082-1.079-0.244l-68.874-32.625c-0.869-0.416-1.421-1.293-1.421-2.256v-92.229L6.804,95.5\n                c-1.083-0.496-2.344-0.406-3.347,0.238c-1.002,0.645-1.608,1.754-1.608,2.944v208.744c0,1.371,0.799,2.615,2.045,3.185\n                l178.886,81.768c0.464,0.211,0.96,0.315,1.455,0.315c0.661,0,1.318-0.188,1.892-0.555c1.002-0.645,1.608-1.754,1.608-2.945\n                V180.445C187.735,179.076,186.936,177.831,185.689,177.261z\" fill=\"currentColor\"></path>\n            <path d=\"M389.24,95.74c-1.002-0.644-2.264-0.732-3.347-0.238l-178.876,81.76c-1.246,0.57-2.045,1.814-2.045,3.185v208.751\n                c0,1.191,0.606,2.302,1.608,2.945c0.572,0.367,1.23,0.555,1.892,0.555c0.495,0,0.991-0.104,1.455-0.315l178.876-81.768\n                c1.246-0.568,2.045-1.813,2.045-3.185V98.685C390.849,97.494,390.242,96.384,389.24,95.74z\" fill=\"currentColor\"></path>\n            <path d=\"M372.915,80.216c-0.009-1.377-0.823-2.621-2.082-3.18l-60.182-26.681c-0.938-0.418-2.013-0.399-2.938,0.045\n                l-173.755,82.992l60.933,29.117c0.462,0.211,0.958,0.316,1.455,0.316s0.993-0.105,1.455-0.316l173.066-79.092\n                C372.122,82.847,372.923,81.593,372.915,80.216z\" fill=\"currentColor\"></path>\n        </svg>\n\n        <span>#{title_online}</span>\n    </div>");
      Lampa.Component.add("cinema", _0xf3da2c);
      _0x130164();
      function _0x5c1798(_0x42f843) {
        if (_0x42f843.render.find(".cinema--button").length) {
          return;
        }
        var _0x5af6df = $(Lampa.Lang.translate(_0x23c8ee));
        _0x5af6df.on("hover:enter", function () {
          _0x130164();
          Lampa.Component.add("cinema", _0xf3da2c);
          Lampa.Activity.push({
            'url': '',
            'title': Lampa.Lang.translate("title_online"),
            'component': "cinema",
            'search': _0x42f843.movie.title,
            'search_one': _0x42f843.movie.title,
            'search_two': _0x42f843.movie.original_title,
            'movie': _0x42f843.movie,
            'page': 0x1
          });
        });
        _0x42f843.render.before(_0x5af6df);
      }
      Lampa.Listener.follow("full", function (_0x519a13) {
        if (_0x519a13.type == 'complite') {
          if (Lampa.Storage.get("card_interfice_type") === 'new') {
            _0x5c1798({
              'render': _0x519a13.object.activity.render().find(".button--play"),
              'movie': _0x519a13.data.movie
            });
          } else {
            _0x5c1798({
              'render': _0x519a13.object.activity.render().find('.view--torrent'),
              'movie': _0x519a13.data.movie
            });
          }
        }
      });
      try {
        if (Lampa.Activity.active().component == 'full') {
          _0x5c1798({
            'render': Lampa.Activity.active().activity.render().find(".view--torrent"),
            'movie': Lampa.Activity.active().card
          });
        }
      } catch (_0x4333fd) {}
      if (Lampa.Manifest.app_digital >= 0xb1) {
        var _0x9d3d3a = ['filmix', "fxapi", 'kinobase', "rezka", "voidboost", "videocdn", "videodb", "collaps", "hdvb", "zetflix", "kodik", "ashdi", "eneyida", "kinoukr", 'kinokrad', "kinotochka", "kinoprofi", 'remux', "iframevideo", "cdnmovies", "anilibria", "animedia", 'animego', "animevost", "animebesst", 'redheadsound', "alloha", "seasonvar", "kinopub", 'vokino'];
        _0x9d3d3a.forEach(function (_0x2b02a9) {
          Lampa.Storage.sync("online_choice_" + _0x2b02a9, "object_object");
        });
        Lampa.Storage.sync("online_watched_last", 'object_object');
      }
    }
    if (!window.cinema_plugin) {
      _0x2904d6();
    }
    Lampa.Listener.follow("full", function (_0xde2a8d) {
      if (_0xde2a8d.type == "complite") {
        setTimeout(function () {
          $(".view--online_cinema", Lampa.Activity.active().activity.render()).empty().append("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1.2em\" height=\"1.2em\" viewBox=\"0 0 32 32\"><g fill=\"currentColor\"><path d=\"M15.5 13a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M12 16.5a2.5 2.5 0 0 1 2.5-2.5h8a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5zm-4.953-1.637v8.326a.75.75 0 0 0 1.28.53l2.469-2.468a.75.75 0 0 0 .22-.53v-3.409a.75.75 0 0 0-.222-.532l-2.469-2.45a.75.75 0 0 0-1.278.533M25 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0\"/><path d=\"M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z\"/></g></svg>&nbsp&nbspCinema");
          Lampa.Controller.toggle('full_start');
        }, 0x5);
      }
    });
  })();
})();