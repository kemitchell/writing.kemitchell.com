## Algorithm

1.  E ← ε, M′ ← M

2.  Visit the nodes of T₂ in breadth-first order (this traversal combines the update, insert, align, and move phases):

    1.  Let x be the current node in the breadth-first search of T₂ and let y = p(x).  Let z be the partner of y in M′.

    2.  If x has no partner in M′:

        1.  k ← FindPos(x).

        2.  Append INS(w, x) to M′ and apply INS((w, a, v(x)), z, k) to T₁.

    3.  Else if x is not a root (x has a partner in M):

        1.  Let w be the partner of x in M′, and let v = p(w) in T₁.

        2.  If v(w) ≠ v(x):

            1.  Append UPD(w, v(x)) to E.

            2.  Apply UPD(w, v(x)) to T₁.

        3.  If (y, v) ∉ M₁:

            1.  Let z be the partner of y in M₁.

            2.  k ← FindPos(x).

            3.  Append MOV(w, z, k) to E.

            3.  Apply MOV(w, z, k) to T₁.

        4.  AlignChildren(w, x).

3.  Do a post-order traversal of T₁. (This is the delete phase.)

    1.  Let w be the current node in the post-order traversal of T₁.

    2.  If w has no partner in M′ then append DEL(w) to E and apply DEL(w) to T₁.

4.  E is a minimum cost edit script.

    M′ is a total matching.

    T₁ is isomorphic to T₂.

## Function AlignChildren(w, x)

1.  Mark all children of w and all children of x "out of order."

2.  Let S₁ be the sequence of children of w whose partners are children of x and let S2 be the sequence of children of x whose partners are children of w.

3.  Define the function equal(a, b) to be true if and only if (a, b) ∈ M′.

4.  Let S ← LCS(S1, S2, equal).

5.  For each (a, b) ∈ S, mark nodes a and b "in order."

6.  For each a ∈ S₁, b ∈ S₂ such that (a, b) ∈ M but (a, b) ∉ S:

    1.  k ← FindPos(b).

    2.  Append MOV(a, w, k) to E and apply MOV(a, w, k) to T₁.

    3.  Mark a and b "in order."

## Function FindPos(x)

1.  Let y = p(x) in T₂ and let w be the partner of x (x ∈ T₁).

2.  If x is the leftmost child of y that is marked "in order," return 1.

3.  Find v ∈ T₂ where v is the rightmost sibling of x that is to the left of x and is marked "in order."

4.  Let u be the partner of v in T₁.

5.  Suppose u is the ith child of its parent (counting from left to right) that is marked "in order."  Return i + 1.

## Algorithm FastMatch

1.  M ← φ

2.  For each leaf label l do:

    1.  S₁ ← chainT₁(l).

    2.  S₂ ← chainT₂(l).

    3.  lcs ← LCS(S1, S2, equal).

    4.  For each pair of nodes (x, y) ∈ lcs, add (x, y) to M.

    5.  Pair unmatched nodes with label l as in Algorithm Match, adding matches to M.

3.  Repeat steps 2.1 through 2.5 for each internal node label l.

## Algorithm Match

1.  M ← φ

2.  Mark all nodes of T₁ and T₂ "unmatched."

3.  Proceed bottom-up on tree T₁.

    For each unmatched node x ∈ T₁l, if there is an unmatched node y ∈ T₂ such that equal(x, y) then:

    1.  Add (x, y) to M.

    2.  Mark x and y "matched."
