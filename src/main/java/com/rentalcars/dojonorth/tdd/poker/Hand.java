package com.rentalcars.dojonorth.tdd.poker;

import java.util.*;

import static com.rentalcars.dojonorth.tdd.poker.Set.FOUR_OF_A_KIND;
import static com.rentalcars.dojonorth.tdd.poker.Set.PAIR;
import static com.rentalcars.dojonorth.tdd.poker.Set.THREE_OF_A_KIND;

/**
 * Created by jamesmurphy on 12/05/2016.
 */
public class Hand {
    private List<String> cards = new ArrayList<String>();

    private Hands hands;

    public Hand(final List<String> cards) {
        hands = new Hands();
        this.cards = cards;
    }

    public Set evaluateBestHand() {
        Map handMap = mapOfHand();
        java.util.Set<Set> potentialHands = hands.evaluateSets(handMap);
        return evaluateBestHand(potentialHands);
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

    private Set evaluateBestHand(final java.util.Set<Set> hands) {
        Iterator<Set> handsIter = hands.iterator();
        Set bestHand = Set.NOTHING;

        boolean handHasPair = false,
                handHasThreeOfAKind = false;
        while (handsIter.hasNext()) {
            Set currentHand = handsIter.next();
            bestHand = currentHand;
            if (currentHand.equals(PAIR)) {
                handHasPair = true;
            } else if (currentHand.equals(THREE_OF_A_KIND)) {
                handHasThreeOfAKind = true;
            }
        }

        if (handHasPair && handHasThreeOfAKind) {
            return Set.FULL_HOUSE;
        }

        return bestHand;
    }
}


