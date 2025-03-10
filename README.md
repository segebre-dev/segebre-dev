Welcome

Consistency is key.

Things I care about and can be found here?

- Testing
- git hooks
- Typing
- Consistency
- lint css
- lint project structure

# code

Code is under `src`

styles.module.css
styles.module.css.d.ts

# How to navigate the project

Every folder is meant to be self contained.
Things are as close to their usage as possible (containerizing everything).
\_ means private, there should never be a page exposed under it, no matter the depth.
Styles are done using CSS modules, no need for more than that, full control, reusable styles, typed to avoid lingering, using theme, minimum amount of CSS possible, every line has a meaning.
Tests are self documenting, the output is meant to be read and understood without the need to see the test, the output should describe the unit being tested and its expected behaviour
A11y is taken into consideration and treated as a first class citizen, every part of the site should/is a11y. If you find a place where it is not, please open an issue.
SEO is put in place and practice, website is very small, but googling my name should make it appear as a first result.
There are a few constrains put in place, I believe scalability is only achievable through measured constraint. The whole site is fully modifiable and everything is changeable, but it is setup so only what should be changed can be changed. It is a personal project, but after 6 months the author is expected to be a "new joiner" in the project. Because of this, and trying to make it accessible to anyone, I setup and follow standards through constraint.
