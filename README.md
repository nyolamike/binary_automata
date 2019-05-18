# binary_automata
experiments with binary states (10) using an automata approach to study expansion and reversal of states through lifetimes

The inspiration is drawn from conwells game of life, but instead of us using squares we use bits 1s and 0s.


We begin by setting rules of how things operate
1.we compute a binary string (state) from left to right taking in as input two neighbouring bits
on an advanced stage, we can have variations of this this rule e.g diffrent ways of how to choose
what to process and the direction taken
2.A set of rules can be defined that actually do the transformation.
01 === 010
11 === 101
10 === 110
00 === 11
1  === 10
0  === 1
3.a day is when the entire string has been fully processed
4.there needs to be a seed before life begins.
5.at an advanced level, we could have agregators, which sort of go through the staged state, apply some rules
make changes to the raw state before finally producing the finall state.
6.also other variations can be created that have the set of rules not being static but changing as days passby

7.If size is 3 then define all rules that govern 3,2,1 combinations