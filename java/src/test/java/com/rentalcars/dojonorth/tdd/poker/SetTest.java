package com.rentalcars.dojonorth.tdd.poker;

import static com.rentalcars.dojonorth.tdd.poker.Set.Type.PAIR;
import static com.rentalcars.dojonorth.tdd.poker.Set.Type.THREE_OF_A_KIND;
import static org.junit.Assert.assertFalse;

import org.junit.Test;

/**
 * Created by jamesmurphy on 13/05/2016.
 */
public class SetTest {

    @Test
    public void threeOfAKindIsHigherThanAPair() throws Exception {
        assertFalse(PAIR.isHigherThan(THREE_OF_A_KIND));
    }
}
