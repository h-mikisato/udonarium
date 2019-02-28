/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $gvars = Opal.gvars, $hash2 = Opal.hash2;

  Opal.add_stubs(['$setPrefixes', '$sub', '$===', '$to_i', '$debug', '$getCriticalResult', '$getDownResult', '$getCheckDieResult', '$lambda', '$getXrmDamage', '$getHitResult', '$getXrmDamageTable', '$collect', '$*', '$get_table_by_2d6', '$raise', '$getBaseValue', '$getHitPart', '$times', '$getHitText', '$+', '$getDamages', '$<<', '$join', '$>=', '$length', '$>', '$getTotalDamage', '$nil?', '$parren_killer', '$roll', '$call', '$ceil', '$/', '$getDamageInfo', '$getHitResultOne', '$[]', '$[]=', '$-', '$empty?', '$each', '$delete', '$inject', '$size', '$inspect', '$getPart', '$gsub', '$index', '$!', '$==', '$get_table_by_nD6', '$get_table_by_number', '$get_table_by_1d6']);
  return (function($base, $super, $parent_nesting) {
    function $BattleTech(){};
    var self = $BattleTech = $klass($base, $super, 'BattleTech', $BattleTech);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_BattleTech_initialize_1, TMP_BattleTech_gameName_2, TMP_BattleTech_gameType_3, TMP_BattleTech_getHelpMessage_4, TMP_BattleTech_changeText_5, TMP_BattleTech_undefCommandResult_6, TMP_BattleTech_rollDiceCommand_9, TMP_BattleTech_getXrmDamage_11, TMP_BattleTech_getXrmDamageTable_12, TMP_BattleTech_getHitResult_14, TMP_BattleTech_getBaseValue_15, TMP_BattleTech_getHitPart_16, TMP_BattleTech_getHitText_17, TMP_BattleTech_getDamages_19, TMP_BattleTech_getDamageInfo_20, TMP_BattleTech_getTotalDamage_23, TMP_BattleTech_getHitResultOne_24, TMP_BattleTech_getPart_25, TMP_BattleTech_getCriticalResult_26, TMP_BattleTech_getDownResult_27, TMP_BattleTech_getCheckDieResult_28;

    
    self.$setPrefixes(["\\d*SRM\\d+.+", "\\d*LRM\\d+.+", "\\d*BT.+", "CT", "DW", "CD\\d+"]);
    
    Opal.defn(self, '$initialize', TMP_BattleTech_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_BattleTech_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_BattleTech_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_BattleTech_initialize_1, false), $zuper, $iter)
    }, TMP_BattleTech_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_BattleTech_gameName_2 = function $$gameName() {
      var self = this;

      return "バトルテック"
    }, TMP_BattleTech_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_BattleTech_gameType_3 = function $$gameType() {
      var self = this;

      return "BattleTech"
    }, TMP_BattleTech_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_BattleTech_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定方法\n" + "　(回数)BT(ダメージ)(部位)+(基本値)>=(目標値)\n" + "　回数は省略時 1固定。\n" + "　部位はC（正面）R（右）、L（左）。省略時はC（正面）固定\n" + "　U（上半身）、L（下半身）を組み合わせ CU/RU/LU/CL/RL/LLも指定可能\n" + "　例）BT3+2>=4\n" + "　　正面からダメージ3の攻撃を技能ベース2目標値4で1回判定\n" + "　例）2BT3RL+5>=8\n" + "　　右下半身にダメージ3の攻撃を技能ベース5目標値8で2回判定\n" + "　ミサイルによるダメージは BT(ダメージ)の変わりに SRM2/4/6, LRM5/10/15/20を指定\n" + "　例）3SRM6LU+5>=8\n" + "　　左上半身にSRM6連を技能ベース5目標値8で3回判定\n" + "・CT：致命的命中表\n" + "・DW：転倒後の向き表\n" + "・CDx：メック戦士意識維持表。ダメージ値xで判定　例）CD3\n"
    }, TMP_BattleTech_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_BattleTech_changeText_5 = function $$changeText(string) {
      var self = this;

      return string.$sub(/PPC/, "BT10")
    }, TMP_BattleTech_changeText_5.$$arity = 1);
    
    Opal.defn(self, '$undefCommandResult', TMP_BattleTech_undefCommandResult_6 = function $$undefCommandResult() {
      var self = this;

      return "1"
    }, TMP_BattleTech_undefCommandResult_6.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_BattleTech_rollDiceCommand_9 = function $$rollDiceCommand(command) {
      var $a, $b, TMP_7, TMP_8, self = this, count = nil, $case = nil, criticalDice = nil, criticalText = nil, damage = nil, tail = nil, type = nil, damageFunc = nil, damageValue = nil;

      
      count = 1;
      if ($truthy(/^(\d+)(.+)/['$==='](command))) {
        
        count = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
        command = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));};
      self.$debug("executeCommandCatched count", count);
      self.$debug("executeCommandCatched command", command);
      $case = command;
      if (/^CT$/['$===']($case)) {
      $b = self.$getCriticalResult(), $a = Opal.to_ary($b), (criticalDice = ($a[0] == null ? nil : $a[0])), (criticalText = ($a[1] == null ? nil : $a[1])), $b;
      return "" + (criticalDice) + " ＞ " + (criticalText);}
      else if (/^DW$/['$===']($case)) {return self.$getDownResult()}
      else if (/^CD(\d+)$/['$===']($case)) {
      damage = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
      return self.$getCheckDieResult(damage);}
      else if (/^((S|L)RM\d+)(.+)/['$===']($case)) {
      tail = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      type = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      damageFunc = $send(self, 'lambda', [], (TMP_7 = function(){var self = TMP_7.$$s || this;

      return self.$getXrmDamage(type)}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      return self.$getHitResult(count, damageFunc, tail);}
      else if (/^BT(\d+)(.+)/['$===']($case)) {
      self.$debug("BT pattern");
      tail = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      damageValue = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
      damageFunc = $send(self, 'lambda', [], (TMP_8 = function(){var self = TMP_8.$$s || this;

      return damageValue}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      return self.$getHitResult(count, damageFunc, tail);};
      return nil;
    }, TMP_BattleTech_rollDiceCommand_9.$$arity = 1);
    
    Opal.defn(self, '$getXrmDamage', TMP_BattleTech_getXrmDamage_11 = function $$getXrmDamage(type) {
      var $a, $b, TMP_10, self = this, table = nil, isLrm = nil, damage = nil, dice = nil;

      
      $b = self.$getXrmDamageTable(type), $a = Opal.to_ary($b), (table = ($a[0] == null ? nil : $a[0])), (isLrm = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy(isLrm)) {
        } else {
        table = $send(table, 'collect', [], (TMP_10 = function(i){var self = TMP_10.$$s || this;
if (i == null) i = nil;
        return $rb_times(i, 2)}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10))
      };
      $b = self.$get_table_by_2d6(table), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice = ($a[1] == null ? nil : $a[1])), $b;
      return [damage, dice, isLrm];
    }, TMP_BattleTech_getXrmDamage_11.$$arity = 1);
    
    Opal.defn(self, '$getXrmDamageTable', TMP_BattleTech_getXrmDamageTable_12 = function $$getXrmDamageTable(type) {
      var self = this, $case = nil;

      return (function() {$case = type;
      if (/^SRM2$/i['$===']($case)) {return [[1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2], false]}
      else if (/^SRM4$/i['$===']($case)) {return [[1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4], false]}
      else if (/^SRM6$/i['$===']($case)) {return [[2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6], false]}
      else if (/^LRM5$/i['$===']($case)) {return [[1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5], true]}
      else if (/^LRM10$/i['$===']($case)) {return [[3, 3, 4, 6, 6, 6, 6, 8, 8, 10, 10], true]}
      else if (/^LRM15$/i['$===']($case)) {return [[5, 5, 6, 9, 9, 9, 9, 12, 12, 15, 15], true]}
      else if (/^LRM20$/i['$===']($case)) {return [[6, 6, 9, 12, 12, 12, 12, 16, 16, 20, 20], true]}
      else {return self.$raise("" + "unknown XRM type:" + (type))}})()
    }, TMP_BattleTech_getXrmDamageTable_12.$$arity = 1);
    (Opal.class_variable_set($BattleTech, '@@lrmLimit', 5));
    
    Opal.defn(self, '$getHitResult', TMP_BattleTech_getHitResult_14 = function $$getHitResult(count, damageFunc, tail) {
      var $a, TMP_13, self = this, side = nil, baseString = nil, target = nil, base = nil, partTable = nil, resultTexts = nil, damages = nil, hitCount = nil, totalResultText = nil;
      if ($gvars.SEND_STR_MAX == null) $gvars.SEND_STR_MAX = nil;

      
      if ($truthy(/(\w*)(\+\d+)?>=(\d+)/['$==='](tail))) {
        } else {
        return nil
      };
      side = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      baseString = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      target = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3)).$to_i();
      base = self.$getBaseValue(baseString);
      self.$debug("side, base, target", side, base, target);
      partTable = self.$getHitPart(side);
      resultTexts = [];
      damages = $hash2([], {});
      hitCount = 0;
      $send(count, 'times', [], (TMP_13 = function(){var self = TMP_13.$$s || this, $b, $c, isHit = nil, hitResult = nil, damageText = nil;

      
        $c = self.$getHitText(base, target), $b = Opal.to_ary($c), (isHit = ($b[0] == null ? nil : $b[0])), (hitResult = ($b[1] == null ? nil : $b[1])), $c;
        if ($truthy(isHit)) {
          
          hitCount = $rb_plus(hitCount, 1);
          $c = self.$getDamages(damageFunc, partTable, damages), $b = Opal.to_ary($c), (damages = ($b[0] == null ? nil : $b[0])), (damageText = ($b[1] == null ? nil : $b[1])), $c;
          hitResult = $rb_plus(hitResult, damageText);};
        return resultTexts['$<<'](hitResult);}, TMP_13.$$s = self, TMP_13.$$arity = 0, TMP_13));
      totalResultText = resultTexts.$join("\n");
      if ($truthy($rb_ge(totalResultText.$length(), $gvars.SEND_STR_MAX))) {
        totalResultText = "..."};
      totalResultText = $rb_plus(totalResultText, "" + "\n ＞ " + (hitCount) + "回命中");
      if ($truthy($rb_gt(hitCount, 0))) {
        totalResultText = $rb_plus(totalResultText, $rb_plus(" 命中箇所：", self.$getTotalDamage(damages)))};
      return totalResultText;
    }, TMP_BattleTech_getHitResult_14.$$arity = 3);
    
    Opal.defn(self, '$getBaseValue', TMP_BattleTech_getBaseValue_15 = function $$getBaseValue(baseString) {
      var self = this, base = nil;

      
      base = 0;
      if ($truthy(baseString['$nil?']())) {
        return base};
      base = self.$parren_killer($rb_plus($rb_plus("(", baseString), ")")).$to_i();
      return base;
    }, TMP_BattleTech_getBaseValue_15.$$arity = 1);
    
    Opal.defn(self, '$getHitPart', TMP_BattleTech_getHitPart_16 = function $$getHitPart(side) {
      var self = this, $case = nil;

      return (function() {$case = side;
      if (/^L$/i['$===']($case)) {return ["左胴＠", "左脚", "左腕", "左腕", "左脚", "左胴", "胴中央", "右胴", "右腕", "右脚", "頭"]}
      else if (/^C$/i['$===']($case) || ""['$===']($case) || nil['$===']($case)) {return ["胴中央＠", "右腕", "右腕", "右脚", "右胴", "胴中央", "左胴", "左脚", "左腕", "左腕", "頭"]}
      else if (/^R$/i['$===']($case)) {return ["右胴＠", "右脚", "右腕", "右腕", "右脚", "右胴", "胴中央", "左胴", "左腕", "左脚", "頭"]}
      else if (/^LU$/i['$===']($case)) {return ["左胴", "左胴", "胴中央", "左腕", "左腕", "頭"]}
      else if (/^CU$/i['$===']($case)) {return ["左腕", "左胴", "胴中央", "右胴", "右腕", "頭"]}
      else if (/^RU$/i['$===']($case)) {return ["右胴", "右胴", "胴中央", "右腕", "右腕", "頭"]}
      else if (/^LL$/i['$===']($case)) {return ["左脚", "左脚", "左脚", "左脚", "左脚", "左脚"]}
      else if (/^CL$/i['$===']($case)) {return ["右脚", "右脚", "右脚", "左脚", "左脚", "左脚"]}
      else if (/^RL$/i['$===']($case)) {return ["右脚", "右脚", "右脚", "右脚", "右脚", "右脚"]}
      else {return self.$raise("" + "unknown hit part side :" + (side))}})()
    }, TMP_BattleTech_getHitPart_16.$$arity = 1);
    
    Opal.defn(self, '$getHitText', TMP_BattleTech_getHitText_17 = function $$getHitText(base, target) {
      var $a, $b, self = this, dice1 = nil, dice2 = nil, total = nil, isHit = nil, baseString = nil, result = nil;

      
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), $b;
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice2 = ($a[0] == null ? nil : $a[0])), $b;
      total = $rb_plus($rb_plus(dice1, dice2), base);
      isHit = $rb_ge(total, target);
      baseString = (function() {if ($truthy($rb_gt(base, 0))) {
        return "" + "+" + (base)
        } else {
        return ""
      }; return nil; })();
      result = "" + (total) + "[" + (dice1) + "," + (dice2) + (baseString) + "]>=" + (target) + " ＞ ";
      if ($truthy(isHit)) {
        result = $rb_plus(result, "命中 ＞ ")
        } else {
        result = $rb_plus(result, "外れ")
      };
      return [isHit, result];
    }, TMP_BattleTech_getHitText_17.$$arity = 2);
    
    Opal.defn(self, '$getDamages', TMP_BattleTech_getDamages_19 = function $$getDamages(damageFunc, partTable, damages) {
      var $a, $b, TMP_18, self = this, resultText = nil, damage = nil, dice = nil, isLrm = nil, damagePartCount = nil;

      
      resultText = "";
      $b = damageFunc.$call(), $a = Opal.to_ary($b), (damage = ($a[0] == null ? nil : $a[0])), (dice = ($a[1] == null ? nil : $a[1])), (isLrm = ($a[2] == null ? nil : $a[2])), $b;
      damagePartCount = 1;
      if ($truthy(isLrm)) {
        
        damagePartCount = $rb_divide($rb_times(1.0, damage), (($a = $BattleTech.$$cvars['@@lrmLimit']) == null ? nil : $a)).$ceil();
        resultText = $rb_plus(resultText, "" + "[" + (dice) + "] " + (damage) + "点");};
      $send(damagePartCount, 'times', [], (TMP_18 = function(damageIndex){var self = TMP_18.$$s || this, $c, $d, currentDamage = nil, damageText = nil, text = nil, part = nil, criticalText = nil, $writer = nil;
if (damageIndex == null) damageIndex = nil;
      
        $d = self.$getDamageInfo(dice, damage, isLrm, damageIndex), $c = Opal.to_ary($d), (currentDamage = ($c[0] == null ? nil : $c[0])), (damageText = ($c[1] == null ? nil : $c[1])), $d;
        $d = self.$getHitResultOne(damageText, partTable), $c = Opal.to_ary($d), (text = ($c[0] == null ? nil : $c[0])), (part = ($c[1] == null ? nil : $c[1])), (criticalText = ($c[2] == null ? nil : $c[2])), $d;
        if ($truthy(isLrm)) {
          resultText = $rb_plus(resultText, " ")};
        resultText = $rb_plus(resultText, text);
        if ($truthy(damages['$[]'](part)['$nil?']())) {
          
          $writer = [part, $hash2(["partDamages", "criticals"], {"partDamages": [], "criticals": []})];
          $send(damages, '[]=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];};
        damages['$[]'](part)['$[]']("partDamages")['$<<'](currentDamage);
        if ($truthy(criticalText['$empty?']())) {
          return nil
          } else {
          return damages['$[]'](part)['$[]']("criticals")['$<<'](criticalText)
        };}, TMP_18.$$s = self, TMP_18.$$arity = 1, TMP_18));
      return [damages, resultText];
    }, TMP_BattleTech_getDamages_19.$$arity = 3);
    
    Opal.defn(self, '$getDamageInfo', TMP_BattleTech_getDamageInfo_20 = function $$getDamageInfo(dice, damage, isLrm, index) {
      var $a, self = this, currentDamage = nil;

      
      if ($truthy(dice['$nil?']())) {
        return [damage, "" + (damage)]};
      if ($truthy(isLrm)) {
        } else {
        return [damage, "" + "[" + (dice) + "] " + (damage)]
      };
      currentDamage = $rb_minus(damage, $rb_times((($a = $BattleTech.$$cvars['@@lrmLimit']) == null ? nil : $a), index));
      if ($truthy($rb_gt(currentDamage, (($a = $BattleTech.$$cvars['@@lrmLimit']) == null ? nil : $a)))) {
        currentDamage = (($a = $BattleTech.$$cvars['@@lrmLimit']) == null ? nil : $a)};
      return [currentDamage, "" + (currentDamage)];
    }, TMP_BattleTech_getDamageInfo_20.$$arity = 4);
    
    Opal.defn(self, '$getTotalDamage', TMP_BattleTech_getTotalDamage_23 = function $$getTotalDamage(damages) {
      var TMP_21, self = this, parts = nil, allDamage = nil, damageTexts = nil, result = nil;

      
      parts = ["頭", "胴中央", "右胴", "左胴", "右脚", "左脚", "右腕", "左腕"];
      allDamage = 0;
      damageTexts = [];
      $send(parts, 'each', [], (TMP_21 = function(part){var self = TMP_21.$$s || this, TMP_22, damageInfo = nil, damage = nil, damageCount = nil, criticals = nil, text = nil;
if (part == null) part = nil;
      
        damageInfo = damages.$delete(part);
        if ($truthy(damageInfo['$nil?']())) {
          return nil;};
        damage = $send(damageInfo['$[]']("partDamages"), 'inject', [0], (TMP_22 = function(sum, i){var self = TMP_22.$$s || this;
if (sum == null) sum = nil;if (i == null) i = nil;
        return $rb_plus(sum, i)}, TMP_22.$$s = self, TMP_22.$$arity = 2, TMP_22));
        allDamage = $rb_plus(allDamage, damage);
        damageCount = damageInfo['$[]']("partDamages").$size();
        criticals = damageInfo['$[]']("criticals");
        text = "";
        text = $rb_plus(text, "" + (part) + "(" + (damageCount) + "回) " + (damage) + "点");
        if ($truthy(criticals['$empty?']())) {
          } else {
          text = $rb_plus(text, "" + " " + (criticals.$join(" ")))
        };
        return damageTexts['$<<'](text);}, TMP_21.$$s = self, TMP_21.$$arity = 1, TMP_21));
      if ($truthy($rb_gt(damages.$length(), 0))) {
        self.$raise("" + "damages rest!! " + (damages.$inspect()))};
      result = damageTexts.$join(" ／ ");
      result = $rb_plus(result, "" + " ＞ 合計ダメージ " + (allDamage) + "点");
      return result;
    }, TMP_BattleTech_getTotalDamage_23.$$arity = 1);
    
    Opal.defn(self, '$getHitResultOne', TMP_BattleTech_getHitResultOne_24 = function $$getHitResultOne(damageText, partTable) {
      var $a, $b, self = this, part = nil, value = nil, result = nil, index = nil, isCritical = nil, criticalText = nil, criticalDice = nil;

      
      $b = self.$getPart(partTable), $a = Opal.to_ary($b), (part = ($a[0] == null ? nil : $a[0])), (value = ($a[1] == null ? nil : $a[1])), $b;
      result = "";
      result = $rb_plus(result, "" + "[" + (value) + "] " + (part.$gsub(/＠/, "（致命的命中）")) + " " + (damageText) + "点");
      self.$debug("result", result);
      index = part.$index("＠");
      isCritical = index['$nil?']()['$!']();
      self.$debug("isCritical", isCritical);
      part = part.$gsub(/＠/, "");
      criticalText = "";
      if ($truthy(isCritical)) {
        
        $b = self.$getCriticalResult(), $a = Opal.to_ary($b), (criticalDice = ($a[0] == null ? nil : $a[0])), (criticalText = ($a[1] == null ? nil : $a[1])), $b;
        result = $rb_plus(result, "" + " ＞ [" + (criticalDice) + "] " + (criticalText));};
      if ($truthy(criticalText['$==']((($a = $BattleTech.$$cvars['@@noCritical']) == null ? nil : $a)))) {
        criticalText = ""};
      return [result, part, criticalText];
    }, TMP_BattleTech_getHitResultOne_24.$$arity = 2);
    
    Opal.defn(self, '$getPart', TMP_BattleTech_getPart_25 = function $$getPart(partTable) {
      var $a, $b, self = this, diceCount = nil, part = nil, value = nil;

      
      diceCount = 2;
      if ($truthy(partTable.$length()['$=='](6))) {
        diceCount = 1};
      $b = self.$get_table_by_nD6(partTable, diceCount), $a = Opal.to_ary($b), (part = ($a[0] == null ? nil : $a[0])), (value = ($a[1] == null ? nil : $a[1])), $b;
      return [part, value];
    }, TMP_BattleTech_getPart_25.$$arity = 1);
    (Opal.class_variable_set($BattleTech, '@@noCritical', "致命的命中はなかった"));
    
    Opal.defn(self, '$getCriticalResult', TMP_BattleTech_getCriticalResult_26 = function $$getCriticalResult() {
      var $a, $b, self = this, table = nil, dice = nil, result = nil;

      
      table = [[7, (($a = $BattleTech.$$cvars['@@noCritical']) == null ? nil : $a)], [9, "1箇所の致命的命中"], [11, "2箇所の致命的命中"], [12, "その部位が吹き飛ぶ（腕、脚、頭）または3箇所の致命的命中（胴）"]];
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), $b;
      result = self.$get_table_by_number(dice, table, "");
      return [dice, result];
    }, TMP_BattleTech_getCriticalResult_26.$$arity = 0);
    
    Opal.defn(self, '$getDownResult', TMP_BattleTech_getDownResult_27 = function $$getDownResult() {
      var $a, $b, self = this, table = nil, result = nil, dice = nil;

      
      table = ["同じ（前面から転倒） 正面／背面", "1ヘクスサイド右（側面から転倒） 右側面", "2ヘクスサイド右（側面から転倒） 右側面", "180度逆（背面から転倒） 正面／背面", "2ヘクスサイド左（側面から転倒） 左側面", "1ヘクスサイド左（側面から転倒） 左側面"];
      $b = self.$get_table_by_1d6(table), $a = Opal.to_ary($b), (result = ($a[0] == null ? nil : $a[0])), (dice = ($a[1] == null ? nil : $a[1])), $b;
      return "" + (dice) + " ＞ " + (result);
    }, TMP_BattleTech_getDownResult_27.$$arity = 0);
    return (Opal.defn(self, '$getCheckDieResult', TMP_BattleTech_getCheckDieResult_28 = function $$getCheckDieResult(damage) {
      var $a, $b, self = this, table = nil, target = nil, dice1 = nil, dice2 = nil, total = nil, result = nil, text = nil;

      
      if ($truthy($rb_ge(damage, 6))) {
        return "死亡"};
      table = [[1, 3], [2, 5], [3, 7], [4, 10], [5, 11]];
      target = self.$get_table_by_number(damage, table, nil);
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), $b;
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice2 = ($a[0] == null ? nil : $a[0])), $b;
      total = $rb_plus(dice1, dice2);
      result = (function() {if ($truthy($rb_ge(total, target))) {
        return "成功"
        } else {
        return "失敗"
      }; return nil; })();
      text = "" + (total) + "[" + (dice1) + "," + (dice2) + "]>=" + (target) + " ＞ " + (result);
      return text;
    }, TMP_BattleTech_getCheckDieResult_28.$$arity = 1), nil) && 'getCheckDieResult';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
