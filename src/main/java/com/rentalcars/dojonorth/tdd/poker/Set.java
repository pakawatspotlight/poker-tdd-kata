package com.rentalcars.dojonorth.tdd.poker;

public enum Set {
    PAIR(1), THREE_OF_A_KIND(2);

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
