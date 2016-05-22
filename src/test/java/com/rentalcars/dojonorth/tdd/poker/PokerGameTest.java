package com.rentalcars.dojonorth.tdd.poker;

import org.junit.Test;

import java.util.Arrays;

import static com.rentalcars.dojonorth.tdd.poker.Set.Type.*;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class PokerGameTest {

    @Test
    public void aPair() throws Exception {
        Hand hand = new Hand(Arrays.asList("2H", "2D", "3H", "4H", "5S"));
        assertThat(hand.evaluateBestHand().getType(), is(PAIR));
    }
    
    @Test
    public void threeOfAKind() throws Exception {
        Hand hand = new Hand(Arrays.asList("2H", "2D", "2C", "3D", "4H"));
        assertThat(hand.evaluateBestHand().getType(), is(THREE_OF_A_KIND));
    }

    @Test
    public void fourOfAKind() throws Exception {
        Hand hand = new Hand(Arrays.asList("KH", "KS", "KC", "KD", "QS"));
        assertThat(hand.evaluateBestHand().getType(), is(FOUR_OF_A_KIND));
    }

    @Test
    public void fullHouse() throws Exception {
        Hand hand = new Hand(Arrays.asList("KH", "KS", "KC", "JH", "JD"));
        assertThat(hand.evaluateBestHand().getType(), is(FULL_HOUSE));
    }

//    @Test
//    public void highCard() throws Exception {
//        Hand hand = new Hand(Arrays.asList("2H", "4D", "6S", "7C", "JH"));
//        Set bestHand = hand.evaluateBestHand();
//        assertThat(bestHand, is(HIGH_CARD));
//        Card bestCard = bestHand.getCards().get(0);
//        assertEquals(bestCard.getType(), is());
//    }
}
