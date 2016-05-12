package com.rentalcars.dojonorth.tdd.poker;

import com.rentalcars.dojonorth.tdd.poker.Hand;
import org.junit.Test;

import java.util.Arrays;

import static com.rentalcars.dojonorth.tdd.poker.Set.PAIR;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class PokerGameTest {

    @Test
    public void handTypeIsAPair() throws Exception {
        Hand hand = new Hand(Arrays.asList("2H", "2D", "3H", "4H", "5S"));
        assertThat(hand.evaluate(), is(PAIR));
    }
}
