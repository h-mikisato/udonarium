/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $gvars = Opal.gvars;

  Opal.add_stubs(['$setPrefixes', '$debug', '$=~', '$+', '$*', '$to_i', '$sub', '$gsub', '$tandt_berserk', '$==', '$getMaxSuccessLevel', '$>=', '$getExperiencePoint', '$-', '$<=', '$>', '$/', '$is_int?', '$sprintf', '$parren_killer', '$push', '$loop', '$shift', '$roll', '$&', '$sortType', '$collect', '$split', '$times', '$each', '$[]', '$[]=', '$<', '$length', '$-@', '$!=', '$sendMode']);
  return (function($base, $super, $parent_nesting) {
    function $TunnelsAndTrolls(){};
    var self = $TunnelsAndTrolls = $klass($base, $super, 'TunnelsAndTrolls', $TunnelsAndTrolls);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_TunnelsAndTrolls_initialize_1, TMP_TunnelsAndTrolls_gameName_2, TMP_TunnelsAndTrolls_gameType_3, TMP_TunnelsAndTrolls_getHelpMessage_4, TMP_TunnelsAndTrolls_changeText_10, TMP_TunnelsAndTrolls_dice_command_xRn_11, TMP_TunnelsAndTrolls_check_2D6_12, TMP_TunnelsAndTrolls_getMaxSuccessLevel_13, TMP_TunnelsAndTrolls_getDiceRolledAdditionalText_14, TMP_TunnelsAndTrolls_getExperiencePoint_15, TMP_TunnelsAndTrolls_is_int$q_16, TMP_TunnelsAndTrolls_tandt_berserk_23;

    def.diffText = nil;
    
    self.$setPrefixes(["(\\d+H?BS)"]);
    
    Opal.defn(self, '$initialize', TMP_TunnelsAndTrolls_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_TunnelsAndTrolls_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_TunnelsAndTrolls_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_TunnelsAndTrolls_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 1;
      return (self.sameDiceRerollCount = 1);
    }, TMP_TunnelsAndTrolls_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_TunnelsAndTrolls_gameName_2 = function $$gameName() {
      var self = this;

      return "トンネルズ＆トロールズ"
    }, TMP_TunnelsAndTrolls_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_TunnelsAndTrolls_gameType_3 = function $$gameType() {
      var self = this;

      return "Tunnels & Trolls"
    }, TMP_TunnelsAndTrolls_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_TunnelsAndTrolls_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・行為判定　(nD6+x>=nLV)\n" + "失敗、成功、自動失敗の自動判定とゾロ目の振り足し経験値の自動計算を行います。\n" + "SAVEの難易度を「レベル」で表記することが出来ます。\n" + "例えば「2Lv」と書くと「25」に置換されます。\n" + "判定時以外は悪意ダメージを表示します。\n" + "バーサークとハイパーバーサーク用に専用コマンドが使えます。\n" + "例）2D6+1>=1Lv\n" + "　 (2D6+1>=20) ＞ 7[2,5]+1 ＞ 8 ＞ 失敗\n" + "　判定時にはゾロ目を自動で振り足します。\n" + "\n" + "・バーサークとハイパーバーサーク　(nBS+x or nHBS+x)\n" + "　\"(ダイス数)BS(修正値)\"でバーサーク、\"(ダイス数)HBS(修正値)\"でハイパーバーサークでロールできます。\n" + "　最初のダイスの読替は、個別の出目はそのままで表示。\n" + "　下から２番目の出目をずらした分だけ合計にマイナス修正を追加して表示します。\n"
    }, TMP_TunnelsAndTrolls_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_TunnelsAndTrolls_changeText_10 = function $$changeText(string) {
      var $a, TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, self = this, level_diff = nil;

      
      self.$debug("Tunnels & Trolls parren_killer begin string", string);
      if ($truthy(/(\d+)LV/i['$=~'](string))) {
        
        level_diff = $rb_plus($rb_times((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i(), 5), 15);
        string = $send(string, 'sub', [/(\d+)LV/i], (TMP_5 = function(){var self = TMP_5.$$s || this;

        return "" + (level_diff)}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));};
      if ($truthy(/BS/i['$=~'](string))) {
        
        string = $send(string, 'gsub', [/(\d+)HBS([^\d\s][\+\-\d]+)/i], (TMP_6 = function(){var self = TMP_6.$$s || this, $b;

        return "" + ((($b = $gvars['~']) === nil ? nil : $b['$[]'](1))) + "R6" + ((($b = $gvars['~']) === nil ? nil : $b['$[]'](2))) + "[H]"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
        string = $send(string, 'gsub', [/(\d+)HBS/i], (TMP_7 = function(){var self = TMP_7.$$s || this, $b;

        return "" + ((($b = $gvars['~']) === nil ? nil : $b['$[]'](1))) + "R6[H]"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
        string = $send(string, 'gsub', [/(\d+)BS([^\d\s][\+\-\d]+)/i], (TMP_8 = function(){var self = TMP_8.$$s || this, $b;

        return "" + ((($b = $gvars['~']) === nil ? nil : $b['$[]'](1))) + "R6" + ((($b = $gvars['~']) === nil ? nil : $b['$[]'](2)))}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
        string = $send(string, 'gsub', [/(\d+)BS/i], (TMP_9 = function(){var self = TMP_9.$$s || this, $b;

        return "" + ((($b = $gvars['~']) === nil ? nil : $b['$[]'](1))) + "R6"}, TMP_9.$$s = self, TMP_9.$$arity = 0, TMP_9));};
      return string;
    }, TMP_TunnelsAndTrolls_changeText_10.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_TunnelsAndTrolls_dice_command_xRn_11 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$tandt_berserk(string, nick_e)
    }, TMP_TunnelsAndTrolls_dice_command_xRn_11.$$arity = 2);
    
    Opal.defn(self, '$check_2D6', TMP_TunnelsAndTrolls_check_2D6_12 = function $$check_2D6(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this, experiencePoint = nil;

      
      self.$debug("Tunnels & Trolls check_2D6 begin");
      if ($truthy(signOfInequality['$=='](">="))) {
        } else {
        return ""
      };
      self.$debug("Tunnels & Trolls check_2D6 pass1");
      if ($truthy(dice_n['$=='](3))) {
        return " ＞ 自動失敗"};
      if ($truthy(self.diffText['$==']("?"))) {
        return self.$getMaxSuccessLevel(total_n, dice_n)};
      if ($truthy($rb_ge(total_n, diff))) {
        
        experiencePoint = self.$getExperiencePoint(diff, dice_n);
        return "" + " ＞ 成功 ＞ 経験値" + (experiencePoint);};
      return " ＞ 失敗";
    }, TMP_TunnelsAndTrolls_check_2D6_12.$$arity = 8);
    
    Opal.defn(self, '$getMaxSuccessLevel', TMP_TunnelsAndTrolls_getMaxSuccessLevel_13 = function $$getMaxSuccessLevel(total_n, dice_n) {
      var $a, self = this, sucLv = nil;

      
      sucLv = 1;
      while ($truthy($rb_ge(total_n, $rb_plus($rb_times(sucLv, 5), 15)))) {
        sucLv = $rb_plus(sucLv, 1)
      };
      sucLv = $rb_minus(sucLv, 1);
      if ($truthy($rb_le(sucLv, 0))) {
        return "" + " ＞ 失敗 ＞ 経験値" + (dice_n)};
      return "" + " ＞ " + (sucLv) + "Lv成功 ＞ 経験値" + (dice_n);
    }, TMP_TunnelsAndTrolls_getMaxSuccessLevel_13.$$arity = 2);
    
    Opal.defn(self, '$getDiceRolledAdditionalText', TMP_TunnelsAndTrolls_getDiceRolledAdditionalText_14 = function $$getDiceRolledAdditionalText(n1, n_max, dice_max) {
      var $a, self = this;

      
      self.$debug("getDiceRolledAdditionalText n1, n_max, dice_max", n1, n_max, dice_max);
      if ($truthy(($truthy($a = $rb_gt(n_max, 0)) ? dice_max['$=='](6) : $a))) {
        return "" + " ＞ 悪意" + (n_max)};
      return "";
    }, TMP_TunnelsAndTrolls_getDiceRolledAdditionalText_14.$$arity = 3);
    
    Opal.defn(self, '$getExperiencePoint', TMP_TunnelsAndTrolls_getExperiencePoint_15 = function $$getExperiencePoint(diff, dice_n) {
      var self = this, experiencePoint = nil;

      
      self.$debug("diff", diff);
      self.$debug("dice_n", dice_n);
      experiencePoint = $rb_times($rb_divide($rb_times(1.0, $rb_minus(diff, 15)), 5), dice_n);
      if ($truthy(self['$is_int?'](experiencePoint))) {
        experiencePoint = experiencePoint.$to_i()
        } else {
        experiencePoint = self.$sprintf("%.1f", experiencePoint)
      };
      self.$debug("experiencePoint", experiencePoint);
      return experiencePoint;
    }, TMP_TunnelsAndTrolls_getExperiencePoint_15.$$arity = 2);
    
    Opal.defn(self, '$is_int?', TMP_TunnelsAndTrolls_is_int$q_16 = function(v) {
      var self = this;

      return v['$=='](v.$to_i())
    }, TMP_TunnelsAndTrolls_is_int$q_16.$$arity = 1);
    return (Opal.defn(self, '$tandt_berserk', TMP_TunnelsAndTrolls_tandt_berserk_23 = function $$tandt_berserk(string, nick_e) {
      var $a, TMP_17, self = this, output = nil, reg2 = nil, reg3 = nil, reg4 = nil, reg5 = nil, reg6 = nil, dice_c = nil, bonus = nil, isHyperBerserk = nil, dice_arr = nil, dice_now = nil, dice_str = nil, isFirstLoop = nil, n_max = nil, total_n = nil, bonus2 = nil;

      
      self.$debug("tandt_berserk string", string);
      output = "1";
      if ($truthy(/(^|\s)S?((\d+)[rR]6([\+\-\d]*)(\[(\w+)\])?)(\s|$)/i['$=~'](string))) {
        } else {
        return output
      };
      self.$debug("tandt_berserk matched");
      reg2 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      reg3 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      reg4 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](4));
      reg5 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5));
      reg6 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](6));
      string = reg2;
      dice_c = reg3.$to_i();
      bonus = 0;
      if ($truthy(reg4)) {
        bonus = self.$parren_killer("" + "(0" + (reg4) + ")").$to_i()};
      isHyperBerserk = false;
      if ($truthy(($truthy($a = reg5) ? reg6['$=~'](/[Hh]/) : $a))) {
        isHyperBerserk = true};
      dice_arr = [];
      dice_now = 0;
      dice_str = "";
      isFirstLoop = true;
      n_max = 0;
      total_n = 0;
      bonus2 = 0;
      self.$debug("isHyperBerserk", isHyperBerserk);
      dice_arr.$push(dice_c);
      (function(){var $brk = Opal.new_brk(); try {return $send(self, 'loop', [], (TMP_17 = function(){var self = TMP_17.$$s || this, $b, $c, TMP_18, TMP_19, TMP_20, TMP_21, TMP_22, dice_wk = nil, rollTotal = nil, rollDiceResultText = nil, roll_cnt1 = nil, rollDiceMaxCount = nil, roll_n_max = nil, roll_cnt_suc = nil, roll_cnt_re = nil, dice_num = nil, diceType = nil, dice_face = nil, min1 = nil, min2 = nil;

      
        self.$debug("loop dice_arr", dice_arr);
        dice_wk = dice_arr.$shift();
        self.$debug("roll dice_wk d6", dice_wk);
        $c = self.$roll(dice_wk, 6, self.$sortType()['$&'](1)), $b = Opal.to_ary($c), (rollTotal = ($b[0] == null ? nil : $b[0])), (rollDiceResultText = ($b[1] == null ? nil : $b[1])), (roll_cnt1 = ($b[2] == null ? nil : $b[2])), (rollDiceMaxCount = ($b[3] == null ? nil : $b[3])), (roll_n_max = ($b[4] == null ? nil : $b[4])), (roll_cnt_suc = ($b[5] == null ? nil : $b[5])), (roll_cnt_re = ($b[6] == null ? nil : $b[6])), $c;
        self.$debug("rollTotal, rollDiceResultText, roll_cnt1, rollDiceMaxCount, roll_n_max, roll_cnt_suc, roll_cnt_re", rollTotal, rollDiceResultText, roll_cnt1, rollDiceMaxCount, roll_n_max, roll_cnt_suc, roll_cnt_re);
        if ($truthy($rb_ge(dice_wk, 2))) {
          
          dice_num = $send(rollDiceResultText.$split(/,/), 'collect', [], (TMP_18 = function(i){var self = TMP_18.$$s || this;
if (i == null) i = nil;
          return i.$to_i()}, TMP_18.$$s = self, TMP_18.$$arity = 1, TMP_18));
          self.$debug("dice_num", dice_num);
          diceType = 6;
          dice_face = [];
          $send(diceType, 'times', [], (TMP_19 = function(i){var self = TMP_19.$$s || this;
if (i == null) i = nil;
          return dice_face.$push(0)}, TMP_19.$$s = self, TMP_19.$$arity = 1, TMP_19));
          $send(dice_num, 'each', [], (TMP_20 = function(dice_o){var self = TMP_20.$$s || this, $writer = nil;
if (dice_o == null) dice_o = nil;
          
            $writer = [$rb_minus(dice_o, 1), $rb_plus(dice_face['$[]']($rb_minus(dice_o, 1)), 1)];
            $send(dice_face, '[]=', Opal.to_a($writer));
            return $writer[$rb_minus($writer["length"], 1)];}, TMP_20.$$s = self, TMP_20.$$arity = 1, TMP_20));
          $send(dice_face, 'each', [], (TMP_21 = function(dice_o){var self = TMP_21.$$s || this;
if (dice_o == null) dice_o = nil;
          if ($truthy($rb_ge(dice_o, 2))) {
              
              if ($truthy(isHyperBerserk)) {
                dice_o = $rb_plus(dice_o, 1)};
              return dice_arr.$push(dice_o);
              } else {
              return nil
            }}, TMP_21.$$s = self, TMP_21.$$arity = 1, TMP_21));
          if ($truthy(($truthy($b = isFirstLoop) ? $rb_lt(dice_arr.$length(), 1) : $b))) {
            
            min1 = 0;
            min2 = 0;
            $send(diceType, 'times', [], (TMP_22 = function(i){var self = TMP_22.$$s || this, index = nil;
if (i == null) i = nil;
            
              index = $rb_minus($rb_minus(diceType, i), 1);
              self.$debug("diceType index", index);
              if ($truthy($rb_gt(dice_face['$[]'](index), 0))) {
                
                min2 = min1;
                return (min1 = index);
                } else {
                return nil
              };}, TMP_22.$$s = self, TMP_22.$$arity = 1, TMP_22));
            self.$debug("min1, min2", min1, min2);
            bonus2 = $rb_minus(min2, min1)['$-@']();
            if ($truthy(min2['$=='](5))) {
              rollDiceMaxCount = $rb_minus(rollDiceMaxCount, 1)};
            if ($truthy(isHyperBerserk)) {
              dice_arr.$push(3)
              } else {
              dice_arr.$push(2)
            };};};
        dice_now = $rb_plus(dice_now, rollTotal);
        if ($truthy(dice_str['$!='](""))) {
          dice_str = $rb_plus(dice_str, "][")};
        dice_str = $rb_plus(dice_str, rollDiceResultText);
        n_max = $rb_plus(n_max, rollDiceMaxCount);
        isFirstLoop = false;
        self.$debug("loop last chek dice_arr", dice_arr);
        if ($truthy(dice_arr.$length()['$!='](0))) {
          return nil
          } else {
          
          Opal.brk(nil, $brk)
        };}, TMP_17.$$s = self, TMP_17.$$brk = $brk, TMP_17.$$arity = 0, TMP_17))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      self.$debug("loop breaked");
      self.$debug("dice_now, bonus, bonus2", dice_now, bonus, bonus2);
      total_n = $rb_plus($rb_plus(dice_now, bonus), bonus2);
      dice_str = "" + "[" + (dice_str) + "]";
      output = "" + (dice_now) + (dice_str);
      if ($truthy($rb_lt(bonus2, 0))) {
        
        self.$debug("bonus2", bonus2);
        output = $rb_plus(output, "" + (bonus2));};
      self.$debug("bonus", bonus);
      if ($truthy($rb_gt(bonus, 0))) {
        output = $rb_plus(output, "" + "+" + (bonus))
      } else if ($truthy($rb_lt(bonus, 0))) {
        output = $rb_plus(output, "" + (bonus))};
      if ($truthy($rb_gt(self.$sendMode(), 0))) {
        if ($truthy(output['$=~'](/[^\d\[\]]+/))) {
          output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (output) + " ＞ " + (total_n)
          } else {
          output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (total_n)
        }
        } else {
        output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (total_n)
      };
      if ($truthy($rb_gt(n_max, 0))) {
        output = $rb_plus(output, "" + " ＞ 悪意" + (n_max))};
      return output;
    }, TMP_TunnelsAndTrolls_tandt_berserk_23.$$arity = 2), nil) && 'tandt_berserk';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
