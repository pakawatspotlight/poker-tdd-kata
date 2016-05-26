package com.rentalcars.dojonorth.tdd.poker;

import com.rentalcars.dojonorth.tdd.poker.Set.Type;

import java.util.*;

import static com.rentalcars.dojonorth.tdd.poker.Set.Type.*;

/**
 * Created by jamesmurphy on 12/05/2016.
 */
public class Hand {
    private List<Card> cards = new ArrayList<Card>();

    private Hands hands;

    public Hand(final List<Card> cards) {
        hands = new Hands();
        this.cards = cards;
    }

    public List<Card> getCards() {
        return cards;
    }

    public Set evaluateBestHand() {
        Map<Card.Type, List<Card>> handMap = mapOfHand();
        java.util.Set<Set> potentialHands = hands.evaluateSets(handMap);
        return evaluateBestHand(potentialHands);
    }

    private Map<Card.Type, List<Card>> mapOfHand() {
        Map handMap = new HashMap<String, Integer>();
        for (Card card : cards) {
            Card.Type type = card.getType();
            if (handMap.containsKey(type)) {
                final List<Card> cardsForType = new ArrayList<Card>((List<Card>) handMap.get(type));
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
                handHasThreeOfAKind = false,
                handHasFourOfAKind = false;
        while (handsIter.hasNext()) {
            Set currentHand = handsIter.next();
            if (currentHand.getType().equals(PAIR)) {
                handHasPair = true;
                bestHandType = PAIR;
            } else if (currentHand.getType().equals(THREE_OF_A_KIND)) {
                handHasThreeOfAKind = true;
                bestHandType = THREE_OF_A_KIND;
            } else if (currentHand.getType().equals(FOUR_OF_A_KIND)) {
                handHasFourOfAKind = true;
                bestHandType = FOUR_OF_A_KIND;
            }
        }

        if (isFullHouse(handHasPair, handHasThreeOfAKind)) {
            return new Set(FULL_HOUSE, cards);
        }

        if (!(handHasPair || handHasThreeOfAKind || handHasFourOfAKind)) {
            Iterator<Set> highCardIter = hands.iterator();
            Card highCard = null;
            while (highCardIter.hasNext()) {
                Set currentHighCardSet = highCardIter.next();
                for (Card card: cards) {
                    if (card.getType().isHigherPriority(highCard)) {
                        highCard = card;
                    }
                }
                return new Set(HIGH_CARD, Arrays.asList(highCard));
            }
        }

        return new Set(bestHandType, cards);
    }

    private boolean isFullHouse(boolean handHasPair, boolean handHasThreeOfAKind) {
        return handHasPair && handHasThreeOfAKind;
    }
}


