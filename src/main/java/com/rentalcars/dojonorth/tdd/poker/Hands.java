package com.rentalcars.dojonorth.tdd.poker;

import java.util.*;

import static com.rentalcars.dojonorth.tdd.poker.Set.Type.*;

public class Hands {

    private java.util.Set<Set> hands = new LinkedHashSet<Set>();

    public java.util.Set<Set> evaluateSets(Map<Card.Type, ArrayList<Card>> handMap) {
        Iterator<Card.Type> handMapIter = handMap.keySet().iterator();
        while (handMapIter.hasNext()) {
            Card.Type type = handMapIter.next();
            if (((List<Card>) handMap.get(type)).size() == 2) {
                hands.add(new Set(PAIR, handMap.get(type)));
            }
            if (((List<Card>) handMap.get(type)).size() == 4) {
                hands.add(new Set(FOUR_OF_A_KIND, handMap.get(type)));
            }
            if (((List<Card>) handMap.get(type)).size() == 3) {
                hands.add(new Set(THREE_OF_A_KIND, handMap.get(type)));
            }

        }
        return hands;
    }
}
