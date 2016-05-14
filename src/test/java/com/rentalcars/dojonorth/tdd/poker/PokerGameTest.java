package com.rentalcars.dojonorth.tdd.poker;

import org.junit.Test;

import java.util.Arrays;

import static com.rentalcars.dojonorth.tdd.poker.Set.*;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class PokerGameTest {

    @Test
    public void twoTwosIsAPair() throws Exception {
        Hand hand = new Hand(Arrays.asList("2H", "2D", "3H", "4H", "5S"));
        assertThat(hand.evaluateBestHand(), is(PAIR));
    }
    
    @Test
    public void threeTwosIsThreeOfAKind() throws Exception {
        Hand hand = new Hand(Arrays.asList("2H", "2D", "2C", "3D", "4H"));
        assertThat(hand.evaluateBestHand(), is(THREE_OF_A_KIND));
    }
}
