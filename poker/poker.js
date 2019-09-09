(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'poker'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'poker'.");
    }
    root.poker = factory(typeof poker === 'undefined' ? {} : poker, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var equals = Kotlin.equals;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var unboxChar = Kotlin.unboxChar;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var Comparable = Kotlin.kotlin.Comparable;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var mapNotNull = Kotlin.kotlin.sequences.mapNotNull_qpz9h9$;
  var max = Kotlin.kotlin.sequences.max_gtzq52$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var takeLast = Kotlin.kotlin.collections.takeLast_yzln2o$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var windowed = Kotlin.kotlin.collections.windowed_vo9c23$;
  var zipWithNext = Kotlin.kotlin.collections.zipWithNext_7wnvza$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var getCallableRef = Kotlin.getCallableRef;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var Collection = Kotlin.kotlin.collections.Collection;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  CardNumber.prototype = Object.create(Enum.prototype);
  CardNumber.prototype.constructor = CardNumber;
  Suit.prototype = Object.create(Enum.prototype);
  Suit.prototype.constructor = Suit;
  Hand.prototype = Object.create(Enum.prototype);
  Hand.prototype.constructor = Hand;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function main$updateHand(closure$selectingCards, closure$handNameSpan, closure$strengthSpan, closure$handCards) {
    return function () {
      var hand = checkHand(closure$selectingCards);
      if (hand == null) {
        closure$handNameSpan.textContent = 'too few cards';
        closure$strengthSpan.textContent = '[]';
        clear(closure$handCards);
      }
       else {
        closure$handNameSpan.textContent = hand.hand.toString();
        closure$strengthSpan.textContent = hand.numbers.toString();
        clear(closure$handCards);
        var $receiver = hand.cards;
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(makeCardElement('DIV', item));
        }
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          closure$handCards.appendChild(element);
        }
      }
    };
  }
  function main$lambda(closure$checkbox, closure$selectingCards, closure$card, closure$selectedCards, closure$updateHand) {
    return function (it) {
      if (closure$checkbox.checked) {
        closure$selectingCards.add_11rb$(closure$card);
      }
       else {
        closure$selectingCards.remove_11rb$(closure$card);
      }
      clear(closure$selectedCards);
      var $receiver = closure$selectingCards;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(makeCardElement('DIV', item));
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        closure$selectedCards.appendChild(element);
      }
      closure$updateHand();
      return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    test('D13 H1 H2 H3 S5 C10 H13');
    var suits = ensureNotNull(document.getElementById('suits'));
    var selectedCards = ensureNotNull(document.getElementById('selected-cards'));
    var selectingCards = ArrayList_init_0();
    var handNameSpan = ensureNotNull(document.getElementById('hand-name'));
    var strengthSpan = ensureNotNull(document.getElementById('strength'));
    var handCards = ensureNotNull(document.getElementById('hand-cards'));
    var updateHand = main$updateHand(selectingCards, handNameSpan, strengthSpan, handCards);
    tmp$ = Suit$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var suit = tmp$[tmp$_0];
      var cards = document.createElement('DIV');
      cards.classList.add('cards');
      tmp$_1 = CardNumber$values();
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var num = tmp$_1[tmp$_2];
        var wrapper = document.createElement('SPAN');
        var checkbox = Kotlin.isType(tmp$_3 = document.createElement('INPUT'), HTMLInputElement) ? tmp$_3 : throwCCE();
        var card = new Card(suit, num);
        checkbox.type = 'checkbox';
        checkbox.classList.add('card-check');
        checkbox.style.display = 'none';
        checkbox.id = card.idName;
        checkbox.onchange = main$lambda(checkbox, selectingCards, card, selectedCards, updateHand);
        var label = Kotlin.isType(tmp$_4 = makeCardElement('LABEL', new Card(suit, num)), HTMLLabelElement) ? tmp$_4 : throwCCE();
        label.htmlFor = card.idName;
        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        cards.appendChild(wrapper);
      }
      suits.appendChild(cards);
    }
  }
  function makeCardElement(type, card) {
    var element = document.createElement(type);
    element.innerHTML = card.suit.toString() + '<br>' + card.number;
    element.classList.add('card');
    element.classList.add(card.className);
    element.classList.add(card.suit.color);
    return element;
  }
  function test(card) {
    var cards = Card$Companion_getInstance().cards_61zpoe$(card);
    println(cards.toString() + ' : ' + toString(checkHand(cards)));
  }
  function test_0(cards) {
    println(cards.toString() + ' : ' + toString(checkHand(cards)));
  }
  function CardNumber(name, ordinal, number, viewName) {
    if (viewName === void 0)
      viewName = number.toString();
    Enum.call(this);
    this.number = number;
    this.viewName = viewName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardNumber_initFields() {
    CardNumber_initFields = function () {
    };
    CardNumber$Ace_instance = new CardNumber('Ace', 0, 1, 'A');
    CardNumber$Two_instance = new CardNumber('Two', 1, 2);
    CardNumber$Three_instance = new CardNumber('Three', 2, 3);
    CardNumber$Four_instance = new CardNumber('Four', 3, 4);
    CardNumber$Five_instance = new CardNumber('Five', 4, 5);
    CardNumber$Six_instance = new CardNumber('Six', 5, 6);
    CardNumber$Seven_instance = new CardNumber('Seven', 6, 7);
    CardNumber$Eight_instance = new CardNumber('Eight', 7, 8);
    CardNumber$Nine_instance = new CardNumber('Nine', 8, 9);
    CardNumber$Ten_instance = new CardNumber('Ten', 9, 10);
    CardNumber$Jack_instance = new CardNumber('Jack', 10, 11, 'J');
    CardNumber$Queen_instance = new CardNumber('Queen', 11, 12, 'Q');
    CardNumber$King_instance = new CardNumber('King', 12, 13, 'K');
    CardNumber$Companion_getInstance();
  }
  var CardNumber$Ace_instance;
  function CardNumber$Ace_getInstance() {
    CardNumber_initFields();
    return CardNumber$Ace_instance;
  }
  var CardNumber$Two_instance;
  function CardNumber$Two_getInstance() {
    CardNumber_initFields();
    return CardNumber$Two_instance;
  }
  var CardNumber$Three_instance;
  function CardNumber$Three_getInstance() {
    CardNumber_initFields();
    return CardNumber$Three_instance;
  }
  var CardNumber$Four_instance;
  function CardNumber$Four_getInstance() {
    CardNumber_initFields();
    return CardNumber$Four_instance;
  }
  var CardNumber$Five_instance;
  function CardNumber$Five_getInstance() {
    CardNumber_initFields();
    return CardNumber$Five_instance;
  }
  var CardNumber$Six_instance;
  function CardNumber$Six_getInstance() {
    CardNumber_initFields();
    return CardNumber$Six_instance;
  }
  var CardNumber$Seven_instance;
  function CardNumber$Seven_getInstance() {
    CardNumber_initFields();
    return CardNumber$Seven_instance;
  }
  var CardNumber$Eight_instance;
  function CardNumber$Eight_getInstance() {
    CardNumber_initFields();
    return CardNumber$Eight_instance;
  }
  var CardNumber$Nine_instance;
  function CardNumber$Nine_getInstance() {
    CardNumber_initFields();
    return CardNumber$Nine_instance;
  }
  var CardNumber$Ten_instance;
  function CardNumber$Ten_getInstance() {
    CardNumber_initFields();
    return CardNumber$Ten_instance;
  }
  var CardNumber$Jack_instance;
  function CardNumber$Jack_getInstance() {
    CardNumber_initFields();
    return CardNumber$Jack_instance;
  }
  var CardNumber$Queen_instance;
  function CardNumber$Queen_getInstance() {
    CardNumber_initFields();
    return CardNumber$Queen_instance;
  }
  var CardNumber$King_instance;
  function CardNumber$King_getInstance() {
    CardNumber_initFields();
    return CardNumber$King_instance;
  }
  CardNumber.prototype.toString = function () {
    return this.viewName;
  };
  CardNumber.prototype.next = function () {
    if (equals(this, CardNumber$King_getInstance()))
      return CardNumber$Ace_getInstance();
    else
      return CardNumber$values()[this.ordinal + 1 | 0];
  };
  Object.defineProperty(CardNumber.prototype, 'strength', {
    get: function () {
      if (equals(this, CardNumber$Ace_getInstance()))
        return 14;
      else
        return this.number;
    }
  });
  function CardNumber$Companion() {
    CardNumber$Companion_instance = this;
  }
  CardNumber$Companion.prototype.getByNumber_za3lpa$ = function (num) {
    return CardNumber$values()[num - 1 | 0];
  };
  CardNumber$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardNumber$Companion_instance = null;
  function CardNumber$Companion_getInstance() {
    CardNumber_initFields();
    if (CardNumber$Companion_instance === null) {
      new CardNumber$Companion();
    }
    return CardNumber$Companion_instance;
  }
  CardNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardNumber',
    interfaces: [Enum]
  };
  function CardNumber$values() {
    return [CardNumber$Ace_getInstance(), CardNumber$Two_getInstance(), CardNumber$Three_getInstance(), CardNumber$Four_getInstance(), CardNumber$Five_getInstance(), CardNumber$Six_getInstance(), CardNumber$Seven_getInstance(), CardNumber$Eight_getInstance(), CardNumber$Nine_getInstance(), CardNumber$Ten_getInstance(), CardNumber$Jack_getInstance(), CardNumber$Queen_getInstance(), CardNumber$King_getInstance()];
  }
  CardNumber.values = CardNumber$values;
  function CardNumber$valueOf(name) {
    switch (name) {
      case 'Ace':
        return CardNumber$Ace_getInstance();
      case 'Two':
        return CardNumber$Two_getInstance();
      case 'Three':
        return CardNumber$Three_getInstance();
      case 'Four':
        return CardNumber$Four_getInstance();
      case 'Five':
        return CardNumber$Five_getInstance();
      case 'Six':
        return CardNumber$Six_getInstance();
      case 'Seven':
        return CardNumber$Seven_getInstance();
      case 'Eight':
        return CardNumber$Eight_getInstance();
      case 'Nine':
        return CardNumber$Nine_getInstance();
      case 'Ten':
        return CardNumber$Ten_getInstance();
      case 'Jack':
        return CardNumber$Jack_getInstance();
      case 'Queen':
        return CardNumber$Queen_getInstance();
      case 'King':
        return CardNumber$King_getInstance();
      default:throwISE('No enum constant CardNumber.' + name);
    }
  }
  CardNumber.valueOf_61zpoe$ = CardNumber$valueOf;
  function Card(suit, number) {
    Card$Companion_getInstance();
    this.suit = suit;
    this.number = number;
  }
  Object.defineProperty(Card.prototype, 'className', {
    get: function () {
      return 'card-' + this.suit.name + '-' + this.number.number;
    }
  });
  Object.defineProperty(Card.prototype, 'idName', {
    get: function () {
      return this.suit.name + '-' + this.number.number;
    }
  });
  Card.prototype.toString = function () {
    return this.suit.toString() + ' ' + this.number;
  };
  Card.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Card) ? tmp$ : throwCCE();
    if (this.suit !== other.suit)
      return false;
    if (this.number !== other.number)
      return false;
    return true;
  };
  Card.prototype.hashCode = function () {
    var result = this.suit.hashCode();
    result = (31 * result | 0) + this.number.hashCode() | 0;
    return result;
  };
  function Card$Companion() {
    Card$Companion_instance = this;
  }
  Card$Companion.prototype.cards_61zpoe$ = function (string) {
    var $receiver = split(string, Kotlin.charArrayOf(32));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(toBoxedChar(item.charCodeAt(0)), toInt(item.substring(1))));
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var s = unboxChar(item_0.component1())
      , n = item_0.component2();
      var tmp$_2;
      switch (s) {
        case 83:
          tmp$_2 = Suit$Spade_getInstance();
          break;
        case 67:
          tmp$_2 = Suit$Club_getInstance();
          break;
        case 68:
          tmp$_2 = Suit$Diamond_getInstance();
          break;
        case 72:
          tmp$_2 = Suit$Heart_getInstance();
          break;
        default:throw new NotImplementedError_init();
      }
      tmp$_1.call(destination_0, new Card(tmp$_2, CardNumber$Companion_getInstance().getByNumber_za3lpa$(n)));
    }
    return destination_0;
  };
  Card$Companion.prototype.fromNumber_za3lpa$ = function (num) {
    return new Card(Suit$values()[num / 13 | 0], CardNumber$values()[num % 13]);
  };
  Card$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Card$Companion_instance = null;
  function Card$Companion_getInstance() {
    if (Card$Companion_instance === null) {
      new Card$Companion();
    }
    return Card$Companion_instance;
  }
  Card.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Card',
    interfaces: []
  };
  Card.prototype.component1 = function () {
    return this.suit;
  };
  Card.prototype.component2 = function () {
    return this.number;
  };
  Card.prototype.copy_as3hxk$ = function (suit, number) {
    return new Card(suit === void 0 ? this.suit : suit, number === void 0 ? this.number : number);
  };
  function Suit(name, ordinal, symbol, color) {
    Enum.call(this);
    this.symbol = toBoxedChar(symbol);
    this.color = color;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Suit_initFields() {
    Suit_initFields = function () {
    };
    Suit$Spade_instance = new Suit('Spade', 0, 9824, 'black');
    Suit$Club_instance = new Suit('Club', 1, 9827, 'black');
    Suit$Diamond_instance = new Suit('Diamond', 2, 9830, 'red');
    Suit$Heart_instance = new Suit('Heart', 3, 9829, 'red');
  }
  var Suit$Spade_instance;
  function Suit$Spade_getInstance() {
    Suit_initFields();
    return Suit$Spade_instance;
  }
  var Suit$Club_instance;
  function Suit$Club_getInstance() {
    Suit_initFields();
    return Suit$Club_instance;
  }
  var Suit$Diamond_instance;
  function Suit$Diamond_getInstance() {
    Suit_initFields();
    return Suit$Diamond_instance;
  }
  var Suit$Heart_instance;
  function Suit$Heart_getInstance() {
    Suit_initFields();
    return Suit$Heart_instance;
  }
  Suit.prototype.toString = function () {
    return String.fromCharCode(unboxChar(this.symbol));
  };
  Suit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Suit',
    interfaces: [Enum]
  };
  function Suit$values() {
    return [Suit$Spade_getInstance(), Suit$Club_getInstance(), Suit$Diamond_getInstance(), Suit$Heart_getInstance()];
  }
  Suit.values = Suit$values;
  function Suit$valueOf(name) {
    switch (name) {
      case 'Spade':
        return Suit$Spade_getInstance();
      case 'Club':
        return Suit$Club_getInstance();
      case 'Diamond':
        return Suit$Diamond_getInstance();
      case 'Heart':
        return Suit$Heart_getInstance();
      default:throwISE('No enum constant Suit.' + name);
    }
  }
  Suit.valueOf_61zpoe$ = Suit$valueOf;
  function Hand(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Hand_initFields() {
    Hand_initFields = function () {
    };
    Hand$StraightFlash_instance = new Hand('StraightFlash', 0);
    Hand$FourOfAKind_instance = new Hand('FourOfAKind', 1);
    Hand$HullHouse_instance = new Hand('HullHouse', 2);
    Hand$Flash_instance = new Hand('Flash', 3);
    Hand$Straight_instance = new Hand('Straight', 4);
    Hand$ThreeOfAKind_instance = new Hand('ThreeOfAKind', 5);
    Hand$TwoPair_instance = new Hand('TwoPair', 6);
    Hand$OnePair_instance = new Hand('OnePair', 7);
    Hand$HighCard_instance = new Hand('HighCard', 8);
  }
  var Hand$StraightFlash_instance;
  function Hand$StraightFlash_getInstance() {
    Hand_initFields();
    return Hand$StraightFlash_instance;
  }
  var Hand$FourOfAKind_instance;
  function Hand$FourOfAKind_getInstance() {
    Hand_initFields();
    return Hand$FourOfAKind_instance;
  }
  var Hand$HullHouse_instance;
  function Hand$HullHouse_getInstance() {
    Hand_initFields();
    return Hand$HullHouse_instance;
  }
  var Hand$Flash_instance;
  function Hand$Flash_getInstance() {
    Hand_initFields();
    return Hand$Flash_instance;
  }
  var Hand$Straight_instance;
  function Hand$Straight_getInstance() {
    Hand_initFields();
    return Hand$Straight_instance;
  }
  var Hand$ThreeOfAKind_instance;
  function Hand$ThreeOfAKind_getInstance() {
    Hand_initFields();
    return Hand$ThreeOfAKind_instance;
  }
  var Hand$TwoPair_instance;
  function Hand$TwoPair_getInstance() {
    Hand_initFields();
    return Hand$TwoPair_instance;
  }
  var Hand$OnePair_instance;
  function Hand$OnePair_getInstance() {
    Hand_initFields();
    return Hand$OnePair_instance;
  }
  var Hand$HighCard_instance;
  function Hand$HighCard_getInstance() {
    Hand_initFields();
    return Hand$HighCard_instance;
  }
  Hand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hand',
    interfaces: [Enum]
  };
  function Hand$values() {
    return [Hand$StraightFlash_getInstance(), Hand$FourOfAKind_getInstance(), Hand$HullHouse_getInstance(), Hand$Flash_getInstance(), Hand$Straight_getInstance(), Hand$ThreeOfAKind_getInstance(), Hand$TwoPair_getInstance(), Hand$OnePair_getInstance(), Hand$HighCard_getInstance()];
  }
  Hand.values = Hand$values;
  function Hand$valueOf(name) {
    switch (name) {
      case 'StraightFlash':
        return Hand$StraightFlash_getInstance();
      case 'FourOfAKind':
        return Hand$FourOfAKind_getInstance();
      case 'HullHouse':
        return Hand$HullHouse_getInstance();
      case 'Flash':
        return Hand$Flash_getInstance();
      case 'Straight':
        return Hand$Straight_getInstance();
      case 'ThreeOfAKind':
        return Hand$ThreeOfAKind_getInstance();
      case 'TwoPair':
        return Hand$TwoPair_getInstance();
      case 'OnePair':
        return Hand$OnePair_getInstance();
      case 'HighCard':
        return Hand$HighCard_getInstance();
      default:throwISE('No enum constant Hand.' + name);
    }
  }
  Hand.valueOf_61zpoe$ = Hand$valueOf;
  function Strength(hand, numbers, cards) {
    this.hand = hand;
    this.numbers = numbers;
    this.cards = cards;
  }
  Strength.prototype.compareTo_11rb$ = function (other) {
    var tmp$;
    if (this.hand !== other.hand)
      return -this.hand.compareTo_11rb$(other.hand) | 0;
    tmp$ = zip(this.numbers, other.numbers).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var a = tmp$_0.component1()
      , b = tmp$_0.component2();
      if (a !== b)
        return Kotlin.primitiveCompareTo(a.strength, b.strength);
    }
    return 0;
  };
  Strength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Strength',
    interfaces: [Comparable]
  };
  function Strength_init(hand, cards, numbers, $this) {
    $this = $this || Object.create(Strength.prototype);
    Strength.call($this, hand, toList(numbers), cards);
    return $this;
  }
  Strength.prototype.component1 = function () {
    return this.hand;
  };
  Strength.prototype.component2 = function () {
    return this.numbers;
  };
  Strength.prototype.component3 = function () {
    return this.cards;
  };
  Strength.prototype.copy_4lxvag$ = function (hand, numbers, cards) {
    return new Strength(hand === void 0 ? this.hand : hand, numbers === void 0 ? this.numbers : numbers, cards === void 0 ? this.cards : cards);
  };
  Strength.prototype.toString = function () {
    return 'Strength(hand=' + Kotlin.toString(this.hand) + (', numbers=' + Kotlin.toString(this.numbers)) + (', cards=' + Kotlin.toString(this.cards)) + ')';
  };
  Strength.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hand) | 0;
    result = result * 31 + Kotlin.hashCode(this.numbers) | 0;
    result = result * 31 + Kotlin.hashCode(this.cards) | 0;
    return result;
  };
  Strength.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hand, other.hand) && Kotlin.equals(this.numbers, other.numbers) && Kotlin.equals(this.cards, other.cards)))));
  };
  function straightFlash$lambda(it) {
    return it.size >= 5;
  }
  function straightFlash$lambda_0(it) {
    return straight(it);
  }
  function straightFlash(cards) {
    var tmp$;
    var keySelector = getPropertyCallableRef('suit', 1, function ($receiver) {
      return $receiver.suit;
    });
    var destination = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = cards.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var key = keySelector(element);
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    return (tmp$ = max(mapNotNull(filter(asSequence(destination.values), straightFlash$lambda), straightFlash$lambda_0))) != null ? tmp$.copy_4lxvag$(Hand$StraightFlash_getInstance()) : null;
  }
  function flash$lambda(it) {
    return it.size >= 5;
  }
  function flash$lambda$lambda(it) {
    return it.number.strength;
  }
  function flash$lambda_0(it) {
    return sortedWith(it, new Comparator$ObjectLiteral(compareBy$lambda(flash$lambda$lambda)));
  }
  function flash$lambda_1(it) {
    return takeLast(it, 5);
  }
  function flash(cards) {
    var tmp$;
    var tmp$_0;
    var keySelector = getPropertyCallableRef('suit', 1, function ($receiver) {
      return $receiver.suit;
    });
    var destination = LinkedHashMap_init();
    var tmp$_1;
    tmp$_1 = cards.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var key = keySelector(element);
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var $receiver = map(map(filter(asSequence(destination.values), flash$lambda), flash$lambda_0), flash$lambda_1);
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = last(maxElem).number.strength;
      do {
        var e = iterator.next();
        var v = last(e).number.strength;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    if ((tmp$ = maxBy$result) != null) {
      var tmp$_2 = Hand$Flash_getInstance();
      var transform = getPropertyCallableRef('number', 1, function ($receiver) {
        return $receiver.number;
      });
      var destination_0 = ArrayList_init(collectionSizeOrDefault(tmp$, 10));
      var tmp$_3;
      tmp$_3 = tmp$.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination_0.add_11rb$(transform(item));
      }
      tmp$_0 = new Strength(tmp$_2, destination_0, tmp$);
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  }
  function straight$lambda(it) {
    return it.number;
  }
  function straight$lambda_0(it) {
    var $receiver = zipWithNext(it);
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var a = element.component1()
        , b = element.component2();
        if (!(a.number.next() === b.number)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  }
  function straight(cards) {
    var tmp$;
    var $receiver = sortedWith(cards, new Comparator$ObjectLiteral(compareBy$lambda(straight$lambda)));
    var tmp$_0;
    var set = HashSet_init();
    var list = ArrayList_init_0();
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var e = tmp$_0.next();
      var key = e.number;
      if (set.add_11rb$(key))
        list.add_11rb$(e);
    }
    var $receiver_0 = filter(asSequence(windowed(plus(list, take(list, 1)), 5)), straight$lambda_0);
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = last(maxElem).number.strength;
      do {
        var e_0 = iterator.next();
        var v = last(e_0).number.strength;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e_0;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return (tmp$ = maxBy$result) != null ? Strength_init(Hand$Straight_getInstance(), tmp$, [last(tmp$).number]) : null;
  }
  function somePairs$lambda$lambda(it) {
    return last(it).number.strength;
  }
  function somePairs$lambda(it) {
    return it.number.strength;
  }
  function somePairs$lambda$lambda_0(it) {
    return last(it).number.strength;
  }
  function somePairs(cards) {
    var tmp$, tmp$_0, tmp$_1;
    var keySelector = getPropertyCallableRef('number', 1, function ($receiver) {
      return $receiver.number;
    });
    var destination = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = cards.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var key = keySelector(element);
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var $receiver = destination.values;
    var destination_0 = LinkedHashMap_init();
    var tmp$_3;
    tmp$_3 = $receiver.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      var key_0 = element_0.size;
      var tmp$_0_1;
      var value_0 = destination_0.get_11rb$(key_0);
      if (value_0 == null) {
        var answer_0 = ArrayList_init_0();
        destination_0.put_xwzc9p$(key_0, answer_0);
        tmp$_0_1 = answer_0;
      }
       else {
        tmp$_0_1 = value_0;
      }
      var list_0 = tmp$_0_1;
      list_0.add_11rb$(element_0);
    }
    var destination_1 = LinkedHashMap_init_0(mapCapacity(destination_0.size));
    var tmp$_4;
    tmp$_4 = destination_0.entries.iterator();
    while (tmp$_4.hasNext()) {
      var element_1 = tmp$_4.next();
      destination_1.put_xwzc9p$(element_1.key, sortedWith(element_1.value, new Comparator$ObjectLiteral(compareBy$lambda(somePairs$lambda$lambda))));
    }
    var pairMap = destination_1;
    var selector = getPropertyCallableRef('number', 1, function ($receiver) {
      return $receiver.number;
    });
    var tmp$_5;
    var set = HashSet_init();
    var list_1 = ArrayList_init_0();
    tmp$_5 = cards.iterator();
    while (tmp$_5.hasNext()) {
      var e = tmp$_5.next();
      var key_1 = selector(e);
      if (set.add_11rb$(key_1))
        list_1.add_11rb$(e);
    }
    var sortedUniq = sortedWith(list_1, new Comparator$ObjectLiteral(compareBy$lambda(somePairs$lambda)));
    if ((tmp$ = pairMap.get_11rb$(4)) != null) {
      var $receiver_0 = last(tmp$);
      var destination_2 = ArrayList_init_0();
      var tmp$_6;
      tmp$_6 = sortedUniq.iterator();
      while (tmp$_6.hasNext()) {
        var element_2 = tmp$_6.next();
        if (!(element_2.number === last($receiver_0).number))
          destination_2.add_11rb$(element_2);
      }
      var more = last(destination_2);
      return new Strength(Hand$FourOfAKind_getInstance(), listOf([last($receiver_0).number, more.number]), plus_0($receiver_0, more));
    }
    if ((tmp$_0 = pairMap.get_11rb$(3)) != null) {
      var trio = last(tmp$_0);
      var tmp$_7 = dropLast(tmp$_0, 1);
      var $receiver_1 = pairMap.get_11rb$(2);
      var forCheckFullHouse = plus(tmp$_7, $receiver_1 != null ? $receiver_1 : emptyList());
      if (!forCheckFullHouse.isEmpty()) {
        var pair = last(sortedWith(forCheckFullHouse, new Comparator$ObjectLiteral(compareBy$lambda(somePairs$lambda$lambda_0))));
        return new Strength(Hand$HullHouse_getInstance(), listOf([last(trio).number, last(pair).number]), plus(trio, take(pair, 2)));
      }
       else {
        var destination_3 = ArrayList_init_0();
        var tmp$_8;
        tmp$_8 = sortedUniq.iterator();
        while (tmp$_8.hasNext()) {
          var element_3 = tmp$_8.next();
          if (!(element_3.number === last(trio).number))
            destination_3.add_11rb$(element_3);
        }
        var more_0 = reversed(takeLast(destination_3, 2));
        var tmp$_9 = Hand$ThreeOfAKind_getInstance();
        var tmp$_10 = listOf_0(last(trio).number);
        var destination_4 = ArrayList_init(collectionSizeOrDefault(more_0, 10));
        var tmp$_11;
        tmp$_11 = more_0.iterator();
        while (tmp$_11.hasNext()) {
          var item = tmp$_11.next();
          destination_4.add_11rb$(item.number);
        }
        return new Strength(tmp$_9, plus(tmp$_10, destination_4), plus(trio, more_0));
      }
    }
    if ((tmp$_1 = pairMap.get_11rb$(2)) != null) {
      var pair_0 = last(tmp$_1);
      if (tmp$_1.size >= 2) {
        var pair2 = first(takeLast(tmp$_1, 2));
        var destination_5 = ArrayList_init_0();
        var tmp$_12;
        tmp$_12 = sortedUniq.iterator();
        while (tmp$_12.hasNext()) {
          var element_4 = tmp$_12.next();
          if (!(element_4.number === last(pair_0).number || element_4.number === last(pair2).number))
            destination_5.add_11rb$(element_4);
        }
        var more_1 = last(destination_5);
        return new Strength(Hand$TwoPair_getInstance(), listOf([last(pair_0).number, last(pair2).number, more_1.number]), plus_0(plus(pair_0, pair2), more_1));
      }
       else {
        var destination_6 = ArrayList_init_0();
        var tmp$_13;
        tmp$_13 = sortedUniq.iterator();
        while (tmp$_13.hasNext()) {
          var element_5 = tmp$_13.next();
          if (!(element_5.number === last(pair_0).number))
            destination_6.add_11rb$(element_5);
        }
        var more_2 = reversed(takeLast(destination_6, 3));
        var tmp$_14 = Hand$OnePair_getInstance();
        var tmp$_15 = listOf_0(last(pair_0).number);
        var destination_7 = ArrayList_init(collectionSizeOrDefault(more_2, 10));
        var tmp$_16;
        tmp$_16 = more_2.iterator();
        while (tmp$_16.hasNext()) {
          var item_0 = tmp$_16.next();
          destination_7.add_11rb$(item_0.number);
        }
        return new Strength(tmp$_14, plus(tmp$_15, destination_7), plus(pair_0, more_2));
      }
    }
    return null;
  }
  var handFunctions;
  function checkHand$lambda$lambda(it) {
    return it.number.strength;
  }
  function checkHand(cards) {
    var tmp$;
    var tmp$_0;
    var $receiver = handFunctions;
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = element(cards)) != null) {
        destination.add_11rb$(tmp$_0_0);
      }
    }
    var $receiver_0 = sorted(destination);
    println($receiver_0);
    if ((tmp$ = lastOrNull($receiver_0)) != null)
      tmp$_0 = tmp$;
    else {
      var sorted_0 = take(sortedWith(cards, new Comparator$ObjectLiteral_0(compareByDescending$lambda(checkHand$lambda$lambda))), 5);
      var tmp$_2 = Hand$HighCard_getInstance();
      var destination_0 = ArrayList_init(collectionSizeOrDefault(sorted_0, 10));
      var tmp$_3;
      tmp$_3 = sorted_0.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination_0.add_11rb$(item.number);
      }
      var $receiver_1 = new Strength(tmp$_2, destination_0, sorted_0);
      tmp$_0 = $receiver_1.cards.size === 5 ? $receiver_1 : null;
    }
    return tmp$_0;
  }
  _.main = main;
  _.makeCardElement_eznxr6$ = makeCardElement;
  _.test_61zpoe$ = test;
  _.test_4un41x$ = test_0;
  Object.defineProperty(CardNumber, 'Ace', {
    get: CardNumber$Ace_getInstance
  });
  Object.defineProperty(CardNumber, 'Two', {
    get: CardNumber$Two_getInstance
  });
  Object.defineProperty(CardNumber, 'Three', {
    get: CardNumber$Three_getInstance
  });
  Object.defineProperty(CardNumber, 'Four', {
    get: CardNumber$Four_getInstance
  });
  Object.defineProperty(CardNumber, 'Five', {
    get: CardNumber$Five_getInstance
  });
  Object.defineProperty(CardNumber, 'Six', {
    get: CardNumber$Six_getInstance
  });
  Object.defineProperty(CardNumber, 'Seven', {
    get: CardNumber$Seven_getInstance
  });
  Object.defineProperty(CardNumber, 'Eight', {
    get: CardNumber$Eight_getInstance
  });
  Object.defineProperty(CardNumber, 'Nine', {
    get: CardNumber$Nine_getInstance
  });
  Object.defineProperty(CardNumber, 'Ten', {
    get: CardNumber$Ten_getInstance
  });
  Object.defineProperty(CardNumber, 'Jack', {
    get: CardNumber$Jack_getInstance
  });
  Object.defineProperty(CardNumber, 'Queen', {
    get: CardNumber$Queen_getInstance
  });
  Object.defineProperty(CardNumber, 'King', {
    get: CardNumber$King_getInstance
  });
  Object.defineProperty(CardNumber, 'Companion', {
    get: CardNumber$Companion_getInstance
  });
  _.CardNumber = CardNumber;
  Object.defineProperty(Card, 'Companion', {
    get: Card$Companion_getInstance
  });
  _.Card = Card;
  Object.defineProperty(Suit, 'Spade', {
    get: Suit$Spade_getInstance
  });
  Object.defineProperty(Suit, 'Club', {
    get: Suit$Club_getInstance
  });
  Object.defineProperty(Suit, 'Diamond', {
    get: Suit$Diamond_getInstance
  });
  Object.defineProperty(Suit, 'Heart', {
    get: Suit$Heart_getInstance
  });
  _.Suit = Suit;
  Object.defineProperty(Hand, 'StraightFlash', {
    get: Hand$StraightFlash_getInstance
  });
  Object.defineProperty(Hand, 'FourOfAKind', {
    get: Hand$FourOfAKind_getInstance
  });
  Object.defineProperty(Hand, 'HullHouse', {
    get: Hand$HullHouse_getInstance
  });
  Object.defineProperty(Hand, 'Flash', {
    get: Hand$Flash_getInstance
  });
  Object.defineProperty(Hand, 'Straight', {
    get: Hand$Straight_getInstance
  });
  Object.defineProperty(Hand, 'ThreeOfAKind', {
    get: Hand$ThreeOfAKind_getInstance
  });
  Object.defineProperty(Hand, 'TwoPair', {
    get: Hand$TwoPair_getInstance
  });
  Object.defineProperty(Hand, 'OnePair', {
    get: Hand$OnePair_getInstance
  });
  Object.defineProperty(Hand, 'HighCard', {
    get: Hand$HighCard_getInstance
  });
  _.Hand = Hand;
  _.Strength_init_tk0lkk$ = Strength_init;
  _.Strength = Strength;
  _.straightFlash_4un41x$ = straightFlash;
  _.flash_4un41x$ = flash;
  _.straight_4un41x$ = straight;
  _.somePairs_4un41x$ = somePairs;
  Object.defineProperty(_, 'handFunctions', {
    get: function () {
      return handFunctions;
    }
  });
  _.checkHand_4un41x$ = checkHand;
  handFunctions = listOf([getCallableRef('straightFlash', function (cards) {
    return straightFlash(cards);
  }), getCallableRef('flash', function (cards) {
    return flash(cards);
  }), getCallableRef('straight', function (cards) {
    return straight(cards);
  }), getCallableRef('somePairs', function (cards) {
    return somePairs(cards);
  })]);
  main();
  Kotlin.defineModule('poker', _);
  return _;
}));

//# sourceMappingURL=poker.js.map
