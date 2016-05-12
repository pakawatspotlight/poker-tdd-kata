package com.rentalcars.dojonorth.tdd.poker;

import java.util.List;

import static com.rentalcars.dojonorth.tdd.poker.Set.PAIR;

/**
 * Created by jamesmurphy on 12/05/2016.
 */
public class Hand {
    private final List<String> cards;

    public Hand(List<String> cards) {
        this.cards = cards;
    }

    public Set evaluate() {
        return PAIR;
    }
}
