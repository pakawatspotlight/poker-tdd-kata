package com.rentalcars.dojonorth.tdd.poker;

import org.junit.Test;

import java.util.Arrays;

import static com.rentalcars.dojonorth.tdd.poker.Card.Suit.*;
import static com.rentalcars.dojonorth.tdd.poker.Card.Type.*;
import static com.rentalcars.dojonorth.tdd.poker.Set.Type.*;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

public class PokerGameTest {

    @Test
    public void aPair() throws Exception {
        Hand hand = new Hand(Arrays.asList(
                new Card(TWO, HEART),
                new Card(TWO, DIAMOND),
                new Card(THREE, HEART),
                new Card(FOUR, HEART),
                new Card(FIVE, SPADES)));
        assertThat(hand.evaluateBestHand().getType(), is(PAIR));
    }
    
    @Test
    public void threeOfAKind() throws Exception {
        Hand hand = new Hand(Arrays.asList(
                new Card(TWO, HEART),
                new Card(TWO, DIAMOND),
                new Card(TWO, CLUBS),
                new Card(THREE, DIAMOND),
                new Card(FOUR, HEART)));
        assertThat(hand.evaluateBestHand().getType(), is(THREE_OF_A_KIND));
    }

    @Test
    public void fourOfAKind() throws Exception {
        Hand hand = new Hand(Arrays.asList(
                new Card(KING, HEART),
                new Card(KING, SPADES),
                new Card(KING, CLUBS),
                new Card(KING, DIAMOND),
                new Card(QUEEN, SPADES)));
        assertThat(hand.evaluateBestHand().getType(), is(FOUR_OF_A_KIND));
    }

    @Test
    public void fullHouse() throws Exception {
        Hand hand = new Hand(Arrays.asList(
                new Card(KING, HEART),
                new Card(KING, SPADES),
                new Card(KING, CLUBS),
                new Card(JACK, HEART),
                new Card(JACK, DIAMOND)));
        assertThat(hand.evaluateBestHand().getType(), is(FULL_HOUSE));
    }

    @Test
    public void highCard() throws Exception {
        Hand hand = new Hand(Arrays.asList(
                new Card(TWO, HEART),
                new Card(FOUR, DIAMOND),
                new Card(SIX, SPADES),
                new Card(SEVEN, CLUBS),
                new Card(JACK, HEART)));
        Set bestHand = hand.evaluateBestHand();
        assertThat(bestHand.getType(), is(HIGH_CARD));
        Card bestCard = bestHand.getCards().get(0);
        assertThat(bestCard.getType(), is(JACK));
        assertThat(bestCard.getSuit(), is(HEART));
    }
}
