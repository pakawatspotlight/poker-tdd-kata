package com.rentalcars.dojonorth.tdd.poker;

import java.awt.*;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Map;

import static com.rentalcars.dojonorth.tdd.poker.Set.FOUR_OF_A_KIND;
import static com.rentalcars.dojonorth.tdd.poker.Set.PAIR;
import static com.rentalcars.dojonorth.tdd.poker.Set.THREE_OF_A_KIND;

public class Hands {

    private java.util.Set<Set> hands = new LinkedHashSet<Set>();

    public java.util.Set<Set> evaluateSets(Map handMap) {
        Iterator<String> handMapIter = handMap.keySet().iterator();
        while (handMapIter.hasNext()) {
            String type = handMapIter.next();
            if ((Integer) handMap.get(type) == 2) {
                hands.add(PAIR);
            }
            if ((Integer) handMap.get(type) == 4) {
                hands.add(FOUR_OF_A_KIND);
            }
            if ((Integer) handMap.get(type) == 3) {
                hands.add(THREE_OF_A_KIND);
            }

        }
        return hands;
    }
}
