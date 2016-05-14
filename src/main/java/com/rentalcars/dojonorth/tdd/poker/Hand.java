package com.rentalcars.dojonorth.tdd.poker;

import java.util.*;

import static com.rentalcars.dojonorth.tdd.poker.Set.PAIR;
import static com.rentalcars.dojonorth.tdd.poker.Set.THREE_OF_A_KIND;

/**
 * Created by jamesmurphy on 12/05/2016.
 */
public class Hand {
    private final List<String> cards;

    public Hand(List<String> cards) {
        this.cards = cards;
    }

    public Set evaluateBestHand() {
        Map handMap = mapOfHand();
        java.util.Set<Set> hands = evaluateSetsInHand(handMap);
        return evaluateBestHand(hands);
    }

    private Map mapOfHand() {
        Map handMap = new HashMap<String, Integer>();
        for (String card : cards) {
            String type = card.substring(0, 1);
            Integer currentTypeCount = (Integer) handMap.get(type);
            if (currentTypeCount == null) {
                currentTypeCount = 0;
            }
            currentTypeCount = currentTypeCount + 1;
            handMap.put(type, currentTypeCount);
        }
        return handMap;
    }

    private Set evaluateBestHand(java.util.Set<Set> hands) {
        Iterator<Set> handsIter = hands.iterator();
        Set bestHand = Set.NOTHING;
        while (handsIter.hasNext()) {
            bestHand = handsIter.next();
        }
        return bestHand;
    }

    private java.util.Set<Set> evaluateSetsInHand(Map handMap) {
        Iterator<String> handMapIter = handMap.keySet().iterator();
        java.util.Set<Set> hands = new LinkedHashSet<Set>();
        while (handMapIter.hasNext()) {
            String type = handMapIter.next();
            if ((Integer) handMap.get(type) == 2) {
                hands.add(PAIR);
            }
            if ((Integer) handMap.get(type) == 3) {
                hands.add(THREE_OF_A_KIND);
            }
        }
        return hands;
    }
}


