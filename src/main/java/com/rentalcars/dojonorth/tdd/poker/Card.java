package com.rentalcars.dojonorth.tdd.poker;

/**
 * Created by jamesmurphy on 21/05/2016.
 */
public class Card {

    private final Type type;
    private final Suit suit;

    public Card (Type type, Suit suit) {
        this.type = type;
        this.suit = suit;
    }

    public Type getType() {
        return type;
    }

    enum Type {
        ONE(1),
        TWO(2),
        THREE(3),
        FOUR(4),
        FIVE(5),
        SIX(6),
        SEVEN(7),
        EIGHT(8),
        NINE(9),
        TEN(10),
        JACK(11),
        QUEEN(12),
        KING(13),
        ACE(14);

        private final Integer priority;

        Type(Integer priority) {
            this.priority = priority;
        }
    }

    enum Suit {
        DIAMOND, SPADES, CLUBS, HEART;
    }
}
