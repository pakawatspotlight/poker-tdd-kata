package com.rentalcars.dojonorth.tdd.poker;

public enum Set {
    NOTHING(0), PAIR(1), THREE_OF_A_KIND(2), FOUR_OF_A_KIND(3), FULL_HOUSE(4);

    private final int priority;

    Set(int priority) {
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }

    public boolean isHigherThan(Set otherSet) {
        return this.priority > otherSet.priority;
    }
}
