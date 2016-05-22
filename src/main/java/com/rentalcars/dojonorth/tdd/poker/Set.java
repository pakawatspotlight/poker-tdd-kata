package com.rentalcars.dojonorth.tdd.poker;

import java.util.List;

public class Set {

    private List<Card> cards;
    private Type type;

    public Set(Type type, List<Card> cards) {
        this.type = type;
        this.cards = cards;
    }

    public List<Card> getCards() {
        return cards;
    }

    public Type getType() {
        return type;
    }

    public void setType(final Type type) {
        this.type = type;
    }

    public enum Type {
        NOTHING(0), PAIR(1), THREE_OF_A_KIND(2), FOUR_OF_A_KIND(3), FULL_HOUSE(4), HIGH_CARD(5);

        private final int priority;

        Type(int priority) {
            this.priority = priority;
        }

        public boolean isHigherThan(Type otherSet) {
            return this.priority > otherSet.priority;
        }
    }
}
