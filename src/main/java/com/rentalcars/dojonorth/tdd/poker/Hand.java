package com.rentalcars.dojonorth.tdd.poker;

import com.rentalcars.dojonorth.tdd.poker.Set.Type;

import java.util.*;

import static com.rentalcars.dojonorth.tdd.poker.Set.Type.*;

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

    public List<String> getCards() {
        return cards;
    }

    public Set evaluateBestHand() {
        Map<String, ArrayList<String>> handMap = mapOfHand();
        java.util.Set<Set> potentialHands = hands.evaluateSets(handMap);
        return evaluateBestHand(potentialHands);
    }

    private Map<String, ArrayList<String>> mapOfHand() {
        Map handMap = new HashMap<String, Integer>();
        for (String card : cards) {
            String type = card.substring(0, 1);
            if (handMap.containsKey(type)) {
                final List<String> cardsForType = new ArrayList<String>((List<String>) handMap.get(type));
                cardsForType.add(card);
                handMap.put(type, cardsForType);
            } else {
                handMap.put(type, Arrays.asList(card));
            }
        }
        return handMap;
    }

    private Set evaluateBestHand(final java.util.Set<Set> hands) {
        Iterator<Set> handsIter = hands.iterator();
        Type bestHandType = HIGH_CARD;

        boolean handHasPair = false,
                handHasThreeOfAKind = false;
        while (handsIter.hasNext()) {
            Set currentHand = handsIter.next();
            bestHandType = currentHand.getType();
            if (currentHand.getType().equals(PAIR)) {
                handHasPair = true;
            } else if (currentHand.getType().equals(THREE_OF_A_KIND)) {
                handHasThreeOfAKind = true;
            }
        }

        if (handHasPair && handHasThreeOfAKind) {
            return new Set(FULL_HOUSE, cards);
        }


        return new Set(bestHandType, cards);
    }
}


