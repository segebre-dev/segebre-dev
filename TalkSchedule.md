Tried to adhere best practices
Some considerations:

- I'm really bad with designs
- CSS is an interestingly loose concern
- most people who interact with CSS hate it 😅
- CSS has a lot of solutions/approaches (pre-processors, libraries, etc)
  _"Scalability through limitation"_
- create CSS variables that define my "design system"
- autocompletion through tooling (CSS Variable Autocomplete)
- constriction through tooling (stylelintrc)
- Error avoidance through typing
- keep it clean before you commit/push

Why do you do all this if you are working alone?

You might hate it, but... consistency is kept.

Thoughts?

- Seeing this approach, who feels curious to the idea of "scalability through limitation"?
- Who believes this is horrible and should never be shown again?

Next steps:

- GitHub actions
- better documentation
- Improve DX

Other mentioned thoughts:

- every single line of CSS has a meaning, remove something and you get an immediate effect. CSS is as simple as possible, it should be completely understood of what it does by simply reading it.
- CSS attributes/properties get also linted and reordered through tools.
