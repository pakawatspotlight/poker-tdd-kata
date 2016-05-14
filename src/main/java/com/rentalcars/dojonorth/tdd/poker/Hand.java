package com.rentalcars.dojonorth.tdd.poker;

import com.sun.javafx.collections.UnmodifiableListSet;

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
        Set set = null;
        int noOfTypes = 0;
        Map handMap = new HashMap<String, Integer>();

        // Creates a map e.g.
        // 2, 2
        // 3, 1
        // 4, 0
        for (String card : cards) {
            String type = card.substring(0, 1);
            Integer currentTypeCount = (Integer) handMap.get(type);
            if (currentTypeCount == null) {
                currentTypeCount = 0;
            }
            currentTypeCount = currentTypeCount + 1;
            handMap.put(type, currentTypeCount);
        }

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

        Iterator<Set> handsIter = hands.iterator();
        Set bestHand = Set.NOTHING;
        while (handsIter.hasNext()) {
            bestHand = handsIter.next();
        }

        return bestHand;
    }
}


